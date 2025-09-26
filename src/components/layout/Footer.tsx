import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">TS</span>
              </div>
              <span className="text-lg font-bold">The Student Spot</span>
            </div>
            <p className="text-gray-300 text-sm">
              Connecting Students, Startups, Colleges & Companies for a better future.
            </p>
            <div className="flex space-x-4">
              <Facebook size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram size={20} className="text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/jobs" className="block text-gray-300 hover:text-white transition-colors">Jobs & Internships</Link>
              <Link to="/learning" className="block text-gray-300 hover:text-white transition-colors">Learning Resources</Link>
              <Link to="/events" className="block text-gray-300 hover:text-white transition-colors">Events & Webinars</Link>
              <Link to="/mentorship" className="block text-gray-300 hover:text-white transition-colors">Mentorship</Link>
            </div>
          </div>

          {/* For Organizations */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Organizations</h3>
            <div className="space-y-2">
              <Link to="/hire" className="block text-gray-300 hover:text-white transition-colors">Hire Talent</Link>
              <Link to="/partnerships" className="block text-gray-300 hover:text-white transition-colors">Partnerships</Link>
              <Link to="/campus-engagement" className="block text-gray-300 hover:text-white transition-colors">Campus Engagement</Link>
              <Link to="/incubators" className="block text-gray-300 hover:text-white transition-colors">Incubator Program</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">hello@thestudentspot.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-gray-400" />
                <span className="text-gray-300 text-sm">Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 The Student Spot. All rights reserved. | 
            <Link to="/privacy" className="hover:text-white ml-1">Privacy Policy</Link> | 
            <Link to="/terms" className="hover:text-white ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}