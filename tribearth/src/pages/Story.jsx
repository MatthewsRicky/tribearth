import React from 'react'
import Nav from '../Components/Nav'
import Abouthero from '../assets/abouthero.png'
import Green from '../assets/green.png'
import Sumer from '../assets/Sumer.jpg'
import Localaid from '../assets/Localaid.jpg'
import Footer from "../Components/Footer";

function Storypage() {
  return (
    <div className='relative '>
      <Nav></Nav>
      <div className='flex flex-col justify-around pt-20'>

        <div className='flex flex-col p-2'>
          <div className='border-2 shadow-xl m-10'>
            <div className='flex'>
              <h1 className="text-4xl bold underline underline-offset-8 py-4 mx-auto my-2">About us</h1>
            </div>
            <div className='flex justify-between items-center h-full flex-col md:flex-row bg-transparent'>

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
          </div>

          <div className='border-2 shadow-xl m-10'>
            <div className='flex'>
              <h1 className="text-4xl bold underline underline-offset-8 py-4 mx-auto my-2">Value & Philosophy</h1>
            </div>
            <div className='flex justify-between items-center h-full flex-col md:flex-row bg-transparent'>
              <div className="flex p-4">
                <img
                  style={{
                    width: 'auto',
                    height: '100%'
                  }}
                  src={Green} alt="" />
              </div>
              <div className=" p-2 text-xl text-left w-full bold ml-8 mx-4 md:w-[40%]">

                <ul className='flex flex-col justify-center items-center'>
                  <li>Sustainabilty</li>
                  <li>Ethical Trade</li>
                  <li>Creative Innovation</li>
                  <li>Passion</li>
                </ul>
              </div>

            </div>
          </div>

          <div className='border-2 shadow-xl m-10'>
            <div className='flex'>
              <h1 className="text-4xl bold underline underline-offset-8 py-4 mx-auto my-2">Team LocalAid</h1>
            </div>
            <div className='flex justify-between items-center h-full flex-col md:flex-row bg-transparent'>
              <p className=" p-2 text-xl text-left w-full bold ml-8 mx-4 md:w-[40%]">
                We are a Social Enterprise under our affiliated NGO called LocalAid. LocalAid has 10 years of experience in the NGO sector in terms of measuring impact, social interaction, and outreach programs. LocalAid's vision is to empower marginalized communities and vulnerable children. Tribearth benefits from LocaLAid's organizational architecture, such as legal framework, HR and accounting.
              </p>
              <div className='p-4'>
                <img
                  style={
                    {
                      width: 'auto',
                      height: '100%',
                    }
                  }
                  src={Localaid} alt="/" />
              </div>
            </div>
          </div>

          <div className='border-2 shadow-xl m-10'>
            <div className='flex'>
              <h1 className="text-4xl bold underline underline-offset-8 py-4 mx-auto my-2">Designer</h1>
            </div>
            <div className='flex justify-between items-center h-full flex-col md:flex-row bg-transparent'>
              <img
                style={{
                  width: 'auto',
                  height: '100%'
                }}
                src={Sumer} alt="" />
              <p className=" p-2 text-xl text-left w-full bold ml-8 mx-4 md:w-[40%]">
                Sumer Homeh is our head creative designer. She had studied and worked as a fashion designer for 7 years in Australia before founding LocalAid in 2008. She has lead several projects through her humanitarian work in Kenya over the past 10 years with LocalAid.
              </p>
            </div>
          </div>


        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Storypage