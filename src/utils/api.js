import {
  _getQuestions,
  _getUsers,
  _saveQuestion,
  _saveQuestionAnswer
} from './_DATA.js'

export function handleInitialData () {
  return Promise.all([
    _getQuestions(),
    _getUsers()
  ]).then(([ questions, users ]) => ({
    questions,
    users
  }))
}

/**
 *
 * @param {string} question.optionOneText
 * @param {string} question.optionTwoText
 * @param {string} question.author
 */
export function saveQuestion (question) {
  return _saveQuestion(question)
}

/**
 *
 * @param {string} data.authedUser
 * @param {string} data.qid
 * @param {string} data.answer
 */
export function saveQuestionAnswer (data) {
  return _saveQuestionAnswer(data)
}
