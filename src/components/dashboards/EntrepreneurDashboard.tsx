import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { 
  Lightbulb, TrendingUp, Users, DollarSign, Calendar, 
  FileText, Award, MessageSquare, Target, Rocket,
  Building2, BookOpen, Video, Headphones, ChevronRight,
  Play, Download, Heart, Share2, Plus, Star, Clock,
  MapPin, User, Trophy, Briefcase, Code, Brain
} from 'lucide-react';

export function EntrepreneurDashboard() {
  const { user } = useAuth();
  const { mentors, events, bookMentor, registerForEvent } = useData();
  const [activeSection, setActiveSection] = useState('overview');

  const stats = [
    { icon: <Rocket className="w-5 h-5" />, label: 'Startup Stage', value: 'MVP', color: 'green' },
    { icon: <DollarSign className="w-5 h-5" />, label: 'Funding Goal', value: '₹50L', color: 'blue' },
    { icon: <Users className="w-5 h-5" />, label: 'Team Size', value: '4', color: 'purple' },
    { icon: <Award className="w-5 h-5" />, label: 'Milestones', value: '3/5', color: 'orange' }
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'startup-launchpad', label: 'Startup Launchpad', icon: <Rocket className="w-4 h-4" /> },
    { id: 'founder-stories', label: 'Founder Stories & Case Studies', icon: <Users className="w-4 h-4" /> },
    { id: 'startup-tools', label: 'Startup Tools & Templates', icon: <FileText className="w-4 h-4" /> },
    { id: 'legal-business', label: 'Legal & Business Guides', icon: <Award className="w-4 h-4" /> },
    { id: 'events', label: 'Events & Webinars', icon: <Calendar className="w-4 h-4" /> },
    { id: 'mentorship', label: 'Mentorship', icon: <Users className="w-4 h-4" /> },
    { id: 'community', label: 'Community', icon: <MessageSquare className="w-4 h-4" /> }
  ];

  const fundingSources = [
    {
      name: 'Angel Investors',
      description: 'Individual investors providing seed funding',
      amount: '₹25L - ₹1Cr',
      timeline: '2-4 months',
      success_rate: '15%',
      requirements: ['MVP', 'Traction', 'Team']
    },
    {
      name: 'Venture Capital',
      description: 'Professional investment firms',
      amount: '₹1Cr - ₹50Cr',
      timeline: '4-8 months',
      success_rate: '5%',
      requirements: ['Revenue', 'Growth', 'Market Size']
    },
    {
      name: 'Government Grants',
      description: 'MSME, SIDBI, and startup schemes',
      amount: '₹10L - ₹50L',
      timeline: '3-6 months',
      success_rate: '25%',
      requirements: ['Registration', 'Business Plan', 'Compliance']
    },
    {
      name: 'Crowdfunding',
      description: 'Public funding through platforms',
      amount: '₹5L - ₹25L',
      timeline: '1-3 months',
      success_rate: '35%',
      requirements: ['Prototype', 'Marketing', 'Community']
    }
  ];

  const pitchDeckTemplates = [
    { name: 'SaaS Startup Template', slides: 12, downloads: 2450, rating: 4.8 },
    { name: 'E-commerce Template', slides: 14, downloads: 1890, rating: 4.7 },
    { name: 'FinTech Template', slides: 15, downloads: 1650, rating: 4.9 },
    { name: 'HealthTech Template', slides: 13, downloads: 1320, rating: 4.6 },
    { name: 'EdTech Template', slides: 11, downloads: 1180, rating: 4.8 },
    { name: 'General Template', slides: 10, downloads: 3200, rating: 4.5 }
  ];

  const incubators = [
    {
      name: 'T-Hub',
      location: 'Hyderabad',
      focus: 'Tech Startups',
      funding: '₹15L + Mentorship',
      duration: '6 months',
      success_stories: 120,
      application_deadline: 'Mar 31, 2025'
    },
    {
      name: 'NASSCOM 10K Startups',
      location: 'Pan India',
      focus: 'Product Startups',
      funding: 'Mentorship + Network',
      duration: '12 months',
      success_stories: 500,
      application_deadline: 'Apr 15, 2025'
    },
    {
      name: 'IIT Madras Incubation Cell',
      location: 'Chennai',
      focus: 'Deep Tech',
      funding: '₹25L + Lab Access',
      duration: '18 months',
      success_stories: 85,
      application_deadline: 'May 1, 2025'
    }
  ];

  const founderStories = [
    {
      founder: 'Ritesh Agarwal',
      company: 'OYO',
      story: 'From a small town to building India\'s largest hospitality chain',
      industry: 'Hospitality',
      funding: '$1.5B+',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      key_learnings: ['Customer-first approach', 'Rapid scaling', 'International expansion']
    },
    {
      founder: 'Bhavish Aggarwal',
      company: 'Ola',
      story: 'Revolutionizing transportation in India with technology',
      industry: 'Transportation',
      funding: '$3.8B+',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      key_learnings: ['Local market understanding', 'Technology innovation', 'Regulatory navigation']
    },
    {
      founder: 'Falguni Nayar',
      company: 'Nykaa',
      story: 'Building India\'s leading beauty e-commerce platform',
      industry: 'E-commerce',
      funding: '$700M+',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      key_learnings: ['Omnichannel strategy', 'Brand building', 'Customer trust']
    }
  ];

  const startupTools = [
    {
      category: 'Business Planning',
      tools: [
        { name: 'Business Model Canvas', type: 'Template', price: 'Free' },
        { name: 'Financial Model Template', type: 'Spreadsheet', price: 'Free' },
        { name: 'Market Research Guide', type: 'Document', price: 'Free' },
        { name: 'Competitor Analysis Tool', type: 'Template', price: 'Free' }
      ]
    },
    {
      category: 'Legal & Compliance',
      tools: [
        { name: 'Startup Registration Guide', type: 'Guide', price: 'Free' },
        { name: 'Founder Agreement Template', type: 'Legal Doc', price: '₹999' },
        { name: 'Employee Contract Template', type: 'Legal Doc', price: '₹499' },
        { name: 'IP Protection Guide', type: 'Guide', price: 'Free' }
      ]
    },
    {
      category: 'Marketing & Sales',
      tools: [
        { name: 'Go-to-Market Strategy', type: 'Template', price: 'Free' },
        { name: 'Social Media Kit', type: 'Design Pack', price: '₹299' },
        { name: 'Email Templates', type: 'Template Pack', price: 'Free' },
        { name: 'Sales Funnel Builder', type: 'Tool', price: '₹1999/mo' }
      ]
    }
  ];

  const legalGuides = [
    {
      title: 'Startup Registration in India',
      description: 'Complete guide to register your startup legally',
      topics: ['Company Registration', 'DPIIT Recognition', 'Tax Benefits'],
      duration: '30 min read',
      difficulty: 'Beginner'
    },
    {
      title: 'Intellectual Property Protection',
      description: 'Protect your ideas, trademarks, and patents',
      topics: ['Patents', 'Trademarks', 'Copyrights', 'Trade Secrets'],
      duration: '45 min read',
      difficulty: 'Intermediate'
    },
    {
      title: 'Fundraising Legal Framework',
      description: 'Legal aspects of raising funds from investors',
      topics: ['Term Sheets', 'Due Diligence', 'Valuation', 'Exit Clauses'],
      duration: '60 min read',
      difficulty: 'Advanced'
    },
    {
      title: 'Employment Law for Startups',
      description: 'Hiring, contracts, and compliance requirements',
      topics: ['Employment Contracts', 'ESOP', 'Labor Laws', 'Termination'],
      duration: '40 min read',
      difficulty: 'Intermediate'
    }
  ];

  const upcomingEvents = [
    {
      name: 'Startup Pitch Competition',
      date: 'Mar 15, 2025',
      time: '10:00 AM - 6:00 PM',
      type: 'Competition',
      organizer: 'TiE Mumbai',
      prize: '₹5L Prize Pool',
      registrations: 450
    },
    {
      name: 'Founder Networking Meetup',
      date: 'Mar 20, 2025',
      time: '6:00 PM - 9:00 PM',
      type: 'Networking',
      organizer: 'Startup India',
      prize: 'Free Networking',
      registrations: 180
    },
    {
      name: 'Investor Connect Session',
      date: 'Mar 25, 2025',
      time: '2:00 PM - 5:00 PM',
      type: 'Funding',
      organizer: 'Indian Angel Network',
      prize: 'Direct Investor Access',
      registrations: 120
    }
  ];

  const mentorshipOptions = [
    {
      type: 'Industry Expert Mentors',
      description: 'Get guidance from successful entrepreneurs and industry leaders',
      available: 25,
      duration: '1 hour/session',
      price: '₹2,000/session'
    },
    {
      type: 'Peer Founder Groups',
      description: 'Connect with fellow entrepreneurs at similar stages',
      available: 8,
      duration: '2 hours/week',
      price: 'Free'
    },
    {
      type: 'Investor Mentorship',
      description: 'Learn from VCs and angel investors',
      available: 12,
      duration: '45 min/session',
      price: '₹5,000/session'
    },
    {
      type: 'AI Business Advisor',
      description: '24/7 AI-powered business guidance and strategy',
      available: 'Always',
      duration: 'Unlimited',
      price: '₹999/month'
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Startup Progress */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🚀 Startup Journey Progress</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Idea Validation</span>
                      <span className="text-sm text-green-600">Completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">MVP Development</span>
                      <span className="text-sm text-green-600">Completed</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Market Testing</span>
                      <span className="text-sm text-blue-600">In Progress</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-900">Seed Funding</span>
                      <span className="text-sm text-gray-500">Upcoming</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                      <div className="bg-gray-300 h-2 rounded-full" style={{ width: '20%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">⚡ Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <FileText className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Create Pitch Deck</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <DollarSign className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Find Funding</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Users className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">Find Co-founder</span>
                </button>
                <button className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <Award className="w-8 h-8 text-orange-600 mb-2" />
                  <span className="text-sm font-medium">Apply to Incubator</span>
                </button>
              </div>
            </div>
          </div>
        );

      case 'startup-launchpad':
        return (
          <div className="space-y-8">
            {/* Funding Sources */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">💰 Funding Sources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {fundingSources.map((funding, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{funding.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{funding.description}</p>
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Funding Range:</span>
                        <span className="font-medium">{funding.amount}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Timeline:</span>
                        <span className="font-medium">{funding.timeline}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Success Rate:</span>
                        <span className="font-medium text-green-600">{funding.success_rate}</span>
                      </div>
                    </div>
                    <div className="mb-4">
                      <p className="text-sm text-gray-600 mb-2">Requirements:</p>
                      <div className="flex flex-wrap gap-2">
                        {funding.requirements.map((req, reqIndex) => (
                          <span key={reqIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                    <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Pitch Deck Templates */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">📊 Pitch Deck Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pitchDeckTemplates.map((template, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <h3 className="font-semibold text-gray-900 mb-2">{template.name}</h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">{template.slides} slides</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-gray-600">{template.rating}</span>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">{template.downloads.toLocaleString()} downloads</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm hover:bg-blue-700 transition-colors">
                        Preview
                      </button>
                      <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-3 rounded text-sm hover:bg-gray-50 transition-colors">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Incubators & Accelerators */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">🏢 Incubators & Accelerators</h2>
              <div className="space-y-6">
                {incubators.map((incubator, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{incubator.name}</h3>
                        <p className="text-gray-600 text-sm flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {incubator.location}
                        </p>
                      </div>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {incubator.focus}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div>
                        <p className="text-gray-600 text-sm">Funding</p>
                        <p className="font-medium">{incubator.funding}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Duration</p>
                        <p className="font-medium">{incubator.duration}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Success Stories</p>
                        <p className="font-medium">{incubator.success_stories}</p>
                      </div>
                      <div>
                        <p className="text-gray-600 text-sm">Deadline</p>
                        <p className="font-medium text-red-600">{incubator.application_deadline}</p>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'founder-stories':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">👥 Founder Stories & Case Studies</h2>
            <div className="space-y-8">
              {founderStories.map((story, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-6">
                    <img
                      src={story.image}
                      alt={story.founder}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">{story.founder}</h3>
                          <p className="text-green-600 font-medium">{story.company}</p>
                          <p className="text-gray-600 text-sm">{story.industry} • {story.funding} raised</p>
                        </div>
                        <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                          Read Full Story →
                        </button>
                      </div>
                      <p className="text-gray-700 mb-4">{story.story}</p>
                      <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">Key Learnings:</p>
                        <div className="flex flex-wrap gap-2">
                          {story.key_learnings.map((learning, learningIndex) => (
                            <span key={learningIndex} className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">
                              {learning}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'startup-tools':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🛠️ Startup Tools & Templates</h2>
            <div className="space-y-8">
              {startupTools.map((category, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="font-medium text-gray-900">{tool.name}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            tool.price === 'Free' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {tool.price}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{tool.type}</p>
                        <div className="flex space-x-2">
                          <button className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-sm hover:bg-green-700 transition-colors">
                            {tool.price === 'Free' ? 'Download' : 'Purchase'}
                          </button>
                          <button className="px-3 py-2 border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50 transition-colors">
                            Preview
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'legal-business':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">⚖️ Legal & Business Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {legalGuides.map((guide, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 mb-2">Topics Covered:</p>
                    <div className="flex flex-wrap gap-2">
                      {guide.topics.map((topic, topicIndex) => (
                        <span key={topicIndex} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {guide.duration}
                      </div>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        guide.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                        guide.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {guide.difficulty}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                    Read Guide
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">📅 Events & Webinars</h2>
            <div className="space-y-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{event.name}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.type === 'Competition' ? 'bg-purple-100 text-purple-800' :
                          event.type === 'Networking' ? 'bg-orange-100 text-orange-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">Organized by {event.organizer}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {event.time}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-green-600 font-medium">{event.prize}</span>
                        <span className="text-gray-600">{event.registrations} registered</span>
                      </div>
                    </div>
                    <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">
                      Register
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'mentorship':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">👥 Mentorship</h2>
            <div className="space-y-8">
              {/* Available Mentors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Expert Mentors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mentors.filter(mentor => mentor.expertise.includes('Technology') || mentor.expertise.includes('Business')).map((mentor) => (
                    <div key={mentor.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{mentor.name}</h4>
                          <p className="text-green-600 font-medium">{mentor.expertise}</p>
                          <p className="text-gray-600 text-sm">{mentor.experience}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-1 mb-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="font-medium">{mentor.rating}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{mentor.sessions} sessions</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 font-medium">{mentor.price}</span>
                        <button 
                          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
                          onClick={() => bookMentor(mentor.id)}
                          disabled={!mentor.available}
                        >
                          {mentor.available ? 'Book Session' : 'Unavailable'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentorship Programs */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentorship Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mentorshipOptions.map((option, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.type}</h4>
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Available:</span>
                          <span className="font-medium text-green-600">
                            {typeof option.available === 'number' ? `${option.available} mentors` : option.available}
                          </span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{option.duration}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">Price:</span>
                          <span className="font-medium text-blue-600">{option.price}</span>
                        </div>
                      </div>
                      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors">
                        Join Program
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">💬 Community</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.filter(event => event.type === 'webinar' || event.type === 'workshop').map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Founder Groups</h3>
                <div className="space-y-4">
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Early Stage Founders</h4>
                      <span className="text-green-600 text-sm font-medium">Join</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Connect with founders in ideation and MVP stage</p>
                    <p className="text-gray-500 text-xs">1,250 members • Very Active</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">SaaS Founders India</h4>
                      <span className="text-green-600 text-sm font-medium">Join</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Exclusive group for SaaS startup founders</p>
                    <p className="text-gray-500 text-xs">890 members • Active</p>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Women Entrepreneurs</h4>
                      <span className="text-green-600 text-sm font-medium">Join</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">Supporting women in entrepreneurship</p>
                    <p className="text-gray-500 text-xs">650 members • Active</p>
                  </div>
                </div>
              </div>

              {/* Success Leaderboard */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Success Leaderboard</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                    <span className="w-8 h-8 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Arjun Startup</p>
                      <p className="text-sm text-gray-600">₹2Cr funding raised</p>
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <Trophy className="w-5 h-5 text-yellow-500" />
                  </div>
                  
                          event.type === 'hackathon' ? 'bg-purple-100 text-purple-800' :
                    <span className="w-8 h-8 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Priya Tech</p>
                      <p className="text-sm text-gray-600">₹1.5Cr funding raised</p>
                    </div>
                      <p className="text-gray-600 text-sm mb-1">{event.date} • {event.time}</p>
                      <p className="text-gray-500 text-xs">{event.registrations}/{event.maxCapacity} registered</p>
                  
                  <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                    <span className="w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">Rahul Innovations</p>
                      <p className="text-sm text-gray-600">₹1Cr funding raised</p>
                    </div>
                    <Award className="w-5 h-5 text-orange-500" />
                  </div>
                          registerForEvent(event.id);
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                    <span className="w-8 h-8 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-bold">12</span>
                    <div className="flex-1">
                      <p className="font-medium text-green-600">Your Startup</p>
                      <p className="text-sm text-gray-600">MVP Stage</p>
                    </div>
                    <Rocket className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
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
            Welcome, {user?.name}! 🚀
          </h1>
          <p className="text-gray-600 mt-2">Build your startup with comprehensive resources and support</p>
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
                        ? 'bg-green-100 text-green-700 font-medium'
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