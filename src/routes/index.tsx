import React from "react"
import { Route, Switch } from "react-router-dom"
import { RootStackParamListType } from "../shared/typings"


/* pages */

import { HomeRoute as Home } from "../views/home"




/* this handles routes that do not require a layout */
export const PageRoutes: RootStackParamListType ={
  Home: {
    path: "/",
    component: Home,
    exact: true,
  },
}

/* this handles all routes */
export const BuildRoutes: RootStackParamListType = {...PageRoutes,}

const Routes = function() {
  return (
    <Switch>
      {(Object.keys(BuildRoutes) as (keyof typeof BuildRoutes)[]).map((name) => (
        <Route key={name} {...BuildRoutes[name]} />
      ))}
    </Switch>
  )
}
export default Routes
