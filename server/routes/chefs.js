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


router.get('/email/:email', (req, res) => {
    db.getChefByEmail(req.params.email)
        .then(chef => {
            res.json(chef)
        })
})

router.delete('/delete-chef/:id', (req, res) => {
    db.deleteChef(req.params.id)
  })

  
router.put("/update-chef/:id", (req, res) => {
    db.updateChef(req.params.id, req.body)
    .then(id => console.log(id))
  });

  


module.exports = router