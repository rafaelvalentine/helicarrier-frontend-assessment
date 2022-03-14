import React from "react"
import { RouteComponentProps } from "react-router-dom"



export type RootStackParamListType = {
  [key: string]: {
    path: string
    component: React.FC | React.ComponentType<any> | React.ComponentType<RouteComponentProps<any>> | undefined
    exact: boolean
  }
}
