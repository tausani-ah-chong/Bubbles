  
const { Router } = require('express')
const express = require('express')

const { getUsers } = require('./db')

const router = express.Router()



router.get('/', (req, res) => {
   return getUsers()
    .then(viewData => res.render('home', {viewData: viewData}))
})


module.exports = router
