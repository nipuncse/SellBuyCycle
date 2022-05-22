import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card2 from './Card2'
import Navbar from './Navbar'
export default function Removecycle(props) {
	const [newData, setnewData] = useState([]);
	useEffect(() => {
		const user = { id: props.login }
		async function getResults() {
			const res = await axios.post("http://localhost:4200/getcycles2", user);
			setnewData(res.data.details);
			// console.log(res.data.details);
		}
		getResults();
	}, [])
	return (
		<>
			<Navbar user={props.login} logout={props.updateUser} />

			<div className="container mx-auto my-5">
				<div className="row">
					{/* <Card /> */}
					{newData.map((element) => {
						return (
							<Card2 cycle_name={element.cycle_name} cycle_company={element.cycle_company} cycle_price={element.cycle_price} />
						)
					})};

				</div>
			</div>
		</>
	)
}
