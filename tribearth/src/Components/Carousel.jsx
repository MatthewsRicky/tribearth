import React from 'react'
import Slider from "react-slick";
import "/slick-carousel/slick/slick.css";
import "/slick-carousel/slick/slick-theme.css";
import Athens from '../assets/RingsSliderImages/Athens Delight.jpeg'
import Aurora from '../assets/RingsSliderImages/Auroras Light.jpeg'
import Bacchus from '../assets/RingsSliderImages/bands of bacchus.jpeg'
import Delilah from '../assets/RingsSliderImages/Bands of Delilah.jpeg'
import Lilac from '../assets/RingsSliderImages/Drops of Lilac.jpeg'
import Osiris from '../assets/RingsSliderImages/Eye of Osiris.jpeg'
import Golden from '../assets/RingsSliderImages/Golden Spiral.jpeg'
import Kali from '../assets/RingsSliderImages/Kalis Crown.jpeg'
import Ocean from '../assets/RingsSliderImages/Ocean Peace.jpeg'
import Purple from '../assets/RingsSliderImages/Purple Moon.jpeg'
import Sirene from '../assets/RingsSliderImages/Sirenes Wings.jpeg'
import Talisman from '../assets/RingsSliderImages/Talismans Tale.jpeg'

const images = [
  Athens,
  Aurora,
  Bacchus,
  Delilah,
  Lilac,
  Osiris,
  Golden,
  Kali,
  Ocean,
  Purple,
  Sirene,
  Talisman,
];

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
}


export default Carousel