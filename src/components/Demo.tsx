import { Check } from '@phosphor-icons/react/Check'
import { Copy } from '@phosphor-icons/react/Copy'
import { useState } from 'react'
import { DEMO_ACCOUNTS } from '../config'
import { DemoButton } from './DemoButton'

export function Demo() {
  return (
    <section id="demo" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-4xl">
        <header className="text-center" data-reveal>
          <p className="font-display text-[11px] tracking-[0.3em] text-gold">CANLI DEMO</p>
          <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
            Sistemi şimdi açın.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Fiyat yok — ürünü demo hesaplarla deneyin. Admin tüm panelleri, personel kendi
            kayıtlarını görür.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {DEMO_ACCOUNTS.map((account) => (
            <article key={account.role} className="glass rounded-2xl p-6" data-reveal>
              <p className="font-display text-xs tracking-[0.24em] text-gold uppercase">
                {account.role}
              </p>
              <p className="mt-2 text-sm text-muted">{account.note}</p>
              <dl className="mt-5 space-y-3">
                <CopyRow label="E-posta" value={account.email} />
                <CopyRow label="Şifre" value={account.password} />
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center" data-reveal>
          <DemoButton className="min-w-56" external />
        </div>
      </div>
    </section>
  )
}

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-ink/50 px-3 py-2.5">
      <div className="min-w-0">
        <dt className="text-[10px] tracking-[0.18em] text-muted uppercase">{label}</dt>
        <dd className="truncate font-medium text-cream">{value}</dd>
      </div>
      <button
        type="button"
        className="copy-chip inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-full text-gold"
        onClick={copy}
        aria-label={`${label} kopyala`}
      >
        {copied ? <Check size={16} weight="bold" /> : <Copy size={16} weight="light" />}
      </button>
    </div>
  )
}
