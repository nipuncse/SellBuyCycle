import React, { useState } from 'react';
import '../css/login.css';
import { Link } from "react-router-dom"
export default function Login() {

	const [user, setUser] = useState({
		username: "",
		password: ""
	});

	const myState = e => {
		const { name, value } = e.target
		// console.log(`${name}, ${value}`)
		setUser({
			...user,
			[name]: value
		})
	}

	return (
		<>
			<div className="contain" >
				<form action="login.php" className="form" method="post" >
					<h2>SIGN IN</h2>
					<input type="text" id="username" value={user.username} onChange={myState} className="box" name="username" placeholder="Username" />
					<input type="password" id="password" value={user.password} onChange={myState} className="box" name="password" placeholder="Password" />
					<input type="submit" className="box" onChange={myState} id="sub" value="Log In" />
					<br />
					<p className="link">Don't Have an Account
						<br />
						<Link to="/register">Sign up</Link> here</p>
				</form>

				<div className="side">
					<img src={process.env.PUBLIC_URL + "/images/cycle.jpg"} alt="" />
				</div>
			</div>
		</>
	)
};
