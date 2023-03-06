import { useState } from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Ethos from "./Components/Ethos";
import Jewelry from "./Components/Jewelry";
import Location from "./Components/Location";
import Artisans from "./Components/Artisans";
import Learn from "./Components/Learn";
import Footer from "./Components/Footer";

function App() {
	return (
		<div>
			<Nav />
			<Hero />
			<Ethos />
			<Jewelry />
			<Location />
			<Artisans />

			<Learn />
			<Footer />
		</div>
	);
}

export default App;
