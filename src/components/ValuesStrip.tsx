export function ValuesStrip() {
  const values = ['Daha düzenli', 'Daha hızlı', 'Daha profesyonel']

  return (
    <section className="px-5 py-10 md:px-8" aria-label="Değerler">
      <div className="hairline mb-8" />
      <ul
        className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-10"
        data-reveal
      >
        {values.map((value, index) => (
          <li key={value} className="flex items-center gap-10">
            <span className="font-display text-[11px] tracking-[0.28em] text-gold uppercase">
              {value}
            </span>
            {index < values.length - 1 ? (
              <span className="hidden h-3 w-px bg-gold/35 sm:block" aria-hidden />
            ) : null}
          </li>
        ))}
      </ul>
      <div className="hairline mt-8" />
    </section>
  )
}
