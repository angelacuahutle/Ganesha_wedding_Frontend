import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import client from '../SanityClient'
import imageUrlBuilder from '@sanity/image-url'
import "../global.css";


function SimpleSlider({galleryData}) {
  const settings = {
    dots: true,
    customPaging: function (i) {
        return <div
        className={`dot ${i === settings.currentSlide ? 'active-dot' : ''}`}
        style={{ background: "#000", borderRadius: "50%", width : 12, height : 12, marginTop : 15, opacity: 0.5 }}></div>;
      },
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const builder = imageUrlBuilder(client)
  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div className="slider-container bg-white">
      
      <Slider {...settings}>
     { galleryData && galleryData.map((e, index)=>{
            return      <Link key={index} to={{pathname: '/gallery' }} state={e}>
              <img
              className="w-full h-[700px] md:h-auto overflow-hidden shrink-0 object-contain sm:w-[100%] sm:h-auto"
              alt=""
              // src="./dc06.jpg"
              src={urlFor(e.coverImg).url()}
            /></Link>
      })}
      </Slider>

    </div>
  );
}

export default SimpleSlider;