import { useTheme } from "@/hooks/useTheme"
import "./ThemeToggle.css"

export function ThemeToggle() {
  const { isDark, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
      aria-pressed={isDark}
      className="theme-toggle relative w-14 h-8 rounded-full border border-border/15 bg-surface/40 backdrop-blur transition-colors hover:border-border/25"
    >
      <span
        className={`theme-toggle__thumb absolute top-1 left-1 w-6 h-6 rounded-full bg-accent transition-transform duration-300 ease-out-soft ${
          isDark ? "translate-x-6" : "translate-x-0"
        }`}
        aria-hidden="true"
      />
      <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
        ☀
      </span>
      <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
        ☾
      </span>
    </button>
  )
}
