import React from 'react'

function ContactPage() { 
  return (
    <div className="self-stretch flex flex-col items-center justify-center text-5xl h-[100vh]">
    <div className="self-stretch bg-gainsboro overflow-hidden flex flex-col items-start justify-start p-[50px] gap-[50px] md:pl-5 md:pr-5 md:box-border sm:pl-[15px] sm:pr-[15px] sm:box-border lg:gap-5 md:p-5 h-[100vh]">
      <div className="self-stretch flex flex-row items-center justify-start  ">
      <img
            className="w-[500px] relative h-[90px] object-cover md:w-[300px] md:h-auto sm:w-[250px]"
            alt=""
            src="/logo@2x.png"
          />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start gap-[50px] md:flex-col ">
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px] md:gap-5 md:flex-[unset] md:self-stretch">
          <div className="relative tracking-[0.04em] md:text-xl">
            AGENDA UNA CITA
          </div>
          <div className="self-stretch relative  h-[500px] overflow-hidden shrink-0 text-white font-open-sans">
            {/* original : src="https://calendar.google.com/calendar/embed?src=programmer.yearsh%40gmail.com&ctz=UTC" */}
          {/* <iframe src="https://calendar.google.com/calendar/embed?src=programmer.yearsh%40gmail.com&ctz=UTC" style={{border: "0", width: "100%", height: "100%" ,frameborder: "0" , scrolling: "no"}}></iframe> */}
          <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&bgcolor=%23e2dee1&showTabs=0&showPrint=0&title=Lunes%20a%20Jueves&src=cHJvZ3JhbW1lci55ZWFyc2hAZ21haWwuY29t&src=N2MwYmM2MWVkMTJhYTIyNTYwNDAxY2MxZTQ2NzFlOGQzMzllMGIyYmJmODgwYWQwM2NhZDQwOGM1YjViZmFhMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uaW5kaWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%233F51B5&color=%2333B679&color=%230B8043" style={{border: "0", width: "100%", height: "100%" ,frameborder: "0" , scrolling: "no"}}></iframe>

          


    


            {/* <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_100.5px)] tracking-[0.04em]">
              Google Calender
            </div> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[50px] text-8xl md:gap-5 md:flex-[unset] md:self-stretch">
          <div className="flex flex-row items-start justify-start gap-[10px]">
            <img
              className="w-[30px] relative h-[30px] object-cover"
              alt=""
              src="/whatsapp@2x.png"
            />
            <b className="relative tracking-[0.04em] md:text-3xl">
              WhatsApp +52 #### ####
            </b>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
            <input
              className="[outline:none] font-isidora-sans text-5xl bg-[transparent] self-stretch overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 text-black border-[1px] border-solid border-black  sm:text-lg"
              placeholder="Tu nombre"
              type="text"
            />
            <input
              className="[outline:none] font-isidora-sans text-5xl bg-[transparent] self-stretch overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 text-black border-[1px] border-solid border-black  sm:text-lg"
              placeholder="Email"
              type="text"
            />
            <input
              className="[outline:none] font-isidora-sans text-5xl bg-[transparent] self-stretch overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 text-black border-[1px] border-solid border-black sm:text-lg"
              placeholder="Teléfono Contacto"
              type="text"
            />
            <input
              className="[outline:none] font-isidora-sans text-5xl bg-[transparent] self-stretch overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 text-black border-[1px] border-solid border-black  sm:text-lg"
              placeholder="Servicio"
              type="text"
            />
            <input
              className="[outline:none] font-isidora-sans text-5xl bg-[transparent] self-stretch overflow-hidden flex flex-row items-start justify-start py-[15px] px-5 text-black border-[1px] border-solid border-black  sm:text-lg"
              placeholder="¡Cuéntanos!"
              type="text"
            />
            <button className="cursor-pointer py-[15px] px-5 bg-[transparent] overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-black">
              <div className="relative text-5xl tracking-[0.04em] font-isidora-sans text-black text-left md:text-xl  sm:text-lg">
                ENVIAR
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactPage