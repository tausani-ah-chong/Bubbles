  
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

module.exports = router
