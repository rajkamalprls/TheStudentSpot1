import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  BookOpen, Briefcase, Calendar, Users, Award, TrendingUp, 
  Star, Target, Clock, MessageSquare, Lightbulb, Code
} from 'lucide-react';

export function StudentDashboard() {
  const { user } = useAuth();

  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, label: 'Applications', value: '12', color: 'blue' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Courses', value: '8', color: 'green' },
    { icon: <Award className="w-5 h-5" />, label: 'Points', value: '850', color: 'purple' },
    { icon: <Star className="w-5 h-5" />, label: 'Streak', value: '7 days', color: 'orange' }
  ];

  const recommendations = [
    {
      type: 'Job',
      title: 'Frontend Developer Intern',
      company: 'TechStart Inc.',
      match: '95%',
      location: 'Bangalore'
    },
    {
      type: 'Course',
      title: 'React.js Masterclass',
      provider: 'CodeAcademy',
      match: '88%',
      duration: '6 weeks'
    },
    {
      type: 'Event',
      title: 'AI/ML Workshop',
      organizer: 'Google',
      match: '92%',
      date: 'Mar 15'
    }
  ];

  const recentJobs = [
    {
      title: 'Software Engineer Intern',
      company: 'Microsoft',
      type: 'Internship',
      salary: '₹25,000/month',
      location: 'Hyderabad',
      posted: '2 days ago'
    },
    {
      title: 'Data Analyst',
      company: 'Flipkart',
      type: 'Full-time',
      salary: '₹6-8 LPA',
      location: 'Bangalore',
      posted: '5 days ago'
    },
    {
      title: 'UI/UX Design Intern',
      company: 'Zomato',
      type: 'Internship',
      salary: '₹15,000/month',
      location: 'Remote',
      posted: '1 week ago'
    }
  ];

  const learningPath = [
    { name: 'JavaScript Fundamentals', progress: 100, status: 'completed' },
    { name: 'React.js Development', progress: 75, status: 'in-progress' },
    { name: 'Node.js Backend', progress: 30, status: 'in-progress' },
    { name: 'Database Design', progress: 0, status: 'upcoming' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 mt-2">Here's what's happening in your learning journey</p>
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Recommendations */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">🤖 AI Recommendations</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recommendations.map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            item.type === 'Job' ? 'bg-blue-100 text-blue-800' :
                            item.type === 'Course' ? 'bg-green-100 text-green-800' :
                            'bg-purple-100 text-purple-800'
                          }`}>
                            {item.type}
                          </span>
                          <span className="text-green-600 text-sm font-medium">{item.match} match</span>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm">
                          {item.company || item.provider || item.organizer} • {item.location || item.duration || item.date}
                        </p>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Apply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Jobs */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">💼 Latest Jobs & Internships</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Browse All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentJobs.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            job.type === 'Internship' ? 'bg-orange-100 text-orange-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {job.type}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-1">{job.company} • {job.salary}</p>
                        <div className="flex items-center space-x-4 text-xs text-gray-500">
                          <span>📍 {job.location}</span>
                          <span>🕒 {job.posted}</span>
                        </div>
                      </div>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
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
            {/* Learning Progress */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📚 Learning Path</h3>
              <div className="space-y-4">
                {learningPath.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">{item.name}</span>
                      <span className="text-sm text-gray-500">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          item.status === 'completed' ? 'bg-green-500' :
                          item.status === 'in-progress' ? 'bg-blue-500' :
                          'bg-gray-300'
                        }`}
                        style={{ width: `${item.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">⚡ Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <Code className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-medium">Practice Coding</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <Target className="w-5 h-5 text-green-600" />
                  <span className="text-sm font-medium">Mock Interview</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="w-5 h-5 text-purple-600" />
                  <span className="text-sm font-medium">Find Mentor</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                  <Lightbulb className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-medium">Startup Ideas</span>
                </button>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">📅 Upcoming Events</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900 text-sm">React Webinar</h4>
                  <p className="text-xs text-gray-600">Today, 3:00 PM</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900 text-sm">Hackathon 2025</h4>
                  <p className="text-xs text-gray-600">Mar 20-22</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <h4 className="font-medium text-gray-900 text-sm">Career Fair</h4>
                  <p className="text-xs text-gray-600">Apr 5, 10:00 AM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}