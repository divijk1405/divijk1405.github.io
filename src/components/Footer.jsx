import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const ease = [0.22, 1, 0.36, 1]

function LiveClock() {
  const [display, setDisplay] = useState('')

  useEffect(() => {
    const update = () => {
      const d = new Date()
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone
      const t = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setDisplay(`${t} · ${tz}`)
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return <>{display}</>
}

const socials = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: 'mailto:divijxx1405@gmail.com' },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <footer id="contact" className="border-t border-border mt-8">
      <div
        ref={ref}
        className="px-6 lg:px-10 max-w-[1200px] mx-auto pt-24 pb-16"
      >
        {/* Section label */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase block mb-10"
        >
          005 — Contact
        </motion.span>

        {/* Big CTA headline */}
        <div className="overflow-hidden">
          <motion.h2
            initial={{ y: '80%', opacity: 0 }}
            animate={inView ? { y: '0%', opacity: 1 } : {}}
            transition={{ duration: 1, ease }}
            className="font-display leading-none text-text"
            style={{ fontSize: 'clamp(52px, 11vw, 148px)' }}
          >
            Let's build
            <br />
            <span className="italic font-light">something.</span>
          </motion.h2>
        </div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35, ease }}
          className="mt-12"
        >
          <a
            href="mailto:divijxx1405@gmail.com"
            className="group inline-flex items-center gap-3 font-sans text-lg md:text-xl text-accent hover:text-text transition-colors duration-300"
          >
            divijxx1405@gmail.com
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="text-xl"
            >
              →
            </motion.span>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-center gap-7"
        >
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-sans text-sm text-muted hover:text-text transition-colors duration-200 underline underline-offset-4 decoration-border/60 hover:decoration-accent"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border px-6 lg:px-10 max-w-[1200px] mx-auto py-5 flex flex-wrap items-center justify-between gap-3">
        <span className="font-mono text-[11px] text-muted/60">
          © 2026 Divij Kathuria
        </span>
        <span className="font-mono text-[11px] text-muted/40">
          <LiveClock />
        </span>
        <span className="font-mono text-[11px] text-muted/40 hidden sm:block">
          React · Vite · Tailwind · Framer Motion
        </span>
      </div>
    </footer>
  )
}
