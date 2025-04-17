import { useState, useEffect } from 'react';
import SimpleAdminLogin from '../components/admin/SimpleAdminLogin';
import AdminDashboardNew from '../components/admin/AdminDashboardNew';

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    const adminAuthenticated = sessionStorage.getItem('adminAuthenticated');
    if (adminAuthenticated === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {isAuthenticated ? (
        <AdminDashboardNew onLogout={handleLogout} />
      ) : (
        <SimpleAdminLogin onLogin={handleLogin} />
      )}
    </div>
  );
};

export default Admin;
