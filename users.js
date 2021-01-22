  
const { Router } = require('express')
const express = require('express')

const db = require('./db')

const router = express.Router()
const yt = require('./yt')



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


router.get('/song/:id', (req, res) => {
    const songId = req.params.id
    db.getSong(songId)
      .then(song => {
          const query = song.artist + ' ' + song.name
          return yt.getFirstVideo(query)
      })
      .then(result => console.log(result))

})
module.exports = router
