import Login from "./Components/Login";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
import './App.css'
import { useEffect, useState } from "react";
// impot
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
function App() {
	const [login, setLogin] = useState({})

	useEffect(() => {
		setLogin(JSON.parse(localStorage.getItem("CurrentUser")))
	}, [])

	const updateUser = (login) => {
		localStorage.setItem("CurrentUser", JSON.stringify(login))
		setLogin(login)
	}
	// const test = "Heloo"
	// const name = username
	// const 
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Login updateUser={updateUser} />} />
					<Route path="/register" element={<Register updateUser={updateUser} />} />
					<Route path="/homepage" element={login && login._id ? <Homepage login={login.username} updateUser={updateUser} /> : <Login setLogin={setLogin} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
