import React from 'react'

function FourthPage() {
  return (
    <div data-scroll-to="fourthpage" className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center py-0 px-0 text-13xl mb-0">
    
      {/* Vista desktop - Oculta en móvil */}
      <div className="flex-1 flex flex-row items-stretch justify-center w-full md:hidden">
        {/* Primera sección - Planeación y Coordinación */}
        <div className="flex flex-col items-center justify-start">
          <div className="h-[120px] flex flex-row items-center justify-center py-0 pr-[50px] pl-0">
            <div className="relative tracking-[0.04em] leading-[55px] inline-block lg:text-8xl lg:leading-[45px]">
              <p className="m-0">{`PLANEACIÓN Y `}</p>
              <p className="m-0">COORDINACIÓN</p>
            </div>
          </div>
          <div className="h-[720px] flex items-center justify-center">
            <img
              className="w-[350px] h-[720px] object-cover lg:w-[300px]"
              alt="Planeación y coordinación"
              src="/new_images/A_new.jpg"
            />
          </div>
        </div>
        
        {/* Sección central de texto - Reorganizado para mostrar el logo */}
        <div className="w-[500px] bg-gainsboro overflow-hidden shrink-0 flex flex-col items-center justify-between p-[50px] box-border text-xl lg:w-[400px] lg:py-10 lg:px-5 lg:box-border h-[840px]">
          <div className="self-stretch flex flex-col items-center justify-start mt-[120px]">
            <div className="self-stretch relative leading-[35px] font-medium inline-block mb-8">
              Para nosotros cada boda es una historia única, planeamos y te
              brindamos asesoría personalizada en cada detalle. Te ayudamos
              con la selección, coordinación y supervisión de todos tus
              proveedores. Estamos junto a ti desde el primer momento hasta
              que tu boda termina.
            </div>
          </div>
          
          {/* Logo en el centro */}
          <div className="w-full flex justify-center my-4">
            <div className="bg-gainsboro p-4 rounded-lg">
              <img
                className="w-[280px] h-auto object-contain mix-blend-screen"
                alt="The Flower Project"
                src="/LOGO-EDITABLE.png"
              />
            </div>
          </div>
          
          <div className="self-stretch flex flex-col items-center justify-start">
            <div className="self-stretch relative leading-[35px] font-medium inline-block mt-8">
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
        
        {/* Segunda sección - Diseño y Decoración - Con título arriba */}
        <div className="flex flex-col items-center justify-start">
          <div className="h-[120px] flex flex-row items-center justify-center py-0 pl-[50px] pr-0">
            <div className="relative tracking-[0.04em] leading-[55px] inline-block lg:text-8xl lg:leading-[45px]">
              <p className="m-0">DISEÑO Y</p>
              <p className="m-0">DECORACIÓN</p>
            </div>
          </div>
          <div className="h-[720px] flex items-center justify-center">
            <img
              className="w-[350px] h-[720px] object-cover lg:w-[300px]"
              alt="Diseño y decoración"
              src="/new_images/B_new.jpg"
            />
          </div>
        </div>
      </div>
      
      {/* Vista móvil - Visible solo en móvil */}
      <div className="hidden md:block w-full">
        {/* Primera sección: Planeación y Coordinación */}
        <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Texto */}
            <div className="w-full max-w-[300px] bg-gainsboro overflow-hidden flex flex-col items-center justify-start p-5 box-border">
              <div className="self-stretch mb-4 text-center">
                <div className="relative tracking-[0.04em] leading-[35px] font-medium">
                  <p className="m-0">PLANEACIÓN Y</p>
                  <p className="m-0">COORDINACIÓN</p>
                </div>
              </div>
              <div className="self-stretch">
                <div className="self-stretch relative leading-[25px] text-sm text-center">
                  Para nosotros cada boda es una historia única, planeamos y te
                  brindamos asesoría personalizada en cada detalle. Te ayudamos
                  con la selección, coordinación y supervisión de todos tus
                  proveedores. Estamos junto a ti desde el primer momento hasta
                  que tu boda termina.
                </div>
                {/* Imagen */}
                <div className="flex flex-col items-center justify-start mt-4">
                  <img
                    className="w-full max-w-[250px] h-auto max-h-[425px] relative object-cover"
                    alt="Planeación y coordinación"
                    src="/new_images/A_new.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contenedor central con logo dentro del área gris */}
        <div className="w-full flex justify-center my-4">
          <div className="w-full max-w-[300px] bg-gainsboro p-5 flex flex-col items-center justify-center">
            <img
              className="w-full max-w-[200px] h-auto object-contain mix-blend-screen"
              alt="The Flower Project"
              src="/LOGO-EDITABLE.png"
            />
          </div>
        </div>
        
        {/* Segunda sección: Diseño y Decoración */}
        <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-center mt-4">
          <div className="flex flex-col items-center justify-center w-full">
            {/* Texto */}
            <div className="w-full max-w-[300px] bg-gainsboro overflow-hidden flex flex-col items-center justify-start p-5 box-border">
              <div className="self-stretch mb-4 text-center">
                <div className="relative tracking-[0.04em] leading-[35px] font-medium">
                  <p className="m-0">DISEÑO Y</p>
                  <p className="m-0">DECORACIÓN</p>
                </div>
              </div>
              <div className="self-stretch">
                <div className="self-stretch relative leading-[25px] text-sm text-center">
                  The Flower Project nace a partir del deseo de desarrollar tus
                  ideas tal como las soñaste y que estas reflejen lo que son como
                  pareja. Siendo parte del equipo in-house estamos en constante
                  comunicación para conocerlos a fondo, trabajando directamente
                  con el equipo de planeación nos encargamos de crear un concepto
                  creativo cuidando de cada detalle y hacer del ambiente algo
                  inolvidable.
                </div>
                {/* Imagen */}
                <div className="flex flex-col items-center justify-start mt-4">
                  <img
                    className="w-full max-w-[250px] h-auto max-h-[425px] relative object-cover"
                    alt="Diseño y decoración"
                    src="/new_images/B_new.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FourthPage