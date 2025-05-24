import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">YatraConnect</h4>
            <p className="text-gray-400 mb-4">
              Your Journey, Our Priority — Travel Smarter Across India!
            </p>
            <div className="flex space-x-4 mt-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link>
              </li>
              <li>
                <Link to="/booking/bus" className="text-gray-400 hover:text-white transition">Book a Ride</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition">Blog</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">FAQs</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">Refund Policy</Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 hover:text-white transition">Careers</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-2 mt-0.5" />
                <p className="text-gray-400">1st Main, Jayanagar, Bangalore, Karnataka 560041</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-primary-500 mr-2" />
                <p className="text-gray-400">+91 90361 12345</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary-500 mr-2" />
                <p className="text-gray-400">support@yatraconnect.in</p>
              </div>
            </div>
            
            {/* Live Chat Button */}
            <button className="mt-4 flex items-center px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-md transition">
              <MessageCircle className="h-5 w-5 mr-2" />
              <span>Live Chat</span>
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} YatraConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;