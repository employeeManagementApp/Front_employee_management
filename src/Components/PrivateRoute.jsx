import React from 'react'
import { Route } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { UserContext } from '../App/App'
import isAuthenticated from './AuthSevice'

const PrivateRoute = ({ Component }) => {
  const loggedIn = isAuthenticated()

  return loggedIn ? <Component></Component> : <Navigate to="/"></Navigate>
}

export default PrivateRoute
