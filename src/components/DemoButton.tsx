import { ArrowDown } from '@phosphor-icons/react/ArrowDown'
import { ArrowUpRight } from '@phosphor-icons/react/ArrowUpRight'
import { DEMO_URL } from '../config'

type DemoButtonProps = {
  className?: string
  children?: string
  variant?: 'primary' | 'secondary' | 'brass'
  external?: boolean
  onClick?: () => void
}

export function DemoButton({
  className = '',
  children = 'Demoyu aç',
  variant = 'primary',
  external = false,
  onClick,
}: DemoButtonProps) {
  const classes = `btn btn-${variant} ${className}`

  if (external) {
    return (
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        onClick={onClick}
      >
        <span>{children}</span>
        <ArrowUpRight size={16} weight="bold" aria-hidden />
      </a>
    )
  }

  return (
    <a href="#demo" className={classes} onClick={onClick}>
      <span>{children}</span>
      <ArrowDown size={16} weight="bold" aria-hidden />
    </a>
  )
}
