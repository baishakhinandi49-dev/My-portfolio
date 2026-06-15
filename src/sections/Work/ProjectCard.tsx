import { motion } from "framer-motion"
import type { Project } from "./work.data"
import "./Work.css"

interface ProjectCardProps {
  project: Project
  index: number
  reduced: boolean
}

const CornerBracket = ({ variant }: { variant: "tl" | "br" }) => (
  <svg
    className={`project-card__corner project-card__corner--${variant}`}
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    aria-hidden="true"
  >
    {variant === "tl" ? (
      <path d="M1 6V1h5" />
    ) : (
      <path d="M13 8v5H8" />
    )}
  </svg>
)

export function ProjectCard({ project, index, reduced }: ProjectCardProps) {
  const accent = project.accent ?? "rgb(34 211 238)"
  const badge = String(index + 1).padStart(2, "0")

  return (
    <motion.article
      className="project-card group relative glass rounded-2xl p-8 md:p-10 overflow-hidden"
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.6,
        delay: reduced ? 0 : index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={reduced ? undefined : { y: -4 }}
    >
      <div
        className="project-card__glow absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: accent, filter: "blur(80px)" }}
        aria-hidden="true"
      />
      <div
        className="project-card__glow-2"
        style={{ background: accent }}
        aria-hidden="true"
      />

      <div className="project-card__ring fx-ring-rect" aria-hidden="true" />

      <CornerBracket variant="tl" />
      <CornerBracket variant="br" />

      <span className="project-card__badge">{badge}</span>

      <div className="relative z-10">
        <div className="flex items-baseline justify-between gap-4 mb-6">
          <span className="text-xs uppercase tracking-[0.25em] text-fg-subtle">
            {project.category}
          </span>
          <span className="text-xs text-fg-subtle">{project.year}</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-bold text-fg mb-3 tracking-tight">
          {project.title}
        </h3>

        <p className="text-fg-muted leading-relaxed">{project.description}</p>

        {project.href && (
          <a
            href={project.href}
            className="project-card__link mt-6 text-accent font-medium"
          >
            View case study
            <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}
