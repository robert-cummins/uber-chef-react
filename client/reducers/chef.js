import {GET_CHEFS} from '../actions/index'

function getChefs(state = [], action){
    switch(action.type){
        case GET_CHEFS:
            return action.chefs

        default:
            return state
    }
}

export default getChefs