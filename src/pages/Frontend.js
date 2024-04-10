import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import FourthPageResp from "./FourthPageResp";
import LastPage from "./LastPage";
import GalleryOpenPage from "./GalleryOpenPage";
import MenuPage from "./MenuPage";
import { useCallback, useRef, useState } from "react";
import AddedPage from "./AddedPage";

const Frontend = ({galleryData , employeeData , galleryCover}) => {

  const [menuDisplayStatus , setMenuDisplayStatus]=useState('none')
  const [homeScreenStatus , setHomeScreenStatus]=useState('')

  const showMenu = () =>{
    if (menuDisplayStatus == 'none') {
      setMenuDisplayStatus('flex')
      setHomeScreenStatus('none')
    }
    else {
      setMenuDisplayStatus('none')
      setHomeScreenStatus('')
    }

  }

  const onMenuBtnClick = (pageName) => {
    const anchor = document.querySelector(`[data-scroll-to=${pageName}]`);
    console.log(anchor)
    if (anchor) {
      anchor.scrollIntoView({ block: "start" });
    }

  };

  return (
    <div className="w-full relative flex flex-col items-center justify-start text-left text-xl text-black font-isidora-sans">

    <div style={{display: `${menuDisplayStatus}`}} className={` self-stretch  bg-gainsboro `}>
    <MenuPage onMenuBtnClick={onMenuBtnClick} showMenu={showMenu}/></div>

    <div className=" overflow-hidden self-stretch">

    <FirstPage onMenuBtnClick={onMenuBtnClick} showMenu={showMenu} menuDisplayStatus={menuDisplayStatus} />

    <SecondPage  /> {/*  ¿QUIÉNES SOMOS?*/}

    <ThirdPage employeeData={employeeData}/>

    <FourthPage />  {/* SERVICIOS*/}

    <FourthPageResp/>

    <FifthPage galleryCover={galleryCover} galleryData={galleryData}/>  {/* PORTAFOLIO*/}

    <AddedPage/> 

    <LastPage /> {/* CONTACTO*/}

    </div>
    </div>
  );
};

export default Frontend;
