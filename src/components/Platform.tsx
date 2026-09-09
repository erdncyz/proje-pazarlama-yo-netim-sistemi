import { Desktop } from '@phosphor-icons/react/Desktop'
import { DeviceMobile } from '@phosphor-icons/react/DeviceMobile'
import { DeviceTablet } from '@phosphor-icons/react/DeviceTablet'

const devices = [
  { title: 'Bilgisayar', body: 'Ofis masasında tam panel ve raporlama.', Icon: Desktop },
  { title: 'Tablet', body: 'Ziyaret ve sunum anında kayıt.', Icon: DeviceTablet },
  { title: 'Telefon', body: 'Ana ekrana kurulur, sahada yanınızda.', Icon: DeviceMobile },
]

export function Platform() {
  return (
    <section id="platform" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl" data-reveal>
          <p className="label text-brass">Erişim</p>
          <h2 className="mt-4 font-display text-3xl leading-[1.1] tracking-[-0.015em] text-ink md:text-[2.75rem]">
            Ofiste, sahada, cebinizde.
          </h2>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {devices.map((device) => (
            <article key={device.title} className="card p-7" data-reveal>
              <device.Icon size={26} weight="light" className="text-brass" />
              <h3 className="mt-5 font-display text-2xl tracking-[-0.01em] text-ink">
                {device.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{device.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
