import { useState } from 'react'
import { List } from '@phosphor-icons/react/List'
import { X } from '@phosphor-icons/react/X'
import { DemoButton } from './DemoButton'
import { Logo } from './Logo'

const links = [
  { href: '#ozellikler', label: 'Özellikler' },
  { href: '#panel-360', label: '360°' },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-blur sticky top-0 z-30">
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        İçeriğe geç
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <a
          href="#ust"
          className="flex min-w-0 items-center gap-2.5 text-gold"
          aria-label="Proje Pazarlama Yönetim Sistemi"
        >
          <Logo className="h-8 w-8 shrink-0" />
          <span className="flex min-w-0 flex-col leading-[1.15]">
            <span className="font-display text-[11px] font-semibold tracking-[0.12em] text-cream uppercase sm:text-xs">
              Proje Pazarlama
            </span>
            <span className="font-display text-[9px] tracking-[0.16em] text-gold uppercase sm:text-[10px]">
              Yönetim Sistemi
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Sayfa">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-muted transition-colors duration-200 hover:text-cream"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <DemoButton className="min-h-11 px-5 py-2 text-sm" />
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-gold/40 text-gold md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <List size={18} />}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-3" aria-label="Mobil">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-cream"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <DemoButton className="mt-2 w-full" onClick={() => setOpen(false)} />
          </nav>
        </div>
      ) : null}
    </header>
  )
}
