import React, { useState } from 'react';
import { BookOpen, Clock, Star, Play, Award, Code, Brain, Palette } from 'lucide-react';

export function Learning() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Courses', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'programming', name: 'Programming', icon: <Code className="w-4 h-4" /> },
    { id: 'ai-ml', name: 'AI & ML', icon: <Brain className="w-4 h-4" /> },
    { id: 'design', name: 'Design', icon: <Palette className="w-4 h-4" /> },
    { id: 'business', name: 'Business', icon: <Award className="w-4 h-4" /> }
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React.js Bootcamp',
      provider: 'TechAcademy',
      category: 'programming',
      duration: '12 weeks',
      level: 'intermediate',
      rating: 4.8,
      students: 15420,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master React.js from fundamentals to advanced concepts',
      price: 'Free',
      features: ['Hands-on Projects', 'Certificate', 'Lifetime Access']
    },
    {
      id: 2,
      title: 'Machine Learning Fundamentals',
      provider: 'AI Institute',
      category: 'ai-ml',
      duration: '8 weeks',
      level: 'beginner',
      rating: 4.7,
      students: 8925,
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn the basics of machine learning and data science',
      price: '₹999',
      features: ['Real Datasets', 'Python Coding', 'Industry Projects']
    },
    {
      id: 3,
      title: 'UI/UX Design Masterclass',
      provider: 'DesignHub',
      category: 'design',
      duration: '10 weeks',
      level: 'intermediate',
      rating: 4.9,
      students: 12350,
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Create stunning user interfaces and user experiences',
      price: '₹1,999',
      features: ['Figma Training', 'Portfolio Review', 'Job Placement']
    },
    {
      id: 4,
      title: 'Startup Business Plan',
      provider: 'Entrepreneur Academy',
      category: 'business',
      duration: '6 weeks',
      level: 'beginner',
      rating: 4.6,
      students: 5680,
      image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Learn how to create a comprehensive business plan',
      price: 'Free',
      features: ['Templates', 'Mentor Support', 'Investor Pitch']
    },
    {
      id: 5,
      title: 'Python Programming',
      provider: 'CodeMasters',
      category: 'programming',
      duration: '16 weeks',
      level: 'beginner',
      rating: 4.8,
      students: 25640,
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Complete Python course from basics to advanced',
      price: 'Free',
      features: ['Interactive Coding', '100+ Exercises', 'Career Guidance']
    },
    {
      id: 6,
      title: 'Digital Marketing Strategy',
      provider: 'Marketing Pro',
      category: 'business',
      duration: '8 weeks',
      level: 'intermediate',
      rating: 4.5,
      students: 9420,
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop',
      description: 'Master digital marketing across all channels',
      price: '₹1,499',
      features: ['Live Sessions', 'Case Studies', 'Tools Access']
    }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner': return 'bg-green-100 text-green-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Learning & Development</h1>
          <p className="text-gray-600">Expand your skills with our comprehensive course library</p>
        </div>

        {/* Categories */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Learning Paths */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg mb-8">
          <h2 className="text-2xl font-bold mb-4">🎯 Personalized Learning Paths</h2>
          <p className="mb-6 text-blue-100">
            AI-powered recommendations based on your career goals and skill level
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Full-Stack Developer</h3>
              <p className="text-sm text-blue-100">6 months • Beginner to Advanced</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Data Scientist</h3>
              <p className="text-sm text-blue-100">8 months • Intermediate</p>
            </div>
            <div className="bg-white/20 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Product Manager</h3>
              <p className="text-sm text-blue-100">4 months • Beginner</p>
            </div>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              {/* Course Image */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="bg-black/50 text-white px-2 py-1 text-xs rounded">
                    {course.price}
                  </span>
                </div>
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600">{course.provider}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{course.rating}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {course.features.map((feature, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  {course.price === 'Free' ? 'Start Learning' : 'Enroll Now'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Code className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Coding Practice</h3>
            <p className="text-gray-600 text-sm mb-4">
              Practice coding problems and improve your programming skills
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">
              Start Coding →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">AI Mock Interviews</h3>
            <p className="text-gray-600 text-sm mb-4">
              Practice interviews with AI and get instant feedback
            </p>
            <button className="text-purple-600 hover:text-purple-700 font-medium">
              Try Interview →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Certifications</h3>
            <p className="text-gray-600 text-sm mb-4">
              Earn industry-recognized certificates to boost your profile
            </p>
            <button className="text-green-600 hover:text-green-700 font-medium">
              View Certificates →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}