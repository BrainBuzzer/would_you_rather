import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class CreateMeta extends Component {
  render () {
    return (
      <div className="meta">
        <div className="form-title">
          Create New Question
        </div>
        <Link to='/leaderboard' className="leaderboard">Leaderboard</Link>
      </div>
    )
  }
}

export default CreateMeta
