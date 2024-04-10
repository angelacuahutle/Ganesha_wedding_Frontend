import { useState } from "react";
import MenuPage from "./MenuPage";
import SideMenu from "../components/SideMenu";
import { useNavigate } from 'react-router-dom';

const FirstPage = ({showMenu, menuDisplayStatus, onMenuBtnClick}) => {
  const navigate = useNavigate();

  // Side bar functions 
  const [sideBarDisplay, setSideBarDisplay]=useState('translate-x-full'); 
  
  const redirectProduct =(e)=>{
    navigate(e);
  }

  const showNav=()=>{
    sideBarDisplay==='translate-x-full'? setSideBarDisplay('translate-x-0') : setSideBarDisplay('translate-x-full')
  }

  

  return (
    <>
    <SideMenu
    sideBarDisplay={sideBarDisplay}
    onMenuBtnClick={onMenuBtnClick}
    showNav={showNav}
    className="flex flex-col gap-2 h-[74px] md:h-auto items-center justify-between px-20 md:px-5 py-[22px] w-full" />
    
    <div  className="self-stretch   overflow-hidden shrink-0 flex flex-col items-start justify-start 
     box-border gap-[10px] text-left text-5xl text-black font-isidora-sans  lg:box-border  md:box-border  sm:box-border   "
    //  py-10 px-[50px] lg:pl-5 lg:pr-5 md:pt-[20px] md:pb-5  sm:pl-2.5 sm:pr-2.5
    // style={{ backgroundImage: 'url("IMG_0446.jpg")', backgroundSize: 'contain', backgroundPosition: 'top', backgroundRepeat: 'no-repeat' }}
    >
       <img
            className="w-[100%] h-auto object-cover z-[-1] "
            alt=""
            src="/frontpageimg.jpg"/>

      {/* menu bar */}

      <div className="self-stretch flex flex-row items-center justify-between absolute w-[95vw] pl-5 pt-[35px] sm:pl-2 sm:pt-2  ">
        <div className="flex flex-row items-center justify-start gap-[40px] lg:gap-[40px]">
          <img
            className="w-[500px] relative h-[90px] object-cover md:w-[300px] md:h-auto sm:w-[250px]"
            alt=""
            src="/logo@2x.png"
          />
          {/* menu btn */}
          <div
          onClick={showMenu}
          className="rounded-981xl overflow-hidden flex flex-col items-center justify-center  px-[20px] border-[1px] border-solid border-black md:hidden hover:bg-black cursor-pointer hover:text-white pb-1 pt-[2px]">
            <div  className="relative tracking-[0.04em] font-medium lg:text-xl hover:text-white  leading-tight">
            Menú
            </div>
          </div>

        </div>

        {/* Socail media share  */}
        <div className="flex flex-col items-center justify-start gap-[20px] md:hidden">
          <div className="flex flex-row items-end justify-start gap-[20px] fixed z-10 top-2">

            <a href="https://www.tiktok.com/@ganesha.wedding" target="_blank">
            <img
              className="w-[30px] relative h-[30px] object-cover"
              alt=""
              src="/tiktok@2x.png"
            /></a>

            <a href="https://www.instagram.com/ganesha_wedding/" target="_blank">
            <img
              className="w-[30px] relative h-[30px] object-cover"
              alt=""
              src="/instagram@2x.png"
            />
            </a>

            <a href="https://www.pinterest.com.mx/GWbodas/" target="_blank">
            <img
              className="w-[30px] relative h-[30px] object-cover"
              alt=""
              src="/pinterest-p@2x.png"
            />
            </a>

            <a href="https://www.youtube.com/channel/UCSyReD40FQy3Ugd33mHQjFg" target="_blank">
            <img
              className="w-[30px] relative h-[30px] object-cover"
              alt=""
              src="/youtube@2x.png"
            />
            </a>
          </div>
          <div 
          onClick={()=>{ onMenuBtnClick('lastpage')}}
          // onClick={()=>{navigate('/contact')}}
          className="rounded-981xl overflow-hidden flex flex-col items-center justify-center py-1 px-[20px] border-[1px] border-solid border-black md:hidden hover:bg-black cursor-pointer hover:text-white ">
            <div className="relative tracking-[0.04em] font-medium lg:text-xl leading-tight ">
            RESERVA TU CITA
            </div>
          </div>
        </div>

        <img
        onClick={showNav}
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden lg:hidden md:flex sm:w-[25px] sm:h-5"
          alt=""
          src="/teenyiconsmenusolid.svg"
        />
      </div>

      {/* side social media for tab */}
      <div className="rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-gainsboro  flex-col items-start justify-end py-[15px] pr-[5px] pl-[15px] gap-[25px] fixed right-0 top-64 z-10 hidden md:flex">
        
        
      <a href="https://www.tiktok.com/@ganesha.wedding" target="_blank">
        <img
          className="w-[20px] relative h-[20px] object-cover"
          alt=""
          src="/tiktok@2x.png"
        />
        </a>

        <a href="https://www.instagram.com/ganesha_wedding/" target="_blank">
        <img
          className="w-[20px] relative h-[20px] object-cover"
          alt=""
          src="/instagram@2x.png"
        />
        </a>

        <a href="https://www.pinterest.com.mx/GWbodas/" target="_blank">
        <img
          className="w-[20px] relative h-[20px] object-cover"
          alt=""
          src="/pinterest-p@2x.png"
        />
        </a>

        
        <a href="https://www.youtube.com/channel/UCSyReD40FQy3Ugd33mHQjFg" target="_blank">
        <img
          className="w-[20px] relative h-[20px] object-cover"
          alt=""
          src="/youtube@2x.png"
        />
        </a>
      </div>

    </div>
    
    </>
  );
};

export default FirstPage;
