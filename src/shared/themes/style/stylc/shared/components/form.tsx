import styled from "styled-components"
import DownArrow from "../../../../assets/images/arrow-dropdown.svg"
import { StyledProps } from "../../../../../typings"

type FormTypes = StyledProps & {
  isValid?: boolean
  isEmpty?: boolean
  errorMessage?: string
  // ref?: React.RefObject<HTMLInputElement>
}
export const CheckBoxLabel = styled.label<FormTypes>`
  margin: 15px 0 0;
  cursor: pointer;
  vertical-align: top;
  display: block;
  position: relative;
  padding-left: 24px;
  z-index: 2;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .checkmark {
    position: absolute;
    top: 5px;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 0.5px solid ${(props: FormTypes) => props?.theme?.color("gray")};
    border-radius: 3px;
  }
  .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }
  :hover input ~ .checkmark {
    background-color: ${(props: FormTypes) => props?.theme?.color("error")};
  }
  input:checked ~ .checkmark {
    background-color: ${(props: FormTypes) => props?.theme?.color("error")};
    border: none;
  }
  .checkmark:after {
    left: 5px;
    top: 1px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  &[type='radio'] {
    display: block;
    position: relative;
    padding-left: 24px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* Hide the browser's default radio button */
  &[type='radio'] input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  /* Create a custom radio button */
  &[type='radio'] .checkmark {
    position: absolute;
    top: 8px;
    left: 0;
    height: 12px;
    width: 12px;
    background-color: ${(props: FormTypes) => props?.theme?.color("white")};
    border-radius: 50%;
    border: 0.5px solid ${(props: FormTypes) => props?.theme?.color("gray")};
  }

  /* On mouse-over, add a grey background color */
  &[type='radio']:hover input ~ .checkmark {
    background-color: ${(props: FormTypes) => props?.theme?.color("error")};
    border: 1px solid ${(props: FormTypes) => props?.theme?.color("error")};
  }

  /* When the radio button is checked, add a white background */
  &[type='radio'] input:checked ~ .checkmark {
    background-color: ${(props: FormTypes) => props?.theme?.color("white")};
    border-radius: 50%;
    border: 1px solid ${(props: FormTypes) => props?.theme?.color("error")};
  }

  /* Create the indicator (the dot/circle - hidden when not checked) */
  &[type='radio'] .checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }

  /* Show the indicator (dot/circle) when checked */
  &[type='radio'] input:checked ~ .checkmark:after {
    display: block;
  }

  /* Style the indicator (dot/circle) */
  &[type='radio'] .checkmark:after {
    top: 1.7px;
    left: 2px;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: solid ${(props: FormTypes) => props?.theme?.color("error")};
    border-width: 3px;
    background: ${(props: FormTypes) => props?.theme?.color("error")};
  }
`
export const CheckBox = styled.input<FormTypes>`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
/**
 * Main forms
 */

export const MainLabelContainer = styled.label<FormTypes>`
  display: block;
  text-align: left;
  margin: ${(props) => props.margin};
  :focus-within {
    transition: 0.3s;
    .input-label {
      color: ${(props) => props.theme?.color("brand_color")};
    }
    /* border-radius: 0px; */
  }
`
MainLabelContainer.defaultProps = { margin: "0" }

export const MainInput = styled.input<FormTypes>`
  width: ${(props: FormTypes) => props.width};
  height: 32px;
  padding: 0px;
  padding-left: 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: ${(props: FormTypes) => props?.theme?.color("table_black")};
  cursor: pointer;
  background: ${({ theme }: FormTypes) => theme?.color("white")};
  border-radius: 0px;
  border: none;
  /* border-bottom: 1px solid
    ${({ theme, errorMessage, isValid, isEmpty }: FormTypes) => {
    if (errorMessage) {
      if (isEmpty) {
        return theme.color("error")
      }
      if (!isValid) {
        return theme.color("information")
      }
    }
    return theme.color("gray_5")
  }}; */
  ::placeholder {
    font-size: 12px;
    color: ${(props: FormTypes) => props?.theme?.color("gray")};
  }

  :focus {
    background: ${({ theme }: FormTypes) => theme?.color("white")};
    transition: 0.3s;
    outline: 0.5px solid
      ${({ theme, errorMessage }: FormTypes) => {
        if (errorMessage) {
          return theme.color("transparent")
        }
        return theme.color("transparent")
      }};
    /* border-radius: 0px; */
  }
`
MainInput.defaultProps = { width: "100%" }

export const MainLabel = styled.div`
  margin-bottom: 0px;
`
// eslint-disable-line global-require
export const Select = styled.select<FormTypes & { defaultValue?: string }>`
  width: ${(props: FormTypes) => props.width};
  height: ${(props: FormTypes) => props.height};
  margin: ${(props: FormTypes) => props.margin};
  border: 1px solid
    ${({ theme, errorMessage, isEmpty }: FormTypes) => {
      return isEmpty && errorMessage ? theme.color("error") : theme.color("gray_5")
    }};
  border-radius: 0px;
  background: transparent;
  padding: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  appearance: none;
  background-color: ${({ theme }: FormTypes) => theme.color("white")};
  background-image: url(${DownArrow});
  background-repeat: no-repeat;
  background-position: 95%;
  background-size: 12px 12px;
  color: ${(props: FormTypes) => props?.theme?.color("table_black")};
  cursor: pointer;
  required:invalid {
    color: ${(props: FormTypes) => props?.theme?.color("gray")};
  }
  option[value=''][disabled] {
    display: none;
  }
  option {
    color: ${(props: FormTypes) => props?.theme?.color("table_black")};
  }
  :focus {
    outline: 0.5px solid ${({ theme, isEmpty }: FormTypes) => (isEmpty ? theme.color("transparent") : theme.color("focus_blue"))};
    border-radius: 0px;
  }
`

Select.defaultProps = {
  width: "100%",
  height: "100%",
}
export const TxtArea = styled.textarea<FormTypes>`
  border: 0.5px solid #54c4cf;
  border-radius: 2px !important;
  resize: ${(props: FormTypes) => props.resize || "none"};
  width: ${(props: FormTypes) => (props.width ? props.width : "100%")};
  height: ${(props: FormTypes) => (props.height ? props.height : "139px")};
  padding: 10px;
`

export const MainInputContainer = styled.div<FormTypes>`
  ${({ theme, errorMessage, isValid, isEmpty }: FormTypes) => {
    if (errorMessage) {
      if (isEmpty) {
        return theme.color("error")
      }
      if (!isValid) {
        return theme.color("information")
      }
    }
    return theme.color("text_line")
  }};
`
