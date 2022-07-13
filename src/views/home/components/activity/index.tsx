import React from "react"
import { BsSliders } from "react-icons/bs"
import { IoMdClose } from "react-icons/io"

import { AiOutlineFileSearch } from "react-icons/ai"

import { Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { useToggle } from "../../../../shared/hooks"
import AddEmployeeModal from "../add-employee"
import { handleSetSearchFilter, handleSetSearchQuery } from "../../../../store"
import Filters from "../filter"
import { Wrapper, StyledButton, StyledInput } from "./styles"

function Activity() {
  const [isOpen, setIsOpen] = useToggle()
  const dispatch = useDispatch()

  return (
    <>
      <Wrapper>
        <div className="w-full h-full md:w-2/5 flex justify-start items-center">
          <Formik
            initialValues={{ query: "" }}
            // validationSchema={{}}
            onSubmit={({ query }, actions) => {
              dispatch(handleSetSearchQuery({ query }))
              actions.setSubmitting(false)
            }}
          >
            {({ values, handleReset, handleSubmit }) => (
              <form className="w-full flex justify-end items-center" onSubmit={handleSubmit}>
                <StyledInput
                  search
                  name="query"
                  type="text"
                  placeholder="Search"
                  append={
                    values.query.length > 0 && (
                      <IoMdClose
                        onClick={() => {
                          handleReset()
                          handleSubmit()
                          // window.location.reload()
                        }}
                        className="w-6 h-6 cursor-pointer"
                      />
                    )
                  }
                />
                <StyledButton
                  className="add-button bg-white"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault()
                    handleSubmit()
                  }}
                >
                  <AiOutlineFileSearch className="h-6 w-6 text-blue-700" />
                </StyledButton>
              </form>
            )}
          </Formik>

          {/* <Select className="select" defaultValue="Sort by" placeholder="Sort by">
          <option disabled selected>
            Sort by
          </option>
        </Select> */}
        </div>
        <div>
          <StyledButton
            className={`add-button ${isOpen ? "bg-blue-400": "bg-white"}`}
            type="button"
            onClick={(e) => {
              e.preventDefault()
              setIsOpen(!isOpen)
            }}
          >
            <BsSliders className={`h-6 w-6 rotate-90 ${isOpen ? "text-white" : "text-blue-700"}`} />
          </StyledButton>
        </div>
      </Wrapper>

      {isOpen && <div>
        <Filters />
      </div>}
    </>
  )
}

export default Activity
