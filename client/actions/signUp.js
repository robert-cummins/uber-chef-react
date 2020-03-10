import { saveUserToken } from '../utils/auth'
import { register } from '../api/auth'
import { receiveLogin, loginError } from './login'

export function registerUserRequest (chef) {
    return (dispatch) => {
      register(chef)
        .then(token => {
          const userInfo = saveUserToken(token)
          dispatch(receiveLogin(userInfo))
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