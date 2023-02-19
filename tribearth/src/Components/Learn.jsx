import React from 'react'
import Green from '../assets/green.png'

function Learn() {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      flexShrink: true,
      backgroundImage: `url(${Green})`,
      backgroundSize: "fill",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      marginTop: "86px",
      border: "none",
    }}>
      <div
        className='w-full h-[50%]'>
        <h1 className="text-3xl text-white bold">Learn about our green practices</h1>
        <button className='text-white'>LEARN MORE</button>
      </div>
    </div >
  )
}

export default Learn