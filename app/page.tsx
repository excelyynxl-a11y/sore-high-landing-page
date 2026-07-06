import About from '@/components/About'
import Contact from '@/components/Contact'
import FAQ from '@/components/FAQ'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import SizeChart from '@/components/SizeChart'
import React from 'react'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <SizeChart />
      <FAQ />
      <Contact />
    </>
  )
}
