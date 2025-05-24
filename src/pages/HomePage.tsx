import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bus, Train, Car, Bike, ArrowRight } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import TransportCard from '../components/common/TransportCard';
import PromoCard from '../components/common/PromoCard';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 hero-gradient text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Your Journey, Our Priority — Travel Smarter Across India!
              </h1>
              <p className="text-lg mb-6 text-white/90">
                Book buses, trains, cabs, autos, and more with just a few clicks. Experience seamless travel planning across India's vibrant cities.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/booking/bus" className="btn bg-white text-primary-500 hover:bg-gray-100">
                  Book Now
                </Link>
                <Link to="/services" className="btn border border-white text-white hover:bg-white/10">
                  Our Services
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block"
            >
              <img 
                src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Indian Transportation" 
                className="rounded-lg shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Quick Booking Buttons */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-center mb-8">Quick Booking Options</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-primary-50 rounded-lg p-4 flex flex-col items-center cursor-pointer"
              onClick={() => window.location.href = '/booking/bus'}
            >
              <Bus className="h-8 w-8 text-primary-500 mb-2" />
              <span className="font-medium">Bus</span>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-secondary-50 rounded-lg p-4 flex flex-col items-center cursor-pointer"
              onClick={() => window.location.href = '/booking/train'}
            >
              <Train className="h-8 w-8 text-secondary-500 mb-2" />
              <span className="font-medium">Train</span>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-accent-50 rounded-lg p-4 flex flex-col items-center cursor-pointer"
              onClick={() => window.location.href = '/booking/cab'}
            >
              <Car className="h-8 w-8 text-accent-500 mb-2" />
              <span className="font-medium">Cab</span>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-purple-50 rounded-lg p-4 flex flex-col items-center cursor-pointer"
              onClick={() => window.location.href = '/booking/bike'}
            >
              <Bike className="h-8 w-8 text-purple-500 mb-2" />
              <span className="font-medium">Bike</span>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Transport Options Section */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Travel Your Way</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Choose from a variety of transportation options to suit your needs, budget, and schedule.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TransportCard
              type="bus"
              title="Intercity Buses"
              description="Travel between cities with comfort. AC and Non-AC options available with premium and sleeper services."
              startingPrice={249}
              delay={0}
            />
            
            <TransportCard
              type="train"
              title="Train Bookings"
              description="Book train tickets for short and long journeys. Multiple class options to fit your comfort needs."
              startingPrice={199}
              delay={1}
            />
            
            <TransportCard
              type="cab"
              title="Outstation Cabs"
              description="Hire cabs for outstation trips. Choose from hatchbacks, sedans, or SUVs based on your group size."
              startingPrice={899}
              delay={2}
            />
            
            <TransportCard
              type="auto"
              title="Auto Rickshaws"
              description="Book autos for quick local travel within city limits. Affordable and convenient."
              startingPrice={99}
              delay={3}
            />
            
            <TransportCard
              type="bike"
              title="Bike Taxis"
              description="Navigate through traffic quickly with bike taxis. Perfect for solo travelers in a hurry."
              startingPrice={59}
              delay={4}
            />
            
            <TransportCard
              type="metro"
              title="Metro Tickets"
              description="Skip the queues with online metro tickets. Available in major cities with smart card options."
              startingPrice={25}
              delay={5}
            />
          </div>
        </div>
      </section>
      
      {/* Promo Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Exclusive Offers</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Take advantage of our limited-time promotions and save on your next journey.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PromoCard
              title="₹100 Off on First Bus Ride"
              description="Use this code for your first bus booking. Valid for all routes."
              code="FIRSTBUS100"
              bgColor="bg-primary-500"
              delay={0}
            />
            
            <PromoCard
              title="Cab Booking at ₹10/km"
              description="Special weekday offer for cab bookings between 10 AM to 4 PM."
              code="CAB10KM"
              bgColor="bg-secondary-500"
              delay={1}
            />
            
            <PromoCard
              title="Train Offers for Students"
              description="Students get 15% off on train bookings. Valid student ID required."
              code="STUDENT15"
              bgColor="bg-accent-500"
              delay={2}
            />
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">What Our Travelers Say</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Hear from people who have experienced the YatraConnect difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Rajesh Kumar</h4>
                  <p className="text-sm text-gray-500">Delhi to Jaipur</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The bus was clean and comfortable. Driver was professional and we reached on time. Will definitely use YatraConnect again!"
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Bangalore Local</p>
                </div>
              </div>
              <p className="text-gray-600">
                "The bike taxi service saved me during rush hour! Driver was courteous and I reached my meeting on time. Great service!"
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="User"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">Amar Singh</h4>
                  <p className="text-sm text-gray-500">Mumbai to Pune</p>
                </div>
              </div>
              <p className="text-gray-600">
                "Booked a cab for my family trip. The SUV was spacious and clean. Driver knew the route well and was very helpful."
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Download App Banner */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Download Our Mobile App</h2>
              <p className="mb-6 text-white/90">
                Get exclusive mobile-only deals and manage your bookings on the go. Available for iOS and Android.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="btn bg-black text-white hover:bg-gray-900">
                  <span>Download on iOS</span>
                </a>
                <a href="#" className="btn bg-black text-white hover:bg-gray-900">
                  <span>Download on Android</span>
                </a>
              </div>
            </div>
            
            <div className="flex justify-center">
              <img
                src="https://images.pexels.com/photos/6010001/pexels-photo-6010001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                alt="Mobile App"
                className="max-w-xs rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Cities We Serve */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">Cities We Serve</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              YatraConnect is available in major cities across India, with more being added regularly.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Hyderabad', 'Kolkata', 'Jaipur', 'Pune', 'Ahmedabad', 'Kochi', 'Chandigarh', 'Lucknow'].map((city, index) => (
              <motion.div
                key={city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="p-3 rounded-lg bg-gray-50 hover:bg-primary-50 hover:text-primary-600 cursor-pointer transition"
              >
                {city}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Join thousands of satisfied travelers who trust YatraConnect for their transportation needs across India.
          </p>
          <Link 
            to="/booking/bus" 
            className="btn bg-primary-500 text-white hover:bg-primary-600 px-8 py-3"
          >
            Book Your Ride Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HomePage;