import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, CheckCircle2, Users, Briefcase,
  UserCheck, Handshake, Globe2, Clock, Shield, Star,
  Building2, ChevronRight,
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

const services = [
  {
    icon: UserCheck,
    title: 'IT Staff Augmentation',
    tag: 'Most Requested',
    tagColor: 'bg-blue-100 text-brand-blue',
    headerBg: 'from-brand-blue to-brand-blue-dark',
    desc: 'Scale your team quickly with pre-vetted IT professionals on a contract basis. Ideal for project-based needs or bridging skill gaps without long-term commitments.',
    highlights: [
      'Profiles shared within 48–72 hours',
      'Short-term or long-term contracts',
      'Roles across SAP, dev, QA, cloud, data & more',
      'Replacement guarantee',
    ],
    cta: 'Request Resources',
  },
  {
    icon: Briefcase,
    title: 'Permanent Placement',
    tag: 'End-to-End Hiring',
    tagColor: 'bg-violet-100 text-violet-700',
    headerBg: 'from-violet-600 to-purple-700',
    desc: 'Full-cycle permanent recruitment for mid to senior IT roles. We source, screen, and deliver interview-ready candidates so your team can focus on what matters.',
    highlights: [
      'Dedicated talent consultant per role',
      'Thorough technical + cultural screening',
      'Average time-to-offer: 10–15 days',
      '90-day post-joining guarantee',
      'Salary benchmarking support',
    ],
    cta: 'Start Hiring',
  },
  {
    icon: Handshake,
    title: 'Contract-to-Hire',
    tag: 'Hire with Confidence',
    tagColor: 'bg-emerald-100 text-emerald-700',
    headerBg: 'from-emerald-600 to-teal-700',
    desc: 'Try before you commit. Engage a professional on contract, evaluate their fit, and convert to a permanent role — reducing hiring risk significantly.',
    highlights: [
      'Evaluate fit before a full-time offer',
      'Seamless permanent conversion',
      'Lower hiring risk for niche roles',
      'Full payroll management during contract',
      'Available across all IT domains',
    ],
    cta: 'Learn More',
  },
]

const specialisations = [
  { label: 'Software Development', icon: '💻' },
  { label: 'Cloud & DevOps', icon: '☁️' },
  { label: 'Data & Analytics', icon: '📊' },
  { label: 'Cybersecurity', icon: '🔐' },
  { label: 'Project Management', icon: '📋' },
  { label: 'QA & Testing', icon: '🔍' },
  { label: 'UI/UX Design', icon: '🎨' },
  { label: 'AI & Machine Learning', icon: '🤖' },
  { label: 'ERP & SAP', icon: '⚙️' },
  { label: 'Network & Infrastructure', icon: '🌐' },
  { label: 'Business Analysis', icon: '📈' },
  { label: 'Executive Search', icon: '🏆' },
]

const process = [
  {
    step: '01',
    title: 'Requirement Briefing',
    desc: 'We start with a detailed call to understand the role, team culture, tech stack, and timelines.',
  },
  {
    step: '02',
    title: 'Talent Sourcing',
    desc: 'Our recruiters tap into our pre-screened talent network and active candidate database.',
  },
  {
    step: '03',
    title: 'Screening & Assessment',
    desc: 'Candidates are technically evaluated, background-checked, and shortlisted for your review.',
  },
  {
    step: '04',
    title: 'Client Interviews',
    desc: 'We coordinate and facilitate interviews, gathering feedback to refine the search rapidly.',
  },
  {
    step: '05',
    title: 'Offer & Onboarding',
    desc: 'We manage offer negotiations and support a smooth onboarding experience for the new hire.',
  },
  {
    step: '06',
    title: 'Post-Placement Support',
    desc: '90-day guarantee with check-ins to ensure both client and candidate satisfaction.',
  },
]

