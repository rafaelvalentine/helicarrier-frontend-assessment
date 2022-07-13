/* eslint no-param-reassign: "off" */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-console */
/*  eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from "react"
import { createSlice } from "@reduxjs/toolkit"

export interface SeachState {
  query: string | number | undefined
  filters: string[]
}

const initialState: SeachState = {
  query: "",
  filters: [],
}
// Slice
const slice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery(state, action: { payload: { query: string | number | undefined } }) {
      state.query = action.payload.query
    },
    setSearchFilter(state, action: { payload: { filter: string } }) {
      const { filters } = state
      state.filters = [...filters, action.payload.filter]
    },
    removeSearchFilter(state, action: { payload: { filter: string } }){
        const { filters } = state

        const filtered = filters.filter((filter)=>( filter !== action.payload.filter ))
        state.filters = filtered
    }
  },
})
export default slice.reducer

// Actions
const { setSearchQuery, setSearchFilter, removeSearchFilter } = slice.actions
export const handleSetSearchQuery =
  ({ query }: { query: string | number | undefined }) =>
  async (dispatch: Dispatch<{ payload: { query: string | number | undefined }; type: string }>) => {
    try {
      dispatch(setSearchQuery({ query }))
      return null
    } catch (e: any) {
      return console.error(e.message)
    }
  }
export const handleSetSearchFilter =
  ({ filter }: { filter: string }) =>
  async (dispatch: Dispatch<{ payload: { filter: string }; type: string }>) => {
    try {
      dispatch(setSearchFilter({ filter }))
    } catch (e: any) {
      console.error(e.message)
    }
  }

  export const handleRemoveSearchFilter =
  ({ filter }: { filter: string }) =>
  async (dispatch: Dispatch<{ payload: { filter: string }; type: string }>) => {
    try {
      dispatch(removeSearchFilter({ filter }))
    } catch (e: any) {
      console.error(e.message)
    }
  }

export const getSearchQuery = (state: { search: SeachState }) => state.search.query
export const getSearchFilters = (state: { search: SeachState }) => state.search.filters
