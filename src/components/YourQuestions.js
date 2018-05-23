import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserNav from './Navigation/UserNav'
import Question from './Question'
import HelloMeta from './Meta/HelloMeta'
import { Redirect } from 'react-router-dom'

class YourQuestions extends Component {
  render () {
    const { user, auth, questions } = this.props

    if (auth === null) {
      return <Redirect to='/auth' />
    }

    return (
      <div>
        <UserNav />
        <HelloMeta user={user}/>
        <div className="set">
          { questions.map(question => (
            <Question question={question} answer={user.answers[question.id]} key={question.id} />
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ auth, users, questions }) {
  let yourQuestions = []
  let user = users[auth]

  Object.keys(questions).map(k => questions[k]).filter(question => {
    if (user.questions.includes(question.id)) {
      yourQuestions.push(question)
    }
  })

  return {
    auth,
    user: users[auth],
    questions: yourQuestions
  }
}

export default connect(mapStateToProps)(YourQuestions)
