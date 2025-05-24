import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Calendar, User, Tag, MapPin } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

// Mock blog post data
const blogPosts = [
  {
    id: 1,
    title: 'Top 10 Scenic Bus Routes in India',
    excerpt: 'Explore the most breathtaking landscapes across India through these picturesque bus journeys that offer stunning views and unforgettable experiences.',
    image: 'https://images.pexels.com/photos/68629/pexels-photo-68629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    date: 'April 10, 2025',
    author: 'Priya Sharma',
    category: 'Travel Tips',
    location: 'All India'
  },
  {
    id: 2,
    title: 'How to Book Metro Tickets Online',
    excerpt: 'A comprehensive guide to navigating the online metro ticket booking process, helping you save time and avoid queues in major Indian cities.',
    image: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    date: 'April 5, 2025',
    author: 'Vikram Patel',
    category: 'How-to Guides',
    location: 'Delhi, Mumbai, Bangalore'
  },
  {
    id: 3,
    title: 'Comparing Ola vs Rapido vs Uber',
    excerpt: 'An in-depth comparison of India\'s leading ride-hailing services, analyzing pricing, availability, vehicle quality, and overall user experience.',
    image: 'https://images.pexels.com/photos/7433822/pexels-photo-7433822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    date: 'March 28, 2025',
    author: 'Rahul Mehta',
    category: 'Reviews',
    location: 'Major Cities'
  },
  {
    id: 4,
    title: 'The Rise of Bike Taxis in Indian Cities',
    excerpt: 'How bike taxis are revolutionizing urban commutes in congested Indian cities, offering quick, affordable transportation solutions.',
    image: 'https://images.pexels.com/photos/2519390/pexels-photo-2519390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    date: 'March 22, 2025',
    author: 'Neha Gupta',
    category: 'Industry Trends',
    location: 'Bangalore, Hyderabad, Delhi'
  },
  {
    id: 5,
    title: 'Budget Travel: Exploring India by Train',
    excerpt: 'Discover how to navigate India\'s extensive rail network on a budget, with tips on booking sleeper class tickets, planning routes, and more.',
    image: 'https://images.pexels.com/photos/2031758/pexels-photo-2031758.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    date: 'March 15, 2025',
    author: 'Amar Singh',
    category: 'Budget Travel',
    location: 'All India'
  },
  {
    id: 6,
    title: 'Best Apps for Public Transport in India',
    excerpt: 'A curated list of essential mobile applications that make navigating India\'s diverse public transportation systems easier and more efficient.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750',
    date: 'March 8, 2025',
    author: 'Lakshmi Iyer',
    category: 'Technology',
    location: 'Metro Cities'
  },
];

// Categories for filtering
const categories = ['All', 'Travel Tips', 'How-to Guides', 'Reviews', 'Industry Trends', 'Budget Travel', 'Technology'];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-accent-500 to-primary-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              YatraConnect Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Insights, tips, and guides for smarter travel across India
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 relative max-w-xl mx-auto"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-10 pr-4 py-3 rounded-full bg-white/90 backdrop-blur-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Blog Content */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                  selectedCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-3 text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <Tag className="h-4 w-4 mr-1" />
                    <span>{post.category}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3 text-gray-900">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary-600 transition">
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center text-sm">
                      <User className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-gray-700">{post.author}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                      <span className="text-gray-700">{post.location}</span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-4 bg-gray-50">
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="text-primary-600 font-medium hover:text-primary-700 flex items-center"
                  >
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No matching blog posts found</h3>
              <p className="text-gray-600 mb-4">Try adjusting your search terms or filters</p>
              <button 
                className="btn btn-primary"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Post</h2>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid md:grid-cols-2 gap-8 rounded-lg shadow-lg overflow-hidden"
          >
            <div className="h-full">
              <img 
                src="https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Ultimate Guide to Indian Railways" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 flex flex-col">
              <div className="flex items-center mb-3 text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <span>April 15, 2025</span>
                <span className="mx-2">•</span>
                <Tag className="h-4 w-4 mr-1" />
                <span>Travel Guides</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-gray-900">The Ultimate Guide to Indian Railways: A Journey Through Time</h3>
              
              <p className="text-gray-600 mb-6">
                Embark on a fascinating journey through the history, routes, and experiences of Indian Railways, the fourth largest railway network in the world. From luxury trains to daily commuters, discover the heart of Indian travel.
              </p>
              
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center mr-3">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div>
                  <p className="font-medium">Rajesh Kumar</p>
                  <p className="text-sm text-gray-500">Travel Expert</p>
                </div>
              </div>
              
              <Link 
                to="/blog/featured" 
                className="mt-auto btn btn-primary inline-flex items-center self-start"
              >
                <span>Read Full Article</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-gray-300 mb-8">
              Stay updated with the latest travel tips, exclusive offers, and transportation insights across India.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-grow px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
                required
              />
              <button type="submit" className="btn bg-primary-500 hover:bg-primary-600 text-white py-3 px-6">
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-400 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;