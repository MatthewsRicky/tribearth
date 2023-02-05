import React, { useState } from "react";
import Athen from "../assets/RingsSliderImages/Athen's Delight.jpeg"
import Aurora from "../assets/RingsSliderImages/Aurora's Light.jpeg"
import Bacchus from "../assets/RingsSliderImages/bands of bacchus.jpeg"
import Delilah from "../assets/RingsSliderImages/Bands of Delilah.jpeg"
import Lilac from "../assets/RingsSliderImages/Drops of Lilac.jpeg"
import Osiris from "../assets/RingsSliderImages/Eye of Osiris.jpeg"
import Spiral from "../assets/RingsSliderImages/Golden Spiral.jpeg"
import Kali from "../assets/RingsSliderImages/Kali's Crown.jpeg"
import Ocean from "../assets/RingsSliderImages/Ocean Peace.jpeg"
import Moon from "../assets/RingsSliderImages/Purple Moon.jpeg"
import Sirene from "../assets/RingsSliderImages/Sirene's Wings.jpeg"
import Talisman from "../assets/RingsSliderImages/Talisman's Tale.jpeg"

const RingSlider = () => {
  const [currentRingIndex, setCurrentRingIndex] = useState(0);
  const images = [
    { Athen },
    { Aurora },
    { Bacchus },
    { Delilah },
    { Lilac },
    { Osiris },
    { Spiral },
    { Kali },
    { Ocean },
    { Moon },
    { Sirene },
    { Talisman }
  ];

  const handleNext = () => {
    setCurrentRingIndex((currentRingIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentRingIndex((currentRingIndex + images.length - 1) % images.length);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <img
        className="w-full h-full"

        src={images[currentRingIndex]} alt="Image" />
      <div style={{ marginTop: 20 }}>
        <button className="text-xl text-bold text-white flex justify-center items-center bg-emerald-300 bg-opacity-95 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-5 py-3 md:scale-125 md:hover:scale-150 my-6 shadow-md" onClick={handlePrev}>Previous</button>
        <button className="text-xl text-bold text-white flex justify-center items-center bg-emerald-300 bg-opacity-95 hover:bg-emerald-200 opacity-95 hover:scale-110 duration-200 text-center rounded-xl px-5 py-3 md:scale-125 md:hover:scale-150 my-6 shadow-md" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default RingSlider;
