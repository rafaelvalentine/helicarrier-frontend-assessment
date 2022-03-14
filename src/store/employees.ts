/* eslint no-param-reassign: "off" */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/*  eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react"
import { createSlice } from "@reduxjs/toolkit"

export interface EmployeeState {
  fullName: string
  status: string
  avatar?: string
  employeeId?: string
  age?: string | number
  email?: string
  phoneNumber?: string
  position?: string
  team?: string
  state?: string
}

const initialState: {
  employees: EmployeeState[]
} = {
  employees: [
    {
      fullName: "Tommy Ridges",
      status: "online",
      employeeId: `${Math.random()}`.substring(0, 5),
      age: 29,
      email: "helloworld@email.com",
      position: "web developer",
      team: "development",
      state: "active",
    },
    {
      fullName: "Michael Soto",
      status: "offline",
      employeeId: `${Math.random()}`.substring(0, 5),
      age: 34,
      email: "sotototheworldd@email.com",
      position: "designer",
      team: "design",
      state: "in-check",
    },
  ],
}
// Slice
const slice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    setEmployeeState(state, action) {
      const { employees } = state
      state.employees = employees.map((employee) => {
        if (action.payload.employeeId === employee.employeeId) {
          return { ...employee, state: action.payload.state }
        }
        return employee
      })
     localStorage.setItem("work-motion:employees", JSON.stringify(state.employees))
    },
    createEmployee(state, action) {
      const { employees } = state
      state.employees = [...employees, action.payload]
      localStorage.setItem("work-motion:employees", JSON.stringify(state.employees))
    },
    getEmployees(state, action) {
      state.employees = [...action.payload.data]
    },
  },
})
export default slice.reducer
// Actions
const { setEmployeeState, getEmployees, createEmployee } = slice.actions
export const handleSetEmployeeState =
  ({ employeeId, state }: { employeeId: string | number | undefined; state: string }) =>
  async (dispatch: Dispatch<{ payload: { employeeId: string | number | undefined; state: string }; type: string }>) => {
    try {
      // const res = await api.post('/api/auth/login/', { username, password })
      dispatch(setEmployeeState({ employeeId, state }))
      return null
    } catch (e: any) {
      return console.error(e.message)
    }
  }
  export const handleGetEmployee = () => async (dispatch: Dispatch<{ payload: {data: EmployeeState[] }; type: string }>) => {
  try {
    // const res = await api.post('/api/auth/logout/')
   const data = localStorage.getItem("work-motion:employees")
   const employees:EmployeeState[] | null = JSON.parse(data as string)
    if (employees && employees.length > 0 ) {
        dispatch(getEmployees({data: [...employees]})) 
    }
  } catch (e: any) {
    console.error(e.message);
  }
}
export const handleCreateEmployee = (data:EmployeeState) => (dispatch: Dispatch<{ payload: EmployeeState; type: string }>) => {
  try {
    // const res = await api.post('/api/auth/logout/')
    return dispatch(createEmployee(data))
  } catch (e: any) {
    return console.error(e.message);
  }
}
