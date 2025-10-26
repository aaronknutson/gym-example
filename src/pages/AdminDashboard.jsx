import { useState } from 'react';

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const stats = {
    totalMembers: 347,
    activeSubscriptions: 312,
    pendingPayments: 18,
    totalRevenue: '$42,650',
    newMembers: 23,
    cancelledMembers: 5
  };

  const customers = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john.smith@email.com',
      phone: '(555) 123-4567',
      membershipType: 'Unlimited',
      status: 'Active',
      joinDate: '2024-01-15',
      nextBilling: '2024-11-15',
      location: 'Downtown Dojo',
      classes: ['BJJ', 'MMA']
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah.j@email.com',
      phone: '(555) 234-5678',
      membershipType: 'Basic',
      status: 'Active',
      joinDate: '2024-03-22',
      nextBilling: '2024-11-22',
      location: 'Westside Training Center',
      classes: ['Muay Thai']
    },
    {
      id: 3,
      name: 'Michael Chen',
      email: 'mchen@email.com',
      phone: '(555) 345-6789',
      membershipType: 'Family',
      status: 'Active',
      joinDate: '2024-02-10',
      nextBilling: '2024-11-10',
      location: 'Eastside Martial Arts',
      classes: ['Karate', 'Taekwondo']
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      email: 'emily.r@email.com',
      phone: '(555) 456-7890',
      membershipType: 'Unlimited',
      status: 'Payment Due',
      joinDate: '2023-11-05',
      nextBilling: '2024-11-05',
      location: 'Downtown Dojo',
      classes: ['BJJ', 'Boxing']
    },
    {
      id: 5,
      name: 'David Kim',
      email: 'dkim@email.com',
      phone: '(555) 567-8901',
      membershipType: 'Basic',
      status: 'Frozen',
      joinDate: '2024-01-30',
      nextBilling: '2024-12-15',
      location: 'Northside Fight Club',
      classes: ['MMA']
    }
  ];

  const classParticipants = [
    {
      className: 'BJJ - Fundamentals',
      instructor: 'Prof. Marcus Silva',
      time: 'Monday 6:00 PM',
      location: 'Downtown Dojo',
      enrolled: 18,
      capacity: 25,
      participants: ['John Smith', 'Emily Rodriguez', 'Alex Turner', 'Lisa Wong']
    },
    {
      className: 'Muay Thai - Beginner',
      instructor: 'Coach Sarah Lee',
      time: 'Tuesday 7:00 PM',
      location: 'Westside Training Center',
      enrolled: 22,
      capacity: 30,
      participants: ['Sarah Johnson', 'Mike Davis', 'Anna Martinez', 'Tom Wilson']
    },
    {
      className: 'Kids Karate',
      instructor: 'Sensei James Park',
      time: 'Wednesday 4:30 PM',
      location: 'Eastside Martial Arts',
      enrolled: 15,
      capacity: 20,
      participants: ['Emma Wilson', 'Noah Chen', 'Sophia Kim', 'Liam Brown']
    },
    {
      className: 'MMA - Advanced',
      instructor: 'Coach Tyler Davidson',
      time: 'Thursday 8:00 PM',
      location: 'Northside Fight Club',
      enrolled: 12,
      capacity: 15,
      participants: ['David Kim', 'John Smith', 'Chris Anderson', 'Ryan Martinez']
    }
  ];

  const recentActivity = [
    { action: 'New Membership', user: 'Jessica Brown', time: '2 hours ago', type: 'success' },
    { action: 'Payment Received', user: 'Robert Taylor', time: '4 hours ago', type: 'success' },
    { action: 'Membership Frozen', user: 'David Kim', time: '6 hours ago', type: 'warning' },
    { action: 'Payment Failed', user: 'Emily Rodriguez', time: '1 day ago', type: 'error' },
    { action: 'Class Enrollment', user: 'Sarah Johnson', time: '1 day ago', type: 'info' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Admin Dashboard</h1>
          <p className="text-lg">Manage your gym operations</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Total Members</div>
            <div className="text-3xl font-bold text-red-600">{stats.totalMembers}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Active Subscriptions</div>
            <div className="text-3xl font-bold text-green-600">{stats.activeSubscriptions}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Pending Payments</div>
            <div className="text-3xl font-bold text-orange-600">{stats.pendingPayments}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Monthly Revenue</div>
            <div className="text-3xl font-bold text-amber-600">{stats.totalRevenue}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">New This Month</div>
            <div className="text-3xl font-bold text-amber-500">{stats.newMembers}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Cancelled</div>
            <div className="text-3xl font-bold text-red-600">{stats.cancelledMembers}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('overview')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'overview'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab('customers')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'customers'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Customers
              </button>
              <button
                onClick={() => setActiveTab('classes')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'classes'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Class Participants
              </button>
              <button
                onClick={() => setActiveTab('subscriptions')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'subscriptions'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Subscriptions
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
                  <div className="space-y-3">
                    {recentActivity.map((activity, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center">
                          <div className={`w-3 h-3 rounded-full mr-3 ${
                            activity.type === 'success' ? 'bg-green-500' :
                            activity.type === 'warning' ? 'bg-yellow-500' :
                            activity.type === 'error' ? 'bg-red-500' : 'bg-blue-500'
                          }`}></div>
                          <div>
                            <div className="font-semibold">{activity.action}</div>
                            <div className="text-sm text-gray-600">{activity.user}</div>
                          </div>
                        </div>
                        <div className="text-sm text-gray-500">{activity.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                    <div className="space-y-2">
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition">
                        Add New Member
                      </button>
                      <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition">
                        Process Payment
                      </button>
                      <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition">
                        Create Class
                      </button>
                      <button className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition">
                        Send Announcement
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-4">Upcoming Tasks</h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                        <div className="font-semibold">Follow up on overdue payments</div>
                        <div className="text-sm text-gray-600">18 members need attention</div>
                      </div>
                      <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                        <div className="font-semibold">Belt promotion ceremony</div>
                        <div className="text-sm text-gray-600">Scheduled for Nov 15</div>
                      </div>
                      <div className="p-3 bg-green-50 border-l-4 border-green-500">
                        <div className="font-semibold">Instructor meeting</div>
                        <div className="text-sm text-gray-600">Nov 10 at 2:00 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Customers Tab */}
            {activeTab === 'customers' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Customer Management</h2>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                    Add Customer
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left">Name</th>
                        <th className="px-4 py-3 text-left">Contact</th>
                        <th className="px-4 py-3 text-left">Membership</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Next Billing</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer) => (
                        <tr key={customer.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-4">
                            <div className="font-semibold">{customer.name}</div>
                            <div className="text-sm text-gray-600">{customer.location}</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="text-sm">{customer.email}</div>
                            <div className="text-sm text-gray-600">{customer.phone}</div>
                          </td>
                          <td className="px-4 py-4">
                            <div className="font-semibold">{customer.membershipType}</div>
                            <div className="text-sm text-gray-600">{customer.classes.join(', ')}</div>
                          </td>
                          <td className="px-4 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              customer.status === 'Active' ? 'bg-green-100 text-green-700' :
                              customer.status === 'Payment Due' ? 'bg-red-100 text-red-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {customer.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm">{customer.nextBilling}</td>
                          <td className="px-4 py-4">
                            <button className="text-red-600 hover:text-red-800 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-800">Delete</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Class Participants Tab */}
            {activeTab === 'classes' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold">Class Participants</h2>
                  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
                    Schedule Class
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {classParticipants.map((classInfo, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-bold">{classInfo.className}</h3>
                          <p className="text-gray-600">{classInfo.instructor}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                          classInfo.enrolled / classInfo.capacity > 0.8
                            ? 'bg-red-100 text-red-700'
                            : 'bg-green-100 text-green-700'
                        }`}>
                          {classInfo.enrolled}/{classInfo.capacity}
                        </span>
                      </div>
                      <div className="mb-4">
                        <div className="flex items-center text-gray-700 mb-2">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {classInfo.time}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {classInfo.location}
                        </div>
                      </div>
                      <div>
                        <div className="font-semibold mb-2">Recent Participants:</div>
                        <div className="flex flex-wrap gap-2">
                          {classInfo.participants.map((participant, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {participant}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="mt-4">
                        <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
                          View All Participants
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Subscriptions Tab */}
            {activeTab === 'subscriptions' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Subscription Status</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Active Subscriptions</h3>
                    <div className="text-4xl font-bold text-green-600">{stats.activeSubscriptions}</div>
                  </div>
                  <div className="bg-orange-50 border-2 border-orange-500 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Payment Due</h3>
                    <div className="text-4xl font-bold text-orange-600">{stats.pendingPayments}</div>
                  </div>
                  <div className="bg-gray-50 border-2 border-gray-700 rounded-lg p-6">
                    <h3 className="text-lg font-bold mb-2">Total Members</h3>
                    <div className="text-4xl font-bold text-red-600">{stats.totalMembers}</div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-3 text-left">Customer</th>
                        <th className="px-4 py-3 text-left">Plan</th>
                        <th className="px-4 py-3 text-left">Status</th>
                        <th className="px-4 py-3 text-left">Start Date</th>
                        <th className="px-4 py-3 text-left">Next Billing</th>
                        <th className="px-4 py-3 text-left">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customers.map((customer) => (
                        <tr key={customer.id} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-4 font-semibold">{customer.name}</td>
                          <td className="px-4 py-4">{customer.membershipType}</td>
                          <td className="px-4 py-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                              customer.status === 'Active' ? 'bg-green-100 text-green-700' :
                              customer.status === 'Payment Due' ? 'bg-red-100 text-red-700' :
                              'bg-amber-100 text-amber-700'
                            }`}>
                              {customer.status}
                            </span>
                          </td>
                          <td className="px-4 py-4">{customer.joinDate}</td>
                          <td className="px-4 py-4">{customer.nextBilling}</td>
                          <td className="px-4 py-4">
                            <button className="text-red-600 hover:text-red-800 mr-3">View</button>
                            <button className="text-green-600 hover:text-green-800">Renew</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
