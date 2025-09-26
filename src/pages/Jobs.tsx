import React, { useState } from 'react';
import { Search, Filter, MapPin, Calendar, Building2, Clock } from 'lucide-react';

export function Jobs() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilters, setSelectedFilters] = useState({
    type: 'all',
    location: 'all',
    experience: 'all'
  });

  const jobs = [
    {
      id: 1,
      title: 'Frontend Developer Intern',
      company: 'TechStart Inc.',
      type: 'Internship',
      location: 'Bangalore',
      salary: '₹25,000/month',
      description: 'Build responsive web applications using React.js and modern frontend technologies.',
      requirements: ['React.js', 'JavaScript', 'CSS', 'HTML'],
      postedDate: '2 days ago',
      logo: '🚀'
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Microsoft',
      type: 'Full-time',
      location: 'Hyderabad',
      salary: '₹8-12 LPA',
      description: 'Join our cloud computing team and work on Azure services.',
      requirements: ['Java', 'Spring Boot', 'Azure', 'SQL'],
      postedDate: '1 week ago',
      logo: '🏢'
    },
    {
      id: 3,
      title: 'Data Science Intern',
      company: 'Flipkart',
      type: 'Internship',
      location: 'Bangalore',
      salary: '₹30,000/month',
      description: 'Analyze customer data and build machine learning models.',
      requirements: ['Python', 'Machine Learning', 'SQL', 'Statistics'],
      postedDate: '3 days ago',
      logo: '📊'
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      company: 'Zomato',
      type: 'Full-time',
      location: 'Delhi',
      salary: '₹6-9 LPA',
      description: 'Design user-friendly interfaces for our food delivery platform.',
      requirements: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
      postedDate: '5 days ago',
      logo: '🎨'
    },
    {
      id: 5,
      title: 'Backend Developer',
      company: 'PayTM',
      type: 'Full-time',
      location: 'Noida',
      salary: '₹7-10 LPA',
      description: 'Develop scalable backend services for fintech applications.',
      requirements: ['Node.js', 'MongoDB', 'AWS', 'Microservices'],
      postedDate: '1 week ago',
      logo: '💳'
    },
    {
      id: 6,
      title: 'Product Manager Intern',
      company: 'Ola',
      type: 'Internship',
      location: 'Bangalore',
      salary: '₹35,000/month',
      description: 'Work with cross-functional teams to define product roadmap.',
      requirements: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
      postedDate: '4 days ago',
      logo: '🚗'
    }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesType = selectedFilters.type === 'all' || 
                       job.type.toLowerCase() === selectedFilters.type;
    
    const matchesLocation = selectedFilters.location === 'all' || 
                           job.location.toLowerCase().includes(selectedFilters.location);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Jobs & Internships</h1>
          <p className="text-gray-600">Discover opportunities that match your skills and interests</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">
              <select
                value={selectedFilters.type}
                onChange={(e) => setSelectedFilters({...selectedFilters, type: e.target.value})}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Types</option>
                <option value="full-time">Full-time</option>
                <option value="internship">Internship</option>
                <option value="part-time">Part-time</option>
              </select>

              <select
                value={selectedFilters.location}
                onChange={(e) => setSelectedFilters({...selectedFilters, location: e.target.value})}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Locations</option>
                <option value="bangalore">Bangalore</option>
                <option value="delhi">Delhi</option>
                <option value="mumbai">Mumbai</option>
                <option value="hyderabad">Hyderabad</option>
                <option value="pune">Pune</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredJobs.length} of {jobs.length} jobs
          </p>
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-400" />
            <span className="text-sm text-gray-600">Sort by: Latest</span>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200">
              {/* Job Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{job.logo}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {job.title}
                    </h3>
                    <p className="text-gray-600">{job.company}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                  job.type === 'Internship' 
                    ? 'bg-orange-100 text-orange-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {job.type}
                </span>
              </div>

              {/* Job Details */}
              <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <Building2 className="w-4 h-4 mr-1" />
                  {job.salary}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {job.postedDate}
                </div>
              </div>

              {/* Job Description */}
              <p className="text-gray-700 mb-4 line-clamp-2">
                {job.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {job.requirements.map((skill, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  View Details
                </button>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm">
                    Save
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        {filteredJobs.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Load More Jobs
            </button>
          </div>
        )}

        {/* No Results */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters to find more opportunities.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}