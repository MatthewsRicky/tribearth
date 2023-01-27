import React from 'react'
import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FaCartPlus } from 'react-icons/fa'
import Logo from '../assets/Tribearth logo.png'

function Nav() {

  return (
    <div className='bg-transparent border-b-[2px] shadow-xl w-full fixed top-0 left-0'>
      <div className="flex flex-row relative my-3 items-center justify-between">
        <img className='hidden md:flex items-center justify-start pl-16 h-[24px] w-[24]' src={Logo} alt="/" />
        <ul className='md:flex hidden'>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Story</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Impact</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Artisans</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Vegan cafe</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href="">Shop</a></li>
          <li className='py-4 px-4 text-xl mx-auto text-black'><a href=""><FaCartPlus /></a></li>
        </ul>
      </div>
      <div className='shadow-xl flex relative justify-between'>
        <img className='md:hidden lg:hidden mt-4 items-center justify-start pl-16 h-[24px] w-[24]' src={Logo} alt="/" />
        <div className='hidden absoulte p-4'>
          <AiOutlineClose size={25} />
        </div>
        <div className='md:hidden flex absoulte p-4'>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      <div className='flex shadow-xl'>
        <ul className='font-medium text-center sm:items-center mx-auto flex-col w-full hidden boder-b-[2px] duration-500'>
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