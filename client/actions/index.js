import { getchefsByLocationAndCuisine, getChefByEmail } from '../api/chefs'

export const GET_CHEFS = 'GET_CHEFS'
export const ADD_CHEF = 'ADD_CHEF'
export const GET_ONE_CHEF = 'GET_ONE_CHEF'

export const getChefs = (chefs) => {
    return {
        type: GET_CHEFS,
        chefs
    }
}

export const getOneChef = (chef) => {
    return {
        type: GET_ONE_CHEF,
        chef
    }
}

export const addChef = (chef) => {
    return {
        type: ADD_CHEF,
        name: chef.name,
        img: chef.chefImg,
        email: chef.email,
        password: chef.password,
        location: chef.location,
        bio: chef.bio,
        cuisine: chef.cuisine,
        foodImg1: chef.foodImg1,
        foodImg2: chef.foodImg2,
        foodImg3: chef.foodImg3,
    }
}

export function fetchChefByEmail(email){
    return dispatch => {
        return getChefByEmail(email)
        .then(chef => {
           return dispatch(getOneChef(chef.body))
        })
    }
}

export function fetchChefs(location, cuisine) {
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

