import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { Avatar } from "@/components/Avatar/Avatar"
import "./About.css"

interface CardSpec {
  badge: string
  title: string
  body: string
  icon: "compass" | "nodes"
}

const cards: CardSpec[] = [
  {
    badge: "01",
    title: "What I do",
    body:
      "End-to-end product design — research, IA, interaction, and the polish. Comfortable owning a single feature or shaping a whole product surface. I prototype in code when it's faster than Figma.",
    icon: "compass",
  },
  {
    badge: "02",
    title: "How I work",
    body:
      "Decisions over deliverables. Every screen earns its place by solving a specific problem. I prefer fewer, better surfaces over feature checklists.",
    icon: "nodes",
  },
]

function CardIcon({ kind }: { kind: CardSpec["icon"] }) {
  if (kind === "compass") {
    return (
      <svg
        className="about-card__icon"
        viewBox="0 0 32 32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="16" cy="16" r="12" />
        <path d="M21 11l-3 8-8 3 3-8 8-3z" />
        <circle cx="16" cy="16" r="1.5" />
      </svg>
    )
  }
  return (
    <svg
      className="about-card__icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="6" cy="8"  r="2.5" />
      <circle cx="26" cy="8" r="2.5" />
      <circle cx="16" cy="24" r="2.5" />
      <path d="M8 9l7 14M24 9l-7 14M9 8h14" />
    </svg>
  )
}

export function About() {
  const reduced = useReducedMotion()

  const reveal = {
    initial: reduced ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr] items-center gap-12 lg:gap-20 mb-16">
          <motion.div {...reveal} className="flex justify-center lg:justify-start">
            <Avatar initial="B" size={280} />
          </motion.div>

          <div>
            <motion.p
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.1 }}
              className="text-sm uppercase tracking-[0.3em] text-accent mb-4"
            >
              About
            </motion.p>

            <motion.h2
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.15 }}
              className="text-4xl md:text-5xl font-bold text-fg leading-tight tracking-tight"
            >
              A designer who treats interfaces like
              <span className="text-accent"> conversations</span>.
            </motion.h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, i) => (
            <motion.article
              key={card.badge}
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.2 + i * 0.05 }}
              className="about-card glass p-8 md:p-10 h-full overflow-hidden"
            >
              <div className="about-card__spotlight" aria-hidden="true" />
              <div className="about-card__ring fx-ring-rect" aria-hidden="true" />
              <span className="about-card__badge" aria-hidden="true">
                {card.badge}
              </span>

              <div className="relative z-10">
                <CardIcon kind={card.icon} />
                <h3 className="text-xl font-semibold text-fg mb-3">
                  {card.title}
                </h3>
                <p className="text-fg-muted leading-relaxed">{card.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
