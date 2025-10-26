import { Link } from 'react-router-dom';

function Home() {
  const martialArts = [
    {
      name: 'Karate',
      description: 'Traditional Shotokan Karate focusing on discipline, power, and precision. Perfect for all ages and skill levels.',
      features: [
        'Kids Classes (5-12 years)',
        'Teen Classes (13-17 years)',
        'Adult Classes (18+ years)',
        'Belt progression system'
      ]
    },
    {
      name: 'Brazilian Jiu-Jitsu',
      description: 'Ground fighting and grappling techniques. Learn submissions, escapes, and positional control.',
      features: [
        'Fundamentals Class',
        'Advanced Techniques',
        'Competition Training',
        'No-Gi Grappling'
      ]
    },
    {
      name: 'Muay Thai',
      description: 'The art of eight limbs. Master striking techniques using fists, elbows, knees, and shins.',
      features: [
        'Beginner Friendly',
        'Pad Work & Sparring',
        'Cardio Kickboxing',
        'Fight Team Training'
      ]
    },
    {
      name: 'Taekwondo',
      description: 'Korean martial art known for dynamic kicking techniques and Olympic-style sparring.',
      features: [
        'Olympic Style Training',
        'Forms (Poomsae)',
        'Board Breaking',
        'Tournament Prep'
      ]
    },
    {
      name: 'Boxing',
      description: 'Classic boxing fundamentals with modern training methods. Build speed, power, and endurance.',
      features: [
        'Technical Boxing',
        'Heavy Bag Training',
        'Speed & Agility Drills',
        'Sparring Sessions'
      ]
    },
    {
      name: 'Mixed Martial Arts',
      description: 'Comprehensive combat training combining striking, grappling, and ground fighting.',
      features: [
        'All-Around Fighting',
        'Cage Work',
        'Takedown Defense',
        'Fight Preparation'
      ]
    }
  ];

  const benefits = [
    {
      number: 1,
      title: 'Expert Instructors',
      description: 'Certified black belts with years of competition and teaching experience'
    },
    {
      number: 2,
      title: 'Modern Facilities',
      description: 'State-of-the-art training equipment and spacious mat areas'
    },
    {
      number: 3,
      title: 'Flexible Schedule',
      description: 'Morning, afternoon, and evening classes to fit your lifestyle'
    },
    {
      number: 4,
      title: 'Community',
      description: 'Join a supportive family of martial artists of all levels'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Unleash Your Inner Warrior</h1>
          <p className="text-xl mb-8">Train in Traditional and Modern Martial Arts</p>
          <Link to="/pricing" className="bg-red-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-red-700 transition inline-block">
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Martial Arts Classes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Martial Arts Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {martialArts.map((art, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition border-t-4 border-red-600">
                <div className="bg-gray-900 text-white p-6">
                  <h3 className="text-2xl font-bold">{art.name}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{art.description}</p>
                  <ul className="text-gray-600 space-y-2">
                    {art.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-red-600 mr-2">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Why Train With Us?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold shadow-lg">
                  {benefit.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Martial Arts Journey?</h2>
          <p className="text-xl mb-8">Join hundreds of students training at Dragon Spirit Martial Arts</p>
          <div className="space-x-4">
            <Link to="/pricing" className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition inline-block">
              View Pricing
            </Link>
            <Link to="/contact" className="bg-gray-900 text-white px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-800 transition inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
