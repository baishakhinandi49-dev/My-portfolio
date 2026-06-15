import { useEffect, useState } from "react"

interface Options {
  speedMs?: number
  enabled?: boolean
  startDelayMs?: number
}

export function useTypewriter(target: string, opts: Options = {}) {
  const { speedMs = 110, enabled = true, startDelayMs = 0 } = opts
  const [n, setN] = useState(enabled ? 0 : target.length)

  useEffect(() => {
    if (!enabled) {
      setN(target.length)
      return
    }
    if (n >= target.length) return

    const delay = n === 0 ? startDelayMs : speedMs
    const id = window.setTimeout(() => setN(n + 1), delay)
    return () => window.clearTimeout(id)
  }, [n, target, speedMs, enabled, startDelayMs])

  return {
    typed: target.slice(0, n),
    done: n >= target.length,
  }
}
