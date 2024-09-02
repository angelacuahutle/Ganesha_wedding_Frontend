import React from 'react'

function LastPage() { 
  return (
    <div data-scroll-to="lastpage" className="self-stretch flex flex-col items-center justify-center text-5xl">
      <div className="self-stretch bg-gainsboro overflow-hidden flex flex-col items-start justify-start p-[50px] gap-[50px] md:pl-5 md:pr-5 md:box-border sm:pl-[15px] sm:pr-[15px] sm:box-border lg:gap-5 md:p-5">
        <div className="self-stretch flex flex-row items-center justify-start">
          <img
            className="w-[500px] relative h-[90px] object-cover md:w-[300px] md:h-auto sm:w-[250px]"
            alt=""
            src="/logo@2x.png"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[50px] md:flex-col">
          <div className="flex-1 flex flex-col items-start justify-start gap-[50px] md:gap-5 md:flex-[unset] md:self-stretch">
            <div className="relative tracking-[0.04em] md:text-xl">
              CONTACTO
            </div>
            <div className="self-stretch relative mt-5 h-[300px] overflow-hidden shrink-0 text-white font-open-sans">
              <div className="flex flex-col items-start justify-start gap-[20px]">
              <button
                  className="cursor-pointer py-[15px] px-5 bg-transparent text-black rounded-full overflow-hidden flex flex-row items-center justify-start border-[1px] border-solid border-black hover:bg-black hover:text-white transition-colors"
                  onClick={() => window.open('https://wa.me/525549465394', '_blank')}
                >
                  <img
                    className="w-[30px] h-[30px] mr-2 opacity-50 hover:opacity-100 transition-opacity"
                    alt="WhatsApp"
                    src="/whatsapp@2x.png"
                  />
                  <div className="relative text-5xl tracking-[0.04em] font-isidora-sans text-left md:text-xl sm:text-lg">
                    Contactar por WhatsApp
                  </div>
                </button>
                <button
                  className="cursor-pointer py-[15px] px-5 bg-transparent text-black rounded-full overflow-hidden flex flex-row items-center justify-center border-[1px] border-solid border-black hover:bg-black hover:text-white transition-colors"
                  onClick={() => window.location.href = 'mailto:helloganeshawedding@gmail.com'}
                >
                  <div className="relative text-5xl tracking-[0.04em] font-isidora-sans text-left md:text-xl sm:text-lg">
                    Enviar Email
                  </div>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default LastPage
