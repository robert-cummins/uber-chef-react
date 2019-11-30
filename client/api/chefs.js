import request from 'superagent'

export function getchefsByLocationAndCuisine(id){
    return request.get('/api/v1/chefs/'+ id)
}