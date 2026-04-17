import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Mail, Phone, MapPin, Clock, Send, CheckCircle2,
  MessageSquare, Linkedin, Instagram, Loader2
} from 'lucide-react'
import emailjs from '@emailjs/browser'

function FadeUp({ children, delay = 0, className = '' }: {
  children: React.ReactNode; delay?: number; className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const contactInfo = [
  {
    icon: Mail,
    color: 'bg-blue-50 text-brand-blue',
    label: 'Email us',
    value: 'training@newclue.co.in',
    href: 'mailto:training@newclue.co.in',
    sub: 'We reply within 24 hours',
  },
  {
    icon: Phone,
    color: 'bg-emerald-50 text-emerald-600',
    label: 'Call us',
    value: '+91 99107 69447',
    href: 'tel:+919910769447',
    sub: 'Mon–Sat, 9 AM – 7 PM IST',
  },
  {
    icon: MapPin,
    color: 'bg-violet-50 text-violet-600',
    label: 'Location',
    value: 'Pan-India delivery',
    href: '#',
    sub: 'Training across India & abroad',
  },
  {
    icon: Clock,
    color: 'bg-orange-50 text-orange-600',
    label: 'Business hours',
    value: 'Mon – Saturday',
    href: '#',
    sub: '9:00 AM – 7:00 PM IST',
  },
]

const reasons = [
  'Custom curriculum design within 48 hrs',
  'Free initial consultation call',
  'Flexible training formats',
  'Pan-India & international delivery',
  'Post-training support included',
]

const EMAILJS_SERVICE_ID = 'service_iuz97zp'
const EMAILJS_TEMPLATE_ID = 'template_ma9ep49'
const EMAILJS_PUBLIC_KEY = 'VcP64jI5aVoj0E-7u'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', topic: '', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setError(null)

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        // from_name: form.name,
        // from_email: form.email,
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        message: form.message,
      }, { publicKey: EMAILJS_PUBLIC_KEY })
      setSubmitted(true)
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : typeof err === 'object' && err !== null && 'text' in err ? String((err as { text: string }).text) : String(err)
      setError(`Failed to send: ${msg}`)
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative bg-hero-gradient pt-32 pb-24 overflow-hidden border-b-4 border-brand-blue/30">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
              <MessageSquare size={12} />
              Let's Talk
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Start a conversation
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Tell us about your team's training needs and we'll put together a custom proposal — no obligation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left sidebar */}
            <div className="lg:col-span-2 space-y-8">
              <FadeUp>
                <div>
                  <span className="section-tag mb-3">Get in Touch</span>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    We'd love to hear from you
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Whether you're planning a small workshop or a company-wide training rollout,
                    we can help you design the right programme.
                  </p>
                </div>
              </FadeUp>

              {/* Contact info cards */}
              <div className="space-y-3">
                {contactInfo.map((info, i) => (
                  <FadeUp key={info.label} delay={i * 0.08}>
                    <a
                      href={info.href}
                      className="flex items-start gap-3.5 p-4 rounded-xl bg-gray-50 hover:bg-blue-50
                        border border-gray-100 hover:border-blue-100 transition-all group"
                    >
                      <div className={`w-9 h-9 rounded-lg ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <info.icon size={16} />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{info.label}</p>
                        <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-blue transition-colors">
                          {info.value}
                        </p>
                        <p className="text-xs text-gray-400">{info.sub}</p>
                      </div>
                    </a>
                  </FadeUp>
                ))}
              </div>

              {/* Why choose */}
              <FadeUp delay={0.3}>
                <div className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-5">
                  <h3 className="font-bold text-gray-900 text-sm mb-3">Why get in touch?</h3>
                  <ul className="space-y-2">
                    {reasons.map(r => (
                      <li key={r} className="flex items-center gap-2 text-xs text-gray-600">
                        <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>

              {/* Social */}
              <FadeUp delay={0.35}>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Follow us
                  </p>
                  <div className="flex gap-2">
                    {[
                      { icon: Linkedin, href: 'https://www.linkedin.com/company/new-clue-consultants/', label: 'LinkedIn' },
                      { icon: Instagram, href: 'https://www.instagram.com/newclueconsultants/', label: 'Instagram' },
                    ].map(({ icon: Icon, href, label }) => (
                      <a
                        key={label}
                        href={href}
                        aria-label={label}
                        className="w-9 h-9 rounded-lg bg-gray-100 hover:bg-brand-blue flex items-center justify-center
                          text-gray-500 hover:text-white transition-all duration-200"
                      >
                        <Icon size={15} />
                      </a>
                    ))}
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Contact form */}
            <FadeUp delay={0.1} className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                      <CheckCircle2 size={32} className="text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message sent!</h3>
                    <p className="text-gray-500 text-sm max-w-sm">
                      Thanks for reaching out. Our team will review your requirements and
                      get back to you within 24 hours.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', company: '', topic: '', message: '' }) }}
                      className="mt-6 text-sm text-brand-blue font-semibold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Send us a message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Rajesh Kumar"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm
                              focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                              placeholder-gray-300 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Work Email *
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="rajesh@company.com"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm
                              focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                              placeholder-gray-300 transition-all"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="+91 98765 43210"
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm
                              focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                              placeholder-gray-300 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                            Company
                          </label>
                          <input
                            type="text"
                            name="company"
                            value={form.company}
                            onChange={handleChange}
                            placeholder="Infosys Ltd."
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm
                              focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                              placeholder-gray-300 transition-all"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1.5">
                          Tell us about your requirements
                        </label>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={4}
                          placeholder="E.g. We have 30 developers who need AWS certification training. Prefer virtual format across 5 days..."
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm
                            focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue
                            placeholder-gray-300 transition-all resize-none"
                        />
                      </div>
                      {error && (
                        <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-xl px-4 py-3 text-center">
                          {error}
                        </p>
                      )}
                      <button
                        type="submit"
                        disabled={sending}
                        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {sending ? <Loader2 size={15} className="animate-spin" /> : <Send size={15} />}
                        {sending ? 'Sending...' : 'Send Message'}
                      </button>
                      <p className="text-xs text-gray-400 text-center">
                        By submitting, you agree to our Privacy Policy. We'll never share your data.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </div>
  )
}
