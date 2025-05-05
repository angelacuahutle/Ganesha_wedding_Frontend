import React from 'react'
import StaffImageCard1 from "../components/StaffImageCard1";

function ThirdPage({employeeData = []}) {
  
  // Manejo ultra-defensivo de datos
  const validEmployeeData = Array.isArray(employeeData) ? employeeData : [];
  
  // Filtrar empleados válidos
  const filteredEmployees = validEmployeeData
    .filter(e => e && typeof e === 'object' && e.name && e.designation)
    .sort((a, b) => {
      try {
        const dateA = a._updatedAt ? new Date(a._updatedAt) : new Date(0);
        const dateB = b._updatedAt ? new Date(b._updatedAt) : new Date(0);
        return dateB - dateA; // Ordenar descendentemente
      } catch (error) {
        return 0;
      }
    });

  // Forzar la distribución exacta: 2-2-3
  // Si hay menos de 7 empleados, algunas filas pueden quedar vacías
  const createRowData = (start, count) => {
    return Array.from({ length: count }, (_, i) => {
      const index = start + i;
      if (index < filteredEmployees.length) {
        return filteredEmployees[index];
      }
      return null; // Placeholder para posiciones sin empleado
    }).filter(Boolean); // Eliminar nulls
  };
  
  const firstRowEmployees = createRowData(0, 2);   // Siempre 2 en primera fila
  const secondRowEmployees = createRowData(2, 2);  // Siempre 2 en segunda fila
  const thirdRowEmployees = createRowData(4, 3);   // Siempre 3 en tercera fila

  return (
    <div className="self-stretch bg-white overflow-hidden flex flex-col items-center justify-start py-[50px] px-[50px] md:items-center md:justify-start md:pl-5 md:pr-5 md:box-border sm:pl-[15px] sm:pr-[15px] sm:box-border md:py-5">
      <div className="w-full max-w-7xl flex flex-col items-center justify-center px-[50px] lg:px-0">
        <div className="relative text-center text-[30px] font-bold mb-10">¡CONÓCENOS!</div>
        
        {/* Primera fila - 2 empleados */}
        <div className="w-full flex flex-row items-start justify-center gap-[50px] lg:gap-[30px] md:gap-[20px] mb-16 md:flex-col md:items-center">
          {firstRowEmployees.map((e, index) => (
            <div key={e._id || `employee-row1-${index}`} className="md:mb-10">
              <StaffImageCard1
                employeeImageId={e.employeeImg || null}
                employeeName={e.name || ''}
                designation={e.designation || ''}
              />
            </div>
          ))}
          {firstRowEmployees.length === 0 && (
            <div className="text-center py-5">No hay información de empleados disponible en esta fila.</div>
          )}
        </div>
        
        {/* Segunda fila - 2 empleados */}
        <div className="w-full flex flex-row items-start justify-center gap-[50px] lg:gap-[30px] md:gap-[20px] mb-16 md:flex-col md:items-center md:mb-10">
          {secondRowEmployees.map((e, index) => (
            <div key={e._id || `employee-row2-${index}`} className="md:mb-10">
              <StaffImageCard1
                employeeImageId={e.employeeImg || null}
                employeeName={e.name || ''}
                designation={e.designation || ''}
              />
            </div>
          ))}
          {secondRowEmployees.length === 0 && (
            <div className="text-center py-5">No hay información de empleados disponible en esta fila.</div>
          )}
        </div>
        
        {/* Tercera fila - 3 empleados */}
        <div className="w-full flex flex-row items-start justify-center gap-[50px] lg:gap-[30px] md:gap-[20px] md:flex-col md:items-center">
          {thirdRowEmployees.map((e, index) => (
            <div key={e._id || `employee-row3-${index}`} className="md:mb-10 last:md:mb-0">
              <StaffImageCard1
                employeeImageId={e.employeeImg || null}
                employeeName={e.name || ''}
                designation={e.designation || ''}
              />
            </div>
          ))}
          {thirdRowEmployees.length === 0 && (
            <div className="text-center py-5">No hay información de empleados disponible en esta fila.</div>
          )}
        </div>
        
        {/* Mensaje si no hay empleados */}
        {filteredEmployees.length === 0 && (
          <div className="w-full text-center py-5">No hay información de empleados disponible en este momento.</div>
        )}
      </div>
    </div>
  )
}

export default ThirdPage