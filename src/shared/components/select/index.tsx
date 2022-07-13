import React, { ChangeEvent } from "react"
import * as Form from "../../themes/style/stylc/shared/components"

type SelectProps = {
  label?: string
  placeholder?: string
  onKeyUp?: (event: React.SyntheticEvent) => void
  small?: string
  selectRef?:
    | ((((instance: HTMLLabelElement | null) => void) | React.RefObject<HTMLLabelElement> | null) &
        React.RefObject<HTMLInputElement | HTMLLabelElement>)
    | undefined
  validate?: (value: unknown) => undefined | string | Promise<unknown>
  multiple?: boolean
  name?: string
  className?: string
  required?: boolean
  type?: "number" | "text" | "tel" | "radio" | "password" | "checkbox" | "date" | "email" | undefined
  value?: string
  id?: string
  margin?: string
  children?: React.ReactNode
  onChange?: (event: ChangeEvent) => void
  errorMessage?: string
  isEmpty?: boolean
  defaultValue?: string
}

function Select({
  children,
  label,
  name,
  onChange,
  value,
  required,
  small,
  errorMessage,
  isEmpty,
  className,
  selectRef,
  defaultValue,
  ...props
}: SelectProps) {
  return (
    <Form.MainLabelContainer className={className} ref={selectRef}>
      {label ? (
        <Form.MainLabel className="input-label">
          <Form.BoldLabel>
            {" "}
            {label} <span className="asterisk">{required ? "*" : ""}</span>{" "}
          </Form.BoldLabel>{" "}
          <br />
        </Form.MainLabel>
      ) : null}
      <Form.Select 
      name={name} 
      onChange={onChange} 
      value={value} 
      isEmpty={isEmpty} 
      errorMessage={errorMessage} 
      defaultValue={defaultValue}
      required={required}
      {...props}>
        {children}
      </Form.Select>
      <Form.SmallLabel className="input-small">{small}</Form.SmallLabel>
      {errorMessage ? (
        <Form.ErrorMessage data-testid={`${name}-error`} isEmpty={isEmpty} isValid={!errorMessage} className="input-error">
          {errorMessage}
        </Form.ErrorMessage>
      ) : null}
    </Form.MainLabelContainer>
  )
}

Select.defaultProps = {
  children: {},
  label: "",
  placeholder: "",
  onKeyUp: () => {},
  small: "",
  validate: () => {},
  multiple: false,
  type: "text",
  value: "",
  required: false,
  id: "",
  margin: "",
  className: "",
  onChange: () => {},
  errorMessage: "",
  isEmpty: false,
  selectRef: {},
  name: "",
  defaultValue: "",
}

export default Select
