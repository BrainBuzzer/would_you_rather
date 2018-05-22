import React, { Component } from 'react'
import HomeNav from './Navigation/HomeNav'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleUserLogin } from '../actions/auth'

class Auth extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: false,
      redirect: false,
      userNotFound: false
    }
    this.handleSwitch = this.handleSwitch.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleSwitch (action) {
    switch (action) {
      case 'login':
        this.setState({ login: true })
        break
      case 'register':
        this.setState({ login: false })
        break
      default:
        break
    }
  }

  handleLogin (e) {
    e.preventDefault()
    const username = e.target[0].value
    let found = false
    const { users, dispatch } = this.props
    users.map(user => {
      if (user === username) {
        found = true
        dispatch(handleUserLogin(username))
        this.setState({ redirect: true })
      }
    })
    if (!found) {
      this.setState({ userNotFound: true })
    }
  }

  render () {
    const { login, redirect, userNotFound } = this.state

    if (redirect) {
      return <Redirect to='/dashboard' />
    }

    return (
      <div>
        <HomeNav />
        <div className="centered">
          <div className="registration-box">
            <div className="buttons">
              <div className={login ? 'register-button button' : 'register-button button active'} onClick={() => this.handleSwitch('register')}>Register</div>
              <div className={login ? 'login-button button active' : 'login-button button'} onClick={() => this.handleSwitch('login')}>Login</div>
            </div>
            <div className="sections">
              <div className={login ? 'register-section hidden' : 'register-section'}>
                <form>
                  <div className="input-field">
                    <label htmlFor="username">Username:</label><br />
                    <input type="text" id="username" placeholder="Input your Username" />
                  </div>
                  <div className="input-field">
                    <label htmlFor="name">Name:</label><br />
                    <input type="text" id="name" placeholder="Input your Name" />
                  </div>
                  <button type="submit" className="submit-button">Register</button>
                </form>
              </div>
              <div className={login ? 'login-section' : 'login-section hidden'} id='login-section'>
                { userNotFound && (
                  <div style={{ color: 'red' }}>Wrong Username</div>
                )}
                <form onSubmit={this.handleLogin}>
                  <div className="input-field">
                    <label htmlFor="username">Username:</label><br/ >
                    <input type="text" id="username" placeholder="Input your Username" />
                  </div>
                  <button type="submit" className="submit-button">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const usersProp = Object.keys(users)
  return {
    users: usersProp
  }
}

export default connect(mapStateToProps)(Auth)
