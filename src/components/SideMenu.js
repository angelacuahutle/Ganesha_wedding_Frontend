import React, { useState } from "react";

import {  Text } from "../components/Text";
import { useNavigate } from "react-router-dom";




const SideMenu = ({sideBarDisplay, showNav, onMenuBtnClick}) => {

  const navigate = useNavigate(); 


  const redirect = (e) =>{
   navigate(e)
  }
  return (
    <>

         <div style={{backgroundColor: '#E2DEE1 '}} id="drawer-navigation" className={`  fixed top-0 right-0 z-40 w-64 h-screen p-4 overflow-y-auto transition-transform  ${sideBarDisplay}  dark:bg-gray-800`} tabIndex="-1" aria-labelledby="drawer-navigation-label">

            <h5 id="drawer-navigation-label" className=" mt-5 text-xl font-semibold  uppercase font-isidora-sans mb-0">Menu</h5>
            <button onClick={showNav} type="button" data-drawer-hide="drawer-navigation" aria-controls="drawer-navigation" className= " mt-5 bg-transparent hover:bg-gray-200  rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center  " >

               <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
               <span className="sr-only">Close menu</span>
            </button>

  <div className="py-0 overflow-y-auto">
      <ul className="pl-0 font-medium list-none ">
         <li onClick={()=>{ onMenuBtnClick('secondpage'); showNav()}} className="cursor-pointer " >
            <p href="#" className="flex items-start p-2 pl-0   text-gray-900 rounded-lg dark:text-white text-lg ">
               <span className=" text-black ">¿QUIÉNES SOMOS?</span>
            </p>
         </li>
         <li onClick={()=>{ onMenuBtnClick('fourthpageres'); showNav()}}  className="cursor-pointer" >
            <p href="#" className="flex items-center p-2 pl-0 text-gray-900 rounded-lg dark:text-white text-lg ">
               <span className=" text-black ">SERVICIOS</span>
            </p>
         </li>
         <li onClick={()=>{ onMenuBtnClick('fifthPage'); showNav()}}  className="cursor-pointer" >
            <p href="#" className="flex items-center p-2 pl-0 text-gray-900 rounded-lg dark:text-white text-lg ">
               <span className=" text-black ">PORTAFOLIO</span>
            </p>
         </li>
         <li onClick={()=>{ onMenuBtnClick('lastpage'); showNav()}}  className="cursor-pointer" >
            <p href="#" className="flex items-center p-2 pl-0 text-gray-900 rounded-lg dark:text-white text-lg ">
               <span className=" text-black ">CONTACTO</span>
            </p>
         </li>
     


      </ul>
   </div>
</div>
           
 
    </>
  );
};



export default SideMenu;
