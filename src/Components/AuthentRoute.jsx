import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import isAuthenticated from './AuthSevice'
import { jwtDecode } from 'jwt-decode'

const AuthentRoute = ({ Component, role }) => {
  const loggedIn = isAuthenticated()
  const token = localStorage.getItem('ematoken')

  if (!loggedIn) {
    return <Navigate to="/" />
  }

  try {
    const decodedToken = jwtDecode(token)

    if (decodedToken.role === 'Employe' && role === 'Employe') {
      return <Component />
    } else if (decodedToken.role === 'Admin' && role === 'Admin') {
      return <Component />
    } else {
      return <Navigate to="/" />
    }
  } catch (error) {
    console.log(error)
    return <Navigate to="/" />
  }
}

export default AuthentRoute
