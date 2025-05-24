import React from 'react';
import { motion } from 'framer-motion';
import { Bus, ShieldCheck, Heart, Award, Users } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary-500 to-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              About YatraConnect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Connecting India through smart, reliable, and comfortable transportation solutions.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-primary-100 p-3 rounded-full inline-block mb-4">
                <Bus className="h-8 w-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2021, YatraConnect was born from a simple idea: to make travel within India more accessible, comfortable, and hassle-free. We noticed the challenges faced by commuters and travelers across the country – from fragmented transportation options to unpredictable service quality.
              </p>
              <p className="text-gray-600 mb-4">
                Our journey began in Bangalore with a small team of transportation enthusiasts determined to revolutionize how Indians travel. From our humble beginnings with a fleet of 10 buses, we've now expanded to a comprehensive multi-modal transportation platform covering all major cities in India.
              </p>
              <p className="text-gray-600">
                Today, YatraConnect serves millions of customers with a wide range of transportation options including buses, trains, cabs, autos, and bike taxis – all accessible through one convenient platform.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img 
                src="https://images.pexels.com/photos/2156981/pexels-photo-2156981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="YatraConnect office" 
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Mission and Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Vision</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're driven by a clear purpose and ambitious vision for the future of transportation in India.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-primary-100 p-3 rounded-full inline-block mb-4">
                <ShieldCheck className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-4">
                To provide safe, reliable, and affordable transportation solutions that connect people across India, enhancing mobility and accessibility for all.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Make transportation accessible to everyone</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Ensure safety and comfort in every journey</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Provide transparent pricing and reliable service</span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="bg-secondary-100 p-3 rounded-full inline-block mb-4">
                <Heart className="h-8 w-8 text-secondary-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 mb-4">
                To be India's most trusted and preferred transportation platform, transforming the way people travel by creating a seamless, integrated network across the country.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect every city and town in India</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Integrate all modes of transportation seamlessly</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-secondary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Lead innovation in sustainable transportation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center p-6"
            >
              <div className="bg-primary-100 p-4 rounded-full inline-flex justify-center items-center w-16 h-16 mb-4">
                <ShieldCheck className="h-8 w-8 text-primary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Safety First</h3>
              <p className="text-gray-600">
                We prioritize the safety and security of our customers above everything else. All our vehicles undergo rigorous maintenance, and our drivers are thoroughly vetted.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center p-6"
            >
              <div className="bg-secondary-100 p-4 rounded-full inline-flex justify-center items-center w-16 h-16 mb-4">
                <Award className="h-8 w-8 text-secondary-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Service Excellence</h3>
              <p className="text-gray-600">
                We strive to exceed expectations in every interaction. From the booking process to the journey itself, we aim to deliver a seamless and superior experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center p-6"
            >
              <div className="bg-accent-100 p-4 rounded-full inline-flex justify-center items-center w-16 h-16 mb-4">
                <svg className="h-8 w-8 text-accent-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve and embrace new technologies to improve our services. We believe in finding creative solutions to enhance the transportation experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center p-6"
            >
              <div className="bg-green-100 p-4 rounded-full inline-flex justify-center items-center w-16 h-16 mb-4">
                <Users className="h-8 w-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">Inclusivity</h3>
              <p className="text-gray-600">
                We believe transportation should be accessible to everyone. We design our services to cater to diverse needs and ensure no one is left behind.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Impact */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Making a difference in transportation across India, one journey at a time.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl font-bold text-primary-500 mb-2">5M+</div>
              <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
              <p className="text-gray-600">
                Over 5 million satisfied customers who rely on YatraConnect for their daily commutes and travel needs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl font-bold text-secondary-500 mb-2">200+</div>
              <h3 className="text-xl font-semibold mb-2">Cities Connected</h3>
              <p className="text-gray-600">
                Connecting over 200 cities across India with reliable transportation options, from metros to remote towns.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md text-center"
            >
              <div className="text-4xl font-bold text-accent-500 mb-2">10K+</div>
              <h3 className="text-xl font-semibold mb-2">Transport Partners</h3>
              <p className="text-gray-600">
                Partnering with over 10,000 transportation providers to create a robust network of options.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Leadership Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Leadership Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals driving YatraConnect's vision and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="B P MANISH" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">B P MANISH</h3>
                <p className="text-primary-500 font-medium mb-3">CEO & Co-Founder</p>
                <p className="text-gray-600 mb-4">
                  With 15+ years of experience in the transportation sector, B P MANISH leads our company's strategic vision and growth initiatives.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="BHAVANA L" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">BHAVANA L</h3>
                <p className="text-secondary-500 font-medium mb-3">COO & Co-Founder</p>
                <p className="text-gray-600 mb-4">
                  Priya oversees all operational aspects of YatraConnect, ensuring service excellence and operational efficiency across all our services.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Rajesh Kumar" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rajesh Kumar</h3>
                <p className="text-accent-500 font-medium mb-3">CTO</p>
                <p className="text-gray-600 mb-4">
                  A tech visionary with extensive experience in building scalable platforms, Rajesh leads our technology initiatives and digital transformation.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us on Our Journey</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Experience the YatraConnect difference for yourself. Book your next trip with us and be part of our mission to transform transportation across India.
          </p>
          <a href="/dashboard" className="btn bg-white text-primary-600 hover:bg-gray-100 px-8 py-3">
            Book Your Journey
          </a>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;