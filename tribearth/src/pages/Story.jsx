import React from 'react'
import Nav from '../Components/Nav'
import Abouthero from '../assets/abouthero.png'
import Green from '../assets/green.png'
import Footer from "../Components/Footer";

function Storypage() {
  return (
    <div className='relative '>
      <Nav></Nav>
      <div className='flex flex-col justify-around pt-20'>
        <div className='flex'>
          <h1 className="text-4xl bold underline underline-offset-8 py-4 mx-auto my-12">About us</h1>
        </div>
        <div className='flex flex-col p-2'>
          <div className='flex justify-between items-center h-full flex-col md:flex-row m-8 bg-transparent border-2 shadow-xl'>
            <p className=" p-2 text-xl text-left w-full bold ml-8 mx-4 md:w-[40%]">
              Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth.
            </p>
            <div className='p-4'>
              <img
                style={
                  {
                    width: 'auto',
                    height: 'auto',
                  }
                }
                src={Abouthero} alt="/" />
            </div>
          </div>

          <div className='flex justify-between items-center h-full flex-col md:flex-row m-8 bg-transparent border-2 shadow-xl'>
            <div className="flex p-4">
              <img
                style={{
                  width: 'auto',
                  height: '100%'
                }}
                src={Green} alt="" />
            </div>
            <p className=" p-2 text-xl text-left w-full bold ml-8 mx-4 md:w-[40%]">
              Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth.
            </p>

          </div>
          <div className='flex justify-between items-center h-full flex-col md:flex-row m-8 bg-transparent border-2 shadow-xl'>
            <p className=" p-2 text-xl text-left w-full bold ml-8 mx-4 md:w-[40%]">
              Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth.
            </p>
            <div className='p-4'>
              <img
                style={
                  {
                    width: 'auto',
                    height: '100%',
                  }
                }
                src={Abouthero} alt="/" />
            </div>
          </div>
          <div className='flex justify-between items-center h-full flex-col md:flex-row m-8 bg-transparent border-2 shadow-xl'>
            <img
              style={{
                width: 'auto',
                height: '100%'
              }}
              src={Green} alt="" />
            <p className=" p-2 text-xl text-left w-full bold ml-8 mx-4 md:w-[40%]">
              Tribearth is a socially conscious jewelry business that creates a community of empowered women & youth who produce handmade products in a sustainable and ethical environment. Using a moralistic and economic approach, Tribearth creates a challenging voice against the detrimental impact of fast fashion and inequality faced by stigmatized women & youth.
            </p>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Storypage