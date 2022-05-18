import Login from "./Components/Login";
import Register from "./Components/Register";
import Homepage from "./Components/Homepage";
import './App.css'
import { useState } from "react";
// impot
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
function App() {
	const [login, setLogin] = useState({})
	const test = "Heloo"
	// const name = username
	// const 
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Login setLogin={setLogin} />} />
					<Route path="/register" element={<Register setLogin={setLogin} test={test} />} />
					<Route path="/homepage" element={login && login._id ? <Homepage login={login.username} /> : <Login setLogin={setLogin} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
