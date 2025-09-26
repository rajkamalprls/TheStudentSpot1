import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Users, Briefcase, Calendar, TrendingUp, 
  Award, Building2, Target, MessageSquare, Rocket
} from 'lucide-react';

export function IncubatorDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: <Rocket className="w-5 h-5" />, label: 'Startups', value: '47', color: 'blue' },
    { icon: <Users className="w-5 h-5" />, label: 'Founders', value: '128', color: 'green' },
    { icon: <Award className="w-5 h-5" />, label: 'Graduated', value: '12', color: 'purple' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Success Rate', value: '82%', color: 'orange' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user?.name}! 🏢
          </h1>
          <p className="text-gray-600 mt-2">Support and accelerate startup growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  stat.color === 'green' ? 'bg-green-100 text-green-600' :
                  stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-16">
          <Rocket className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Incubator Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This dashboard helps incubators and accelerators manage their portfolio of startups, 
            track progress, organize mentorship programs, and facilitate connections between 
            entrepreneurs, investors, and industry partners.
          </p>
        </div>
      </div>
    </div>
  );
}