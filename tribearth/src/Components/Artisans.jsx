import React from "react";
import Artisanhero from "../assets/artisan.jpeg";


function Artisans() {

  return <div
    className="w-full h-full p-4"

    style={{
      backgroundImage: `url(${Artisanhero})`,
      bacgroundSize: 'fill',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
    }>
    <div>
      <button className='text-xl text-bold text-white flex justify-center items-center bg-transparent border border-emerald-500 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-5 py-3 md:scale-125 md:hover:scale-150 my-6 shadow-md'>Meet the Artisans</button>
    </div>
  </div >;
}

export default Artisans;
