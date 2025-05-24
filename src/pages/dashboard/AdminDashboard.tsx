import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  CreditCard, 
  TrendingUp, 
  Map, 
  Route, 
  Settings, 
  Bell, 
  LogOut, 
  Search,
  Plus,
  Filter,
  ChevronDown,
  Edit,
  Trash2,
  Calendar,
  CheckCircle2,
  Clock,
  XCircle
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

// Mock data for admin dashboard
const mockBookingsData = [
  { 
    id: 'BK1001', 
    user: 'Rajesh Kumar', 
    contact: '+91 98765 43210', 
    from: 'Bangalore', 
    to: 'Mysore', 
    date: '15 Mar 2025, 10:30', 
    transport: 'bus', 
    amount: 450, 
    status: 'Confirmed' 
  },
  { 
    id: 'BK1002', 
    user: 'Priya Sharma', 
    contact: '+91 87654 32109', 
    from: 'Delhi', 
    to: 'Jaipur', 
    date: '17 Mar 2025, 08:00', 
    transport: 'train', 
    amount: 850, 
    status: 'Pending' 
  },
  { 
    id: 'BK1003', 
    user: 'Amar Singh', 
    contact: '+91 76543 21098', 
    from: 'Mumbai', 
    to: 'Pune', 
    date: '18 Mar 2025, 14:15', 
    transport: 'cab', 
    amount: 1200, 
    status: 'In Transit' 
  },
  { 
    id: 'BK1004', 
    user: 'Lakshmi Iyer', 
    contact: '+91 65432 10987', 
    from: 'Chennai', 
    to: 'Pondicherry', 
    date: '20 Mar 2025, 09:45', 
    transport: 'bus', 
    amount: 350, 
    status: 'Completed' 
  },
  { 
    id: 'BK1005', 
    user: 'Vikram Patel', 
    contact: '+91 54321 09876', 
    from: 'Hyderabad', 
    to: 'Warangal', 
    date: '21 Mar 2025, 16:30', 
    transport: 'auto', 
    amount: 250, 
    status: 'Cancelled' 
  },
  { 
    id: 'BK1006', 
    user: 'Neha Gupta', 
    contact: '+91 43210 98765', 
    from: 'Kolkata', 
    to: 'Howrah', 
    date: '22 Mar 2025, 11:00', 
    transport: 'bike', 
    amount: 120, 
    status: 'Confirmed' 
  },
  { 
    id: 'BK1007', 
    user: 'Rahul Mehta', 
    contact: '+91 32109 87654', 
    from: 'Ahmedabad', 
    to: 'Gandhinagar', 
    date: '25 Mar 2025, 13:45', 
    transport: 'metro', 
    amount: 80, 
    status: 'Pending' 
  },
];

const mockRevenueData = [
  { transport: 'Bus', bookings: 450, revenue: 225000, growth: '+12.5%' },
  { transport: 'Train', bookings: 380, revenue: 342000, growth: '+8.2%' },
  { transport: 'Cab', bookings: 320, revenue: 384000, growth: '+15.7%' },
  { transport: 'Auto', bookings: 280, revenue: 112000, growth: '+5.3%' },
  { transport: 'Bike', bookings: 210, revenue: 63000, growth: '+21.8%' },
  { transport: 'Metro', bookings: 580, revenue: 116000, growth: '+9.5%' },
];

const mockRouteData = [
  { 
    id: 'R1001', 
    from: 'Bangalore', 
    to: 'Mysore', 
    transport: 'bus', 
    frequency: 'Every 30 mins', 
    basePrice: 250, 
    acPrice: 450, 
    status: 'Active' 
  },
  { 
    id: 'R1002', 
    from: 'Bangalore', 
    to: 'Chennai', 
    transport: 'train', 
    frequency: 'Daily (4 trains)', 
    basePrice: 600, 
    acPrice: 1200, 
    status: 'Active' 
  },
  { 
    id: 'R1003', 
    from: 'Delhi', 
    to: 'Agra', 
    transport: 'cab', 
    frequency: 'On demand', 
    basePrice: 2500, 
    acPrice: 3000, 
    status: 'Active' 
  },
  { 
    id: 'R1004', 
    from: 'Mumbai', 
    to: 'Pune', 
    transport: 'bus', 
    frequency: 'Every 15 mins', 
    basePrice: 300, 
    acPrice: 500, 
    status: 'Active' 
  },
  { 
    id: 'R1005', 
    from: 'Hyderabad', 
    to: 'Secunderabad', 
    transport: 'metro', 
    frequency: 'Every 10 mins', 
    basePrice: 40, 
    acPrice: 40, 
    status: 'Active' 
  },
];

