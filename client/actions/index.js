import {getchefsByLocationAndCuisine} from '../api/chefs'

export const GET_CHEFS = 'GET_CHEFS'

export const getChefs = (chefs) => {
    return {
        type: GET_CHEFS,
        chefs
    }
}

export function fetchChefs(){
    getchefsByLocationAndCuisine()
    .then(res => {
        dispatch(getChefs(res.body))
    })
}