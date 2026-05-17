'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useState } from 'react'

const Portafolio = () => {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const projects = [
    {
      id: 1,
      title: 'Sistema de Gestión ERP',
      category: 'Software',
      description: 'Plataforma integral de ERP para empresa manufacturera con módulos de inventario, finanzas y logística.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      id: 2,
      title: 'Auditoría IT',
      category: 'Consultoría',
      description: 'Análisis completo de infraestructura IT, identificación de vulnerabilidades y plan de mejora.',
      color: 'from-purple-400 to-purple-600',
    },
    {
      id: 3,
      title: 'Transformación Digital',
      category: 'Gestión',
      description: 'Consultoría estratégica para modernización de procesos y adopción de tecnología cloud.',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      id: 4,
      title: 'App Móvil de Comercio',
      category: 'Software',
      description: 'Aplicación mobile para e-commerce con carrito dinámico, pagos integrados y analytics.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      id: 5,
      title: 'Infraestructura Cloud',
      category: 'Consultoría',
      description: 'Diseño e implementación de arquitectura cloud segura y escalable en AWS.',
      color: 'from-orange-400 to-red-500',
    },
    {
      id: 6,
      title: 'Optimización de Procesos',
      category: 'Gestión',
      description: 'Reingeniería de procesos empresariales con reducción de costos del 35%.',
      color: 'from-indigo-400 to-indigo-600',
    },
  ]

  const filters = ['Todos', 'Software', 'Consultoría', 'Gestión']

  const filteredProjects =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="portafolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nuestro <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Portafolio</span>
          </h2>
          <p className="text-slate-400 text-lg">Proyectos que demuestran nuestra expertise</p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950'
                  : 'bg-slate-900/50 text-slate-300 border border-slate-700/50 hover:border-cyan-400/50'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient border */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} p-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300`}
              />

              {/* Card */}
              <div className="relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 group-hover:border-transparent transition-all h-full flex flex-col">
                {/* Category Tag */}
                <div className={`inline-block w-fit mb-4`}>
                  <span
                    className={`px-3 py-1 bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold text-sm border border-slate-700/50 rounded-full`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-6">
                  {project.description}
                </p>

                {/* Link */}
                <motion.button
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 text-cyan-400 font-semibold text-sm"
                >
                  Ver más
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Portafolio
