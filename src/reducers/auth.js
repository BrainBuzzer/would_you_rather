import { USER_LOGIN } from '../actions/auth'

export function auth (state = null, action) {
  switch (action.type) {
    case USER_LOGIN:
      return action.id
    default:
      return state
  }
}
