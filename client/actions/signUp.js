import { saveUserToken } from '../utils/auth'
import { register } from '../api/auth'
import { receiveLogin, loginError } from './login'

export function registerUserRequest (creds) {
    return (dispatch) => {
      register(creds)
        .then(token => {
          const userInfo = saveUserToken(token)
          dispatch(receiveLogin(userInfo))
          document.location = '/#/'
        })
        .catch(err => {
          dispatch(loginError(err.response.body.message))
        })
    }
  }