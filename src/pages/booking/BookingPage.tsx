import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Map, Bus, Train, Car, Bike, Clock, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import SeatSelection from '../../components/common/SeatSelection';
import { useBooking, TransportType } from '../../context/BookingContext';

const transportLabels = {
  'bus': 'Bus',
  'train': 'Train',
  'cab': 'Cab',
  'auto': 'Auto',
  'bike': 'Bike',
  'metro': 'Metro',
};

interface TransportOption {
  id: string;
  name: string;
  departureTime: string;
  arrivalTime: string;
  duration: string;
  price: number;
  acPrice?: number;
  seatsAvailable: number;
  features?: string[];
}

// Mock data for transport options
const getMockTransportOptions = (type: TransportType): TransportOption[] => {
  switch (type) {
    case 'bus':
      return [
        {
          id: 'B1001',
          name: 'VRL Travels',
          departureTime: '06:30',
          arrivalTime: '10:30',
          duration: '4h',
          price: 350,
          acPrice: 550,
          seatsAvailable: 25,
          features: ['WiFi', 'Charging Point', 'Snacks'],
        },
        {
          id: 'B1002',
          name: 'SRS Travels',
          departureTime: '08:00',
          arrivalTime: '12:30',
          duration: '4h 30m',
          price: 300,
          acPrice: 500,
          seatsAvailable: 18,
          features: ['WiFi', 'Water Bottle'],
        },
        {
          id: 'B1003',
          name: 'Orange Travels',
          departureTime: '10:00',
          arrivalTime: '14:00',
          duration: '4h',
          price: 380,
          acPrice: 580,
          seatsAvailable: 12,
          features: ['WiFi', 'Charging Point', 'Blanket', 'TV'],
        },
      ];
    case 'train':
      return [
        {
          id: 'T1001',
          name: 'Shatabdi Express',
          departureTime: '06:00',
          arrivalTime: '09:30',
          duration: '3h 30m',
          price: 250,
          acPrice: 450,
          seatsAvailable: 120,
          features: ['Meals', 'WiFi'],
        },
        {
          id: 'T1002',
          name: 'Intercity Express',
          departureTime: '08:15',
          arrivalTime: '11:45',
          duration: '3h 30m',
          price: 200,
          acPrice: 400,
          seatsAvailable: 80,
          features: ['Snacks'],
        },
        {
          id: 'T1003',
          name: 'Duronto Express',
          departureTime: '14:30',
          arrivalTime: '18:00',
          duration: '3h 30m',
          price: 300,
          acPrice: 550,
          seatsAvailable: 50,
          features: ['Meals', 'WiFi', 'Blanket'],
        },
      ];
    case 'cab':
      return [
        {
          id: 'C1001',
          name: 'SUV - Toyota Innova',
          departureTime: 'Flexible',
          arrivalTime: 'Flexible',
          duration: '~4h',
          price: 2800,
          seatsAvailable: 6,
          features: ['AC', 'Music System', 'Water Bottle'],
        },
        {
          id: 'C1002',
          name: 'Sedan - Honda City',
          departureTime: 'Flexible',
          arrivalTime: 'Flexible',
          duration: '~4h',
          price: 2200,
          seatsAvailable: 4,
          features: ['AC', 'Music System', 'Water Bottle'],
        },
        {
          id: 'C1003',
          name: 'Hatchback - Swift',
          departureTime: 'Flexible',
          arrivalTime: 'Flexible',
          duration: '~4h',
          price: 1800,
          seatsAvailable: 4,
          features: ['AC', 'Music System'],
        },
      ];
    case 'auto':
      return [
        {
          id: 'A1001',
          name: 'Auto Rickshaw',
          departureTime: 'Flexible',
          arrivalTime: 'Flexible',
          duration: 'Varies',
          price: 250,
          seatsAvailable: 3,
          features: ['Metered'],
        },
        {
          id: 'A1002',
          name: 'Shared Auto',
          departureTime: 'Flexible',
          arrivalTime: 'Flexible',
          duration: 'Varies',
          price: 150,
          seatsAvailable: 1,
          features: ['Fixed Route'],
        },
      ];
    case 'bike':
      return [
        {
          id: 'BK1001',
          name: 'Bike Taxi',
          departureTime: 'Flexible',
          arrivalTime: 'Flexible',
          duration: 'Varies',
          price: 120,
          seatsAvailable: 1,
          features: ['Helmet Provided'],
        },
      ];
    case 'metro':
      return [
        {
          id: 'M1001',
          name: 'Metro Rail',
          departureTime: 'Every 10 mins',
          arrivalTime: 'Flexible',
          duration: 'Varies',
          price: 50,
          seatsAvailable: 200,
          features: ['AC', 'Fast'],
        },
      ];
    default:
      return [];
  }
};

