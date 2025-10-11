import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useData } from '../../context/DataContext';
import { Modal } from '../common/Modal';
import { LoadingSpinner } from '../common/LoadingSpinner';
import { 
  BookOpen, Briefcase, Calendar, Users, Award, TrendingUp, 
  Star, Target, Clock, MessageSquare, Lightbulb, Code, 
  GraduationCap, FileText, Video, Headphones, Trophy,
  Brain, Rocket, Building2, MapPin, Search, Filter,
  Play, Download, Heart, Share2, ChevronRight, Plus
} from 'lucide-react';

export function StudentDashboard() {
  const { user } = useAuth();
  const { jobs, applications, courses, events, mentors, applyToJob, enrollInCourse, registerForEvent, bookMentor } = useData();
  const [activeSection, setActiveSection] = useState('overview');
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [selectedMentor, setSelectedMentor] = useState<any>(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);
  const [isCourseModalOpen, setIsCourseModalOpen] = useState(false);
  const [isMentorModalOpen, setIsMentorModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const stats = [
    { icon: <Briefcase className="w-5 h-5" />, label: 'Applications', value: '12', color: 'blue' },
    { icon: <BookOpen className="w-5 h-5" />, label: 'Courses', value: '8', color: 'green' },
    { icon: <Award className="w-5 h-5" />, label: 'Points', value: '850', color: 'purple' },
    { icon: <Star className="w-5 h-5" />, label: 'Streak', value: '7 days', color: 'orange' }
  ];

  const navigationItems = [
    { id: 'overview', label: 'Overview', icon: <Target className="w-4 h-4" /> },
    { id: 'learning-path', label: 'Learning Path', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'jobs', label: 'Jobs & Internships', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'learning', label: 'Learning & Development', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'entrepreneurship', label: 'Entrepreneurship Hub', icon: <Rocket className="w-4 h-4" /> },
    { id: 'events', label: 'Events & Webinars', icon: <Calendar className="w-4 h-4" /> },
    { id: 'mentorship', label: 'Mentorship Zone', icon: <Users className="w-4 h-4" /> },
    { id: 'resources', label: 'Resources & Tools', icon: <FileText className="w-4 h-4" /> },
    { id: 'community', label: 'Community', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'support', label: 'Support', icon: <Headphones className="w-4 h-4" /> }
  ];

  const learningPath = [
    { name: 'JavaScript Fundamentals', progress: 100, status: 'completed', duration: '4 weeks' },
    { name: 'React.js Development', progress: 75, status: 'in-progress', duration: '6 weeks' },
    { name: 'Node.js Backend', progress: 30, status: 'in-progress', duration: '8 weeks' },
    { name: 'Database Design', progress: 0, status: 'upcoming', duration: '4 weeks' },
    { name: 'System Design', progress: 0, status: 'upcoming', duration: '6 weeks' }
  ];

  const jobCategories = [
    { name: 'Private Jobs', count: 1250, icon: <Building2 className="w-5 h-5" />, color: 'blue' },
    { name: 'Government Jobs', count: 340, icon: <Award className="w-5 h-5" />, color: 'green' },
    { name: 'Startup Jobs', count: 890, icon: <Rocket className="w-5 h-5" />, color: 'purple' },
    { name: 'Internships', count: 560, icon: <GraduationCap className="w-5 h-5" />, color: 'orange' }
  ];

  const learningModules = [
    { name: 'Coding Practice', icon: <Code className="w-5 h-5" />, description: 'Solve problems & contests', color: 'blue' },
    { name: 'AI Mock Interviews', icon: <Brain className="w-5 h-5" />, description: 'Practice with AI feedback', color: 'purple' },
    { name: 'Notes & Books', icon: <BookOpen className="w-5 h-5" />, description: 'Study materials & resources', color: 'green' },
    { name: 'Exam Prep', icon: <Trophy className="w-5 h-5" />, description: 'Government & competitive exams', color: 'orange' },
    { name: 'Skill Courses', icon: <Star className="w-5 h-5" />, description: 'Marketing, Finance, AI, Design', color: 'red' }
  ];

  const entrepreneurshipTools = [
    { name: 'Startup Launchpad', description: 'Step-by-step startup guide', icon: <Rocket className="w-5 h-5" /> },
    { name: 'Founder Stories', description: 'Success stories & case studies', icon: <Users className="w-5 h-5" /> },
    { name: 'Tools & Templates', description: 'Business plan, pitch deck templates', icon: <FileText className="w-5 h-5" /> },
    { name: 'Legal & Business Guides', description: 'Legal compliance & business setup', icon: <Award className="w-5 h-5" /> }
  ];

  const upcomingEvents = [
    { name: 'React Webinar', date: 'Today, 3:00 PM', type: 'Webinar', attendees: 1200 },
    { name: 'AI/ML Workshop', date: 'Mar 15, 10:00 AM', type: 'Workshop', attendees: 500 },
    { name: 'Hackathon 2025', date: 'Mar 20-22', type: 'Competition', attendees: 2500 },
    { name: 'Career Fair', date: 'Apr 5, 10:00 AM', type: 'Networking', attendees: 800 }
  ];

  const mentorshipOptions = [
    { type: '1:1 Mentorship', description: 'Personal guidance from industry experts', available: 45 },
    { type: 'Peer Mentorship', description: 'Connect with senior students', available: 120 },
    { type: 'AI Career Guide', description: '24/7 AI-powered career assistance', available: 'Always' },
    { type: 'Group Sessions', description: 'Weekly group mentoring sessions', available: 8 }
  ];

  const resources = [
    { category: 'Government Resources', items: ['Exam Results', 'Job Notifications', 'Scholarship Info'] },
    { category: 'Student Discounts', items: ['Software Trials', 'Course Discounts', 'Tool Access'] },
    { category: 'Templates', items: ['Resume Builder', 'SOP Templates', 'Cover Letters'] },
    { category: 'Productivity Tools', items: ['Study Planner', 'Pomodoro Timer', 'Progress Tracker'] }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* AI Recommendations */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900">🤖 AI Recommendations</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View All
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div 
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    setSelectedJob(jobs[0]);
                    setIsJobModalOpen(true);
                  }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">Job</span>
                    <span className="text-green-600 text-sm font-medium">95% match</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{jobs[0]?.title}</h3>
                  <p className="text-gray-600 text-sm">{jobs[0]?.company} • {jobs[0]?.location}</p>
                </div>
                
                <div 
                  className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    setSelectedCourse(courses[0]);
                    setIsCourseModalOpen(true);
                  }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">Course</span>
                    <span className="text-green-600 text-sm font-medium">88% match</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{courses[0]?.title}</h3>
                  <p className="text-gray-600 text-sm">{courses[0]?.provider} • {courses[0]?.duration}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">⚡ Quick Actions</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button 
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveSection('learning')}
                >
                  <Code className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Practice Coding</span>
                </button>
                <button 
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveSection('learning')}
                >
                  <Brain className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">Mock Interview</span>
                </button>
                <button 
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveSection('mentorship')}
                >
                  <Users className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Find Mentor</span>
                </button>
                <button 
                  className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setActiveSection('entrepreneurship')}
                >
                  <Rocket className="w-8 h-8 text-orange-600 mb-2" />
                  <span className="text-sm font-medium">Start Startup</span>
                </button>
              </div>
            </div>

            {/* Recent Applications */}
            {applications.length > 0 && (
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">📋 Recent Applications</h2>
                <div className="space-y-4">
                  {applications.slice(0, 3).map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{application.jobTitle}</h4>
                        <p className="text-sm text-gray-600">{application.company} • Applied {application.appliedDate}</p>
                      </div>
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        application.status === 'applied' ? 'bg-blue-100 text-blue-800' :
                        application.status === 'under-review' ? 'bg-yellow-100 text-yellow-800' :
                        application.status === 'interview-scheduled' ? 'bg-green-100 text-green-800' :
                        application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {application.status.replace('-', ' ')}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );

      case 'learning-path':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">📚 Personalized Learning Path</h2>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Customize Path
              </button>
            </div>
            
            <div className="space-y-6">
              {learningPath.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        item.status === 'completed' ? 'bg-green-100 text-green-600' :
                        item.status === 'in-progress' ? 'bg-blue-100 text-blue-600' :
                        'bg-gray-100 text-gray-400'
                      }`}>
                        {item.status === 'completed' ? '✓' : index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.duration}</p>
                      </div>
                    </div>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.status === 'completed' ? 'bg-green-100 text-green-800' :
                      item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="text-gray-600">{item.progress}%</span>
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
                  
                  {item.status !== 'upcoming' && (
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                      {item.status === 'completed' ? 'Review' : 'Continue Learning'} →
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'jobs':
        return (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-gray-900 mb-6">💼 Jobs & Internships</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {jobCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => {
                      // Filter jobs by category logic here
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${
                        category.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                        category.color === 'green' ? 'bg-green-100 text-green-600' :
                        category.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                        'bg-orange-100 text-orange-600'
                      }`}>
                        {category.icon}
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.count} opportunities</p>
                  </div>
                ))}
              </div>
              
              {/* Job Listings */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Available Opportunities</h3>
                {jobs.map((job) => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h4>
                        <p className="text-gray-600">{job.company} • {job.location}</p>
                        <p className="text-green-600 font-medium">{job.salary}</p>
                      </div>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                        job.type === 'internship' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'
                      }`}>
                        {job.type}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.map((skill, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-sm rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Posted {job.postedDate}</span>
                      <div className="flex space-x-2">
                        <button 
                          className="px-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                          onClick={() => {
                            setSelectedJob(job);
                            setIsJobModalOpen(true);
                          }}
                        >
                          View Details
                        </button>
                        <button 
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                          onClick={() => applyToJob(job.id)}
                          disabled={applications.some(app => app.jobId === job.id)}
                        >
                          {applications.some(app => app.jobId === job.id) ? 'Applied' : 'Apply Now'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Application Tracker</h3>
                {applications.length > 0 ? (
                  <div className="space-y-3">
                    {applications.map((application) => (
                      <div key={application.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{application.jobTitle} - {application.company}</h4>
                          <p className="text-sm text-gray-600">Applied {application.appliedDate}</p>
                        </div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          application.status === 'applied' ? 'bg-blue-100 text-blue-800' :
                          application.status === 'under-review' ? 'bg-yellow-100 text-yellow-800' :
                          application.status === 'interview-scheduled' ? 'bg-green-100 text-green-800' :
                          application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {application.status.replace('-', ' ')}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center py-8">No applications yet. Start applying to jobs!</p>
                )}
              </div>
            </div>
          </div>
        );

      case 'learning':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🎓 Learning & Development</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningModules.map((module, index) => (
                <div 
                  key={index} 
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => {
                    if (module.name === 'Skill Courses') {
                      // Show courses
                    }
                  }}
                >
                  <div className={`p-3 rounded-lg w-fit mb-4 ${
                    module.color === 'blue' ? 'bg-blue-100 text-blue-600' :
                    module.color === 'purple' ? 'bg-purple-100 text-purple-600' :
                    module.color === 'green' ? 'bg-green-100 text-green-600' :
                    module.color === 'orange' ? 'bg-orange-100 text-orange-600' :
                    'bg-red-100 text-red-600'
                  }`}>
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{module.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{module.description}</p>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Explore →
                  </button>
                </div>
              ))}
            </div>
            
            {/* Available Courses */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Courses</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div key={course.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                    <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">{course.provider}</span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600">{course.rating}</span>
                        </div>
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">{course.title}</h4>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-gray-600">{course.duration}</span>
                        <span className="font-medium text-green-600">{course.price}</span>
                      </div>
                      {course.enrolled && (
                        <div className="mb-4">
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-600">Progress</span>
                            <span className="text-gray-600">{course.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-500 h-2 rounded-full"
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                        </div>
                      )}
                      <button 
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                        onClick={() => {
                          if (course.enrolled) {
                            // Continue course
                          } else {
                            enrollInCourse(course.id);
                          }
                        }}
                      >
                        {course.enrolled ? 'Continue Learning' : 'Enroll Now'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'entrepreneurship':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🚀 Entrepreneurship Hub</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {entrepreneurshipTools.map((tool, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 text-green-600 rounded-lg">
                      {tool.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{tool.name}</h3>
                      <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                      <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                        Get Started →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'events':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">📅 Events & Webinars</h2>
            
            <div className="space-y-4">
              {events.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-semibold text-gray-900">{event.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          event.type === 'webinar' ? 'bg-blue-100 text-blue-800' :
                          event.type === 'workshop' ? 'bg-green-100 text-green-800' :
                          event.type === 'competition' ? 'bg-purple-100 text-purple-800' :
                          'bg-orange-100 text-orange-800'
                        }`}>
                          {event.type}
                        </span>
                      </div>
                      <p className="text-gray-600 text-sm mb-1">{event.date} • {event.time}</p>
                      <p className="text-gray-500 text-xs">{event.registrations}/{event.maxCapacity} registered</p>
                    </div>
                    <button 
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        event.registered 
                          ? 'bg-green-600 text-white' 
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      onClick={() => {
                        if (!event.registered) {
                          registerForEvent(event.id);
                        }
                      }}
                      disabled={event.registered || event.registrations >= event.maxCapacity}
                    >
                      {event.registered ? 'Registered' : 
                       event.registrations >= event.maxCapacity ? 'Full' : 'Register'}
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
            <h2 className="text-xl font-bold text-gray-900 mb-6">👥 Mentorship Zone</h2>
            
            <div className="space-y-8">
              {/* Available Mentors */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Mentors</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mentors.map((mentor) => (
                    <div key={mentor.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-1">{mentor.name}</h4>
                          <p className="text-blue-600 font-medium">{mentor.expertise}</p>
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
                        <div className="flex space-x-2">
                          <button 
                            className="px-4 py-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                            onClick={() => {
                              setSelectedMentor(mentor);
                              setIsMentorModalOpen(true);
                            }}
                          >
                            View Profile
                          </button>
                          <button 
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                            onClick={() => bookMentor(mentor.id)}
                            disabled={!mentor.available}
                          >
                            {mentor.available ? 'Book Session' : 'Unavailable'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mentorship Options */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Mentorship Programs</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {mentorshipOptions.map((option, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{option.type}</h4>
                      <p className="text-gray-600 text-sm mb-4">{option.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 text-sm font-medium">
                          {typeof option.available === 'number' ? `${option.available} available` : option.available}
                        </span>
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          Join Program →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'resources':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🛠️ Resources & Tools</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.map((resource, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{resource.category}</h3>
                  <div className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <span className="text-gray-700 text-sm">{item}</span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'community':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">💬 Community</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Discussion Groups</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Frontend Developers</h4>
                      <p className="text-sm text-gray-600">2,450 members</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Join</button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Startup Founders</h4>
                      <p className="text-sm text-gray-600">1,890 members</p>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">Join</button>
                  </div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Leaderboard</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-yellow-100 text-yellow-800 rounded-full flex items-center justify-center text-xs font-bold">1</span>
                    <span className="text-gray-900 font-medium">Rahul Kumar</span>
                    <span className="text-gray-600 text-sm">1,250 pts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-gray-100 text-gray-800 rounded-full flex items-center justify-center text-xs font-bold">2</span>
                    <span className="text-gray-900 font-medium">Priya Sharma</span>
                    <span className="text-gray-600 text-sm">1,180 pts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center text-xs font-bold">3</span>
                    <span className="text-gray-900 font-medium">Amit Patel</span>
                    <span className="text-gray-600 text-sm">1,050 pts</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-xs font-bold">15</span>
                    <span className="text-blue-600 font-medium">You</span>
                    <span className="text-gray-600 text-sm">850 pts</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'support':
        return (
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold text-gray-900 mb-6">🎧 Support</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Help</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium">Live Chat Support</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                    <FileText className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium">FAQ & Help Center</span>
                  </button>
                  <button className="w-full flex items-center space-x-3 p-3 text-left rounded-lg hover:bg-gray-50 transition-colors">
                    <Video className="w-5 h-5 text-purple-600" />
                    <span className="text-sm font-medium">Video Tutorials</span>
                  </button>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">Email Support</p>
                    <p className="text-gray-900">support@thestudentspot.com</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">Phone Support</p>
                    <p className="text-gray-900">+91 98765 43210</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-gray-600 mb-1">Support Hours</p>
                    <p className="text-gray-900">Mon-Fri: 9 AM - 6 PM IST</p>
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
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 mt-2">Here's your personalized learning and career dashboard</p>
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
                        ? 'bg-blue-100 text-blue-700 font-medium'
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

        {/* Job Details Modal */}
        <Modal
          isOpen={isJobModalOpen}
          onClose={() => setIsJobModalOpen(false)}
          title="Job Details"
          size="lg"
        >
          {selectedJob && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedJob.title}</h3>
                <p className="text-gray-600 mb-4">{selectedJob.company} • {selectedJob.location}</p>
                <p className="text-green-600 font-medium text-lg">{selectedJob.salary}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Job Description</h4>
                <p className="text-gray-700">{selectedJob.description}</p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedJob.requirements?.map((skill: string, index: number) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    applyToJob(selectedJob.id);
                    setIsJobModalOpen(false);
                  }}
                  disabled={applications.some(app => app.jobId === selectedJob.id)}
                >
                  {applications.some(app => app.jobId === selectedJob.id) ? 'Already Applied' : 'Apply Now'}
                </button>
                <button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsJobModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* Course Details Modal */}
        <Modal
          isOpen={isCourseModalOpen}
          onClose={() => setIsCourseModalOpen(false)}
          title="Course Details"
          size="lg"
        >
          {selectedCourse && (
            <div className="space-y-6">
              <div>
                <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedCourse.title}</h3>
                <p className="text-gray-600 mb-4">{selectedCourse.provider} • {selectedCourse.duration}</p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{selectedCourse.rating}</span>
                  </div>
                  <span className="text-gray-600">{selectedCourse.students?.toLocaleString()} students</span>
                  <span className="font-medium text-green-600">{selectedCourse.price}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Course Description</h4>
                <p className="text-gray-700">{selectedCourse.description}</p>
              </div>
              
              {selectedCourse.enrolled && (
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Your Progress</h4>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-blue-500 h-3 rounded-full"
                      style={{ width: `${selectedCourse.progress}%` }}
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{selectedCourse.progress}% completed</p>
                </div>
              )}
              
              <div className="flex space-x-4">
                <button 
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    if (!selectedCourse.enrolled) {
                      enrollInCourse(selectedCourse.id);
                    }
                    setIsCourseModalOpen(false);
                  }}
                >
                  {selectedCourse.enrolled ? 'Continue Learning' : 'Enroll Now'}
                </button>
                <button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsCourseModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>

        {/* Mentor Details Modal */}
        <Modal
          isOpen={isMentorModalOpen}
          onClose={() => setIsMentorModalOpen(false)}
          title="Mentor Profile"
          size="lg"
        >
          {selectedMentor && (
            <div className="space-y-6">
              <div className="flex items-start space-x-6">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold text-xl">
                    {selectedMentor.name.split(' ').map((n: string) => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{selectedMentor.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{selectedMentor.expertise}</p>
                  <p className="text-gray-600 mb-4">{selectedMentor.experience}</p>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="font-medium">{selectedMentor.rating}</span>
                    </div>
                    <span className="text-gray-600">{selectedMentor.sessions} sessions completed</span>
                    <span className="font-medium text-green-600">{selectedMentor.price}</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                <p className="text-gray-700">
                  Experienced professional with deep expertise in {selectedMentor.expertise.toLowerCase()}. 
                  Has mentored hundreds of students and professionals in their career journey.
                </p>
              </div>
              
              <div className="flex space-x-4">
                <button 
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    bookMentor(selectedMentor.id);
                    setIsMentorModalOpen(false);
                  }}
                  disabled={!selectedMentor.available}
                >
                  {selectedMentor.available ? 'Book Session' : 'Currently Unavailable'}
                </button>
                <button 
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setIsMentorModalOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </div>
  );
}