import { useState } from 'react';
import { toast } from '../../hooks/use-toast';

interface SimpleAdminLoginProps {
  onLogin: () => void;
}

const SimpleAdminLogin = ({ onLogin }: SimpleAdminLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simple validation
    if (email === 'admin@example.com' && password === 'password123') {
      // Simulate network delay
      setTimeout(() => {
        setIsLoading(false);
        // Store authentication in session storage
        sessionStorage.setItem('adminAuthenticated', 'true');
        onLogin();
        toast({
          title: 'Login successful',
          description: 'Welcome to the admin dashboard',
          variant: 'success',
        });
      }, 800);
    } else {
      setIsLoading(false);
      toast({
        title: 'Login failed',
        description: 'Invalid email or password',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      {/* Nike/Adidas-inspired subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-background to-background/90"></div>
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[250px] h-[250px] rounded-full bg-primary/5 blur-[80px]"></div>
      </div>

      <div className="w-full max-w-md space-y-8 relative z-10">
        {/* Logo and header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <img
              alt="FitKraft Logo"
              className="h-10 w-auto"
              src="/images/fitkraft-logo.png"
            />
          </div>
          <h2 className="text-2xl font-bold uppercase tracking-wider text-foreground">Admin Login</h2>
          <div className="w-12 h-1 bg-primary mx-auto mt-3"></div>
        </div>

        {/* Nike/Adidas-inspired minimalist form */}
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg shadow-lg border-t-2 border-primary">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground/80">
                  Email address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 bg-transparent text-foreground focus:outline-none focus:border-primary transition-all duration-200 hover:border-gray-300"
                  placeholder="admin@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-xs font-bold uppercase tracking-wider mb-2 text-foreground/80">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border-b-2 border-gray-200 bg-transparent text-foreground focus:outline-none focus:border-primary transition-all duration-200 hover:border-gray-300"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 mt-8 bg-primary text-primary-foreground uppercase tracking-wider text-sm font-bold hover:bg-primary/90 transition-all duration-300"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : 'Sign in'}
            </button>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p className="mb-3 text-xs uppercase tracking-wider font-bold">Demo credentials</p>
              <div className="space-y-2">
                <p className="font-mono bg-gray-100 p-2 rounded text-xs">Email: admin@example.com</p>
                <p className="font-mono bg-gray-100 p-2 rounded text-xs">Password: password123</p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SimpleAdminLogin;
