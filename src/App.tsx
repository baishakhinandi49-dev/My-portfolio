import { ThemeToggle } from "@/components/ThemeToggle/ThemeToggle"
import { Hero } from "@/sections/Hero/Hero"
import { About } from "@/sections/About/About"
import { Work } from "@/sections/Work/Work"
import { Contact } from "@/sections/Contact/Contact"

export function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent focus:text-bg focus:rounded-md"
      >
        Skip to content
      </a>

      <header className="fixed top-0 inset-x-0 z-40 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
          <a href="#hero" className="text-fg font-semibold tracking-tight">
            Baishakhi
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-fg-muted">
            <a href="#about" className="hover:text-fg transition-colors">About</a>
            <a href="#work" className="hover:text-fg transition-colors">Work</a>
            <a href="#contact" className="hover:text-fg transition-colors">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        <Hero />
        <About />
        <Work />
        <Contact />
      </main>

      <footer className="py-12 px-6 text-center text-sm text-fg-subtle">
        Designed and built with care.
      </footer>
    </>
  )
}
