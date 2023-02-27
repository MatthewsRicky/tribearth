import React, { useState } from 'react';
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'

function Cart() {
  // Define the state for the list of items in the cart
  const [items, setItems] = useState([
    { id: 1, name: 'Product 1', price: 10, quantity: 1 },
    { id: 2, name: 'Product 2', price: 20, quantity: 2 },
    { id: 3, name: 'Product 3', price: 30, quantity: 3 },
  ]);

  // Define a function to update the quantity of an item in the cart
  function updateQuantity(id, quantity) {
    const updatedItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity };
      }
      return item;
    });
    setItems(updatedItems);
  }

  // Define a function to calculate the total price of all items in the cart
  function calculateTotal() {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  // Render the list of items in the cart
  const itemList = items.map(item => (
    <li className='p-3' key={item.id}>
      {item.name} - ${item.price} x
      <input
        className='hover:highlight hover:bg-emerald-100'
        type="number"
        min="1"
        value={item.quantity}
        onChange={e => updateQuantity(item.id, e.target.value)}
      />
    </li>
  ));

  return (
    <div>
      <Nav></Nav>
      <div className='flex flex-col justify-center items-center p-8 bg-slate-100 mx-12 my-32 rounded-xl shadow-xl'>
        <h2 className='text-4xl m-4 bold '>Cart</h2>
        <ul className='flex flex-col text-xl'>{itemList}</ul>
        <h3 className='text-xl p-4'>Total: ${calculateTotal()}</h3>
        <h1 className="text-xl text-emerald-500 p4">Thank you!</h1>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Cart;
