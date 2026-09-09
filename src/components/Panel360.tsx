import { DemoButton } from './DemoButton'

const pillars = [
  { title: 'Satış paneli', body: 'Daire, müşteri, acente, tutar ve durum tek kayıtta durur.' },
  { title: 'Hak edilen primler', body: 'Personel ve acente payları satışa bağlı hesaplanır.' },
  { title: 'Dağıtılan primler', body: 'Gerçekleşen ödeme ve fatura hareketleri izlenir.' },
  { title: 'Raporlar', body: 'Komisyon cirosu, net ve brüt özet, seçili kayıt çıktısı.' },
]

export function Panel360() {
  return (
    <section id="panel-360" className="px-5 py-8 md:px-8 md:py-14">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-espresso px-6 py-14 md:px-14 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_15%_0%,rgba(198,154,88,0.22),transparent_62%)]"
            aria-hidden
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div data-reveal>
              <p className="label text-brass-bright">Admin paneli</p>
              <p className="mt-5 font-display text-[4.5rem] leading-none text-brass-bright md:text-[6rem]">
                360°
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-[-0.01em] text-white md:text-4xl">
                Tüm bilgi, tek ekran.
              </h2>
              <p className="mt-4 max-w-md text-white/60">
                Firma 360° paneli satış, komisyon ve prim yönetimini bir araya getirir. Admin
                tek bakışta kontrolü kaybetmez.
              </p>
              <DemoButton variant="brass" className="mt-8" />
            </div>

            <div className="grid gap-3 sm:grid-cols-2" data-reveal>
              {pillars.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm"
                >
                  <h3 className="font-display text-xl text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
