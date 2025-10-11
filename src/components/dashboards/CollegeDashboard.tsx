import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Users, Briefcase, Calendar, TrendingUp, 
  Award, Building2, Target, MessageSquare, GraduationCap,
  BookOpen, Trophy, MapPin, Clock, Star, ChevronRight,
  Plus, Search, Filter, FileText, Video, Handshake,
  BarChart3, UserCheck, Globe, Mail, Phone
} from 'lucide-react';

export function CollegeDashboard() {
  const { user } = useAuth();
  const { companies, placements, jobs, addCompanyPartnership, addPlacement, postJob } = useData();
  const [activeSection, setActiveSection] = useState('overview');
  const [showAddCompanyModal, setShowAddCompanyModal] = useState(false);
  const [showAddPlacementModal, setShowAddPlacementModal] = useState(false);
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  const stats = [
    { icon: <Users className="w-5 h-5" />, label: 'Active Students', value: '2,847', color: 'orange' },
    { icon: <Briefcase className="w-5 h-5" />, label: 'Placements', value: '156', color: 'green' },
    { icon: <Building2 className="w-5 h-5" />, label: 'Partner Companies', value: '45', color: 'purple' },
    { icon: <Award className="w-5 h-5" />, label: 'Success Rate', value: '87%', color: 'blue' }
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'placement-support', label: 'Placement Support', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'industry-collaborations', label: 'Industry Collaborations', icon: <Handshake className="w-4 h-4" /> },
    { id: 'events-hackathons', label: 'Events & Hackathons', icon: <Calendar className="w-4 h-4" /> },
    { id: 'partner-companies', label: 'Partner with Companies', icon: <Building2 className="w-4 h-4" /> },
    { id: 'college-job-board', label: 'College Job Board', icon: <FileText className="w-4 h-4" /> }
  ];

  const placementStats = [
    { department: 'Computer Science', students: 450, placed: 398, percentage: 88 },
    { department: 'Electronics', students: 320, placed: 276, percentage: 86 },
    { department: 'Mechanical', students: 380, placed: 323, percentage: 85 },
    { department: 'Civil', students: 290, placed: 232, percentage: 80 },
    { department: 'MBA', students: 180, placed: 162, percentage: 90 }
  ];

  const partnerCompanies = [
    {
      name: 'TCS',
      type: 'IT Services',
      students_hired: 45,
      avg_package: '₹3.5 LPA',
      next_visit: 'Mar 20, 2025',
      status: 'Active Partner'
    },
    {
      name: 'Infosys',
      type: 'IT Services',
      students_hired: 38,
      avg_package: '₹4.2 LPA',
      next_visit: 'Apr 5, 2025',
      status: 'Active Partner'
    },
    {
      name: 'Microsoft',
      type: 'Technology',
      students_hired: 12,
      avg_package: '₹18 LPA',
      next_visit: 'May 15, 2025',
      status: 'Premium Partner'
    },
    {
      name: 'Amazon',
      type: 'E-commerce',
      students_hired: 8,
      avg_package: '₹22 LPA',
      next_visit: 'Jun 10, 2025',
      status: 'Premium Partner'
    }
  ];

  const upcomingEvents = [
    {
      name: 'Tech Symposium 2025',
      date: 'Mar 15-17, 2025',
      type: 'Conference',
      participants: 500,
      companies: 25,
      description: 'Annual technical conference with industry leaders'
    },
    {
      name: 'Innovation Hackathon',
      date: 'Apr 2-4, 2025',
      type: 'Hackathon',
      participants: 200,
      companies: 12,
      description: '48-hour hackathon focused on sustainable technology'
    },
    {
      name: 'Career Fair 2025',
      date: 'Apr 20, 2025',
      type: 'Job Fair',
      participants: 800,
      companies: 40,
      description: 'Campus recruitment drive for final year students'
    }
  ];

  const industryCollaborations = [
    {
      company: 'Google',
      type: 'Research Partnership',
      project: 'AI in Education',
      duration: '2 years',
      funding: '₹50 Lakhs',
      students_involved: 15
    },
    {
      company: 'IBM',
      type: 'Curriculum Development',
      project: 'Cloud Computing Course',
      duration: '1 year',
      funding: '₹25 Lakhs',
      students_involved: 100
    },
    {
      company: 'Wipro',
      type: 'Skill Development',
      project: 'Industry Ready Program',
      duration: '6 months',
      funding: '₹15 Lakhs',
      students_involved: 80
    }
  ];

  const jobPostings = [
    {
      title: 'Software Developer Intern',
      company: 'TechStart Inc.',
      type: 'Internship',
      duration: '6 months',
      stipend: '₹25,000/month',
      applications: 45,
      deadline: 'Mar 30, 2025'
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Pro',
      type: 'Full-time',
      duration: 'Permanent',
      salary: '₹6-8 LPA',
      applications: 32,
      deadline: 'Apr 15, 2025'
    },
    {
      title: 'Marketing Associate',
      company: 'Brand Solutions',
      type: 'Full-time',
      duration: 'Permanent',
      salary: '₹4-6 LPA',
      applications: 28,
      deadline: 'Apr 10, 2025'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Placement Overview */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🎓 Placement Overview</h2>
              <div className="space-y-4">
                {placementStats.map((dept, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900">{dept.department}</h3>
                      <span className="text-green-600 font-medium">{dept.percentage}%</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                      <span>{dept.placed} placed out of {dept.students} students</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-500 h-2 rounded-full"
                        style={{ width: `${dept.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">⚡ Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Plus className="w-8 h-8 text-orange-600 mb-2" />
                  <span className="text-sm font-medium">Add Company</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Schedule Event</span>
                </button>
                <button 
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setShowPostJobModal(true)}
                >
                  <FileText className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Post Job</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">View Reports</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'placement-support':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">💼 Placement Support</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Placement Statistics */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Department-wise Placement Stats</h3>
                <div className="space-y-4">
                  {placementStats.map((dept, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">{dept.department}</h4>
                        <span className="text-green-600 font-medium">{dept.percentage}%</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {dept.placed} placed out of {dept.students} students
                      </p>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-orange-500 h-2 rounded-full"
                          style={{ width: `${dept.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Placement Services */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Placement Services</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Resume Building Workshop</h4>
                    <p className="text-sm text-gray-600 mb-2">Help students create professional resumes</p>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Schedule Workshop →
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Mock Interview Sessions</h4>
                    <p className="text-sm text-gray-600 mb-2">Prepare students for company interviews</p>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Organize Sessions →
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Aptitude Training</h4>
                    <p className="text-sm text-gray-600 mb-2">Enhance problem-solving and analytical skills</p>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Start Training →
                    </button>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Soft Skills Development</h4>
                    <p className="text-sm text-gray-600 mb-2">Communication and personality development</p>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Enroll Students →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'industry-collaborations':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🤝 Industry Collaborations</h2>
            
            <div className="space-y-6">
              {industryCollaborations.map((collab, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{collab.company}</h3>
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm font-medium rounded-full">
                        {collab.type}
                      </span>
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      View Details →
                    </button>
                  </div>
                  
                  <h4 className="font-medium text-gray-900 mb-2">{collab.project}</h4>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Duration</p>
                      <p className="font-medium">{collab.duration}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Funding</p>
                      <p className="font-medium text-green-600">{collab.funding}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Students Involved</p>
                      <p className="font-medium">{collab.students_involved}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                      Manage Project
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Contact Partner
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                + Add New Collaboration
              </button>
            </div>
          </div>
        );

      case 'events-hackathons':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">📅 Events & Hackathons</h2>
            
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        event.type === 'Conference' ? 'bg-blue-100 text-blue-800' :
                        event.type === 'Hackathon' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {event.type}
                      </span>
                    </div>
                    <button className="text-orange-600 hover:text-orange-700 text-sm font-medium">
                      Manage Event →
                    </button>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Date</p>
                      <p className="font-medium">{event.date}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Participants</p>
                      <p className="font-medium">{event.participants}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Companies</p>
                      <p className="font-medium">{event.companies}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                      Edit Event
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      View Registrations
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors">
                + Create New Event
              </button>
            </div>
          </div>
        );

      case 'partner-companies':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🏢 Partner Companies</h2>
            
            <div className="space-y-6">
              {companies.map((company) => (
                <div key={company.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{company.name}</h3>
                      <p className="text-gray-600 text-sm">{company.industry}</p>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      company.partnershipType === 'Premium Partner' ? 'bg-purple-100 text-purple-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {company.partnershipType}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Jobs Posted</p>
                      <p className="font-medium text-green-600">{company.jobsPosted}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Students Hired</p>
                      <p className="font-medium">{company.studentsHired}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Company Size</p>
                      <p className="font-medium">{company.size}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Location</p>
                      <p className="font-medium">{company.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                      Schedule Visit
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      View History
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Contact
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button 
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition-colors"
                onClick={() => setShowAddCompanyModal(true)}
              >
                + Add New Partner
              </button>
            </div>
          </div>
        );

      case 'college-job-board':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">📋 College Job Board</h2>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search jobs, companies..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent">
                    <option>All Types</option>
                    <option>Full-time</option>
                    <option>Internship</option>
                  </select>
                  <button 
                    className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors"
                    onClick={() => setShowPostJobModal(true)}
                  >
                    + Post Job
                  </button>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              {jobs.slice(0, 5).map((job) => (
                <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                      job.type === 'internship' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                    }`}>
                      {job.type}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Location</p>
                      <p className="font-medium">{job.location}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Salary</p>
                      <p className="font-medium text-green-600">{job.salary}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Applications</p>
                      <p className="font-medium">{job.applications || 0}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Posted</p>
                      <p className="font-medium text-red-600">{job.postedDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm">
                      View Applications
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Edit Job
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Share
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user?.name}! 🎓
          </h1>
          <p className="text-gray-600 mt-2">Manage your institution's career services and partnerships</p>
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
                  stat.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                  stat.color === 'green' ? 'bg-green-100 text-green-600' :
                  stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === item.id
                        ? 'bg-orange-100 text-orange-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>

        {/* Add Company Modal */}
        {showAddCompanyModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setShowAddCompanyModal(false)} />
              <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
                <h3 className="text-lg font-semibold mb-4">Add Company Partnership</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  addCompanyPartnership({
                    name: formData.get('name') as string,
                    industry: formData.get('industry') as string,
                    size: formData.get('size') as string,
                    location: formData.get('location') as string,
                    jobsPosted: 0,
                    studentsHired: 0,
                    partnershipType: 'Active Partner'
                  });
                  setShowAddCompanyModal(false);
                }}>
                  <div className="space-y-4">
                    <input name="name" placeholder="Company Name" className="w-full p-2 border rounded" required />
                    <input name="industry" placeholder="Industry" className="w-full p-2 border rounded" required />
                    <input name="size" placeholder="Company Size" className="w-full p-2 border rounded" required />
                    <input name="location" placeholder="Location" className="w-full p-2 border rounded" required />
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <button type="submit" className="flex-1 bg-orange-600 text-white py-2 rounded">Add Partnership</button>
                    <button type="button" onClick={() => setShowAddCompanyModal(false)} className="flex-1 border py-2 rounded">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Post Job Modal */}
        {showPostJobModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setShowPostJobModal(false)} />
              <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
                <h3 className="text-lg font-semibold mb-4">Post New Job</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  postJob({
                    title: formData.get('title') as string,
                    company: formData.get('company') as string,
                    type: formData.get('type') as 'full-time' | 'internship' | 'part-time',
                    location: formData.get('location') as string,
                    salary: formData.get('salary') as string,
                    description: formData.get('description') as string,
                    requirements: (formData.get('requirements') as string).split(',').map(r => r.trim()),
                    postedDate: 'Today',
                    applications: 0,
                    status: 'active'
                  });
                  setShowPostJobModal(false);
                }}>
                  <div className="space-y-4">
                    <input name="title" placeholder="Job Title" className="w-full p-2 border rounded" required />
                    <input name="company" placeholder="Company Name" className="w-full p-2 border rounded" required />
                    <select name="type" className="w-full p-2 border rounded" required>
                      <option value="">Select Type</option>
                      <option value="full-time">Full-time</option>
                      <option value="internship">Internship</option>
                      <option value="part-time">Part-time</option>
                    </select>
                    <input name="location" placeholder="Location" className="w-full p-2 border rounded" required />
                    <input name="salary" placeholder="Salary/Stipend" className="w-full p-2 border rounded" required />
                    <textarea name="description" placeholder="Job Description" className="w-full p-2 border rounded h-20" required />
                    <input name="requirements" placeholder="Requirements (comma separated)" className="w-full p-2 border rounded" required />
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <button type="submit" className="flex-1 bg-orange-600 text-white py-2 rounded">Post Job</button>
                    <button type="button" onClick={() => setShowPostJobModal(false)} className="flex-1 border py-2 rounded">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}