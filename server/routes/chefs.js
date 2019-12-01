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

router.post("/", (req, res) => {
    let newChef = {
        name: req.body.name,
        img: req.body.chefImg,
        email: req.body.email,
        location: req.body.location,
        bio: req.body.bio,
        foodImg1: req.body.img1,
        foodImg2: req.body.img2,
        foodImg3: req.body.img3,
    }

    db.addChef(newChef).then(chef => {
        console.log(chef)
        let chefCuisine = {
            chef_id: chef[0],
            cuisine_id: req.body.cuisine
        }
        db.addChefCuisine(chefCuisine).then(() => res.redirect('/'))
    })
})

module.exports = router