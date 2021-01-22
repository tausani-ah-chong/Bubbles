  
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

router.get('/playlist/:id', (req, res) => {
    return db.getSongsArtist(parseInt(req.params.id))
    .then(result => {
        const playlistName = result[0].name;
        const songs = (result.map((song) => {
            return {
                name: song.song_name,
                artist: song.artist
            }
        }))
        const viewData = {
            playlistName,
            songs
        }
        // console.log(viewData)
        res.render('playlist', viewData)
        return null
    })
    .catch((err) => console.log(err))
})

router.get('/registration', (req, res) => {
    res.render('registration')
})

router.post('/registration', (req, res) => {
    const { name, city } = req.body
    return db.createUser(name, city)
        .then(() => res.redirect('/'))
})

module.exports = router
