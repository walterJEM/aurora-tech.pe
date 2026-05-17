'use client'

import { motion } from 'framer-motion'
import { Linkedin, Github, Instagram } from 'lucide-react'

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const quickLinks = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'sobre-nosotros', label: 'Sobre Nosotros' },
    { id: 'portafolio', label: 'Portafolio' },
    { id: 'testimonios', label: 'Testimonios' },
    { id: 'contacto', label: 'Contacto' },
  ]

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-600/5 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-400/50">
                  AT
                </div>
                <span className="text-white font-bold text-lg">Aurora Tech</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Innovación que ilumina tu futuro
              </p>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Enlaces</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <motion.button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    whileHover={{ x: 4 }}
                    className="text-slate-400 hover:text-cyan-400 transition-colors text-sm block"
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Servicios</h4>
              <div className="space-y-2 text-sm">
                <p className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  Programación Informática
                </p>
                <p className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  Consultoría de Informática
                </p>
                <p className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer">
                  Consultoría de Gestión
                </p>
              </div>
            </motion.div>

            {/* Social & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-bold mb-4">Conecta</h4>
              <div className="flex gap-3 mb-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 bg-slate-900/50 border border-slate-700/50 rounded-lg flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  )
                })}
              </div>
              <p className="text-slate-400 text-sm">
                📧 contacto@auroratech.pe
              </p>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-slate-700/50 to-transparent mb-8"
          />

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-slate-400 text-sm">
              © 2026 Aurora Tech S.A.C. Todos los derechos reservados.
            </p>

          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
