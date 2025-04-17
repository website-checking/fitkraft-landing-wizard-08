import { useState } from 'react';

interface SimpleAdminLoginProps {
  onLogin: () => void;
}

const SimpleAdminLogin = ({ onLogin }: SimpleAdminLoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (email === 'admin@example.com' && password === 'password123') {
      // Store authentication in session storage
      sessionStorage.setItem('adminAuthenticated', 'true');
      onLogin();
      alert('Login successful!');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4 bg-gradient-to-br from-background to-background/80">
      <div className="w-full max-w-md p-8 space-y-8 bg-card/90 backdrop-blur-sm rounded-xl shadow-xl border border-border/50 transition-all duration-300 hover:shadow-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">Admin Login</h2>
          <p className="text-muted-foreground">
            Sign in to access the admin dashboard
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-foreground">
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
                className="w-full px-4 py-3 border border-input/50 rounded-lg bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm transition-all duration-200 hover:border-primary/30 focus:border-primary/50"
                placeholder="admin@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1 text-foreground">
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
                className="w-full px-4 py-3 border border-input/50 rounded-lg bg-background/80 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm transition-all duration-200 hover:border-primary/30 focus:border-primary/50"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground rounded-lg hover:from-primary/90 hover:to-primary transition-all duration-300 shadow-md hover:shadow-lg font-medium"
          >
            Sign in
          </button>

          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p className="mb-2 font-medium">Demo credentials:</p>
            <div className="space-y-2">
              <p className="font-mono bg-muted/50 backdrop-blur-sm p-2 rounded-lg shadow-inner border border-border/20">Email: admin@example.com</p>
              <p className="font-mono bg-muted/50 backdrop-blur-sm p-2 rounded-lg shadow-inner border border-border/20">Password: password123</p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SimpleAdminLogin;
