import * as React from "react"
import { ThemeProvider } from "styled-components"
import theme from "./shared/main"

const ThemeWrapper = function({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default ThemeWrapper
