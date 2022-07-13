/* eslint-disable @typescript-eslint/no-explicit-any, react/require-default-props, react/no-unused-prop-types, object-curly-newline, camelcase */
import React from "react"
import { format, parseISO } from "date-fns"
import State from "../states"
import { Wrapper } from "./styles"

interface IProps {
  mission_name?: string | null
  launch_date_local?: string
  launch_site?: any
  rocket?: any
  launch_success?: boolean | null
}

function Employee({ mission_name, launch_date_local: date, launch_site: site, rocket, launch_success: success }: IProps) {
  return (
    <Wrapper>
      <div className="w-4/6 md:w-1/6" title="mission name">
        <p className="w-full">{mission_name}</p>
      </div>
      <div className="w-4/6  md:w-1/6 md:truncate" title="date">
        <p className="w-full">{format(new Date(parseISO(date as string)), "MMM-do-yy")}</p>
      </div>
      <div className="w-5/6 md:w-1/6" title="launch site">
        <p className="">{site?.site_name_long}</p>
      </div>
      <div className="w-4/6  md:w-1/6 md:truncate" title="rocet name">
        <p className="w-full">{rocket.rocket_name}</p>
      </div>
      <div className="w-4/6 md:w-1/6 md:truncate" title="rocket type">
        <p className="w-full">{rocket.rocket_type}</p>
      </div>
      <div className="" title="launch status">
        <State newState={success ? "success" : "failed"} />
      </div>
    </Wrapper>
  )
}
Employee.defaultProps = {}
export default Employee
