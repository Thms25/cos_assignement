import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
  width?: string
  initX?: number
  initY?: number
  dly?: number
  duration?: number
  initS?: number
}

export function Reveal({
  children,
  initX = 0,
  initY = 0,
  dly = 0.3,
  duration = 0.5,
  initS = 1,
}: RevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <div
      style={{
        overflow: 'hidden',
        width: '100%',
      }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: initY, x: initX, scale: initS },
          visible: { opacity: 1, y: 0, x: 0, scale: 1 },
        }}
        initial="hidden"
        animate={controls}
        exit={{ opacity: 0 }}
        transition={{ duration: duration, delay: dly }}
      >
        {children}
      </motion.div>
    </div>
  )
}
