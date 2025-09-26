import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Lightbulb, TrendingUp, Users, DollarSign, Calendar, 
  FileText, Award, MessageSquare, Target, Rocket
} from 'lucide-react';

export function EntrepreneurDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: <Rocket className="w-5 h-5" />, label: 'Startup Stage', value: 'MVP', color: 'green' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Funding Goal', value: '₹50L', color: 'blue' },
    { icon: <Users className="w-5 h-5" />, label: 'Team Size', value: '4', color: 'purple' },
    { icon: <Award className="w-5 h-5" />, label: 'Milestones', value: '3/5', color: 'orange' }
  ];

  const startupTools = [
    { name: 'Business Plan Template', type: 'Document', status: 'Downloaded' },
    { name: 'Pitch Deck Template', type: 'Presentation', status: 'In Use' },
    { name: 'Legal Checklist', type: 'Guide', status: 'Pending' },
    { name: 'Financial Model', type: 'Spreadsheet', status: 'Downloaded' }
  ];

  const fundingSources = [
    {
      name: 'Seed Funding Round',
      type: 'Angel Investors',
      amount: '₹25L - ₹1Cr',
      timeline: 'Q2 2025',
      status: 'Preparing'
    },
    {
      name: 'Government Grants',
      type: 'MSME Support',
      amount: '₹10L - ₹50L',
      timeline: 'Q1 2025',
      status: 'Applied'
    },
    {
      name: 'Incubator Program',
      type: 'T-Hub',
      amount: '₹15L + Mentorship',
      timeline: 'Q3 2025',
      status: 'Shortlisted'
    }
  ];

  const recentEvents = [
    { name: 'Startup Pitch Competition', date: 'Mar 15', type: 'Competition' },
    { name: 'Founder Networking', date: 'Mar 20', type: 'Networking' },
    { name: 'Investor Meet', date: 'Mar 25', type: 'Funding' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}! 🚀
          </h1>
          <p className="text-gray-600 mt-2">Ready to build the next big thing?</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
                <div className={`p-3 rounded-lg ${
                  stat.color === 'green' ? 'bg-green-100 text-green-600' :
                  stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-orange-100 text-orange-600'
                }`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Startup Launchpad */}
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">🚀 Startup Launchpad</h2>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  View All Resources
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {startupTools.map((tool, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{tool.name}</h3>
                        <p className="text-gray-600 text-sm mb-2">{tool.type}</p>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          tool.status === 'Downloaded' ? 'bg-green-100 text-green-800' :
                          tool.status === 'In Use' ? 'bg-blue-100 text-blue-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {tool.status}
                        </span>
                      </div>
                      <FileText className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Funding Sources */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">💰 Funding Opportunities</h2>
                <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                  Explore More
                </button>
              </div>
              
              <div className="space-y-4">
                {fundingSources.map((funding, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{funding.name}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            funding.status === 'Applied' ? 'bg-blue-100 text-blue-800' :
                            funding.status === 'Shortlisted' ? 'bg-green-100 text-green-800' :
                            'bg-orange-100 text-orange-800'
                          }`}>
                            {funding.status}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{funding.type} • {funding.amount}</p>
                        <p className="text-gray-500 text-xs">Timeline: {funding.timeline}</p>
                      </div>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Create Pitch Deck</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Find Co-founder</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <DollarSign className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">Apply for Grant</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageSquare className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">Join Community</span>
                </button>
              </div>
            </div>

            {/* Startup Progress */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📈 Startup Journey</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Idea Validation</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">MVP Development</p>
                    <p className="text-xs text-gray-500">Completed</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-sm font-medium">Market Testing</p>
                    <p className="text-xs text-gray-500">In Progress</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Seed Funding</p>
                    <p className="text-xs text-gray-500">Upcoming</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <div>
                    <p className="text-sm font-medium">Scale & Grow</p>
                    <p className="text-xs text-gray-500">Future</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Upcoming Events</h3>
              <div className="space-y-3">
                {recentEvents.map((event, index) => (
                  <div key={index} className="border-l-4 border-green-500 pl-4 py-2">
                    <h4 className="font-medium text-gray-900 text-sm">{event.name}</h4>
                    <p className="text-xs text-gray-600">{event.date} • {event.type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}