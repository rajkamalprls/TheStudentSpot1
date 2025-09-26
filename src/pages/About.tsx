import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

export function About() {
  const team = [
    {
      name: "Arjun Patel",
      role: "CEO & Founder",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Former Google engineer with a passion for connecting talent with opportunities"
    },
    {
      name: "Sneha Reddy",
      role: "CTO",
      image: "https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Tech leader with expertise in AI and platform development"
    },
    {
      name: "Vikram Singh",
      role: "Head of Partnerships",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Building bridges between academia and industry"
    },
    {
      name: "Kavya Sharma",
      role: "Head of Community",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      bio: "Fostering growth and engagement in our vibrant community"
    }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Mission-Driven",
      description: "Committed to bridging the gap between education and employment"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community First",
      description: "Building meaningful connections that last a lifetime"
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: "Excellence",
      description: "Delivering high-quality opportunities and resources"
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: "Inclusive",
      description: "Creating opportunities for everyone, regardless of background"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About The Student Spot</h1>
          <p className="text-xl text-blue-100">
            We're on a mission to connect talent with opportunities and build the future of work
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-8">
                To create a world where every student has access to meaningful career opportunities, 
                where entrepreneurs can find the support they need to build successful companies, 
                and where educational institutions and businesses work together seamlessly.
              </p>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                We connect students, startups, colleges, and companies through a comprehensive platform 
                that provides jobs, internships, learning resources, mentorship, and entrepreneurship support.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">Passionate individuals building the future of career development</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats & Impact */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-blue-100">Numbers that reflect our commitment to success</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-200">Students Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1,200+</div>
              <div className="text-blue-200">Partner Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">250+</div>
              <div className="text-blue-200">Educational Institutions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">What People Say</h2>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <p className="text-xl text-gray-700 italic mb-6">
              "The Student Spot has revolutionized how we connect with talent. The platform's 
              comprehensive approach to career development is exactly what the industry needs."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop"
                alt="Testimonial"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">Rajesh Gupta</h4>
                <p className="text-gray-600">HR Director, TechCorp India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}