/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Helmet } from "react-helmet"
import { connect, ConnectedProps } from "react-redux"
import { Activity, Footer, Navbar, ListItems, RowHead } from "../../components"


type Props = ConnectedProps<typeof connector>
type State = Record<string, unknown>
class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {}

  render() {
    return (
      <>
        {/*  this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
        </Helmet>
        <div id="_home" className="h-screen overflow-x-hidden">
          <Navbar />
          <div className="h-[85%] w-full px-2 md:px-0 md:w-[85%] mx-auto overflow-y-auto">
            <Activity />
            <RowHead />
            <div className="my-4 px-1 w-full h-4/5 max-h-4/5 overflow-y-auto">
                <ListItems/>
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}
const mapStateToProps = (state: any) => ({})

const mapDispatchToProps = (dispatch: any) => ({  })

const connector = connect(mapStateToProps, mapDispatchToProps)

export default connector(Index)
