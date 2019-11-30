const express = require('express')
const router = express.Router()
const db = require('../db/chefs')

router.get('/:id', (req, res) => {
    let location = req.params.id
    let cuisine = parseInt(Object.values(req.query))
    console.log(cuisine)
    if (cuisine !== NaN) {
        
        db.getChefsByCuisineAndLocation(cuisine, location)
            .then(chefs => {
                
                res.json(chefs)
            })
    } 
    else {
        db.getChefCuisinesbyLocation(location)
        console.log('hello')
            .then(chefs => {
                res.json(chefs)
            })
    }
})


module.exports = router