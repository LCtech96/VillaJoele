import Hero from '@/components/Hero'
import Intro from '@/components/Intro'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Intro />
      </main>
      <Footer />
    </>
  )
}

