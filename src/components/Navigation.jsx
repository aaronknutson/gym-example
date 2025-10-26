import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-red-500 hover:text-red-400 transition">
            Dragon Spirit Martial Arts
          </Link>
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-red-500 transition">Home</Link>
            <Link to="/events" className="hover:text-red-500 transition">Events</Link>
            <Link to="/past-events" className="hover:text-red-500 transition">Past Events</Link>
            <Link to="/pricing" className="hover:text-red-500 transition">Pricing</Link>
            <Link to="/locations" className="hover:text-red-500 transition">Locations</Link>
            <Link to="/contact" className="hover:text-red-500 transition">Contact</Link>
            <Link to="/login" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700 transition">
              Sign In
            </Link>
            <Link to="/register" className="bg-amber-500 px-4 py-2 rounded hover:bg-amber-600 transition">
              Join Now
            </Link>
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <Link to="/" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <Link to="/events" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Events</Link>
            <Link to="/past-events" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Past Events</Link>
            <Link to="/pricing" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
            <Link to="/locations" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Locations</Link>
            <Link to="/contact" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link to="/login" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Sign In</Link>
            <Link to="/register" className="block py-2 hover:text-red-500" onClick={() => setMobileMenuOpen(false)}>Join Now</Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navigation;
