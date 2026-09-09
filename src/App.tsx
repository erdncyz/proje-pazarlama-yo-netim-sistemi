import { useEffect } from 'react'
import { Demo } from './components/Demo'
import { Features } from './components/Features'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Panel360 } from './components/Panel360'
import { Platform } from './components/Platform'
import { ValuesStrip } from './components/ValuesStrip'
import { useReveal } from './hooks/useReveal'

export default function App() {
  useReveal()

  useEffect(() => {
    const id = window.location.hash.replace('#', '')
    if (!id) return
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' })
    }, 50)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <div className="relative min-h-screen bg-ink">
      <div className="grain" aria-hidden />
      <Nav />
      <main id="icerik">
        <Hero />
        <ValuesStrip />
        <Features />
        <Panel360 />
        <Platform />
        <Demo />
      </main>
      <Footer />
    </div>
  )
}
