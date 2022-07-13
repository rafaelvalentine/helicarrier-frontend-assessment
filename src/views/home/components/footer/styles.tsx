import styled from "styled-components"
import tw from "twin.macro"

export const Wrapper = styled.section`
  ${tw`bg-gray-200 h-20 w-full text-gray-500 flex justify-around items-center font-medium px-3`}
  ul{
    ${tw`w-2/6 flex justify-center items-center space-x-4`}
    li{
        ${tw`capitalize text-blue-700`}
    }
  }
`
