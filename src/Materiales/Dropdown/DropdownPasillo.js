import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function DropdownPasillo({
  onBackClick,
  onCarritoSomoClick,
  onLetrasClick,
  onMasetaClick,
  onMinidispensadorClick,
  onAtencionClienteClick,
  onPasillos2Click,
  onRegisaEntradaClick,
  onTimbreClick,
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
      <div className="dropdown-header">Biblioteca</div>
      <ul>
        <li onClick={onCarritoSomoClick}>Carrito Somo</li>
        <li onClick={onLetrasClick}>Letras</li>
        <li onClick={onMasetaClick}>Maseta</li>
        <li onClick={onMinidispensadorClick}>Minidispensador</li>
        <li onClick={onAtencionClienteClick}>Atención al Cliente</li>
        {/* <li onClick={onPasillos2Click}>Bievenida</li> */}
        {/* <li onClick={onRegisaEntradaClick}>Registra Entrada</li> */}
        {/* <li onClick={onTimbreClick}>Timbre</li> */}
        <li onClick={onBackClick}>Volver al menú principal</li>
      </ul>
    </div>
  );
}
