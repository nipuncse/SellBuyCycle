const express = require("express")
const conn = require('./db/conn.js')
const cors = require('cors')
const path = require('path')
const Student = require('./models/register')
const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const port = process.env.PORT || 4200
//Routes

app.post('/', (req, res) => {
	// res.send('to server')
	console.log(req.body)
	const { username, password } = req.body
	Student.findOne({ username: username }, (err, user) => {
		if (user) {
			if (password === user.password) {
				res.send({ message: true, user: user })
			}

			else {
				res.send({ message: false })
			}
		}

		else {
			res.send({ message: "Wrong Credentials" })
		}
	})
})


app.post('/register', async (req, res) => {
	console.log(req.body)
	const { email, username, password } = req.body
	try {
		const details = new Student({
			email: email,
			username: username,
			password: password
		})

		const registered = await details.save();
		console.log(registered)
		res.send({ message: "User Successfully registered", user: details })
	}
	catch (err) {
		console.log(err)
		res.send(err)
	}
})

app.listen(port, () => {
	console.log('Server listened')
})