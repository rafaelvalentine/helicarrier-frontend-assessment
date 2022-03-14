/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Form, FormikProps, Formik, Field } from "formik"
import * as Yup from "yup"
import { EmployeeState } from "../../../../store"

import { Wrapper, StyledModal as Modal, StyledButton as Button, StyledInput as Main, StyledSelect as Select } from "./styles"

interface Values {
  fullName: string
  email: string
}

function AddEmployee({
  show,
  handleClose,
  handleCreateEmployee,
}: {
  show: boolean
  handleClose: () => void
  handleCreateEmployee: (employee: EmployeeState) => void
}) {
  const AddEmployeeSchema = Yup.object().shape({
    fullName: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Full Name Required"),
    email: Yup.string().email("Invalid email").required("Email is Required"),
    age: Yup.string().required("Age is Required"),
    phoneNumber: Yup.string().required("Age is Required"),
  })
  return (
    <Wrapper>
      <Modal show={show} handleClose={handleClose}>
        <Formik
          initialValues={{
            email: "",
            fullName: "",
            age: "",
            phoneNumber: "",
            position: "",
            team: "",
          }}
          validationSchema={AddEmployeeSchema}
          onSubmit={(values, actions) => {
            handleCreateEmployee({
              ...values,
              employeeId: `${Math.random()}`.substring(0, 5),
              state: "added",
              status: "online",
              position: values.position || "web development",
              team: values.team || "development"
            })
            setTimeout(() => {
            // eslint-disable-next-line
            alert(JSON.stringify(values, null, 2))
            actions.setSubmitting(false)
              handleClose()
            }, 1000)
          }}
        >
          {({ handleSubmit, ...props }: FormikProps<Values>) => (
            <Form>
              <Main name="fullName" type="text" label="Full Name" required />
              <Main name="email" type="email" label="Email Address" required />
              <Main name="age" type="text" label="age" required />
              <Main name="phoneNumber" type="text" label="Phone Number" required />
              <Field as={Select} name="position" className="" label="Position">
                <option value="web developer">Web Developer</option>
                <option value="designer">Designer</option>
              </Field>
              <Field as={Select} name="team" label="Team">
                <option value="development">Development</option>
                <option value="design">Design</option>
              </Field>
              <Button
                className="default"
                disabled={!props.isValid && !props.isInitialValid}
                type="submit"
                onClick={(e) => {
                  e.preventDefault()
                  handleSubmit()
                }}
              >
                Add Employee
              </Button>

              {/* <button type="submit" disabled={!props.isValid && !props.isInitialValid}>
                Login
              </button> */}
            </Form>
          )}
        </Formik>
      </Modal>
    </Wrapper>
  )
}

export default AddEmployee
