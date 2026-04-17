import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  GraduationCap, Monitor, Building2, CheckCircle2, ArrowRight,
  Cloud, BarChart3, Shield, Database, Cpu, Users, Code2,
  BookOpen, Clock, ChevronDown,
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

const deliveryModes = [
  {
    icon: GraduationCap,
    title: 'Classroom Training',
    subtitle: 'Instructor-Led (ILT)',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-100 text-brand-blue',
    color: 'border-brand-blue',
    headerBg: 'from-brand-blue to-brand-blue-dark',
    desc: 'Instructor-led trainings (ILT) have been around since the beginning of the training function and are considered one of the most popular mediums of training. They are an effective means of delivering information, as they allow for real-time feedback, questions and answers.',
    features: [
      'Real-time feedback and Q&A',
      'Highly effective knowledge transfer',
      'Peer collaboration and group exercises',
      'Structured learning path',
      'Certificate of completion',
      'Expert domain-specialist trainers',
    ],
    idealFor: 'Teams of 10–50 participants in one location',
  },
  {
    icon: Monitor,
    title: 'Virtual Training',
    subtitle: 'Virtual Instructor-Led',
    badge: 'Private Groups',
    badgeColor: 'bg-teal-100 text-brand-teal',
    color: 'border-brand-teal',
    headerBg: 'from-brand-teal to-cyan-700',
    desc: 'Virtual instructor-led training (VILT) courses are designed for private groups and run at a time convenient to you by experienced instructors.',
    features: [
      'Live instructor-led web sessions',
      'Designed exclusively for private groups',
      'Scheduled at your convenience',
      'Experienced instructors throughout',
      'Digital resources and materials',
      'Flexible time zone delivery',
    ],
    idealFor: 'Private groups, distributed or remote teams',
  },
  {
    icon: Building2,
    title: 'Onsite Training',
    subtitle: 'At Your Premises',
    badge: 'Cost-Effective',
    badgeColor: 'bg-violet-100 text-violet-700',
    color: 'border-violet-500',
    headerBg: 'from-violet-500 to-purple-700',
    desc: 'On-site training is one of the most cost-effective ways to facilitate your organisation\'s learning and development goals. We want to learn about your business challenges and work with you to understand your needs.',
    features: [
      'Training at your office or preferred venue',
      'We learn about your business challenges first',
      'Curriculum tailored to your organisation',
      'Cost-effective for large teams',
      'Minimal travel and disruption',
      'Dedicated trainer for your engagement',
    ],
    idealFor: 'Large teams or whole-department upskilling',
  },
]

const courses = [
  {
    icon: Cloud,
    category: 'Cloud & Infrastructure',
    color: 'bg-blue-50 text-brand-blue',
    courses: ['AWS Certified Solutions Architect', 'Microsoft Azure Fundamentals', 'Google Cloud Platform', 'DevOps & CI/CD Pipelines', 'Kubernetes & Docker', 'Cloud Security'],
  },
  {
    icon: BarChart3,
    category: 'Data & Analytics',
    color: 'bg-emerald-50 text-emerald-600',
    courses: ['Data Analytics with Python', 'Power BI & Tableau', 'SQL & Database Management', 'Machine Learning Fundamentals', 'Business Intelligence', 'Excel Advanced'],
  },
  {
    icon: Shield,
    category: 'Cybersecurity',
    color: 'bg-rose-50 text-rose-600',
    courses: ['CompTIA Security+', 'Ethical Hacking & Pen Testing', 'CISSP Preparation', 'Network Security', 'ISO 27001 Lead Implementer', 'GDPR & Data Privacy'],
  },
  {
    icon: Database,
    category: 'ERP',
    color: 'bg-orange-50 text-orange-600',
    courses: ['Comprehensive SAP S/4HANA Training Program', 'Cross-Module SAP Functional Expertise', 'SAP Technical Foundations (ABAP & System Architecture)', 'Business Process Mapping & Integration in SAP', 'Hands-on SAP Implementation & Project Training'],
  },
  {
    icon: Cpu,
    category: 'AI & Emerging Tech',
    color: 'bg-violet-50 text-violet-600',
    courses: ['Generative AI for Business', 'Python for AI/ML', 'RPA with UiPath/AA', 'Blockchain Fundamentals', 'IoT & Industry 4.0', 'ChatGPT & Prompt Engineering'],
  },
  {
    icon: Users,
    category: 'Leadership & Soft Skills',
    color: 'bg-amber-50 text-amber-600',
    courses: ['Leadership for Managers', 'Communication & Presentation', 'Emotional Intelligence', 'Design Thinking', 'Change Management', 'Team Building Workshops'],
  },
  {
    icon: Code2,
    category: 'Development',
    color: 'bg-cyan-50 text-cyan-600',
    courses: ['Java / Python / .NET', 'React & Full-Stack Web', 'Mobile App Development', 'API Design & Microservices', 'Test Automation (Selenium)', 'Git & Version Control'],
  },
  {
    icon: BookOpen,
    category: 'Microsoft Office Suite',
    color: 'bg-blue-50 text-blue-700',
    courses: ['Microsoft 365 Productivity', 'SharePoint & Teams Admin', 'Excel VBA & Macros', 'PowerPoint Advanced', 'Outlook & Calendar Management', 'Access Database'],
  },
]

