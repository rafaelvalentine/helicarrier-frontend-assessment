import styled from "styled-components"
import tw from "twin.macro"
import { Button, Input, Select , Modal } from "../../../../shared/components"

export const Wrapper = styled.section`
  ${tw``}
`

export const StyledModal = styled(Modal)`
  ${tw``}
  .moda-body {
    ${tw`w-52`}
  }
`

export const StyledButton = styled(Button)``

export const StyledInput = styled(Input)`
  ${tw`mb-4 w-[400px]`}
`

export const StyledSelect = styled(Select)`
  ${tw`mb-4 w-[400px]`}
  select {
    ${tw`border-0`}
  }
`
