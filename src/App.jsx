import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Ubicacion from './components/Ubicacion';


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Ubicacion/>
      </main>
      <Footer />
    </div>
  )
}

export default App