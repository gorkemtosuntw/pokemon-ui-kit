import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

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

export const Button = ({ variant = 'normal', children }: ButtonProps) => {
  console.log(variant)
  return <button>{children}</button>
}
