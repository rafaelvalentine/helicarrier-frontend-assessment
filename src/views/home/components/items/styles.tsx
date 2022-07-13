import styled from "styled-components"
import tw from "twin.macro"
import { Logo } from "../../../../shared/components"

export const Wrapper = styled.section`
  ${tw`mb-4 w-[1000px] md:w-full h-20 rounded-[10px] bg-gray-50 
  shadow-3xl flex justify-between items-center relative px-2 overflow-x-auto  gap-x-4`}
  .avatar-wrapper{

  }
`

export const StyledLogo = styled(Logo)`
  ${tw`h-12 w-12 `}
`
