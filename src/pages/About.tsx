import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Target, Eye, Heart, Users, Globe2, Award, CheckCircle2,
  ArrowRight, Lightbulb, Handshake, TrendingUp,
  GraduationCap, Briefcase, Monitor, Building2, UserCheck, Search,
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

const milestones = [
  { year: '2019', title: 'Founded', desc: 'New Clue Consultants was established in India with a vision to bridge the skills gap between academic learning and industry requirements.' },
  { year: '2020', title: 'Virtual Delivery Launch', desc: 'Quicky adapted to virtual training models, ensuring uninterrupted learning solutions for corporate clients during evolving business needs.' },
  { year: '2021', title: 'Industry Engagement', desc: 'Began collaborating with clients across key industries, including IT, Banking and Consulting, delivering specalised training programmes.' },
  { year: '2022', title: 'Capability Expansion', desc: 'Expanded training capabilities to support diverse corporate requirements, including customised programmes and enterprise-focused learning solutions' },
  { year: '2023', title: 'Growing Impact', desc: 'Successfully delivered training programmes to professionals across organisations, focusing on practical, industry-relevant upskilling.' },
  { year: '2024+', title: 'AI & Future Skills', desc: 'Introduced programmes in AI/ML, Cloud Technologies and Digital Transformation aligning with evolving industry demands.'},
]

const differentiators = [
  {
    icon: Lightbulb,
    color: 'bg-amber-50 text-amber-600',
    title: 'Customised to Every Industry',
    desc: 'New Clue\'s uniqueness stands for customising the content to every industry, based on their businesses — not generic, one-size-fits-all training.',
  },
  {
    icon: Users,
    color: 'bg-blue-50 text-brand-blue',
    title: 'Wide Trainer Network',
    desc: 'New Clue has a wide network of Certified and Skilled Trainers who are specialists in their own domain to conduct programmes across India & Abroad.',
  },
  {
    icon: Globe2,
    color: 'bg-emerald-50 text-emerald-600',
    title: 'Multiple Training Models',
    desc: 'We provide training programmes through various training models — classroom, virtual, and onsite — so every team is served effectively.',
  },
  {
    icon: TrendingUp,
    color: 'bg-violet-50 text-violet-600',
    title: 'IT & Non-IT Programmes',
    desc: 'We aim to serve people to acquire the right attitude and skills through IT, AI and Non-IT training programmes across different industries.',
  },
  {
    icon: Handshake,
    color: 'bg-rose-50 text-rose-600',
    title: 'Corporate Workforce Focus',
    desc: 'Our training is focused specifically on the corporate workforce — developing skills and knowledge required in today\'s fast-changing business world.',
  },
  {
    icon: Award,
    color: 'bg-orange-50 text-orange-600',
    title: 'India & International Reach',
    desc: 'Based in India and established in 2019, we deliver training programmes to organisations across India and in international markets.',
  },
]

const coreValues = [
  { icon: Target, label: 'Purpose-Driven', color: 'text-brand-blue' },
  { icon: Eye, label: 'Transparent', color: 'text-emerald-600' },
  { icon: Heart, label: 'People-First', color: 'text-rose-500' },
  { icon: Award, label: 'Excellence', color: 'text-amber-500' },
]

