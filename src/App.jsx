import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent)]" aria-hidden></div>

      <main className="relative">
        <Hero />
        <Features />
        <CTA />
        <Footer />
      </main>
    </div>
  )
}

export default App
