import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import SizeChart from '@/components/SizeChart'
import Testimonials from '@/components/Testimonials'
import WorkedWith from '@/components/WorkedWith'
import React from 'react'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <SizeChart />
      <Testimonials />
      <FAQ />
      <WorkedWith />
      <Contact />
    </>
  )
}
