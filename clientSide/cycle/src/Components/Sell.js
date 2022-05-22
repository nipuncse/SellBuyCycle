import React from 'react'
import Navbar from './Navbar'

export default function Sell(props) {
	return (
		<>
			<Navbar user={props.login} logout={props.updateUser} />

			<form className="container bg-light my-5">
				<div className="form-group">
					<input type="text" className="form-control" id="userid" value={props.login} name="userid" readonly="readonly" />
					<br />
				</div>
				<div className="form-group">
					<input type="text" className="form-control" id="cname" name="cname" placeholder="Cycle Name" />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="ccname" name="ccname" placeholder="Company Name" />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="oname" name="oname" placeholder="Owner Name" />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="ocont" name="ocont" placeholder="Contact Number" />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="cprice" name="cprice" placeholder="Cycle Price" />
				</div>
				<br />
				<div className="form-group">
					<input type="text" className="form-control" id="cdesc" name="cdesc" placeholder="Description" />
				</div>

				<br />
				<br />

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		</>
	)
}
