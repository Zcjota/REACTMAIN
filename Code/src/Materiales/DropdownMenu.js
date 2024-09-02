import React, { useState, useEffect, useRef } from 'react';
import { FaBars } from 'react-icons/fa'; // Importar ícono de barra


export default function DropdownMenu({
  onDropAuditorio,
  onDropColiseo,
  onDropBaño,
  onDropBiblioteca,
  onDropCafeteria,
  onDropEstructura,
  onDropPasillo,
  onDropLaboratorioQ,
  onDropLaboratorio,
  onDropMedicina,
}) {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // Estado para controlar la visibilidad del menú

  const handleMouseDown = (e) => {
    setIsDragging(true);
    const menuElement = menuRef.current;
    const offsetX = e.clientX - menuElement.getBoundingClientRect().left;
    const offsetY = e.clientY - menuElement.getBoundingClientRect().top;

    const handleMouseMove = (moveEvent) => {
      if (isDragging) {
        setPosition({
          x: moveEvent.clientX - offsetX,
          y: moveEvent.clientY - offsetY,
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(() => {
    return () => {
      window.removeEventListener('mousemove', handleMouseDown);
    };
  }, []);

  // Función para alternar la visibilidad del menú
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <>
      {/* Botón flotante para mostrar/ocultar el menú */}
      <button
        onClick={toggleVisibility}
        className="fixed top-1/2 left-0 transform -translate-y-1/2 z-30 p-3 bg-black rounded-r-md shadow-lg cursor-pointer hover:bg-gray-800 transition"
      >
        <FaBars size={20} className="text-blue-500" />
      </button>


      {/* Menú desplegable */}
      {isVisible && (
        <div
          ref={menuRef}
          className="absolute w-48 md:w-64 bg-black bg-opacity-80 text-white rounded-lg p-4 cursor-move z-20 user-select-none"
          style={{ left: position.x, top: position.y }}
          onMouseDown={handleMouseDown}
        >
          <div className="text-lg font-bold mb-3">Secciones</div>
          <ul className="list-none p-0 m-0">
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropMedicina}>Medicina</li>
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropCafeteria}>Cafetería</li>
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropLaboratorio}>Laboratorio</li>
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropLaboratorioQ}>Laboratorio Química</li>
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropBiblioteca}>Biblioteca</li>
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropPasillo}>Pasillo</li>
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropAuditorio}>Auditorio</li>
            <li className="py-1 cursor-pointer hover:bg-white hover:bg-opacity-20" onClick={onDropBaño}>Baños</li>
          </ul>
        </div>
      )}
    </>
  );
}
