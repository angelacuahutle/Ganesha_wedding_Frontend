import { useState, useEffect } from 'react';
import client from '../SanityClient';
import imageUrlBuilder from '@sanity/image-url';
const builder = imageUrlBuilder(client);

const StaffImageCard1 = ({ employeeImageId, employeeName, designation }) => {
  const [imageUrl, setImageUrl] = useState('/placeholder.png');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    
    const loadImage = async () => {
      setIsLoading(true);
      try {
        // Solo intentar construir la URL si employeeImageId existe y es válido
        if (employeeImageId && typeof employeeImageId === 'object' && employeeImageId.asset) {
          const url = builder.image(employeeImageId).url();
          
          // Verificar que la imagen se puede cargar
          const img = new Image();
          img.onload = () => {
            if (mounted) {
              setImageUrl(url);
              setIsLoading(false);
            }
          };
          img.onerror = () => {
            if (mounted) {
              console.warn("No se pudo cargar la imagen, usando placeholder");
              setImageUrl('/placeholder.png');
              setIsLoading(false);
            }
          };
          img.src = url;
        } else {
          // Si no hay imagen válida
          setImageUrl('/placeholder.png');
          setIsLoading(false);
        }
      } catch (error) {
        console.error("Error al construir la URL de la imagen:", error);
        setImageUrl('/placeholder.png');
        setIsLoading(false);
      }
    };

    loadImage();
    
    return () => {
      mounted = false; // Prevenir actualizaciones si el componente se desmonta
    };
  }, [employeeImageId]);
  
  // Estilo para el contenedor de imagen durante la carga
  const imageContainerStyle = {
    position: 'relative',
    width: '300px',
    height: '400px',
    background: isLoading ? '#f0f0f0' : 'transparent', // Fondo gris durante la carga
    overflow: 'hidden'
  };

  return (
    <div className="flex flex-col items-start justify-center gap-[10px] text-left text-8xl text-chocolate font-isidora-sans w-1/4 lg:w-auto">
      <div style={imageContainerStyle}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Puedes usar un spinner o simplemente texto */}
            <span className="text-sm text-gray-500">Cargando...</span>
          </div>
        )}
        <img
          className="w-[300px] h-[400px] object-cover mq350small:w-auto"
          alt={employeeName || "Staff member"}
          src={imageUrl}
          style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease' }}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/placeholder.png';
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-start">
        <div style={{color: '#853f10'}} className="relative sm:text-xl">{employeeName || ''}</div>
        <i style={{color: '#853f10'}} className="relative inline-block font-open-sans mt-[-5px] sm:text-xl">
          {designation || ''}
        </i>
      </div>
    </div>
  );
};

export default StaffImageCard1;