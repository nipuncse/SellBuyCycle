const mongoose = require('mongoose')
const Schema = mongoose.Schema

const cycleInfo = new Schema({
	cycle_name: {
		type: String
	},
	cycle_company: {
		type: String
	},
	owner_name: {
		type: String
	},
	owner_contact: {
		type: String
	},
	cycle_desc: {
		type: String
	}
})

const CycleInfo = new mongoose.model("CycleInfo", cycleInfo)
module.exports = CycleInfo