const whyUs = [
  {
    icon: Clock,
    color: 'bg-blue-50 text-brand-blue',
    title: 'Fast Turnaround',
    desc: 'Profiles within 48–72 hours for most roles. We maintain a warm talent pipeline to move quickly when you need it.',
  },
  {
    icon: Shield,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'Quality-First',
    desc: 'Every candidate is thoroughly screened — technically, culturally, and professionally — before reaching your desk.',
  },
  {
    icon: Globe2,
    color: 'bg-violet-50 text-violet-600',
    title: 'Pan-India Network',
    desc: 'Active talent pool across all major Indian cities with growing international placement capabilities.',
  },
  {
    icon: Star,
    color: 'bg-amber-50 text-amber-600',
    title: 'Domain Expertise',
    desc: 'Our recruiters specialise in IT — they understand the roles they hire for, not just the job descriptions.',
  },
]

export default function Pricing() {
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
              <Briefcase size={12} />
              Staffing Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
              The right talent, placed right
            </h1>
            <p className="text-lg text-white/70 max-w-xl mx-auto mb-8">
              From contract resources to permanent leadership hires - we connect
              organisations with pre-vetted IT professionals across India and beyond.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-gray-50">
                Submit a Requirement
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="btn-outline-white">
                Talk to Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: '500+', label: 'Placements Made' },
              { value: '48–72h', label: 'Profile Turnaround' },
              { value: '90-day', label: 'Post-placement Guarantee' },
              { value: '12+', label: 'IT Domains Covered' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-2xl font-bold gradient-text mb-1">{s.value}</div>
                <div className="text-xs text-gray-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <FadeUp><span className="section-tag">Our Services</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Staffing models that <span className="gradient-text">fit your needs</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="section-subheading mt-4 mx-auto">
                Whether you need contract flexibility, a permanent hire, or want to try before you commit - we have the right model.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {services.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.1} className="h-full">
                <div className="rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col h-full">
                  <div className={`bg-gradient-to-br ${svc.headerBg} p-7 relative overflow-hidden`}>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                    <span className={`inline-block px-2.5 py-1 rounded-full ${svc.tagColor} text-xs font-semibold mb-4`}>
                      {svc.tag}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <svc.icon className="text-white" size={22} />
                      </div>
                      <h3 className="text-lg font-bold text-white">{svc.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{svc.desc}</p>
                    <ul className="space-y-2.5 mb-6">
                      {svc.highlights.map(h => (
                        <li key={h} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:gap-2.5 transition-all"
                      >
                        {svc.cta} <ChevronRight size={15} />
                      </Link>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Specialisations */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-10">
            <FadeUp><span className="section-tag">Domains We Cover</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Hiring across <span className="gradient-text">12+ IT domains</span>
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3">
              {specialisations.map(s => (
                <div
                  key={s.label}
                  className="flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-100
                    text-sm text-gray-700 font-medium hover:border-brand-blue hover:text-brand-blue
                    hover:shadow-sm transition-all cursor-default"
                >
                  <span>{s.icon}</span>
                  {s.label}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why Us */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">Why New Clue Staffing</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                We know IT hiring <span className="gradient-text">inside out</span>
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {whyUs.map((w, i) => (
              <FadeUp key={w.title} delay={i * 0.08} className="h-full">
                <div className="card hover:-translate-y-1 h-full">
                  <div className={`w-11 h-11 rounded-xl ${w.color} flex items-center justify-center mb-4`}>
                    <w.icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">Our Process</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                How we <span className="gradient-text">fill your roles</span>
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
            {process.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.07} className="h-full">
                <div className="card hover:-translate-y-0.5 h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {p.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Also train banner */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeUp>
            <div className="bg-white rounded-2xl border border-gray-100 p-8 flex flex-col md:flex-row items-center gap-6 shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Building2 size={26} className="text-brand-blue" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-gray-900 mb-1">Looking to upskill your team too?</h3>
                <p className="text-sm text-gray-500">
                  Pair staffing with our Training Solutions — onboard new hires faster with a customised onboarding programme or upskill your existing team in parallel.
                </p>
              </div>
              <Link to="/programs" className="btn-secondary flex-shrink-0">
                Explore Training
                <ArrowRight size={15} />
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
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
                <Users size={36} className="text-white/40 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-3">
                  Ready to find your next great hire?
                </h2>
                <p className="text-white/70 mb-7 max-w-xl mx-auto">
                  Share your requirement and our team will respond within one business day with a plan.
                </p>
                <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-gray-50">
                  Submit a Hiring Requirement
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
