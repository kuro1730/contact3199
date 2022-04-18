'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ContactSchema = new Schema({
	cid: {
		type: String
	},
	firstname: {
		type: String
	},
	lastname: {
		type: String
	},
	email: {
		type: String
	},
	mobile: {
		type: String
	},
	facebook: {
		type: String
	},
	imageUrl: {
		type: String
	}
})

module.exports = mongoose.model('Contacts', ContactSchema)
