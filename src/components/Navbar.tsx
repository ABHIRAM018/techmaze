import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, LogIn, UserPlus } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export function Navbar() {
  const { user, signOut } = useAuth();

  return (
    <nav className="bg-slate-900 text-white shadow-lg backdrop-blur-sm bg-opacity-90 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Cpu className="h-8 w-8 text-cyan-400" />
              <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                TECHMAZE
              </span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link to="/python" className="hover:text-cyan-400 transition-colors">Python</Link>
            <Link to="/c" className="hover:text-cyan-400 transition-colors">C</Link>
            <Link to="/cpp" className="hover:text-cyan-400 transition-colors">C++</Link>
            
            {user ? (
              <button
                onClick={signOut}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="flex items-center space-x-1 hover:text-cyan-400 transition-colors"
                >
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
                <Link
                  to="/register"
                  className="flex items-center space-x-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-4 py-2 rounded-md transition-all"
                >
                  <UserPlus className="h-4 w-4" />
                  <span>Register</span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}