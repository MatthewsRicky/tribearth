import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Ethicalgems from '../assets/Ethicalgems.jpg'

function Impact() {
  return (
    <div className='relative'>
      <Nav></Nav >

      <div className='flex mx-auto h-10 w-48 mt-32'>
        <h1>Tribearth sustains 30% of LocalAid’s humanitarian work. To learn more of LocalAid’s work in Kenya, please visit localaid.or.ke</h1>
      </div>

      <div className='flex flex-wrap justify-around items-center my-32'>




        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Ethicalgems}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Ethical Gemstones</h1>
            <p className="text-gray-700 text-base">
              Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.
            </p>
          </div>
        </div>


        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Ethicalgems}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Ethical Gemstones</h1>
            <p className="text-gray-700 text-base">
              Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.
            </p>
          </div>
        </div>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Ethicalgems}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Ethical Gemstones</h1>
            <p className="text-gray-700 text-base">
              Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.
            </p>
          </div>
        </div>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Ethicalgems}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">Ethical Gemstones</h1>
            <p className="text-gray-700 text-base">
              Responsible sourcing of gemstones is of great importance to our brand. Our gemstones are sourced directly from ethical mines run by women in Kenya. We embrace traceability and sustainability throughout our complete supply chain.
            </p>
          </div>
        </div>
      </div>



      <Footer />
    </div >
  )
}

export default Impact