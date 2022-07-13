import React, { useState, useEffect } from "react"
import { useField } from "formik"
import * as Form from "../../themes/style/stylc/shared/components"
// import { StyledProps } from "../../typings"

type CheckBoxInputProps = {
  label?: string
  children?: React.ReactNode
  checked?: boolean | undefined
  placeholder?: string
  onKeyUp?: (event: React.SyntheticEvent) => void
  small?: string
  inputRef?:
    | ((((instance: HTMLLabelElement | null) => void) | React.RefObject<HTMLLabelElement> | null) &
        React.RefObject<HTMLInputElement | HTMLLabelElement>)
    | undefined
  validate?: (value: unknown) => undefined | string | Promise<unknown>
  multiple?: boolean
  name: string
  className?: string
  required?: boolean
  type?: "radio" | "checkbox"
  value?: string
  id?: string
  margin?: string
}

function CheckBoxInput({ children, label, className, inputRef, ...props }: CheckBoxInputProps) {
  const [type, setType] = useState<CheckBoxInputProps["type"]>("checkbox")

  const [field] = useField({
    name: props?.name || "",
    // validate: props?.validate,
    type,
    multiple: props?.multiple,
    value: props?.value,
  })

  useEffect(() => {
    if ((props?.type && props?.type?.toLowerCase() === "checkout") || props?.type?.toLowerCase() === "radio") {
      setType(props?.type)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props?.type])
  return (
    <Form.CheckBoxLabel className={className} type={type} ref={inputRef}>
      <Form.MainLabel className="input-label mb-0">
        <Form.BoldLabel className=""> {label} </Form.BoldLabel>
      </Form.MainLabel>
      <Form.CheckBox type={type} {...props} {...field} checked={props.checked} />
      <span className="checkmark" />
    </Form.CheckBoxLabel>
  )
}

CheckBoxInput.defaultProps = {
  children: {},
  checked: false,
  label: "",
  placeholder: "",
  onKeyUp: () => {},
  small: "",
  inputRef: {},
  validate: () => {},
  multiple: false,
  type: "checkbox",
  value: "",
  required: false,
  id: "",
  margin: "",
  className: "",
}
export default CheckBoxInput