const AdminDashboard: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState<'dashboard' | 'bookings' | 'routes' | 'reports' | 'settings'>('dashboard');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterTransport, setFilterTransport] = useState<string>('all');
  
  // If not authenticated or not an admin, redirect to login
  if (!isAuthenticated || user?.role !== 'admin') {
    return <Navigate to="/admin/login" />;
  }
  
  const getStatusBadge = (status: string) => {
    switch(status.toLowerCase()) {
      case 'confirmed':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Confirmed</span>;
      case 'pending':
        return <span className="px-2 py-1 rounded-full text-xs bg-yellow-100 text-yellow-800">Pending</span>;
      case 'in transit':
        return <span className="px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800">In Transit</span>;
      case 'completed':
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Completed</span>;
      case 'cancelled':
        return <span className="px-2 py-1 rounded-full text-xs bg-red-100 text-red-800">Cancelled</span>;
      case 'active':
        return <span className="px-2 py-1 rounded-full text-xs bg-green-100 text-green-800">Active</span>;
      case 'inactive':
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">Inactive</span>;
      default:
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">{status}</span>;
    }
  };
  
  const getTransportBadge = (transport: string) => {
    switch(transport.toLowerCase()) {
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
        return <span className="px-2 py-1 rounded-full text-xs bg-gray-100 text-gray-800">{transport}</span>;
    }
  };
  
  // Filter bookings based on status and transport
  const filteredBookings = mockBookingsData.filter(booking => {
    const statusMatch = filterStatus === 'all' || booking.status.toLowerCase() === filterStatus.toLowerCase();
    const transportMatch = filterTransport === 'all' || booking.transport.toLowerCase() === filterTransport.toLowerCase();
    return statusMatch && transportMatch;
  });
  
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-secondary-800 text-white fixed h-full overflow-auto">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <span className="bg-white rounded-md p-1.5">
              <span className="text-secondary-800 text-xl font-bold">YC</span>
            </span>
            <span className="text-xl font-bold">
              Admin Panel
            </span>
          </div>
          
          <nav className="space-y-1">
            <button
              className={`w-full flex items-center px-4 py-3 rounded-md text-left text-sm font-medium transition ${
                activeTab === 'dashboard'
                  ? 'bg-secondary-700 text-white'
                  : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <TrendingUp className="h-5 w-5 mr-3" />
              Dashboard
            </button>
            
            <button
              className={`w-full flex items-center px-4 py-3 rounded-md text-left text-sm font-medium transition ${
                activeTab === 'bookings'
                  ? 'bg-secondary-700 text-white'
                  : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
              }`}
              onClick={() => setActiveTab('bookings')}
            >
              <CreditCard className="h-5 w-5 mr-3" />
              Bookings
            </button>
            
            <button
              className={`w-full flex items-center px-4 py-3 rounded-md text-left text-sm font-medium transition ${
                activeTab === 'routes'
                  ? 'bg-secondary-700 text-white'
                  : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
              }`}
              onClick={() => setActiveTab('routes')}
            >
              <Route className="h-5 w-5 mr-3" />
              Routes & Pricing
            </button>
            
            <button
              className={`w-full flex items-center px-4 py-3 rounded-md text-left text-sm font-medium transition ${
                activeTab === 'reports'
                  ? 'bg-secondary-700 text-white'
                  : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
              }`}
              onClick={() => setActiveTab('reports')}
            >
              <Map className="h-5 w-5 mr-3" />
              Reports
            </button>
            
            <button
              className={`w-full flex items-center px-4 py-3 rounded-md text-left text-sm font-medium transition ${
                activeTab === 'settings'
                  ? 'bg-secondary-700 text-white'
                  : 'text-gray-300 hover:bg-secondary-700 hover:text-white'
              }`}
              onClick={() => setActiveTab('settings')}
            >
              <Settings className="h-5 w-5 mr-3" />
              Settings
            </button>
          </nav>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="rounded-full bg-secondary-600 p-2">
              <span className="text-white text-sm font-bold">
                {user?.name.charAt(0)}
              </span>
            </div>
            <div>
              <p className="font-medium text-sm">{user?.name}</p>
              <p className="text-xs text-gray-400">Administrator</p>
            </div>
          </div>
          
          <button
            className="w-full flex items-center px-4 py-2 rounded-md text-left text-sm font-medium text-gray-300 hover:bg-secondary-700 hover:text-white transition"
            onClick={logout}
          >
            <LogOut className="h-5 w-5 mr-3" />
            Logout
          </button>
        </div>
      </aside>
      
      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white py-4 px-6 shadow">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-800">
              {activeTab === 'dashboard' && 'Dashboard Overview'}
              {activeTab === 'bookings' && 'Manage Bookings'}
              {activeTab === 'routes' && 'Routes & Pricing'}
              {activeTab === 'reports' && 'Analytics & Reports'}
              {activeTab === 'settings' && 'Admin Settings'}
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-4 py-2 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary-500 focus:border-secondary-500 w-64"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              
              <button className="relative p-1 rounded-full text-gray-600 hover:text-secondary-500 focus:outline-none">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500"></span>
              </button>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className="p-6">
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Total Bookings</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Today</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">2,451</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <span>+12.5%</span>
                      </p>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-full">
                      <CreditCard className="h-6 w-6 text-blue-500" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Active Users</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Month</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">19,893</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <span>+8.3%</span>
                      </p>
                    </div>
                    <div className="bg-indigo-50 p-3 rounded-full">
                      <Users className="h-6 w-6 text-indigo-500" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Total Revenue</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Month</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">₹12.4L</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <span>+15.2%</span>
                      </p>
                    </div>
                    <div className="bg-green-50 p-3 rounded-full">
                      <TrendingUp className="h-6 w-6 text-green-500" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm font-medium">Active Routes</h3>
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Total</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gray-900">342</p>
                      <p className="text-sm text-green-600 flex items-center">
                        <span>+4.5%</span>
                      </p>
                    </div>
                    <div className="bg-purple-50 p-3 rounded-full">
                      <Route className="h-6 w-6 text-purple-500" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Recent Bookings */}
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Recent Bookings</h3>
                    <button 
                      className="text-secondary-600 hover:text-secondary-800 text-sm font-medium"
                      onClick={() => setActiveTab('bookings')}
                    >
                      View All
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transport</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockBookingsData.slice(0, 5).map((booking, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{booking.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{booking.user}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">{booking.from} to {booking.to}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {getTransportBadge(booking.transport)}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{booking.amount}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {getStatusBadge(booking.status)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              
              {/* Revenue by Transport Type */}
              <div className="bg-white shadow rounded-lg">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue by Transport Type</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transport Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bookings</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Revenue</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Growth</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockRevenueData.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {getTransportBadge(item.transport)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{item.bookings}</td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{item.revenue.toLocaleString()}</td>
                          <td className="px-6 py-4 text-sm">
                            <span className={`${item.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                              {item.growth}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'bookings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex flex-wrap gap-4 items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">All Bookings</h3>
                    
                    <div className="flex flex-wrap gap-3">
                      <div className="relative">
                        <div className="flex items-center">
                          <Filter className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600 mr-1">Status:</span>
                          <select 
                            className="appearance-none bg-transparent border-none pr-8 py-1 pl-1 text-sm font-medium focus:outline-none"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                          >
                            <option value="all">All</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="pending">Pending</option>
                            <option value="in transit">In Transit</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                          <ChevronDown className="h-4 w-4 text-gray-500 absolute right-0" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex items-center">
                          <Filter className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600 mr-1">Transport:</span>
                          <select 
                            className="appearance-none bg-transparent border-none pr-8 py-1 pl-1 text-sm font-medium focus:outline-none"
                            value={filterTransport}
                            onChange={(e) => setFilterTransport(e.target.value)}
                          >
                            <option value="all">All</option>
                            <option value="bus">Bus</option>
                            <option value="train">Train</option>
                            <option value="cab">Cab</option>
                            <option value="auto">Auto</option>
                            <option value="bike">Bike</option>
                            <option value="metro">Metro</option>
                          </select>
                          <ChevronDown className="h-4 w-4 text-gray-500 absolute right-0" />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 text-gray-500 mr-1" />
                          <span className="text-sm text-gray-600 mr-1">Date Range:</span>
                          <select 
                            className="appearance-none bg-transparent border-none pr-8 py-1 pl-1 text-sm font-medium focus:outline-none"
                          >
                            <option value="all">All Time</option>
                            <option value="today">Today</option>
                            <option value="week">This Week</option>
                            <option value="month">This Month</option>
                          </select>
                          <ChevronDown className="h-4 w-4 text-gray-500 absolute right-0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Booking ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User Details</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route & Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transport</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {filteredBookings.map((booking, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{booking.id}</td>
                          <td className="px-6 py-4">
                            <div className="text-sm font-medium text-gray-900">{booking.user}</div>
                            <div className="text-sm text-gray-500">{booking.contact}</div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="text-sm text-gray-900">{booking.from} to {booking.to}</div>
                            <div className="text-sm text-gray-500">{booking.date}</div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {getTransportBadge(booking.transport)}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{booking.amount}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {getStatusBadge(booking.status)}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-secondary-600 hover:text-secondary-900">
                                <Edit className="h-4 w-4" />
                              </button>
                              {booking.status !== 'Completed' && booking.status !== 'Cancelled' && (
                                <div className="relative group">
                                  <button className="text-gray-600 hover:text-gray-900">
                                    <ChevronDown className="h-4 w-4" />
                                  </button>
                                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block z-10">
                                    <div className="py-1">
                                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                        <CheckCircle2 className="h-4 w-4 mr-2 text-green-500" />
                                        Mark as Confirmed
                                      </button>
                                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                        <Clock className="h-4 w-4 mr-2 text-blue-500" />
                                        Mark as In Transit
                                      </button>
                                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                        <CheckCircle2 className="h-4 w-4 mr-2 text-gray-500" />
                                        Mark as Completed
                                      </button>
                                      <button className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
                                        <XCircle className="h-4 w-4 mr-2 text-red-500" />
                                        Cancel Booking
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 text-right">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-700">
                      Showing <span className="font-medium">1</span> to <span className="font-medium">{filteredBookings.length}</span> of <span className="font-medium">{filteredBookings.length}</span> bookings
                    </div>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-medium disabled:opacity-50" disabled>
                        Previous
                      </button>
                      <button className="px-3 py-1 rounded-md bg-white border border-gray-300 text-gray-700 text-sm font-medium disabled:opacity-50" disabled>
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'routes' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white shadow rounded-lg mb-6">
                <div className="p-6 border-b border-gray-200">
                  <div className="flex justify-between items-center flex-wrap gap-4">
                    <h3 className="text-lg font-semibold text-gray-900">Routes & Pricing</h3>
                    
                    <button className="btn btn-primary py-2 flex items-center">
                      <Plus className="h-4 w-4 mr-2" />
                      Add New Route
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full whitespace-nowrap">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From - To</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transport Type</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Frequency</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">AC Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {mockRouteData.map((route, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{route.id}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{route.from} to {route.to}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {getTransportBadge(route.transport)}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">{route.frequency}</td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{route.basePrice}</td>
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">₹{route.acPrice}</td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {getStatusBadge(route.status)}
                          </td>
                          <td className="px-6 py-4 text-sm font-medium">
                            <div className="flex space-x-2">
                              <button className="text-secondary-600 hover:text-secondary-900">
                                <Edit className="h-4 w-4" />
                              </button>
                              <button className="text-red-600 hover:text-red-900">
                                <Trash2 className="h-4 w-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'reports' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Reports</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="font-medium">Monthly Revenue Report</p>
                        <p className="text-sm text-gray-500">Summary of all transactions in the last month</p>
                      </div>
                      <button className="text-secondary-600 hover:text-secondary-800 text-sm font-medium">
                        View Report
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="font-medium">Transport Type Revenue</p>
                        <p className="text-sm text-gray-500">Revenue breakdown by transport category</p>
                      </div>
                      <button className="text-secondary-600 hover:text-secondary-800 text-sm font-medium">
                        View Report
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="font-medium">Route Performance</p>
                        <p className="text-sm text-gray-500">Most profitable and popular routes</p>
                      </div>
                      <button className="text-secondary-600 hover:text-secondary-800 text-sm font-medium">
                        View Report
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Analytics</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="font-medium">Booking Trends</p>
                        <p className="text-sm text-gray-500">Day-wise and week-wise booking patterns</p>
                      </div>
                      <button className="text-secondary-600 hover:text-secondary-800 text-sm font-medium">
                        View Report
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="font-medium">Cancellation Report</p>
                        <p className="text-sm text-gray-500">Analysis of booking cancellations</p>
                      </div>
                      <button className="text-secondary-600 hover:text-secondary-800 text-sm font-medium">
                        View Report
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <div>
                        <p className="font-medium">User Activity</p>
                        <p className="text-sm text-gray-500">User engagement and booking frequency</p>
                      </div>
                      <button className="text-secondary-600 hover:text-secondary-800 text-sm font-medium">
                        View Report
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white shadow rounded-lg p-6 md:col-span-2">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Demand Heatmap</h3>
                  
                  <div className="border border-gray-200 rounded-lg p-4 h-80 flex items-center justify-center">
                    <p className="text-gray-500">Interactive heatmap visualization would be displayed here</p>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">Top City: Bangalore</p>
                      <p className="text-sm text-gray-500">24% of all bookings</p>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">Top Route: BLR-MYS</p>
                      <p className="text-sm text-gray-500">450 bookings/week</p>
                    </div>
                    
                    <div className="p-3 bg-gray-50 rounded-lg">
                      <p className="font-medium text-gray-900">Peak Hours: 6-9 AM</p>
                      <p className="text-sm text-gray-500">32% of daily bookings</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-white shadow rounded-lg">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">Admin Settings</h3>
                </div>
                
                <div className="p-6">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-base font-medium text-gray-900 mb-4">Admin Profile</h4>
                      
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
                          <label className="input-label">Role</label>
                          <input type="text" className="input-field" defaultValue="Administrator" readOnly />
                        </div>
                        
                        <div className="input-group">
                          <label className="input-label">Admin ID</label>
                          <input type="text" className="input-field" defaultValue="ADM10012" readOnly />
                        </div>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="text-base font-medium text-gray-900 mb-4">Security Settings</h4>
                      
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
                      
                      <div className="mt-4">
                        <button className="btn bg-secondary-500 hover:bg-secondary-600 text-white py-2 px-4">
                          Update Password
                        </button>
                      </div>
                    </div>
                    
                    <div className="border-t pt-6">
                      <h4 className="text-base font-medium text-gray-900 mb-4">System Settings</h4>
                      
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium">Enable Maintenance Mode</p>
                            <p className="text-sm text-gray-500">Take the site offline for maintenance</p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-500"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium">Enable Email Notifications</p>
                            <p className="text-sm text-gray-500">Send emails for booking updates to users</p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-500"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium">Enable SMS Notifications</p>
                            <p className="text-sm text-gray-500">Send SMS for booking updates to users</p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-500"></div>
                          </label>
                        </div>
                        
                        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-md">
                          <div>
                            <p className="font-medium">Auto-Cancel Unpaid Bookings</p>
                            <p className="text-sm text-gray-500">Cancel bookings if not paid within 30 minutes</p>
                          </div>
                          <label className="inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked className="sr-only peer" />
                            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-secondary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-secondary-500"></div>
                          </label>
                        </div>
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
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;