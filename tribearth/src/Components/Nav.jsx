import React from 'react'

function Nav() {
  return (
    <div className='bg-gray-200 w-full fixed top-0 left-0'>
      <div className="flex flex-col items-center justify-between">
        <span>
          <img className='' src="../assets/Tribearth logo.png" alt="" />
        </span>
        <ul className='md:flex hidden'>
          <li className='p-4 text-xl mx-auto text-green-900'><a href="">Story</a></li>
          <li className='p-4 text-xl mx-auto text-green-900'><a href="">Impact</a></li>
          <li className='p-4 text-xl mx-auto text-green-900'><a href="">Artisans</a></li>
          <li className='p-4 text-xl mx-auto text-green-900'><a href="">Vegan cafe</a></li>
          <li className='p-4 text-xl mx-auto text-green-900'><a href="">Shop</a></li>
        </ul>
        <ul>
          <li>
            <a href=""></a>
          </li>
          <li></li>
        </ul>

      </div>
    </div>
  )
}

export default Nav