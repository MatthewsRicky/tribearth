import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

import Coffee from '..assets/coffee.jpeg'
import Fruitbowls from '..assets/fruitbowls.jpeg'

function Vegancafe() {
  const products = [
    {
      id: 2,
      name: "Ethiopian Coffee",
      price: 2.00,
      image: Coffee,
    },
    {
      id: 3,
      name: "Fruit bowls",
      price: 65.00,
      image: Fruitbowls,
    },

  ];

  return (
    <div>
      <Nav></Nav>
      <div className="mt-36 mx-8">
        <div className='mt-36'>
          <h1 className="bold text-center text-4xl md:text-5xl flex justify-center items-center">Vegan Boutique Cafe</h1>
          <p className="underline">Our vegan café at heart is a mix of Ethiopian food, Swahili snacks and healthy vegan bitings.</p>
        </div>
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition duration-500 ease-in-out"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-800 text-lg">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};



export default Vegancafe