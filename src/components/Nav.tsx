import { List } from '@phosphor-icons/react/List'
import { X } from '@phosphor-icons/react/X'
import { useState } from 'react'
import { DemoButton } from './DemoButton'
import { Logo, Wordmark } from './Logo'

const links = [
  { href: '#ozellikler', label: 'Özellikler' },
  { href: '#panel-360', label: 'Firma 360°' },
  { href: '#platform', label: 'Erişim' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-blur sticky top-0 z-30">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-canvas"
      >
        İçeriğe geç
      </a>

      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <a
          href="#ust"
          className="flex min-w-0 items-center gap-2.5"
          aria-label="Proje Pazarlama Yönetim Sistemi"
        >
          <Logo className="h-7 w-7 shrink-0 text-brass-mid" />
          <Wordmark />
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Sayfa">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-2 transition-colors duration-200 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <DemoButton className="min-h-10 px-4 text-sm" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-lg border border-line-strong bg-surface text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-t border-line px-5 py-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobil">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2.5 text-ink-2"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <DemoButton className="mt-3 w-full" onClick={() => setOpen(false)} />
          </nav>
        </div>
      ) : null}
    </header>
  )
}
