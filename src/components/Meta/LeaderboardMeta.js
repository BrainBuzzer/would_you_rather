import React, { Component } from 'react'

export default class LeaderboardMeta extends Component {
  render () {
    return (
      <div className="leaderboard-meta">
        <div className="centered-leaderboard">
          <img src="./leaderboard.png" alt="Leaderboard icon" className="leaderboard-icon" />
          <span>Leaderboard</span>
        </div>
      </div>
    )
  }
}
