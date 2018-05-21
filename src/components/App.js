import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Home from './Home'
import Auth from './Auth'
import { handleInitialData } from '../actions/shared'

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
        </div>
      </div>
    )
  }
}

export default connect()(App)
