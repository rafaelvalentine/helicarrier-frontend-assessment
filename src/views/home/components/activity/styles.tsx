import styled from "styled-components"
import tw from "twin.macro"
import { Button, Input, Select } from "../../../../shared/components"

export const Wrapper = styled.section`
  ${tw`flex flex-row-reverse justify-start items-center p-10 h-14`}
  .select {
  }
`

export const StyledButton = styled(Button)`
  ${tw`w-20 h-10 m-0 mx-4`}
`

export const StyledInput = styled(Input)`
  ${tw` flex justify-center items-center shadow-3xl`}
  height: 40px;
`
export const StyledSelect = styled(Select)`
  ${tw`w-40 mx-4 mb-0`}
  height: 40px;
  select {
    ${tw`border-transparent rounded-md border border-solid mb-0 shadow-3xl focus:outline-none`}
  }
`
