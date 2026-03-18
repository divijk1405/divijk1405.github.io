import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { projects } from '../data/projects'

const ease = [0.22, 1, 0.36, 1]

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function ProjectRow({ project, isLast }) {
  const [open, setOpen] = useState(false)

  return (
    <div className={`border-t border-border ${isLast ? 'border-b' : ''}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left"
      >
        <motion.div
          animate={{ backgroundColor: open ? 'rgba(201,169,110,0.04)' : 'rgba(0,0,0,0)' }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-5 py-5 px-3 -mx-3 rounded-lg"
        >
          {/* Number */}
          <span className="font-mono text-[11px] text-muted/40 w-7 flex-shrink-0 select-none">
            {project.id}
          </span>

          {/* Title + role */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap">
              <span
                className={`font-sans font-semibold text-base md:text-lg leading-snug transition-colors duration-200 ${
                  open ? 'text-accent' : 'text-text'
                }`}
              >
                {project.title}
              </span>
              {project.status === 'building' && (
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-accent/30 bg-accent/5">
                  <span className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                  <span className="font-mono text-[9px] text-accent tracking-widest uppercase">
                    Building
                  </span>
                </span>
              )}
              <span className="font-mono text-[11px] text-muted/40">
                {project.role}
              </span>
            </div>
          </div>

          {/* Year */}
          <span className="font-mono text-[11px] text-muted/30 hidden md:block flex-shrink-0">
            {project.year}
          </span>

          {/* Toggle icon */}
          <motion.span
            animate={{ rotate: open ? 45 : 0, color: open ? '#c9a96e' : '#6b645c' }}
            transition={{ duration: 0.2 }}
            className="text-xl flex-shrink-0 ml-1 leading-none"
          >
            +
          </motion.span>
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease }}
            className="overflow-hidden"
          >
            <div className="px-3 pb-5 ml-12">
              {project.bullets ? (
                <ul className="flex flex-col gap-2 mb-4">
                  {project.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-accent/50 mt-0.5 flex-shrink-0">–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-sans text-sm text-muted leading-relaxed mb-4">
                  {project.desc}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-muted border border-border/70 rounded-full px-2.5 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 lg:px-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          003 — Selected Work
        </span>
      </FadeIn>

      <div className="mt-8 flex items-end justify-between gap-4 flex-wrap">
        <FadeIn delay={0.08}>
          <h2
            className="font-display font-black leading-none text-text"
            style={{ fontSize: 'clamp(40px, 6.5vw, 80px)' }}
          >
            Projects
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="font-sans text-sm text-muted pb-1">
            Click to expand
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={0.18} className="mt-10">
        <div>
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              isLast={i === projects.length - 1}
            />
          ))}
        </div>
      </FadeIn>
    </section>
  )
}
