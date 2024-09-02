import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function DropdownBaño({ onBackClick,onAireClick,onExtintorClick,onMonitorClick,onMouseClick,onPasilloClick,onPanelClick,onTecladoClick}) {
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
    <div className="dropdown-header">Baño</div>
      <ul>
      <li onClick={onAireClick}>Aire</li>
      <li onClick={onExtintorClick}>Extintor</li>
      <li onClick={onMonitorClick}>Monitor</li>
      <li onClick={onMouseClick}>Mouse</li>
      <li onClick={onPasilloClick}>Pasillo</li>
      <li onClick={onPanelClick}>Panel</li>
      <li onClick={onTecladoClick}>Teclado</li>
        <li onClick={onBackClick}>Volver al menú principal</li>
      </ul>
    </div>
  );
}
