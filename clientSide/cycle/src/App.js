import Login from "./Components/Login";
import Register from "./Components/Register";
import './App.css'
// impot
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";
function App() {
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
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
