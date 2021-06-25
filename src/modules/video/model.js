const categories = require('../../database/videoCategories.js')
const videos = require('../../database/videos.js')

const fetchAll = () => categories

const fetchVideos = (catId) => videos.filter( video => video.categoryId == catId)

module.exports = {
	fetchAll,
	fetchVideos
}