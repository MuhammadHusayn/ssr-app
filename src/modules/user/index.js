const router = require('express').Router()
const { GET, USER } = require('./controller.js')

router.route('/users')
	.get( GET )

router.route('/users/:userId')
	.get( USER )


module.exports = router

