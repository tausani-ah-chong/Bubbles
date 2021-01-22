const {google} = require('googleapis');
const youtube = google.youtube('v3');

async function getFirstVideo(searchquery) {
  const auth = 'AIzaSyB818aMQeEdJ-qD25bkubZ16dmWk0_8_hI'
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