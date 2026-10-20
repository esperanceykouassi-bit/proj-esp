import { motion } from 'framer-motion'
import { BookCheck, Users, ShieldCheck, MapPin } from 'lucide-react'

const stats = [
  {
    icon: BookCheck,
    value: '4',
    label: "Domaines d'intervention",
  },
  {
    icon: Users,
    value: '6',
    label: 'Cibles stratégiques',
  },
  {
    icon: ShieldCheck,
    value: 'SYSCOHADA, SYCEBNL, SAARI',
    isTextValue: true,
    label: 'Référentiels maîtrisés',
  },
  {
    icon: MapPin,
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
              <stat.icon className="w-8 h-8 mb-3 text-yellow-400 opacity-90" />
              
              <div
                className={`font-bold font-heading mb-2 leading-tight ${
                  stat.isTextValue ? 'text-xl sm:text-2xl text-yellow-400' : 'text-4xl sm:text-5xl text-white'
                }`}
              >
                {stat.value}
              </div>

              <div className="text-sm font-medium text-white/80 max-w-[220px]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}