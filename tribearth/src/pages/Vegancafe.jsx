import React from 'react'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Anjeera from '../assets/anjeera.jpeg'
import Coffee from '../assets/coffee.jpeg'
import Fruitbowls from '../assets/fruitbowls.jpeg'
import Carousel from '../Components/Carousel'
import Reservation from '../Components/Reservation'
import Products from '../Components/Products'

function Vegancafe() {
  const products = [
    {
      id: 1,
      name: "Ethiopian Platter and Wraps",
      price: 9.50,
      image: Anjeera,
      description: "With the right ingredients, baobab, coconut milk, moringa, chocolate, peanut butter, and mango deliciousness, our smoothie bowls are just the perfect meal in a bowl.",
    },
    {
      id: 2,
      name: "Freshly Roasted Ethiopian Coffee",
      price: 2.00,
      image: Coffee,
      description: "The space brims with exciting flavors as guests marvel on freshly roasted beans on site while the coffee is being prepared on the spot. The sweet scent of frankincense burning and fusing with the coffee aroma pushes you to miss anything meaty.",
    },
    {
      id: 3,
      name: "Healthy Vegan Snacks",
      price: 4.50,
      image: Fruitbowls,
      description: "Gluten free Injera with hearty traditional Ethiopian stews and vegs is one of our main meals. Something about Ethiopian platters that just tastes better when shared with friends.",
    },
    {
      id: 1,
      name: "Ethiopian Platter and Wraps",
      price: 9.50,
      image: Anjeera,
      description: "With the right ingredients, baobab, coconut milk, moringa, chocolate, peanut butter, and mango deliciousness, our smoothie bowls are just the perfect meal in a bowl.",
    },
    {
      id: 2,
      name: "Freshly Roasted Ethiopian Coffee",
      price: 2.00,
      image: Coffee,
      description: "The space brims with exciting flavors as guests marvel on freshly roasted beans on site while the coffee is being prepared on the spot. The sweet scent of frankincense burning and fusing with the coffee aroma pushes you to miss anything meaty.",
    },
    {
      id: 3,
      name: "Healthy Vegan Snacks",
      price: 4.50,
      image: Fruitbowls,
      description: "Gluten free Injera with hearty traditional Ethiopian stews and vegs is one of our main meals. Something about Ethiopian platters that just tastes better when shared with friends.",
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
                  <p className="text-gray-600 text-xl">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Carousel></Carousel>
        <Reservation></Reservation>
      </div>
      <Footer></Footer>
    </div>
  );
};



export default Vegancafe