import React from "react"
import { useDispatch, useSelector } from "react-redux"
import StyledWrapper, { StyledFilter } from "./index.styled"
import { getSearchFilters, handleSetSearchFilter, handleRemoveSearchFilter } from "../../../../store"

function Index() {
  const dispatch = useDispatch()
  const filters: string[] = useSelector(getSearchFilters)
  const setFilter = (filter: string) => {
    dispatch(handleSetSearchFilter({ filter }))
  }
  const removeFilter = (filter: string) => {
    dispatch(handleRemoveSearchFilter({ filter }))
  }

  return (
    <StyledWrapper>
      {/* <StyledFilter
        className={`${filters.includes("merlin") ? "active" : ""}`}
        onClick={() => {
          if (filters.includes("merlin")) {
            removeFilter("merlin")
          } else {
            setFilter("merlin")
          }
        }}
      >
        merlin
      </StyledFilter>
      <StyledFilter
        className={`${filters.includes("falcon") ? "active" : ""}`}
        onClick={() => {
          if (filters.includes("falcon")) {
            removeFilter("falcon")
          } else {
            setFilter("falcon")
          }
        }}
      >
        falcon
      </StyledFilter> */}
      <StyledFilter
        className={`${filters.includes("success") ? "active" : ""}`}
        onClick={() => {
          if (filters.includes("success")) {
            removeFilter("success")
          } else {
            if (!filters.includes("failed")) { // eslint-disable-line no-lonely-if
              setFilter("success")
            }
          }
        }}
      >
        success
      </StyledFilter>
      <StyledFilter
        className={`${filters.includes("failed") ? "active" : ""}`}
        onClick={() => {
          if (filters.includes("failed")) {
            removeFilter("failed")
          } else {
            if (!filters.includes("success")) { // eslint-disable-line no-lonely-if
              setFilter("failed")
            }
          }
        }}
      >
        failed
      </StyledFilter>
    </StyledWrapper>
  )
}

export default Index
