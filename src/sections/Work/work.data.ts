export interface Project {
  id: string
  title: string
  category: string
  description: string
  year: number
  href?: string
  accent?: string
}

export const projects: Project[] = [
  {
    id: "fintrack",
    title: "Fintrack",
    category: "Mobile · Finance",
    description:
      "Personal finance tracker rebuilt around weekly review rituals instead of dashboards.",
    year: 2025,
    accent: "rgb(34 211 238)",
  },
  {
    id: "orbit",
    title: "Orbit CRM",
    category: "SaaS · B2B",
    description:
      "CRM redesign that cut average task time from 4 minutes to 38 seconds across the top five flows.",
    year: 2024,
    accent: "rgb(168 85 247)",
  },
  {
    id: "salt",
    title: "Salt & Story",
    category: "E-commerce",
    description:
      "Direct-to-consumer storefront and editorial system for an independent food brand.",
    year: 2024,
    accent: "rgb(236 72 153)",
  },
  {
    id: "lumen",
    title: "Lumen",
    category: "Health · Mobile",
    description:
      "Sleep companion app with a clinician-reviewed onboarding and a minimal night-mode UI.",
    year: 2023,
    accent: "rgb(52 211 153)",
  },
]
