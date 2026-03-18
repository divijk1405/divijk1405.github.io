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
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative border-t border-border ${isLast ? 'border-b' : ''}`}
    >
      <motion.div
        animate={{ backgroundColor: hovered ? 'rgba(201,169,110,0.03)' : 'rgba(0,0,0,0)' }}
        transition={{ duration: 0.25 }}
        className="flex items-start gap-5 py-5 px-3 -mx-3 rounded-lg"
      >
        {/* Number */}
        <span className="font-mono text-[11px] text-muted/50 w-7 pt-1 flex-shrink-0 select-none">
          {project.id}
        </span>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-4 flex-wrap">
            <motion.span
              animate={{ color: hovered ? '#c9a96e' : '#eee9de' }}
              transition={{ duration: 0.2 }}
              className="font-sans font-semibold text-base md:text-lg leading-snug"
            >
              {project.title}
            </motion.span>
            <span className="font-mono text-[11px] text-muted/50">
              {project.role}
            </span>
            <span className="font-mono text-[11px] text-muted/30 ml-auto hidden md:block">
              {project.year}
            </span>
          </div>

          <AnimatePresence>
            {hovered && (
              <motion.p
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 8 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.28, ease }}
                className="font-sans text-sm text-muted leading-relaxed overflow-hidden"
              >
                {project.desc}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Tags — always visible on mobile, on hover on desktop */}
          <motion.div
            animate={{ opacity: hovered ? 1 : 0.4 }}
            transition={{ duration: 0.2 }}
            className="mt-3 flex flex-wrap gap-1.5 md:opacity-40 md:group-hover:opacity-100"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] text-muted border border-border/70 rounded-full px-2.5 py-1"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{
            x: hovered ? 3 : 0,
            opacity: hovered ? 1 : 0.2,
            color: hovered ? '#c9a96e' : '#6b645c',
          }}
          transition={{ duration: 0.2 }}
          className="text-xl pt-0.5 flex-shrink-0 ml-1"
        >
          →
        </motion.span>
      </motion.div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="py-32 px-6 lg:px-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          002 — Selected Work
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
            Hover to explore
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
