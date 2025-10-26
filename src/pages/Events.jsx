function Events() {
  const upcomingEvents = [
    {
      title: 'Youth Karate Belt Promotion',
      date: 'November 15, 2024',
      time: '6:00 PM - 8:00 PM',
      location: 'Downtown Dojo',
      description: 'Join us for our quarterly belt promotion ceremony. Students will demonstrate their skills and advance to the next rank.',
      category: 'Belt Promotion',
      spots: '50 participants registered',
      featured: true
    },
    {
      title: 'BJJ Open Mat Session',
      date: 'November 20, 2024',
      time: '7:00 PM - 9:00 PM',
      location: 'All Locations',
      description: 'Open rolling session for all levels. Great opportunity to train with different partners and refine your techniques.',
      category: 'Training Session',
      spots: 'Open to all members',
      featured: false
    },
    {
      title: 'Muay Thai Tournament Prep Workshop',
      date: 'November 22, 2024',
      time: '5:00 PM - 7:00 PM',
      location: 'Westside Training Center',
      description: 'Special workshop for competitors preparing for the upcoming regional tournament. Focus on strategy and conditioning.',
      category: 'Workshop',
      spots: '15 spots remaining',
      featured: false
    },
    {
      title: 'Women\'s Self-Defense Seminar',
      date: 'November 28, 2024',
      time: '10:00 AM - 2:00 PM',
      location: 'Downtown Dojo',
      description: 'Free seminar covering practical self-defense techniques. No experience necessary. Open to women ages 16+.',
      category: 'Special Event',
      spots: 'Free - RSVP required',
      featured: false
    },
    {
      title: 'Holiday Sparring Championship',
      date: 'December 10, 2024',
      time: '12:00 PM - 6:00 PM',
      location: 'Main Arena',
      description: 'Annual in-house championship featuring divisions for Karate, Taekwondo, Boxing, and MMA. Trophies and prizes!',
      category: 'Competition',
      spots: 'Registration closes Dec 1st',
      featured: true
    },
    {
      title: 'Kids Martial Arts Holiday Camp',
      date: 'December 20-23, 2024',
      time: '9:00 AM - 3:00 PM',
      location: 'Downtown Dojo',
      description: 'Four-day camp for kids ages 6-14. Daily training, games, and activities. Includes lunch and camp t-shirt.',
      category: 'Kids Program',
      spots: '25 spots available',
      featured: false
    },
    {
      title: 'New Year, New You - Beginner Bootcamp',
      date: 'January 6-13, 2025',
      time: '6:30 PM - 7:30 PM',
      location: 'All Locations',
      description: 'Week-long introduction to martial arts. Try different styles each day. Perfect for New Year\'s resolutions!',
      category: 'Beginner Program',
      spots: 'Early bird discount until Dec 15',
      featured: false
    },
    {
      title: 'Black Belt Testing',
      date: 'January 20, 2025',
      time: '9:00 AM - 4:00 PM',
      location: 'Main Arena',
      description: 'Candidates will undergo rigorous testing in techniques, forms, sparring, and breaking. Family and friends welcome.',
      category: 'Testing',
      spots: '8 candidates testing',
      featured: true
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-xl">Join us for exciting martial arts events, tournaments, and workshops</p>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition ${event.featured ? 'border-t-4 border-amber-500' : 'border-t-4 border-gray-300'}`}>
                <div className="bg-gray-900 text-white p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm text-amber-400">{event.category}</span>
                      <h3 className="text-2xl font-bold mt-1">{event.title}</h3>
                    </div>
                    {event.featured && (
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded">FEATURED</span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{event.spots}</span>
                    <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Stay Updated?</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter for event announcements and special offers</p>
          <div className="max-w-md mx-auto flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded bg-white text-gray-900"
            />
            <button className="bg-red-600 px-6 py-3 rounded hover:bg-red-700 transition font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Events;
