import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <div>
      <div className="bg-slate-200 h-full w-full flex p-4">
        <div>
          <h1 className='bold text-xl text-slate-500'>CONTACT DETAILS</h1>
          <h2>Tribearth,</h2>
          <h2>P.O. Box 00100,50600</h2>
          <h2>Diani Beach Rd (between Bazaar & Kaskazi)</h2>
          <h2>Diani, Kenya</h2>
          <div>
            <h2>T: +254 706 030625</h2>
            <h2>Email: hello@tribearth.org
            </h2>
          </div>
        </div>

        <div>
          <div>
            <h1 className='bold text-xl text-slate-500'>STORY</h1>
            <h2>ABOUT US</h2>
            <h2>IMPACT</h2>
            <h2>ARTISANS</h2>
          </div>
          <div>
            <h1 className='bold text-xl text-slate-500'>CUSTOMER CARE</h1>
            <h2>PRIVACY POLICY</h2>
            <h2>TERMS & CONDITIONS</h2>
            <h2>SHIPPING & RETURNS</h2>
          </div>
        </div>

        <div>
          <h1 className='bold text-xl text-slate-500'>CONTACT US</h1>
          <div className='flex flex-col'>
            <h1>name*</h1>
            <div className='flex flex-col'>
              <input className='my-1' type="" placeholder='first name' />
              <input className='my-1' type="" placeholder='last name' />
            </div>
            <div>
              <h1>email*</h1>
              <input type="email" name="" id="" placeholder='Email Address' />
            </div>
            <div>
              <h1>message*</h1>
              <input className='h-20' type="text" name="" id="" />
            </div>
            <button className='text-xl text-bold text-white flex justify-center items-center bg-emerald-300 bg-opacity-95 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-2 py-3 md:hover:scale-105 my-6 shadow-md'>submit</button>
          </div>
        </div>
        <div>
          <h1>SUBSCRIBE</h1>
          <div>
            <FaFacebook />
            <FaInstagram />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer