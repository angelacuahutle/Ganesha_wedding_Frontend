import React from 'react'

function FourthPage() {
  return (
    <div data-scroll-to="fourthpage" className="self-stretch bg-white overflow-hidden flex flex-row items-center justify-center py-0 px-[15px] text-13xl md:hidden">
        <div className="flex-1 flex flex-row items-start justify-center">
          <div className="flex flex-col items-end justify-start pt-[50px] px-0 pb-0 gap-[20px] lg:pt-[50px] lg:box-border mr-[-25px] lg:mr-[-10px]">
            <div className="flex flex-row items-center justify-end py-0 pr-[50px] pl-0 ">
              <div className="h-[110px] relative tracking-[0.04em] leading-[55px] inline-block lg:text-8xl lg:leading-[45px]">
                <p className="m-0">{`PLANEACIÓN Y `}</p>
                <p className="m-0">COORDINACIÓN</p>
              </div>
            </div>
            <img
              className="w-[350px] relative h-[525px] object-cover lg:w-[300px] lg:h-[475px]"
              alt=""
              src="/cordinationImg.jpg"
            />
          </div>
          <div className="w-[500px] bg-gainsboro overflow-hidden shrink-0 flex flex-col items-end justify-start p-[50px] box-border text-xl lg:w-[400px] lg:gap-[0px] lg:py-10 lg:px-5 lg:box-border">

            <div className="self-stretch flex flex-col items-end justify-start gap-[60px] lg:gap-[60px]">
              <div className="self-stretch relative leading-[35px] font-medium inline-block pr-28">
                Para nosotros cada boda es una historia única, planeamos y te
                brindamos asesoría personalizada en cada detalle. Te ayudamos
                con la selección, coordinación y supervisión de todos tus
                proveedores. Estamos junto a ti desde el primer momento hasta
                que tu boda termina.
              </div>
              <div className="self-stretch relative leading-[35px] font-medium inline-block pl-28">
                The Flower Project nace a partir del deseo de desarrollar tus
                ideas tal como las soñaste y que estas reflejen lo que son como
                pareja. Siendo parte del equipo in-house estamos en constante
                comunicación para conocerlos a fondo, trabajando directamente
                con el equipo de planeación nos encargamos de crear un concepto
                creativo cuidando de cada detalle y hacer del ambiente algo
                inolvidable.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-center justify-end pt-0 px-0 pb-[30px] ml-[-25px] lg:ml-[-10px]">
            <div className="self-stretch flex flex-col items-end justify-start gap-[28.21px]">
              <img
                className="w-[350px] relative h-[525px] object-cover lg:w-[300px] lg:h-[475px]"
                alt=""
                src="/decorationImg.jpg"
              />
              <div className="self-stretch flex flex-row items-center justify-center lg:gap-[14.1px]">
                <div className="h-[110px] relative tracking-[0.04em] leading-[55px] inline-block lg:text-8xl lg:leading-[45px]">
                  <p className="m-0">DISEÑO Y</p>
                  <p className="m-0">DECORACIÓN</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default FourthPage
