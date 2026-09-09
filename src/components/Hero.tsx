import { DemoButton } from './DemoButton'
import { DeviceStage } from './DeviceStage'

export function Hero() {
  return (
    <section id="ust" className="relative overflow-x-hidden px-5 pb-8 pt-14 md:px-8 md:pt-20">
      <div className="ambient" aria-hidden />
      <div className="relative mx-auto max-w-6xl text-center">
        <p
          className="font-display text-[11px] tracking-[0.32em] text-gold md:text-xs"
          data-reveal
        >
          DAHA FAZLA SATIŞ, DAHA FAZLA BAŞARI
        </p>
        <div className="mx-auto mt-3 mb-8 h-px w-28 bg-linear-to-r from-transparent via-gold to-transparent" />
        <h1
          className="font-display text-[1.7rem] leading-[1.15] font-semibold tracking-[0.06em] text-cream sm:text-4xl md:text-5xl lg:text-[3.4rem]"
          data-reveal
        >
          PROJE PAZARLAMA
          <br />
          YÖNETİM SİSTEMİ
        </h1>
        <p
          className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg"
          data-reveal
        >
          Tüm süreçler tek platformda, kontrol hep sizde.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3" data-reveal>
          <DemoButton />
          <a href="#ozellikler" className="ghost-btn">
            Özellikleri gör
          </a>
        </div>
        <DeviceStage />
      </div>
    </section>
  )
}
