import React, { useState, useRef } from "react";

export default function DropdownMenu_inicio() {
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const menuRef = useRef(null);

  return (
    <div>
      <div
        ref={menuRef}
        className="dropdown-menu"
        style={{ left: position.x, top: position.y }}
      >
        <div className="text-lg font-bold mb-2">Galeria</div>
        <ul className="list-none p-0 m-0 relative">
          {[
            "Laboratorios",
            "Cafetería",
            "Medicina",
            "Baños",
            "Biblioteca",
            "Auditorio",
            "GS",
          ].map((item, index) => (
            <li key={index} className="menu-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
