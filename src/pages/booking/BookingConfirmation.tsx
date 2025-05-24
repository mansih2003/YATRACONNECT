import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Calendar, Clock, MapPin, Download, Share2, Bus, Train, Car } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useBooking } from '../../context/BookingContext';

const BookingConfirmation: React.FC = () => {
  const { bookingDetails, resetBooking } = useBooking();
  const navigate = useNavigate();
  
  // Generate a random booking ID
  const bookingId = `YC${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
  
  // If no booking details, redirect to dashboard
  useEffect(() => {
    if (!bookingDetails.from || !bookingDetails.to) {
      navigate('/dashboard');
    }
  }, [bookingDetails]);
  
  const getTransportIcon = () => {
    switch (bookingDetails.transportType) {
      case 'bus':
        return <Bus className="h-8 w-8 text-primary-500" />;
      case 'train':
        return <Train className="h-8 w-8 text-secondary-500" />;
      case 'cab':
      case 'auto':
        return <Car className="h-8 w-8 text-accent-500" />;
      default:
        return <Bus className="h-8 w-8 text-primary-500" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto overflow-hidden"
          >
            <div className="bg-primary-500 text-white p-6 text-center">
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                className="rounded-full bg-white/20 w-16 h-16 mx-auto flex items-center justify-center mb-4"
              >
                <CheckCircle className="h-8 w-8" />
              </motion.div>
              
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p>Your booking has been confirmed and tickets have been sent to your email.</p>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-6 border-b pb-6">
                <div>
                  <div className="text-sm text-gray-600">Booking ID</div>
                  <div className="text-xl font-semibold">{bookingId}</div>
                </div>
                
                <div className="px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                  Confirmed
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Trip Details</h3>
                
                <div className="flex items-start mb-4">
                  <div className="rounded-full bg-gray-100 p-2 mr-4">
                    {getTransportIcon()}
                  </div>
                  
                  <div>
                    <div className="text-lg font-semibold">
                      {bookingDetails.transportType.charAt(0).toUpperCase() + bookingDetails.transportType.slice(1)} Journey
                    </div>
                    
                    <div className="flex items-center mt-1">
                      <MapPin className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-gray-600">{bookingDetails.from} to {bookingDetails.to}</span>
                    </div>
                    
                    <div className="flex items-center mt-1">
                      <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                      <span className="text-gray-600">
                        {bookingDetails.date?.toLocaleDateString('en-IN', { 
                          day: 'numeric', 
                          month: 'short', 
                          year: 'numeric'
                        })}
                      </span>
                      {bookingDetails.time && (
                        <>
                          <Clock className="h-4 w-4 text-gray-500 ml-3 mr-1" />
                          <span className="text-gray-600">{bookingDetails.time}</span>
                        </>
                      )}
                    </div>
                    
                    {bookingDetails.seats && bookingDetails.seats.length > 0 && (
                      <div className="mt-1 text-gray-600">
                        Seat(s): <span className="font-medium">{bookingDetails.seats.join(', ')}</span>
                      </div>
                    )}
                    
                    <div className="mt-1 text-gray-600">
                      Passengers: <span className="font-medium">{bookingDetails.passengers}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Fare Details</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Base Fare</span>
                    <span>₹{bookingDetails.fare?.baseFare}</span>
                  </div>
                  
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">GST</span>
                    <span>₹{bookingDetails.fare?.gst}</span>
                  </div>
                  
                  {bookingDetails.fare?.toll && (
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600">Toll/Taxes</span>
                      <span>₹{bookingDetails.fare.toll}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between font-semibold text-lg pt-2 border-t mt-2">
                    <span>Total</span>
                    <span>₹{bookingDetails.fare?.total}</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Payment Method</div>
                    <div className="font-medium">Credit Card</div>
                  </div>
                  
                  <div>
                    <div className="text-gray-600">Transaction ID</div>
                    <div className="font-medium">TXN{Math.floor(Math.random() * 1000000).toString()}</div>
                  </div>
                  
                  <div>
                    <div className="text-gray-600">Payment Status</div>
                    <div className="font-medium text-green-600">Paid</div>
                  </div>
                  
                  <div>
                    <div className="text-gray-600">Payment Date</div>
                    <div className="font-medium">{new Date().toLocaleDateString('en-IN')}</div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center border-t pt-6">
                <button className="btn bg-primary-500 hover:bg-primary-600 text-white flex items-center">
                  <Download className="h-4 w-4 mr-2" />
                  Download Ticket
                </button>
                
                <button className="btn btn-outline flex items-center">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </motion.div>
          
          <div className="text-center mt-8">
            <Link 
              to="/dashboard" 
              className="text-primary-600 hover:text-primary-700 font-semibold"
              onClick={resetBooking}
            >
              Return to Dashboard
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingConfirmation;