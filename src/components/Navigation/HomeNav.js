import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomeNav extends Component {
  render () {
    return (
      <div className="menu-home">
        <Link to="/" className="logo">Would You Rather?</Link>
        <Link to="/auth" className="login">Login</Link>
        <Link to="/auth" className="register primary button">Register</Link>
      </div>
    )
  }
}
