import { motion } from 'framer-motion'
import divijPhoto from '../../Divij.png'

const ease = [0.22, 1, 0.36, 1]

const nameVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
}

const wordVariant = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.9, ease } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 lg:px-10 pt-28 pb-10 max-w-[1200px] mx-auto">
      {/* Top eyebrow */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease }}
        className="flex flex-wrap items-center gap-x-3 gap-y-1"
      >
        {['CS + Data Science', 'UW–Madison', 'Class of 2026'].map((item, i) => (
          <span key={item} className="flex items-center gap-3">
            <span className="font-mono text-[11px] tracking-[0.18em] text-muted uppercase">
              {item}
            </span>
            {i < 2 && <span className="w-1 h-1 rounded-full bg-border" />}
          </span>
        ))}
      </motion.div>

      {/* Main hero block */}
      <div className="flex items-end justify-between gap-8 mt-6 relative">
        {/* Name */}
        <motion.div
          variants={nameVariants}
          initial="hidden"
          animate="show"
          className="flex-1"
        >
          <motion.h1
            variants={wordVariant}
            className="font-display italic font-light text-text leading-[0.85] tracking-tight select-none block"
            style={{ fontSize: 'clamp(70px, 15.5vw, 196px)' }}
          >
            Divij
          </motion.h1>
          <motion.h1
            variants={wordVariant}
            className="font-display font-black text-text leading-[0.9] tracking-tight select-none block"
            style={{ fontSize: 'clamp(70px, 15.5vw, 196px)' }}
          >
            Kathuria
          </motion.h1>
        </motion.div>

        {/* Photo — floats to the right, lives inside the name block visually */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5, ease }}
          className="relative hidden md:block flex-shrink-0 self-end mb-3"
          style={{ width: 'clamp(140px, 16vw, 230px)' }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-border/60">
            <img
              src={divijPhoto}
              alt="Divij Kathuria"
              className="w-full aspect-[3/4] object-cover object-top"
              style={{ filter: 'contrast(1.04) saturate(0.88)' }}
            />
            {/* Warm tint overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
          </div>
          {/* Label under photo */}
          <p className="mt-2 font-mono text-[10px] text-muted/60 tracking-widest text-center">
            divijkathuria
          </p>
        </motion.div>
      </div>

      {/* Separator */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.85, ease }}
        style={{ originX: 0 }}
        className="h-px bg-border mt-10 mb-8"
      />

      {/* Bottom row: tagline + CTA */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease }}
          className="max-w-lg"
        >
          <p
            className="font-display italic font-light text-text/75 leading-snug"
            style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}
          >
            Building things that feel effortless.
          </p>
          <p className="mt-2 font-mono text-xs text-muted tracking-wider">
            Full-stack · AI-powered · Design-aware
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1, ease }}
          className="flex items-center gap-3 flex-wrap"
        >
          <a
            href="#contact"
            className="px-5 py-2.5 bg-accent text-bg font-sans font-semibold text-sm rounded-full hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-200"
          >
            Get in touch
          </a>
          <a
            href="./DivijCsResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 border border-border text-muted font-sans text-sm rounded-full hover:border-accent/40 hover:text-text hover:-translate-y-0.5 transition-all duration-200"
          >
            Resume ↗
          </a>
        </motion.div>
      </div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-muted/40 to-transparent"
        />
        <span className="font-mono text-[9px] tracking-[0.2em] text-muted/40 uppercase rotate-90 origin-center mt-2">
          scroll
        </span>
      </motion.div>
    </section>
  )
}
