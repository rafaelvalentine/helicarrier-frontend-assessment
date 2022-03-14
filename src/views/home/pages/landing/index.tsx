/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { Helmet } from "react-helmet"
import { connect, ConnectedProps } from "react-redux";
import { Activity, Employee, Footer, Navbar } from "../../components"
import { EmployeeState, handleGetEmployee } from "../../../../store"

type Props = ConnectedProps<typeof connector>;
type State = Record<string, unknown>
class Index extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { }
  }

  componentDidMount() {
    // eslint-disable-next-line
    const { handleGetEmployee } = this.props
    handleGetEmployee()
  }

  render() {
    const { employees } = this.props
    return (
      <>
        {/*  this component handles setting the title and dynamically injecting head specific tags */}
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home Page</title>
        </Helmet>
        <div id="_home" className="h-screen">
          <Navbar />
          <div className="h-[84%] w-[85%] mx-auto">
            <Activity />
            <div className="my-4 w-full h-4/5 max-h-4/5 overflow-hidden">
              {employees.length > 0 && employees.map(employee=>{
                return <Employee key={employee.employeeId} {...employee}/>
              })}
              
            </div>
          </div>
          <Footer />
        </div>
      </>
    )
  }
}
const mapStateToProps = (state: {employees: {employees: EmployeeState[]}}) => ({
	// currentUser: selectCurrentUser(state),
  employees: state.employees.employees
});

const mapDispatchToProps = (dispatch: any) => ({handleGetEmployee: ()=> dispatch(handleGetEmployee())});

const connector = connect(mapStateToProps, mapDispatchToProps);



export default connector(Index)