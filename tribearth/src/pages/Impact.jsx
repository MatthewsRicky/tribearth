import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Ethicalgems from '../assets/Ethicalgems.jpg'

function Impact() {
  return (
    <div>
      <Nav></Nav>
      <div>
        <img src={Ethicalgems} alt="" />
        <div className='bg-emerald-100 w-60'>
          <h1>Ethical Gemstones</h1>
          <p>Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Impact