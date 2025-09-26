import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsMobileMenuOpen(false);
  };

  const getRoleColor = (role?: string) => {
    switch (role) {
      case 'student': return 'text-blue-600';
      case 'entrepreneur': return 'text-green-600';
      case 'college': return 'text-orange-600';
      case 'company': return 'text-purple-600';
      case 'incubator': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">TS</span>
            </div>
            <span className="text-xl font-bold text-gray-900">The Student Spot</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {!isAuthenticated ? (
              <>
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
                <Link
                  to="/auth"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Sign In
                </Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Dashboard
                </Link>
                <Link to="/jobs" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Jobs
                </Link>
                <Link to="/learning" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Learning
                </Link>
                <Link to="/events" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Events
                </Link>
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2">
                    <User size={20} className={getRoleColor(user?.role)} />
                    <span className="text-sm text-gray-700">{user?.name}</span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <LogOut size={20} />
                  </button>
                </div>
              </>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {!isAuthenticated ? (
                <>
                  <Link
                    to="/"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    to="/contact"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    to="/auth"
                    className="text-blue-600 font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Sign In
                  </Link>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-2 py-2">
                    <User size={20} className={getRoleColor(user?.role)} />
                    <span className="text-sm text-gray-700">{user?.name}</span>
                  </div>
                  <Link
                    to="/dashboard"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/jobs"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Jobs
                  </Link>
                  <Link
                    to="/learning"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Learning
                  </Link>
                  <Link
                    to="/events"
                    className="text-gray-700 hover:text-blue-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Events
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="text-red-600 hover:text-red-700 transition-colors text-left"
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}