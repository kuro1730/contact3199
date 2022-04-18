const express = require('express')
app = express()

port = process.env.PORT || 5000
mongoose = require('mongoose')
Contact = require('./api/models/contactsModel')
User = require('./api/models/usersModel')

bodyParser = require('body-parser')

mongoose.Promise = global.Promise

mongoose.connect(
	'mongodb+srv://lamron:23042544@cluster0.hxekp.mongodb.net/ContactList?retryWrites=true&w=majority',
	error => {
		if (error) throw error
		console.log('Successfully connected')
	}
)

const cors = require('cors')
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const routes = require('./api/routes/contactListRoutes')
routes(app)

app.listen(port)

console.log('User List API started on : ' + port)
