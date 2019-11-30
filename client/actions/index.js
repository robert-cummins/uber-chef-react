import {getchefsByLocationAndCuisine} from '../api/chefs'

export const GET_CHEFS = 'GET_CHEFS'

export const getChefs = (chefs) => {
    return {
        type: GET_CHEFS,
        chefs
    }
}

export function fetchChefs(id){
    return dispatch => {
    getchefsByLocationAndCuisine(id)
    .then(res => {
        dispatch(getChefs(res.body))
    })
}
}