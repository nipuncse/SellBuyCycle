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
	// const name = username
	// const 
	return (
		<div className="App">
			<video autoPlay loop muted>
				<source
					src={process.env.PUBLIC_URL + "/videos/bg.mp4"}
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<Router>


				<Routes>
					<Route path="/" element={<Login setLogin={setLogin} />} />
					<Route path="/register" element={<Register setLogin={setLogin} />} />
					<Route path="/homepage" element={<Homepage login={login.username} />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
