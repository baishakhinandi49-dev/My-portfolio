import "./HeroCluster.css"

const DISC_COUNT = 8
const BRIGHT_INDEX = 4

export function HeroCluster() {
  return (
    <div className="hero-cluster" aria-hidden="true">
      <svg viewBox="-100 -100 200 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="disc-glass-cool" cx="38%" cy="32%" r="62%">
            <stop offset="0%"   stopColor="rgb(255 255 255)" stopOpacity="0.55" />
            <stop offset="22%"  stopColor="rgb(var(--accent))" stopOpacity="0.9" />
            <stop offset="65%"  stopColor="rgb(var(--accent-strong))" stopOpacity="0.55" />
            <stop offset="100%" stopColor="rgb(var(--accent-strong))" stopOpacity="0.15" />
          </radialGradient>

          <radialGradient id="disc-glass-bright" cx="38%" cy="32%" r="62%">
            <stop offset="0%"   stopColor="rgb(255 255 255)" stopOpacity="0.98" />
            <stop offset="32%"  stopColor="rgb(var(--accent))" stopOpacity="0.85" />
            <stop offset="78%"  stopColor="rgb(var(--accent-strong))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(var(--accent-strong))" stopOpacity="0.2" />
          </radialGradient>
        </defs>

        <g className="hero-cluster__ring">
          {Array.from({ length: DISC_COUNT }, (_, i) => {
            const angle = (360 / DISC_COUNT) * i
            const fill =
              i === BRIGHT_INDEX
                ? "url(#disc-glass-bright)"
                : "url(#disc-glass-cool)"
            return (
              <g key={i} transform={`rotate(${angle}) translate(0 -42)`}>
                <ellipse
                  cx="0"
                  cy="0"
                  rx="35"
                  ry="22"
                  transform="rotate(-12)"
                  fill={fill}
                />
              </g>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
