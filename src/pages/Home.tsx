import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Briefcase, BookOpen, Calendar, Award, TrendingUp, Star } from 'lucide-react';

export function Home() {
  const features = [
    {
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      title: "Jobs & Internships",
      description: "Access exclusive job opportunities from top companies and startups"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-600" />,
      title: "Learning Resources",
      description: "Comprehensive courses, notes, and skill development programs"
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-600" />,
      title: "Events & Webinars",
      description: "Connect through networking events, hackathons, and workshops"
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: "Mentorship",
      description: "Get guidance from industry experts and successful entrepreneurs"
    }
  ];

  const stats = [
    { number: "50K+", label: "Students" },
    { number: "1K+", label: "Companies" },
    { number: "200+", label: "Colleges" },
    { number: "5K+", label: "Jobs Posted" }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      content: "The Student Spot helped me land my dream job. The mentorship program was invaluable!",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Rahul Kumar",
      role: "Founder, TechStart",
      content: "From student to entrepreneur - this platform provided all the resources I needed to start my company.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Prof. Anjali Mehta",
      role: "Placement Head, IIT Delhi",
      content: "Excellent platform for connecting our students with industry opportunities.",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const partners = [
    "Google", "Microsoft", "Amazon", "Flipkart", "Zomato", "Paytm", "Ola", "Swiggy"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Connecting Students,<br />
              <span className="text-yellow-300">Startups & Companies</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Your one-stop platform for jobs, learning, mentorship, and entrepreneurship opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/auth"
                className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Get Started <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need in One Place
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From finding your dream job to building your startup, we've got you covered
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Hear from our community members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Companies</h2>
            <p className="text-gray-300">Join thousands of companies hiring through our platform</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="text-center">
                <div className="bg-white text-gray-900 p-4 rounded-lg font-semibold">
                  {partner}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of students, entrepreneurs, and professionals who are already part of our community
          </p>
          <Link
            to="/auth"
            className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center"
          >
            Join Now - It's Free <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}