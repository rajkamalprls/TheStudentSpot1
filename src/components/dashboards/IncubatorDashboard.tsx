import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Users, Briefcase, Calendar, TrendingUp, Award, Building2, Target, MessageSquare, Rocket, Plus, Search, Filter, MapPin, Clock, Star, ChevronRight, FileText, Video, Globe, Mail, Phone, UserCheck, BarChart3, Eye, CreditCard as Edit, Share2, Download, Trophy, Lightbulb, DollarSign, BookOpen, Handshake } from 'lucide-react';

export function IncubatorDashboard() {
  const { user } = useAuth();
  const { startups, events, onboardStartup, updateStartupProgress, createEvent } = useData();
  const [activeSection, setActiveSection] = useState('overview');
  const [showOnboardModal, setShowOnboardModal] = useState(false);
  const [showEventModal, setShowEventModal] = useState(false);

  const stats = [
    { icon: <Rocket className="w-5 h-5" />, label: 'Active Startups', value: '47', color: 'red' },
    { icon: <Users className="w-5 h-5" />, label: 'Founders', value: '128', color: 'green' },
    { icon: <Award className="w-5 h-5" />, label: 'Graduated', value: '12', color: 'purple' },
    { icon: <TrendingUp className="w-5 h-5" />, label: 'Success Rate', value: '82%', color: 'orange' }
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'onboard-startups', label: 'Onboard Startups', icon: <Rocket className="w-4 h-4" /> },
    { id: 'challenges-hackathons', label: 'Host Challenges / Hackathons', icon: <Trophy className="w-4 h-4" /> },
    { id: 'mentorship-workshops', label: 'Mentorship & Workshops', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'partner-network', label: 'Partner Colleges / Companies', icon: <Handshake className="w-4 h-4" /> },
    { id: 'success-stories', label: 'Showcase Success Stories', icon: <Star className="w-4 h-4" /> }
  ];

  const activeStartups = [
    {
      name: 'EcoTech Solutions',
      founder: 'Arjun Patel',
      stage: 'MVP',
      sector: 'CleanTech',
      funding_raised: '₹25L',
      team_size: 4,
      joined: 'Jan 2025',
      mentor: 'Dr. Sharma',
      progress: 65
    },
    {
      name: 'HealthAI',
      founder: 'Priya Reddy',
      stage: 'Prototype',
      sector: 'HealthTech',
      funding_raised: '₹15L',
      team_size: 3,
      joined: 'Dec 2024',
      mentor: 'Mr. Kumar',
      progress: 45
    },
    {
      name: 'EduConnect',
      founder: 'Rahul Singh',
      stage: 'Seed',
      sector: 'EdTech',
      funding_raised: '₹50L',
      team_size: 6,
      joined: 'Nov 2024',
      mentor: 'Ms. Gupta',
      progress: 80
    }
  ];

  const upcomingChallenges = [
    {
      name: 'FinTech Innovation Challenge',
      type: 'Hackathon',
      date: 'Mar 20-22, 2025',
      participants: 150,
      prize_pool: '₹5L',
      sponsors: ['HDFC Bank', 'Paytm', 'Razorpay'],
      status: 'Registration Open'
    },
    {
      name: 'Sustainable Tech Workshop',
      type: 'Workshop',
      date: 'Apr 5, 2025',
      participants: 50,
      prize_pool: 'Free',
      sponsors: ['Tata Group', 'Wipro'],
      status: 'Planning'
    },
    {
      name: 'AI/ML Startup Pitch',
      type: 'Competition',
      date: 'Apr 15, 2025',
      participants: 25,
      prize_pool: '₹3L',
      sponsors: ['Google', 'Microsoft'],
      status: 'Confirmed'
    }
  ];

  const mentorshipPrograms = [
    {
      program: 'Industry Expert Mentorship',
      mentors: 25,
      startups_served: 40,
      sessions_completed: 120,
      satisfaction: '4.8/5'
    },
    {
      program: 'Peer-to-Peer Learning',
      mentors: 15,
      startups_served: 30,
      sessions_completed: 85,
      satisfaction: '4.6/5'
    },
    {
      program: 'Investor Connect Sessions',
      mentors: 12,
      startups_served: 20,
      sessions_completed: 45,
      satisfaction: '4.9/5'
    }
  ];

  const partnerNetwork = [
    {
      name: 'IIT Bombay',
      type: 'College',
      partnership_type: 'Student Exchange',
      startups_referred: 15,
      active_since: '2022',
      contact: 'incubation@iitb.ac.in'
    },
    {
      name: 'TCS',
      type: 'Company',
      partnership_type: 'Corporate Mentorship',
      startups_supported: 8,
      active_since: '2023',
      contact: 'innovation@tcs.com'
    },
    {
      name: 'NASSCOM',
      type: 'Organization',
      partnership_type: 'Program Support',
      startups_connected: 25,
      active_since: '2021',
      contact: 'startups@nasscom.in'
    }
  ];

  const successStories = [
    {
      startup: 'FoodTech Pro',
      founder: 'Anjali Mehta',
      graduated: 'Dec 2024',
      current_valuation: '₹10Cr',
      funding_raised: '₹2Cr',
      employees: 25,
      sector: 'FoodTech',
      achievement: 'Acquired by Zomato'
    },
    {
      startup: 'GreenEnergy Solutions',
      founder: 'Vikram Joshi',
      graduated: 'Oct 2024',
      current_valuation: '₹15Cr',
      funding_raised: '₹3Cr',
      employees: 35,
      sector: 'CleanTech',
      achievement: 'Series A Funding'
    },
    {
      startup: 'MedTech Innovations',
      founder: 'Dr. Kavya Nair',
      graduated: 'Aug 2024',
      current_valuation: '₹8Cr',
      funding_raised: '₹1.5Cr',
      employees: 18,
      sector: 'HealthTech',
      achievement: 'Patent Approved'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Incubation Pipeline */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🚀 Incubation Pipeline</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">25</div>
                  <div className="text-sm text-gray-600">Applications</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">15</div>
                  <div className="text-sm text-gray-600">Under Review</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">47</div>
                  <div className="text-sm text-gray-600">Active Startups</div>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <div className="text-2xl font-bold text-red-600">12</div>
                  <div className="text-sm text-gray-600">Graduated</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">⚡ Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Plus className="w-8 h-8 text-red-600 mb-2" />
                  <span className="text-sm font-medium">Add Startup</span>
                </button>
                <button 
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setShowEventModal(true)}
                >
                  <Trophy className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">Create Challenge</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <BookOpen className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Schedule Workshop</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <BarChart3 className="w-8 h-8 text-orange-600 mb-2" />
                  <span className="text-sm font-medium">View Analytics</span>
                </button>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">📋 Recent Activities</h2>
              <div className="space-y-4">
                {startups.slice(0, 3).map((startup) => (
                  <div key={startup.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                        <Rocket className="w-5 h-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{startup.name} - {startup.progress}% progress</h4>
                        <p className="text-sm text-gray-600">Founded by {startup.founder} • {startup.stage}</p>
                      </div>
                    </div>
                    <button 
                      className="text-red-600 hover:text-red-700 text-sm font-medium"
                      onClick={() => updateStartupProgress(startup.id, Math.min(startup.progress + 10, 100))}
                    >
                      Update Progress
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'onboard-startups':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🚀 Onboard Startups</h2>
            
            <div className="space-y-8">
              {/* Active Startups */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Active Startups</h3>
                  <button 
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
                    onClick={() => setShowOnboardModal(true)}
                  >
                    + Onboard New Startup
                  </button>
                </div>
                
                <div className="space-y-6">
                  {startups.map((startup) => (
                    <div key={startup.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{startup.name}</h4>
                          <p className="text-gray-600 text-sm">Founded by {startup.founder}</p>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          startup.stage === 'mvp' ? 'bg-green-100 text-green-800' :
                          startup.stage === 'Prototype' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {startup.stage}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-gray-600 text-sm">Sector</p>
                          <p className="font-medium">{startup.sector}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Funding Raised</p>
                          <p className="font-medium text-green-600">{startup.funding_raised}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Team Size</p>
                          <p className="font-medium">{startup.team_size}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Mentor</p>
                          <p className="font-medium">{startup.mentor || 'Not assigned'}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-600">{startup.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{ width: `${startup.progress}%` }}
                          />
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                          View Details
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Schedule Meeting
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Assign Mentor
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'challenges-hackathons':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🏆 Host Challenges / Hackathons</h2>
            
            <div className="space-y-8">
              {/* Upcoming Events */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    + Create New Event
                  </button>
                </div>
                
                <div className="space-y-6">
                  {upcomingChallenges.map((challenge, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{challenge.name}</h4>
                          <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                            challenge.type === 'Hackathon' ? 'bg-purple-100 text-purple-800' :
                            challenge.type === 'Workshop' ? 'bg-green-100 text-green-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {challenge.type}
                          </span>
                        </div>
                        <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                          challenge.status === 'Registration Open' ? 'bg-green-100 text-green-800' :
                          challenge.status === 'Planning' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {challenge.status}
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-gray-600 text-sm">Date</p>
                          <p className="font-medium">{challenge.date}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Participants</p>
                          <p className="font-medium">{challenge.participants}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Prize Pool</p>
                          <p className="font-medium text-green-600">{challenge.prize_pool}</p>
                        </div>
                        <div>
                          <p className="text-gray-600 text-sm">Sponsors</p>
                          <p className="font-medium">{challenge.sponsors.length}</p>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-sm font-medium text-gray-900 mb-2">Sponsors:</p>
                        <div className="flex flex-wrap gap-2">
                          {challenge.sponsors.map((sponsor, sponsorIndex) => (
                            <span key={sponsorIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                              {sponsor}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                          Manage Event
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          View Registrations
                        </button>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          Edit Details
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'mentorship-workshops':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">📚 Mentorship & Workshops</h2>
            
            <div className="space-y-8">
              {/* Mentorship Programs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentorship Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {mentorshipPrograms.map((program, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900 mb-3">{program.program}</h4>
                      
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Active Mentors:</span>
                          <span className="font-medium">{program.mentors}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Startups Served:</span>
                          <span className="font-medium">{program.startups_served}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Sessions Completed:</span>
                          <span className="font-medium">{program.sessions_completed}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Satisfaction:</span>
                          <span className="font-medium text-green-600">{program.satisfaction}</span>
                        </div>
                      </div>
                      
                      <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                        Manage Program
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Workshop Management */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Workshop Management</h3>
                  <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors">
                    + Schedule Workshop
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Business Model Canvas Workshop</h4>
                    <p className="text-gray-600 text-sm mb-3">Help startups define their business model</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Next Session:</span>
                        <span className="font-medium">Mar 25, 2025</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Registered:</span>
                        <span className="font-medium">15/20</span>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                      Manage Workshop
                    </button>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Pitch Deck Masterclass</h4>
                    <p className="text-gray-600 text-sm mb-3">Create compelling investor presentations</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Next Session:</span>
                        <span className="font-medium">Apr 8, 2025</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Registered:</span>
                        <span className="font-medium">12/15</span>
                      </div>
                    </div>
                    <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                      Manage Workshop
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'partner-network':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🤝 Partner Colleges / Companies</h2>
            
            <div className="space-y-6">
              {partnerNetwork.map((partner, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{partner.name}</h3>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        partner.type === 'College' ? 'bg-blue-100 text-blue-800' :
                        partner.type === 'Company' ? 'bg-purple-100 text-purple-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {partner.type}
                      </span>
                    </div>
                    <button className="text-red-600 hover:text-red-700 text-sm font-medium">
                      Manage Partnership →
                    </button>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{partner.partnership_type}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">
                        {partner.type === 'College' ? 'Startups Referred' : 
                         partner.type === 'Company' ? 'Startups Supported' : 'Startups Connected'}
                      </p>
                      <p className="font-medium text-green-600">
                        {partner.startups_referred || partner.startups_supported || partner.startups_connected}
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Active Since</p>
                      <p className="font-medium">{partner.active_since}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Contact</p>
                      <p className="font-medium text-red-600">{partner.contact}</p>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                      View Details
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Contact Partner
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Renew Partnership
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                + Add New Partner
              </button>
            </div>
          </div>
        );

      case 'success-stories':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">⭐ Showcase Success Stories</h2>
            
            <div className="space-y-6">
              {successStories.map((story, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{story.startup}</h3>
                      <p className="text-gray-600 text-sm">Founded by {story.founder}</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                      Graduated
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-600 text-sm">Current Valuation</p>
                      <p className="font-medium text-green-600">{story.current_valuation}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Funding Raised</p>
                      <p className="font-medium">{story.funding_raised}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Employees</p>
                      <p className="font-medium">{story.employees}</p>
                    </div>
                    <div>
                      <p className="text-gray-600 text-sm">Sector</p>
                      <p className="font-medium">{story.sector}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Key Achievement:</p>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
                      {story.achievement}
                    </span>
                  </div>
                  
                  <div className="flex space-x-2">
                    <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm">
                      Feature Story
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Create Case Study
                    </button>
                    <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                      Share Success
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors">
                + Add Success Story
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
            Welcome, {user?.name}! 🏢
          </h1>
          <p className="text-gray-600 mt-2">Support and accelerate startup growth in your ecosystem</p>
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
                  stat.color === 'red' ? 'bg-red-100 text-red-600' :
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
                        ? 'bg-red-100 text-red-700 font-medium'
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

        {/* Onboard Startup Modal */}
        {showOnboardModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setShowOnboardModal(false)} />
              <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
                <h3 className="text-lg font-semibold mb-4">Onboard New Startup</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  onboardStartup({
                    name: formData.get('name') as string,
                    founder: formData.get('founder') as string,
                    stage: formData.get('stage') as 'idea' | 'mvp' | 'prototype' | 'seed' | 'series-a',
                    sector: formData.get('sector') as string,
                    fundingRaised: formData.get('fundingRaised') as string,
                    teamSize: parseInt(formData.get('teamSize') as string),
                    progress: 10,
                    joinedDate: new Date().toLocaleDateString()
                  });
                  setShowOnboardModal(false);
                }}>
                  <div className="space-y-4">
                    <input name="name" placeholder="Startup Name" className="w-full p-2 border rounded" required />
                    <input name="founder" placeholder="Founder Name" className="w-full p-2 border rounded" required />
                    <select name="stage" className="w-full p-2 border rounded" required>
                      <option value="">Select Stage</option>
                      <option value="idea">Idea</option>
                      <option value="mvp">MVP</option>
                      <option value="prototype">Prototype</option>
                      <option value="seed">Seed</option>
                      <option value="series-a">Series A</option>
                    </select>
                    <input name="sector" placeholder="Sector (e.g., FinTech, HealthTech)" className="w-full p-2 border rounded" required />
                    <input name="fundingRaised" placeholder="Funding Raised (e.g., ₹10L)" className="w-full p-2 border rounded" required />
                    <input name="teamSize" type="number" placeholder="Team Size" className="w-full p-2 border rounded" required />
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <button type="submit" className="flex-1 bg-red-600 text-white py-2 rounded">Onboard Startup</button>
                    <button type="button" onClick={() => setShowOnboardModal(false)} className="flex-1 border py-2 rounded">Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        {/* Create Event Modal */}
        {showEventModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75" onClick={() => setShowEventModal(false)} />
              <div className="bg-white rounded-lg p-6 w-full max-w-lg relative">
                <h3 className="text-lg font-semibold mb-4">Create New Event</h3>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  createEvent({
                    title: formData.get('title') as string,
                    type: formData.get('type') as 'webinar' | 'workshop' | 'hackathon' | 'networking',
                    date: formData.get('date') as string,
                    time: formData.get('time') as string,
                    organizer: user?.name || 'Incubator',
                    description: formData.get('description') as string,
                    maxCapacity: parseInt(formData.get('maxCapacity') as string)
                  });
                  setShowEventModal(false);
                }}>
                  <div className="space-y-4">
                    <input name="title" placeholder="Event Title" className="w-full p-2 border rounded" required />
                    <select name="type" className="w-full p-2 border rounded" required>
                      <option value="">Select Type</option>
                      <option value="hackathon">Hackathon</option>
                      <option value="workshop">Workshop</option>
                      <option value="webinar">Webinar</option>
                      <option value="networking">Networking</option>
                    </select>
                    <input name="date" type="date" className="w-full p-2 border rounded" required />
                    <input name="time" placeholder="Time (e.g., 10:00 AM - 6:00 PM)" className="w-full p-2 border rounded" required />
                    <input name="maxCapacity" type="number" placeholder="Max Participants" className="w-full p-2 border rounded" required />
                    <textarea name="description" placeholder="Event Description" className="w-full p-2 border rounded h-20" required />
                  </div>
                  <div className="flex space-x-4 mt-6">
                    <button type="submit" className="flex-1 bg-red-600 text-white py-2 rounded">Create Event</button>
                    <button type="button" onClick={() => setShowEventModal(false)} className="flex-1 border py-2 rounded">Cancel</button>
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