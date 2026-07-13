import { motion } from 'framer-motion'

/**
 * Wrapper fade-in au scroll. Props :
 *   delay   – délai avant l'animation (ex: 0.1, 0.2…)
 *   y       – distance de translation verticale (défaut 28px)
 *   className – classes Tailwind supplémentaires sur le div
 */
export default function FadeIn({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-72px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
