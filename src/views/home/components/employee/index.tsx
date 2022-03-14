/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import State from "../states"
import { Wrapper, StyledLogo as Logo } from "./styles"

interface IProps {
  avatar?: any
  fullName?: string
  status?: boolean | string
  employeeId?: string | number
  age?: string | number
  email?: string
  phoneNumber?: string
  team?: string
  position?: string,
  state?: string
}

function Employee({ avatar, fullName, status, employeeId, age, email, phoneNumber, position, team, state }: IProps) {
  return (
    <Wrapper>
      <div className="avatar-wrapper h-12 w-30 flex justify-start items-center" title="employee name">
        <Logo src={avatar} className="rounded-full" />
        <div className="ml-4 text-gray-500 w-full">
          <p>{fullName}</p>
          <div className="flex justify-start items-center text-xs ">
            <div className={`rounded-full ${status === "online" || status === true ? "bg-green-600" : "bg-red-600"} h-2 w-2 online mr-1`} />
            <p>{status ? "online" : "offline"}</p>
          </div>
        </div>
      </div>
      <div className="employeeId" title="employee id">
        <p>{employeeId}</p>
      </div>
      <div className="age" title="age">
        <p>{age}</p>
      </div>
      <div className="email" title="email">
        <p>{email}</p>
      </div>
      <div className="phone-number" title="phone number">
        <p>{phoneNumber}</p>
      </div>
      <div className="position" title="position">
        <p>{position}</p>
      </div>
      <div className="team" title="team">
        <p>{team}</p>
      </div>
      <div className="status" title="enmployee state">
        <State newState={state} employeeId={employeeId}/>
      </div>
    </Wrapper>
  )
}
Employee.defaultProps = {
  avatar: "",
  fullName: "John Doe",
  status: false,
  employeeId: "2345",
  age: "30",
  email: "example@mail.com",
  phoneNumber: "+2347056346842",
  position: "web engineer",
  team: "development",
  state: "inactive",
}
export default Employee
