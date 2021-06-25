const users = require('../../database/users.js')

const fetchAll = () => users

const fetchOne = (userId) => users.find( user => user.id == userId)

module.exports = {
	fetchAll,
	fetchOne
}