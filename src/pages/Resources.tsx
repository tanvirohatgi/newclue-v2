import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  BookOpen, Download, Calendar, ArrowRight, Clock,
  Tag, ChevronRight, FileText, Video, Headphones,
} from 'lucide-react'

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

const categories = ['All', 'Cloud', 'Data & AI', 'Leadership', 'Cybersecurity', 'Agile', 'Career']

const articles = [
  {
    category: 'Cloud',
    type: 'Article',
    icon: FileText,
    readTime: '5 min read',
    date: 'Mar 2025',
    title: 'AWS vs Azure in 2025: Which Cloud Platform Should Your Team Learn?',
    excerpt: 'A practical comparison of AWS and Azure certifications, job market demand, and which platform aligns better with your industry.',
    tag: 'Cloud',
    tagColor: 'bg-blue-50 text-brand-blue',
  },
  {
    category: 'Data & AI',
    type: 'Guide',
    icon: FileText,
    readTime: '8 min read',
    date: 'Feb 2025',
    title: 'The Complete L&D Guide to Upskilling Teams in Generative AI',
    excerpt: 'How learning & development leaders can structure AI literacy programmes that stick — from prompt engineering to responsible AI use.',
    tag: 'AI/ML',
    tagColor: 'bg-violet-50 text-violet-600',
  },
  {
    category: 'Leadership',
    type: 'Article',
    icon: FileText,
    readTime: '6 min read',
    date: 'Jan 2025',
    title: '5 Signs Your Team Needs Leadership Development Training Now',
    excerpt: 'Early signals that your managers are struggling — and how structured leadership training can turn things around before problems escalate.',
    tag: 'Leadership',
    tagColor: 'bg-amber-50 text-amber-600',
  },
  {
    category: 'Cybersecurity',
    type: 'Article',
    icon: FileText,
    readTime: '4 min read',
    date: 'Dec 2024',
    title: 'Cybersecurity Training ROI: What the Numbers Actually Say',
    excerpt: 'Data-backed evidence for why security awareness training is one of the highest-ROI investments an IT team can make.',
    tag: 'Security',
    tagColor: 'bg-rose-50 text-rose-600',
  },
  {
    category: 'Agile',
    type: 'Guide',
    icon: FileText,
    readTime: '7 min read',
    date: 'Nov 2024',
    title: 'PMP vs Agile: Which Project Management Certification is Right in 2025?',
    excerpt: 'A practical breakdown to help project managers and their organisations decide which credential delivers the most value.',
    tag: 'Agile',
    tagColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    category: 'Career',
    type: 'Article',
    icon: FileText,
    readTime: '5 min read',
    date: 'Oct 2024',
    title: 'How to Build a Skills-First L&D Strategy for Your Organisation',
    excerpt: 'Moving beyond job titles to build a workforce development strategy based on the skills your business actually needs for the next 3 years.',
    tag: 'Strategy',
    tagColor: 'bg-orange-50 text-orange-600',
  },
]

const downloads = [
  {
    icon: FileText,
    title: 'Corporate Training RFP Template',
    desc: 'A ready-to-use Request for Proposal template for procuring corporate training programmes.',
    type: 'PDF',
    size: '1.2 MB',
    color: 'bg-blue-50 text-brand-blue',
  },
  {
    icon: FileText,
    title: 'L&D ROI Measurement Workbook',
    desc: 'Excel workbook to track training effectiveness, measure Kirkpatrick levels, and report ROI to leadership.',
    type: 'XLSX',
    size: '890 KB',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: FileText,
    title: '2025 Corporate Training Trends Report',
    desc: 'Key findings from our annual survey of 200+ Indian L&D professionals on priorities, budgets, and emerging topics.',
    type: 'PDF',
    size: '3.4 MB',
    color: 'bg-violet-50 text-violet-600',
  },
  {
    icon: FileText,
    title: 'Training Needs Analysis (TNA) Template',
    desc: 'Step-by-step template to assess skills gaps and align training to business objectives.',
    type: 'PDF',
    size: '780 KB',
    color: 'bg-orange-50 text-orange-600',
  },
]

