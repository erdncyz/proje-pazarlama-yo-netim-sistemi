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
  { Icon: House, label: 'Ana sayfa' },
  { Icon: IdentificationCard, label: 'Müşteriler' },
  { Icon: Buildings, label: 'Acenteler' },
  { Icon: ChartBar, label: 'Satışlar' },
  { Icon: CalendarBlank, label: 'Rezervasyon' },
  { Icon: Scroll, label: 'Sözleşmeler' },
  { Icon: FileText, label: 'Tapu' },
  { Icon: Wallet, label: 'Ödemeler' },
  { Icon: Percent, label: 'Komisyon' },
  { Icon: Receipt, label: 'Fatura' },
  { Icon: Users, label: 'Personel' },
  { Icon: Gear, label: 'Ayarlar' },
]

const metrics = [
  { label: 'Toplam müşteri', value: '124', delta: '+12' },
  { label: 'Aktif acente', value: '87', delta: '+5' },
  { label: 'Bu ay satış', value: '5', delta: '+2' },
  { label: 'Ciro', value: '₺125,8M', delta: '+18%' },
]

const bars = [42, 58, 47, 72, 61, 88, 76]
const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem']

const activities = [
  { title: 'Yeni müşteri eklendi', time: '2 dk' },
  { title: 'Sözleşme imzalandı', time: '18 dk' },
  { title: 'Rezervasyon oluşturuldu', time: '1 sa' },
]

export function DeviceStage() {
  return (
    <div className="stage relative mx-auto mt-16 w-full max-w-5xl pb-14 sm:pb-8" data-reveal>
      <div className="stage-inner relative">
        <div className="laptop-shell">
          <div className="mb-2 flex justify-center">
            <span className="block h-1 w-1 rounded-full bg-white/25" />
          </div>
          <div className="laptop-screen">
            <DashboardScreen />
          </div>
        </div>
        <div className="laptop-base" />

        <div className="phone-float absolute -bottom-4 right-2 hidden w-[136px] sm:block md:-right-4 md:w-[158px]">
          <PhoneScreen />
        </div>
      </div>
    </div>
  )
}

