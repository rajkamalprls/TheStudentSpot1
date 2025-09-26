import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';
import { Chrome, User, Building2, GraduationCap, Briefcase, Lightbulb } from 'lucide-react';

export function Auth() {
  const [step, setStep] = useState<'signin' | 'role'>('signin');
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const roles = [
    {
      id: 'student' as UserRole,
      title: 'Student',
      description: 'Access jobs, internships, courses, and mentorship',
      icon: <User className="w-8 h-8" />,
      color: 'blue'
    },
    {
      id: 'entrepreneur' as UserRole,
      title: 'Entrepreneur / Founder',
      description: 'Build startups, find investors, and connect with mentors',
      icon: <Lightbulb className="w-8 h-8" />,
      color: 'green'
    },
    {
      id: 'college' as UserRole,
      title: 'College / University',
      description: 'Facilitate placements and industry collaborations',
      icon: <GraduationCap className="w-8 h-8" />,
      color: 'orange'
    },
    {
      id: 'company' as UserRole,
      title: 'Company',
      description: 'Hire talent, post jobs, and engage with students',
      icon: <Briefcase className="w-8 h-8" />,
      color: 'purple'
    },
    {
      id: 'incubator' as UserRole,
      title: 'Incubator / Accelerator',
      description: 'Support startups and host entrepreneurship programs',
      icon: <Building2 className="w-8 h-8" />,
      color: 'red'
    }
  ];

  const getColorClasses = (color: string, selected: boolean = false) => {
    const colors = {
      blue: selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300',
      green: selected ? 'border-green-500 bg-green-50' : 'border-gray-200 hover:border-green-300',
      orange: selected ? 'border-orange-500 bg-orange-50' : 'border-gray-200 hover:border-orange-300',
      purple: selected ? 'border-purple-500 bg-purple-50' : 'border-gray-200 hover:border-purple-300',
      red: selected ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
    };
    return colors[color as keyof typeof colors];
  };

  const getTextColor = (color: string) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      orange: 'text-orange-600',
      purple: 'text-purple-600',
      red: 'text-red-600'
    };
    return colors[color as keyof typeof colors];
  };

  const handleGoogleSignIn = () => {
    setStep('role');
  };

  const handleRoleSelection = () => {
    if (!selectedRole) return;
    
    // Simulate user data from Google OAuth
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: selectedRole,
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop'
    };
    
    login(userData);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        {step === 'signin' ? (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center">
              <div className="mx-auto h-12 w-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">TS</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome to The Student Spot</h2>
              <p className="text-gray-600 mb-8">Sign in to access your personalized dashboard</p>
            </div>

            <button
              onClick={handleGoogleSignIn}
              className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-700 hover:bg-gray-50 transition-colors"
            >
              <Chrome className="w-5 h-5 mr-3 text-blue-500" />
              Continue with Google
            </button>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                By signing in, you agree to our{' '}
                <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Role</h2>
              <p className="text-gray-600">Select the option that best describes you</p>
            </div>

            <div className="space-y-4">
              {roles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${getColorClasses(role.color, selectedRole === role.id)}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${getTextColor(role.color)}`}>
                      {role.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900">{role.title}</h3>
                      <p className="text-gray-600 text-sm">{role.description}</p>
                    </div>
                    {selectedRole === role.id && (
                      <div className={`w-5 h-5 rounded-full ${role.color === 'blue' ? 'bg-blue-500' : role.color === 'green' ? 'bg-green-500' : role.color === 'orange' ? 'bg-orange-500' : role.color === 'purple' ? 'bg-purple-500' : 'bg-red-500'} flex items-center justify-center`}>
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex space-x-4">
              <button
                onClick={() => setStep('signin')}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleRoleSelection}
                disabled={!selectedRole}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}