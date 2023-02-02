import React from "react";
import Artisanhero from "../assets/artisan.jpeg";

function Artisans() {
  return <div>
    <div className='flex flex-col justify-center w-full h-full bg-gradient-to-b bg-opacity-90 mix-blend-multiply opacity-95 from-neutral-200 to-emerald-100'>
      <img
        className="w-full"
        src={Artisanhero} alt="/" />
      <div>
        <button className='scale-80 text-bold text-black flex justify-center items-center bg-emerald-500 bg-opacity-95 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-2 py-3 md:hover:scale-110 my-6 shadow-md'>Meet the Artists</button>
      </div>

    </div>
  </div>;
}

export default Artisans;
