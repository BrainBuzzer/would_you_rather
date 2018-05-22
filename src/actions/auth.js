export const USER_LOGIN = 'USER_LOGIN'

export function handleUserLogin (id) {
  return {
    type: USER_LOGIN,
    id
  }
}
