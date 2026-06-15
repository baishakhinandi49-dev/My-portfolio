import type { ReactNode, HTMLAttributes } from "react"

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  as?: "div" | "section" | "article"
  className?: string
}

export function GlassPanel({
  children,
  as: Tag = "div",
  className = "",
  ...rest
}: GlassPanelProps) {
  return (
    <Tag className={`glass rounded-2xl ${className}`} {...rest}>
      {children}
    </Tag>
  )
}