export default function About() {
  return (
    <div className="overflow-x-hidden">

      {/* Page Hero */}
      <section className="relative bg-hero-gradient pt-32 pb-24 overflow-hidden border-b-4 border-brand-blue/30">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold uppercase tracking-wider mb-6">
              Our Story
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Building Skilled Workforces Since 2019
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              We are a team of passionate trainers, consultants, and L&D experts united by one goal:
              making corporate training truly effective.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeUp>
              <div>
                <span className="section-tag mb-4">Who We Are</span>
                <h2 className="section-heading mb-5">
                  We don't just train people.{' '}
                  <span className="gradient-text">We transform teams.</span>
                </h2>
                <p className="text-gray-500 leading-relaxed mb-4">
                  Established in 2019 in India, New Clue Consultants is an IT Training Organisation focused
                  on upskilling the corporate workforce through tailor-made training needs. Our vision is to
                  provide the most relevant and work-related training aligned with your company's objectives,
                  goals, and strategies.
                </p>
                <p className="text-gray-500 leading-relaxed mb-6">
                  We are a Training Organisation for developing skills and knowledge required in today's
                  corporate world - serving people across IT, AI & Non-IT training programmes in different
                  industries in India and abroad.
                </p>
                <div className="flex flex-wrap gap-3">
                  {coreValues.map(v => (
                    <div key={v.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-gray-100">
                      <v.icon size={15} className={v.color} />
                      <span className="text-sm font-medium text-gray-700">{v.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.15}>
              <div className="grid grid-cols-1 gap-5">
                {[
                  {
                    icon: Target,
                    color: 'bg-blue-50',
                    iconColor: 'text-brand-blue',
                    label: 'Our Mission',
                    text: 'To deliver high impact, business-aligned training programmes across IT, AI and Non-IT domains that enable organisations to build real capability.',
                  },
                  {
                    icon: Eye,
                    color: 'bg-emerald-50',
                    iconColor: 'text-emerald-600',
                    label: 'Our Vision',
                    text: 'To be a trusted partner in building future-ready organisations by enabling skills, mindset and capability through impactful IT, AI & Non-IT learning solutions.'
                  },
                ].map(item => (
                  <div key={item.label} className={`${item.color} rounded-2xl p-6 border border-transparent`}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-sm">
                        <item.icon size={18} className={item.iconColor} />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{item.label}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Training & Staffing Solutions */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <FadeUp><span className="section-tag">What We Do</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Two solutions, <span className="gradient-text">one trusted partner</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="section-subheading mt-4 mx-auto">
                New Clue Consultants operates across two service lines - both designed to help organisations build stronger, more capable teams.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Training Solutions */}
            <FadeUp delay={0.1} className="h-full">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="bg-gradient-to-br from-brand-blue to-brand-teal p-7 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <GraduationCap size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Training Solutions</h3>
                  <p className="text-white/70 text-sm">Upskilling your existing workforce</p>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    We design and deliver tailor-made training programmes for corporate teams across IT and non-IT domains.
                    From cloud computing to leadership development — every programme is built around your business objectives.
                  </p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {[
                      { icon: Monitor, label: 'Classroom, virtual, and onsite delivery' },
                      { icon: Building2, label: 'Custom curriculum for your industry' },
                      { icon: Users, label: 'Certified domain-specialist trainers' },
                    ].map(item => (
                      <li key={item.label} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <item.icon size={14} className="text-brand-blue flex-shrink-0" />
                        {item.label}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link to="/programs" className="btn-primary text-sm">
                      Explore Training Solutions
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Staffing Solutions */}
            <FadeUp delay={0.15} className="h-full">
              <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                <div className="bg-gradient-to-br from-violet-600 to-purple-800 p-7 relative overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10" />
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center mb-4">
                    <Briefcase size={22} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">Staffing Solutions</h3>
                  <p className="text-white/70 text-sm">Connecting talent with opportunity</p>
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">
                    We help organisations find and place the right IT talent — fast. Whether you need
                    contract resources, permanent hires, or executive leaders, our staffing team handles the full pipeline.
                  </p>
                  <ul className="space-y-3 mb-6 flex-1">
                    {[
                      { icon: UserCheck, label: 'IT staff augmentation & contract hiring' },
                      { icon: Search, label: 'Permanent placement & executive search' },
                      { icon: Handshake, label: 'Contract-to-hire & campus recruitment' },
                      { icon: Globe2, label: 'Pan-India & international placement' },
                    ].map(item => (
                      <li key={item.label} className="flex items-center gap-2.5 text-sm text-gray-700">
                        <item.icon size={14} className="text-violet-600 flex-shrink-0" />
                        {item.label}
                      </li>
                    ))}
                  </ul>
                  <div>
                    <Link to="/pricing" className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white text-sm font-semibold rounded-xl hover:bg-violet-700 transition-colors shadow-md">
                      Explore Staffing Solutions
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <FadeUp><span className="section-tag">Our Journey</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                Five years of <span className="gradient-text">impact</span>
              </h2>
            </FadeUp>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="hidden md:block absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-px bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <FadeUp key={m.year} delay={i * 0.08}>
                  <div className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className="flex-1 hidden md:block" />
                    {/* Center dot */}
                    <div className="hidden md:flex flex-col items-center flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-brand-blue text-white text-xs font-bold flex items-center justify-center z-10 shadow-md">
                        {m.year.slice(0, 4)}
                      </div>
                    </div>
                    {/* Card */}
                    <div className="flex-1 card">
                      <span className="md:hidden inline-block px-2.5 py-0.5 rounded-full bg-blue-50 text-brand-blue text-xs font-bold mb-2">
                        {m.year}
                      </span>
                      <h3 className="font-bold text-gray-900 mb-1">{m.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <FadeUp><span className="section-tag">Our Edge</span></FadeUp>
            <FadeUp delay={0.1}>
              <h2 className="section-heading mt-3">
                How we're <span className="gradient-text">different</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="section-subheading mt-4 mx-auto">
                New Clue's uniqueness lies in customising content to every industry and delivering
                through the model that works best for your team.
              </p>
            </FadeUp>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {differentiators.map((d, i) => (
              <FadeUp key={d.title} delay={i * 0.08} className="h-full">
                <div className="card hover:-translate-y-1 group h-full">
                  <div className={`w-11 h-11 rounded-xl ${d.color} flex items-center justify-center mb-4`}>
                    <d.icon size={20} />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Quote banner */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <FadeUp>
            <div className="bg-hero-gradient rounded-3xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative max-w-3xl mx-auto">
                <div className="text-6xl text-white/20 font-serif mb-4">"</div>
                <p className="text-xl text-white/90 font-medium leading-relaxed italic mb-6">
                  "New Clue has a wide network of Certified and Skilled Trainers who are specialist
                  in their own domain to conduct programmes across India & Abroad."
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Users size={18} className="text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">New Clue Consultants</p>
                    <p className="text-white/50 text-xs">Training & Staffing Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-max text-center">
          <FadeUp>
            <h2 className="section-heading mb-4">
              Ready to partner with us?
            </h2>
            <p className="section-subheading mb-8 mx-auto">
              Let's discuss how we can design a training programme that delivers real results for your team.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="btn-primary">
                Start a Conversation
                <ArrowRight size={16} />
              </Link>
              <Link to="/programs" className="btn-secondary">
                Explore Programs
              </Link>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
              {[
                'No commitment required',
                'Free initial consultation',
                'Custom curriculum design',
                'Pan-India delivery',
              ].map(item => (
                <span key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500" />
                  {item}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