function DashboardScreen() {
  return (
    <div className="flex h-full min-h-0 bg-white text-[7px] text-ink sm:text-[8px] md:text-[9px]">
      <aside className="flex w-[74px] shrink-0 flex-col gap-[3px] border-r border-line bg-[#FAF9F6] px-1.5 py-2.5 md:w-[86px]">
        <p className="label mb-1.5 px-1 text-[6px] text-muted">Panel</p>
        {sidebar.map(({ Icon, label }, index) => (
          <div
            key={label}
            className={`flex items-center gap-1.5 rounded px-1 py-[3px] ${
              index === 0 ? 'bg-ink text-white' : 'text-ink-2'
            }`}
          >
            <Icon size={9} weight={index === 0 ? 'fill' : 'regular'} />
            <span className="truncate text-[6px] md:text-[7px]">{label}</span>
          </div>
        ))}
      </aside>

      <div className="min-w-0 flex-1 p-2.5 sm:p-3">
        <div className="mb-2.5 flex items-center justify-between">
          <div>
            <p className="font-medium text-[8px] text-ink md:text-[10px]">Satış özeti</p>
            <p className="text-[6px] text-muted md:text-[7px]">Demo Proje · Eylül</p>
          </div>
          <span className="flex items-center gap-1 rounded-full border border-line px-1.5 py-[2px] text-[6px] text-muted">
            <span className="glow-dot h-1 w-1 rounded-full bg-brass-mid" />
            Canlı
          </span>
        </div>

        <div className="mb-2 grid grid-cols-4 gap-1.5">
          {metrics.map((metric) => (
            <div key={metric.label} className="rounded-md border border-line bg-white px-1.5 py-1.5">
              <p className="truncate text-[5.5px] text-muted md:text-[6.5px]">{metric.label}</p>
              <p className="mt-0.5 font-mono text-[8px] font-medium text-ink md:text-[10px]">
                {metric.value}
              </p>
              <p className="text-[5.5px] text-brass md:text-[6.5px]">{metric.delta}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          <div className="col-span-3 rounded-md border border-line bg-white p-2">
            <p className="mb-1.5 text-[6px] text-muted md:text-[7px]">Aylık satış performansı</p>
            <div className="flex h-[46px] items-end gap-1.5 sm:h-14">
              {bars.map((height, index) => (
                <div
                  key={months[index]}
                  className={`dash-bar flex-1 rounded-t-[2px] ${
                    index === bars.length - 2 ? 'bg-brass-mid' : 'bg-ink/80'
                  }`}
                  style={{ height: `${height}%`, animationDelay: `${index * 70}ms` }}
                />
              ))}
            </div>
            <div className="mt-1 flex gap-1.5">
              {months.map((month) => (
                <span key={month} className="flex-1 text-center text-[5.5px] text-muted">
                  {month}
                </span>
              ))}
            </div>
          </div>

          <div className="col-span-2 flex flex-col items-center justify-center rounded-md border border-line bg-white p-2">
            <p className="mb-1 text-[6px] text-muted md:text-[7px]">Hedef tamamlanma</p>
            <svg viewBox="0 0 64 64" className="h-[52px] w-[52px] sm:h-16 sm:w-16">
              <circle cx="32" cy="32" r="24" fill="none" stroke="#EDEAE3" strokeWidth="6" />
              <circle
                className="ring-progress"
                cx="32"
                cy="32"
                r="24"
                fill="none"
                stroke="#A87F43"
                strokeWidth="6"
                strokeLinecap="round"
              />
              <text
                x="32"
                y="36"
                textAnchor="middle"
                fill="#191814"
                fontSize="13"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
              >
                78%
              </text>
            </svg>
          </div>
        </div>

        <div className="mt-1.5 grid grid-cols-2 gap-1.5">
          <div className="rounded-md border border-line bg-white p-2">
            <p className="mb-1 text-[6px] text-muted md:text-[7px]">Son işlemler</p>
            <ul className="space-y-[3px]">
              {activities.map((item) => (
                <li key={item.title} className="flex justify-between gap-2 text-ink-2">
                  <span className="truncate">{item.title}</span>
                  <span className="shrink-0 font-mono text-muted">{item.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-md border border-line bg-white p-2">
            <p className="mb-1 text-[6px] text-muted md:text-[7px]">Hatırlatmalar</p>
            <p className="text-ink-2">Müşteri araması · 14:00</p>
            <p className="mt-[3px] text-ink-2">Acente ziyareti · 16:30</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneScreen() {
  const items = [
    { label: 'Müşteriler', value: '124' },
    { label: 'Acenteler', value: '87' },
    { label: 'Satışlar', value: '5' },
    { label: 'Rezervasyon', value: '3' },
    { label: 'Sözleşmeler', value: '9' },
    { label: 'Tapu işlemleri', value: '2' },
    { label: 'Ödemeler', value: '14' },
  ]

  return (
    <div className="rounded-[24px] bg-[#1B1914] p-[5px] shadow-[0_26px_50px_rgba(25,24,20,0.32)]">
      <div className="overflow-hidden rounded-[19px] bg-white">
        <div className="mx-auto mt-1.5 h-[9px] w-12 rounded-full bg-[#1B1914]" />
        <div className="px-2.5 pt-2.5 pb-3.5">
          <p className="label text-[6px] text-brass">Bugün</p>
          <p className="mt-0.5 text-[9px] font-medium text-ink">Saha özeti</p>
          <ul className="mt-2 space-y-1">
            {items.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between rounded border border-line px-1.5 py-[3px]"
              >
                <span className="text-[6.5px] text-ink-2">{item.label}</span>
                <span className="font-mono text-[6.5px] text-ink">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
