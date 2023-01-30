import React from "react";
import HeroImage from "../assets/hero.jpg";
import Logo from "../assets/Tribearth logo.png";

function Hero() {
	return (
		<div className='block'>
			<div
				className='flex flex-col justify-center items-center sm:flex-shrink'
				style={{
					display: "flex",
					height: "100vh",
					flexShrink: true,
					backgroundImage: `url(${HeroImage})`,
					backgroundSize: "fill",
					backgroundPosition: "center",
					marginTop: "86px",
				}}>
				<div className='flex flex-col justify-center w-full h-full bg-gradient-to-b bg-opacity-90 mix-blend-multiply opacity-95 from-neutral-200 to-emerald-100'>
					<img
						className='flex  text-2xl md:text-4xl lg:text-5xl p-4 p4 mx-auto'
						src={Logo}
					/>
					<div className='mx-auto my-4'>
						<button className='text-xl text-bold text-black flex justify-center items-center bg-emerald-300 bg-opacity-95 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-5 py-3 md:scale-125 md:hover:scale-150 my-6 shadow-md'>
							EXPLORE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
