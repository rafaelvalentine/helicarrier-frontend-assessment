/* eslint-disable no-restricted-syntax, react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import Items from "../items"
import { LaunchesPastQuery, useLaunchesPastQuery } from "../../../../services/graphql/generated"
import { getSearchQuery, getSearchFilters } from "../../../../store"

function Index() {
  const query = useSelector(getSearchQuery)
  const filters = useSelector(getSearchFilters)
  const { data, loading, refetch } = useLaunchesPastQuery({})
  const [launchesPast, setLaunchesPast] = useState<LaunchesPastQuery["launchesPast"]>([])

  const dateSortedLaunchesPast = useMemo(() => {
    let sortLaunchesPast = []
    const launchesPastByYear: {
      [key: string]: {
        date: string
        launchesPast?: LaunchesPastQuery["launchesPast"]
      }
    } = {}

    if (launchesPast && launchesPast.length > 0) {
      // eslint-disable-next-line no-restricted-syntax
      for (const launchPast of launchesPast) {
        if (launchPast && launchPast?.launch_year) {
          if (launchesPastByYear[launchPast?.launch_year]) {
            const yearLaunchesPast = launchesPastByYear[launchPast?.launch_year].launchesPast as Array<LaunchesPastQuery["launchesPast"]>
            launchesPastByYear[launchPast?.launch_year].date = launchPast?.launch_year

            if (yearLaunchesPast && yearLaunchesPast.length > 0) {
              ;(launchesPastByYear[launchPast?.launch_year].launchesPast as Array<LaunchesPastQuery["launchesPast"]>) = [
                ...yearLaunchesPast,
                launchPast,
              ] as Array<LaunchesPastQuery["launchesPast"]>
            }
          } else {
            launchesPastByYear[launchPast?.launch_year] = {
              date: launchPast?.launch_year,
              launchesPast: [launchPast],
            }
          }
        }
      }
    }
    sortLaunchesPast = [...Object.values(launchesPastByYear)]

    return sortLaunchesPast
  }, [launchesPast])

  useEffect(() => {
    if (data && data.launchesPast && data.launchesPast.length > 0) setLaunchesPast(data.launchesPast)
  }, [data])

  useEffect(() => {
    const originalLaunchesPast = launchesPast
    // eslint-disable-next-line no-unused-expressions
    if (query !== "" && originalLaunchesPast && originalLaunchesPast.length > 0) {
      const queryLaunchesPast = originalLaunchesPast.filter((launch) => {
        if (
          launch?.launch_site?.site_name_long?.toLowerCase()?.match(query as string) ||
          launch?.mission_name?.toLowerCase()?.match(query as string) ||
          launch?.rocket?.rocket_name?.toLowerCase()?.match(query as string) ||
          launch?.rocket?.rocket_type?.toLowerCase()?.match(query as string)
        ) {
          return launch
        }
        return null
      })
      if (queryLaunchesPast.length > 1) {
        setLaunchesPast(queryLaunchesPast)
      }
    } else {
      refetch().then((result) => {
        setLaunchesPast(result.data.launchesPast)
      })
    }
  }, [query])

  useEffect(() => {
    const originalLaunchesPast = launchesPast

    const filteredLaunchesPastObj: any = {}
    let filteredLaunchesPastArray: any = []

    if (originalLaunchesPast) {
      for (const filter of filters) {
        const success = filter === "success" ? true : false // eslint-disable-line  no-unneeded-ternary
        for (const launch of originalLaunchesPast) {
          if (
            launch?.launch_site?.site_name_long?.toLowerCase()?.match(filter as string) ||
            launch?.mission_name?.toLowerCase()?.match(filter as string) ||
            launch?.rocket?.rocket_name?.toLowerCase()?.match(filter as string) ||
            launch?.rocket?.rocket_type?.toLowerCase()?.match(filter as string) ||
            launch?.launch_success === success
          ) {
            if (launch.id) {
              if (!filteredLaunchesPastObj[launch.id]) {
                filteredLaunchesPastObj[launch.id] = launch
              }
            }
          }
        }
      }
    }

    filteredLaunchesPastArray = [...Object.values(filteredLaunchesPastObj)]
    if (filteredLaunchesPastArray.length > 1) {
      setLaunchesPast(filteredLaunchesPastArray)
    } else {
      refetch().then((result) => {
        setLaunchesPast(result.data.launchesPast)
      })
    }
  }, [filters])

  return (
    <div className="w-full ">
      {loading && (
        <div className="w-full p-4">
          <p className="text-center ">Loading....</p>
        </div>
      )}
      {dateSortedLaunchesPast &&
        dateSortedLaunchesPast.length > 0 &&
        dateSortedLaunchesPast.map(({ date, launchesPast: pastLaunches }) => {
          return (
            <div key={date} className="w-full mb-8 overflow-x-auto px-2 md:px-0">
              <div className="w-full p-2">
                <p className="text-left font-bold text-xl md:text-3xl ">{date}</p>
              </div>
              <div className="w-full px-2 md:px-0">
                {pastLaunches && pastLaunches.length > 0 ? (
                  pastLaunches.map(({ ...launch }) => <Items key={launch.id} {...launch} />)
                ) : (
                  <div className="w-full p-4">
                    <p>No Launches on this date</p>
                  </div>
                )}
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Index
