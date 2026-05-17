'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const Testimonios = () => {
  const testimonials = [
    {
      name: 'Carlos García',
      company: 'TechManu S.A.',
      quote:
        'Aurora Tech transformó completamente nuestro proceso operativo. Su equipo fue profesional, dedicado y entregó exactamente lo que prometió en el tiempo acordado.',
      rating: 5,
      color: 'from-cyan-400 to-blue-500',
    },
    {
      name: 'María Rodríguez',
      company: 'Retail Solutions Perú',
      quote:
        'La consultoría de transformación digital fue clave para nuestro crecimiento. Nos ayudaron a implementar estrategias que aumentaron nuestra eficiencia en 40%.',
      rating: 5,
      color: 'from-purple-400 to-purple-600',
    },
    {
      name: 'Jorge Martínez',
      company: 'Logística Express',
      quote:
        'El soporte técnico y la infraestructura cloud que implementaron Aurora Tech ha sido imprescindible. Ahora podemos escalar sin preocupaciones.',
      rating: 5,
      color: 'from-emerald-400 to-teal-500',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section
      id="testimonios"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/2 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Clientes</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Testimonios de empresas que confían en Aurora Tech
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -8 }}
              className="group"
            >
              {/* Gradient border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} p-0.5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />

              {/* Card */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-transparent transition-all h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < testimonial.rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-slate-700'
                      }`}
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-slate-300 leading-relaxed flex-grow mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                {/* Author */}
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonios
