const {google} = require('googleapis');
const youtube = google.youtube('v3');

async function getFirstVideo(searchquery) {
  const auth = process.env.YTAPI
  google.options({ auth });

  const res = await youtube.search.list({
    part: 'id,snippet',
    q: searchquery,
  });
  return res.data.items[0].id.videoId
}

module.exports = {
  getFirstVideo
}