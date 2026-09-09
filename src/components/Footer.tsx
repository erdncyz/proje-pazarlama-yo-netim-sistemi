import { Logo, Wordmark } from './Logo'

export function Footer() {
  return (
    <footer className="px-5 pb-12 md:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="hairline" />
        <div className="pt-12 text-center">
          <p className="font-display text-3xl italic tracking-[-0.01em] text-ink md:text-4xl">
            Projelerinizi daha ileri taşıyın.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 border-t border-line pt-8 sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-2.5">
              <Logo className="h-6 w-6 text-brass-mid" />
              <Wordmark compact />
            </div>
            <p className="text-sm text-muted">
              Developed by <span className="text-ink">Erdinç Yılmaz</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
