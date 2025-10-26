import { useState } from 'react';

function CustomerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock user data
  const userData = {
    name: 'John Smith',
    membershipType: 'Unlimited',
    memberSince: 'January 15, 2024',
    location: 'Downtown Dojo',
    nextBilling: 'November 15, 2024',
    amount: '$129.00',
    paymentMethod: 'Visa ending in 4242',
    status: 'Active'
  };

  const myClasses = [
    {
      name: 'Brazilian Jiu-Jitsu - Fundamentals',
      instructor: 'Prof. Marcus Silva',
      schedule: 'Monday & Wednesday, 6:00 PM - 7:30 PM',
      location: 'Downtown Dojo',
      enrolled: true,
      nextClass: 'Monday, Nov 11 at 6:00 PM'
    },
    {
      name: 'MMA - Advanced',
      instructor: 'Coach Tyler Davidson',
      schedule: 'Thursday, 8:00 PM - 9:30 PM',
      location: 'Northside Fight Club',
      enrolled: true,
      nextClass: 'Thursday, Nov 14 at 8:00 PM'
    }
  ];

  const availableClasses = [
    {
      name: 'Boxing - Technique',
      instructor: 'Coach Mike Johnson',
      schedule: 'Tuesday & Friday, 7:00 PM - 8:00 PM',
      location: 'Downtown Dojo',
      enrolled: false,
      spotsLeft: 5
    },
    {
      name: 'Muay Thai - Beginner',
      instructor: 'Coach Sarah Lee',
      schedule: 'Monday, Wednesday, Friday, 5:30 PM - 6:30 PM',
      location: 'Westside Training Center',
      enrolled: false,
      spotsLeft: 12
    },
    {
      name: 'Karate - All Levels',
      instructor: 'Sensei James Park',
      schedule: 'Tuesday & Thursday, 6:00 PM - 7:00 PM',
      location: 'Eastside Martial Arts',
      enrolled: false,
      spotsLeft: 8
    }
  ];

  const additionalServices = [
    {
      name: 'Private Training Session',
      price: '$60/session',
      description: 'One-on-one instruction tailored to your goals',
      active: false
    },
    {
      name: 'Competition Team',
      price: '$99/month',
      description: 'Advanced training for competitive fighters',
      active: false
    },
    {
      name: 'Nutrition Coaching',
      price: '$75/month',
      description: 'Personalized meal plans and guidance',
      active: false
    }
  ];

  const attendanceHistory = [
    { class: 'BJJ - Fundamentals', date: 'Nov 6, 2024', instructor: 'Prof. Marcus Silva' },
    { class: 'MMA - Advanced', date: 'Nov 7, 2024', instructor: 'Coach Tyler Davidson' },
    { class: 'BJJ - Fundamentals', date: 'Nov 4, 2024', instructor: 'Prof. Marcus Silva' },
    { class: 'MMA - Advanced', date: 'Oct 31, 2024', instructor: 'Coach Tyler Davidson' },
    { class: 'BJJ - Fundamentals', date: 'Oct 30, 2024', instructor: 'Prof. Marcus Silva' }
  ];

  const paymentHistory = [
    { date: 'Oct 15, 2024', amount: '$129.00', status: 'Paid', method: 'Visa ****4242' },
    { date: 'Sep 15, 2024', amount: '$129.00', status: 'Paid', method: 'Visa ****4242' },
    { date: 'Aug 15, 2024', amount: '$129.00', status: 'Paid', method: 'Visa ****4242' },
    { date: 'Jul 15, 2024', amount: '$129.00', status: 'Paid', method: 'Visa ****4242' }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-2">Welcome back, {userData.name}!</h1>
          <p className="text-lg">Member since {userData.memberSince}</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Membership</div>
            <div className="text-2xl font-bold text-red-600">{userData.membershipType}</div>
            <div className="text-sm text-green-600 font-semibold mt-2">{userData.status}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Classes This Month</div>
            <div className="text-2xl font-bold text-red-600">12</div>
            <div className="text-sm text-gray-600 mt-2">+3 from last month</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Next Billing</div>
            <div className="text-2xl font-bold text-amber-600">{userData.amount}</div>
            <div className="text-sm text-gray-600 mt-2">{userData.nextBilling}</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="text-gray-500 text-sm mb-1">Home Location</div>
            <div className="text-lg font-bold text-gray-800">{userData.location}</div>
            <button className="text-sm text-red-600 hover:underline mt-2">Change</button>
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
                onClick={() => setActiveTab('classes')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'classes'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                My Classes
              </button>
              <button
                onClick={() => setActiveTab('enroll')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'enroll'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Enroll in Classes
              </button>
              <button
                onClick={() => setActiveTab('services')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'services'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Additional Services
              </button>
              <button
                onClick={() => setActiveTab('billing')}
                className={`px-6 py-4 font-semibold ${
                  activeTab === 'billing'
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Billing
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Upcoming Classes</h2>
                  <div className="space-y-3">
                    {myClasses.map((classInfo, index) => (
                      <div key={index} className="bg-gradient-to-r from-gray-50 to-gray-100 border-l-4 border-red-500 p-4 rounded-lg">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-lg font-bold">{classInfo.name}</h3>
                            <p className="text-gray-700">{classInfo.instructor}</p>
                            <p className="text-sm text-gray-600 mt-1">📅 {classInfo.nextClass}</p>
                          </div>
                          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                            Check In
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-4">Recent Attendance</h2>
                  <div className="bg-white border rounded-lg overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-100">
                        <tr>
                          <th className="px-4 py-3 text-left">Class</th>
                          <th className="px-4 py-3 text-left">Date</th>
                          <th className="px-4 py-3 text-left">Instructor</th>
                        </tr>
                      </thead>
                      <tbody>
                        {attendanceHistory.map((record, index) => (
                          <tr key={index} className="border-b">
                            <td className="px-4 py-3">{record.class}</td>
                            <td className="px-4 py-3">{record.date}</td>
                            <td className="px-4 py-3">{record.instructor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-50 border-2 border-red-600 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Achievement Progress</h3>
                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-semibold">10 Classes This Month</span>
                          <span className="text-sm text-gray-600">12/10</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div className="bg-red-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-semibold">30 Day Streak</span>
                          <span className="text-sm text-gray-600">22/30</span>
                        </div>
                        <div className="bg-gray-200 rounded-full h-2">
                          <div className="bg-green-600 h-2 rounded-full" style={{ width: '73%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-2">Quick Actions</h3>
                    <div className="space-y-2 mt-4">
                      <button className="w-full bg-amber-600 text-white py-2 rounded hover:bg-amber-700 transition">
                        Book Private Session
                      </button>
                      <button className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
                        Update Payment Method
                      </button>
                      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition">
                        Refer a Friend
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* My Classes Tab */}
            {activeTab === 'classes' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Enrolled Classes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {myClasses.map((classInfo, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition">
                      <h3 className="text-xl font-bold mb-2">{classInfo.name}</h3>
                      <div className="space-y-2 text-gray-700 mb-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {classInfo.instructor}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {classInfo.schedule}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {classInfo.location}
                        </div>
                      </div>
                      <div className="bg-green-50 border-l-4 border-green-500 p-3 mb-4">
                        <p className="text-sm font-semibold">Next Class: {classInfo.nextClass}</p>
                      </div>
                      <div className="flex gap-2">
                        <button className="flex-1 bg-red-600 text-white py-2 rounded hover:bg-red-700 transition">
                          View Schedule
                        </button>
                        <button className="flex-1 bg-gray-600 text-white py-2 rounded hover:bg-gray-700 transition">
                          Unenroll
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Enroll in Classes Tab */}
            {activeTab === 'enroll' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Available Classes</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {availableClasses.map((classInfo, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-red-600 transition">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold">{classInfo.name}</h3>
                        <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {classInfo.spotsLeft} spots left
                        </span>
                      </div>
                      <div className="space-y-2 text-gray-700 mb-4">
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                          {classInfo.instructor}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {classInfo.schedule}
                        </div>
                        <div className="flex items-center">
                          <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          {classInfo.location}
                        </div>
                      </div>
                      <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition">
                        Enroll Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional Services Tab */}
            {activeTab === 'services' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Additional Services & Upgrades</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {additionalServices.map((service, index) => (
                    <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-500 transition">
                      <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                      <div className="text-2xl font-bold text-green-600 mb-3">{service.price}</div>
                      <p className="text-gray-700 mb-4">{service.description}</p>
                      <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition">
                        Add Service
                      </button>
                    </div>
                  ))}
                </div>

                <div className="mt-8 bg-gradient-to-r from-amber-50 to-amber-100 border-2 border-amber-500 rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Upgrade Your Membership</h3>
                  <p className="text-gray-700 mb-6">
                    Currently on <strong>{userData.membershipType}</strong> plan. Upgrade to Family plan and save while training with loved ones!
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Current Plan</div>
                      <div className="text-2xl font-bold">$129/month</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Family Plan</div>
                      <div className="text-2xl font-bold text-green-600">$199/month</div>
                      <div className="text-sm text-gray-600">Up to 4 family members</div>
                    </div>
                  </div>
                  <button className="mt-6 bg-amber-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-amber-700 transition">
                    Upgrade Now
                  </button>
                </div>
              </div>
            )}

            {/* Billing Tab */}
            {activeTab === 'billing' && (
              <div>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Subscription Details</h2>
                    <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                      <div className="space-y-4">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Plan:</span>
                          <span className="font-semibold">{userData.membershipType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Status:</span>
                          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {userData.status}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Next Billing Date:</span>
                          <span className="font-semibold">{userData.nextBilling}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Amount:</span>
                          <span className="font-semibold text-lg">{userData.amount}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Payment Method:</span>
                          <span className="font-semibold">{userData.paymentMethod}</span>
                        </div>
                      </div>
                      <div className="mt-6 space-y-2">
                        <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition">
                          Pay Now
                        </button>
                        <button className="w-full bg-gray-600 text-white py-3 rounded-lg font-bold hover:bg-gray-700 transition">
                          Update Payment Method
                        </button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold mb-4">Payment History</h2>
                    <div className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="px-4 py-3 text-left">Date</th>
                            <th className="px-4 py-3 text-left">Amount</th>
                            <th className="px-4 py-3 text-left">Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {paymentHistory.map((payment, index) => (
                            <tr key={index} className="border-b">
                              <td className="px-4 py-3">{payment.date}</td>
                              <td className="px-4 py-3 font-semibold">{payment.amount}</td>
                              <td className="px-4 py-3">
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                                  {payment.status}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <button className="mt-4 text-red-600 hover:underline">
                      Download All Receipts
                    </button>
                  </div>
                </div>

                <div className="bg-amber-50 border-2 border-amber-500 rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-2">Manage Subscription</h3>
                  <p className="text-gray-700 mb-4">
                    Need to pause or cancel your membership? We're here to help!
                  </p>
                  <div className="flex gap-4">
                    <button className="bg-yellow-600 text-white px-6 py-2 rounded hover:bg-yellow-700 transition">
                      Freeze Membership
                    </button>
                    <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                      Cancel Subscription
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
