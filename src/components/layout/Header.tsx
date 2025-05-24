import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Search, Bus, Train, MapPin, UserCircle, LogOut } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Book a Ride', path: '/booking/bus' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Bus className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-display font-bold text-primary-500">
              Yatra<span className="text-secondary-500">Connect</span>
            </span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition ${
                  location.pathname === item.path
                    ? 'text-primary-500'
                    : 'text-gray-700 hover:text-primary-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Search Button */}
            <button 
              className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-5 w-5 text-gray-700" />
            </button>
            
            {/* Auth Buttons */}
            {isAuthenticated ? (
              <div className="relative ml-4 flex items-center">
                <Link 
                  to={user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'} 
                  className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-primary-600 hover:text-primary-500"
                >
                  <UserCircle className="h-5 w-5 mr-1" />
                  <span>{user?.name}</span>
                </Link>
                <button
                  onClick={logout}
                  className="ml-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Logout"
                >
                  <LogOut className="h-5 w-5 text-gray-700" />
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="ml-4 btn btn-primary"
              >
                Login / Register
              </Link>
            )}
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? 'text-primary-500 bg-primary-50'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-primary-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center px-3 py-2">
              <div className="flex-1 flex items-center px-2 rounded-md bg-gray-100">
                <Search className="h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-2 block w-full bg-transparent py-2 text-base outline-none"
                />
              </div>
            </div>
            
            {isAuthenticated ? (
              <div className="border-t pt-3">
                <Link 
                  to={user?.role === 'admin' ? '/admin/dashboard' : '/dashboard'} 
                  className="block px-3 py-2 rounded-md text-base font-medium text-primary-600"
                >
                  <div className="flex items-center">
                    <UserCircle className="h-5 w-5 mr-2" />
                    <span>My Dashboard</span>
                  </div>
                </Link>
                <button
                  onClick={logout}
                  className="w-full mt-1 px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-2" />
                  <span>Logout</span>
                </button>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="block px-3 py-2 rounded-md text-base font-medium text-center text-white bg-primary-500 hover:bg-primary-600"
              >
                Login / Register
              </Link>
            )}
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;