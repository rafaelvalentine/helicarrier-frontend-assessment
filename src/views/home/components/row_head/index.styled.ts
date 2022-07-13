import styled from "styled-components"
import tw from "twin.macro"

const StyledWrapper = styled.section`
    &&{
        ${tw`w-full py-4 px-2 flex justify-between items-center bg-[#94A3B8]`}
				div{
					${tw`text-[11px] leading-[15px] md:text-base font-light capitalize text-white`}
				}
    }
`

export default StyledWrapper