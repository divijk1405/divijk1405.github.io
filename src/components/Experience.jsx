import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { experience } from '../data/projects'

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

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 lg:px-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          002 — Experience
        </span>
      </FadeIn>

      <FadeIn delay={0.08}>
        <h2
          className="font-display font-black leading-none text-text mt-8"
          style={{ fontSize: 'clamp(40px, 6.5vw, 80px)' }}
        >
          Where I've<br />
          <span className="italic font-light">worked.</span>
        </h2>
      </FadeIn>

      <div className="mt-14 flex flex-col gap-0">
        {experience.map((item, i) => (
          <FadeIn key={i} delay={0.1 + i * 0.08}>
            <div className={`flex gap-8 py-10 ${i < experience.length - 1 ? 'border-b border-border' : ''}`}>
              {/* Left: period */}
              <div className="w-36 flex-shrink-0 hidden md:block">
                <span className="font-mono text-[11px] text-muted/50 leading-relaxed">
                  {item.period}
                </span>
              </div>

              {/* Right: content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-sans font-semibold text-text text-lg leading-snug">
                    {item.role}
                  </h3>
                  <span className="font-sans text-muted text-sm">
                    {item.company}
                  </span>
                  <span className="font-mono text-[11px] text-muted/40 md:hidden">
                    {item.period}
                  </span>
                </div>
                <span className="font-mono text-[11px] text-muted/40 mb-4 block">
                  {item.location}
                </span>

                <ul className="flex flex-col gap-2 mb-5">
                  {item.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-muted leading-relaxed">
                      <span className="text-accent/50 mt-1 flex-shrink-0">–</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[10px] text-muted border border-border/70 rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
