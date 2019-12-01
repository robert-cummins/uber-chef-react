import request from 'superagent'

export function getchefsByLocationAndCuisine(location, cuisine){
    if(cuisine) return  request.get('/api/v1/chefs/'+ location + '?' + cuisine)
    if(location) return request.get('/api/v1/chefs/'+ location)
}