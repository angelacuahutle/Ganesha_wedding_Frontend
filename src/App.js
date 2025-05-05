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
  const [galleryData, setGalleryData] = useState([]);
  const [employeeData, setEmployeeData] = useState([]);
  const [galleryCover, setGalleryCover] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  async function getGalleryData() {
    try {
      // Iniciar la carga
      setIsLoading(true);
      setError(null);
      
      // Realizar las consultas a Sanity
      const [galleryImages, galleryCoverImages, employees] = await Promise.allSettled([
        client.fetch('*[_type == "gallery"]'),
        client.fetch('*[_type == "galleryCover"] | order(_updatedAt desc)'),
        client.fetch('*[_type == "employees"]')
      ]);
      
      // Verificar y establecer los datos de manera segura
      setGalleryData(galleryImages.status === 'fulfilled' ? galleryImages.value || [] : []);
      setEmployeeData(employees.status === 'fulfilled' ? employees.value || [] : []);
      setGalleryCover(galleryCoverImages.status === 'fulfilled' ? galleryCoverImages.value || [] : []);
      
      // Registrar éxito
      console.log("Datos cargados exitosamente");
    } catch (error) {
      // Manejar errores generales
      console.error("Error al cargar datos desde Sanity:", error);
      setError("No se pudieron cargar los datos. Intente de nuevo más tarde.");
      
      // Asegurar que siempre haya arrays vacíos como fallback
      setGalleryData([]);
      setEmployeeData([]);
      setGalleryCover([]);
    } finally {
      // Finalizar la carga independientemente del resultado
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    getGalleryData();
  }, []);
  
  // Mostrar mensaje de carga o error si es necesario
  if (isLoading) {
    // Opcionalmente, puedes mostrar un componente de carga aquí en lugar de devolver las rutas directamente
    // return <LoadingSpinner />;
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Frontend 
            galleryData={galleryData} 
            employeeData={employeeData} 
            galleryCover={galleryCover} 
            error={error}
          />
        } 
      />
      <Route path="/gallery" element={<GalleryOpenPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;