import React from 'react'
import { Link } from 'react-router-dom'

const HomeNav = () => {
  return (
    <div className="menu-home">
      <Link to="/" className="logo">Would You Rather?</Link>
      <Link to="/auth" className="login">Login</Link>
      <Link to="/auth" className="register primary button">Register</Link>
    </div>
  )
}

export default HomeNav
