'use strict'
const mongoose = require('mongoose')
User = mongoose.model('Users')

exports.showUsers = function (req, res) {
	console.log('showUsers')

	const loginUser = {
		Username: req.params.username,
		Password: req.params.password
	}

	User.findOne(loginUser, function (err, data) {
		if (err) throw err
		res.json(data)
	})
}
