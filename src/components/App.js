import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Auth from './Auth'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'

class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }
  render () {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <div className="container">
          <Route exact path='/auth' component={Auth} />
          <Route exact path='/dashboard' component={Dashboard} />
        </div>
      </div>
    )
  }
}

export default withRouter(connect()(App))
