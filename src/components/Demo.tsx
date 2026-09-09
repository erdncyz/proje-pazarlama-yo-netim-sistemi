import { Check } from '@phosphor-icons/react/Check'
import { Copy } from '@phosphor-icons/react/Copy'
import { useState } from 'react'
import { DEMO_ACCOUNTS } from '../config'
import { DemoButton } from './DemoButton'

export function Demo() {
  return (
    <section id="demo" className="px-5 pb-20 md:px-8 md:pb-28">
      <div className="mx-auto max-w-4xl">
        <header className="text-center" data-reveal>
          <p className="label text-brass">Canlı demo</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-[-0.015em] text-ink md:text-[2.75rem]">
            Sistemi kendiniz deneyin.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Aşağıdaki hesaplarla giriş yapın. Admin tüm panelleri, personel kendi kayıtlarını
            görür.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {DEMO_ACCOUNTS.map((account) => (
            <article key={account.role} className="card p-6" data-reveal>
              <div className="flex items-baseline justify-between gap-3">
                <p className="label text-brass">{account.role}</p>
              </div>
              <p className="mt-2 text-sm text-muted">{account.note}</p>
              <dl className="mt-5 space-y-2.5">
                <CopyRow label="E-posta" value={account.email} />
                <CopyRow label="Şifre" value={account.password} />
              </dl>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center" data-reveal>
          <DemoButton className="min-w-56" external>
            Demoyu aç
          </DemoButton>
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
    <div className="flex items-center justify-between gap-3 rounded-xl border border-line bg-[#FAF9F6] px-3 py-2.5">
      <div className="min-w-0">
        <dt className="label text-[9px] text-muted">{label}</dt>
        <dd className="mt-0.5 truncate font-mono text-sm text-ink">{value}</dd>
      </div>
      <button
        type="button"
        className="inline-flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-line bg-surface text-ink-2 transition-colors duration-200 hover:border-brass-mid hover:text-brass"
        onClick={copy}
        aria-label={`${label} kopyala`}
      >
        {copied ? <Check size={16} weight="bold" /> : <Copy size={16} />}
      </button>
    </div>
  )
}
