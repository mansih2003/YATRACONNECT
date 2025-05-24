import React from 'react';
import { motion } from 'framer-motion';

interface SeatSelectionProps {
  transportType: 'bus' | 'train';
  bookedSeats: string[];
  selectedSeats: string[];
  onSeatSelect: (seat: string) => void;
}

const SeatSelection: React.FC<SeatSelectionProps> = ({
  transportType,
  bookedSeats,
  selectedSeats,
  onSeatSelect,
}) => {
  // Bus layout is 2+2 with 10 rows
  const renderBusSeats = () => {
    const rows = 10;
    const seats = [];

    for (let row = 1; row <= rows; row++) {
      // Left side (A, B)
      for (let col of ['A', 'B']) {
        const seatNumber = `${row}${col}`;
        seats.push(renderSeat(seatNumber));
      }
      
      // Aisle
      seats.push(
        <div key={`aisle-${row}`} className="w-4"></div>
      );
      
      // Right side (C, D)
      for (let col of ['C', 'D']) {
        const seatNumber = `${row}${col}`;
        seats.push(renderSeat(seatNumber));
      }
      
      // Row end
      seats.push(
        <div key={`row-end-${row}`} className="w-full"></div>
      );
    }

    return seats;
  };

  // Train layout is 3+3 with 15 rows
  const renderTrainSeats = () => {
    const rows = 15;
    const seats = [];

    for (let row = 1; row <= rows; row++) {
      // Left side (A, B, C)
      for (let col of ['A', 'B', 'C']) {
        const seatNumber = `${row}${col}`;
        seats.push(renderSeat(seatNumber));
      }
      
      // Aisle
      seats.push(
        <div key={`aisle-${row}`} className="w-4"></div>
      );
      
      // Right side (D, E, F)
      for (let col of ['D', 'E', 'F']) {
        const seatNumber = `${row}${col}`;
        seats.push(renderSeat(seatNumber));
      }
      
      // Row end
      seats.push(
        <div key={`row-end-${row}`} className="w-full"></div>
      );
    }

    return seats;
  };

  const renderSeat = (seatNumber: string) => {
    const isBooked = bookedSeats.includes(seatNumber);
    const isSelected = selectedSeats.includes(seatNumber);
    
    let seatClass = 'seat ';
    
    if (isBooked) {
      seatClass += 'seat-booked';
    } else if (isSelected) {
      seatClass += 'seat-selected';
    } else {
      seatClass += 'seat-available';
    }

    return (
      <motion.div
        key={seatNumber}
        className={seatClass}
        whileHover={!isBooked ? { scale: 1.1 } : {}}
        onClick={() => !isBooked && onSeatSelect(seatNumber)}
      >
        {seatNumber}
      </motion.div>
    );
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4">Select Your Seats</h3>
      
      <div className="flex space-x-4 mb-6">
        <div className="flex items-center">
          <div className="seat-available w-5 h-5 rounded mr-2"></div>
          <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center">
          <div className="seat-selected w-5 h-5 rounded mr-2"></div>
          <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center">
          <div className="seat-booked w-5 h-5 rounded mr-2"></div>
          <span className="text-sm">Booked</span>
        </div>
      </div>
      
      <div className="mb-4 p-2 bg-gray-200 text-center text-sm rounded">
        {transportType === 'bus' ? 'Front of Bus' : 'Engine'}
      </div>
      
      <div className="flex flex-wrap">
        {transportType === 'bus' ? renderBusSeats() : renderTrainSeats()}
      </div>
      
      <div className="mt-4 p-2 bg-gray-200 text-center text-sm rounded">
        {transportType === 'bus' ? 'Back of Bus' : 'End of Coach'}
      </div>
      
      <div className="mt-4">
        <p className="text-sm font-medium">
          Selected Seats: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None'}
        </p>
      </div>
    </div>
  );
};

export default SeatSelection;