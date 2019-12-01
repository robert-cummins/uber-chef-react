import { getchefsByLocationAndCuisine } from '../api/chefs'

export const GET_CHEFS = 'GET_CHEFS'

export const getChefs = (chefs) => {
    return {
        type: GET_CHEFS,
        chefs
    }
}

export function fetchChefs(location, cuisine) {
    if(cuisine){
        console.log(cuisine)
        return dispatch => {
            getchefsByLocationAndCuisine(location, cuisine)
            .then(res => {
                console.log(res.body)
                dispatch(getChefs(res.body))
            })
        }
    }
    
    if (location) {
        return dispatch => {
            getchefsByLocationAndCuisine(location)
                .then(res => {
                    dispatch(getChefs(res.body))
                })
        }
    }
}