import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Home from './Home'
import Auth from './Auth'

class App extends Component {
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

export default App
