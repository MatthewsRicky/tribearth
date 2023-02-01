import { useState } from "react";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Ethos from "./Components/Ethos";
import Jewelry from "./Components/Jewelry";
import Location from "./Components/Location";

function App() {
	return (
		<div>
			<Nav />
			<Hero />
			<Ethos />
			<Jewelry />
			<Location />
		</div>
	);
}

export default App;
