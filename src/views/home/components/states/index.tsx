/* eslint-disable react/no-unused-prop-types, react/require-default-props */ 
import React, { useEffect, useState, useRef } from "react"
import { useToggle, useOnClickOutside } from "../../../../shared/hooks"
import { Wrapper } from "./styles"

interface IProps {
  newState?: string
  handleNewState?: (state: string) => void
  employeeId?: string | number | undefined 
  //   isOpen?: boolean
  //   setIsOpen?: (open?: boolean) => void
}
function States({ newState }: IProps) {
  const [{ state, color }, setState] = useState<{ state: string; states: string[]; color: { [key: string]: string } }>({
    states: ["success", "failed"],
    state: "success",
    color: {
      success: "bg-green-700",
      failed: "bg-red-700",
    },
  })
  const [isOpen, setIsOpen] = useToggle()

  useEffect(() => {
    if (newState && newState !== state) {
      setState((values) => ({ ...values, state: newState }))
    }
  }, [newState, isOpen, state])

  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    setIsOpen(false)
  }

  const handleClickInside = () => {
    // Your custom logic here
    // console.log("clicked inside")
    setIsOpen((value: boolean) => !value)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <div ref={ref}>
      <Wrapper>
        <div
          className={`${color[state]} text-white w-32 px-2 py-1 cursor-pointer rounded-[16px] text-center hover:opacity-80`}
          onClick={handleClickInside}
          role="button"
          aria-label={state}
          aria-hidden="true"
        >
          {state}
        </div>
      </Wrapper>
      {/* {isOpen && (
        <div className="absolute text-black z-10 w-44 border border-solid border-gray-200 top-[60px]">
          {states.map((item) => (
            <div
              className={`${
                item === state ? `${color[item]} hover:${color[item]} text-white` : "bg-white hover:bg-gray-100 text-gray-700"
              }  w-full px-4 py-1 border-b-gray-700 `}
              key={item}
              onClick={() => handleSetEmployeeState && dispatch(handleSetEmployeeState({ employeeId, state: item }))}
              role="button"
              aria-label={item}
              aria-hidden="true"
            >
              {item}
            </div>
          ))}
        </div>
      )} */}
    </div>
  )
}

States.defaultProps = {
  newState: "",
  handleNewState: () => {},
  //   isOpen: false,
  //   setIsOpen: () => {},
}

export default States
