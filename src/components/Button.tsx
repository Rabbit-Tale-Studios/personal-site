import Link, { LinkProps } from 'next/link'
import React from 'react'
import { cn } from 'utils/tw'

interface ButtonProps {
  as?: 'a' | 'button'
  aria?: string
  dataHover?: boolean
  children?: React.ReactNode
  external?: boolean
  href?: LinkProps['href']
  onClick?: () => void
  state?: boolean
  text?: string
  className?: string
  type: 'primary' | 'secondary' | 'icon'
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>((props, ref) => {
  const style = cn(
    'overflow-hidden relative w-max rounded-full px-4 py-2 font-medium sm:transition-all active:scale-95 block',
    {
      'bg-white-50 dark:bg-shark-950 text-shark-950 dark:text-white-50 sm:hover:bg-shark-100 dark:sm:hover:bg-shark-800':
        props.type === 'primary',
      'bg-white-50': props.type === 'primary' && props.state,

      '!px-2 sm:hover:bg-white': props.type === 'icon',

      'bg-transparent text-shark-500 dark:text-shark-300 sm:hover:bg-shark-950/5 dark:sm:hover:bg-shark-50/5':
        props.type === 'secondary' || props.type === 'icon',
      'bg-white-950/5 dark:bg-shark-50/5 text-shark-950 dark:text-shark-50':
        (props.type === 'secondary' || props.type === 'icon') && props.state,

      'flex items-center justify-center gap-2.5 pl-3 pr-4': props.children,
    },
  )

  const dataHoverProp = props.dataHover && { 'data-hover': '' }

  return props.as === 'a' ? (
    <Link
      aria-label={props.aria ?? props.text}
      {...dataHoverProp}
      ref={ref as React.Ref<HTMLAnchorElement>}
      className={cn(style, props.className)}
      href={props.href || '/'}
      rel={props.external ? 'noopener noreferrer' : undefined}
      target={props.external ? '_blank' : undefined}
    >
      {props.children}
      {props.text}
      <div data-hover-bounds></div>
    </Link>
  ) : (
    <button
      {...dataHoverProp}
      ref={ref as React.Ref<HTMLButtonElement>}
      aria-label={props.aria ?? props.text}
      className={cn(style, props.className)}
      onClick={props.onClick}
    >
      {props.children}
      {props.text}
      <div data-hover-bounds></div>
    </button>
  )
})

export default Button
