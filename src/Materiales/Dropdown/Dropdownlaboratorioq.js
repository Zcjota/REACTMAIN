import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function Dropdownlaboratorioq({
  onBackClick,
  onFocosLClick,
  onGrifosLClick,
  onMesaLClick,
  onMesaQClick,
  onPuertaQAulaClick,
  onSillaQClick,
  onVasosQClick,
  onVentiladoQClick,
  onVitrinaQClick,
  onVitrina2QClick,
}) {
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
      <div className="dropdown-header">Laboratorio Químico</div>
      <ul>
        {/* <li onClick={onFocosLClick}>Focos</li> */}
        <li onClick={onGrifosLClick}>Grifos</li>
        {/* <li onClick={onMesaLClick}>Mesa Docente</li> */}
        <li onClick={onMesaQClick}>Mesa Quimica</li>
        <li onClick={onPuertaQAulaClick}>Puerta</li>
        {/* <li onClick={onSillaQClick}>Silla</li> */}
        {/* <li onClick={onVasosQClick}>Vasos</li> */}
        {/* <li onClick={onVentiladoQClick}>Ventilador</li> */}
        {/* <li onClick={onVitrinaQClick}>Vitrina</li> */}
        {/* <li onClick={onVitrina2QClick}>Vitrina 2</li> */}
        <li onClick={onBackClick}>Volver al menú principal</li>
      </ul>
    </div>
  );
}
