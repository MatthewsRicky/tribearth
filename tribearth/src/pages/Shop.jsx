import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Athens from '../assets/RingsSliderImages/Athens Delight.jpeg'
import Aurora from '../assets/RingsSliderImages/Auroras Light.jpeg'
import Bacchus from '../assets/RingsSliderImages/bands of bacchus.jpeg'

const Shop = () => {
  const products = [
    {
      id: 1,
      name: "Athen's Delight",
      price: 80.00,
      image: Athens,
    },
    {
      id: 2,
      name: "Aurora's Delight",
      price: 65.00,
      image: Aurora,
    },
    {
      id: 3,
      name: "Bands of Bacchus",
      price: 65.00,
      image: Bacchus,
    },
    {
      id: 4,
      name: "Athen's Delight",
      price: 80.00,
      image: Athens,
    },
    {
      id: 5,
      name: "Aurora's Delight",
      price: 65.00,
      image: Aurora,
    },
    {
      id: 6,
      name: "Bands of Bacchus",
      price: 65.00,
      image: Bacchus,
    },
  ];

  return (
    <div>
      <Nav></Nav>
      <div className="mt-36 bg-emerald-100">
        <div className="container mx-auto py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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



export default Shop;
