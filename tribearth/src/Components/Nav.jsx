import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import Logo from '../assets/Tribearth logo.png'

function Nav() {
  const [navBar, setNavBar] = useState(true)

  const handleNav = () => {
    setNavBar(!navBar)
  }

  return (
    <div className='bg-white border-b-[2px] shadow-xl w-full fixed top-0 left-0 mb-40 z-10'>
      <div className="flex flex-row relative my-3 items-center justify-between">
        <img className='hidden md:flex items-center justify-start pl-16 h-[24px] w-[24] hover:scale-[105%] duration-500' src={Logo} alt="/" />
        <ul className='md:flex hidden'>
          <li className='bold py-4 px-4 text-xl mx-auto text-black hover:scale-[105%] hover:highlight duration-200'><a href="">Story</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black hover:scale-[105%] duration-500'><a href="">Impact</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black hover:scale-[105%] duration-500'><a href="">Artisans</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black hover:scale-[105%] duration-500'><a href="">Vegan cafe</a></li>
        </ul>
        <ul className='md:flex hidden'>
          <li className='py-4 px-4 text-xl mx-auto text-black hover:scale-[105%] duration-500'><a href="">Shop</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black hover:scale-[105%] duration-500'><a href=""><FaCartPlus /></a></li>
        </ul>
      </div>
      <div className='shadow-xl flex relative justify-between'>
        <img className='md:hidden lg:hidden my-4 items-center justify-start pl-16 h-[24px] w-[24] hover:scale-[105%] duration-500' src={Logo} alt="/" />
        <div className='md:hidden lg:hidden xl:hidden my-4 mr-16' onClick={handleNav}>
          {!navBar ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>
      <div className={!navBar ? 'flex shadow-xl ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <ul className='md:hidden font-medium text-center sm:items-center mx-auto flex-col w-[90%] bg-white boder-b-[2px] flex duration-500'>
          <li className='py-4 px-4 text-xl mx-auto text-black border-b-[2px] border-gray-300 bg-transparent hover:scale-[105%] duration-500 w-[75%] '><a href="">Story</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black border-b-[2px] border-gray-300 bg-transparent hover:scale-[105%] duration-500 w-[75%] '><a href="">Impact</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black border-b-[2px] border-gray-300 bg-transparent hover:scale-[105%] duration-500 w-[75%] '><a href="">Artisans</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black border-b-[2px] border-gray-300 bg-transparent hover:scale-[105%] duration-500 w-[75%] '><a href="">Vegan cafe</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black border-b-[2px] border-gray-300 bg-transparent hover:scale-[105%] duration-500 w-[75%] '><a href="">Shop</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black bg-transparent hover:scale-[105%] duration-500 w-[75%] l'><a href=""><FaCartPlus /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav