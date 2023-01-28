import React from 'react'
import HeroImage from '../assets/hero.jpg'

function Hero() {
  return (
    <div>
      <div
        className='flex flex-col justify-center items-center'

        style={{ display: 'flex', height: '100vh', backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '86px', }}>
        <h1 className="flex  text-2xl md:text-4xl lg:text-5xl font-bold border-1 bg-transparent p-4 rounded-xl opacity-80 uppercase text-green-600 p4 mx-auto">Community Art food Culture</h1>
        <div className='mx-auto my-4'>
          <button className="text-xl text-bold text-white flex justify-center items-center bg-green-600 opacity-60 hover:scale-110 duration-200 text-center rounded-xl px-5 py-3 md:scale-125 md:hover:scale-150 my-6"  >EXPLORE</button>
        </div>
      </div>


    </div>
  )

}

export default Hero