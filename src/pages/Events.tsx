import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Filter, Video, Award } from 'lucide-react';

export function Events() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const eventTypes = [
    { id: 'all', name: 'All Events' },
    { id: 'webinar', name: 'Webinars' },
    { id: 'workshop', name: 'Workshops' },
    { id: 'hackathon', name: 'Hackathons' },
    { id: 'networking', name: 'Networking' }
  ];

  const events = [
    {
      id: 1,
      title: 'React.js Masterclass',
      type: 'webinar',
      date: '2025-03-15',
      time: '3:00 PM - 5:00 PM IST',
      organizer: 'TechTalks',
      description: 'Deep dive into React.js hooks, context API, and performance optimization',
      registrations: 1250,
      maxCapacity: 2000,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isOnline: true,
      location: 'Online',
      price: 'Free',
      tags: ['React', 'JavaScript', 'Frontend']
    },
    {
      id: 2,
      title: 'AI Innovation Hackathon 2025',
      type: 'hackathon',
      date: '2025-03-20',
      time: '48 Hours',
      organizer: 'Google Developers',
      description: '48-hour hackathon focused on AI and machine learning solutions',
      registrations: 850,
      maxCapacity: 1000,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isOnline: false,
      location: 'Bangalore, India',
      price: 'Free',
      tags: ['AI/ML', 'Competition', 'Innovation'],
      prizes: '₹5L Prize Pool'
    },
    {
      id: 3,
      title: 'Startup Founder Networking',
      type: 'networking',
      date: '2025-03-22',
      time: '6:00 PM - 9:00 PM IST',
      organizer: 'Startup India',
      description: 'Connect with fellow entrepreneurs, investors, and industry leaders',
      registrations: 180,
      maxCapacity: 200,
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isOnline: false,
      location: 'Mumbai, India',
      price: '₹500',
      tags: ['Networking', 'Startups', 'Investment']
    },
    {
      id: 4,
      title: 'UI/UX Design Workshop',
      type: 'workshop',
      date: '2025-03-25',
      time: '10:00 AM - 4:00 PM IST',
      organizer: 'Adobe',
      description: 'Hands-on workshop on modern UI/UX design principles and tools',
      registrations: 95,
      maxCapacity: 100,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isOnline: true,
      location: 'Online',
      price: '₹999',
      tags: ['Design', 'Adobe', 'Workshop']
    },
    {
      id: 5,
      title: 'Data Science Career Fair',
      type: 'networking',
      date: '2025-04-05',
      time: '10:00 AM - 6:00 PM IST',
      organizer: 'DataCorp',
      description: 'Meet recruiters from top data science companies',
      registrations: 680,
      maxCapacity: 800,
      image: 'https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isOnline: false,
      location: 'Hyderabad, India',
      price: 'Free',
      tags: ['Career', 'Data Science', 'Hiring']
    },
    {
      id: 6,
      title: 'Blockchain Technology Webinar',
      type: 'webinar',
      date: '2025-04-10',
      time: '2:00 PM - 4:00 PM IST',
      organizer: 'CryptoEducation',
      description: 'Understanding blockchain, cryptocurrency, and decentralized applications',
      registrations: 2150,
      maxCapacity: 3000,
      image: 'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
      isOnline: true,
      location: 'Online',
      price: '₹299',
      tags: ['Blockchain', 'Cryptocurrency', 'Technology']
    }
  ];

  const filteredEvents = selectedFilter === 'all' 
    ? events 
    : events.filter(event => event.type === selectedFilter);

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'webinar': return 'bg-blue-100 text-blue-800';
      case 'workshop': return 'bg-green-100 text-green-800';
      case 'hackathon': return 'bg-purple-100 text-purple-800';
      case 'networking': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Events & Webinars</h1>
          <p className="text-gray-600">Discover learning opportunities, networking events, and competitions</p>
        </div>

        {/* Event Type Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap gap-4">
            {eventTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedFilter(type.id)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedFilter === type.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Event */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-lg mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Award className="w-6 h-6" />
            <span className="font-semibold">Featured Event</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">AI Innovation Hackathon 2025</h2>
          <p className="text-purple-100 mb-6 max-w-2xl">
            Join the biggest AI hackathon of the year! Build innovative solutions using cutting-edge 
            AI technologies and compete for amazing prizes.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              March 20-22, 2025
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" />
              Bangalore, India
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              ₹5L Prize Pool
            </div>
          </div>
          <button className="mt-6 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Register Now
          </button>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Event Image */}
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getEventTypeColor(event.type)}`}>
                    {event.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-2 py-1 text-xs rounded flex items-center">
                    {event.isOnline ? <Video className="w-3 h-3 mr-1" /> : <MapPin className="w-3 h-3 mr-1" />}
                    {event.isOnline ? 'Online' : 'In-person'}
                  </span>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{event.organizer}</span>
                  <span className="text-sm font-medium text-green-600">{event.price}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {event.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    {event.registrations}/{event.maxCapacity} registered
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {event.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Special Features */}
                {event.prizes && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                      <Award className="w-3 h-3 mr-1" />
                      {event.prizes}
                    </span>
                  </div>
                )}

                {/* Registration Progress */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Registration</span>
                    <span className="text-gray-600">
                      {Math.round((event.registrations / event.maxCapacity) * 100)}% full
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ 
                        width: `${(event.registrations / event.maxCapacity) * 100}%` 
                      }}
                    />
                  </div>
                </div>

                {/* Action Button */}
                <button 
                  className={`w-full py-2 rounded-lg transition-colors ${
                    event.registrations >= event.maxCapacity
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                  disabled={event.registrations >= event.maxCapacity}
                >
                  {event.registrations >= event.maxCapacity ? 'Event Full' : 'Register Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Events Message */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-16">
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-medium text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600">
              No events match your current filter. Try selecting a different event type.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}