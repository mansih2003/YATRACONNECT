import React, { createContext, useContext, useState } from 'react';

export type TransportType = 'bus' | 'train' | 'cab' | 'auto' | 'bike' | 'metro';

export type BookingDetails = {
  transportType: TransportType;
  from: string;
  to: string;
  date: Date | null;
  time?: string;
  passengers: number;
  preference?: 'AC' | 'Non-AC';
  paymentType?: 'Pay Now' | 'Pay Later';
  seats?: string[];
  fare?: {
    baseFare: number;
    gst: number;
    toll?: number;
    total: number;
  };
};

type BookingContextType = {
  bookingDetails: BookingDetails;
  setBookingDetails: React.Dispatch<React.SetStateAction<BookingDetails>>;
  selectedSeats: string[];
  setSelectedSeats: React.Dispatch<React.SetStateAction<string[]>>;
  resetBooking: () => void;
  calculateFare: (type: TransportType, distance: number, isAC?: boolean) => { baseFare: number; gst: number; toll?: number; total: number };
};

const defaultBookingDetails: BookingDetails = {
  transportType: 'bus',
  from: '',
  to: '',
  date: null,
  passengers: 1,
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>(defaultBookingDetails);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const resetBooking = () => {
    setBookingDetails(defaultBookingDetails);
    setSelectedSeats([]);
  };

  const calculateFare = (
    type: TransportType, 
    distance: number, 
    isAC = false
  ): { baseFare: number; gst: number; toll?: number; total: number } => {
    let baseFare = 0;
    
    // Calculate base fare based on transport type and distance
    switch (type) {
      case 'bus':
        baseFare = isAC ? distance * 2.5 : distance * 1.5;
        break;
      case 'train':
        baseFare = isAC ? distance * 1.8 : distance * 1;
        break;
      case 'cab':
        baseFare = distance * 12 + 50; // Base price + per km
        break;
      case 'auto':
        baseFare = distance * 9 + 30;
        break;
      case 'bike':
        baseFare = distance * 6 + 20;
        break;
      case 'metro':
        baseFare = Math.min(distance * 0.8, 60); // Cap at 60 INR
        break;
      default:
        baseFare = distance * 2;
    }
    
    // Calculate GST (18%)
    const gst = baseFare * 0.18;
    
    // Add toll for cab services for longer distances
    const toll = type === 'cab' && distance > 25 ? 40 : undefined;
    
    // Calculate total fare
    const total = baseFare + gst + (toll || 0);
    
    return {
      baseFare: Math.round(baseFare),
      gst: Math.round(gst),
      toll,
      total: Math.round(total),
    };
  };

  return (
    <BookingContext.Provider
      value={{
        bookingDetails,
        setBookingDetails,
        selectedSeats,
        setSelectedSeats,
        resetBooking,
        calculateFare,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};