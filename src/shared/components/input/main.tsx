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
}

function Main({ label, placeholder, onKeyUp, className, required, small, inputRef, id, search, preend, append, ...props }: MainProps) {
  const [type, setType] = useState<StyledProps["type"]>("text")

  const [field, meta] = useField({
    name: props?.name || "",
    validate: props?.validate,
    type,
    multiple: props?.multiple,
    value: props?.value,
  })

  useEffect(() => {
    if (props?.type && props?.type.toLowerCase() === "password") {
      setType("password")
    }
  }, [])
  return (
    <Form.MainLabelContainer className={className} margin={props.margin} ref={inputRef}>
      {label ? (
        <Form.MainLabel>
          <Form.BoldLabel className="input-label">
            {" "}
            {label} <bdi>{required ? "*" : ""}</bdi>{" "}
          </Form.BoldLabel>{" "}
          <br />
        </Form.MainLabel>
      ) : null}
      <Form.MainInputContainer
        className="w-full flex justify-start items-center"
        errorMessage={meta?.error}
        isValid={!meta?.error}
        isEmpty={!meta?.value}
      >
        {search && !preend && (
          <Search
            className="mx-2 h-4 w-4"
          />
        )}
        <Form.MainInput placeholder={placeholder} onKeyUp={onKeyUp} {...props} {...field} type={type} />
        {props?.type && props?.type.toLowerCase() === "password" && type === "password" && !append && (
          <Visibility
            className="mx-2 cursor-pointer h-4 w-4"
            onClick={() => setType("text")}
          />
        )}
        {props?.type && props?.type.toLowerCase() === "password" && type !== "password" && !append && (
          <VisibilityClose
            className="mx-2 cursor-pointer h-4 w-4"
            onClick={() => setType("password")}
          />
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
}

export default Main
