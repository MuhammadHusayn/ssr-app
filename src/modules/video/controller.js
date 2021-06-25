const model = require('./model.js')
const GET = (req, res) => {
	res.render('videos.html', { categories: model.fetchAll() })
}

const GET_VIDEOS = (req, res) => {
	res.render('video.html', { videos: model.fetchVideos(req.params.categoryId) })
}


module.exports = { GET, GET_VIDEOS }