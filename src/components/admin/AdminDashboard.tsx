import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { Download, LogOut, RefreshCw, Users, Calendar, MessageSquare, Search, Eye, Inbox } from 'lucide-react';
import * as XLSX from 'xlsx';
import { toast } from '../../hooks/use-toast';
import { fetchContactSubmissions, fetchDashboardStats, formatDate, ContactSubmission } from './supabaseDirectFetch';



interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [filteredSubmissions, setFilteredSubmissions] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [stats, setStats] = useState({
    totalSubmissions: 0,
    recentSubmissions: 0,
    uniqueEmails: 0
  });
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'recent'

  // Function to load data
  const loadData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Fetch submissions
      const data = await fetchContactSubmissions();
      const submissionsData = Array.isArray(data) ? data : [];
      setSubmissions(submissionsData);
      setFilteredSubmissions(submissionsData);

      // Fetch stats
      const statsData = await fetchDashboardStats();
      setStats(statsData);
    } catch (err) {
      console.error('Dashboard error:', err);
      setError(`Failed to load data: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Load data on component mount
  useEffect(() => {
    loadData();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuthenticated');
    onLogout();
    toast({
      title: 'Logged out',
      description: 'You have been logged out successfully',
    });
  };

  // Handle search and filtering
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

  // Handle tab changes
  useEffect(() => {
    if (activeTab === 'all') {
      setFilteredSubmissions(submissions);
    } else if (activeTab === 'recent') {
      // Filter for submissions in the last 7 days
      const oneWeekAgo = new Date();
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

      const filtered = submissions.filter(sub => {
        if (!sub.created_at) return false;
        const subDate = new Date(sub.created_at);
        return subDate >= oneWeekAgo;
      });

      setFilteredSubmissions(filtered);
    }
    // Reset search when changing tabs
    setSearchTerm('');
  }, [activeTab, submissions]);

  const handleRefresh = () => {
    toast({
      title: 'Refreshing data',
      description: 'Fetching latest submissions...',
    });
    loadData();
  };

  const exportToExcel = () => {
    try {
      if (submissions.length === 0) {
        toast({
          title: 'No data to export',
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

      // Create workbook
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Submissions');

      // Generate Excel file
      XLSX.writeFile(workbook, 'fitkraft_submissions.xlsx');

      toast({
        title: 'Export successful',
        description: 'Data has been exported to Excel',
      });
    } catch (err) {
      console.error('Error exporting to Excel:', err);
      toast({
        title: 'Export failed',
        description: `Failed to export data: ${err instanceof Error ? err.message : 'Unknown error'}`,
        variant: 'destructive',
      });
    }
  };



  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-foreground/70">Loading dashboard data...</p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md p-8 bg-background/80 rounded-xl shadow-lg border border-red-200">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 flex items-center justify-center">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-bold text-red-500 mb-2">Error Loading Data</h3>
          <p className="text-foreground/70 mb-6">{error}</p>
          <Button
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={loadData}
          >
            Try Again
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background/50">
      {/* Top navigation bar */}
      <header className="bg-background shadow-md border-b border-primary/10 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
              <Inbox className="h-5 w-5 text-primary" />
            </div>
            <h1 className="text-2xl font-extrabold text-foreground">FitKraft Admin</h1>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <Button
              onClick={handleRefresh}
              variant="outline"
              size="sm"
              className="border-primary/20 text-primary hover:bg-primary/5"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button
              onClick={exportToExcel}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
            <Button
              onClick={handleLogout}
              variant="outline"
              size="sm"
              className="border-primary/20 text-primary hover:bg-primary/5"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {/* Stats cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-background rounded-xl shadow-md border border-primary/10 p-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <Inbox className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground/70">Total Submissions</p>
              <p className="text-2xl font-bold text-foreground">{stats.totalSubmissions}</p>
            </div>
          </div>

          <div className="bg-background rounded-xl shadow-md border border-primary/10 p-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground/70">Last 7 Days</p>
              <p className="text-2xl font-bold text-foreground">{stats.recentSubmissions}</p>
            </div>
          </div>

          <div className="bg-background rounded-xl shadow-md border border-primary/10 p-6 flex items-center">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-foreground/70">Unique Contacts</p>
              <p className="text-2xl font-bold text-foreground">{stats.uniqueEmails}</p>
            </div>
          </div>
        </div>

        {/* Filters and search */}
        <div className="bg-background rounded-xl shadow-md border border-primary/10 p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <h2 className="text-xl font-bold text-foreground flex items-center">
              <MessageSquare className="mr-2 h-5 w-5 text-primary" />
              Contact Submissions
            </h2>

            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-foreground/40" />
              </div>
              <input
                type="text"
                placeholder="Search submissions..."
                className="pl-10 pr-4 py-2 w-full border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40 bg-background"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-primary/10">
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'all' ? 'text-primary border-b-2 border-primary' : 'text-foreground/70 hover:text-primary'}`}
              onClick={() => setActiveTab('all')}
            >
              All Submissions
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm ${activeTab === 'recent' ? 'text-primary border-b-2 border-primary' : 'text-foreground/70 hover:text-primary'}`}
              onClick={() => setActiveTab('recent')}
            >
              Last 7 Days
            </button>
          </div>
        </div>

        {/* Data table */}
        <div className="bg-background rounded-xl shadow-md border border-primary/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary/5">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Phone</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Interests</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-foreground/70 uppercase tracking-wider">Submitted On</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-primary/10">
                {filteredSubmissions.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-8 text-center">
                      <div className="max-w-sm mx-auto">
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Inbox className="h-6 w-6 text-primary/50" />
                        </div>
                        {searchTerm ? (
                          <>
                            <p className="font-medium text-foreground">No matching submissions</p>
                            <p className="mt-1 text-sm text-foreground/70">Try adjusting your search terms</p>
                            <Button
                              className="mt-4 bg-primary/10 text-primary hover:bg-primary/20"
                              variant="outline"
                              size="sm"
                              onClick={() => setSearchTerm('')}
                            >
                              Clear Search
                            </Button>
                          </>
                        ) : (
                          <>
                            <p className="font-medium text-foreground">No submissions found</p>
                            <p className="mt-1 text-sm text-foreground/70">If you've submitted contact forms, please check the Supabase configuration.</p>
                            <Button
                              className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90"
                              size="sm"
                              onClick={handleRefresh}
                            >
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Refresh Data
                            </Button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredSubmissions.map((submission, index) => (
                    <tr key={submission.id || `submission-${index}`} className="hover:bg-primary/5">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{submission.name || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{submission.email || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{submission.phone || 'N/A'}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{submission.interests || 'N/A'}</td>
                      <td className="px-6 py-4 text-sm text-foreground max-w-xs truncate">
                        {submission.message ? (
                          <div className="flex items-center">
                            <span className="truncate mr-2">{submission.message}</span>
                            <button
                              className="text-primary hover:text-primary/80 p-1 rounded-full hover:bg-primary/10"
                              title="View full message"
                              onClick={() => toast({
                                title: 'Message from ' + (submission.name || 'Unknown'),
                                description: submission.message,
                              })}
                            >
                              <Eye className="h-4 w-4" />
                            </button>
                          </div>
                        ) : 'N/A'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">
                        {submission.created_at ? formatDate(submission.created_at) : 'N/A'}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination placeholder - can be implemented in the future */}
          {filteredSubmissions.length > 0 && (
            <div className="px-6 py-4 flex items-center justify-between border-t border-primary/10 bg-primary/5">
              <div className="text-sm text-foreground/70">
                Showing <span className="font-medium">{filteredSubmissions.length}</span> of <span className="font-medium">{submissions.length}</span> submissions
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
