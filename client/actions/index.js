import { getchefsByLocationAndCuisine, addNewChef } from '../api/chefs'

export const GET_CHEFS = 'GET_CHEFS'
export const ADD_CHEF = 'ADD_CHEF'

export const getChefs = (chefs) => {
    return {
        type: GET_CHEFS,
        chefs
    }
}

export const addChef = (chef) => {
    return {
        type: ADD_CHEF,
        name: chef.name,
        img: chef.chefImg,
        email: chef.email,
        location: chef.location,
        bio: chef.bio,
        cuisine: chef.cuisine,
        foodImg1: chef.foodImg1,
        foodImg2: chef.foodImg2,
        foodImg3: chef.foodImg3,
    }
}

export function fetchChefs(location, cuisine) {
    // console.log(cuisine)
    // console.log(location)
    if(cuisine){
        return dispatch => {
            getchefsByLocationAndCuisine(location, cuisine)
            .then(res => {
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