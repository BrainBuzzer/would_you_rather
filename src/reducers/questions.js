import {
  GET_QUESTIONS,
  ANSWER_QUESTION
} from '../actions/questions'

export function questions (state = {}, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ANSWER_QUESTION:
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.option]: {
            ...state[action.qid][action.option],
            votes: state[action.qid][action.option].votes.concat([action.auth])
          }
        }
      }
    default:
      return state
  }
}
