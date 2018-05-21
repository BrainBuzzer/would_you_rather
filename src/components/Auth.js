import React, { Component } from 'react'
import HomeNav from './Navigation/HomeNav'

class Auth extends Component {
  constructor () {
    super()
    this.state = {
      login: false
    }
    this.handleSwitch = this.handleSwitch.bind(this)
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

  render () {
    const { login } = this.state

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
                    <label for="username">Username:</label><br />
                    <input type="text" id="username" placeholder="Input your Username" />
                  </div>
                  <div className="input-field">
                    <label for="name">Name:</label><br />
                    <input type="text" id="name" placeholder="Input your Name" />
                  </div>
                  <button type="submit" className="submit-button">Register</button>
                </form>
              </div>
              <div className={login ? 'login-section' : 'login-section hidden'} id='login-section'>
                <form>
                  <div className="input-field">
                    <label for="username">Username:</label><br/ >
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

export default Auth
