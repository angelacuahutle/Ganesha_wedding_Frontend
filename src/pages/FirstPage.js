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
    
    <div className="self-stretch overflow-hidden shrink-0 flex flex-col items-start justify-start 
     box-border gap-[10px] text-left text-5xl text-black font-isidora-sans lg:box-border md:box-border sm:box-border">
       <img
            className="w-[100%] h-auto object-cover z-[-1]"
            alt=""
            src="/foto_principal.png"/>

      {/* Navigation structure */}
      <div className="self-stretch flex flex-row items-start justify-between absolute w-[95vw] pl-5 pr-5 pt-[20px] sm:pl-2 sm:pr-2 sm:pt-2">
        {/* Left side - Menu button and Logo */}
        <div className="flex flex-col items-start">
          {/* Menu button */}
          <div
            onClick={showMenu}
            className="rounded-981xl overflow-hidden flex flex-col items-center justify-center px-[20px] border-[1px] border-solid border-white md:hidden bg-transparent cursor-pointer pb-1 pt-[2px] mb-16">
            <div className="relative tracking-[0.04em] font-medium lg:text-xl text-white leading-tight">
              Menú
            </div>
          </div>
          
          {/* Logo - much larger and lower */}
          <img
            className="w-[600px] h-[350px] object-contain brightness-0 invert md:w-[400px] md:h-[230px] sm:w-[280px] sm:h-[180px]"
            alt=""
            src="/logo@2x.png"
          />
        </div>

        {/* Right side - Reservation button and Social icons */}
        <div className="flex flex-col items-end md:hidden">
          {/* Reservation button */}
          <div 
            onClick={()=>{ onMenuBtnClick('lastpage')}}
            className="rounded-981xl overflow-hidden flex flex-col items-center justify-center py-1 px-[20px] border-[1px] border-solid border-white bg-transparent cursor-pointer text-white mb-6">
            <div className="relative tracking-[0.04em] font-medium lg:text-xl leading-tight">
              RESERVA TU CITA
            </div>
          </div>
          
          {/* Social icons below reservation button */}
          <div className="flex flex-row items-center gap-[20px]">
            <a href="https://www.tiktok.com/@ganesha.wedding" target="_blank">
              <img
                className="w-[30px] h-[30px] object-cover brightness-0 invert"
                alt=""
                src="/tiktok@2x.png"
              />
            </a>
            <a href="https://www.instagram.com/ganesha_wedding/" target="_blank">
              <img
                className="w-[30px] h-[30px] object-cover brightness-0 invert"
                alt=""
                src="/instagram@2x.png"
              />
            </a>
            <a href="https://www.pinterest.com.mx/GWbodas/" target="_blank">
              <img
                className="w-[30px] h-[30px] object-cover brightness-0 invert"
                alt=""
                src="/pinterest-p@2x.png"
              />
            </a>
            <a href="https://www.youtube.com/@GaneshaWedding" target="_blank">
              <img
                className="w-[30px] h-[30px] object-cover brightness-0 invert"
                alt=""
                src="/youtube@2x.png"
              />
            </a>
          </div>
        </div>

        {/* Mobile menu icon */}
        <img
          onClick={showNav}
          className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden lg:hidden md:flex sm:w-[25px] sm:h-5 brightness-0 invert"
          alt=""
          src="/teenyiconsmenusolid.svg"
        />
      </div>

      {/* side social media for tab */}
      <div className="rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl bg-gainsboro flex-col items-start justify-end py-[15px] pr-[5px] pl-[15px] gap-[25px] fixed right-0 top-64 z-10 hidden md:flex">
        <a href="https://www.tiktok.com/@ganesha.wedding" target="_blank">
          <img
            className="w-[20px] relative h-[20px] object-cover brightness-0 invert"
            alt=""
            src="/tiktok@2x.png"
          />
        </a>
        <a href="https://www.instagram.com/ganesha_wedding/" target="_blank">
          <img
            className="w-[20px] relative h-[20px] object-cover brightness-0 invert"
            alt=""
            src="/instagram@2x.png"
          />
        </a>
        <a href="https://www.pinterest.com.mx/GWbodas/" target="_blank">
          <img
            className="w-[20px] relative h-[20px] object-cover brightness-0 invert"
            alt=""
            src="/pinterest-p@2x.png"
          />
        </a>
        <a href="https://www.youtube.com/channel/UCSyReD40FQy3Ugd33mHQjFg" target="_blank">
          <img
            className="w-[20px] relative h-[20px] object-cover brightness-0 invert"
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