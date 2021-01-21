  
const { Router } = require('express')
const express = require('express')

const db = require('./db')

const router = express.Router()



router.get('/', (req, res) => {
   return  db.getUsers()
    .then( viewData => {
        console.log(viewData)
       return res.render('home', {viewData: viewData})
    })
    
})


module.exports = router
