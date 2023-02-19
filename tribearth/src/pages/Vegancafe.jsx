import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function Vegancafe() {
  return (
    <div>
      <section>
        <Nav></Nav>
        <h1 className="bold text-center text-4xl md:text-5xl flex justify-center items-center">Vegan Boutique Cafe</h1>
      </section>
      <Footer />
    </div>
  )
}

export default Vegancafe