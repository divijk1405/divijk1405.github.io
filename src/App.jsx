import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Creative from './components/Creative'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Cursor />
      <div className="bg-bg text-text min-h-screen antialiased">
        <Nav />
        <main>
          <Hero />
          {/* Subtle section divider */}
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <About />
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <Projects />
          <div className="max-w-[1200px] mx-auto px-6 lg:px-10">
            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          <Creative />
        </main>
        <Footer />
      </div>
    </>
  )
}
