import { useEffect, useState } from "react"

type Theme = "light" | "dark"

const STORAGE_KEY = "theme"

function getInitial(): Theme {
  if (typeof document === "undefined") return "dark"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitial)

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle("dark", theme === "dark")
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch (_) {
      // localStorage blocked — in-memory only this session
    }
  }, [theme])

  return {
    theme,
    isDark: theme === "dark",
    toggle: () => setTheme(t => (t === "dark" ? "light" : "dark")),
    setTheme,
  }
}
