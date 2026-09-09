const values = [
  { title: 'Daha düzenli', body: 'Her kayıt tek yerde, künye otomatik.' },
  { title: 'Daha hızlı', body: 'Teklif, rezervasyon ve rapor dakikalar içinde.' },
  { title: 'Daha profesyonel', body: 'Müşteriye ve yönetime net çıktı.' },
]

export function ValuesStrip() {
  return (
    <section className="px-5 py-10 md:px-8" aria-label="Değerler">
      <div className="mx-auto max-w-6xl">
        <div className="hairline" />
        <ul className="grid gap-8 py-10 sm:grid-cols-3 sm:gap-6">
          {values.map((value, index) => (
            <li key={value.title} data-reveal>
              <p className="label text-brass">{String(index + 1).padStart(2, '0')}</p>
              <p className="mt-3 font-display text-2xl tracking-[-0.01em] text-ink">
                {value.title}
              </p>
              <p className="mt-1.5 text-sm text-muted">{value.body}</p>
            </li>
          ))}
        </ul>
        <div className="hairline" />
      </div>
    </section>
  )
}
