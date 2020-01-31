import { saveUserToken } from '../utils/auth'
import { register } from '../api/auth'
import { receiveLogin, loginError } from './login'

export function registerUserRequest (creds) {
    return (dispatch) => {
      register(creds)
        .then(token => {
          console.log("hello")
          const userInfo = saveUserToken(token)
          dispatch(receiveLogin(userInfo))
        })
        .then(() => {
            return dispatch => {
                getchefsByLocationAndCuisine(chef.location)
                    .then(res => {
                        dispatch(getChefs(res.body))
                    })
            }
        })
        .catch(err => {
          console.log(err)
          dispatch(loginError(err.response.body.message))
        })
    }
  }

  export function postChef(chef){
    return dispatch => {
        addNewChef(chef)
        .then(() => {
            dispatch(addChef(chef))
    
        })
        .then(() => {
            return dispatch => {
                getchefsByLocationAndCuisine(chef.location)
                    .then(res => {
                        dispatch(getChefs(res.body))
                    })
            }
        })
        .catch(() => {})
    }
}