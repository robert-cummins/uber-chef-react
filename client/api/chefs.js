import request from 'superagent'

export function getchefsByLocationAndCuisine(){
    return request.get('/api/v1/chefs/:id')
}