// Mock booked seats
const mockBookedSeats = ['1A', '1D', '3B', '5C', '7A', '7B', '10C', '10D'];

const BookingPage: React.FC = () => {
  const { transportType } = useParams<{ transportType: TransportType }>();
  const navigate = useNavigate();
  const { bookingDetails, setBookingDetails, selectedSeats, setSelectedSeats, calculateFare } = useBooking();
  
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedTransport, setSelectedTransport] = useState<TransportOption | null>(null);
  const [transportOptions, setTransportOptions] = useState<TransportOption[]>([]);
  
  // Set transport type from URL parameter
  useEffect(() => {
    if (transportType && ['bus', 'train', 'cab', 'auto', 'bike', 'metro'].includes(transportType)) {
      setBookingDetails({
        ...bookingDetails,
        transportType: transportType as TransportType,
      });
      
      // Load mock transport options
      setTransportOptions(getMockTransportOptions(transportType as TransportType));
    } else {
      // Invalid transport type, redirect to dashboard
      navigate('/dashboard');
    }
  }, [transportType]);
  
  // Reset selected seats when changing transport or step
  useEffect(() => {
    if (step !== 2) {
      setSelectedSeats([]);
    }
  }, [step, selectedTransport]);
  
  const handleSeatSelect = (seat: string) => {
    if (selectedSeats.includes(seat)) {
      // Deselect
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else if (selectedSeats.length < bookingDetails.passengers) {
      // Select
      setSelectedSeats([...selectedSeats, seat]);
    } else {
      // Max seats reached, replace the first selected seat
      setSelectedSeats([...selectedSeats.slice(1), seat]);
    }
  };
  
  const handleTransportSelect = (transport: TransportOption) => {
    setSelectedTransport(transport);
    setStep(2);
  };
  
  const handleProceedToPayment = () => {
    if (selectedTransport) {
      // For bus and train, ensure seats are selected
      if ((transportType === 'bus' || transportType === 'train') && selectedSeats.length === 0) {
        alert('Please select at least one seat');
        return;
      }
      
      // Calculate fare
      const distance = 150; // Example distance in km
      const isAC = bookingDetails.preference === 'AC';
      const fare = calculateFare(bookingDetails.transportType, distance, isAC);
      
      // Update booking details with fare
      setBookingDetails({
        ...bookingDetails,
        seats: selectedSeats,
        fare,
      });
      
      setStep(3);
    }
  };
  
  const handleBooking = () => {
    // In a real app, this would call an API to create the booking
    navigate('/booking/confirmation');
  };
  
  const getTransportIcon = () => {
    switch (transportType) {
      case 'bus':
        return <Bus className="h-6 w-6 text-primary-500" />;
      case 'train':
        return <Train className="h-6 w-6 text-secondary-500" />;
      case 'cab':
        return <Car className="h-6 w-6 text-accent-500" />;
      case 'auto':
        return <Car className="h-6 w-6 text-emerald-500" />;
      case 'bike':
        return <Bike className="h-6 w-6 text-purple-500" />;
      case 'metro':
        return <Train className="h-6 w-6 text-blue-500" />;
      default:
        return <Map className="h-6 w-6 text-gray-500" />;
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow pt-24">
        <div className="container-custom py-8">
          {/* Booking Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-between w-full mx-auto max-w-3xl mb-8">
              <div className="flex-1">
                <div className={`flex items-center justify-center ${step >= 1 ? 'text-white' : 'text-gray-500'}`}>
                  <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 1 ? 'bg-primary-500' : 'bg-gray-300'}`}>
                    <span>1</span>
                  </div>
                  <div className="ml-2 text-sm font-medium hidden sm:block">
                    Select {transportType && transportLabels[transportType]}
                  </div>
                </div>
              </div>
              
              <div className="w-full flex-1 max-w-full h-0.5 bg-gray-200">
                <div className={`h-full ${step >= 2 ? 'bg-primary-500' : 'bg-gray-200'}`} style={{ width: step >= 2 ? '100%' : '0' }}></div>
              </div>
              
              <div className="flex-1">
                <div className={`flex items-center justify-center ${step >= 2 ? 'text-white' : 'text-gray-500'}`}>
                  <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 2 ? 'bg-primary-500' : 'bg-gray-300'}`}>
                    <span>2</span>
                  </div>
                  <div className="ml-2 text-sm font-medium hidden sm:block">
                    {(transportType === 'bus' || transportType === 'train') ? 'Select Seats' : 'View Details'}
                  </div>
                </div>
              </div>
              
              <div className="w-full flex-1 max-w-full h-0.5 bg-gray-200">
                <div className={`h-full ${step >= 3 ? 'bg-primary-500' : 'bg-gray-200'}`} style={{ width: step >= 3 ? '100%' : '0' }}></div>
              </div>
              
              <div className="flex-1">
                <div className={`flex items-center justify-center ${step >= 3 ? 'text-white' : 'text-gray-500'}`}>
                  <div className={`rounded-full h-10 w-10 flex items-center justify-center ${step >= 3 ? 'bg-primary-500' : 'bg-gray-300'}`}>
                    <span>3</span>
                  </div>
                  <div className="ml-2 text-sm font-medium hidden sm:block">
                    Payment
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-primary-50 p-3 rounded-full">
                  {getTransportIcon()}
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold flex items-center">
                    {transportType && transportLabels[transportType]} Booking
                    {bookingDetails.from && bookingDetails.to && (
                      <span className="ml-2 text-lg font-normal text-gray-600">
                        {bookingDetails.from} to {bookingDetails.to}
                      </span>
                    )}
                  </h2>
                  
                  <div className="flex flex-wrap gap-4 mt-1 text-sm text-gray-600">
                    {bookingDetails.date && (
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>
                          {bookingDetails.date.toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    )}
                    
                    {bookingDetails.time && (
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{bookingDetails.time}</span>
                      </div>
                    )}
                    
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{bookingDetails.passengers} Passenger{bookingDetails.passengers > 1 ? 's' : ''}</span>
                    </div>
                    
                    {bookingDetails.preference && (
                      <div className="px-2 py-0.5 bg-gray-100 rounded text-xs">
                        {bookingDetails.preference}
                      </div>
                    )}
                  </div>
                </div>
                
                <button 
                  className="ml-auto text-primary-600 hover:text-primary-800 text-sm font-medium flex items-center"
                  onClick={() => navigate('/dashboard')}
                >
                  <ArrowLeft className="h-4 w-4 mr-1" />
                  Modify Search
                </button>
              </div>
            </div>
          </div>
          
          {/* Step 1: Select Transport */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold">
                    Available {transportType && transportLabels[transportType]} Options
                  </h3>
                </div>
                
                <div className="divide-y divide-gray-200">
                  {transportOptions.map((option) => (
                    <div key={option.id} className="p-6 hover:bg-gray-50 transition">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex-grow">
                          <h4 className="text-lg font-semibold mb-2">{option.name}</h4>
                          
                          <div className="flex items-center gap-8 mb-3">
                            <div>
                              <div className="text-lg font-medium">{option.departureTime}</div>
                              <div className="text-sm text-gray-500">{bookingDetails.from}</div>
                            </div>
                            
                            <div className="flex flex-col items-center">
                              <div className="text-xs text-gray-500">{option.duration}</div>
                              <div className="w-16 h-0.5 bg-gray-300 my-1"></div>
                              <div className="text-xs text-gray-500">Direct</div>
                            </div>
                            
                            <div>
                              <div className="text-lg font-medium">{option.arrivalTime}</div>
                              <div className="text-sm text-gray-500">{bookingDetails.to}</div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-3">
                            {option.features && option.features.map((feature, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">
                                {feature}
                              </span>
                            ))}
                          </div>
                          
                          <div className="text-sm text-gray-600">
                            {option.seatsAvailable} {option.seatsAvailable === 1 ? 'seat' : 'seats'} available
                          </div>
                        </div>
                        
                        <div className="flex flex-col justify-between items-end">
                          <div className="text-right">
                            <div className="text-lg font-semibold text-gray-900">
                              ₹{bookingDetails.preference === 'AC' && option.acPrice ? option.acPrice : option.price}
                            </div>
                            <div className="text-xs text-gray-500">per person</div>
                          </div>
                          
                          <button
                            className="btn btn-primary mt-4"
                            onClick={() => handleTransportSelect(option)}
                          >
                            Select
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Step 2: Seat Selection or Details */}
          {step === 2 && selectedTransport && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  {(transportType === 'bus' || transportType === 'train') ? (
                    <SeatSelection
                      transportType={transportType as 'bus' | 'train'}
                      bookedSeats={mockBookedSeats}
                      selectedSeats={selectedSeats}
                      onSeatSelect={handleSeatSelect}
                    />
                  ) : (
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <h3 className="text-lg font-semibold mb-4">Transport Details</h3>
                      
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Transport Type:</span>
                          <span className="font-medium">{transportType && transportLabels[transportType]}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Vehicle:</span>
                          <span className="font-medium">{selectedTransport.name}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">From:</span>
                          <span className="font-medium">{bookingDetails.from}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">To:</span>
                          <span className="font-medium">{bookingDetails.to}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Date:</span>
                          <span className="font-medium">
                            {bookingDetails.date?.toLocaleDateString('en-IN', { 
                              day: 'numeric', 
                              month: 'short', 
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Time:</span>
                          <span className="font-medium">{bookingDetails.time}</span>
                        </div>
                        
                        <div className="flex justify-between">
                          <span className="text-gray-600">Passengers:</span>
                          <span className="font-medium">{bookingDetails.passengers}</span>
                        </div>
                        
                        {bookingDetails.preference && (
                          <div className="flex justify-between">
                            <span className="text-gray-600">Preference:</span>
                            <span className="font-medium">{bookingDetails.preference}</span>
                          </div>
                        )}
                        
                        {selectedTransport.features && (
                          <div>
                            <span className="text-gray-600">Features:</span>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {selectedTransport.features.map((feature, index) => (
                                <span key={index} className="px-2 py-1 bg-gray-100 rounded-md text-xs text-gray-700">
                                  {feature}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Booking Summary</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{transportType && transportLabels[transportType]}:</span>
                        <span className="font-medium">{selectedTransport.name}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Route:</span>
                        <span className="font-medium">{bookingDetails.from} to {bookingDetails.to}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Journey Date:</span>
                        <span className="font-medium">
                          {bookingDetails.date?.toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Departure:</span>
                        <span className="font-medium">{selectedTransport.departureTime}</span>
                      </div>
                      
                      {(transportType === 'bus' || transportType === 'train') && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Selected Seats:</span>
                          <span className="font-medium">
                            {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
                          </span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Passengers:</span>
                        <span className="font-medium">{bookingDetails.passengers}</span>
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Base Fare:</span>
                          <span className="font-medium">
                            ₹{bookingDetails.preference === 'AC' && selectedTransport.acPrice 
                              ? selectedTransport.acPrice * bookingDetails.passengers
                              : selectedTransport.price * bookingDetails.passengers}
                          </span>
                        </div>
                        
                        <div className="flex justify-between mt-2">
                          <span className="text-gray-600">Taxes & Fees:</span>
                          <span className="font-medium">
                            ₹{Math.round((bookingDetails.preference === 'AC' && selectedTransport.acPrice 
                              ? selectedTransport.acPrice * 0.18
                              : selectedTransport.price * 0.18) * bookingDetails.passengers)}
                          </span>
                        </div>
                        
                        <div className="flex justify-between font-semibold text-lg mt-4">
                          <span>Total:</span>
                          <span>
                            ₹{bookingDetails.preference === 'AC' && selectedTransport.acPrice 
                              ? Math.round(selectedTransport.acPrice * 1.18 * bookingDetails.passengers)
                              : Math.round(selectedTransport.price * 1.18 * bookingDetails.passengers)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <button
                        className="w-full btn btn-primary"
                        onClick={handleProceedToPayment}
                      >
                        Proceed to Payment
                      </button>
                      
                      <button
                        className="w-full btn btn-outline"
                        onClick={() => setStep(1)}
                      >
                        Go Back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Step 3: Payment */}
          {step === 3 && selectedTransport && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-center">
                        <input
                          id="card"
                          name="payment"
                          type="radio"
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                          defaultChecked
                        />
                        <label htmlFor="card" className="ml-3 font-medium text-gray-700">
                          Credit / Debit Card
                        </label>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-md">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="input-label">Card Number</label>
                            <input type="text" className="input-field" placeholder="1234 5678 9012 3456" />
                          </div>
                          
                          <div>
                            <label className="input-label">Expiry Date</label>
                            <input type="text" className="input-field" placeholder="MM/YY" />
                          </div>
                          
                          <div>
                            <label className="input-label">CVV</label>
                            <input type="text" className="input-field" placeholder="123" />
                          </div>
                          
                          <div className="md:col-span-2">
                            <label className="input-label">Name on Card</label>
                            <input type="text" className="input-field" placeholder="John Doe" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="upi"
                          name="payment"
                          type="radio"
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                        />
                        <label htmlFor="upi" className="ml-3 font-medium text-gray-700">
                          UPI
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="netbanking"
                          name="payment"
                          type="radio"
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                        />
                        <label htmlFor="netbanking" className="ml-3 font-medium text-gray-700">
                          Net Banking
                        </label>
                      </div>
                      
                      <div className="flex items-center">
                        <input
                          id="wallet"
                          name="payment"
                          type="radio"
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300"
                        />
                        <label htmlFor="wallet" className="ml-3 font-medium text-gray-700">
                          Wallets
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                    <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="input-label">Email</label>
                        <input type="email" className="input-field" placeholder="email@example.com" />
                      </div>
                      
                      <div>
                        <label className="input-label">Phone</label>
                        <input type="tel" className="input-field" placeholder="+91 98765 43210" />
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <div className="flex items-center">
                        <input
                          id="receive-updates"
                          type="checkbox"
                          className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                          defaultChecked
                        />
                        <label htmlFor="receive-updates" className="ml-2 block text-sm text-gray-700">
                          Receive booking updates via SMS and email
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Payment Summary</h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{transportType && transportLabels[transportType]}:</span>
                        <span className="font-medium">{selectedTransport.name}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Route:</span>
                        <span className="font-medium">{bookingDetails.from} to {bookingDetails.to}</span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Journey Date:</span>
                        <span className="font-medium">
                          {bookingDetails.date?.toLocaleDateString('en-IN', { 
                            day: 'numeric', 
                            month: 'short', 
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Departure:</span>
                        <span className="font-medium">{selectedTransport.departureTime}</span>
                      </div>
                      
                      {(transportType === 'bus' || transportType === 'train') && selectedSeats.length > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">Selected Seats:</span>
                          <span className="font-medium">{selectedSeats.join(', ')}</span>
                        </div>
                      )}
                      
                      <div className="flex justify-between">
                        <span className="text-gray-600">Passengers:</span>
                        <span className="font-medium">{bookingDetails.passengers}</span>
                      </div>
                      
                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Base Fare:</span>
                          <span className="font-medium">
                            ₹{bookingDetails.preference === 'AC' && selectedTransport.acPrice 
                              ? selectedTransport.acPrice * bookingDetails.passengers
                              : selectedTransport.price * bookingDetails.passengers}
                          </span>
                        </div>
                        
                        <div className="flex justify-between mt-2">
                          <span className="text-gray-600">Taxes & Fees:</span>
                          <span className="font-medium">
                            ₹{Math.round((bookingDetails.preference === 'AC' && selectedTransport.acPrice 
                              ? selectedTransport.acPrice * 0.18
                              : selectedTransport.price * 0.18) * bookingDetails.passengers)}
                          </span>
                        </div>
                        
                        <div className="flex justify-between font-semibold text-lg mt-4">
                          <span>Total:</span>
                          <span>
                            ₹{bookingDetails.preference === 'AC' && selectedTransport.acPrice 
                              ? Math.round(selectedTransport.acPrice * 1.18 * bookingDetails.passengers)
                              : Math.round(selectedTransport.price * 1.18 * bookingDetails.passengers)}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <button
                        className="w-full btn btn-primary flex items-center justify-center"
                        onClick={handleBooking}
                      >
                        <span>Pay & Confirm Booking</span>
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </button>
                      
                      <button
                        className="w-full btn btn-outline"
                        onClick={() => setStep(2)}
                      >
                        Go Back
                      </button>
                    </div>
                    
                    <div className="mt-4 text-xs text-gray-500 text-center">
                      By proceeding, you agree to our terms and conditions and cancellation policy.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BookingPage;