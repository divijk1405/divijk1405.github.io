import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

const skills = [
  'React', 'TypeScript', 'Python', 'React Native',
  'Node.js', 'Next.js', 'Flutter', 'Dart',
  'Tailwind CSS', 'PostgreSQL', 'TensorFlow',
  'Pandas', 'OpenAI API', 'AWS', 'Figma', 'Git',
]

export default function About() {
  return (
    <section id="about" className="py-32 px-6 lg:px-10 max-w-[1200px] mx-auto">
      <FadeIn>
        <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
          001 — About
        </span>
      </FadeIn>

      <div className="mt-12 grid md:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: statement */}
        <div>
          <FadeIn delay={0.08}>
            <h2
              className="font-display leading-tight text-text"
              style={{ fontSize: 'clamp(34px, 4.5vw, 56px)' }}
            >
              <span className="italic font-light">Technically strong,</span>
              <br />
              <span className="font-black">design-aware.</span>
            </h2>
          </FadeIn>

          <FadeIn delay={0.16}>
            <p className="mt-6 text-muted text-base leading-relaxed">
              I'm a Computer &amp; Data Science student at UW–Madison, obsessed with
              the intersection of engineering and craft. I care about how things{' '}
              <em className="text-text/70 not-italic">feel</em>, not just how they work.
            </p>
            <p className="mt-4 text-muted text-base leading-relaxed">
              I like shipping crisp UIs, solid backends, and AI-powered tools — with a
              relentless focus on clarity, speed, and polish. Currently building
              SpecMe/ClearClause and seeking SWE roles.
            </p>
          </FadeIn>

          <FadeIn delay={0.22}>
            <div className="mt-8 inline-flex items-center gap-2.5 px-4 py-2 border border-accent/20 rounded-full bg-accent/5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="font-mono text-[11px] text-accent tracking-widest">
                Seeking SWE roles · 2026
              </span>
            </div>
          </FadeIn>
        </div>

        {/* Right: how I work + skills */}
        <div className="flex flex-col gap-10">
          <FadeIn delay={0.18}>
            <div className="border-t border-border pt-8">
              <p className="font-mono text-[10px] text-muted tracking-[0.18em] uppercase mb-3">
                How I work
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Tight feedback loops: ship → measure → iterate. I write things down,
                keep scope sharp, and care about the small details that make products
                feel effortless. If you need someone who can own the UI, wire up the
                backend, and make the whole flow feel polished — I'm your person.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.26}>
            <div>
              <p className="font-mono text-[10px] text-muted tracking-[0.18em] uppercase mb-4">
                Tools &amp; Tech
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ borderColor: 'rgba(201,169,110,0.5)', color: '#c9a96e' }}
                    transition={{ duration: 0.15 }}
                    className="font-mono text-[11px] text-muted border border-border rounded-full px-3 py-1.5 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
