import Link, { LinkProps } from 'next/link'
import React from 'react'
import { cn } from 'utils/tw'

interface ButtonProps {
  as?: 'a' | 'button'
  hasIcon?: boolean
  iconPosition?: 'left' | 'right'
  aria?: string
  dataHover?: boolean
  children?: React.ReactNode
  external?: boolean
  href?: LinkProps['href']
  onClick?: () => void
  state?: boolean
  text?: string
  className?: string
  type: 'primary' | 'secondary' | 'ghost' | 'icon' | 'accent' | 'link'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  size?: 'sm' | 'lg'
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ rounded = 'full', ...props }, ref) => {
  const style = cn(
    'overflow-hidden relative w-max px-4 py-2 font-medium sm:transition-all block',
    {
      'active:scale-95': props.type !== 'link',

      'bg-shark-950 text-shark-50 dark:bg-shark-50 dark:text-shark-950 sm:hover:bg-shark-900 dark:sm:hover:bg-shark-100':
        props.type === 'primary',

      'bg-shark-950/5': props.type === 'primary' && props.state,

      'bg-shark-950/5 dark:bg-shark-50/5 text-shark-950 dark:text-white-50 sm:hover:bg-shark-100 dark:sm:hover:bg-shark-50/10':
        props.type === 'secondary',

      '!px-2 sm:hover:bg-white': props.type === 'icon',

      'bg-transparent text-shark-500 dark:text-shark-300 sm:hover:bg-shark-950/5 dark:sm:hover:bg-shark-50/5':
        props.type === 'ghost' || props.type === 'icon',

      'bg-white-950/5 dark:bg-shark-50/5 text-shark-950 dark:text-shark-50':
        (props.type === 'ghost' || props.type === 'icon') && props.state,

      'bg-blue-500 text-blue-50 dark:bg-blue-50 dark:text-blue-950 sm:hover:bg-blue-600 dark:sm:hover:bg-blue-100':
        props.type === 'accent',

      'p-0 text-shark-500': props.type === 'link',

      'flex items-center justify-center gap-2.5': props.children,

      'text-xs sm:text-sm': props.size === 'sm',
      'text-base sm:text-lg': props.size === 'lg',

      'pl-5':
        props.hasIcon &&
        props.iconPosition === 'right' &&
        props.type !== 'link',
      'pr-5':
        props.hasIcon && props.iconPosition === 'left' && props.type !== 'link',

      'rounded-sm': rounded === 'sm',
      'rounded-md': rounded === 'md',
      'rounded-lg': rounded === 'lg',
      'rounded-xl': rounded === 'xl',
      'rounded-2xl': rounded === '2xl',
      'rounded-full': rounded === 'full',
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
      {props.dataHover && <div data-hover-bounds></div>}
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
      {props.dataHover && <div data-hover-bounds></div>}
    </button>
  )
})

export default Button
