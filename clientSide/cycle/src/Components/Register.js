import React, { useState } from 'react'
import '../css/register.css';
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Register({ setLogin }) {
	let navigate = useNavigate();
	const [newUser, setnewUser] = useState({
		email: "",
		username: "",
		password: ""
	});

	const mynewState = e => {
		const { name, value } = e.target
		setnewUser({
			...newUser,
			[name]: value
		})
	}

	const newEntry = async () => {
		// const { email, username, password } = newUser
		console.log('called newEnrty')
		const res = await axios.post("http://localhost:4200/register", newUser)
		if (res) {
			console.log(res.data.user)
			setLogin(res.data.user)
			navigate('/homepage')
		}
		else
			console.log(res)
	}


	return (
		<>
			<div className="contain">
				<div className="form">
					<h2>SIGN UP</h2>
					<input type="text" className="box" id="email" name="email" value={newUser.email} onChange={mynewState} placeholder="Email" />

					<input type="text" className="box" id="username" name="username" value={newUser.username} onChange={mynewState} placeholder="Username" />

					<input type="password" className="box" id="password" name="password" value={newUser.password} onChange={mynewState} placeholder="Password" />


					<input type="submit" className="box" onClick={newEntry} id="sub" value="Sign Up" />
					<br /><br />

					<p className="link">Already Have an Account<br />
						<Link to="/">Sign In</Link> here</p>
				</div>

				<div className="side">
					<img src={process.env.PUBLIC_URL + "/images/cycle.jpg"} alt="" />
				</div>
			</div>
		</>
	)
}
