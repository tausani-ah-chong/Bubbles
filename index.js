
const express = require('express')
const hbs = require('express-handlebars')

const server = express()

// Server configuration
server.use(express.static('public'))
server.use(express.urlencoded({ extended: false }))

// Handlebars configuration
server.engine('hbs', hbs({ extname: 'hbs' }))
server.set('view engine', 'hbs')

const userData = {
  user1: {
    name: 'user1',
    img: '/images/user1.jpg',
    city: 'eh'
  },
  user2: {
    name: 'user2',
    img: '/images/user2.jpg',
    city: 'eh'
  },
  user3: {
    name: 'user3',
    img: '/images/user3.jpg',
    city: 'eh'
  },
  user4: {
    name: 'user4',
    img: '/images/user4.jpg',
    city: 'eh'
  },
  user5: {
    name: 'user5',
    img: '/images/user5.jpg',
    city: 'eh'
  },
  user6: {
    name: 'user6',
    img: '/images/user6.jpg',
    city: 'eh'
  }
}

const playlist = {
  id: {
    id: 1,
    name: 'test1'
  }
}

const currentPlayList = {
  playlistId: 1,
  userId: 1,
  playlistName: 'chill',
  songName: 'asdf',
  songArtist: 'fda'
}



// Your routes/router(s) should go here
server.get('/', (req, res) => {
  const viewData = {
    user: userData
  }
  console.log(viewData)
  res.render('home', viewData)
})

server.get('/user', (req, res) => {
  const viewData = {
    user: userData,
    playlist: playlist
  }
  console.log(viewData)
  res.render('user', viewData)
})


// server.get('/user/playlist', (req, res) => {
//   const viewData = {
//     user: userData,
//     currentlist: currentPlayList
//   }
//   console.log("asdfdasfdasf")
//   res.render('playlist', viewData )
// })

const port = 3000

server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('Server is listening on port', port)
})