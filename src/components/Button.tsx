import { forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'inline-flex items-center justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors',
  outline:
    'inline-flex items-center justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors',
}

const variantStyles = {
  solid: {
    maiz:
      'relative overflow-hidden bg-maiz-400 text-maiz-900 before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-maiz-300/10 active:bg-maiz-400 active:text-maiz-900/80',
    white:
      'bg-white text-maiz-900 hover:bg-white/90 active:bg-white/90 active:text-maiz-900/70',
    gray: 'bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80',
  },
  outline: {
    gray: 'border-gray-300 text-gray-300 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80',
  },
}

const sizeStyles = {
  sm: 'rounded px-2 py-1 text-xs',
  md: 'rounded-md px-2.5 py-1.5 text-sm',
  lg: 'rounded-md px-3 py-2 text-sm',
  xl: 'rounded-md px-3.5 py-2.5 text-sm',
}

export const Button = forwardRef<
  HTMLButtonElement,
  {
    variant?: keyof typeof variantStyles
    color?: string
    size?: keyof typeof sizeStyles
    className?: string
    href?: string
    [key: string]: any
  }
>(function Button(
  { variant = 'solid', color = 'gray', size = 'md', className, href, ...props },
  ref
) {
  className = twMerge(
    baseStyles[variant],
    variantStyles[variant][color],
    sizeStyles[size],
    className
  )

  return href ? (
    <a ref={ref as any} href={href} className={className} {...props} />
  ) : (
    <button ref={ref} className={className} {...props} />
  )
})
