import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./globals.css"; // Asegúrate de incluir el CSS global aquí

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="absolute bg-black text-white p-4  w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold">
          UPDS
        </Link>

        {/* Menú hamburguesa para pantallas pequeñas */}
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menú para pantallas grandes */}
        <div className="hidden sm:flex space-x-4">
          <Link to="/Inicio" className="hover:text-gray-400">
            Inicio
          </Link>
          <Link to="/materiales" className="hover:text-gray-400">
            Objetos 3D
          </Link>
          <Link to="/Nosotros" className="hover:text-gray-400">
            Nosotros
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Fotos
          </Link>
          <Link to="#" className="hover:text-gray-400">
            Grupos
          </Link>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        <div
          className={`fixed top-0 left-0 h-full bg-black text-white transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out w-1/2 z-20`}
        >
          <div className="p-4 relative bg-black">
            <ul className="mt-12 space-y-4">
              <li>
                <Link to="/Inicio" onClick={closeMenu} className="block">
                  Inicio
                </Link>
              </li>
              <li>
                <Link to="/materiales" onClick={closeMenu} className="block">
                  Objetos 3D
                </Link>
              </li>
              <li>
                <Link to="/Nosotros" onClick={closeMenu} className="block">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="#" onClick={closeMenu} className="block">
                  Fotos
                </Link>
              </li>
              <li>
                <Link to="#" onClick={closeMenu} className="block">
                  Grupos
                </Link>
              </li>
            </ul>
            <button
              onClick={closeMenu}
              className="block w-full py-2 mt-8 bg-gray-700 hover:bg-gray-600 text-center text-white"
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
