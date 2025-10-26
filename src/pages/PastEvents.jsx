function PastEvents() {
  const pastEvents = [
    {
      title: 'Summer Championship 2024',
      date: 'July 15, 2024',
      location: 'Main Arena',
      category: 'Tournament',
      participants: 87,
      highlights: [
        '12 divisions across all age groups',
        'Over 150 matches throughout the day',
        'Special appearance by UFC veteran Marcus Chen',
        'Raised $5,000 for local youth programs'
      ],
      winners: [
        { division: 'Adult Karate - Black Belt', winner: 'James Rodriguez' },
        { division: 'Youth BJJ - Purple Belt', winner: 'Sarah Kim' },
        { division: 'MMA - Lightweight', winner: 'Tyler Davidson' }
      ],
      stats: { matches: 152, spectators: 300, duration: '8 hours' },
      image: 'bg-gradient-to-r from-red-700 to-red-800'
    },
    {
      title: 'Kids Martial Arts Expo',
      date: 'June 8, 2024',
      location: 'Downtown Dojo',
      category: 'Community Event',
      participants: 65,
      highlights: [
        'Interactive demonstrations of all martial arts',
        'Kids try different disciplines',
        'Face painting and games',
        'Free t-shirts for all participants'
      ],
      winners: [],
      stats: { attendees: 200, families: 65, activities: 12 },
      image: 'bg-gradient-to-r from-red-700 to-red-800'
    },
    {
      title: 'Spring Belt Promotion Ceremony',
      date: 'May 20, 2024',
      location: 'All Locations',
      category: 'Belt Testing',
      participants: 94,
      highlights: [
        '94 students promoted across all programs',
        '8 new black belts',
        'Traditional breaking demonstrations',
        'Reception with families afterward'
      ],
      winners: [
        { division: 'New Black Belts', winner: '8 students achieved this milestone' },
        { division: 'Youngest Promoted', winner: 'Emma Wilson (age 7) - Yellow Belt' }
      ],
      stats: { totalPromotions: 94, blackBelts: 8, averageAge: 16 },
      image: 'bg-gradient-to-r from-red-700 to-red-800'
    },
    {
      title: 'Charity Kickboxing Night',
      date: 'April 12, 2024',
      location: 'Westside Training Center',
      category: 'Fundraiser',
      participants: 42,
      highlights: [
        'Exhibition matches from our instructors',
        'Student demonstrations',
        'Silent auction',
        'Raised $12,000 for Children\'s Hospital'
      ],
      winners: [],
      stats: { fundsRaised: '$12,000', attendees: 250, auctionItems: 45 },
      image: 'bg-gradient-to-r from-red-700 to-red-800'
    },
    {
      title: 'Women\'s Self-Defense Workshop',
      date: 'March 18, 2024',
      location: 'Eastside Martial Arts Academy',
      category: 'Workshop',
      participants: 38,
      highlights: [
        'Four-hour intensive workshop',
        'Practical self-defense techniques',
        'Situational awareness training',
        'Free follow-up classes offered'
      ],
      winners: [],
      stats: { participants: 38, techniques: 25, satisfaction: '98%' },
      image: 'bg-gradient-to-r from-red-700 to-red-800'
    },
    {
      title: 'Winter Warrior Challenge',
      date: 'February 3, 2024',
      location: 'Northside Fight Club',
      category: 'Competition',
      participants: 56,
      highlights: [
        'Team-based martial arts competition',
        '6 teams competed in various challenges',
        'Technique, fitness, and knowledge rounds',
        'Team Dragon took home the trophy'
      ],
      winners: [
        { division: 'Overall Champions', winner: 'Team Dragon' },
        { division: 'Best Technique', winner: 'Team Phoenix' },
        { division: 'Fitness Challenge', winner: 'Team Tiger' }
      ],
      stats: { teams: 6, challenges: 15, duration: '5 hours' },
      image: 'bg-gradient-to-r from-red-700 to-red-800'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Past Events Gallery</h1>
          <p className="text-xl">Celebrating our community's achievements and memorable moments</p>
        </div>
      </section>

      {/* Events Timeline */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="md:flex">
                  {/* Event Image/Color Block */}
                  <div className={`${event.image} md:w-1/3 p-8 text-white flex flex-col justify-center`}>
                    <div className="text-sm opacity-90 mb-2">{event.category}</div>
                    <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        </svg>
                        {event.location}
                      </div>
                      <div className="flex items-center">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        {event.participants} Participants
                      </div>
                    </div>
                  </div>

                  {/* Event Details */}
                  <div className="md:w-2/3 p-8">
                    <div className="mb-6">
                      <h3 className="text-xl font-bold mb-3">Event Highlights</h3>
                      <ul className="space-y-2">
                        {event.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-5 h-5 text-red-600 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {event.winners.length > 0 && (
                      <div className="mb-6">
                        <h3 className="text-xl font-bold mb-3">Winners & Achievements</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {event.winners.map((winner, idx) => (
                            <div key={idx} className="bg-amber-50 border-l-4 border-amber-500 p-3">
                              <div className="font-semibold text-gray-900">{winner.division}</div>
                              <div className="text-gray-700">{winner.winner}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl font-bold mb-3">Event Statistics</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(event.stats).map(([key, value], idx) => (
                          <div key={idx} className="bg-gray-100 rounded p-3 text-center">
                            <div className="text-2xl font-bold text-red-600">{value}</div>
                            <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Don't Miss Our Next Event!</h2>
          <p className="text-xl mb-8">Check out our upcoming events and be part of the action</p>
          <a href="/events" className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition inline-block">
            View Upcoming Events
          </a>
        </div>
      </section>
    </div>
  );
}

export default PastEvents;
