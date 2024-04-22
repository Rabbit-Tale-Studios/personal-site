import Link, { LinkProps } from 'next/link'
import React from 'react'
import { cn } from 'utils/tw'

interface ButtonProps {
  as?: 'a' | 'button'
  hasIcon?: boolean
  iconPosition?: 'left' | 'right'
  aria?: string
  isStickyHover?: boolean | undefined
  children?: React.ReactNode
  external?: boolean
  href?: LinkProps['href']
  onClick?: () => void
  state?: boolean
  text?: string
  className?: string
  variant:
    | 'primary'
    | 'secondary'
    | 'outline'
    | 'ghost'
    | 'icon'
    | 'accent'
    | 'link'
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    { rounded = 'full', size = 'md', hasIcon = false, iconPosition, ...props },
    ref,
  ) => {
    const style = cn(
      'overflow-hidden relative w-max px-4 py-2 sm:transition-all block',
      {
        'active:scale-95': props.variant !== 'link' && !props.disabled,

        'bg-default-900 text-default-50 dark:bg-default-50 dark:text-default-900 sm:hover:bg-default-900 dark:sm:hover:bg-default-100':
          props.variant === 'primary',

        'bg-default-900/5': props.variant === 'primary' && props.state,

        'bg-default-900/5 dark:bg-default-50/5 text-default-950 dark:text-white-50 sm:hover:bg-default-100 dark:sm:hover:bg-default-50/10':
          props.variant === 'secondary',

        'ring-2 ring-shark-100 hover:ring-shark-950/10 hover:bg-shark-950/5':
          props.variant === 'outline',

        '!px-2 sm:hover:bg-white': props.variant === 'icon',

        'bg-transparent text-shark-500 dark:text-shark-300 sm:hover:bg-shark-950/5 dark:sm:hover:bg-shark-50/5':
          props.variant === 'ghost' || props.variant === 'icon',

        'bg-white-950/5 dark:bg-shark-50/5 text-shark-950 dark:text-shark-50':
          (props.variant === 'ghost' || props.variant === 'icon') &&
          props.state,

        'bg-blueberry-500 text-blueberry-50 dark:bg-blueberry-50 dark:text-blueberry-950 sm:hover:bg-blueberry-600 dark:sm:hover:bg-blueberry-100':
          props.variant === 'accent',

        'p-0 text-shark-500': props.variant === 'link',

        'flex items-center justify-center gap-2.5': props.children,

        'text-xs': size === 'sm',
        'text-sm sm:text-base': size === 'md',
        'text-base sm:text-lg py-2.5 px-5': size === 'lg',

        'pl-5': hasIcon && iconPosition === 'right' && props.variant !== 'link',
        'pr-5': hasIcon && iconPosition === 'left' && props.variant !== 'link',

        'cursor-not-allowed opacity-50': props.disabled,

        'rounded-sm': rounded === 'sm',
        'rounded-md': rounded === 'md',
        'rounded-lg': rounded === 'lg',
        'rounded-xl': rounded === 'xl',
        'rounded-2xl': rounded === '2xl',
        'rounded-full': rounded === 'full',
      },
    )

    const dataHoverProp = props.isStickyHover && { 'data-hover': '' }

    return props.as === 'a' ? (
      <Link
        aria-label={props.aria ?? props.text}
        //{...dataHoverProp}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={cn(style, props.className)}
        href={props.href || '/'}
        rel={props.external ? 'noopener noreferrer' : undefined}
        target={props.external ? '_blank' : undefined}
        aria-disabled={props.disabled}
      >
        {props.children}
        {props.text}
        {props.isStickyHover ? <div data-hover-bounds /> : null}
      </Link>
    ) : (
      <button
        {...dataHoverProp}
        ref={ref as React.Ref<HTMLButtonElement>}
        aria-label={props.aria ?? props.text}
        className={cn(style, props.className)}
        onClick={props.onClick}
        disabled={props.disabled}
        aria-disabled={props.disabled}
        type={props.type}
      >
        {props.children}
        {props.text}
        {props.isStickyHover ? <div data-hover-bounds /> : null}
      </button>
    )
  },
)

export default Button
