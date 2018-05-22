import { getUsers } from './users'
import { getQuestions } from './questions'
import { getInitialData } from '../utils/api'

export const GET_INITIAL_DATA = 'GET_INITIAL_DATA'

export function handleInitialData () {
  return (dispatch) => {
    getInitialData().then(({users, questions}) => {
      dispatch(getUsers(users))
      dispatch(getQuestions(questions))
    })
  }
}