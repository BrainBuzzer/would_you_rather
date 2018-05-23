import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HelloMeta extends Component {
  render () {
    const { user } = this.props
    const avatarURL = user.avatarURL === '' ? './user-icon.png' : user.avatarURL
    return (
      <div className="meta">
        <div className="hello-user">
          <img src={avatarURL} alt={user.name} className="user-icon" />
          <span>Hello, {user.name}.</span>
        </div>
        <Link to='/leaderboard' className="leaderboard">Leaderboard</Link>
      </div>
    )
  }
}

export default HelloMeta
