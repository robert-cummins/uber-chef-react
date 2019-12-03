const express = require('express')
const router = express.Router()
const db = require('../db/chefs')

router.get('/:id', (req, res) => {
    let location = req.params.id
    let cuisine = req.query.cuisine_id
    if (cuisine !== NaN) {
        db.getChefsByCuisineAndLocation(cuisine, location)
            .then(chefs => {
                res.json(chefs)
            })
    }
    else {
        db.getChefsByLocation(location)
            .then(chefs => {
                res.json(chefs)
            })
    }
})



module.exports = router