import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Bus, Mail, Lock, ShieldAlert, ArrowRight, Home } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

type FormData = {
  email: string;
  password: string;
};

const AdminLoginPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      // Login admin
      await login(data.email, data.password, 'admin');
      navigate('/admin/dashboard');
    } catch (error) {
      setError('Admin authentication failed. Please check your credentials and try again.');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="max-w-md w-full">
          {/* Mobile Logo */}
          <div className="md:hidden flex justify-center mb-8">
            <Link to="/" className="flex items-center text-primary-500">
              <Bus className="h-8 w-8 mr-2" />
              <span className="text-2xl font-display font-bold">
                Yatra<span className="text-secondary-500">Connect</span>
              </span>
            </Link>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-primary-100 p-4">
                  <ShieldAlert className="h-8 w-8 text-primary-500" />
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">Administrator Login</h2>
              <p className="text-gray-600">
                Access your YatraConnect admin dashboard
              </p>
            </div>
            
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-md border border-red-200">
                {error}
              </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="input-group">
                <label htmlFor="email" className="input-label">Admin Email</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <input
                    type="email"
                    id="email"
                    className={`input-field pl-10 ${errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your admin email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      } 
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div className="input-group">
                <label htmlFor="password" className="input-label">Password</label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <Lock className="h-5 w-5" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    className={`input-field pl-10 ${errors.password ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`}
                    placeholder="Enter your password"
                    {...register('password', { 
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      }
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-primary-500 focus:ring-primary-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>
                <a href="#" className="text-sm font-medium text-primary-600 hover:text-primary-500">
                  Forgot password?
                </a>
              </div>
              
              <button
                type="submit"
                className="w-full btn bg-secondary-500 hover:bg-secondary-600 text-white py-2.5"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    Admin Sign In
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                )}
              </button>
            </form>
            
            <div className="mt-8 text-center">
              <Link to="/" className="inline-flex items-center text-secondary-600 hover:text-secondary-500">
                <Home className="h-4 w-4 mr-1" />
                <span>Return to Homepage</span>
              </Link>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Not an administrator?{" "}
                <Link to="/login" className="font-medium text-primary-600 hover:text-primary-500">
                  User Login
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Right Side - Image */}
      <div className="hidden md:block md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)' }}>
        <div className="h-full w-full bg-secondary-900/50 p-12 flex flex-col justify-between">
          <Link to="/" className="flex items-center text-white">
            <Bus className="h-8 w-8 mr-2" />
            <span className="text-2xl font-display font-bold">
              Yatra<span className="text-primary-400">Connect</span>
            </span>
          </Link>
          
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Admin Control Center</h2>
            <p className="mb-6">
              Manage bookings, update routes, and track revenue - all from your comprehensive admin dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;