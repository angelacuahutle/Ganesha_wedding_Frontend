import React from 'react'

function SecondPage({}) {
  return (
    <div data-scroll-to="secondpage" className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-0 px-0 text-13xl mb-0">
      <div className="w-full flex flex-row items-center justify-center">
        <div className="flex flex-row items-end justify-center max-w-[1200px] md:flex-col md:items-center">
          {/* Columna izquierda - Título y texto */}
          <div className="flex flex-col items-center justify-start">
            <div className="h-[200px] flex items-center justify-center md:h-auto md:py-8">
              <div className="relative tracking-[0.04em] leading-[45px] font-medium text-center lg:text-8xl lg:leading-[45px] md:text-6xl md:leading-[40px] sm:text-4xl sm:leading-[35px]">
                <p className="m-0">ORGANIZACIÓN Y</p>
                <p className="m-0">DISEÑO DE BODAS</p>
              </div>
            </div>
            
            <div className="h-[720px] flex items-end justify-end md:h-auto md:w-full md:flex md:items-center md:justify-center">
              <img
                className="w-[450px] h-[720px] object-cover lg:w-[350px] md:w-full md:max-w-[350px] md:h-auto md:max-h-[500px]"
                alt="Organización de bodas"
                src="/secondUpdated.png"
              />
            </div>
          </div>
          
          {/* Columna derecha - Texto testimonial - Alineado con la imagen total (título + imagen) */}
          <div className="w-[700px] bg-gainsboro overflow-hidden flex flex-col items-center justify-center p-[50px] box-border text-5xl lg:w-[600px] h-[920px] md:w-full md:max-w-[600px] md:h-auto md:py-12 md:px-8 sm:px-6">
            <div className="self-stretch relative leading-[35px] font-medium lg:text-3xl lg:leading-[35px] md:text-2xl md:leading-[30px] sm:text-xl sm:leading-[28px] text-center md:text-center">
              "Con 11 años de experiencia en 
              bodas nuestro principal 
              objetivo es crear ambientes 
              únicos y maravillosos que 
              reflejen la personalidad de 
              cada pareja, garantizando un 
              día inolvidable, a traves de 
              empatía y cercania con cada cliente."
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SecondPage