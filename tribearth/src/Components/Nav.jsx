import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaCartPlus } from "react-icons/fa";
import Logo from "../assets/Tribearth logo.png";

function Nav() {
	const [navBar, setNavBar] = useState(true);

	const handleNav = () => {
		setNavBar(!navBar);
	};

	return (
		<div className='bg-emerald-300 bg-opacity-90 border-b-[1px] border-emerald-200 shadow-md shadow-black-100 w-full fixed top-0 left-0 mb-40 z-10'>
			<div className='flex flex-row relative my-3 items-center justify-between'>
				<a href='index.html'>
					<img
						className='hidden md:flex items-center justify-start pl-16 h-[24px] w-[24] hover:scale-[105%] duration-500'
						src={Logo}
						alt='/'
					/>
				</a>

				<ul className='md:flex hidden'>
					<li className='bold py-4 px-4 text-2xl mx-auto text-black border-l-emerald-200 bg-opacity-100 hover:scale-[105%] hover:bg-emerald-400 rounded-lg duration-200'>
						<Link to="/Story">Story</Link>
					</li>
					<li className='py-4 px-4 text-2xl mx-auto text-black hover:scale-[105%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-400 rounded-lg duration-500'>
						<Link to="/Impact">Impact</Link>
					</li>
					<li className='py-4 px-4 text-2xl mx-auto text-black hover:scale-[105%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-400 rounded-lg duration-500'>
						<Link to="/Artisan">Artisans</Link>
					</li>
					<li className='py-4 px-4 text-2xl mx-auto text-black hover:scale-[105%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-400 rounded-lg duration-500'>
						<Link to="/Vegancafe">Vegan cafe</Link>
					</li>
				</ul>
				<ul className='md:flex hidden'>
					<li className='py-4 px-4 text-2xl mx-auto text-black hover:scale-[105%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-400 rounded-lg duration-500'>
						<Link to="/Shop">Shop</Link>
					</li>
					<li className='py-4 px-4 text-2xl mx-auto text-black hover:scale-[105%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-400 rounded-lg duration-500'>
						<a href='/'>
							<FaCartPlus />
						</a>
					</li>
				</ul>
			</div>
			<div className='shadow-xl flex relative justify-between'>
				<img
					className='md:hidden lg:hidden my-4 items-center justify-start pl-16 h-[24px] w-[24] hover:scale-[105%] duration-500'
					src={Logo}
					alt='/'
				/>
				<div
					className='md:hidden lg:hidden xl:hidden my-4 mr-16'
					onClick={handleNav}>
					{!navBar ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
				</div>
			</div>
			<div
				className={
					!navBar
						? "flex shadow-xl ease-in-out duration-500"
						: "fixed left-[-100%]"
				}>
				<ul className='md:hidden font-medium text-center sm:items-center mx-auto flex-col w-[90%] bg-emerald-300 bg-opacity-80 boder-b-[2px] flex duration-500'>
					<li className='py-4 px-4 text-3xl mx-auto text-black border-b-[2px]  border-black border-opacity-40 bg-transparent hover:scale-[105%] duration-500 w-[75%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-200 rounded-lg '>
						<Link to="/Story">Story</Link>
					</li>
					<li className='py-4 px-4 text-3xl mx-auto text-black border-b-[2px]  border-black border-opacity-40 bg-transparent hover:scale-[105%] duration-500 w-[75%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-200 rounded-lg '>
						<Link to="/Impact">Impact</Link>
					</li>
					<li className='py-4 px-4 text-3xl mx-auto text-black border-b-[2px]  border-black border-opacity-40 bg-transparent hover:scale-[105%] duration-500 w-[75%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-200 rounded-lg '>
						<Link to="/Artisan">Artisans</Link>
					</li>
					<li className='py-4 px-4 text-3xl mx-auto text-black border-b-[2px]  border-black border-opacity-40 bg-transparent hover:scale-[105%] duration-500 w-[75%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-200 rounded-lg '>
						<Link to="/Vegancafe">Vegan cafe</Link>
					</li>
					<li className='py-4 px-4 text-3xl mx-auto text-black border-b-[2px]  border-black border-opacity-40 bg-transparent hover:scale-[105%] duration-500 w-[75%] border-l-emerald-200 bg-opacity-100 hover:bg-emerald-200 rounded-lg '>
						<Link to="/Shop">Shop</Link>
					</li>
					<li className='py-4 px-4 text-3xl mx-auto text-black  bg-transparent hover:scale-[105%] duration-500 w-[75%] l border-l-emerald-200 bg-opacity-60 hover:bg-emerald-200 rounded-lg '>
						<a href='/'>
							<FaCartPlus />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nav;
