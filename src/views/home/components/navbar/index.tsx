import React from "react"
import { BsHouseDoor, BsChevronDown } from "react-icons/bs"
import { GoThreeBars as Bars } from "react-icons/go"
import { SiSpacex as SpaceX } from "react-icons/si"
import SpaceXMain from "../../../../shared/themes/assets/images/spacex_logo.png"

import { Wrapper } from "./styles"
import User from "../../../../shared/themes/assets/avatars/default_user.png"

const Navbar = function () {
  return (
    <Wrapper>
      <div className="flex justify-center items-center space-x-2">
        <SpaceX className="md:hidden h-[64px] w-[64px]" />
        <p className="hidden md:block text-xl">
          {/* Relocation<bdo className="text-blue-700">Online</bdo> */}
          <img className="w-[180px] h-[80px]" src={SpaceXMain} alt="spacex" />
        </p>
      </div>
      <div className="md:hidden">
        <Bars className="w-6 h-6" />
      </div>
      <div className="flex justify-center items-center space-x-2 cursor-pointer hidden md:flex">
        <img className="rounded-full h-8 w-8" src={User} alt="signed user" />
        <p className="font-normal mx-2">Valentine</p>
        <BsChevronDown className="w-4 h-4" />
      </div>
    </Wrapper>
  )
}

export default Navbar
