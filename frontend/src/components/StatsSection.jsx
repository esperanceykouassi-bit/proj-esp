import { motion } from 'framer-motion'

const stats = [
  {
    value: '4',
    label: "Domaines d'intervention",
  },
  {
    value: '6',
    label: 'Cibles stratégiques',
  },
  {
    value: 'SYSCOHADA, SYCEBNL, SAARI',
    isTextValue: true,
    label: 'Référentiels maîtrisés',
  },
  {
    value: 'Présentiel & À distance',
    isTextValue: true,
    label: 'CIV, Abidjan, Angré',
  },
]

export default function Stats() {
  return (
    <section className="bg-brand-green py-12 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-4"
            >
              {/* Valeurs principales entièrement en blanc */}
              <div
                className={`font-bold font-heading mb-2 leading-tight text-white ${
                  stat.isTextValue ? 'text-xl sm:text-2xl' : 'text-4xl sm:text-5xl'
                }`}
              >
                {stat.value}
              </div>

              {/* Sous-titres en blanc légèrement adouci */}
              <div className="text-sm font-medium text-white/90 max-w-[220px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}