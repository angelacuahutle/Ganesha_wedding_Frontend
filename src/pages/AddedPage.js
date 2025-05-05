import React from 'react'

export default function AddedPage() {
  return (
    <div>
      <div
        className="w-[100%] h-[200px] mq600px:h-[200px] object-cover z-[-1] bg-gainsboro flex items-center justify-center"
      >
        <p className="m-0 text-center block leading-relaxed text-[42px] font-bold tracking-[0.04em] font-isidora-sans">PRENSA</p>
      </div>
    
      {/* Contenido centrado */}
      <div className='max-w-[1200px] mx-auto px-10 md:px-10 mq600px:px-6 sm:px-[15px] mt-10'>
        <div className="flex flex-col items-center">
          {/* Section one - Centered */}
          <div className="w-full flex flex-col items-center mb-16">
            <img
              className="w-[300px] sm:w-[280px] h-auto object-cover mb-6"
              alt="Condé Nast Traveler"
              src="/CondeLogo.png"
            />

            <div className="text-center tracking-[0.04em] font-medium lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-6">
              <p className="m-0 max-w-[450px] sm:max-w-[350px] mx-auto leading-relaxed">How We Pulled It Off: A Party-All-Night Destination Wedding in Mexico City</p>
            </div>
            
            <div className="text-center tracking-[0.04em] font-medium underline lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px]">
              <a style={{color: 'black'}} href='https://www.cntraveler.com/story/a-party-all-night-destination-wedding-in-mexico-city' target='_blank' className="m-0">LEE LA NOTA</a>
            </div>
          </div>

          {/* Section two - Centered */}
          <div className="w-full flex flex-col items-center mb-16">
            <img
              className="w-[400px] h-auto object-cover sm:w-[350px] mq350small:w-[300px] mb-6"
              alt="Frida Enamorada"
              src="/fridaLogo.png"
            />

            <div className="text-center tracking-[0.04em] font-medium lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-6">
              <p className="m-0 max-w-[350px] sm:max-w-[300px] mx-auto leading-relaxed">Los 25 mejores wedding planners en México en 2024</p>
            </div>
            
            <div className="text-center tracking-[0.04em] font-medium underline lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px]">
              <a style={{color: 'black'}} href='https://www.fridaenamorada.com/blog/los-25-mejores-wedding-planners-en-mexico-2025' target='_blank' className="m-0">LEE LA NOTA</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
