import React from 'react'

function MenuPage({showMenu, onMenuBtnClick}) {

  return (
    <div  className="self-stretch    shrink-0 flex flex-col items-start justify-start 
    box-border gap-[10px] text-left text-5xl text-black font-isidora-sans  lg:box-border  md:box-border  sm:box-border   bg-black h-[100vh] "
    
   //  py-10 px-[50px] lg:pl-5 lg:pr-5 md:pt-[20px] md:pb-5  sm:pl-2.5 sm:pr-2.5
   // style={{ backgroundImage: 'url("IMG_0446.jpg")', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}
   >

     {/* menu bar */}

     <div className="self-stretch flex flex-row items-center justify-between absolute w-[95vw] pl-5 pt-[20px] sm:pl-2 sm:pt-2   ">
       <div className="flex flex-row items-center justify-start gap-[40px] lg:gap-[40px]">
         <img
           className="w-[500px] relative h-[90px] object-cover md:w-[300px] md:h-auto sm:w-[250px] invisible lg:w-[250px]"
           alt=""
           src="/logo@2x.png"
         />
         
         {/* menu btn */}
         <div>
         <div 
         onClick={showMenu}
         className="rounded-981xl bg-black overflow-hidden flex flex-col items-center justify-center  pb-1 pt-[2px] px-[20px] border-[1px] border-solid border-black md:hidden hover:bg-white cursor-pointer hover:text-black text-white ">
           <div className="relative tracking-[0.04em] font-medium lg:text-xl hover:text-black ">
           Menú
           </div>
         </div>
         <div className='absolute justify-center items-center text-center ml-[-50px]'>
            <p  onClick={() => { onMenuBtnClick('secondpage'); showMenu() }} className='cursor-pointer'>¿QUIÉNES SOMOS?</p>

            <p onClick={() => { onMenuBtnClick('fourthpage'); showMenu() }} className='cursor-pointer'>SERVICIOS</p>

            <p onClick={() => { onMenuBtnClick('fifthPage'); showMenu() }} className='cursor-pointer'>PORTAFOLIO</p>

            <p onClick={() => { onMenuBtnClick('lastpage'); showMenu() }} className='cursor-pointer'>CONTACTO</p>
         </div>
         </div>
      

       </div>


       <div className="flex flex-col items-center justify-start gap-[20px] md:hidden invisible">

       </div>
     
     </div>
         {/* Side image */}
         <img
           className="w-[400px] h-[100vh] object-cover absolute right-0 top-0 "
           alt=""
           src="/SecondaryImage.png"
         />
   </div>
  )
}

export default MenuPage