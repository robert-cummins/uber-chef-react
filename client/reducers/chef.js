import {GET_CHEFS, ADD_CHEF, GET_ONE_CHEF} from '../actions/index'

function chefReducer(state = [], action){
    switch(action.type){
        case GET_CHEFS:
            return action.chefs

        case ADD_CHEF:
            return [...state, 
                {
                    name: action.name,
                    img: action.img,
                    email: action.email,
                    password: action.password,
                    location: action.location,
                    bio: action.bio,
                    specialty: action.specialty,
                    foodImg1: action.foodImg1,
                    foodImg2: action.foodImg2,
                    foodImg3: action.foodImg3,
                }
            ]

        case GET_ONE_CHEF:
            return action.chef

        default:
            return state
    }
}

export default chefReducer