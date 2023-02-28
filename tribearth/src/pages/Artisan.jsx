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
      <div className='flex m-10 mt-36'>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Florence}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">FLORENCE IMIZA - Assembling Chief</h1>
            <p className="text-gray-700 text-base">
              My name is Florence. I have four children. I’ve always believed that life is about supporting each other because if we take care of one another, everyone grows. I want to see my daughter grow up to be empowered just like me. Here at Tribearth, I have found peace and happiness in the work I do and I see a hopeful future ahead.
            </p>
          </div>
        </div>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Fred}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">FRED NYONGESA - Soldering King</h1>
            <p className="text-gray-700 text-base">
              Hi, I’m Fred. I’ve been working for Tribearth for 2 years now and it’s helped me sustain myself and my family. I do all the soldering work at the workshop but my passion is creating new designs that suit Tribearth’s style. If you have a style in mind, just reach out to us and I’ll custom make a special piece just for you.
            </p>
          </div>
        </div>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Adam}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">ADAM NGERI - Supply Chain Manager</h1>
            <p className="text-gray-700 text-base">
              My name is Adam Neri, I was living on the streets for many years before Tribearth’s affiliated organization, LocalAid rescued me and admitted me into their children’s home. After graduating from LocalAid’s educational program, I was employed by Tribearth and I am now in charge of the supply chain and administration. Most people know me as the funny guy who sees life in a positive way, free of stress.
            </p>
          </div>
        </div>
        <div className="w-64 shadow-md rounded-md overflow-hidden flex flex-col">
          <img
            className="w-full h-48 object-cover"
            src={Lena}
            alt="Card Image"
          />
          <div className="p-4">
            <h1 className="text-xl font-semibold mb-2">LENA INDUSA KAGONI -  Polishing Queen</h1>
            <p className="text-gray-700 text-base">
              My name is Lena, I feel blessed to have a job right now during Covid as I know many people who have been laid off and unable to look after their family. I have 2 kids that I am able to take care of because I have a stable income. I buff and polish all of the jewelry at Tribearth to make sure they shine bright and make our customers happy.
            </p>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  )
}

export default Artisan