import React from "react";
import Rings from "../assets/rings.jpg";
import Earrings from "../assets/earrings.jpg";
import Necklaces from "../assets/necklaces.jpg";
import Bracelets from "../assets/bracelets.jpg";

function Jewelry() {
	return (
		<div className='flex flex-row flex-wrap justify-center'>
			<div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-300 bg-opacity-85 rounded-xl shadow-2xl'>
				<img
					className='relative rounded-xl'
					src={Rings}
					alt='Rings'
				/>
				<h1 className='bg-emerald-400 bg-opacity-50 text-6xl md:text-5xl sm:text-4xl text-white mix-blend-normal absolute mx-10 p-2 rounded-2xl'>
					Rings
				</h1>
			</div>
			<div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-300 bg-opacity-85 rounded-xl shadow-2xl'>
				<img
					className='relative rounded-xl'
					src={Earrings}
					alt='Earrings'
				/>
				<h1 className='bg-emerald-400 bg-opacity-50 text-6xl md:text-5xl sm:text-4xl text-white mix-blend-normal left absolute mx-10 p-2 rounded-2xl'>
					Earrings
				</h1>
			</div>
			<div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-300 bg-opacity-85 rounded-xl shadow-2xl'>
				<img
					className='relative rounded-xl'
					src={Necklaces}
					alt='Necklaces'
				/>
				<h1 className='bg-emerald-400 bg-opacity-50 text-6xl md:text-5xl sm:text-4xl text-white absolute mx-10 p-2 rounded-2xl'>
					Necklaces
				</h1>
			</div>
			<div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-300 bg-opacity-85 rounded-xl shadow-2xl'>
				<img
					className='relative rounded-xl'
					src={Bracelets}
					alt='Bracelets'
				/>
				<h1 className='bg-emerald-400 bg-opacity-50 text-6xl md:text-5xl sm:text-4xl text-white rounded-2xl absolute mx-10 p-2'>
					Bracelets
				</h1>
			</div>
		</div>
	);
}

export default Jewelry;
