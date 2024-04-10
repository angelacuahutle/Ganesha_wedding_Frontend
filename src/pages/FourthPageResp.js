import React from 'react'

function FourthPageResp() {
  return (
    <div  data-scroll-to="fourthpageres"  className='hidden md:block w-[100%]'>
            <div className="self-stretch bg-white   overflow-hidden flex flex-row items-center justify-end ">
        
        {/* Primary Content */}
        <div className="flex flex-row items-start justify-center gap-[10px] mq350small:gap-[10px]">
          <div className="flex flex-col items-end justify-start pt-5 px-0 pb-0 lg:pt-[50px] lg:box-border mq600px:pt-2.5 mq600px:box-border">
            <img
              className="w-[250px] h-[425px] relative object-cover mq600px:w-[150px] mq600px:h-[325px]"
              alt=""
              src="/cordinationImg.jpg"
            />
          </div>


          <div className="self-stretch w-[300px] bg-gainsboro overflow-hidden shrink-0 flex flex-col items-end justify-start pt-5 px-2.5 pb-0 box-border mq350small:w-[170px] mq600px:w-[200px] ">
            <div className="self-stretch flex flex-row items-center justify-end ">
              <div className="h-[70px] flex-1 relative tracking-[0.04em] leading-[35px] font-semibold inline-block mq350small:text-lg">
                PLANEACIÓN COORDINACIÓN
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start text-sm lg:gap-[60px] ">
              <div className="self-stretch relative leading-[25px] inline-block mq350small:text-sm">
                Para nosotros cada boda es una historia única, planeamos y te
                brindamos asesoría personalizada en cada detalle. Te ayudamos
                con la selección, coordinación y supervisión de todos tus
                proveedores. Estamos junto a ti desde el primer momento hasta
                que tu boda termina.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start py-5 px-0   lg:box-border hidden">
            <img
              className="w-auto  h-[700px] relative object-cover mq600px:w-auto mq600px:h-[500px]"
              alt=""
              src="/mobileFouthPage.png"
            />
          </div>
      
      <div className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-start">
        <div className="flex flex-row items-start justify-center gap-[10px] mq350small:gap-[10px]">
          <div className="self-stretch w-[300px] bg-gainsboro overflow-hidden shrink-0 flex flex-col items-end justify-start pt-5 px-2.5 pb-0 box-border mq350small:w-[170px] mq600px:w-[200px]">
            <div className="self-stretch flex flex-row items-center justify-end">
              <div className=" flex-1 relative tracking-[0.04em] leading-[35px] font-semibold inline-block mq350small:text-lg">
                DISEÑO Y DECORACIÓN
              </div>
            </div>
            <div className="self-stretch flex flex-col items-end justify-start text-sm lg:gap-[60px] ">
              <div className="self-stretch relative leading-[25px] inline-block mq350small:text-sm">
                Para nosotros cada boda es una historia única, planeamos y te
                brindamos asesoría personalizada en cada detalle. Te ayudamos
                con la selección, coordinación y supervisión de todos tus
                proveedores. Estamos junto a ti desde el primer momento hasta
                que tu boda termina.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end justify-start px-0 pb-0  lg:box-border  mq600px:box-border">
            <img
              className="w-[250px] h-[425px] relative object-cover mq600px:w-[150px] mq600px:h-[325px]"
              alt=""
              src="/decorationImg.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthPageResp