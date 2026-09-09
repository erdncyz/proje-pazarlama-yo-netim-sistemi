import { Buildings } from '@phosphor-icons/react/Buildings'
import { CalendarBlank } from '@phosphor-icons/react/CalendarBlank'
import { ChartBar } from '@phosphor-icons/react/ChartBar'
import { FileText } from '@phosphor-icons/react/FileText'
import { Gear } from '@phosphor-icons/react/Gear'
import { House } from '@phosphor-icons/react/House'
import { IdentificationCard } from '@phosphor-icons/react/IdentificationCard'
import { Percent } from '@phosphor-icons/react/Percent'
import { Receipt } from '@phosphor-icons/react/Receipt'
import { Scroll } from '@phosphor-icons/react/Scroll'
import { Users } from '@phosphor-icons/react/Users'
import { Wallet } from '@phosphor-icons/react/Wallet'

const sidebar = [
  House,
  IdentificationCard,
  Buildings,
  ChartBar,
  CalendarBlank,
  Scroll,
  FileText,
  Wallet,
  Percent,
  Receipt,
  Users,
  Gear,
]

const metrics = [
  { label: 'Toplam müşteri', value: '124' },
  { label: 'Aktif acente', value: '87' },
  { label: 'Bu ay satış', value: '5' },
  { label: 'Ciro', value: '₺125.8M' },
]

const bars = [42, 58, 47, 72, 64, 88, 76]
const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem']

const activities = [
  { title: 'Yeni müşteri eklendi', time: '2 dk' },
  { title: 'Sözleşme imzalandı', time: '18 dk' },
  { title: 'Rezervasyon oluşturuldu', time: '1 sa' },
]

export function DeviceStage() {
  return (
    <div className="stage mx-auto mt-14 w-full max-w-5xl pb-16 sm:pb-10" data-reveal>
      <div className="stage-inner relative">
        <div className="laptop-shell">
          <div className="mb-2 flex justify-center">
            <span className="block h-1.5 w-1.5 rounded-full bg-gold/70" />
          </div>
          <div className="laptop-screen">
            <DashboardScreen />
          </div>
        </div>
        <div className="laptop-base" />

        <div className="phone-float absolute -bottom-6 right-1 hidden w-[132px] sm:block sm:w-[150px] md:-right-2 md:w-[168px]">
          <PhoneScreen />
        </div>
      </div>
    </div>
  )
}

function DashboardScreen() {
  return (
    <div className="flex h-full min-h-0 text-[7px] text-cream sm:text-[8px] md:text-[9px]">
      <aside className="flex w-9 shrink-0 flex-col items-center gap-2.5 border-r border-line bg-ink-2 py-3 sm:w-11">
        {sidebar.map((Icon, index) => (
          <Icon
            key={index}
            size={11}
            weight={index === 0 ? 'fill' : 'light'}
            className={index === 0 ? 'text-gold' : 'text-muted'}
          />
        ))}
      </aside>

      <div className="min-w-0 flex-1 bg-[linear-gradient(180deg,#16130f,#100e0b)] p-2.5 sm:p-3">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-display tracking-[0.18em] text-[8px] text-gold sm:text-[9px]">
            SATIŞ ÖZETİ
          </p>
          <span className="glow-dot h-1.5 w-1.5 rounded-full bg-gold" />
        </div>

        <div className="mb-2 grid grid-cols-4 gap-1.5">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-md border border-line bg-white/4 px-1.5 py-1.5"
            >
              <p className="truncate text-[6px] tracking-wide text-muted uppercase sm:text-[7px]">
                {metric.label}
              </p>
              <p className="mt-0.5 font-medium text-cream">{metric.value}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          <div className="col-span-3 rounded-md border border-line bg-ink/50 p-2">
            <p className="mb-1.5 text-[7px] text-muted">Aylık satış performansı</p>
            <div className="flex h-16 items-end gap-1.5 sm:h-20">
              {bars.map((height, index) => (
                <div key={months[index]} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="dash-bar w-full rounded-t-sm bg-linear-to-t from-gold-dim to-gold-bright shadow-[0_0_10px_rgba(201,163,106,0.35)]"
                    style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }}
                  />
                  <span className="text-[6px] text-muted">{months[index]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col items-center justify-center rounded-md border border-line bg-ink/50 p-2">
            <p className="mb-1 text-[7px] text-muted">Hedef tamamlanma</p>
            <svg viewBox="0 0 64 64" className="h-14 w-14 sm:h-16 sm:w-16">
              <circle cx="32" cy="32" r="26" fill="none" stroke="#2a241c" strokeWidth="6" />
              <circle
                className="ring-progress"
                cx="32"
                cy="32"
                r="26"
                fill="none"
                stroke="#c9a36a"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <text
                x="32"
                y="36"
                textAnchor="middle"
                fill="#f4eee4"
                fontSize="12"
                fontFamily="Outfit, sans-serif"
              >
                78%
              </text>
            </svg>
          </div>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <div className="rounded-md border border-line bg-ink/40 p-2">
            <p className="mb-1 text-[7px] text-muted">Son işlemler</p>
            <ul className="space-y-1">
              {activities.map((item) => (
                <li key={item.title} className="flex justify-between gap-2 text-cream/90">
                  <span className="truncate">{item.title}</span>
                  <span className="shrink-0 text-muted">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-ink/40 p-2">
            <p className="mb-1 text-[7px] text-muted">Hatırlatmalar</p>
            <p className="text-cream/90">Müşteri araması · 14:00</p>
            <p className="mt-1 text-cream/90">Acente ziyareti · 16:30</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneScreen() {
  const items = [
    'Ana Sayfa',
    'Müşteriler',
    'Acenteler',
    'Satışlar',
    'Rezervasyon',
    'Sözleşmeler',
    'Tapu',
    'Ödemeler',
    'Komisyon',
    'Raporlar',
  ]

  return (
    <div className="rounded-[26px] border border-gold/30 bg-[#0b0a08] p-1.5 shadow-[0_24px_50px_rgba(0,0,0,0.55)]">
      <div className="overflow-hidden rounded-[20px] bg-ink-2">
        <div className="mx-auto mt-1.5 h-3 w-16 rounded-full bg-black/70" />
        <div className="px-2.5 pt-3 pb-4">
          <p className="font-display text-[7px] leading-tight tracking-[0.12em] text-gold">
            PROJE PAZARLAMA
            <span className="mt-0.5 block tracking-[0.08em] text-muted">YÖNETİM SİSTEMİ</span>
          </p>
          <ul className="mt-2 space-y-1.5">
            {items.map((item, index) => (
              <li
                key={item}
                className={`rounded-md px-2 py-1 text-[8px] ${
                  index === 0
                    ? 'bg-gold/15 text-gold'
                    : 'text-muted'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
