import React from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import Logo from '../assets/Tribearth logo.png'

function Nav() {
  return (
    <div className='bg-green-100 w-full fixed top-0 left-0'>
      <div className="flex flex-row items-center justify-between">
        <img className='hidden md:flex items-center justify-start pl-4 h-[30px] w-24' src={Logo} alt="/" />
        <ul className='md:flex hidden'>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Story</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Impact</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Artisans</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Vegan cafe</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Shop</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href=""><FaCartPlus /></a></li>
        </ul>
      </div>
      <div className='flex'>
        <div className='flex absolute right-0'>
          <span className='py-4 px-4 text-xl mx-auto text-black md:hidden'><AiOutlineClose /></span>
        </div>
        <img className='md:hidden lg:hidden sm:flex mt-4 items-center justify-start pl-4 h-[30px] w-24' src={Logo} alt="/" />

      </div>
      <div>
        <ul className='sm:flex sm:justify-between sm:items-center mx-auto flex-col md:hidden'>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Story</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Impact</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Artisans</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Vegan cafe</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Shop</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href=""><FaCartPlus /></a></li>
        </ul>
      </div>
    </div>
  )
}

export default Nav