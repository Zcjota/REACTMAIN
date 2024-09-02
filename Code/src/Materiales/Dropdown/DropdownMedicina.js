import React, { useState, useEffect, useRef } from 'react';
import './DropdownMenu.css';

export default function DropdownMedicina({
  onBackClick,
  onEcografoClick,
  onPupitre1Click,
  onPizarraClick,
  onPizarraProyectoraClick,
  onPizarraProyectora2Click,
  onProyectorClick,
  onPupitreClick,
  onCamaMedicinaClick,
  onElectrocardiografoClick,
  onEsqueletoClick,
  onEstettoscopioClick,
  onMaquinaanestesiaClick,
  onMesaanatomiaClick,
  onMesaforenteClick,
  onMicrocospioClick,
  onMolineteClick,
  onMuesculoEsqueletoClick,
  onProyectoraEpsonClick,
  onPuertaClick,
  onUrinalGrifoClick
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
      <div className="dropdown-header">Medicina</div>
      <ul>
        <li onClick={onEcografoClick}>Ecografo</li>
        <li onClick={onEsqueletoClick}>Esqueleto</li>
        <li onClick={onElectrocardiografoClick}>Electrocardiógrafo</li>
        <li onClick={onEstettoscopioClick}>Estetoscopio</li>
        <li onClick={onMaquinaanestesiaClick}>Máquina de Anestesia</li>
        <li onClick={onMesaanatomiaClick}>Mesa de Anatomía</li>
        <li onClick={onMesaforenteClick}>Mesa Forense</li>
        <li onClick={onMicrocospioClick}>Microscopio</li>
        <li onClick={onPupitre1Click}>Mesa y silla</li>
        {/* <li onClick={onPizarraClick}>Pizarra</li> */}
        {/* <li onClick={onPizarraProyectoraClick}>Pizarraproyectora</li> */}
        <li onClick={onPizarraProyectora2Click}>Pizarraproyectora</li>
        {/* <li onClick={onProyectorClick}>Proyector</li> */}
        {/* <li onClick={onPupitreClick}>Pupitre</li> */}
        {/* <li onClick={onCamaMedicinaClick}>Cama de Medicina</li> */}
        {/* <li onClick={onMolineteClick}>Molinete</li> */}
        {/* <li onClick={onMuesculoEsqueletoClick}>Músculo Esqueleto</li> */}
        {/* <li onClick={onProyectoraEpsonClick}>Proyectora Epson</li> */}
        {/* <li onClick={onPuertaClick}>Puerta</li> */}
        {/* <li onClick={onUrinalGrifoClick}>Urinal Grifo</li> */}
        <li onClick={onBackClick}>Volver al menú principal</li>
      </ul>
    </div>
  );
}
