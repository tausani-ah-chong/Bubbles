  
const { Router } = require('express')
const express = require('express')

const db = require('./db')

const router = express.Router()



router.get('/', (req, res) => {
   return  db.getUsers()
    .then( viewData => {
       return res.render('home', {viewData: viewData})
    })
    .catch(err => {
        res.status(500).send('DATABASE ERROR: ' + err.message)
      })
    
})

router.get ('/user/:id', (req, res) => {
    const id = Number(req.params.id)
    return db.joinUsersWithPlaylist(id)
        .then(viewData => {
            console.log(viewData)
           return  res.render('user', {viewData: viewData})
        })
        .catch(err => {
            res.status(500).send('DATABASE ERROR: ' + err.message)
          })
})


module.exports = router
