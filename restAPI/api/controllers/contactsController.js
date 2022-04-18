'use strict'
const mongoose = require('mongoose')
Contact = mongoose.model('Contacts')

// 1 post, Add new contact

exports.addContact = function (req, res) {
	console.log('addContact')

	const newContact = new Contact(req.body)
	newContact.save(function (err, data) {
		if (err) throw err
		res.json(req.body)
	})
}

// 2 get, Show all contact
exports.showContacts = function (req, res) {
	console.log('showContacts')

	const query = { sort: { firstname: 1 } }
	Contact.find({}, null, query, function (err, data) {
		if (err) throw err
		res.json(data)
	})
}

// 3 get, Show one contact
exports.showContact = function (req, res) {
	console.log('showContact')

	Contact.findById(req.params.id, function (err, data) {
		if (err) throw err
		res.json(data)
	})
}

// 4 post, Edit a contact
exports.editContact = function (req, res) {
	console.log('editContact')

	Contact.findByIdAndUpdate(
		req.params.id,
		req.body, // newContact = req.body
		{ new: true },
		function (err, data) {
			if (err) throw err
			res.json(req.body)
		}
	)
}

// 5 delete, Delete a contact
exports.deleteContact = function (req, res) {
	console.log('deleteContact')

	Contact.findByIdAndRemove(req.params.id, function (err, data) {
		if (err) throw err
		const response = {
			message: 'This contact has been deleted',
			firstname: data.firstname
		}
		res.json(response)
	})
}
