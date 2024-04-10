import React from 'react'
import { useLocation } from 'react-router-dom';
import client from '../SanityClient'
import imageUrlBuilder from '@sanity/image-url'
const builder = imageUrlBuilder(client)

function GalleryOpenPage() {
    const location = useLocation();
    const data = location.state
    const { title, coverImg, _updatedAt, _createdAt, _rev, _type, _id, ...rest } = data;

    function urlFor(source) {
      return builder.image(source)
    }

  return (
    <div  className="self-stretch bg-white  overflow-hidden shrink-0 flex flex-col items-start justify-start py-10 px-[50px] box-border gap-[10px] text-left text-5xl text-black font-isidora-sans lg:pl-5 lg:pr-5 lg:box-border md:pt-[20px] md:pb-5 md:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border h-auto "

    >
      <div className="self-stretch flex flex-row items-center justify-between ">
        <div className="flex flex-row items-center justify-start gap-[40px] lg:gap-[40px]">
          <img
            className="w-[500px] relative h-[90px] object-cover md:w-[300px] md:h-auto sm:w-[250px]"
            alt=""
            src="/logo@2x.png"
          />
        </div>
      </div>

     {/* Below pics  */}

     <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start ">
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-[30px]  gap-[10px] sm:py-0 sm:px-5 ">
          {
          rest && 
            Object.keys(rest).map(key => {
              return <img
              key={key}
              className="w-[350px] h-[250px] overflow-hidden shrink-0 object-cover sm:w-[100%] sm:h-auto"
              alt=""
              src={urlFor(rest[key]).url()}
            />
            })
          }
            {/* {data.map((e)=>{
                return  <img
                className="w-[350px] h-[250px] overflow-hidden shrink-0 object-cover sm:w-[100%] sm:h-auto"
                alt=""
                src={e}
              />
            })} */}
 
        </div>
      </div>
     
    </div>
  )
}

export default GalleryOpenPage