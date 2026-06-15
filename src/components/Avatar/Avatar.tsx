import "./Avatar.css"

interface AvatarProps {
  initial?: string
  size?: number
  imageUrl?: string
  alt?: string
}

export function Avatar({
  initial = "B",
  size = 280,
  imageUrl,
  alt = "Portrait",
}: AvatarProps) {
  return (
    <div
      className="avatar"
      style={{ width: size, height: size }}
      aria-hidden={imageUrl ? undefined : "true"}
    >
      <div className="avatar__glow" />
      <div className="avatar__ring" />
      <div className="avatar__ring avatar__ring--reverse" />

      <div className="avatar__orbit avatar__orbit--outer">
        <span className="avatar__dot avatar__dot--lg" />
      </div>
      <div className="avatar__orbit avatar__orbit--inner">
        <span className="avatar__dot avatar__dot--sm" />
      </div>

      <div className="avatar__portrait glass">
        {imageUrl ? (
          <img src={imageUrl} alt={alt} className="avatar__image" />
        ) : (
          <svg
            viewBox="0 0 100 100"
            className="avatar__mark"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="avatar-mark-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgb(var(--accent))" />
                <stop offset="100%" stopColor="rgb(var(--accent-strong))" />
              </linearGradient>
            </defs>
            <text
              x="50"
              y="54"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="58"
              fontWeight="700"
              fontFamily="Inter, system-ui, sans-serif"
              fill="url(#avatar-mark-grad)"
              letterSpacing="-2"
            >
              {initial}
            </text>
          </svg>
        )}
      </div>
    </div>
  )
}
