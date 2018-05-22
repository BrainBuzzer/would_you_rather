import React, { Component } from 'react'
import UserNav from './Navigation/UserNav'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  render () {
    const { auth } = this.props

    if (auth === null) {
      return <Redirect to='/auth' />
    }
    return (
      <div>
        <UserNav />
      </div>
    )
  }
}

function mapStateToProps ({ questions, auth }) {
  return {
    questions,
    auth
  }
}

export default connect(mapStateToProps)(Dashboard)
