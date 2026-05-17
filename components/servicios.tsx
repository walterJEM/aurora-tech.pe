'use client'

import { motion } from 'framer-motion'
import { Code, Cog, TrendingUp } from 'lucide-react'

const Servicios = () => {
  const services = [
    {
      icon: Code,
      title: 'Programación Informática',
      description: 'Desarrollo de software a medida, aplicaciones web y móviles, automatización de procesos.',
      color: 'from-cyan-400 to-blue-500',
      lightColor: 'from-cyan-400/20 to-blue-500/20',
    },
    {
      icon: Cog,
      title: 'Consultoría de Informática',
      description: 'Gestión de instalaciones informáticas, soporte técnico, arquitectura de sistemas e infraestructura IT.',
      color: 'from-purple-400 to-purple-600',
      lightColor: 'from-purple-400/20 to-purple-600/20',
    },
    {
      icon: TrendingUp,
      title: 'Consultoría de Gestión',
      description: 'Asesoría estratégica empresarial, transformación digital y optimización de procesos.',
      color: 'from-emerald-400 to-teal-500',
      lightColor: 'from-emerald-400/20 to-teal-500/20',
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
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestros <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Servicios</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Soluciones integrales diseñadas para transformar tu negocio
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.lightColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card */}
                <div className="relative p-8 border border-slate-700/50 rounded-2xl bg-slate-900/50 backdrop-blur-sm group-hover:border-cyan-400/50 transition-all duration-300">
                  {/* Icon Container */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{service.description}</p>

                  {/* Bottom accent */}
                  <motion.div
                    className={`mt-6 h-1 w-0 bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-300`}
                  />
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default Servicios
