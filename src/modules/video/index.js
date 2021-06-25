const router = require('express').Router()
const { GET, GET_VIDEOS } = require('./controller.js')

router.route('/videos')
	.get( GET )

router.route('/videos/:categoryId')
	.get( GET_VIDEOS )


module.exports = router

