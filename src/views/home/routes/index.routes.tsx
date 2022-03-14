import React from "react"
import { Route, Switch } from "react-router-dom"

/**
 * pages
 */

import { Landing } from "../pages"

const HomeRoute = function() {
  return <Switch>
    <Route exact path="/" component={Landing} />
  </Switch>
}

export default HomeRoute
