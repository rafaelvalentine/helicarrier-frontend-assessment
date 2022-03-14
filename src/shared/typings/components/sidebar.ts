export type Link = {
  name: string
  location: string
  sublinks: { location: "expenses" }[]
}
export type SidebarProps = {
  bottom?: React.ReactNode[]
  children: React.ReactNode
  links?: Link[]
}
