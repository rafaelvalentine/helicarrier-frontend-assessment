export interface Size {
  [index: string]: string
}
const ScreenSizes: Size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

const query: Size = {
  mobileS: `(min-width: ${ScreenSizes.mobileS})`,
  mobileM: `(min-width: ${ScreenSizes.mobileM})`,
  mobileL: `(min-width: ${ScreenSizes.mobileL})`,
  tablet: `(min-width: ${ScreenSizes.tablet})`,
  laptop: `(min-width: ${ScreenSizes.laptop})`,
  laptopL: `(min-width: ${ScreenSizes.laptopL})`,
  desktop: `(min-width: ${ScreenSizes.desktop})`,
  desktopL: `(min-width: ${ScreenSizes.desktop})`,
}
const breakpoint = (size: string): string => (size ? query[size] : "")
export default breakpoint
