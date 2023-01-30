import { useState } from "react";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Ethos from "./Components/Ethos";
import Jewelry from "./Components/Jewelry";

function App() {
	return (
		<div>
			<Nav />
			<Hero />
			<Ethos />
			<Jewelry />
		</div>
	);
}

export default App;
