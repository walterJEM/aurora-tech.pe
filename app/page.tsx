'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Servicios from '@/components/servicios'
import SobreNosotros from '@/components/sobre-nosotros'
import Portafolio from '@/components/portafolio'
import Testimonios from '@/components/testimonios'
import Contacto from '@/components/contacto'
import Footer from '@/components/footer'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => setIsLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block w-8 h-8 border-2 border-cyan-400 border-t-transparent rounded-full"
          />
        </motion.div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-slate-950"
    >
      <Navbar />
      <Hero />
      <Servicios />
      <SobreNosotros />
      <Portafolio />
      <Testimonios />
      <Contacto />
      <Footer />
    </motion.div>
  )
}
