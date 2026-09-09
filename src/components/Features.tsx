import type { Icon } from '@phosphor-icons/react'
import { Buildings } from '@phosphor-icons/react/Buildings'
import { CalendarCheck } from '@phosphor-icons/react/CalendarCheck'
import { ChartLineUp } from '@phosphor-icons/react/ChartLineUp'
import { Compass } from '@phosphor-icons/react/Compass'
import { Devices } from '@phosphor-icons/react/Devices'
import { FileArrowDown } from '@phosphor-icons/react/FileArrowDown'
import { FileText } from '@phosphor-icons/react/FileText'
import { Handshake } from '@phosphor-icons/react/Handshake'
import { IdentificationCard } from '@phosphor-icons/react/IdentificationCard'
import { Paperclip } from '@phosphor-icons/react/Paperclip'
import { Percent } from '@phosphor-icons/react/Percent'
import { PhoneCall } from '@phosphor-icons/react/PhoneCall'
import { Receipt } from '@phosphor-icons/react/Receipt'
import { ShieldCheck } from '@phosphor-icons/react/ShieldCheck'
import { Translate } from '@phosphor-icons/react/Translate'
import { TrendUp } from '@phosphor-icons/react/TrendUp'
import { UserFocus } from '@phosphor-icons/react/UserFocus'
import { UsersThree } from '@phosphor-icons/react/UsersThree'
import { Wallet } from '@phosphor-icons/react/Wallet'

type Feature = {
  title: string
  body: string
  Icon: Icon
  wide?: boolean
}

const featured: Feature[] = [
  {
    title: 'Firma 360°',
    body: 'Satış, komisyon, prim ve raporlar tek ekranda. Tüm bilgiye tek bakışta ulaşın.',
    Icon: Compass,
    wide: true,
  },
  {
    title: 'Satıştan tapuya rapor',
    body: 'Satış, sözleşme, iptal ve tapu teslimine kadar her adımı izleyin.',
    Icon: ChartLineUp,
  },
  {
    title: 'Acente takibi',
    body: 'Arama kayıtları ve bireysel ya da ekip ziyaretleri tek yerde durur.',
    Icon: Buildings,
  },
  {
    title: 'Finans ve prim',
    body: 'Ciro, kapora, yan tutarlar, fatura ve prim dağıtımı net hesaplanır.',
    Icon: TrendUp,
  },
]

const rest: Feature[] = [
  { title: 'Yetkilendirme', body: 'Admin ve personel rolleri, onaylı kayıt.', Icon: ShieldCheck },
  { title: 'Müşteri kayıt', body: 'Acenteli ve acentesiz müşteri takibi.', Icon: IdentificationCard },
  { title: 'Acente aramaları', body: 'Yetkili, telefon ve not ile arama günlüğü.', Icon: PhoneCall },
  { title: 'Ziyaretler', body: 'Bireysel veya ekip acente ziyaret kayıtları.', Icon: CalendarCheck },
  { title: 'CRM / talep formu', body: 'Aday müşteriyle ilişki ve konut talep formu.', Icon: Handshake },
  { title: 'Teklif ve ödeme planı', body: 'Nakit ve taksitli teklif oluşturma.', Icon: FileText },
  { title: 'Rezervasyon', body: 'Dijital rezervasyon formu ve süreç takibi.', Icon: CalendarCheck },
  { title: 'Komisyon yönetimi', body: 'Planlanan ve gerçekleşen prim dağıtımı.', Icon: Percent },
  { title: 'Fatura ve DAB', body: 'Fatura, makbuz ve döviz evraklarını bağlayın.', Icon: Receipt },
  { title: 'Personel performansı', body: 'Kişiye özel sayfa, prim ve eksilen değer.', Icon: UserFocus },
  { title: 'Ortak satış', body: 'Birden fazla personelle ortak satış yönetimi.', Icon: UsersThree },
  { title: 'Dışa aktarma', body: 'Excel, CSV, PDF ve A4 çıktı.', Icon: FileArrowDown },
  { title: 'Çoklu cihaz', body: 'Bilgisayar, tablet, telefon ve PWA.', Icon: Devices },
  { title: 'Evrak bağlama', body: 'Makbuz ve döviz alım belgelerini kayda bağlayın.', Icon: Paperclip },
  { title: 'Kapora ve iade', body: 'Depozito, gider, yan ödeme ve iade takibi.', Icon: Wallet },
  { title: 'TR / EN', body: 'Saha ekibi için çift dil desteği.', Icon: Translate },
]

export function Features() {
  return (
    <section id="ozellikler" className="px-5 py-16 md:px-8 md:py-24">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-2xl" data-reveal>
          <p className="font-display text-[11px] tracking-[0.3em] text-gold">ÖZELLİKLER</p>
          <h2 className="mt-3 font-display text-3xl tracking-wide text-cream md:text-4xl">
            Saha, satış ve finans aynı dilde.
          </h2>
          <p className="mt-4 text-muted">
            Görseldeki tüm süreçler gerçek üründe var — yetkiden tapuya, acenteden prime.
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-4">
          {featured.map((feature) => (
            <article
              key={feature.title}
              data-reveal
              className={`glass group rounded-2xl p-6 transition-[box-shadow,border-color] duration-200 hover:border-gold/45 hover:shadow-[0_0_0_1px_rgba(201,163,106,0.28),0_24px_50px_rgba(0,0,0,0.35)] ${
                feature.wide ? 'md:col-span-2' : ''
              }`}
            >
              <feature.Icon size={28} weight="light" className="text-gold" />
              <h3 className="mt-4 font-display text-xl text-cream">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{feature.body}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((feature) => (
            <article
              key={feature.title}
              data-reveal
              className="rounded-xl border border-line bg-ink-2/80 p-4 transition-colors duration-200 hover:border-gold/40"
            >
              <feature.Icon size={20} weight="light" className="text-gold" />
              <h3 className="mt-3 text-sm font-medium text-cream">{feature.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
