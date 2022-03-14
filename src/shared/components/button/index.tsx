import React from "react"
import Spinner from "react-bootstrap/Spinner"
import * as ButtonStyle from "./styles"

type ButtonProps = {
  animation?: "border" | "grow"
  backgroundColor?: string
  children?: React.ReactNode
  className?: string
  content?: string
  color?: string
  disabled?: boolean
  href?: string
  loading?: boolean
  message?: string
  onClick?: (e:React.SyntheticEvent) => void
  role?: string
  size?: "sm"
  type?: "submit" | "reset" | "button"
  variant?: string
}

function Button({ animation, children, content, disabled, loading, message, onClick, role = "button", size, variant, ...props }: ButtonProps) {
  const text = message && typeof message === "string" ? "Loading..." : null
  return (
    <ButtonStyle.Container disabled={disabled || false} onClick={onClick} role={role} {...props}>
      {loading ? (
        <span>
          {/* eslint max-len: ["off"] */}
          <Spinner as="span" variant={variant} animation={animation || "border"} size={size} role="status" aria-hidden="true" />
          <bdi className="ml-2">{text}</bdi>
        </span>
      ) : (
        children || content
      )}
    </ButtonStyle.Container>
  )
}

Button.defaultProps = {
  animation: "border",
  backgroundColor: "",
  className: "",
  content: "",
  color: "",
  children: () => {},
  disabled: false,
  loading: false,
  href: "",
  message: "",
  onClick: () => {},
  role: "button",
  size: "sm",
  type: "submit",
  variant: "light",
}

export default Button
