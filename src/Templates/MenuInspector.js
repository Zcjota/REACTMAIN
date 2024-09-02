import React, { useState } from 'react';
import { FaLayerGroup } from 'react-icons/fa'; // Importar el icono de capas para "Model Inspector"
import './MenuInspector.css'; // Importa tus estilos personalizados

export default function MenuInspector({ onChangeColor }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-inspector-container">
      {/* Botón flotante para abrir el menú */}
      <button
        className="inspector-button"
        onClick={toggleMenu}
        aria-label="Model Inspector"
      >
        <FaLayerGroup size={20} />
      </button>

      {/* Contenedor del menú que se desliza */}
      {isOpen && (
        <div className="inspector-panel">
          <div className="inspector-header">Model Inspector</div>
          <div className="inspector-content">
            {/* Opciones de Wireframe */}
            <div className="inspector-section">
              <label>WIREFRAME</label>
              <div className="color-options">
                {['#FFFFFF', '#000000', '#CCCCCC', '#FF0000', '#0000FF', '#00FF00', '#FFFF00'].map((color) => (
                  <button
                    key={color}
                    onClick={() => onChangeColor(color)}
                    className="color-button"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
