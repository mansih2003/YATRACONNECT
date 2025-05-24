import React from 'react';
import { motion } from 'framer-motion';
import { Bus, Train, Car, Bike } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TransportType } from '../../context/BookingContext';

interface TransportCardProps {
  type: TransportType;
  title: string;
  description: string;
  startingPrice: number;
  delay?: number;
}

const TransportCard: React.FC<TransportCardProps> = ({
  type,
  title,
  description,
  startingPrice,
  delay = 0,
}) => {
  // Get icon based on transport type
  const getIcon = () => {
    switch (type) {
      case 'bus':
        return <Bus className="h-8 w-8 text-primary-500" />;
      case 'train':
        return <Train className="h-8 w-8 text-secondary-500" />;
      case 'cab':
        return <Car className="h-8 w-8 text-accent-500" />;
      case 'auto':
        return <Car className="h-8 w-8 text-emerald-500" />;
      case 'bike':
        return <Bike className="h-8 w-8 text-purple-500" />;
      case 'metro':
        return <Train className="h-8 w-8 text-blue-500" />;
      default:
        return <Bus className="h-8 w-8 text-primary-500" />;
    }
  };

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="transport-option h-full"
    >
      <div className="rounded-full bg-gray-100 p-3 mb-4">
        {getIcon()}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      <div className="flex justify-between items-center w-full mb-4">
        <span className="text-gray-500 text-sm">Starting from</span>
        <span className="text-primary-600 font-semibold">₹{startingPrice}</span>
      </div>
      <Link 
        to={`/booking/${type}`} 
        className="w-full btn btn-primary"
      >
        Book Now
      </Link>
    </motion.div>
  );
};

export default TransportCard;