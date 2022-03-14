import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import employees, { EmployeeState, handleSetEmployeeState, handleGetEmployee, handleCreateEmployee } from "./employees"


const reducer = combineReducers({ employees })
const store = configureStore({ reducer })
export default store
export type {EmployeeState}
export{
handleSetEmployeeState, handleGetEmployee, handleCreateEmployee
}
