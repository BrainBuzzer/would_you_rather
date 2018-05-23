import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserNav extends Component {
  render () {
    return (
      <div className="menu">
        <Link to='/dashboard' className="logo">Would You Rather?</Link>
        <Link to='/dashboard' className="your-questions">Your Questions</Link>
        <Link to='/dashboard' className="add primary button">Add a question</Link>
        <Link to='/logout' className="danger button">Logout</Link>
      </div>
    )
  }
}

export default UserNav
