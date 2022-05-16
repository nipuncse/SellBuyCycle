const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/sellcycle', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}).then(() => {
	console.log("connection Succesfull")
}).catch((err) => {
	console.log(err)
})