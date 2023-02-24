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
					border: "none",
				}}>
				<div className='flex flex-col justify-center w-full h-full bg-gradient-to-b bg-opacity-90 mix-blend-multiply opacity-95 from-neutral-200 to-emerald-100'>
					<img
						className='flex  text-2xl md:text-4xl lg:text-5xl p-4 p4 mx-auto backdrop:blur'
						src={Logo}
					/>
					<div className='mx-auto my-4'>
						<button className='text-xl text-bold text-emerald-500 flex justify-center items-center bg-transparent border border-emerald-500 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-5 py-3 md:scale-125 md:hover:scale-110 my-6 shadow-md'>
							EXPLORE
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
