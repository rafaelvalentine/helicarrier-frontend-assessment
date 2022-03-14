import styled from "styled-components"
import tw from "twin.macro"
import { Logo } from "../../../../shared/components"

export const Wrapper = styled.section`
  ${tw`mb-4 w-full h-20 rounded-[10px] bg-gray-50 shadow-3xl flex justify-evenly items-center px-8 relative overflow-visible`}
  .avatar-wrapper{

  }
`

export const StyledLogo = styled(Logo)`
  ${tw`h-12 w-12 `}
`
