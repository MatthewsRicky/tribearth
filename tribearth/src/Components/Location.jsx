import React from "react";
import Locationpic from "../assets/location.jpg"

function Location() {
	return <div className="flex md:flex-row flex-col p-4 m-8 items-center justify-between bg-emerald-300 shadow-2xl rounded-xl">
		<div className="p-4">
			<img src={Locationpic} alt="/" />
		</div>
		<div className="flex flex-col justify-between text-center md:text-left">
			<div className="flex flex-col p-4 ">
				<h1 className="bg-emerald-200 p-1 rounded-md text-2xl text-bold underline my-2 md:my-4">Vegan Boutique Cafe</h1>
				<h2 className="bg-emerald-200 p-1 rounded-md text-2xl text-bold underline my-2 md:my-4">Open from Tuesday to Sunday</h2>
				<h2 className="bg-emerald-200 p-1 rounded-md text-2xl text-bold underline my-2 md:my-4">Diani Beach Rd, Diani</h2>
			</div>
			<div className="flex flex-col p-4 ">
				<button className='scale-80 text-bold text-black flex justify-center items-center bg-emerald-500 bg-opacity-95 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-2 py-3 md:hover:scale-110 my-6 shadow-md'>DISCOVER MORE
					/ MAKE A BOOKING</button>
			</div>
		</div>
	</div>
}

export default Location;
