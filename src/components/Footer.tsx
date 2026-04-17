import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Training Solutions', path: '/programs' },
  { name: 'Staffing Solutions', path: '/pricing' },
  { name: 'Contact', path: '/contact' },
]

const programs = [
  { name: 'Classroom Training', path: '/programs' },
  { name: 'Virtual Training', path: '/programs' },
  { name: 'Onsite Training', path: '/programs' },
  { name: 'IT Staff Augmentation', path: '/pricing' },
  { name: 'Contract-to-Hire', path: '/pricing' },
  { name: 'Permanent Placement', path: '/pricing' },
]

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center group mb-5">
              <img
                src="/white-logo.png"
                alt="New Clue Consultants"
                className="h-20 w-auto object-contain brightness-110 group-hover:scale-105 transition-transform"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Established in 2019, we provide Training & Staffing Solutions - upskilling corporate
              teams and connecting organisations with top IT talent across India and abroad.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/company/new-clue-consultants/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/newclueconsultants/', label: 'Instagram' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-blue flex items-center justify-center
                    text-gray-400 hover:text-white transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Our Solutions</h3>
            <ul className="space-y-3">
              {programs.map(p => (
                <li key={p.name}>
                  <Link
                    to={p.path}
                    className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{p.name}</span>
                    <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a href="mailto:training@newclue.co.in" className="flex items-start gap-3 group">
                  <Mail size={15} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    training@newclue.co.in
                  </span>
                </a>
              </li>
              <li>
                <a href="tel:+919910769447" className="flex items-start gap-3 group">
                  <Phone size={15} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
                    +91 99107 69447
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3">
                  <MapPin size={15} className="text-brand-blue mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-gray-400">
                    India (Pan-India & International Training)
                  </span>
                </div>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-blue text-white
                  text-sm font-semibold rounded-lg hover:bg-brand-blue-dark transition-colors"
              >
                Book a Consultation
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} New Clue Consultants. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <span>·</span>
            <a href="https://newclue.co.in" className="hover:text-gray-300 transition-colors">newclue.co.in</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
