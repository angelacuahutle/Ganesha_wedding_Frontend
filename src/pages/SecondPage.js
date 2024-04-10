import React from 'react'

function SecondPage({}) {

  return (
    <div  data-scroll-to="secondpage" className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center text-8xl">
    <div className="flex-1 flex flex-row items-end justify-end mq600px:flex-col">
      <div className="flex flex-row items-end justify-end pt-[50px] px-0 pb-5 lg:pt-5 lg:pb-5 lg:box-border md:flex-col md:gap-[0px] md:items-end md:justify-center md:pt-0 md:pb-0 md:box-border mq600px:flex-row mq600px:gap-[0px] mq600px:pt-0 mq600px:box-border">

        <div className="flex flex-col items-start justify-end py-10 pr-5 pl-5 sm:pl-[10px] md:gap-[20px] md:pt-0 md:pr-5 md:pb-0 md:box-border sm:pr-[5px] sm:box-border mq600px:gap-[20px] mq600px:pr-2.5 mq600px:box-border  ">

          <div className="relative tracking-[0.04em] font-medium lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-10 md:pb-0 sm:leading-normal
          hidden">
            <p className="m-0">Los 25 mejores wedding </p>
            <p className="m-0">planners en México en 2024</p>
          </div>
          <div className="relative tracking-[0.04em] font-medium underline lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px] pb-32 md:pb-10
          hidden
          ">
            {/* <p className="m-0">LEE LA NOTA </p> */}
            <a style={{color: 'black'}} href='https://www.fridaenamorada.com/blog/los-25-mejores-wedding-planners-en-mexico-2024' target='_blank' className="m-0">LEE LA NOTA </a>
          </div>
          <div className="relative tracking-[0.04em] leading-[35px] font-medium lg:tracking-[0.04em] md:text-5xl md:leading-[40px] sm:text-base mq600px:text-xl mq600px:leading-[35px]">
            <p className="m-0">ORGANIZACIÓN Y</p>
            <p className="m-0">DISEÑO DE BODAS</p>
            <p className="m-0">PERSONALIZADO</p>
          </div>

        </div>
        <div className="flex flex-row items-center justify-end md:gap-[19.2px]">
          <img
            className="w-[450px] relative h-[600px] object-cover lg:w-[300px] lg:h-[500px] md:w-auto md:h-[450px] sm:w-[150px] sm:h-[350px] mq600px:w-[200px] mq600px:h-[400px] mr-[-30px] lg:mr-[-15px] md:mr-0"
            alt=""
            src="/secondUpdated.png"
          />
        </div>
      </div>
      <div className="self-stretch w-[500px] bg-gainsboro overflow-hidden shrink-0 flex flex-col items-end justify-end p-[50px] pb-[100px] box-border text-5xl lg:w-[400px] lg:pl-[25px] lg:pr-[25px] lg:box-border md:w-[300px] md:gap-[100px] md:pl-5 md:pr-5 md:box-border sm:py-2.5 sm:px-[15px] sm:box-border mq600px:self-stretch mq600px:w-auto mq600px:p-5 mq600px:box-border">
        <div className="self-stretch  relative leading-[35px] inline-block lg:text-3xl lg:leading-[35px] md:text-xl md:leading-[35px] sm:text-base mq600px:text-base mq600px:leading-[30px] pt-32  mq600px:pt-2 ">
        “Con 10 años de experiencia en 
        bodas nuestro principal 
        objetivo es crear ambientes 
        únicos y maravillosos que 
        reflejen la personalidad de 
        cada pareja, garantizando un 
        día inolvidable, a traves de 
        empatía y cercania con cada cliente.”
        </div>
      </div>
    </div>
  </div>
  )
}

export default SecondPage