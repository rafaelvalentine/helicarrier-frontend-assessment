import React from "react"

import { BsHouseDoor, BsChevronDown } from "react-icons/bs"
import { Wrapper } from "./styles"
import User from "../../../../shared/themes/assets/avatars/default_user.png"

const Navbar = function () {
  return (
    <Wrapper>
        <div className="flex justify-center items-center space-x-2">
          <BsHouseDoor className="h-8 w-8" />
          <p className="text-xl">
            Relocation<bdo className="text-blue-700">Online</bdo>
          </p>
        </div>
        <div className="flex justify-center items-center space-x-2 cursor-pointer">
          <img className="rounded-full h-8 w-8" src={User} alt="signed user" />
          <p className="font-normal">Valentine</p>
          <BsChevronDown className="w-4 h-4" />
        </div>
      </Wrapper>
  )
}

export default Navbar
