export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export function saveAnswer (auth, qid, option) {
  return {
    type: ANSWER_QUESTION,
    auth,
    qid,
    option
  }
}
