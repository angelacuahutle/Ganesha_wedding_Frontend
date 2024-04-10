import React from 'react'
import {  Link } from 'react-router-dom';
import client from '../SanityClient'
import imageUrlBuilder from '@sanity/image-url'
import SlickSlider from '../components/Slick';
const builder = imageUrlBuilder(client)

function FifthPage({galleryCover, galleryData}) {
  
  function urlFor(source) {
    return builder.image(source)
  }
  

  // console.log(galleryCover[0].coverImg)
  ;
  // const val ='img1'
  // console.log(galleryData[2][val])
  return (
    <div data-scroll-to="fifthPage" >
             <div className="self-stretch  flex flex-col items-center justify-center text-[60px] text-white  w-[100vw]  ">
        {/* <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start">
          <div className="self-stretch bg-gainsboro overflow-hidden" />
        </div> */}

        {/* first image and heading */}
        {/* <div className="  flex flex-col items-center justify-center  px-0  w-[100vw] ">
        <Link to={{pathname: '/gallery'}} state={galleryCover[0]} >
        <img
            className="w-[100%] h-auto overflow-hidden shrink-0 object-cover "
            alt=""
            src={ galleryCover[0] && galleryCover[0].coverImg && urlFor(galleryCover[0].coverImg).url()}
          /></Link>
          <div className="relative bottom-[200px] tracking-[0.04em] font-semibold md:text-[42px] md:bottom-[120px] sm:bottom-[80px] sm:text-[27px] ">{`Daniela & Carlos`}</div>
        </div> */}
        <video className="  flex flex-col items-center justify-center  px-0  w-[100vw] " controls>
        <source src="your-video-file.mp4" type="video/mp4" />
        </video>

      </div>

      {/* Bottom part */}
        <div className='pt-32 sm:pt-10 pb-10 bg-gainsboro'>
        <SlickSlider galleryData={galleryData}/>
        </div>
      {/* <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start ">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[30px] px-5 gap-[10px] sm:py-0 sm:px-5 flex-1 ">
          Small pitchures
          {
            galleryData && galleryData.map((e, index)=>{
            return      <Link key={index} to={{pathname: '/gallery' }} state={e}>
              <img
              className="w-[350px] h-[250px] overflow-hidden shrink-0 object-cover sm:w-[100%] sm:h-auto"
              alt=""
              src={urlFor(e.coverImg).url()}
            /></Link>
            })
          }

        </div>
      </div> */}

    </div>
  )
}

export default FifthPage