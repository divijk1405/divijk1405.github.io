import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const ease = [0.22, 1, 0.36, 1]

// Import project screenshots
import imgKathuria from '../../media/kathuria-homepage.png'
import imgRobot from '../../media/AutonomousDeliveryRobotPrototype.png'
import imgLvis from '../../media/lvis.png'
import imgUW from '../../media/uwfinal.jpeg'
import imgBadminton from '../../media/badminton.png.jpeg'
import imgMun from '../../media/MUN.png.jpg'

const gallery = [
  {
    src: imgKathuria,
    label: 'Kathuria Techmech',
    type: 'Web · 2025',
    wide: true,
  },
  {
    src: imgBadminton,
    label: 'Badminton',
    type: 'Life · 2024',
    wide: false,
  },
  {
    src: imgRobot,
    label: 'Delivery Robot',
    type: 'Systems · 2024',
    wide: false,
  },
  {
    src: imgLvis,
    label: 'LVIS Analysis',
    type: 'ML · 2024',
    wide: false,
  },
  {
    src: imgMun,
    label: 'Model UN',
    type: 'Leadership · 2023',
    wide: false,
  },
  {
    src: imgUW,
    label: 'UW–Madison',
    type: 'Campus',
    wide: true,
  },
]

function GalleryCard({ item, delay }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease }}
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group cursor-pointer flex-shrink-0"
      style={{ width: item.wide ? 'clamp(280px, 32vw, 440px)' : 'clamp(220px, 24vw, 320px)' }}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
        <img
          src={item.src}
          alt={item.label}
          loading="lazy"
          className="w-full aspect-[4/3] object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ filter: 'saturate(0.82) contrast(1.02)' }}
        />
        {/* Hover overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent flex items-end p-4"
        >
          <span className="font-sans text-sm font-medium text-text">
            {item.label}
          </span>
        </motion.div>
      </div>
      <div className="mt-2.5 flex items-center justify-between px-0.5">
        <span className="font-sans text-[13px] text-muted/70">{item.label}</span>
        <span className="font-mono text-[10px] text-muted/40">{item.type}</span>
      </div>
    </motion.div>
  )
}

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

export default function Creative() {
  return (
    <section id="craft" className="py-32 overflow-hidden">
      <div className="px-6 lg:px-10 max-w-[1200px] mx-auto">
        <FadeIn>
          <span className="font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            003 — Craft
          </span>
        </FadeIn>

        <div className="mt-8 flex items-end justify-between gap-4 flex-wrap">
          <FadeIn delay={0.08}>
            <h2
              className="font-display leading-none text-text"
              style={{ fontSize: 'clamp(40px, 6.5vw, 80px)' }}
            >
              <span className="italic font-light">Visual</span>
              <br />
              <span className="font-black">Artifacts</span>
            </h2>
          </FadeIn>
          <FadeIn delay={0.12}>
            <p className="font-sans text-sm text-muted pb-1 max-w-xs">
              Snapshots from builds, experiments, and the work between the work.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Full-width horizontal scroll */}
      <div
        className="mt-12 flex gap-5 overflow-x-auto hide-scrollbar px-6 lg:px-10"
        style={{ paddingBottom: '8px' }}
      >
        {gallery.map((item, i) => (
          <GalleryCard key={i} item={item} delay={0.05 * i} />
        ))}
        {/* Trailing spacer */}
        <div className="flex-shrink-0 w-6" />
      </div>
    </section>
  )
}
