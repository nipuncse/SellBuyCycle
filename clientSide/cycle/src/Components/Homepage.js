import React from 'react'
import Card from './Card'
import Navbar from './Navbar'

export default function Homepage(props) {
	return (
		<>
			<Navbar user={props.login} logout={props.updateUser} />

			<div className="container mx-auto my-5">
				<div className="row">
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />

				</div>
			</div>
		</>
	)
}
