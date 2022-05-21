const mongoose = require('mongoose')
const Schema = mongoose.Schema
const studSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true
	},
	username: {
		required: true,
		type: String,
		unique: true
	},
	password: {
		required: true,
		type: String,
	},
})

const Student = new mongoose.model("Student", studSchema)
module.exports = Student