'use client'

import { motion } from 'framer-motion'
import { MapPin, Calendar, Briefcase, Users } from 'lucide-react'
import { useEffect, useState } from 'react'

const SobreNosotros = () => {
  const [stats, setStats] = useState({
    year: 0,
    services: 0,
    city: 'Lima',
    ruc: '20615864804',
  })

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        year: Math.min(2026, prev.year + 100),
        services: Math.min(3, Math.ceil(prev.services + 0.15)),
      }))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const statItems = [
    { icon: Calendar, label: 'Fundada en', value: '2026', color: 'from-cyan-400 to-blue-500' },
    { icon: Briefcase, label: 'Líneas de Servicio', value: '3', color: 'from-purple-400 to-purple-600' },
    { icon: MapPin, label: 'Ubicación', value: 'Lima, Perú', color: 'from-emerald-400 to-teal-500' },
    { icon: Users, label: 'Equipo', value: 'Especialistas', color: 'from-pink-400 to-rose-500' },
  ]

  return (
    <section id="sobre-nosotros" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Aurora Tech</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Empresa peruana fundada con la misión de democratizar la tecnología para empresas en Latinoamérica
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {statItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className={`bg-gradient-to-br ${item.color} p-0.5 rounded-xl`}>
                  <div className="bg-slate-900 rounded-xl p-6 text-center">
                    <div
                      className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-slate-400 text-sm mb-2">{item.label}</p>
                    <p className="text-2xl font-bold text-white">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-0.5 rounded-2xl">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500" />
                  Misión
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Proporcionar soluciones tecnológicas innovadoras que empoderen a empresas latinoamericanas para competir globalmente, democratizando el acceso a desarrollo de software de calidad, consultoría estratégica y gestión empresarial.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gradient-to-br from-purple-400/20 to-purple-600/20 p-0.5 rounded-2xl">
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-purple-400/50 transition-all">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <span className="inline-block w-1 h-6 bg-gradient-to-b from-purple-400 to-purple-600" />
                  Visión
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Ser la empresa de tecnología y consultoría más confiable y innovadora de Latinoamérica, reconocida por transformar ideas en soluciones digitales que generan impacto real en el crecimiento empresarial.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-slate-900/50 to-slate-800/50 border border-cyan-400/20 rounded-2xl p-6 text-center"
        >
          <p className="text-slate-400 mb-2">Registro único de contribuyentes</p>
          <p className="text-2xl font-bold text-cyan-400">RUC: 20615864804</p>
        </motion.div>
      </div>
    </section>
  )
}

export default SobreNosotros
