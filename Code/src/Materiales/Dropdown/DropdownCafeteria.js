import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function DropdownCafeteria({
  onBackClick,
  onCafeteraClick,
  onMesapingClick,
  onBarraBebidasLBClick,
  onDispensadorClick,
  onEnfriadorClick,
  onExpendedoraCafeClick,
  onMesaCClick,
  onMesaCCClick,
  onMesaCPClick,
  onMesaPClick,
  onMesaRClick,
  onMesonCClick,
  onPizarraMClick,
  onPostesUnifilasClick,
  onSofaSillonClick,
  onTelevisorClick,
  onVasoBlasticoClick,
  onVentiladorCClick
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
      <div className="dropdown-header">Cafeteria</div>
      <ul>
        {/* <li onClick={onCafeteraClick}>Cafetera</li> */}
        <li onClick={onMesapingClick}>Mesa de Pin Pon</li>
        {/* <li onClick={onBarraBebidasLBClick}>Barra de Bebidas</li> */}
        <li onClick={onDispensadorClick}>Dispensador</li>
        <li onClick={onEnfriadorClick}>Enfriador</li>
        <li onClick={onExpendedoraCafeClick}>Expendedora de Café</li>
        <li onClick={onMesaCClick}>Mesa Cuadrada</li>
        {/* <li onClick={onMesaCCClick}>Mesa CC</li> */}
        {/* <li onClick={onMesaCPClick}>Mesa CP</li> */}
        {/* <li onClick={onMesaPClick}>Mesa P</li> */}
        <li onClick={onMesaRClick}>Mesa Redonda</li>
        {/* <li onClick={onMesonCClick}>Mesón C</li> */}
        {/* <li onClick={onPizarraMClick}>Pizarra M</li> */}
        {/* <li onClick={onPostesUnifilasClick}>Postes Unifilas</li> */}
        {/* <li onClick={onSofaSillonClick}>Sofá Sillón</li> */}
        <li onClick={onTelevisorClick}>Televisor</li>
        <li onClick={onVasoBlasticoClick}>Vaso de Plástico</li>
        <li onClick={onVentiladorCClick}>Ventilador </li>
        <li onClick={onBackClick}>Volver al menú principal</li>
      </ul>
    </div>
  );
}
