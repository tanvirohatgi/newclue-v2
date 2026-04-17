import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Training Solutions', path: '/programs' },
  { name: 'Staffing Solutions', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const navBg = 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'

  const linkColor = 'text-gray-600'
  const linkHover = 'hover:text-brand-blue hover:bg-blue-50'
  const activeColor = 'text-brand-blue bg-blue-50'
  const phoneColor = 'text-gray-500 hover:text-brand-blue'

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 lg:h-24">

          <Link to="/" className="group flex shrink-0 items-center">
            <img
              src="/header.png"
              alt="New Clue Consultants"
              className="h-[2.75rem] w-auto object-contain transition-transform group-hover:scale-105 lg:h-[4.5rem]"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location.pathname === link.path ? activeColor : `${linkColor} ${linkHover}`
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919910769447"
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${phoneColor}`}
            >
              <Phone size={14} />
              +91 99107 69447
            </a>
            <Link
              to="/contact"
              className="px-5 py-2.5 bg-brand-blue text-white text-sm font-semibold rounded-xl
                hover:bg-brand-blue-dark transition-all duration-200 shadow-md hover:shadow-lg
                hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-600 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    location.pathname === link.path
                      ? 'text-brand-blue bg-blue-50'
                      : 'text-gray-700 hover:text-brand-blue hover:bg-blue-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-100">
                <a
                  href="tel:+919910769447"
                  className="flex items-center gap-2 px-4 py-3 text-sm text-gray-500"
                >
                  <Phone size={14} />
                  +91 99107 69447
                </a>
                <Link
                  to="/contact"
                  className="flex items-center justify-center w-full mt-1 px-4 py-3.5 bg-brand-blue
                    text-white text-sm font-semibold rounded-xl"
                >
                  Get Started Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
