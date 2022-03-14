import React from "react"
import styled from "styled-components"
import Avatar from "../../themes/assets/avatars/default_user.png"
import { StyledProps } from "../../typings"

const LogoIMG = styled.img.attrs((props: StyledProps) => ({
  src: props.src || Avatar,
  width: props.width || "0px",
  height: props.height || "0px",
  margin: props.margin,
}))`
  width: ${(props: StyledProps) => props.width};
  height: ${(props: StyledProps) => props.height};
  margin: ${(props: StyledProps) => props.margin};
`
export function Logo({
  onClick,
  ...props
}: {
  alt?: string
  className?: string
  id?: string
  height?: string
  onClick?: (() => void) | undefined
  margin?: string
  src?: StyledProps["src"]
  width?: string
}) {
  return <LogoIMG onClick={onClick} {...props} />
}



Logo.defaultProps = {
  alt: "",
  className: "",
  id: "",
  height: "",
  onClick: () => {},
  margin: "",
  src: "",
  width: "",
}
