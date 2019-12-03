import {GET_CHEFS, ADD_CHEF} from '../actions/index'

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
                    location: action.location,
                    bio: action.bio,
                    specialty: action.specialty,
                    foodImg1: action.foodImg1,
                    foodImg2: action.foodImg2,
                    foodImg3: action.foodImg3,
                    password: action.password
                }
            ]

        default:
            return state
    }
}

export default chefReducer