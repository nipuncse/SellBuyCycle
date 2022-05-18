import React from 'react'

export default function Card() {
	return (
		<>
			<div className="card col-4 mx-3 my-3" style={{ width: "18rem" }}>
				<img src="https://picsum.photos/200/300/?blur" style={{ height: "150px" }} className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">AVINYA</h5>
					<p className="card-text">Presenting you TATA Cycle. The need of the next genertion. Today's TOMMOROW</p>
					<a href="/" className="btn btn-primary">Contact Owner</a>
				</div>
			</div>
		</>
	)
}
