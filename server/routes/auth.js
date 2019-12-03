 
const express = require('express')
const { applyAuthRoutes } = require('authenticare/server')
const router = express.Router()
const db = require('../db/chefs')
const { getTokenDecoder } = require('authenticare/server')
const decodeToken = getTokenDecoder(false)

const {
  userExists,
  getUserByEmail,
  addChef } = require('../db/chefs')

  applyAuthRoutes(router, {
    userExists,
    getUserByName: getUserByEmail,
    addChef,

  })


  router.post("/register", decodeToken, async (req, res) => {
    console.log(req)
    let newChef = {
        name: req.body.name,
        img: req.body.chefImg,
        email: req.body.username,
        location: req.body.location,
        bio: req.body.bio,
        foodImg1: req.body.img1,
        foodImg2: req.body.img2,
        foodImg3: req.body.img3,
        password: req.body.password
    }
    try {
       db.addChef(newChef).then(chef => {
            let chefCuisine = {
                chef_id: chef[0],
                cuisine_id: req.body.cuisine
            }
            db.addChefCuisine(chefCuisine)
            .then(()=> {
                res.json({})
            })
    
        })
    } catch (err){
        res.status(500).send(err.message)
    }
    
})
  
  module.exports = router