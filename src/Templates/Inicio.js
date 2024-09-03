import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Model_inicio } from "../Materiales/Model_inicio";
import Carousel from "./Carousel";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Modelo3D_Universidad } from "../Materiales/Modelo3D_Universidad.js";
import cube_ico from "../assets/icons/cube_ico.png";
import back_ico from "../assets/icons/back_ico.png";

export default function Inicio() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeModel, setActiveModel] = useState("Modelo3D_Universidad");
  const [color, setColor] = useState("#000000");
  const ref = useRef();
  const canvasRef = useRef();
  const navigate = useNavigate();
  const links = [
    "/Modelo3D-Auditorio",
    "/Modelo3D-Biblioteca",
    "/Modelo3D-Cafeteria",
    "/Modelo3D-Baños",
    "/Modelo3D-Coliseo",
    "/Modelo3D-Laboratorio",
    "/Modelo3D-Laboratorio_Quimica",
    "/Modelo3D-Medicina",
    "/Modelo3D-Pasillos",
    "/Modelo3D-Patio",
    "/Modelo3D_Universidad",
  ];

  const handleRedirect = () => {
    navigate("/Modelo3D-Auditorio");
  };

  return (
    <>
      <div className="absolute flex h-screen w-full">
        {/* Sección de texto, ocupa el 30% del ancho */}
        <div className="relative flex flex-col items-center justify-center w-1/3 overflow-x-hidden lg:pt-40 lg:pb-40 xl:pt-40 xl:pb-64">
          <div className="z-30 flex flex-col items-center w-full max-w-xl pt-48 text-center lg:items-start lg:w-full lg:pt-20 xl:pt-40 lg:text-left">
            <h1 className="relative mb-4 text-3xl font-black leading-tight text-gray-900 sm:text-6xl xl:mb-8">
              Universidad Privada Domingo Savio
            </h1>
            <p className="pr-0 mb-8 text-base text-gray-600 sm:text-lg xl:text-xl lg:pr-20">
              Modelado 3D de la Universidad
            </p>
            <Button
              variant="text"
              className="flex items-center gap-3"
              onClick={handleRedirect}
            >
              Vista Exterior
            </Button>
          </div>
        </div>

        {/* Sección del Canvas, ocupa el 70% del ancho */}
        <div className="w-2/3 h-full">
          <Canvas
            ref={canvasRef}
            camera={{
              position: [0, 100, 0],
              fov: 45,
              near: 0.1,
              far: 1000,
            }}
            shadows
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <Stage
                controls={ref}
                preset="rembrandt"
                intensity={1}
                environment={null}
              >
                {activeModel === "Modelo3D_Universidad" && (
                  <Modelo3D_Universidad color={color} />
                )}
              </Stage>
            </Suspense>
            <OrbitControls
              ref={ref}
              autoRotate={autoRotate}
              enableRotate={true}
              autoRotateSpeed={1}
              target={[0, 100, 0]} // Eleva el punto focal de los controles
            />
          </Canvas>

          {/* Botón en la esquina inferior derecha */}
          <div className="absolute bottom-4 right-4">
            <Button
              variant="text"
              className="flex items-center gap-3"
              onClick={handleRedirect}
            >
              <img
                src={cube_ico}
                className="h-[30px] w-[30px] bg-blue-200"
                alt="icon"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
