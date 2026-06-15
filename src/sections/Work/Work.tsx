import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { ProjectCard } from "./ProjectCard"
import { projects } from "./work.data"

export function Work() {
  const reduced = useReducedMotion()

  return (
    <section
      id="work"
      className="relative py-24 md:py-32 px-6 md:px-12"
    >
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm uppercase tracking-[0.3em] text-accent mb-4"
        >
          Selected work
        </motion.p>

        <motion.h2
          initial={reduced ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-5xl font-bold text-fg mb-12 max-w-3xl leading-tight"
        >
          Recent projects.
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              reduced={reduced}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
