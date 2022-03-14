const colors: { [index: string]: string } = {
  white: "#FFFFFF",
  transparent: "transparent",
}

const color = (colorName: string): string => (colorName ? colors[colorName] : "")

export default color
