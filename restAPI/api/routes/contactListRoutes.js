'use strict'
module.exports = function (app) {
	const contactsController = require('../controllers/contactsController')

	app
		.route('/contacts')
		.post(contactsController.addContact)
		.get(contactsController.showContacts)

	app
		.route('/contacts/:id')
		.get(contactsController.showContact)
		.post(contactsController.editContact)

	app.route('/contact/:id').delete(contactsController.deleteContact)

	const usersController = require('../controllers/usersController')

	app.route('/users/:username/:password').get(usersController.showUsers)
}
