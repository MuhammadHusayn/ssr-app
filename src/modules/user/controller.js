const model = require('./model.js')
const GET = (req, res) => {
	res.render('users.html', { users: model.fetchAll() })
}

const USER = (req, res) => {
	res.render('user.html', { user: model.fetchOne(req.params.userId) })
}


module.exports = { GET, USER }