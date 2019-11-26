const express = require('express')
const router = express.Router()
const db = require('../db/chefs')

router.get('/:id', (req, res) => {
    let location = req.params.id
    console.log(location)
    if (req.query.cuisine_id !== undefined) {
        db.getChefsByCuisineAndLocation(req.query.cuisine_id, location)
            .then(chefs => {
                res.json(chefs)
            })
    } else {
        db.getChefCuisinesbyLocation(location)
            .then(chefs => {
                res.json(chefs)
            })
    }
})

module.exports = router