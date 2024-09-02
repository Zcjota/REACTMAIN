import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function DropdownBiblioteca({ onBackClick,onArchiveroBClick,onEstanteriaBClick,
    onLibreroBclick,onLibroRegistroClick,onMesaBClick,onMesitaClick,
    onPuertaVidrioBClick,onReposaManoBClick}) {
    const [position, setPosition] = useState({ x: 100, y: 100 });
  const menuRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

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

  return (
    <div
    ref={menuRef}
    className="dropdown-menu"
    style={{ left: position.x, top: position.y }}
    onMouseDown={handleMouseDown}
  >
    <div className="dropdown-header">Biblioteca</div>
      <ul>
         <li onClick={onArchiveroBClick}>Archivero</li>
         <li onClick={onEstanteriaBClick}>Estanteria</li>
         {/* <li onClick={onLibreroBclick}>Librero</li> */}
         <li onClick={onLibroRegistroClick}>Libro de Registro</li>
         {/* <li onClick={onMesaBClick}>Mesa</li> */}
         <li onClick={onMesitaClick}>Librero</li>
         <li onClick={onPuertaVidrioBClick}>Puerta Vidrio</li>
         <li onClick={onReposaManoBClick}>Reposa Mano</li>
        <li onClick={onBackClick}>Volver al menú principal</li>
      </ul>
    </div>
  );
}
