/* eslint max-len: off */
/* eslint react/destructuring-assignment: off */

import React, { useEffect, useState } from "react"
import { useField } from "formik"
import { BsSearch as Search } from "react-icons/bs"
import { MdOutlineVisibility as Visibility, MdOutlineVisibilityOff as VisibilityClose } from "react-icons/md"

import * as Form from "../../themes/style/stylc/shared/components"
import { StyledProps } from "../../typings"

type MainProps = {
  label?: string
  placeholder?: string
  onKeyUp?: (event: React.SyntheticEvent) => void
  onSetValue?: string | {
    value: string;
    shouldValidate?: boolean
  }
  small?: string
  inputRef?:
    | ((((instance: HTMLLabelElement | null) => void) | React.RefObject<HTMLLabelElement> | null) &
        React.RefObject<HTMLInputElement | HTMLLabelElement>)
    | undefined
  validate?: (value: string | void) => undefined | void | Promise<string | void>
  multiple?: boolean
  name?: string
  className?: string
  required?: boolean
  type?: "number" | "text" | "tel" | "radio" | "password" | "checkbox" | "date" | "email" | undefined
  value?: string
  id?: string
  margin?: string
  search?: boolean | undefined
  preend?: React.ReactNode | boolean | undefined
  append?: React.ReactNode | boolean | undefined
  disabled?: boolean
}

function Main({ label, placeholder, onKeyUp, className, required, small, inputRef, search, preend, append, disabled, ...props }: MainProps) {
  const [type, setType] = useState<StyledProps["type"]>("text")

  const [field, meta, helpers] = useField({
    name: props?.name || props?.id || "",
    validate: props?.validate,
    type,
    multiple: props?.multiple,
    value: props?.value,
  })

  useEffect(() => {
    if (props?.type && props?.type.toLowerCase() === "password") {
      setType("password")
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {   
    if (typeof props?.onSetValue === "string")  helpers.setValue(props?.onSetValue)
    if (typeof props?.onSetValue === "object")  helpers.setValue(props?.onSetValue.value, props?.onSetValue.shouldValidate)
  }, [props?.onSetValue])
  return (
    <Form.MainLabelContainer htmlFor={field.name} className={className} margin={props.margin} ref={inputRef}>
      {label ? (
        <Form.MainLabel className="input-label">
          <Form.BoldLabel>
            {" "}
            {label} <span className="asterisk">{required ? "*" : ""}</span>{" "}
          </Form.BoldLabel>{" "}
          <br />
        </Form.MainLabel>
      ) : null}
      <Form.MainInputContainer
        className="w-full flex justify-start items-center input-container"
        errorMessage={meta?.error}
        isValid={!meta?.error}
        isEmpty={!meta?.value}
      >
        {search && !preend && <Search className="mx-2 h-4 w-4 search" />}
        {!search && preend}
        <Form.MainInput placeholder={placeholder} onKeyUp={onKeyUp} {...props} {...field} type={type} disabled={disabled} />
        {append}
        {props?.type && props?.type.toLowerCase() === "password" && type === "password" && !append && (
          <Visibility className="mx-2 cursor-pointer h-4 w-4 icon visibility" onClick={() => setType("text")} />
        )}
        {props?.type && props?.type.toLowerCase() === "password" && type !== "password" && !append && (
          <VisibilityClose className="mx-2 cursor-pointer h-4 w-4 icon invisibility" onClick={() => setType("password")} />
        )}
      </Form.MainInputContainer>

      <Form.SmallLabel className="input-small">{small}</Form.SmallLabel>
      {meta?.error && meta?.touched ? (
        <Form.ErrorMessage data-testid={`${props?.name}-error`} isValid={!meta?.error} isEmpty={!meta?.value} className="input-error">
          {meta?.error}
        </Form.ErrorMessage>
      ) : null}
    </Form.MainLabelContainer>
  )
}

Main.defaultProps = {
  label: "",
  placeholder: "",
  onKeyUp: () => {},
  onSetValue: ()=>{},
  small: "",
  inputRef: {},
  validate: () => {},
  multiple: false,
  type: "text",
  value: "",
  required: false,
  id: "",
  margin: "",
  className: "",
  search: false,
  preend: false,
  append: false,
  name: "",
  disabled: false,
}

export default Main
