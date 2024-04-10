import React from 'react'

export default function AddedPage() {
  return (
    <div>
             <div
            className="w-[100%] h-[200px] mq600px:h-[200px] object-cover z-[-1] bg-gainsboro "
            // alt=""
            // src="/FooterImg.jpg"
            >
              <p className="m-0 text-center  block leading-relaxed pt-10 text-[42px]  font-medium">PRENSA</p>
            </div>
    
    {/* Secondary page */}

    {/* section one */}
    <div className='px-52 md:px-20 mq600px:px-6 sm:px-[15px] mt-10 '>
    <img
    className="w-[300px] sm:w-[280px]  h-auto object-cover  "
    alt=""
    src="/CondeLogo.png"/>

    <div className="relative tracking-[0.04em] font-medium lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-10 md:pb-0 sm:leading-normal">
    <p className="m-0 w-[450px] sm:w-[350px]   leading-relaxed">How We Pulled It Off: A Party-All-Night Destination Wedding in Mexico City </p>
    {/* <p className="m-0">planners en México en 2024</p> */}
    </div>
    <div className="relative tracking-[0.04em] font-medium underline lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-24 md:pb-14">
    <a style={{color: 'black'}} href='https://www.cntraveler.com/story/a-party-all-night-destination-wedding-in-mexico-city' target='_blank' className="m-0">LEE LA NOTA </a>
    </div>

    {/* section TWO */}
    <img
    className="w-[400px] h-auto object-cover sm:w-[350px] mq350small:w-[300px] "
    alt=""
    src="/fridaLogo.png"/>

    <div className="relative tracking-[0.04em] font-medium lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-10 md:pb-0 sm:leading-normal">
    <p className="m-0 w-[350px] sm:w-[300px]  leading-relaxed ">Los 25 mejores wedding planners en México en 2024 </p>
    {/* <p className="m-0">planners en México en 2024</p> */}
    </div>
    <div className="relative tracking-[0.04em] font-medium underline lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-32 md:pb-10">
    <a style={{color: 'black'}} href='https://www.fridaenamorada.com/blog/los-25-mejores-wedding-planners-en-mexico-2024' target='_blank' className="m-0">LEE LA NOTA </a>
    </div>
    </div>
    </div>
  )
}
