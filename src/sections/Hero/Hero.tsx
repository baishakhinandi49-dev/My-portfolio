import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useTypewriter } from "@/hooks/useTypewriter"
import { HeroBackdrop } from "./HeroBackdrop"
import { HeroCluster } from "./HeroCluster"
import "./Hero.css"

const TYPED_WORD = "intent."

function TypedIntent({ reduced }: { reduced: boolean }) {
  const { typed, done } = useTypewriter(TYPED_WORD, {
    enabled: !reduced,
    speedMs: 110,
    startDelayMs: 600,
  })

  return (
    <>
      <span className="sr-only">{TYPED_WORD}</span>
      <span aria-hidden="true">
        {done ? (
          <>
            intent
            <span className="hero__blink">.</span>
          </>
        ) : (
          <>
            {typed}
            <span className="hero__caret" />
          </>
        )}
      </span>
    </>
  )
}

export function Hero() {
  const reduced = useReducedMotion()

  const enter = (delay = 0) => ({
    initial: reduced ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
  })

  return (
    <section
      id="hero"
      className="hero relative min-h-screen flex items-center overflow-hidden px-6 md:px-12"
    >
      <HeroBackdrop />

      <div className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="hero__content text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
          <motion.div {...enter(0)} className="mb-6 flex justify-center lg:justify-start">
            <span className="hero__pill">
              <span className="hero__pill-dot" aria-hidden="true" />
              Available for work · 2026
            </span>
          </motion.div>

          <motion.h1
            {...enter(0.1)}
            className="hero__title text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-bold text-fg leading-[1.05] tracking-tight"
          >
            Baishakhi
            <span className="hero__title-mark block text-accent">
              designs with <TypedIntent reduced={reduced} />
            </span>
          </motion.h1>

          <motion.p
            {...enter(0.2)}
            className="hero__lede mt-8 text-lg md:text-xl text-fg-muted max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Interfaces that feel obvious in retrospect. Products people return to
            because they trust them. Selected work below.
          </motion.p>

          <motion.div
            {...enter(0.3)}
            className="hero__actions mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#work"
              className="px-7 py-3 rounded-full bg-accent text-bg font-medium hover:bg-accent-strong transition-colors glow-accent"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="px-7 py-3 rounded-full border border-border/20 text-fg hover:border-border/40 transition-colors"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        <motion.div
          {...enter(0.15)}
          className="hero__cluster-wrap flex justify-center lg:justify-end"
        >
          <HeroCluster />
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="hero__scroll absolute bottom-8 left-1/2 -translate-x-1/2 text-fg-muted hover:text-fg transition-colors"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </a>
    </section>
  )
}
