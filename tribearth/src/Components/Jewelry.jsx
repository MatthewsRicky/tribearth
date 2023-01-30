import React from "react";
import Rings from '../assets/rings.jpg'
import Earrings from '../assets/earrings.jpg'
import Necklaces from '../assets/necklaces.jpg'
import Bracelets from '../assets/bracelets.jpg'

function Jewelry() {
  return (
    <div className="flex flex-row flex-wrap justify-center">
      <div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-xl shadow-2xl hover:scale-110 duration-300'>
        <img className="relative rounded-xl" src={Rings} alt="Rings" />
        <h1 className="text-5xl md:text-4xl sm:text-3xl text-[#cdc155] mix-blend-normal absolute">Rings</h1>
      </div>
      <div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-xl shadow-2xl hover:scale-110 duration-300'>
        <img className="relative rounded-xl" src={Earrings} alt="Earrings" />
        <h1 className="text-5xl md:text-4xl sm:text-3xl text-[#cdc155] mix-blend-normal left absolute">Earrings</h1>
      </div>
      <div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-xl shadow-2xl hover:scale-110 duration-300'>
        <img className="relative rounded-xl" src={Necklaces} alt="Necklaces" />
        <h1 className="text-5xl md:text-4xl sm:text-3xl text-[#cdc155] mix-blend-normal absolute">Necklaces</h1>
      </div>
      <div className='md:max-w-[500px] sm:max-w-[250px] p-3 m-8 flex flex-col justify-center align-middle border-2 bg-emerald-100 bg-opacity-85 rounded-xl shadow-2xl hover:scale-110 duration-300'>
        <img className="relative rounded-xl" src={Bracelets} alt="Bracelets" />
        <h1 className="text-5xl md:text-4xl sm:text-3xl text-[#cdc155] mix-blend-normal absolute">Bracelets</h1>
      </div>
    </div>
  )

}

export default Jewelry;
