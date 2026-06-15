import { useState } from "react"
import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { GlassPanel } from "@/components/GlassPanel/GlassPanel"
import "./Contact.css"

const EMAIL = "hello@baishakhi.design"

interface Social {
  label: string
  href: string
  icon: "dribbble" | "behance" | "linkedin"
}

const socials: Social[] = [
  { label: "Dribbble", href: "https://dribbble.com",  icon: "dribbble" },
  { label: "Behance",  href: "https://behance.net",   icon: "behance" },
  { label: "LinkedIn", href: "https://linkedin.com",  icon: "linkedin" },
]

function Envelope() {
  return (
    <svg
      className="contact__envelope"
      viewBox="0 0 72 72"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="8" y="18" width="56" height="40" rx="4" />
      <path className="contact__envelope-flap" d="M8 22l28 20 28-20" />
      <circle className="contact__envelope-spark" cx="58" cy="20" r="2.5" stroke="none" />
    </svg>
  )
}

function SocialIcon({ kind }: { kind: Social["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }
  if (kind === "dribbble") {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 3.5c4 4 6.5 9 7 16M3.5 10c6 0 11-1 15.5-5M3 14.5c5-2 11-2 16.5 1.5" />
      </svg>
    )
  }
  if (kind === "behance") {
    return (
      <svg {...common}>
        <path d="M3 6h5a3 3 0 010 6H3V6zM3 12h6a3 3 0 010 6H3v-6zM14 14h7a3 3 0 00-6-3 3 3 0 00-1 5z" />
        <path d="M15 7h4" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="8" y1="10" x2="8" y2="17" />
      <circle cx="8" cy="7" r="0.5" stroke="currentColor" fill="currentColor" />
      <path d="M12 17v-4a2 2 0 014 0v4M12 13v4" />
    </svg>
  )
}

export function Contact() {
  const reduced = useReducedMotion()
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch (_) {
      window.location.href = `mailto:${EMAIL}`
    }
  }

  const reveal = {
    initial: reduced ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }

  return (
    <section id="contact" className="contact relative py-24 md:py-32 px-6 md:px-12">
      <div className="contact__backdrop" aria-hidden="true" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.p
          {...reveal}
          className="text-sm uppercase tracking-[0.3em] text-accent mb-4"
        >
          Contact
        </motion.p>

        <motion.h2
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-fg mb-6 leading-tight tracking-tight"
        >
          Have a project in mind?
        </motion.h2>

        <motion.p
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.2 }}
          className="text-lg text-fg-muted mb-12 max-w-2xl mx-auto"
        >
          Currently taking on selective design work for 2026. The fastest way
          to reach me is email.
        </motion.p>

        <motion.div
          {...reveal}
          transition={{ ...reveal.transition, delay: 0.3 }}
        >
          <GlassPanel className="p-8 md:p-12">
            <Envelope />

            <button
              type="button"
              onClick={copyEmail}
              className="contact__email text-2xl md:text-3xl font-semibold text-accent hover:text-accent-strong transition-colors mb-8"
              aria-label={`Copy email address ${EMAIL} to clipboard`}
            >
              <span
                className={`contact__email-copied ${copied ? "contact__email-copied--visible" : ""}`}
                role="status"
                aria-live="polite"
              >
                {copied ? "Copied" : ""}
              </span>
              {EMAIL}
            </button>

            <ul className="contact__socials">
              {socials.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="contact__social"
                  >
                    <SocialIcon kind={s.icon} />
                  </a>
                </li>
              ))}
            </ul>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  )
}
