import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MapPin, Calendar, Users, Settings, CreditCard, Clock, List, LogOut } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { useAuth } from '../../context/AuthContext';
import { useBooking } from '../../context/BookingContext';
import { TransportType } from '../../context/BookingContext';

type BookingFormData = {
  from: string;
  to: string;
  passengers: number;
  preference: 'AC' | 'Non-AC';
  paymentType: 'Pay Now' | 'Pay Later';
};

// Mock bookings data
const mockBookings = [
  {
    id: 'B1001',
    from: 'Bangalore',
    to: 'Mysore',
    date: new Date(2025, 2, 15, 9, 30),
    transportType: 'bus' as TransportType,
    status: 'Confirmed',
    fare: 450,
  },
  {
    id: 'B1002',
    from: 'Bangalore',
    to: 'Chennai',
    date: new Date(2025, 2, 25, 17, 0),
    transportType: 'train' as TransportType,
    status: 'Upcoming',
    fare: 850,
  },
  {
    id: 'B1003',
    from: 'Bangalore',
    to: 'Airport',
    date: new Date(2025, 1, 5, 6, 0),
    transportType: 'cab' as TransportType,
    status: 'Completed',
    fare: 650,
  },
];

const UserDashboard: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const { bookingDetails, setBookingDetails } = useBooking();
  const [activeTab, setActiveTab] = useState<'booking' | 'mybookings' | 'profile'>('booking');
  const [date, setDate] = useState<Date | null>(new Date());
  const [transportType, setTransportType] = useState<TransportType>('bus');
  const [time, setTime] = useState<string>('10:00');
  
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    defaultValues: {
      from: bookingDetails.from,
      to: bookingDetails.to,
      passengers: bookingDetails.passengers,
      preference: 'AC',
      paymentType: 'Pay Now',
    },
  });
  
  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  const onSubmit = (data: BookingFormData) => {
    setBookingDetails({
      ...bookingDetails,
      transportType,
      from: data.from,
      to: data.to,
      date,
      time,
      passengers: data.passengers,
      preference: data.preference,
      paymentType: data.paymentType,
    });
    
    // Navigate to booking page
    window.location.href = `/booking/${transportType}`;
  };
  
  const formatStatus = (status: string) => {
    switch(status) {
      case 'Confirmed':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Confirmed</span>;
      case 'Upcoming':
        return <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Upcoming</span>;
      case 'Completed':
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Completed</span>;
      case 'Cancelled':
        return <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Cancelled</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">{status}</span>;
    }
  };
  
  const getTransportIcon = (type: TransportType) => {
    switch(type) {
      case 'bus':
        return <span className="px-2 py-1 rounded-full text-xs bg-primary-100 text-primary-800">Bus</span>;
      case 'train':
        return <span className="px-2 py-1 rounded-full text-xs bg-secondary-100 text-secondary-800">Train</span>;
      case 'cab':
        return <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Cab</span>;
      case 'auto':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Auto</span>;
      case 'bike':
        return <span className="px-2 py-1 rounded-full text-xs bg-purple-100 text-purple-800">Bike</span>;
      case 'metro':
        return <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">Metro</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">{type}</span>;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-primary-100 p-3">
                    <span className="text-primary-600 text-xl font-bold">
                      {user?.name.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-3">
                    <p className="font-semibold">{user?.name}</p>
                    <p className="text-sm text-gray-500">{user?.email}</p>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <button
                    className={`w-full flex items-center px-3 py-2 rounded-md text-left text-sm font-medium transition ${
                      activeTab === 'booking'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={() => setActiveTab('booking')}
                  >
                    <CreditCard className="h-5 w-5 mr-2" />
                    Book Transport
                  </button>
                  <button
                    className={`w-full flex items-center px-3 py-2 rounded-md text-left text-sm font-medium transition ${
                      activeTab === 'mybookings'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={() => setActiveTab('mybookings')}
                  >
                    <List className="h-5 w-5 mr-2" />
                    My Bookings
                  </button>
                  <button
                    className={`w-full flex items-center px-3 py-2 rounded-md text-left text-sm font-medium transition ${
                      activeTab === 'profile'
                        ? 'bg-primary-50 text-primary-600'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <Settings className="h-5 w-5 mr-2" />
                    Profile Settings
                  </button>
                  <button
                    className="w-full flex items-center px-3 py-2 rounded-md text-left text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition"
                    onClick={logout}
                  >
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </button>
                </nav>
              </div>
              
              <div className="bg-secondary-600 text-white rounded-lg shadow-md p-6">
                <h3 className="font-semibold mb-2">Need Help?</h3>
                <p className="text-sm mb-4">Our customer support team is available 24/7 to assist you.</p>
                <button className="w-full bg-white text-secondary-600 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 transition">
                  Contact Support
                </button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-grow">
              {/* Booking Tab */}
              {activeTab === 'booking' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                    <h2 className="text-xl font-semibold mb-4">Book Your Transport</h2>
                    
                    {/* Transport Type Selector */}
                    <div className="mb-6">
                      <label className="input-label">Transport Type</label>
                      <div className="grid grid-cols-3 md:grid-cols-6 gap-2 mt-2">
                        {[
                          { type: 'bus', label: 'Bus' },
                          { type: 'train', label: 'Train' },
                          { type: 'cab', label: 'Cab' },
                          { type: 'auto', label: 'Auto' },
                          { type: 'bike', label: 'Bike' },
                          { type: 'metro', label: 'Metro' },
                        ].map(item => (
                          <button
                            key={item.type}
                            type="button"
                            className={`p-3 text-center rounded-md transition ${
                              transportType === item.type
                                ? 'bg-primary-100 text-primary-600 border border-primary-200'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                            onClick={() => setTransportType(item.type as TransportType)}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="input-group">
                          <label htmlFor="from" className="input-label">From</label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <input
                              type="text"
                              id="from"
                              className="input-field pl-10"
                              placeholder="Enter pickup location"
                              {...register('from', { required: 'Pickup location is required' })}
                            />
                          </div>
                          {errors.from && (
                            <p className="mt-1 text-sm text-red-600">{errors.from.message}</p>
                          )}
                        </div>
                        
                        <div className="input-group">
                          <label htmlFor="to" className="input-label">To</label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                              <MapPin className="h-5 w-5" />
                            </div>
                            <input
                              type="text"
                              id="to"
                              className="input-field pl-10"
                              placeholder="Enter destination"
                              {...register('to', { required: 'Destination is required' })}
                            />
                          </div>
                          {errors.to && (
                            <p className="mt-1 text-sm text-red-600">{errors.to.message}</p>
                          )}
                        </div>
                        
                        <div className="input-group">
                          <label htmlFor="date" className="input-label">Date</label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10">
                              <Calendar className="h-5 w-5" />
                            </div>
                            <DatePicker
                              selected={date}
                              onChange={(date) => setDate(date)}
                              dateFormat="dd/MM/yyyy"
                              minDate={new Date()}
                              className="input-field pl-10 w-full"
                              placeholderText="Select date"
                            />
                          </div>
                        </div>
                        
                        <div className="input-group">
                          <label htmlFor="time" className="input-label">Time</label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                              <Clock className="h-5 w-5" />
                            </div>
                            <select
                              id="time"
                              className="input-field pl-10"
                              value={time}
                              onChange={(e) => setTime(e.target.value)}
                            >
                              {Array.from({ length: 24 }).map((_, i) => {
                                const hour = i < 10 ? `0${i}` : `${i}`;
                                return (
                                  <option key={`${hour}:00`} value={`${hour}:00`}>
                                    {`${hour}:00`}
                                  </option>
                                );
                              })}
                            </select>
                          </div>
                        </div>
                        
                        <div className="input-group">
                          <label htmlFor="passengers" className="input-label">Passengers</label>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                              <Users className="h-5 w-5" />
                            </div>
                            <input
                              type="number"
                              id="passengers"
                              min="1"
                              max="10"
                              className="input-field pl-10"
                              {...register('passengers', { 
                                required: 'Number of passengers is required',
                                min: {
                                  value: 1,
                                  message: 'At least 1 passenger is required'
                                },
                                max: {
                                  value: 10,
                                  message: 'Maximum 10 passengers allowed'
                                }
                              })}
                            />
                          </div>
                          {errors.passengers && (
                            <p className="mt-1 text-sm text-red-600">{errors.passengers.message}</p>
                          )}
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label">Preference</label>
                          <div className="flex gap-3 mt-2">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value="AC"
                                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                                {...register('preference')}
                                defaultChecked
                              />
                              <span className="ml-2 text-sm text-gray-700">AC</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value="Non-AC"
                                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                                {...register('preference')}
                              />
                              <span className="ml-2 text-sm text-gray-700">Non-AC</span>
                            </label>
                          </div>
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label">Payment Type</label>
                          <div className="flex gap-3 mt-2">
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value="Pay Now"
                                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                                {...register('paymentType')}
                                defaultChecked
                              />
                              <span className="ml-2 text-sm text-gray-700">Pay Now</span>
                            </label>
                            <label className="flex items-center">
                              <input
                                type="radio"
                                value="Pay Later"
                                className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                                {...register('paymentType')}
                              />
                              <span className="ml-2 text-sm text-gray-700">Pay Later</span>
                            </label>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <button
                          type="submit"
                          className="w-full btn btn-primary py-3"
                        >
                          Search Available Options
                        </button>
                      </div>
                    </form>
                  </div>
                  
                  {/* Recent Bookings Preview */}
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-semibold">Recent Bookings</h3>
                      <button
                        className="text-primary-600 hover:text-primary-500 text-sm font-medium"
                        onClick={() => setActiveTab('mybookings')}
                      >
                        View All
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {mockBookings.slice(0, 2).map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-3 border border-gray-100 rounded-lg">
                          <div>
                            <div className="flex items-center mb-1">
                              <span className="font-medium">{booking.from} to {booking.to}</span>
                              <span className="mx-2">•</span>
                              {getTransportIcon(booking.transportType)}
                            </div>
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              <span>
                                {booking.date.toLocaleDateString('en-IN', { 
                                  day: 'numeric', 
                                  month: 'short', 
                                  year: 'numeric',
                                  hour: '2-digit',
                                  minute: '2-digit'
                                })}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            {formatStatus(booking.status)}
                            <div className="mt-1 font-medium">₹{booking.fare}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* My Bookings Tab */}
              {activeTab === 'mybookings' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-6">My Bookings</h2>
                    
                    <div className="flex border-b mb-6">
                      <button className="px-4 py-2 font-medium text-primary-600 border-b-2 border-primary-500">
                        All Bookings
                      </button>
                      <button className="px-4 py-2 font-medium text-gray-600 hover:text-primary-600">
                        Upcoming
                      </button>
                      <button className="px-4 py-2 font-medium text-gray-600 hover:text-primary-600">
                        Completed
                      </button>
                      <button className="px-4 py-2 font-medium text-gray-600 hover:text-primary-600">
                        Cancelled
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      {mockBookings.map((booking) => (
                        <div key={booking.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition">
                          <div className="flex justify-between flex-wrap gap-4">
                            <div>
                              <div className="flex items-center mb-2">
                                <span className="font-medium text-lg">{booking.from} to {booking.to}</span>
                                <span className="mx-2">•</span>
                                {getTransportIcon(booking.transportType)}
                              </div>
                              <div className="flex items-center text-sm text-gray-600 mb-2">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>
                                  {booking.date.toLocaleDateString('en-IN', { 
                                    day: 'numeric', 
                                    month: 'short', 
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit'
                                  })}
                                </span>
                              </div>
                              <div className="text-sm text-gray-600">
                                Booking ID: <span className="font-mono">{booking.id}</span>
                              </div>
                            </div>
                            
                            <div className="text-right">
                              <div className="mb-2">{formatStatus(booking.status)}</div>
                              <div className="text-lg font-semibold">₹{booking.fare}</div>
                              <div className="flex mt-2 space-x-2 justify-end">
                                <button className="px-3 py-1 text-xs rounded-md bg-primary-50 text-primary-600 hover:bg-primary-100">
                                  View Details
                                </button>
                                {booking.status === 'Upcoming' && (
                                  <button className="px-3 py-1 text-xs rounded-md bg-red-50 text-red-600 hover:bg-red-100">
                                    Cancel
                                  </button>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
              
              {/* Profile Settings Tab */}
              {activeTab === 'profile' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-xl font-semibold mb-6">Profile Settings</h2>
                    
                    <div className="mb-6 flex flex-col sm:flex-row items-center gap-6">
                      <div className="w-24 h-24 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 text-4xl font-bold">
                        {user?.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold">{user?.name}</h3>
                        <p className="text-gray-600">{user?.email}</p>
                        <button className="mt-2 text-sm text-primary-600 hover:text-primary-500 font-medium">
                          Change Profile Picture
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="input-group">
                          <label className="input-label">Full Name</label>
                          <input type="text" className="input-field" defaultValue={user?.name} />
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label">Email Address</label>
                          <input type="email" className="input-field" defaultValue={user?.email} readOnly />
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label">Phone Number</label>
                          <input type="tel" className="input-field" placeholder="Enter your phone number" />
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label">Date of Birth</label>
                          <input type="date" className="input-field" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold mb-4">Password</h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="input-group">
                          <label className="input-label">Current Password</label>
                          <input type="password" className="input-field" placeholder="Enter current password" />
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label">New Password</label>
                          <input type="password" className="input-field" placeholder="Enter new password" />
                        </div>
                        
                        <div className="input-group md:col-span-2">
                          <label className="input-label">Confirm New Password</label>
                          <input type="password" className="input-field" placeholder="Confirm new password" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6 mt-6">
                      <h3 className="text-lg font-semibold mb-4">Preferences</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-center">
                          <input 
                            id="emailNotifications" 
                            type="checkbox" 
                            className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                          <label htmlFor="emailNotifications" className="ml-2 block text-gray-700">
                            Receive email notifications for booking updates
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            id="smsNotifications" 
                            type="checkbox" 
                            className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                            defaultChecked
                          />
                          <label htmlFor="smsNotifications" className="ml-2 block text-gray-700">
                            Receive SMS notifications for booking updates
                          </label>
                        </div>
                        
                        <div className="flex items-center">
                          <input 
                            id="marketingEmails" 
                            type="checkbox" 
                            className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                          />
                          <label htmlFor="marketingEmails" className="ml-2 block text-gray-700">
                            Receive promotional emails about offers and discounts
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 flex justify-end">
                      <button className="btn btn-outline mr-3">
                        Cancel
                      </button>
                      <button className="btn btn-primary">
                        Save Changes
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default UserDashboard;