const events = [
  {
    date: { day: '15', month: 'Apr' },
    type: 'Webinar',
    icon: Video,
    color: 'bg-blue-50 text-brand-blue',
    title: 'Building an AI-Ready Workforce: A Practical Roadmap',
    desc: 'Join our expert trainers for a 60-minute live session on designing AI upskilling programmes that actually work.',
    seats: '48 seats left',
  },
  {
    date: { day: '22', month: 'Apr' },
    type: 'Workshop',
    icon: Headphones,
    color: 'bg-violet-50 text-violet-600',
    title: 'Agile Leadership: Managing Teams in Uncertain Times',
    desc: 'A half-day interactive workshop for senior managers and team leads on adaptive leadership techniques.',
    seats: '20 seats left',
  },
  {
    date: { day: '08', month: 'May' },
    type: 'Webinar',
    icon: Video,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'Maximising Training ROI: What Every HR Leader Needs to Know',
    desc: 'Practical frameworks for measuring and communicating the business value of your L&D programmes.',
    seats: '62 seats left',
  },
]

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(a => a.category === activeCategory)

  return (
    <div className="overflow-x-hidden">

      {/* Hero */}
      <section className="relative bg-hero-gradient pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
              <BookOpen size={12} />
              Knowledge Hub
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              Resources for L&D Leaders
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto">
              Articles, guides, templates, and events to help you build a world-class training function.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L1440 60L1440 30C1200 60 960 0 720 30C480 60 240 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Articles */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
            <FadeUp>
              <div>
                <span className="section-tag mb-2">Blog & Guides</span>
                <h2 className="section-heading mt-2">Latest insights</h2>
              </div>
            </FadeUp>
            {/* Category filter */}
            <FadeUp delay={0.1}>
              <div className="flex flex-wrap gap-2">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      activeCategory === cat
                        ? 'bg-brand-blue text-white shadow-sm'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <FadeUp key={article.title} delay={i * 0.08}>
                <div className="card hover:-translate-y-1 group flex flex-col h-full cursor-pointer">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${article.tagColor}`}>
                      <Tag size={10} />
                      {article.tag}
                    </span>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Clock size={10} />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 leading-snug group-hover:text-brand-blue transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-4">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{article.date}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue group-hover:gap-2 transition-all">
                      Read more <ChevronRight size={12} />
                    </span>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">Free Downloads</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Templates & <span className="gradient-text">toolkits</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="section-subheading mt-4 mx-auto">
                Practical resources to help you plan, execute, and measure training effectively.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {downloads.map((d, i) => (
              <FadeUp key={d.title} delay={i * 0.08}>
                <div className="card hover:-translate-y-1 flex items-start gap-4 group cursor-pointer">
                  <div className={`w-12 h-12 rounded-xl ${d.color} flex items-center justify-center flex-shrink-0`}>
                    <d.icon size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="font-bold text-gray-900 text-sm group-hover:text-brand-blue transition-colors leading-snug">
                        {d.title}
                      </h3>
                    </div>
                    <p className="text-xs text-gray-500 leading-relaxed mb-2">{d.desc}</p>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400">{d.type} · {d.size}</span>
                      <button className="inline-flex items-center gap-1 text-xs font-semibold text-brand-blue hover:underline">
                        <Download size={11} />
                        Download
                      </button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">Events</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Upcoming webinars & <span className="gradient-text">workshops</span>
              </h2>
            </FadeUp>
          </div>
          <div className="space-y-5 max-w-3xl mx-auto">
            {events.map((event, i) => (
              <FadeUp key={event.title} delay={i * 0.1}>
                <div className="card hover:-translate-y-0.5 group cursor-pointer">
                  <div className="flex items-start gap-5">
                    {/* Date block */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gray-50 border border-gray-100 flex flex-col items-center justify-center">
                      <span className="text-xs font-bold text-gray-400 uppercase">{event.date.month}</span>
                      <span className="text-xl font-bold text-gray-900 leading-none">{event.date.day}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold ${event.color}`}>
                          <event.icon size={10} />
                          {event.type}
                        </span>
                        <span className="text-xs text-rose-500 font-medium">{event.seats}</span>
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 group-hover:text-brand-blue transition-colors">
                        {event.title}
                      </h3>
                      <p className="text-sm text-gray-500">{event.desc}</p>
                    </div>
                    <div className="flex-shrink-0 hidden sm:flex">
                      <Link
                        to="/contact"
                        className="px-4 py-2 bg-brand-blue text-white text-xs font-semibold rounded-lg
                          hover:bg-brand-blue-dark transition-colors"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeUp>
            <div className="bg-cta-gradient rounded-3xl p-10 sm:p-14 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative max-w-2xl mx-auto text-center">
                <Calendar size={36} className="text-white/40 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-3">
                  Stay ahead in L&D
                </h2>
                <p className="text-white/70 mb-7">
                  Get monthly insights on corporate training trends, upskilling strategies,
                  and free resources — straight to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/30 text-white
                      placeholder-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                  <button className="px-6 py-3 bg-white text-brand-blue font-semibold rounded-xl text-sm
                    hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center">
                    Subscribe
                    <ArrowRight size={15} />
                  </button>
                </div>
                <p className="text-white/40 text-xs mt-3">No spam. Unsubscribe anytime.</p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
