import React from 'react'
import Green from '../assets/green.png'

function Learn() {
  return (
    <div style={{
      backgroundImage: `${<Green />}`,
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
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