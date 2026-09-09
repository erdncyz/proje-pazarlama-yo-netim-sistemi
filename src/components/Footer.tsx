import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="px-5 pb-10 pt-6 md:px-8">
      <div className="hairline mb-10" />
      <div className="mx-auto max-w-6xl text-center">
        <p className="font-script text-4xl text-gold md:text-5xl">
          Projelerinizi Daha İleri Taşıyın
        </p>
        <div className="mt-8 flex items-center justify-center gap-2.5 text-gold">
          <Logo className="h-6 w-6 shrink-0" />
          <span className="flex flex-col text-left leading-[1.15]">
            <span className="font-display text-[11px] tracking-[0.12em] text-cream uppercase">
              Proje Pazarlama
            </span>
            <span className="font-display text-[9px] tracking-[0.16em] uppercase">
              Yönetim Sistemi
            </span>
          </span>
        </div>
        <p className="mt-6 text-sm text-muted">
          Developed by <span className="text-cream">Erdinç Yılmaz</span>
        </p>
      </div>
    </footer>
  )
}
