import Hero from '@/components/sections/Hero'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Portfolio from '@/components/sections/Portfolio'
import Pricing from '@/components/sections/Pricing'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
    </>
  )
}
