const express = require("express")
const conn = require('./db/conn.js')
const cors = require('cors')
const path = require('path')
const Student = require('./models/register')
const CycleInfo = require('./models/cycles')
const app = express();

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
const port = process.env.PORT || 4200

app.post('/', (req, res) => {
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
		res.send({ message: 1, user: details })
	}
	catch (err) {
		console.log(err)
		res.send({ message: 0 })
	}
})

app.get('/getcycles', (req, res) => {

	CycleInfo.find({}, function (err, allDetails) {
		if (err) {
			console.log(err);
		} else {
			res.send({ details: allDetails })
		}
	})
})

app.post('/addnewcycle', async (req, res) => {
	console.log(req.body)
	const { userid, cname, ccname, oname, ocont, cprice, cdesc } = req.body;
	try {
		const details = new CycleInfo({
			user: userid,
			cycle_name: cname,
			cycle_company: ccname,
			owner_name: oname,
			owner_contact: ocont,
			cycle_desc: cdesc,
			cycle_price: cprice
		})


		const registered = await details.save();
		console.log(registered)
		res.send({ message: 1, cycle: registered })
	}
	catch (err) {
		console.log(err)
		res.send({ message: 0 })
	}

})

app.post('/getcycles2', (req, res) => {
	console.log(req.body)
	const { id } = req.body
	CycleInfo.find({ user: id }, function (err, allDetails) {
		if (err) {
			console.log(err);
		} else {
			res.send({ details: allDetails })
		}
	})
})

app.post('/delcycle', (req, res) => {
	console.log(req.body)
	const { address } = req.body
	CycleInfo.remove({ _id: address }, function (err, allDetails) {
		if (err) {
			console.log(err);
		} else {
			res.send({ details: allDetails })
		}
	})
})

app.listen(port, () => {
	console.log('Server listened')
})