import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import {
  ArrowRight, CheckCircle2, Users, Award, Globe2,
  Monitor, Building2, GraduationCap, ChevronRight,
  TrendingUp, Clock, Shield,
} from 'lucide-react'

/* ─── Animated counter ─── */
function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(start)
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target])

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

/* ─── Fade-up animation wrapper ─── */
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

/* ─── Data ─── */
const stats = [
  { value: 500, suffix: '+', label: 'Companies Trained', icon: Building2 },
  { value: 5000, suffix: '+', label: 'Professionals Upskilled', icon: Users },
  { value: 50, suffix: '+', label: 'Expert Trainers', icon: Award },
  { value: 6, suffix: ' yrs', label: 'Industry Experience', icon: Globe2 },
]

const valueProps = [
  {
    icon: TrendingUp,
    color: 'bg-blue-50 text-brand-blue',
    title: 'Industry-Aligned Content',
    desc: 'We customise every programme to your industry and business objectives — not off-the-shelf content delivered to everyone the same way.',
  },
  {
    icon: Clock,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'Three Delivery Formats',
    desc: 'Classroom (ILT), Virtual Instructor-Led (VILT), or Onsite at your premises — we adapt to your team\'s schedule, location, and size.',
  },
  {
    icon: Shield,
    color: 'bg-orange-50 text-orange-600',
    title: 'Wide Trainer Network',
    desc: 'New Clue has a wide network of Certified and Skilled Trainers who are specialists in their domain — conducting programmes across India & abroad.',
  },
]

const programs = [
  {
    icon: GraduationCap,
    tag: 'ILT Format',
    title: 'Classroom Training',
    desc: 'Instructor-led trainings (ILT) are one of the most popular mediums of training — allowing for real-time feedback, questions, and collaborative learning.',
    highlights: ['Real-time Q&A with expert trainers', 'Collaborative exercises', 'Structured learning path', 'Certificate on completion'],
    color: 'from-blue-500 to-blue-700',
    light: 'bg-blue-50',
    textColor: 'text-brand-blue',
  },
  {
    icon: Monitor,
    tag: 'Private Groups',
    title: 'Virtual Training',
    desc: 'Instructor-led web-based training programmes designed for private groups, run at a time convenient to you by experienced instructors.',
    highlights: ['Live instructor-led sessions', 'Designed for private groups', 'Flexible scheduling', 'Digital resources included'],
    color: 'from-teal-500 to-cyan-700',
    light: 'bg-teal-50',
    textColor: 'text-brand-teal',
  },
  {
    icon: Building2,
    tag: 'At Your Location',
    title: 'Onsite Training',
    desc: 'One of the most cost-effective ways to facilitate your organisation\'s learning goals — we come to you and tailor training to your real business challenges.',
    highlights: ['Training at your premises', 'Custom curriculum for your team', 'Understand your business needs', 'Minimal travel disruption'],
    color: 'from-violet-500 to-purple-700',
    light: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
]

export default function Home() {
  return (
    <div className="overflow-x-hidden">

      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center bg-hero-gradient overflow-hidden border-b-4 border-brand-blue/30">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-brand-blue/20 blur-3xl" />
          <div className="absolute top-1/2 -left-40 w-80 h-80 rounded-full bg-brand-teal/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-60 h-60 rounded-full bg-blue-400/10 blur-3xl" />
          {/* Grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                Established 2019 · Pan-India Training Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Upskill Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-300">
                Workforce
              </span>{' '}
              for Tomorrow's Challenges
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.35 }}
              className="text-lg text-white/70 leading-relaxed mb-8 max-w-2xl"
            >
              New Clue Consultants is an IT Training & Staffing Organisation focused on upskilling
              the corporate workforce through tailor-made programmes aligned with your company's
              objectives, goals, and strategies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                to="/programs"
                className="btn-primary text-base px-8 py-4 shadow-blue-900/30"
              >
                Explore Programs
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="btn-outline-white text-base px-8 py-4"
              >
                Book a Free Consultation
              </Link>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2"
            >
              {['IT & Non-IT Programmes', 'Pan-India & International', 'Custom Curriculum'].map(item => (
                <span key={item} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0" />
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

      </section>

      {/* ─── Value Props ─── */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">Why New Clue</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Results-driven <span className="gradient-text">training & staffing</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="section-subheading mt-3 mx-auto">
                Every engagement starts with understanding your business - not a generic catalogue.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((vp, i) => (
              <FadeUp key={vp.title} delay={i * 0.12}>
                <div className="card group hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-xl ${vp.color} flex items-center justify-center mb-4`}>
                    <vp.icon size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{vp.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{vp.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Programs ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">Training Solutions</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Three delivery formats, <span className="gradient-text">one standard of quality</span>
              </h2>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => (
              <FadeUp key={prog.title} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl
                  transition-all duration-300 hover:-translate-y-1 group bg-white flex flex-col">
                  {/* Card header */}
                  <div className={`bg-gradient-to-br ${prog.color} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-white/10 -translate-y-8 translate-x-8" />
                    <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
                      {prog.tag}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                      <prog.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{prog.title}</h3>
                  </div>
                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{prog.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {prog.highlights.map(h => (
                        <li key={h} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 size={15} className={prog.textColor} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link
                        to="/programs"
                        className={`inline-flex items-center gap-1.5 text-sm font-semibold ${prog.textColor} hover:gap-2.5 transition-all`}
                      >
                        Learn more <ChevronRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="text-center mt-10">
              <Link to="/programs" className="btn-primary">
                View All Training Solutions
                <ArrowRight size={16} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-20 bg-hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <FadeUp key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                    <stat.icon size={22} className="text-white/80" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-1">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-white/60 text-sm font-medium">{stat.label}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">Testimonials</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Trusted by <span className="gradient-text">leading organisations</span>
              </h2>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ─── */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeUp>
            <div className="bg-cta-gradient rounded-3xl p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Train your team. Hire the best.
                </h2>
                <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">
                  New Clue Consultants is your single partner for corporate training and IT staffing —
                  book a free consultation today.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-gray-50">
                    Book Free Consultation
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/pricing" className="btn-outline-white">
                    Explore Staffing Solutions
                  </Link>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
