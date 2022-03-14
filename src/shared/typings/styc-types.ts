import * as React from "react"

export type Theme = {
  color: (color: string) => string
  breakpoint: (breakpoints: string) => string
  fontSize: (fontSize: string) => string
  fontFamily: (fontFamily: string) => string
}
export interface StyledProps {
  theme: Theme
  width?: string
  height?: string
  margin?: string
  padding?: string
  resize?: string
  checked?: string | boolean | undefined
  src?: any
  borderradius?: string
  border?: string
  fontSize?: string
  backgroundColor?: string
  ref?: React.RefObject<HTMLInputElement | HTMLLabelElement>
  type?: "radio" | "password" | "text" | "checkbox" | "tel" | "date" | "number" | "email" | undefined
  children?: React.ReactNode
  required?: boolean
  id?: string
  className?: string
  value?: string
  name?: string
  boxShadow?: string
}
