import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'

class PostMeta extends Component {
  render () {
    const { user, time } = this.props
    const avatar = user.avatarURL === '' ? '../user-icon.png' : user.avatarURL
    return (
      <div className="meta">
        <div className="user-details">
          <img src={avatar} alt={user.name} className="user-icon" />
          <span className="by">Question by {user.name}</span>
          <span className="time">Posted {moment(time).fromNow()}</span>
        </div>
        <Link to='/leaderboard' className="leaderboard">Leaderboard</Link>
      </div>
    )
  }
}

function mapStateToProps ({ users }, { userId }) {
  return {
    user: users[userId]
  }
}

export default connect(mapStateToProps)(PostMeta)
