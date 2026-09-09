import { DemoButton } from './DemoButton'
import { DeviceStage } from './DeviceStage'

const proof = ['Admin ve personel rolleri', 'TR / EN', 'Telefona kurulabilir']

export function Hero() {
  return (
    <section id="ust" className="relative overflow-x-clip px-5 pt-16 pb-6 md:px-8 md:pt-24">
      <div className="ambient" aria-hidden />

      <div className="relative mx-auto max-w-3xl text-center">
        <p className="label text-brass" data-reveal>
          Daha fazla satış, daha fazla başarı
        </p>

        <h1
          className="mt-6 font-display text-[2.6rem] leading-[1.04] tracking-[-0.02em] text-ink sm:text-6xl md:text-[4.5rem]"
          data-reveal
        >
          Proje pazarlamasının tamamı,{' '}
          <em className="italic text-brass">tek panelde</em>.
        </h1>

        <p
          className="mx-auto mt-7 max-w-xl text-[1.0625rem] leading-relaxed text-muted md:text-lg"
          data-reveal
        >
          Satış, acente, komisyon, sözleşme ve tapu süreçleri aynı yerde ilerler. Tüm
          süreçler tek platformda, kontrol hep sizde.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-3" data-reveal>
          <DemoButton />
          <a href="#ozellikler" className="btn btn-secondary">
            Özellikleri gör
          </a>
        </div>

        <ul
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          data-reveal
        >
          {proof.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[13px] text-muted">
              <span className="h-1 w-1 rounded-full bg-brass-mid" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>

      <DeviceStage />
    </section>
  )
}
