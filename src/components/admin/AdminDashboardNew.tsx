import { useState, useEffect } from 'react';
import { Inbox, Calendar, Award, Search, BarChart2, PieChart, TrendingUp, Download } from 'lucide-react';
import * as XLSX from 'xlsx';
import { toast } from '../../hooks/use-toast';

interface AdminDashboardNewProps {
  onLogout: () => void;
}

// Simple interface for contact submissions
interface ContactSubmission {
  id?: string;
  name?: string;
  email?: string;
  phone?: string | null;
  message?: string;
  interests?: string | null;
  created_at?: string;
}

const AdminDashboardNew = ({ onLogout }: AdminDashboardNewProps) => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('submissions'); // 'submissions' or 'analysis'
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    recentSubmissions: 0,
    topProgram: {
      name: '',
      count: 0
    }
  });

  // Fetch data on component mount
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Supabase direct connection details
        const SUPABASE_URL = 'https://xqmujsdspymsacjzhoyh.supabase.co';
        const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbXVqc2RzcHltc2Fjanpob3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNTQ5NDUsImV4cCI6MjA1OTkzMDk0NX0.IspVcIDlUu5UDw1AnYhA5rV1erdQYBUa-irAO4wvtMM';

        const response = await fetch(`${SUPABASE_URL}/rest/v1/contact_submissions?select=*&order=created_at.desc`, {
          method: 'GET',
          headers: {
            'apikey': SUPABASE_KEY,
            'Authorization': `Bearer ${SUPABASE_KEY}`,
            'Content-Type': 'application/json'
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const submissionsData = Array.isArray(data) ? data : [];
        setSubmissions(submissionsData);
        setFilteredSubmissions(submissionsData);

        // Calculate stats
        const totalSubmissions = submissionsData.length;

        // Recent submissions (last 7 days)
        const oneWeekAgo = new Date();
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        const recentSubmissions = submissionsData.filter(sub => {
          if (!sub.created_at) return false;
          const subDate = new Date(sub.created_at);
          return subDate >= oneWeekAgo;
        }).length;

        // Find top program
        const programCounts: Record<string, number> = {};
        submissionsData.forEach(sub => {
          if (sub.interests) {
            // Split interests if they're comma-separated
            const interestsList = sub.interests.split(',').map(i => i.trim());
            interestsList.forEach(interest => {
              programCounts[interest] = (programCounts[interest] || 0) + 1;
            });
          }
        });

        let topProgramName = '';
        let topProgramCount = 0;

        Object.entries(programCounts).forEach(([program, count]) => {
          if (count > topProgramCount) {
            topProgramName = program;
            topProgramCount = count;
          }
        });

        setStats({
          totalSubmissions,
          recentSubmissions,
          topProgram: {
            name: topProgramName || 'None',
            count: topProgramCount
          }
        });
      } catch (err) {
        console.error('Error fetching data:', err);
        setError(`Failed to load data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredSubmissions(submissions);
    } else {
      const filtered = submissions.filter(sub => {
        const searchLower = searchTerm.toLowerCase();
        return (
          (sub.name?.toLowerCase().includes(searchLower) || false) ||
          (sub.email?.toLowerCase().includes(searchLower) || false) ||
          (sub.phone?.toLowerCase().includes(searchLower) || false) ||
          (sub.message?.toLowerCase().includes(searchLower) || false) ||
          (sub.interests?.toLowerCase().includes(searchLower) || false)
        );
      });
      setFilteredSubmissions(filtered);
    }
  }, [searchTerm, submissions]);

  // Format date (date only, no time)
  const formatDate = (dateString?: string) => {
    if (!dateString) return 'N/A';

    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    } catch (error) {
      return 'Invalid date';
    }
  };

  const exportToCSV = () => {
    try {
      if (submissions.length === 0) {
        toast({
          title: 'NO DATA TO EXPORT',
          description: 'There are no submissions to export.',
          variant: 'destructive',
        });
        return;
      }

      // Format data for export
      const exportData = submissions.map(item => ({
        'Name': item.name || 'N/A',
        'Email': item.email || 'N/A',
        'Phone': item.phone || 'N/A',
        'Interests': item.interests || 'N/A',
        'Message': item.message || 'N/A',
        'Submitted On': item.created_at ? formatDate(item.created_at) : 'N/A'
      }));

      // Create worksheet
      const worksheet = XLSX.utils.json_to_sheet(exportData);

      // Convert to CSV
      const csv = XLSX.utils.sheet_to_csv(worksheet);

      // Create a blob and download link
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'fitkraft_submissions.csv');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      toast({
        title: 'EXPORT SUCCESSFUL',
        description: 'Data has been exported to CSV',
        variant: 'success',
      });
    } catch (err) {
      console.error('Error exporting to CSV:', err);
      toast({
        title: 'EXPORT FAILED',
        description: `Failed to export data: ${err instanceof Error ? err.message : 'Unknown error'}`,
        variant: 'destructive',
      });
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    onLogout();
  };

  // Render the component
  return (
    <div className="min-h-screen bg-background">
      {/* Nike/Adidas-inspired subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background to-background/90"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px]"></div>
      </div>

      {/* Header - Nike/Adidas-inspired clean header */}
      <header className="bg-white shadow-sm border-b border-gray-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img
                alt="FitKraft Logo"
                className="h-8 w-auto mr-3"
                src="/images/fitkraft-logo.png"
              />
              <h1 className="text-xl font-bold uppercase tracking-wider text-foreground">Admin Dashboard</h1>
            </div>
            <div className="flex gap-3">
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-white text-accent text-xs uppercase tracking-wider font-bold flex items-center hover:bg-gray-50 transition-all duration-300 border-l-2 border-primary"
                disabled={submissions.length === 0}
              >
                <Download className="h-4 w-4 mr-2" />
                Export CSV
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 border border-red-300 text-red-600 text-xs uppercase tracking-wider font-bold hover:bg-red-50 transition-all duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">

        {isLoading ? (
          <div className="bg-white shadow-sm p-8 text-center">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary mb-4"></div>
            <p className="text-sm uppercase tracking-wider font-medium">Loading data...</p>
          </div>
        ) : error ? (
          <div className="bg-white shadow-sm p-8 text-red-700">
            <p className="font-bold uppercase tracking-wider text-sm mb-2">Error</p>
            <p className="text-sm">{error}</p>
          </div>
        ) : (
          <>
            {/* Nike/Adidas-inspired stats cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white shadow-sm p-6 flex items-start border-t-2 border-primary transition-all duration-300 hover:shadow-md">
                <div className="mr-4">
                  <Inbox className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Total Submissions</p>
                  <p className="text-3xl font-bold text-foreground">{stats.totalSubmissions}</p>
                </div>
              </div>

              <div className="bg-white shadow-sm p-6 flex items-start border-t-2 border-primary transition-all duration-300 hover:shadow-md">
                <div className="mr-4">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Last 7 Days</p>
                  <p className="text-3xl font-bold text-foreground">{stats.recentSubmissions}</p>
                </div>
              </div>

              <div className="bg-white shadow-sm p-6 flex items-start border-t-2 border-primary transition-all duration-300 hover:shadow-md">
                <div className="mr-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider font-bold text-gray-500 mb-1">Top Program</p>
                  <p className="text-3xl font-bold text-foreground">{stats.topProgram.count}</p>
                  <p className="text-xs uppercase tracking-wider font-medium text-gray-500 mt-1">{stats.topProgram.name}</p>
                </div>
              </div>
            </div>

            {/* Nike/Adidas-inspired tabs */}
            <div className="mb-8">
              <div className="flex border-b border-gray-200">
                <button
                  className={`px-8 py-3 text-xs uppercase tracking-wider font-bold ${activeTab === 'submissions' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
                  onClick={() => setActiveTab('submissions')}
                >
                  <Inbox className="h-4 w-4 inline-block mr-2" />
                  Submissions
                </button>
                <button
                  className={`px-8 py-3 text-xs uppercase tracking-wider font-bold ${activeTab === 'analysis' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
                  onClick={() => setActiveTab('analysis')}
                >
                  <BarChart2 className="h-4 w-4 inline-block mr-2" />
                  Analysis
                </button>
              </div>
            </div>

            {activeTab === 'submissions' ? (
              <>
                {/* Nike/Adidas-inspired search and table header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                  <h2 className="text-xl font-bold uppercase tracking-wider">Contact Submissions</h2>

                  <div className="relative w-full md:w-64">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      placeholder="Search submissions..."
                      className="pl-10 pr-4 py-2 w-full border-b-2 border-gray-200 bg-transparent text-foreground focus:outline-none focus:border-primary transition-all duration-200"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                {/* Nike/Adidas-inspired data table */}
                <div className="bg-white shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full table-fixed">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[120px] border-b border-gray-200">Name</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[150px] border-b border-gray-200">Email</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[120px] border-b border-gray-200">Phone</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[150px] border-b border-gray-200">Interests</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[200px] border-b border-gray-200">Message</th>
                          <th className="px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider w-[120px] border-b border-gray-200">Submitted On</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        {filteredSubmissions.length === 0 ? (
                          <tr>
                            <td colSpan={6} className="px-6 py-8 text-center">
                              {searchTerm ? (
                                <>
                                  <p className="text-gray-500 font-medium">No matching submissions found</p>
                                  <p className="text-sm text-gray-400 mt-1">Try adjusting your search terms</p>
                                  <button
                                    className="mt-4 px-4 py-2 bg-white text-accent text-xs uppercase tracking-wider font-bold hover:bg-gray-50 transition-all duration-300 border-l-2 border-primary"
                                    onClick={() => setSearchTerm('')}
                                  >
                                    Clear Search
                                  </button>
                                </>
                              ) : (
                                <p className="text-gray-500 font-medium">No submissions found</p>
                              )}
                            </td>
                          </tr>
                        ) : (
                          filteredSubmissions.map((submission, index) => (
                            <tr key={submission.id || `submission-${index}`} className="hover:bg-gray-50 transition-colors duration-150">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 overflow-hidden text-ellipsis">{submission.name || 'N/A'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 overflow-hidden text-ellipsis">{submission.email || 'N/A'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 overflow-hidden text-ellipsis">{submission.phone || 'N/A'}</td>
                              <td className="px-6 py-4 text-sm text-gray-700 overflow-x-auto whitespace-nowrap">{submission.interests || 'N/A'}</td>
                              <td className="px-6 py-4 text-sm text-gray-700 overflow-hidden text-ellipsis">{submission.message || 'N/A'}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 overflow-hidden text-ellipsis">
                                {submission.created_at ? formatDate(submission.created_at) : 'N/A'}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>

                  {/* Nike/Adidas-inspired pagination */}
                  {filteredSubmissions.length > 0 && (
                    <div className="px-6 py-3 flex items-center justify-between border-t border-gray-200 bg-gray-50">
                      <div className="text-xs uppercase tracking-wider font-bold text-gray-500">
                        Showing <span className="text-gray-900">{filteredSubmissions.length}</span> of <span className="text-gray-900">{submissions.length}</span> submissions
                      </div>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                {/* Nike/Adidas-inspired Analysis Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  {/* Service Interest Breakdown */}
                  <div className="bg-white shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-bold uppercase tracking-wider flex items-center">
                        <PieChart className="h-5 w-5 text-primary mr-3" />
                        Service Interest Breakdown
                      </h3>
                    </div>
                    <div className="p-8">
                      <div>
                        {/* Visual representation of service interests */}
                        {(() => {
                          // Calculate service interest breakdown
                          let interestCounts: Record<string, number> = {};
                          let totalInterests = 0;

                          // If we have real data, use it
                          if (submissions.length > 0) {
                            submissions.forEach(sub => {
                              if (sub.interests) {
                                const interestsList = sub.interests.split(',').map(i => i.trim());
                                interestsList.forEach(interest => {
                                  if (interest) {
                                    interestCounts[interest] = (interestCounts[interest] || 0) + 1;
                                    totalInterests++;
                                  }
                                });
                              }
                            });
                          } else {
                            // Use demo data if no submissions
                            interestCounts = {
                              'Personal Training': 35,
                              'Yoga Classes': 28,
                              'Buddy Training': 20,
                              'Nutrition Counseling': 15,
                              'Group Fitness': 12
                            };

                            // Calculate total
                            totalInterests = Object.values(interestCounts).reduce((sum, count) => sum + count, 0);
                          }

                          // Sort interests by count (descending)
                          const sortedInterests = Object.entries(interestCounts)
                            .sort((a, b) => b[1] - a[1])
                            .slice(0, 5); // Top 5 interests

                          // Create pie chart data
                          const colors = [
                            '#3B82F6', // blue-500
                            '#10B981', // emerald-500
                            '#F59E0B', // amber-500
                            '#EF4444', // red-500
                            '#8B5CF6'  // violet-500
                          ];

                          return (
                            <div>
                              {/* Pie Chart */}
                              <div className="flex justify-center mb-6">
                                <div className="relative h-48 w-48">
                                  {/* Create pie chart segments */}
                                  {sortedInterests.map(([interest, count], index) => {
                                    const percentage = Math.round((count / totalInterests) * 100);
                                    // Calculate the angles for the pie segments
                                    let previousAngles = 0;
                                    for (let i = 0; i < index; i++) {
                                      previousAngles += (sortedInterests[i][1] / totalInterests) * 360;
                                    }
                                    const startAngle = previousAngles;
                                    const endAngle = startAngle + (count / totalInterests) * 360;

                                    return (
                                      <div
                                        key={interest}
                                        className="absolute inset-0"
                                        style={{
                                          background: `conic-gradient(transparent ${startAngle}deg, ${colors[index % colors.length]} ${startAngle}deg, ${colors[index % colors.length]} ${endAngle}deg, transparent ${endAngle}deg)`,
                                          borderRadius: '50%'
                                        }}
                                      />
                                    );
                                  })}
                                  {/* Center circle for donut effect */}
                                  <div className="absolute inset-0 m-auto w-24 h-24 bg-white rounded-full" />
                                </div>
                              </div>

                              {/* Legend */}
                              <div className="space-y-2">
                                {sortedInterests.map(([interest, count], index) => {
                                  const percentage = Math.round((count / totalInterests) * 100);
                                  return (
                                    <div key={interest} className="flex items-center">
                                      <div
                                        className="h-3 w-3 mr-2 rounded-sm"
                                        style={{ backgroundColor: colors[index % colors.length] }}
                                      />
                                      <span className="text-sm">{interest}</span>
                                      <span className="text-sm font-medium ml-auto">{percentage}%</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>

                  {/* Time-Based Analysis */}
                  <div className="bg-white shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                      <h3 className="text-lg font-bold uppercase tracking-wider flex items-center">
                        <TrendingUp className="h-5 w-5 text-primary mr-3" />
                        Time-Based Analysis
                      </h3>
                    </div>
                    <div className="p-8">
                      <div>
                        {/* Visual representation of submission trends */}
                        {(() => {
                          // Demo data for monthly trends
                          let monthlyData: Record<string, number> = {};

                          // If we have real data, use it
                          if (submissions.length > 0) {
                            submissions.forEach(sub => {
                              if (sub.created_at) {
                                const date = new Date(sub.created_at);
                                const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
                                monthlyData[monthYear] = (monthlyData[monthYear] || 0) + 1;
                              }
                            });
                          } else {
                            // Use demo data if no submissions
                            const currentDate = new Date();
                            const months = [];

                            // Generate last 6 months
                            for (let i = 5; i >= 0; i--) {
                              const date = new Date(currentDate);
                              date.setMonth(currentDate.getMonth() - i);
                              const monthYear = `${date.toLocaleString('default', { month: 'short' })} ${date.getFullYear()}`;
                              months.push(monthYear);
                            }

                            // Create a realistic trend pattern
                            monthlyData = {
                              [months[0]]: 8,  // 6 months ago
                              [months[1]]: 12, // 5 months ago
                              [months[2]]: 15, // 4 months ago
                              [months[3]]: 10, // 3 months ago
                              [months[4]]: 18, // 2 months ago
                              [months[5]]: 22  // Last month
                            };
                          }

                          // Get sorted months
                          const sortedMonths = Object.keys(monthlyData).sort((a, b) => {
                            const dateA = new Date(a);
                            const dateB = new Date(b);
                            return dateA.getTime() - dateB.getTime();
                          }).slice(-6); // Last 6 months

                          // Find max value for scaling
                          const maxValue = Math.max(...sortedMonths.map(month => monthlyData[month]));

                          return (
                            <div className="h-64">
                              <div className="flex items-end justify-between h-52 mb-4">
                                {sortedMonths.map(month => {
                                  const height = (monthlyData[month] / maxValue) * 100;
                                  return (
                                    <div key={month} className="flex flex-col items-center w-1/6">
                                      <div
                                        className="w-10 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t border border-blue-300 shadow-lg"
                                        style={{ height: `${height}%` }}
                                      ></div>
                                    </div>
                                  );
                                })}
                              </div>
                              <div className="flex justify-between">
                                {sortedMonths.map(month => (
                                  <div key={`label-${month}`} className="w-1/6 text-center">
                                    <div className="text-xs font-medium">{month}</div>
                                    <div className="text-xs font-bold mt-1">{monthlyData[month]}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })()}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Nike/Adidas-inspired footer */}
      <footer className="bg-white border-t border-gray-200 py-4 mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs text-gray-500 uppercase tracking-wider">
            FitKraft Admin Dashboard © {new Date().getFullYear()}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminDashboardNew;
