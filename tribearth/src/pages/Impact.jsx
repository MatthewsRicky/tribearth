import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Ethicalgems from '../assets/Ethicalgems.jpg'

function Impact() {
  return (
    <div>
      <Nav></Nav>
      <div className=''>
        <div className='relative left-10 mt-[8rem] p-4 rounded-xl shadow-2xl'>
          <img
            className='relative left-[13rem] w-[70%] md:w-[50%]'
            src={Ethicalgems} alt="" />
          <div className='relative top-[-13rem] left-6 rounded-2xl py-6 md:w-[40%] bg-emerald-100 w-[50%]'>
            <h1 className='text-3xl md:text-4xl text-bol text-center py-4'>Ethical Gemstones</h1>
            <p className='text-xl px-4 text-center'>Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.</p>
          </div>
        </div>

        <div className='relative left-10 mt-[8rem] p-4 rounded-xl shadow-2xl'>
          <img
            className='relative left-[13rem] w-[70%] md:w-[50%]'
            src={Ethicalgems} alt="" />
          <div className='relative top-[-13rem] left-6 rounded-2xl py-6 md:w-[40%] bg-emerald-100 w-[50%]'>
            <h1 className='text-3xl md:text-4xl text-bol text-center py-4'>Ethical Gemstones</h1>
            <p className='text-xl px-4 text-center'>Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.</p>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default Impact