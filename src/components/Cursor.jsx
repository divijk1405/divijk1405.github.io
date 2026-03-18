import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const [isHovering, setIsHovering] = useState(false)

  const dotX = useSpring(x, { damping: 28, stiffness: 500, mass: 0.3 })
  const dotY = useSpring(y, { damping: 28, stiffness: 500, mass: 0.3 })
  const ringX = useSpring(x, { damping: 35, stiffness: 200, mass: 0.5 })
  const ringY = useSpring(y, { damping: 35, stiffness: 200, mass: 0.5 })

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const onEnter = (e) => {
      if (e.target.closest('a, button')) setIsHovering(true)
    }
    const onLeave = (e) => {
      if (e.target.closest('a, button')) setIsHovering(false)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', onEnter)
    window.addEventListener('mouseout', onLeave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onEnter)
      window.removeEventListener('mouseout', onLeave)
    }
  }, [x, y])

  return (
    <div className="hidden md:block">
      {/* Dot */}
      <motion.div
        style={{ x: dotX, y: dotY }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.15 }}
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-accent rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
      />
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: isHovering ? 1.8 : 1,
          opacity: isHovering ? 0.6 : 0.25,
        }}
        transition={{ duration: 0.2 }}
        className="fixed top-0 left-0 w-9 h-9 border border-accent rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}
