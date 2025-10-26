function Pricing() {
  const membershipPlans = [
    {
      name: 'Basic',
      price: '$79',
      period: 'month',
      color: 'blue',
      features: [
        'Access to 2 classes per week',
        'One martial art discipline',
        'Access to open mat sessions',
        'Beginner-friendly instruction',
        'Equipment rental included'
      ],
      popular: false
    },
    {
      name: 'Unlimited',
      price: '$129',
      period: 'month',
      color: 'red',
      features: [
        'Unlimited class access',
        'All martial art disciplines',
        'Open mat sessions',
        'Advanced training workshops',
        'Equipment rental included',
        'Free guest pass (1 per month)',
        'Priority event registration'
      ],
      popular: true
    },
    {
      name: 'Family',
      price: '$199',
      period: 'month',
      color: 'green',
      features: [
        'Up to 4 family members',
        'Unlimited class access',
        'All martial art disciplines',
        'Family training sessions',
        'Equipment rental included',
        '10% discount on private lessons',
        'Free uniform for new members'
      ],
      popular: false
    }
  ];

  const additionalServices = [
    {
      name: 'Private Training',
      price: '$60',
      unit: 'per session',
      description: 'One-on-one instruction tailored to your goals',
      features: ['45-minute session', 'Customized curriculum', 'Flexible scheduling']
    },
    {
      name: 'Semi-Private (2-4 people)',
      price: '$40',
      unit: 'per person/session',
      description: 'Small group training with personalized attention',
      features: ['60-minute session', 'Bring your training partners', 'Group discounts available']
    },
    {
      name: 'Competition Team',
      price: '$99',
      unit: 'per month (add-on)',
      description: 'Advanced training for competitive fighters',
      features: ['4 sessions per month', 'Tournament preparation', 'Competition coaching']
    },
    {
      name: 'Youth Programs',
      price: '$89',
      unit: 'per month',
      description: 'Specialized programs for kids ages 5-14',
      features: ['Age-appropriate curriculum', 'Character development', '3 classes per week']
    }
  ];

  const dropInOptions = [
    { name: 'Single Class', price: '$25' },
    { name: '10-Class Pack', price: '$200', savings: 'Save $50' },
    { name: 'Week Trial', price: '$49', savings: 'Unlimited classes for 7 days' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Membership Pricing</h1>
          <p className="text-xl">Choose the plan that fits your martial arts journey</p>
        </div>
      </section>

      {/* Membership Plans */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Monthly Memberships</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-4 ring-red-500 transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="bg-red-500 text-white text-center py-2 font-bold">
                    MOST POPULAR
                  </div>
                )}
                <div className={`bg-${plan.color}-600 text-white p-8 text-center`}>
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-5xl font-bold mb-2">{plan.price}</div>
                  <div className="text-lg opacity-90">per {plan.period}</div>
                </div>
                <div className="p-8">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full bg-${plan.color}-600 text-white py-3 rounded-lg font-bold hover:bg-${plan.color}-700 transition`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Additional Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {additionalServices.map((service, index) => (
              <div key={index} className="border-2 border-gray-200 rounded-lg p-6 hover:border-red-500 transition">
                <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                <div className="text-3xl font-bold text-red-600 mb-2">
                  {service.price} <span className="text-lg text-gray-600 font-normal">{service.unit}</span>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drop-in Options */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Drop-In Options</h2>
          <p className="text-center text-gray-600 mb-12">Not ready to commit? Try us out!</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {dropInOptions.map((option, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition">
                <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{option.price}</div>
                {option.savings && (
                  <div className="text-green-600 font-semibold">{option.savings}</div>
                )}
                <button className="mt-4 bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition w-full">
                  Purchase
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-red-500 pl-4">
              <h3 className="text-xl font-bold mb-2">Is there a contract?</h3>
              <p className="text-gray-600">No! All memberships are month-to-month with no long-term commitment required.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="text-xl font-bold mb-2">What do I need to bring?</h3>
              <p className="text-gray-600">Just comfortable workout clothes. We provide all equipment rentals for members.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="text-xl font-bold mb-2">Can I try before I buy?</h3>
              <p className="text-gray-600">Absolutely! We offer a free trial class. Contact us to schedule your visit.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="text-xl font-bold mb-2">Can I freeze my membership?</h3>
              <p className="text-gray-600">Yes, members can freeze their membership for up to 2 months per year for a small fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Join Dragon Spirit Martial Arts today and transform your life</p>
          <button className="bg-white text-red-600 px-8 py-3 rounded-lg text-lg font-bold hover:bg-gray-100 transition">
            Sign Up Now
          </button>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
