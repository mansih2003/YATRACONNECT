import React from 'react';
import { motion } from 'framer-motion';
import { Tag } from 'lucide-react';

interface PromoCardProps {
  title: string;
  description: string;
  code: string;
  bgColor: string;
  textColor?: string;
  delay?: number;
}

const PromoCard: React.FC<PromoCardProps> = ({
  title,
  description,
  code,
  bgColor,
  textColor = 'text-white',
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        transition: { duration: 0.2 }
      }}
      className={`rounded-lg overflow-hidden shadow-md ${bgColor} ${textColor} p-6`}
    >
      <Tag className="h-10 w-10 mb-4" />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-4 opacity-90">{description}</p>
      <div className="flex items-center bg-white/20 rounded-md p-2 backdrop-blur-sm">
        <span className="text-sm font-mono font-semibold flex-1">
          {code}
        </span>
        <button 
          className={`text-xs px-3 py-1 rounded bg-white ${bgColor.includes('primary') ? 'text-primary-500' : 'text-secondary-500'}`}
          onClick={() => {
            navigator.clipboard.writeText(code);
            alert(`Copied promo code: ${code}`);
          }}
        >
          Copy
        </button>
      </div>
    </motion.div>
  );
};

export default PromoCard;