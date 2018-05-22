import { getUsers } from './users'
import { getQuestions } from './questions'
import { handleUserLogin } from './auth'
import { getInitialData, saveNewUser } from '../utils/api'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function handleInitialData () {
  return (dispatch) => {
    getInitialData().then(({users, questions}) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
      dispatch(handleUserLogin(null))
    })
  }
}

export function handleUserRegistration (username, name) {
  return (dispatch) => {
    saveNewUser({ username, name })
      .then((users) => {
        if (users.error) {
          console.error('Username Already taken')
        } else {
          dispatch(handleUserLogin(username))
          dispatch(getUsers(users))
        }
      })
  }
}
