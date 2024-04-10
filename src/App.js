import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Frontend from "./pages/Frontend";
import GalleryOpenPage from "./pages/GalleryOpenPage";
import ContactPage from "./pages/ContactPage";
import client from "./SanityClient";



function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  // Getting data 
  const [galleryData , setGalleryData]=useState([])
  const [employeeData, setEmployeeData]=useState([])
  const [galleryCover, setGalleryCover]=useState([])

  async function getGalleryData() {
      const galleryImages = await client.fetch('*[_type == "gallery"]')
      const galleryCoverImages = await client.fetch('*[_type == "galleryCover"] | order(_updatedAt desc) ')
      const employees = await client.fetch('*[_type == "employees"]')
      setGalleryData(galleryImages)
      setEmployeeData(employees)
      setGalleryCover(galleryCoverImages)
  }
  
  useEffect(() => {
    getGalleryData()
  }, [])
  

  return (
    <Routes>
      <Route path="/" element={<Frontend galleryData={galleryData} employeeData={employeeData} galleryCover={galleryCover} />} />
      <Route path="/gallery" element={<GalleryOpenPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
export default App;
