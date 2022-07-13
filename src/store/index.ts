import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import employees, { EmployeeState, handleSetEmployeeState, handleGetEmployee, handleCreateEmployee } from "./employees"
import search, { handleSetSearchQuery, handleSetSearchFilter, SeachState, getSearchQuery, getSearchFilters, handleRemoveSearchFilter } from "./search" // eslint-disable-line max-len


const reducer = combineReducers({ employees, search })
const store = configureStore({ reducer })
export default store
export type { EmployeeState, SeachState }
export {
  handleSetEmployeeState,
  handleGetEmployee,
  handleCreateEmployee,
  handleSetSearchQuery,
  handleSetSearchFilter,
  getSearchQuery,
  getSearchFilters,
  handleRemoveSearchFilter,
}
