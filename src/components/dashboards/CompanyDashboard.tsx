import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Users, Briefcase, Calendar, TrendingUp, Award, Building2, Target, MessageSquare, Search, Plus, Filter, MapPin, Clock, Star, ChevronRight, FileText, Video, Globe, Mail, Phone, UserCheck, BarChart3, Eye, CreditCard as Edit, Share2, Download } from 'lucide-react';

export function CompanyDashboard() {
  const { user } = useAuth();
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, label: 'Active Jobs', value: '12', color: 'purple' },
    { icon: <Users className="w-5 h-5" />, label: 'Applications', value: '284', color: 'green' },
    { icon: <Award className="w-5 h-5" />, label: 'Hired', value: '23', color: 'blue' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Success Rate', value: '78%', color: 'orange' }
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'hire-interns-freshers', label: 'Hire Interns / Freshers', icon: <Users className="w-4 h-4" /> },
    { id: 'post-jobs-projects', label: 'Post Jobs & Projects', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'branding-campus', label: 'Branding & Campus Engagement', icon: <Building2 className="w-4 h-4" /> },
    { id: 'talent-pool', label: 'Access Student Talent Pool', icon: <UserCheck className="w-4 h-4" /> }
  ];

  const activeJobs = [
    {
      title: 'Software Developer Intern',
      type: 'Internship',
      location: 'Bangalore',
      applications: 45,
      posted: '5 days ago',
      deadline: 'Mar 30, 2025',
      status: 'Active',
      views: 234
    },
    {
      title: 'Frontend Developer',
      type: 'Full-time',
      location: 'Remote',
      applications: 32,
      posted: '1 week ago',
      deadline: 'Apr 15, 2025',
      status: 'Active',
      views: 189
    },
    {
      title: 'Data Analyst',
      type: 'Full-time',
      location: 'Mumbai',
      applications: 28,
      posted: '3 days ago',
      deadline: 'Apr 10, 2025',
      status: 'Active',
      views: 156
    }
  ];

  const talentPool = [
    {
      name: 'Priya Sharma',
      degree: 'B.Tech Computer Science',
      college: 'IIT Delhi',
      year: 'Final Year',
      skills: ['React', 'Node.js', 'Python', 'AWS'],
      gpa: '8.9',
      projects: 5,
      experience: '2 internships'
    },
    {
      name: 'Rahul Kumar',
      degree: 'B.Tech Electronics',
      college: 'NIT Trichy',
      year: 'Final Year',
      skills: ['Java', 'Spring Boot', 'MySQL', 'Docker'],
      gpa: '8.7',
      projects: 4,
      experience: '1 internship'
    },
    {
      name: 'Anjali Patel',
      degree: 'MBA Marketing',
      college: 'IIM Ahmedabad',
      year: 'Final Year',
      skills: ['Digital Marketing', 'Analytics', 'Strategy', 'Leadership'],
      gpa: '9.1',
      projects: 3,
      experience: '3 internships'
    }
  ];

  const campusEngagements = [
    {
      college: 'IIT Bombay',
      type: 'Campus Recruitment',
      date: 'Mar 20, 2025',
      students: 150,
      status: 'Scheduled',
      contact: 'placement@iitb.ac.in'
    },
    {
      college: 'NIT Karnataka',
      type: 'Tech Talk',
      date: 'Apr 5, 2025',
      students: 200,
      status: 'Confirmed',
      contact: 'careers@nitk.edu.in'
    },
    {
      college: 'BITS Pilani',
      type: 'Hackathon Sponsorship',
      date: 'Apr 15-17, 2025',
      students: 300,
      status: 'Planning',
      contact: 'events@bits-pilani.ac.in'
    }
  ];

  const brandingOpportunities = [
    {
      type: 'Tech Conference Sponsorship',
      event: 'DevFest 2025',
      reach: '5,000+ students',
      cost: '₹2,50,000',
      benefits: ['Logo placement', 'Speaking slot', 'Booth space']
    },
    {
      type: 'College Newsletter Ad',
      event: 'Monthly Newsletter',
      reach: '10,000+ students',
      cost: '₹25,000/month',
      benefits: ['Brand visibility', 'Job posting priority', 'Direct reach']
    },
    {
      type: 'Hackathon Title Sponsor',
      event: 'Innovation Challenge',
      reach: '1,000+ participants',
      cost: '₹5,00,000',
      benefits: ['Title rights', 'Judging panel', 'Winner hiring priority']
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Hiring Pipeline */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">📊 Hiring Pipeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">284</div>
                  <div className="text-sm text-gray-600">Total Applications</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">156</div>
                  <div className="text-sm text-gray-600">Under Review</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">45</div>
                  <div className="text-sm text-gray-600">Interviews Scheduled</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">23</div>
                  <div className="text-sm text-gray-600">Offers Extended</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">⚡ Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Plus className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">Post New Job</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Search className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Search Talent</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Schedule Campus Visit</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <BarChart3 className="w-8 h-8 text-orange-600 mb-2" />
                  <span className="text-sm font-medium">View Analytics</span>
                </button>
              </div>
            </div>

            {/* Recent Applications */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">📋 Recent Applications</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">PS</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Priya Sharma</h4>
                      <p className="text-sm text-gray-600">Applied for Software Developer Intern</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">New</span>
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">Review</button>
                  </div>
                </div>
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">RK</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Rahul Kumar</h4>
                      <p className="text-sm text-gray-600">Applied for Frontend Developer</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full">Under Review</span>
                    <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">Review</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'hire-interns-freshers':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">👥 Hire Interns / Freshers</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Talent Search */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Search Talent</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Skills Required</label>
                    <input
                      type="text"
                      placeholder="e.g., React, Python, Java"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education Level</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>All Levels</option>
                      <option>B.Tech</option>
                      <option>M.Tech</option>
                      <option>MBA</option>
                      <option>BCA</option>
                      <option>MCA</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location Preference</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option>Any Location</option>
                      <option>Bangalore</option>
                      <option>Mumbai</option>
                      <option>Delhi</option>
                      <option>Hyderabad</option>
                      <option>Remote</option>
                    </select>
                  </div>
                  <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors">
                    Search Candidates
                  </button>
                </div>
              </div>

              {/* Hiring Programs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Hiring Programs</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Campus Recruitment Drive</h4>
                    <p className="text-sm text-gray-600 mb-3">Organize campus visits for bulk hiring</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600">15+ colleges available</span>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Schedule Visit →
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Internship Program</h4>
                    <p className="text-sm text-gray-600 mb-3">3-6 month internship with conversion opportunity</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600">200+ interested students</span>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Start Program →
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-900 mb-2">Graduate Trainee Program</h4>
                    <p className="text-sm text-gray-600 mb-3">Structured training program for fresh graduates</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-green-600">50+ applications ready</span>
                      <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                        Launch Program →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'post-jobs-projects':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">💼 Post Jobs & Projects</h2>
            
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">Active Job Postings</h3>
                <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  + Post New Job
                </button>
              </div>
              
              <div className="space-y-4">
                {activeJobs.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.posted}
                          </span>
                        </div>
                      </div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        job.type === 'Internship' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-gray-600 text-sm">Applications</p>
                        <p className="font-medium text-green-600">{job.applications}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Views</p>
                        <p className="font-medium">{job.views}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Deadline</p>
                        <p className="font-medium text-red-600">{job.deadline}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Status</p>
                        <p className="font-medium text-green-600">{job.status}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      <button className="flex items-center px-3 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        <Eye className="w-4 h-4 mr-1" />
                        View Applications
                      </button>
                      <button className="flex items-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </button>
                      <button className="flex items-center px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <Share2 className="w-4 h-4 mr-1" />
                        Share
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'branding-campus':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🏢 Branding & Campus Engagement</h2>
            
            <div className="space-y-8">
              {/* Campus Engagements */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Campus Engagements</h3>
                <div className="space-y-4">
                  {campusEngagements.map((engagement, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-1">{engagement.college}</h4>
                          <p className="text-gray-600 text-sm">{engagement.type}</p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          engagement.status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
                          engagement.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {engagement.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-gray-600 text-sm">Date</p>
                          <p className="font-medium">{engagement.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Expected Students</p>
                          <p className="font-medium">{engagement.students}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Contact</p>
                          <p className="font-medium text-purple-600">{engagement.contact}</p>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                          Manage Event
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Contact College
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Branding Opportunities */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Branding Opportunities</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {brandingOpportunities.map((opportunity, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900 mb-2">{opportunity.type}</h4>
                      <p className="text-gray-600 text-sm mb-3">{opportunity.event}</p>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Reach:</span>
                          <span className="font-medium">{opportunity.reach}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Investment:</span>
                          <span className="font-medium text-green-600">{opportunity.cost}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">Benefits:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {opportunity.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        Get Started
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'talent-pool':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">👤 Access Student Talent Pool</h2>
            
            <div className="mb-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search by skills, college, degree..."
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex gap-2">
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>All Degrees</option>
                    <option>B.Tech</option>
                    <option>MBA</option>
                    <option>M.Tech</option>
                  </select>
                  <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                    <option>All Years</option>
                    <option>Final Year</option>
                    <option>Pre-final Year</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {talentPool.map((student, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                        <span className="text-purple-600 font-semibold text-lg">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{student.name}</h3>
                        <p className="text-gray-600 text-sm">{student.degree}</p>
                        <p className="text-gray-600 text-sm">{student.college} • {student.year}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="font-medium">{student.gpa}</span>
                        <span className="text-gray-600 text-sm">GPA</span>
                      </div>
                      <p className="text-gray-600 text-sm">{student.experience}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {student.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">{student.projects}</span> projects completed
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm">
                        View Profile
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Contact
                      </button>
                      <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Load More Candidates
              </button>
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
            Welcome, {user?.name}! 💼
          </h1>
          <p className="text-gray-600 mt-2">Find and hire the best talent for your company</p>
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
                  stat.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                  stat.color === 'green' ? 'bg-green-100 text-green-600' :
                  stat.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                  'bg-orange-100 text-orange-600'
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
                        ? 'bg-purple-100 text-purple-700 font-medium'
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
      </div>
    </div>
  );
}