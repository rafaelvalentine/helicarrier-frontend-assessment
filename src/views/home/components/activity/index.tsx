import React, { } from "react"
import { BsPlusCircle } from "react-icons/bs"
import { Form, Formik } from "formik"
import { useDispatch } from "react-redux"
import { useToggle } from "../../../../shared/hooks"
import AddEmployeeModal from "../add-employee"
import { handleCreateEmployee } from "../../../../store"
import { Wrapper, StyledButton as Button, StyledSelect as Select, StyledInput as Input } from "./styles"

function Activity() {
    const [isOpen, setIsOpen] = useToggle()
const dispatch = useDispatch()

  return (
    <>
    <Wrapper>
      <div className="flex justify-center items-center space-x-2">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={{}}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              // eslint-disable-next-line
              alert(JSON.stringify(values, null, 2))
            //   history.push('/dashboard')
              actions.setSubmitting(false)
            }, 1000)
          }}
        >
          {() => (
            <Form>
              <Input search name="search" type="text" placeholder="Search " />
            </Form>
          )}
        </Formik>
        <Button className="add-button bg-white" type="button" onClick={(e)=>{
            e.preventDefault()
            setIsOpen(true)
        }}>
          <BsPlusCircle className="h-6 w-6 text-blue-700" />
        </Button>
        <Select className="select" defaultValue="Sort by" placeholder="Sort by">
          <option disabled selected>
            Sort by
          </option>
        </Select>
      </div>
    </Wrapper>
    <AddEmployeeModal show={isOpen} handleClose={setIsOpen} handleCreateEmployee={(data)=> dispatch(
        handleCreateEmployee(data)
      )} />
    </>
  )
}

export default Activity
