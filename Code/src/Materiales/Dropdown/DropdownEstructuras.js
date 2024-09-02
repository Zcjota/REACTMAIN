import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function DropdownEstructuras({ onBackClick,onSillaGuardiaClick,
    onSillaEntradaClick,
    onSillaEsperasClick,
    onSectorIndustriaClick,
    onLaboratorioAreaClick,}) {
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
    <div className="dropdown-header">Estructuras</div>
      <ul>
         {/* <li onClick={onSillaGuardiaClick}>Silla Guardia</li> */}
         {/* <li onClick={onSillaEntradaClick}>Entrada Silla</li> */}
         {/* <li onClick={onSillaEsperasClick}>Sillas de Espera</li> */}
         <li onClick={onSectorIndustriaClick}>Sector Industrial</li>
         {/* <li onClick={onLaboratorioAreaClick}>Sector Laboratorio</li> */}
        <li onClick={onBackClick}>Volver al menú principal</li>
      </ul>
    </div>
  );
}
