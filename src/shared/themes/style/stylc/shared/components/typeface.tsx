import styled from "styled-components"

export type Typeface = {
  margin: string
  width: string
  height: string
  resize: string
  fontSize: string
  color: string
  "data-testid": string
}

export const Header = styled.h1<Partial<Typeface>>`
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color("black"))};
  text-transform: capitalize;
  margin: ${(props) => props.margin};
  font-style: normal;
  font-weight: bold;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : "32px")};
  line-height: 50px;
  letter-spacing: 0.01em;
`
Header.defaultProps = { margin: "0 0 16px" }

export const SubHeader = styled.h3<Partial<Typeface>>`
  font-style: normal;
  font-weight: normal;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : "15px")};
  line-height: 28px;
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color("dark_blue"))};
  margin: ${(props) => props.margin};
`
SubHeader.defaultProps = { margin: "0 0 16px" }

export const Title = styled(SubHeader)<Partial<Typeface>>`
  font-style: normal;
  font-weight: 600;
  line-height: 30px;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : "24px")};
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color("brand_color"))};
  margin: ${(props) => props.margin};
`
Title.defaultProps = { margin: "0 0 16px" }

export const SubTitle = styled(SubHeader)`
  font-style: normal;
  font-weight: normal;
  line-height: 22px;
  letter-spacing: 0.01em;
  font-size: ${({ fontSize, theme }) => (fontSize ? theme?.fontSize(fontSize) || fontSize : "15px")};
  color: ${({ color, theme }) => (color ? theme?.color(color) || color : theme?.color("gray"))};
  margin: ${(props) => props.margin};
`
SubTitle.defaultProps = { margin: "0 0 16px" }

export const Label = styled.span`
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0px;
  text-align: left;
  color: ${(props) => props.theme?.color("text_help_gray")};
`
export const BoldLabel = styled(Label)`
  font-size: 11px;
  line-height: 16px;
  bdi {
    color: ${({ theme }) => theme?.color("error")};
  }
`
export const SubLabel = styled(BoldLabel)`
  color: ${({ theme }) => theme?.color("gray")};
  font-size: 14px;
  line-height: 140%;
`

export const SmallLabel = styled(Label)`
  color: ${({ theme }) => theme?.color("gray")};
  font-size: 10px;
  letter-spacing: 0px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  line-height: 140%;
`
export const ErrorMessage = styled.p<Partial<{ isValid: boolean; isEmpty: boolean }>>`
  color: ${({ theme, isValid, isEmpty }) => {
    if (isEmpty) return theme?.color("error")
    if (!isValid) return theme?.color("information")
    return null
  }};
  font-size: 12px;
  letter-spacing: 0px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  line-height: 19px;
  margin: 0;
`

export const Anchor = styled.a`
  color: ${({ theme }) => theme?.color("brand_color")} !important;
  text-decoration-line: none !important;
  font-style: normal;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  margin: 0;
`
