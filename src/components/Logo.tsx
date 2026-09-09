export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="18" cy="18" r="15" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="18" cy="18" r="8.5" stroke="currentColor" strokeWidth="0.9" opacity="0.55" />
      <path
        d="M18 3.5v6.2M18 26.3V32.5M3.5 18h6.2M26.3 18H32.5"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
    </svg>
  )
}
