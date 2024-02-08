import axios from 'axios'
import React from 'react'

const isAuthenticated = () => {
  const userToken = localStorage.getItem('ematoken')
  return !!userToken
}
export default isAuthenticated
