import React from 'react'

export default function Homepage(props) {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark d-flex justify-content-between ">
				<div className="welcome navbar-brand text-light mx-2">
					{/* {console.log(props.name)} */}
					Welcome {props.login} !
				</div>
				<div className="container-fluid justify-content-center  ">
					<a className="navbar-brand text-primary" href="/">CYCLEZ</a>
				</div>

				<div className="logout  mx-2">
					<a className="navbar-brand text-light" href="/">Logout</a>
				</div>
			</nav>

			<div className="container">

			</div>
		</>
	)
}
