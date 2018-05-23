import React from 'react'
import { Link } from 'react-router-dom'
import HomeNav from './Navigation/HomeNav'

const Home = () => {
  return (
    <div>
      <div className="container">
        <HomeNav />
        <div className="hero">
          <div className="text">
            Participate in the ultimate quest<br />
            with tough to answer questions
          </div>
          <div className="links">
            <Link to="/auth" className="login-link">Login</Link>
            <Link to="/auth" className="register-link">Register</Link>
          </div>
        </div>
      </div>
      <div className="subtext">
        Answer the questions where no one answer is correct.
      </div>
      <div className="question-home">
        <div className="opt option-one">
          <div className="option-text">
              Blue Pill, and  you have security, happiness
              and the blissful ignorance of illusion
          </div>
        </div>
        <div className="opt option-two">
          <div className="option-text">
              Red Pill, and you have knowledge,
              freedom, and the brutal truths of reality
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
