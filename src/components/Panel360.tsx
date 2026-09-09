const pillars = [
  {
    title: 'Satış paneli',
    body: 'Daire, müşteri, acente, tutar ve durum tek kayıtta durur.',
  },
  {
    title: 'Hak edilen primler',
    body: 'Personel ve acente payları satışa bağlı hesaplanır.',
  },
  {
    title: 'Dağıtılan primler',
    body: 'Gerçekleşen ödeme ve fatura hareketleri izlenir.',
  },
  {
    title: 'Raporlar',
    body: 'Komisyon cirosu, net/brüt özet ve seçili kayıt çıktısı.',
  },
]

export function Panel360() {
  return (
    <section id="panel-360" className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,163,106,0.12),transparent_62%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div data-reveal>
          <p className="font-display text-[11px] tracking-[0.3em] text-gold">ADMİN</p>
          <p className="mt-4 font-display text-7xl leading-none text-gold md:text-8xl">360°</p>
          <h2 className="mt-4 font-display text-3xl text-cream md:text-4xl">
            Tüm bilgi, tek ekran.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Firma 360° paneli satış, komisyon ve prim yönetimini bir araya getirir. Admin
            tek bakışta kontrolü kaybetmez.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2" data-reveal>
          {pillars.map((item) => (
            <article key={item.title} className="glass rounded-2xl p-5">
              <h3 className="font-display text-lg text-cream">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
