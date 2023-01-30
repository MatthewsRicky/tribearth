import React from "react";
import Fairtrade from "../assets/fair trade.svg";
import Ethicalgems from "../assets/ethical gemstones.svg";
import WomenEmpowerment from "../assets/women empowerment.svg";
import Greenworkshop from "../assets/Green workshop.svg";

function Ethos() {
	return (
		<div className='flex items-center justify-center flex-wrap shrink'>
			<div className='w-60 h-80 p-10 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-3xl shadow-2xl hover:scale-110 duration-300'>
				<img
					className='h-40 w-40'
					src={Fairtrade}
					alt='Fair Trade'
				/>
				<h1 className='p-4 mx-auto text-2xl bold mt-4 text-[#cdc155]'>
					Fair Trade
				</h1>
			</div>
			<div className='w-60 h-80 p-10 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-3xl shadow-2xl hover:scale-110 duration-300'>
				<img
					className='h-40 w-40'
					src={Ethicalgems}
					alt='Ethical Gemstones'
				/>
				<h1 className='p-2 mx-auto text-2xl bold mt-4 text-[#cdc155]'>
					Ethical Gemstones
				</h1>
			</div>
			<div className='w-60 h-80 p-10 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-3xl shadow-2xl hover:scale-110 duration-300'>
				<img
					className='h-40 w-40'
					src={WomenEmpowerment}
					alt="Women's Empowerment"
				/>
				<h1 className='p-2 mx-auto text-2xl bold mt-4 text-[#cdc155]'>
					Women's Empowerment
				</h1>
			</div>
			<div className='w-60 h-80 p-10 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-3xl shadow-2xl hover:scale-110 duration-300'>
				<img
					className='h-40 w-40'
					src={Greenworkshop}
					alt='Green Workshop'
				/>
				<h1 className='p-2 mx-auto text-2xl bold mt-4 text-[#cdc155]'>
					Green Workshop
				</h1>
			</div>
		</div>
	);
}

export default Ethos;
