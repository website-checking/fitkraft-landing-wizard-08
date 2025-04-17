// Supabase direct connection details
const SUPABASE_URL = 'https://xqmujsdspymsacjzhoyh.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxbXVqc2RzcHltc2Fjanpob3loIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzNTQ5NDUsImV4cCI6MjA1OTkzMDk0NX0.IspVcIDlUu5UDw1AnYhA5rV1erdQYBUa-irAO4wvtMM';

// Simple interface for contact submissions
export interface ContactSubmission {
  id?: string;
  name?: string;
  email?: string;
  phone?: string | null;
  message?: string;
  interests?: string | null;
  created_at?: string;
}

// Format date
export const formatDate = (dateString?: string) => {
  if (!dateString) return 'N/A';

  try {
    return new Date(dateString).toLocaleString();
  } catch (error) {
    return 'Invalid date';
  }
};

// Fetch contact submissions from Supabase
export const fetchContactSubmissions = async (): Promise<ContactSubmission[]> => {
  try {
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

    if (Array.isArray(data)) {
      return data;
    } else {
      throw new Error('Received unexpected data format from the server.');
    }
  } catch (error) {
    console.error('Error fetching contact submissions:', error);
    throw error;
  }
};

// Fetch dashboard stats
export const fetchDashboardStats = async (): Promise<{
  totalSubmissions: number;
  recentSubmissions: number;
  uniqueEmails: number;
}> => {
  try {
    const submissions = await fetchContactSubmissions();
    
    // Calculate stats
    const totalSubmissions = submissions.length;
    
    // Recent submissions (last 7 days)
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const recentSubmissions = submissions.filter(sub => {
      if (!sub.created_at) return false;
      const subDate = new Date(sub.created_at);
      return subDate >= oneWeekAgo;
    }).length;
    
    // Unique emails
    const uniqueEmails = new Set(
      submissions.map(sub => sub.email).filter(Boolean)
    ).size;
    
    return {
      totalSubmissions,
      recentSubmissions,
      uniqueEmails
    };
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
};
