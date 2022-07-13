import styled from "styled-components"
import tw from "twin.macro"

const StyledWrapper = styled.section`
  && {
    ${tw`w-full max-w-full flex justify-end items-center overflow-x-auto py-4`}
  }
`

export const StyledFilter = styled.div`
  && {
    ${tw`w-[200px] h-[32px] bg-white border border-blue-400 
    text-black text-sm md:text-base capitalize rounded-3xl flex justify-center
     items-center mx-4 cursor-pointer`}
    &.active {
      ${tw`bg-blue-400 text-white font-bold`}
    }
    &:hover{
        ${tw`bg-blue-200 text-white font-bold`}
    }
  }
`

export default StyledWrapper
