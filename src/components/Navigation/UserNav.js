import React, { Component } from 'react'

class UserNav extends Component {
  render () {
    return (
      <div class="menu">
        <a href='/dashboard' class="logo">Would You Rather?</a>
        <a href="#" class="your-questions">Your Questions</a>
        <a href="#" class="add primary button">Add a question</a>
        <a href="#" class="danger button">Logout</a>
      </div>
    )
  }
}

export default UserNav
