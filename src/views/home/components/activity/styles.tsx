import styled from "styled-components"
import tw from "twin.macro"
import { Button, Input, Select } from "../../../../shared/components"

export const Wrapper = styled.section`
  ${tw`w-full flex justify-end items-center py-10 h-14`}
`

export const StyledButton = styled(Button)`
  && {
    ${tw`w-20 h-[48px] m-0 mx-2`}
  }
`

export const StyledInput = styled(Input)`
  && {
    ${tw`flex justify-center items-center shadow-3xl`}
    .input-container {
      ${tw`h-[48px] px-2`}
      input {
        ${tw`h-full px-2`}
      }
    }
  }
`
export const StyledSelect = styled(Select)`
  && {
    ${tw`w-40 mx-4 mb-0`}
    select {
      ${tw`border-transparent rounded-md border border-solid mb-0 shadow-3xl focus:outline-none`}
    }
  }
`
