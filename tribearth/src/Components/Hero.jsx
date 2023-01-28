import React from 'react'
import HeroImage from '../assets/hero.jpg'

function Hero() {
  return (
    <div>
      <div
        className='object-container'

        style={{ display: 'flex', height: '100vh', backgroundImage: `url(${HeroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', marginTop: '86px' }}>

      </div>
      <div>
        <button className="absolute top-[70%] md:top-[50%] left-[46%] flex justify-center items-center bg-slate-200 hover:scale-110 duration-200 text-center rounded-xl px-4 py-2 md:scale-125 md:hover:scale-150"  >EXPLORE</button>
      </div>

    </div>
  )

}

export default Hero