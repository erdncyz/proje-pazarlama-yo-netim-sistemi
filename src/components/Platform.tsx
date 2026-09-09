import { Desktop } from '@phosphor-icons/react/Desktop'
import { DeviceMobile } from '@phosphor-icons/react/DeviceMobile'
import { DeviceTablet } from '@phosphor-icons/react/DeviceTablet'

const devices = [
  { title: 'Bilgisayar', body: 'Saha ofisi ve yönetim masası.', Icon: Desktop },
  { title: 'Tablet', body: 'Ziyaret ve sunum anında kayıt.', Icon: DeviceTablet },
  { title: 'Telefon', body: 'PWA ile ana ekrana yüklenir.', Icon: DeviceMobile },
]

export function Platform() {
  return (
    <section className="px-5 py-16 md:px-8 md:py-20">
      <div className="mx-auto max-w-6xl">
        <header className="text-center" data-reveal>
          <p className="font-display text-[11px] tracking-[0.3em] text-gold">ERİŞİM</p>
          <h2 className="mt-3 font-display text-3xl text-cream md:text-4xl">
            Ofiste, sahada, cebinizde.
          </h2>
        </header>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {devices.map((device) => (
            <article
              key={device.title}
              className="glass rounded-2xl px-6 py-8 text-center"
              data-reveal
            >
              <device.Icon size={32} weight="light" className="mx-auto text-gold" />
              <h3 className="mt-4 font-display text-xl text-cream">{device.title}</h3>
              <p className="mt-2 text-sm text-muted">{device.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
