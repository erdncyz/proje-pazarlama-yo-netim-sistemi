export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="14.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="18" cy="18" r="7.5" stroke="currentColor" strokeWidth="1" opacity="0.45" />
      <path
        d="M18 3.5v5.4M18 27.1v5.4M3.5 18h5.4M27.1 18h5.4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="18" cy="18" r="2.2" fill="currentColor" />
    </svg>
  )
}

export function Wordmark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 flex-col leading-[1.1]">
      <span
        className={`font-medium tracking-[-0.01em] text-ink ${
          compact ? 'text-[13px]' : 'text-sm'
        }`}
      >
        Proje Pazarlama
      </span>
      <span className="label text-[9px] text-brass">Yönetim Sistemi</span>
    </span>
  )
}
