import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  
  const onSubmit = (data: FormData) => {
    console.log(data);
    // In a real application, this would send the data to a server
    alert('Thank you for your message! We will get back to you soon.');
    reset();
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-secondary-600 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-white/90"
            >
              Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
            </motion.p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="bg-primary-100 p-3 rounded-full inline-block mb-4">
                <MapPin className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Location</h3>
              <p className="text-gray-600">
                1st Main, Jayanagar,<br />
                Bangalore, Karnataka 560041
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="bg-secondary-100 p-3 rounded-full inline-block mb-4">
                <Phone className="h-6 w-6 text-secondary-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Number</h3>
              <p className="text-gray-600">
                Customer Support:<br />
                +91 90361 12345
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="bg-accent-100 p-3 rounded-full inline-block mb-4">
                <Mail className="h-6 w-6 text-accent-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Address</h3>
              <p className="text-gray-600">
                General Inquiries:<br />
                support@yatraconnect.in
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-gray-50 p-6 rounded-lg border border-gray-200"
            >
              <div className="bg-green-100 p-3 rounded-full inline-block mb-4">
                <Clock className="h-6 w-6 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Working Hours</h3>
              <p className="text-gray-600">
                Mon - Sat: 9:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 5:00 PM
              </p>
            </motion.div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="input-group">
                      <label htmlFor="name" className="input-label">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        className={`input-field ${errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Enter your name"
                        {...register('name', { required: 'Name is required' })}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="input-group">
                      <label htmlFor="email" className="input-label">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        className={`input-field ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Enter your email"
                        {...register('email', { 
                          required: 'Email is required',
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Invalid email address',
                          }
                        })}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>
                    
                    <div className="input-group">
                      <label htmlFor="phone" className="input-label">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        className={`input-field ${errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Enter your phone number"
                        {...register('phone', { 
                          required: 'Phone number is required',
                          pattern: {
                            value: /^[0-9+\- ]{10,15}$/,
                            message: 'Invalid phone number',
                          }
                        })}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div className="input-group">
                      <label htmlFor="subject" className="input-label">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className={`input-field ${errors.subject ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                        placeholder="Enter subject"
                        {...register('subject', { required: 'Subject is required' })}
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="input-group mb-6">
                    <label htmlFor="message" className="input-label">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className={`input-field ${errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                      placeholder="Enter your message"
                      {...register('message', { required: 'Message is required' })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center justify-center"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7739925354387!2d77.5934840749431!3d12.925973987388463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1509ff2efa6f%3A0xeef56a8d1fa0638a!2sJayanagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1682531247726!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0, width: '100%', height: '500px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="YatraConnect Office Location"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and booking process.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="mb-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">How do I cancel my booking?</h3>
                <p className="text-gray-600">
                  You can cancel your booking by logging into your account, navigating to "My Bookings," and selecting the booking you wish to cancel. Click on the "Cancel" button and follow the instructions. Cancellation charges may apply depending on how close to the departure time you cancel.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="mb-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept various payment methods including credit/debit cards, net banking, UPI, and digital wallets like Paytm and Google Pay. All transactions are secure and encrypted to protect your financial information.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mb-4"
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">How can I get a receipt for my booking?</h3>
                <p className="text-gray-600">
                  A booking confirmation with receipt details is automatically sent to your registered email address after successful payment. You can also download the receipt from the "My Bookings" section of your account dashboard.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-2">Is it possible to change the date or time of my booking?</h3>
                <p className="text-gray-600">
                  Yes, you can modify your booking details, including date and time, by visiting the "My Bookings" section. Select the booking you wish to modify and click on "Reschedule." Changes are subject to availability and may incur additional charges depending on fare differences.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-secondary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Need Immediate Assistance?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our customer support team is available 24/7 to help you with any queries or issues you might have.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:+919036112345" className="btn bg-white text-secondary-600 hover:bg-gray-100">
              <Phone className="h-5 w-5 mr-2" />
              Call Support
            </a>
            <a href="mailto:support@yatraconnect.in" className="btn border border-white text-white hover:bg-white/10">
              <Mail className="h-5 w-5 mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage;