import React from 'react'
import { Link } from 'react-router-dom';
import client from '../SanityClient'
import imageUrlBuilder from '@sanity/image-url'
import SlickSlider from '../components/Slick';
const builder = imageUrlBuilder(client)

function FifthPage({galleryCover, galleryData}) {
  
  function urlFor(source) {
    return builder.image(source)
  }

  return (
    <div data-scroll-to="fifthPage">
      <div className="self-stretch flex flex-col items-center justify-center text-[60px] text-white w-[100vw]">
        <div data-scroll-to="fifthPage" style={{ display: 'none' }}>
          <div className="self-stretch flex flex-col items-center justify-center text-[60px] text-white w-[100vw]">
            {/* Content goes here */}
            <video className="hidden-video flex flex-col items-center justify-center px-0 w-[100vw]" controls>
              <source src="your-video-file.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Título NUESTRAS BODAS con fondo gris */}
      <div className="w-[100%] h-[200px] mq600px:h-[200px] object-cover z-[-1] bg-gainsboro flex items-center justify-center">
        <div className="relative text-center text-[42px] font-bold tracking-[0.04em] font-isidora-sans">NUESTRAS BODAS</div>
      </div>

      {/* Bottom part */}
      <div className='pt-0 sm:pt-10 pb-10 bg-gainsboro'>
        <SlickSlider galleryData={galleryData}/>
      </div>
    </div>
  )
}

export default FifthPage