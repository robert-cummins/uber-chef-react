import request from 'superagent'

export function getchefsByLocationAndCuisine(location, cuisine){
    if(cuisine) return  request.get('/api/v1/chefs/'+ location + '?' + cuisine)
    if(location) return request.get('/api/v1/chefs/'+ location)
}

export function getChefByEmail(email){
   return request.get('/api/v1/chefs/email/' + email)
}

export function APIdeleteChef(id){
    return request.del('/api/v1/chefs/delete-chef/' + id).then(() => {})
}

export function APIupdateChef(chef){
    return request.put('/api/v1/chefs/delete-chef/' + chef.chef_id).send(chef)
}