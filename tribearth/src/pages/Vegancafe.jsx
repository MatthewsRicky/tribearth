import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function Vegancafe() {
  return (
    <div>
      <section>
        <Nav></Nav>
        <div className='mt-36'>
          <h1 className="bold text-center text-4xl md:text-5xl flex justify-center items-center">Vegan Boutique Cafe</h1>
          <p className="underline">Our vegan café at heart is a mix of Ethiopian food, Swahili snacks and healthy vegan bitings.</p>
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default Vegancafe