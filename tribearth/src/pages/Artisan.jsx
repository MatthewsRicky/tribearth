import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Florence from '../assets/Florence.jpg'
import Fred from '../assets/Fred.jpg'
import Adam from '../assets/Adam.jpg'
import Lena from '../assets/Lena.jpg'

function Artisan() {
  return (
    <div>
      <Nav></Nav>
      <div className='flex flex-col m-10 mt-36'>
        <div className='flex justify-between m-4 p-8 bg-slate-100 items-center rounded-xl'>
          <img className='w-60 m-2 ' src={Florence} alt="" />
          <div>
            <h1>FLORENCE IMIZA - Assembling Chief</h1>
            <p>
              My name is Florence. I have four children. I’ve always believed that life is about supporting each other because if we take care of one another, everyone grows. I want to see my daughter grow up to be empowered just like me. Here at Tribearth, I have found peace and happiness in the work I do and I see a hopeful future ahead.
            </p>
          </div>

        </div>
        <div className='flex justify-between m-4 p-8 bg-slate-100 items-center rounded-xl'>
          <div >
            <h1>FRED NYONGESA - Soldering King</h1>
            <p>
              Hi, I’m Fred. I’ve been working for Tribearth for 2 years now and it’s helped me sustain myself and my family. I do all the soldering work at the workshop but my passion is creating new designs that suit Tribearth’s style. If you have a style in mind, just reach out to us and I’ll custom make a special piece just for you.
            </p>
          </div>

          <img className='w-60 m-2 ' src={Fred} alt="" />
        </div>
        <div className='flex justify-between m-4 p-8 bg-slate-100 items-center rounded-xl'>
          <img className='w-60 m-2 ' src={Adam} alt="" />
          <div>
            <h1>ADAM NGERI - Supply Chain Manager </h1>
            <p>
              My name is Adam Neri, I was living on the streets for many years before Tribearth’s affiliated organization, LocalAid rescued me and admitted me into their children’s home. After graduating from LocalAid’s educational program, I was employed by Tribearth and I am now in charge of the supply chain and administration. Most people know me as the funny guy who sees life in a positive way, free of stress.
            </p>
          </div>

        </div>
        <div className='flex justify-between m-4 p-8 bg-slate-100 items-center rounded-xl'>
          <div >
            <h1>LENA INDUSA KAGONI -  Polishing Queen</h1>
            <p>
              My name is Lena, I feel blessed to have a job right now during Covid as I know many people who have been laid off and unable to look after their family. I have 2 kids that I am able to take care of because I have a stable income. I buff and polish all of the jewelry at Tribearth to make sure they shine bright and make our customers happy.
            </p>
          </div>

          <img className='w-60 m-2 ' src={Lena} alt="" />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Artisan