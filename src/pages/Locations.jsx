function Locations() {
  const locations = [
    {
      name: 'Downtown Dojo',
      address: '123 Main Street',
      city: 'Metropolitan City, ST 12345',
      phone: '(555) 123-4567',
      email: 'downtown@dragonspirit.com',
      hours: {
        weekday: '6:00 AM - 10:00 PM',
        saturday: '8:00 AM - 8:00 PM',
        sunday: '9:00 AM - 6:00 PM'
      },
      disciplines: ['Karate', 'Brazilian Jiu-Jitsu', 'Boxing', 'MMA'],
      amenities: ['Large training floor', 'Locker rooms', 'Pro shop', 'Parking available'],
      image: 'bg-gray-900'
    },
    {
      name: 'Westside Training Center',
      address: '456 West Avenue',
      city: 'Metropolitan City, ST 12346',
      phone: '(555) 234-5678',
      email: 'westside@dragonspirit.com',
      hours: {
        weekday: '5:00 AM - 11:00 PM',
        saturday: '7:00 AM - 9:00 PM',
        sunday: '8:00 AM - 7:00 PM'
      },
      disciplines: ['Muay Thai', 'Boxing', 'MMA', 'Kickboxing'],
      amenities: ['Olympic ring', 'Heavy bag area', 'Cardio equipment', 'Smoothie bar'],
      image: 'bg-gray-900'
    },
    {
      name: 'Eastside Martial Arts Academy',
      address: '789 East Boulevard',
      city: 'Metropolitan City, ST 12347',
      phone: '(555) 345-6789',
      email: 'eastside@dragonspirit.com',
      hours: {
        weekday: '6:00 AM - 10:00 PM',
        saturday: '8:00 AM - 8:00 PM',
        sunday: 'Closed'
      },
      disciplines: ['Taekwondo', 'Karate', 'Kids Programs', 'Youth Competition Team'],
      amenities: ['Dedicated kids area', 'Viewing area for parents', 'Birthday party packages', 'Free WiFi'],
      image: 'bg-gray-900'
    },
    {
      name: 'Northside Fight Club',
      address: '321 North Street',
      city: 'Metropolitan City, ST 12348',
      phone: '(555) 456-7890',
      email: 'northside@dragonspirit.com',
      hours: {
        weekday: '5:30 AM - 10:30 PM',
        saturday: '7:00 AM - 9:00 PM',
        sunday: '9:00 AM - 5:00 PM'
      },
      disciplines: ['Brazilian Jiu-Jitsu', 'MMA', 'Wrestling', 'Boxing'],
      amenities: ['Competition cage', 'Grappling area', 'Strength training', 'Recovery room'],
      image: 'bg-gray-900'
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl">Four state-of-the-art facilities across the city</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                {/* Location Header */}
                <div className={`${location.image} text-white p-6`}>
                  <h2 className="text-3xl font-bold">{location.name}</h2>
                </div>

                <div className="p-6">
                  {/* Contact Info */}
                  <div className="mb-6 space-y-3">
                    <div className="flex items-start">
                      <svg className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <div className="font-semibold">{location.address}</div>
                        <div className="text-gray-600">{location.city}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <a href={`tel:${location.phone}`} className="text-red-600 hover:underline">{location.phone}</a>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <a href={`mailto:${location.email}`} className="text-red-600 hover:underline">{location.email}</a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3 flex items-center">
                      <svg className="w-6 h-6 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Hours of Operation
                    </h3>
                    <div className="space-y-1 text-gray-700 ml-8">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-semibold">{location.hours.weekday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-semibold">{location.hours.saturday}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-semibold">{location.hours.sunday}</span>
                      </div>
                    </div>
                  </div>

                  {/* Disciplines Offered */}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3">Disciplines Offered</h3>
                    <div className="flex flex-wrap gap-2">
                      {location.disciplines.map((discipline, idx) => (
                        <span key={idx} className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                          {discipline}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Amenities */}
                  <div className="mb-6">
                    <h3 className="font-bold text-lg mb-3">Amenities</h3>
                    <ul className="grid grid-cols-2 gap-2">
                      {location.amenities.map((amenity, idx) => (
                        <li key={idx} className="flex items-center text-gray-700 text-sm">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition">
                      Get Directions
                    </button>
                    <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition">
                      Schedule Tour
                    </button>
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
          <h2 className="text-4xl font-bold mb-4">Visit Us Today!</h2>
          <p className="text-xl mb-8">Stop by any of our locations for a free tour and trial class</p>
          <div className="space-x-4">
            <button className="bg-red-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-red-700 transition">
              Schedule a Visit
            </button>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Locations;
