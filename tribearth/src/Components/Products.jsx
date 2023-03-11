import React from 'react'
import Anjeera from '../assets/anjeera.jpeg'
import Coffee from '../assets/coffee.jpeg'
import Fruitbowls from '../assets/fruitbowls.jpeg'


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
    id: 4,
    name: "Healthy Vegan Snacks",
    price: 4.50,
    image: Fruitbowls,
    description: "Gluten free Injera with hearty traditional Ethiopian stews and vegs is one of our main meals. Something about Ethiopian platters that just tastes better when shared with friends.",
  },

];
function Products() {
  return (
    <div>Products</div>
  )
}

export default Products

