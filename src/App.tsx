import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { CodeEditor } from './pages/CodeEditor';
import { AuthProvider } from './context/AuthContext';
import { EditorProvider } from './context/EditorContext';
import { ConnectSupabase } from './components/ConnectSupabase';
import { isSupabaseConfigured } from './lib/supabase';
import { ProtectedRoute } from './components/ProtectedRoute';

export default function App() {
  if (!isSupabaseConfigured) {
    return <ConnectSupabase />;
  }

  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route 
              path="/code/:language" 
              element={
                <ProtectedRoute>
                  <EditorProvider>
                    <CodeEditor />
                  </EditorProvider>
                </ProtectedRoute>
              } 
            />
          </Routes>
        </div>
      </AuthProvider>
    </Router>
  );
}