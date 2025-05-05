import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import ThirdPage from "./ThirdPage";
import FourthPage from "./FourthPage";
import FifthPage from "./FifthPage";
import LastPage from "./LastPage";
import GalleryOpenPage from "./GalleryOpenPage";
import MenuPage from "./MenuPage";
import { useCallback, useRef, useState } from "react";
import AddedPage from "./AddedPage";

const Frontend = ({galleryData, employeeData, galleryCover}) => {
  // Manejo defensivo de datos para evitar que la página se caiga
  const safeEmployeeData = Array.isArray(employeeData) ? employeeData : [];
  const safeGalleryData = Array.isArray(galleryData) ? galleryData : [];
  const safeGalleryCover = Array.isArray(galleryCover) ? galleryCover : [];

  const [menuDisplayStatus, setMenuDisplayStatus] = useState('none');
  const [homeScreenStatus, setHomeScreenStatus] = useState('');

  const showMenu = () => {
    if (menuDisplayStatus === 'none') {
      setMenuDisplayStatus('flex');
      setHomeScreenStatus('none');
    } else {
      setMenuDisplayStatus('none');
      setHomeScreenStatus('');
    }
  };

  const onMenuBtnClick = (pageName) => {
    try {
      const anchor = document.querySelector(`[data-scroll-to=${pageName}]`);
      console.log(anchor);
      if (anchor) {
        anchor.scrollIntoView({ block: "start" });
      }
    } catch (error) {
      console.error("Error en navegación:", error);
      // Evitar que un error de navegación rompa toda la página
    }
  };

  return (
    <div className="w-full relative flex flex-col items-center justify-start text-left text-xl text-black font-isidora-sans">
      <div style={{display: `${menuDisplayStatus}`}} className={` self-stretch bg-gainsboro `}>
        <MenuPage onMenuBtnClick={onMenuBtnClick} showMenu={showMenu} />
      </div>

      <div className="overflow-hidden self-stretch">
        <FirstPage 
          onMenuBtnClick={onMenuBtnClick} 
          showMenu={showMenu} 
          menuDisplayStatus={menuDisplayStatus} 
        />

        <SecondPage /> {/*  ¿QUIÉNES SOMOS?*/}

        <ThirdPage employeeData={safeEmployeeData} />

        <FourthPage /> {/* SERVICIOS*/}

        <FifthPage 
          galleryCover={safeGalleryCover} 
          galleryData={safeGalleryData} 
        /> {/* PORTAFOLIO*/}

        <AddedPage /> 

        <LastPage /> {/* CONTACTO*/}
      </div>
    </div>
  );
};

export default Frontend;