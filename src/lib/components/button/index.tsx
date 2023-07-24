import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import { css } from '../../../../styled-system/css'

export const BUTTON_VARIANT = {
  normal: 'normal',
  fire: 'fire',
  water: 'water',
  grass: 'grass',
} as const
export type ButtonVariant = keyof typeof BUTTON_VARIANT

export interface ButtonProps extends ButtonHTMLAttributes<PropsWithChildren<HTMLButtonElement>> {
  variant?: ButtonVariant
}

export const Button = ({ variant = 'normal', children, ...rest }: ButtonProps) => {
  console.log(variant)
  return (
    <button
      className={css({
        bg: 'red.300',
        px: '4',
        py: '3',
        borderRadius: 'md',
        _hover: { bg: 'red.400' },
      })}
      {...rest}
    >
      {children}
    </button>
  )
}
