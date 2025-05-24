import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow flex items-center justify-center py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="flex justify-center mb-8">
            <img 
              src="https://images.pexels.com/photos/4116297/pexels-photo-4116297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Lost on journey" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Oops! Looks like you've taken a detour. We can't find the page you're looking for.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/" className="btn btn-primary">
              <Home className="h-5 w-5 mr-2" />
              Return Home
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="btn btn-outline"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Go Back
            </button>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFoundPage;