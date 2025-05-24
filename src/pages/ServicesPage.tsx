import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bus, Train, Car, Bike, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-r from-secondary-600 to-primary-500 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Comprehensive transportation solutions across India, designed for comfort, convenience, and affordability.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 inline-block bg-primary-100 p-3 rounded-xl">
                <Bus className="h-8 w-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Intercity Bus Travel</h2>
              <p className="text-gray-600 mb-6">
                Travel between cities in comfort and style with our extensive network of bus services. Choose from standard or premium options, with features like AC, WiFi, charging points, and refreshments on select routes.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="bg-primary-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  AC and Non-AC options available
                </li>
                <li className="flex items-center">
                  <span className="bg-primary-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Sleeper and semi-sleeper options for night travel
                </li>
                <li className="flex items-center">
                  <span className="bg-primary-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Connecting all major cities and tourist destinations
                </li>
              </ul>
              <Link to="/booking/bus" className="btn btn-primary inline-flex self-start">
                Book Bus Ticket <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/9180849/pexels-photo-9180849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Intercity Bus Travel" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg md:order-1"
            >
              <img 
                src="https://images.pexels.com/photos/730134/pexels-photo-730134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Train Travel" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 inline-block bg-secondary-100 p-3 rounded-xl">
                <Train className="h-8 w-8 text-secondary-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Train & Metro Bookings</h2>
              <p className="text-gray-600 mb-6">
                Skip the long queues and book your train tickets online with ease. We offer bookings for both long-distance trains and local metro services in major cities.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="bg-secondary-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Multiple class options - Sleeper, AC Chair Car, Executive
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Metro passes and smart card recharges
                </li>
                <li className="flex items-center">
                  <span className="bg-secondary-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Special discounts for students and senior citizens
                </li>
              </ul>
              <Link to="/booking/train" className="btn bg-secondary-500 hover:bg-secondary-600 text-white inline-flex self-start">
                Book Train Ticket <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 inline-block bg-accent-100 p-3 rounded-xl">
                <Car className="h-8 w-8 text-accent-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Outstation Cab Rentals</h2>
              <p className="text-gray-600 mb-6">
                Need a cab for an outstation trip? Our cab rental service offers comfortable and reliable vehicles for your journey, with both one-way and round-trip options.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="bg-accent-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Choose from Hatchbacks, Sedans, SUVs, and Luxury vehicles
                </li>
                <li className="flex items-center">
                  <span className="bg-accent-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Hourly packages or fixed route options
                </li>
                <li className="flex items-center">
                  <span className="bg-accent-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Experienced drivers with local knowledge
                </li>
              </ul>
              <Link to="/booking/cab" className="btn bg-accent-500 hover:bg-accent-600 text-white inline-flex self-start">
                Book Cab <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/5835359/pexels-photo-5835359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Outstation Cab Rentals" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg md:order-1"
            >
              <img 
                src="https://images.pexels.com/photos/13481012/pexels-photo-13481012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Auto & Bike Taxi" 
                className="w-full h-80 object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-4 inline-block bg-purple-100 p-3 rounded-xl">
                <Bike className="h-8 w-8 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Auto & Bike Taxi</h2>
              <p className="text-gray-600 mb-6">
                Navigate through city traffic quickly and affordably with our auto rickshaws and bike taxis. Perfect for short distances and beating the rush hour.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <span className="bg-purple-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Available in major cities like Bangalore, Mumbai, Delhi
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Quick booking and arrival times
                </li>
                <li className="flex items-center">
                  <span className="bg-purple-100 p-1 rounded-full mr-3">
                    <svg className="h-4 w-4 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Transparent pricing with no hidden charges
                </li>
              </ul>
              <div className="flex gap-3">
                <Link to="/booking/auto" className="btn bg-emerald-500 hover:bg-emerald-600 text-white inline-flex">
                  Book Auto <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link to="/booking/bike" className="btn bg-purple-500 hover:bg-purple-600 text-white inline-flex">
                  Book Bike Taxi <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose YatraConnect?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're committed to providing the best transportation experience across India with features designed for your convenience and comfort.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-primary-100 p-3 rounded-full inline-block mb-4">
                <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Service</h3>
              <p className="text-gray-600">
                Book your transportation any time, day or night. Our customer support is always available to assist you.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-secondary-100 p-3 rounded-full inline-block mb-4">
                <svg className="h-6 w-6 text-secondary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-gray-600">
                Safety is our priority. All our vehicles undergo regular maintenance, and drivers are carefully vetted.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-accent-100 p-3 rounded-full inline-block mb-4">
                <svg className="h-6 w-6 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-600">
                Competitive pricing across all our services with regular discounts and promotions to save you money.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy Bookings</h3>
              <p className="text-gray-600">
                Simple and hassle-free booking process. Reserve your transportation with just a few clicks.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Book Your Next Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Experience the convenience and reliability of YatraConnect's transportation services. Book your ride today and travel smarter across India.
          </p>
          <Link to="/dashboard" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
            Start Booking Now
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicesPage;