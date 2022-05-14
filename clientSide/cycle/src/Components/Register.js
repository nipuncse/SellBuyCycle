import React, { useState } from 'react'
import '../css/register.css';
import { Link } from "react-router-dom"
// import imgi from '../../public/images/login.jpg';

export default function Register() {

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
	return (
		<>
			<div className="container">
				<form action="signup.php" className="form" method="POST" onSubmit="return check()">
					<h2>SIGN UP</h2>
					<input type="text" className="box" id="email" name="email" value={newUser.email} onChange={mynewState} placeholder="Email" />

					<input type="text" className="box" id="username" name="username" value={newUser.username} onChange={mynewState} placeholder="Username" />

					<input type="password" className="box" id="password" name="password" value={newUser.password} onChange={mynewState} placeholder="Password" />


					<input type="submit" className="box" id="sub" name="submit" value="Sign Up" />
					<br /><br />

					<p className="link">Already Have an Account<br />
						<Link to="/login">Sign In</Link> here</p>
				</form>

				<div className="side">
					<img src={process.env.PUBLIC_URL + "/images/cycle.jpg"} alt="" />
				</div>
			</div>
		</>
	)
}
