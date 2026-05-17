'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Building2 } from 'lucide-react'
import { useState } from 'react'

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setFormData({
      nombre: '',
      empresa: '',
      email: '',
      telefono: '',
      servicio: '',
      mensaje: '',
    })
  }

  const contactInfo = [
    {
      icon: MapPin,
      label: 'Dirección',
      value: 'Cal. Verástegui 160, Zona C, San Juan de Miraflores, Lima, Perú',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Building2,
      label: 'RUC',
      value: '20615864804',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'contacto@auroratech.pe',
      color: 'from-emerald-400 to-teal-500',
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '+51 (1) XXXX-XXXX',
      color: 'from-pink-400 to-rose-500',
    },
  ]

  return (
    <section
      id="contacto"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative overflow-hidden"
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
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
            Ponte en <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">Contacto</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Cuéntanos sobre tu proyecto y te ayudaremos a hacerlo realidad
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-gradient-to-br from-cyan-400/20 to-blue-500/20 p-0.5 rounded-2xl">
              <form
                onSubmit={handleSubmit}
                className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 group-hover:border-cyan-400/50 transition-all space-y-6"
              >
                {/* Nombre */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:border-cyan-400/50 focus:outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </motion.div>

                {/* Empresa */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    name="empresa"
                    value={formData.empresa}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:border-cyan-400/50 focus:outline-none transition-all"
                    placeholder="Tu empresa"
                  />
                </motion.div>

                {/* Email y Teléfono */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:border-cyan-400/50 focus:outline-none transition-all"
                      placeholder="tu@email.com"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.35 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-sm font-semibold text-slate-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:border-cyan-400/50 focus:outline-none transition-all"
                      placeholder="+51 (1) XXX-XXXX"
                    />
                  </motion.div>
                </div>

                {/* Servicio */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:border-cyan-400/50 focus:outline-none transition-all"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="programacion">Programación Informática</option>
                    <option value="consultoria-it">Consultoría de Informática</option>
                    <option value="consultoria-gestion">Consultoría de Gestión</option>
                    <option value="otros">Otros</option>
                  </select>
                </motion.div>

                {/* Mensaje */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.45 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700/50 text-white rounded-lg focus:border-cyan-400/50 focus:outline-none transition-all resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-400/50 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="flex gap-4"
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-400">{item.label}</p>
                    <p className="text-white font-semibold">{item.value}</p>
                  </div>
                </motion.div>
              )
            })}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-8 bg-slate-900/50 border border-slate-700/50 rounded-2xl p-6 text-center"
            >
              <div className="aspect-video bg-slate-800/50 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-slate-600 mx-auto mb-2" />
                  <p className="text-slate-400 text-sm">
                    Google Maps - San Juan de Miraflores, Lima
                  </p>
                </div>
              </div>
              <p className="text-slate-400 text-sm">
                Ubicación: Cal. Verástegui 160, Zona C, San Juan de Miraflores
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contacto
