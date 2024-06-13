import { motion } from 'framer-motion'

type RevealProps = {
  children: React.ReactNode
}

export function Button({ children }: RevealProps) {
  return (
    <div>
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: 0.9,
        }}
        exit={{ scale: 1 }}
        transition={{ duration: 0.1 }}
      >
        {children}
      </motion.div>
    </div>
  )
}
