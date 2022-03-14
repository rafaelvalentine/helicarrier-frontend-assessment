import React from "react"
import { Link } from "react-router-dom"
import { Wrapper } from "./styles"

function Footer() {
  return (
    <Wrapper>
      <div>2020 - 2022 RelocationOnline. Inc All right reserved</div>
      <ul>
        <li>
          <Link to="/">term of use</Link>
        </li>
        <li>
          <Link to="/">privacy policy</Link>
        </li>
      </ul>
    </Wrapper>
  )
}

export default Footer