const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your team\'s current skills, gaps, goals, and preferred learning formats.' },
  { step: '02', title: 'Curriculum Design', desc: 'Our experts design a custom programme tailored to your industry and specific learning objectives.' },
  { step: '03', title: 'Trainer Allocation', desc: 'We match you with the best domain-certified trainer for your topic from our vetted network.' },
  { step: '04', title: 'Training Delivery', desc: 'The programme is delivered as per your format preference - classroom, virtual, or onsite.' },
  { step: '05', title: 'Assessment & Certification', desc: 'Pre/post assessments measure learning, and participants receive certificates upon completion.' },
  { step: '06', title: 'Follow-up Support', desc: 'Focused support through trainer connect and query resolution to reinforce learning and drive real-world impact.' },
]

export default function Programs() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      q: 'Can you customise the course content for our industry?',
      a: 'Yes - customisation is our core strength. We adapt all curricula to your industry, tools, and real business challenges rather than delivering generic content.',
    },
    {
      q: 'What is the minimum batch size for a training?',
      a: 'We typically work with groups of 10–25 participants. Virtual open-batch formats are available.',
    },
    {
      q: 'How long does a typical training programme last?',
      a: 'Programmes range from 1-day workshops to 10-day intensive courses. Duration depends on the topic and depth required.',
    },
    {
      q: 'Do you provide certifications?',
      a: 'Yes - participants receive a New Clue Certificate of Completion.',
    },
  ]

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
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Training Programmes Built for Results
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-8">
              Classroom, virtual, and onsite delivery - customised for your industry, delivered by certified domain experts.
            </p>
            <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-gray-50">
              Get a Custom Curriculum
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Delivery Modes */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <FadeUp><span className="section-tag">Delivery Formats</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Three ways we <span className="gradient-text">deliver excellence</span>
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {deliveryModes.map((mode, i) => (
              <FadeUp key={mode.title} delay={i * 0.1} className="h-full">
                <div className={`rounded-2xl border-2 ${mode.color} overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white flex flex-col h-full`}>
                  <div className={`bg-gradient-to-br ${mode.headerBg} p-7 relative overflow-hidden`}>
                    <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10" />
                    <span className={`inline-block px-2.5 py-1 rounded-full ${mode.badgeColor} text-xs font-semibold mb-3`}>
                      {mode.badge}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                        <mode.icon className="text-white" size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{mode.title}</h3>
                        <p className="text-white/60 text-xs">{mode.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{mode.desc}</p>
                    <ul className="space-y-2.5 mb-5">
                      {mode.features.map(f => (
                        <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                          <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Users size={12} />
                        <span>Ideal for: {mode.idealFor}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Course Catalogue */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-14">
            <FadeUp><span className="section-tag">Course Catalogue</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="sub-heading mt-3">
              All programmes can be delivered in classroom, virtual, or onsite format - customised for your industry.
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {courses.map((cat, i) => (
              <FadeUp key={cat.category} delay={i * 0.06}>
                <div className="card hover:-translate-y-1 h-full">
                  <div className={`w-10 h-10 rounded-xl ${cat.color} flex items-center justify-center mb-3`}>
                    <cat.icon size={18} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-3">{cat.category}</h3>
                  <ul className="space-y-1.5">
                    {cat.courses.map(c => (
                      <li key={c} className="flex items-center gap-2 text-xs text-gray-500">
                        <div className="w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp delay={0.2}>
            <p className="text-center text-sm text-gray-400 mt-8">
              Don't see your topic?{' '}
              <Link to="/contact" className="text-brand-blue font-semibold hover:underline">
                Request a custom programme →
              </Link>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <FadeUp><span className="section-tag">Our Process</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                How it <span className="gradient-text">works</span>
              </h2>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((p, i) => (
              <FadeUp key={p.step} delay={i * 0.08}>
                <div className="card hover:-translate-y-1 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-blue to-brand-teal text-white text-sm font-bold flex items-center justify-center flex-shrink-0">
                      {p.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1.5">{p.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-max max-w-3xl">
          <div className="text-center mb-10">
            <FadeUp><span className="section-tag">FAQs</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">Common questions</h2>
            </FadeUp>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full flex items-center justify-between text-left gap-4"
                  >
                    <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 flex-shrink-0 transition-transform ${expandedFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence>
                    {expandedFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-gray-500 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <FadeUp>
            <div className="bg-cta-gradient rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative">
                <Clock size={36} className="text-white/40 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-3">
                  Let's design your training programme
                </h2>
                <p className="text-white/70 mb-7 max-w-xl mx-auto">
                  Share your team's goals and we'll create a custom curriculum proposal within 48 hours — no obligation.
                </p>
                <Link to="/contact" className="btn-primary bg-white text-brand-blue hover:bg-gray-50">
                  Request a Custom Proposal
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
