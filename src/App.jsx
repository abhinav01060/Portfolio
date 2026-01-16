import { useState, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import {
  FiArrowDownCircle,
  FiDownload,
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiMail,
} from 'react-icons/fi'

const socials = [
  { icon: FiGithub, label: 'GitHub', href: 'https://github.com/abhinav01060' },
  { icon: FiLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinav-k-66b491273' },
  { icon: FiMail, label: 'Email' },
]

const projects = [
  {
    title: 'Home Haven',
    description:
      'Home rental platform shipped during my Workcohol internship with a focus on calm UI, accessibility, and responsive flows.',
    stack: ['Next.js', 'Tailwind CSS', 'HTML'],
    url: '#',
  },
  {
    title: 'Career Match',
    description:
      'Course project that aligns user skill data with career paths using Python data pipelines, text processing, and simple ML scoring.',
    stack: ['Python', 'Pandas', 'NLP'],
    url: '#',
  },
  {
    title: 'Pick and Pay',
    description:
      'E-commerce concept pairing a semantic HTML/CSS front end with Flask + MySQL APIs for secure checkout and flexible delivery options.',
    stack: ['HTML', 'CSS', 'Flask', 'MySQL'],
    url: '#',
  },
]

const experience = [
  {
    title: 'Software Engineer Intern - Workcohol',
    period: 'Feb 2025 - May 2025',
    points: [
      'Collaborated with a team of four to shape the Home Haven rental platform',
      'Built responsive components with Next.js, Tailwind CSS, and semantic HTML',
      'Improved usability through design reviews, accessibility checks, and code feedback',
      'Paired with design and QA to keep interactions consistent and device-ready',
    ],
  },
]

const skills = [
  {
    label: 'Programming Languages',
    value: 88,
    items: ['Java', 'C', 'JavaScript'],
  },
  {
    label: 'Web Tech & Frameworks',
    value: 85,
    items: ['HTML', 'CSS', 'Spring Boot (Beginner)'],
  },
  {
    label: 'Databases',
    value: 82,
    items: ['SQL', 'MySQL'],
  },
  {
    label: 'Tools',
    value: 80,
    items: ['Git', 'GitHub', 'VS Code'],
  },
]

const sectionTitle = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
}

const cardClass =
  'rounded-[28px] border border-slate-800/60 bg-slate-900/40 p-8 shadow-[0_25px_70px_rgba(0,0,0,0.7)] backdrop-blur'

function TypingAnimation({ text }) {
  const [displayedText, setDisplayedText] = useState('')

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 80) // Typing speed - adjust as needed

    return () => clearInterval(typingInterval)
  }, [text])

  return <>{displayedText}</>
}

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans antialiased">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_55%)]" />

      <header className="fixed inset-x-0 top-6 z-50 px-4 md:px-10">
        <div className="pointer-events-none mx-auto flex max-w-5xl items-center justify-between rounded-full border border-slate-800/70 bg-slate-900/70 px-6 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 shadow-[0_18px_60px_rgba(0,0,0,0.7)] backdrop-blur">
          <div className="pointer-events-auto flex w-full items-center gap-6">
            <span className="text-slate-100">Portfolio</span>
            <nav className="hidden flex-1 items-center justify-center gap-5 text-[0.65rem] text-slate-400 md:flex">
              <a href="#about" className="rounded-full px-3 py-1 transition hover:bg-slate-900/60">
                About
              </a>
              <a href="#experience" className="rounded-full px-3 py-1 transition hover:bg-slate-900/60">
                Experience
              </a>
              <a href="#projects" className="rounded-full px-3 py-1 transition hover:bg-slate-900/60">
                Work
              </a>
              <a href="#contact" className="rounded-full px-3 py-1 transition hover:bg-slate-900/60">
                Contact
              </a>
            </nav>
            <Motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full border border-slate-300 bg-slate-900/90 px-4 py-2 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white"
            >
              Let&apos;s talk
            </Motion.a>
          </div>
        </div>
      </header>

      <main className="mx-auto flex max-w-5xl flex-col gap-20 px-6 pb-20 pt-40">
        <section id="hero" className="grid gap-12 md:items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-100 md:text-6xl">
                <TypingAnimation text="Abhinav K" />
              </h1>
              <p className="text-lg text-slate-400 md:text-xl">
                I focus on minimal, responsive interfaces with Next.js, Tailwind CSS, and strong HTML/CSS foundations,
                backed by Java, Python, and SQL to connect the dots end to end.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Motion.a
                href="#projects"
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20"
              >
                View work
                <FiArrowDownCircle className="text-white" />
              </Motion.a>
              <Motion.div
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300"
              >
                Download resume
                <FiDownload />
              </Motion.div>
            </div>

            <div className="flex items-center gap-3">
              {socials.map(({ icon, label, href }) => {
                const IconComponent = icon
                if (href) {
                  return (
                    <Motion.a
                      key={label}
                      href={href}
                      aria-label={label}
                      whileHover={{ y: -2 }}
                      className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:bg-slate-900/60 hover:text-slate-100"
                    >
                      <IconComponent size={18} />
                    </Motion.a>
                  )
                }
                return (
                  <Motion.div
                    key={label}
                    aria-label={label}
                    whileHover={{ y: -2 }}
                    className="rounded-full border border-slate-700 p-3 text-slate-400 transition hover:bg-slate-900/60 hover:text-slate-100"
                  >
                    <IconComponent size={18} />
                  </Motion.div>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <Motion.div {...sectionTitle}>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">profile</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">Minimal design, thoughtful code.</h2>
          </Motion.div>
          <Motion.div
            {...sectionTitle}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6 text-lg text-slate-400"
          >
            <p>
              I create calm web experiences with lots of breathing room so interfaces work well on any device and keep
              attention on the content. Motion stays purposeful, reinforcing hierarchy instead of adding noise.
            </p>
            <p>
              My toolkit spans Java, C, JavaScript, Python, SQL, and the web stack (HTML, CSS, Spring Boot basics). I pair
              closely with design partners, run quick experiments, and refine details until they feel inevitable.
            </p>
          </Motion.div>
        </section>

        <section className="grid gap-6 lg:grid-cols-1">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="rounded-[28px] border border-slate-800/60 bg-slate-900/40 p-6 shadow-[0_25px_70px_rgba(0,0,0,0.7)] backdrop-blur"
          >
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">skills</p>
              <h3 className="text-2xl font-semibold text-slate-100">Where I add value</h3>
            </div>
            <div className="mt-4 grid gap-3">
              {skills.map((skill) => (
                <div key={skill.label} className="rounded-xl border border-slate-800/60 bg-slate-900/30 p-3">
                  <div className="text-sm text-slate-400">
                    <span className="font-semibold text-slate-100">{skill.label}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                    {skill.items.map((item) => (
                      <span key={item} className="rounded-full border border-slate-800 px-2.5 py-1">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>
        </section>

        <section id="experience" className="space-y-10">
          <Motion.div {...sectionTitle}>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">experience</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">Recent work</h2>
          </Motion.div>
          <div className="space-y-6">
            {experience.map((role, index) => (
              <Motion.div
                key={role.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className={`${cardClass} p-6`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-xl font-semibold text-slate-100">{role.title}</p>
                  <span className="text-sm text-slate-400">{role.period}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-400">
                  {role.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-500" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="space-y-10">
          <Motion.div {...sectionTitle}>
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">projects</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">Selected work</h2>
          </Motion.div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            {projects.map((project, index) => (
              <Motion.article
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-slate-800/60 bg-slate-900/40 p-8 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-semibold text-slate-100">{project.title}</h3>
                  <FiExternalLink className="text-slate-400" size={20} />
                </div>
                <p className="mt-4 text-base text-slate-400 leading-relaxed">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-400">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-slate-800 px-3 py-1.5">
                      {tech}
                    </span>
                  ))}
                </div>
                <Motion.a
                  href={project.url}
                  className="mt-6 inline-flex items-center gap-2 text-base font-semibold text-slate-100"
                  whileHover={{ x: 4 }}
                >
                  Explore case study
                  <FiArrowDownCircle className="rotate-[-90deg]" />
                </Motion.a>
              </Motion.article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-2">
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className={cardClass}
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Toolbox</p>
              <h3 className="text-3xl font-semibold text-slate-100">What I reach for</h3>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li>Front end: Next.js, React, Tailwind CSS, HTML, CSS</li>
              <li>Back end & APIs: Spring Boot (beginner), Flask, Node basics</li>
              <li>Data: SQL, MySQL, Python data stacks</li>
              <li>Collaboration: Git, GitHub, VS Code, Figma handoffs</li>
            </ul>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={cardClass}
          >
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Values</p>
              <h3 className="text-3xl font-semibold text-slate-100">Principles</h3>
            </div>
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <p>Simplify the interface until only intent remains. Keep copy short. Let spacing breathe.</p>
              <p>Ship small iterations, learn from usage, and let animation highlight what matters.</p>
              <p>Document decisions so handoffs stay calm for the next teammate.</p>
            </div>
          </Motion.div>
        </section>

        <section id="contact" className={`${cardClass} text-center`}>
          <Motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.4em] text-slate-400">contact</p>
            <h2 className="text-4xl font-semibold text-slate-100">Let&apos;s collaborate</h2>
            <p className="text-slate-400">
              I&apos;m open to internships, junior engineering roles, and thoughtful freelance projects.
              Tell me about your team and the experience you want to create.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-black"
              >
                Write an email
                <FiMail />
              </Motion.div>
              <Motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-300"
              >
                Book a call
                <FiExternalLink />
              </Motion.div>
            </div>
          </Motion.div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-black/80">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-3 px-6 py-8 text-center text-xs text-slate-500 md:flex-row md:justify-between md:text-left">
          <p> {new Date().getFullYear()} Portfolio  Built with React, Vite, and Tailwind CSS</p>
          <div className="flex gap-4">
            {socials.map(({ icon, label, href }) => {
              const IconComponent = icon
              if (href) {
                return (
                  <a key={label} href={href} className="text-slate-500 transition hover:text-slate-100">
                    <IconComponent size={16} />
                  </a>
                )
              }
              return (
                <div key={label} className="text-slate-500 transition hover:text-slate-100">
                  <IconComponent size={16} />
                </div>
              )
            })}
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
