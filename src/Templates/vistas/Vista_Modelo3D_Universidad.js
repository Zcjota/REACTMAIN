import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Modelo3D_Universidad } from "../../Materiales/Modelo3D_Universidad";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

export default function Vista_Modelo3D_Universidad() {
  const ref = useRef();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/Inicio");
  };

  return (
    <>
      <div className="canvas-container flex flex-col h-screen">
        <div className="flex-1 h-4/5 bg-blue-400 relative">
          {/* Texto centrado verticalmente en el lado izquierdo */}
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white sm:text-sm xl:text-lg sm:w-11/12 sm:h-auto lg:w-1/4 sm:bottom-0 sm:top-auto sm:transform-none sm:translate-y-0">
            <div className="flex flex-col justify-end h-80 p-8 m-2 rounded-md bg-black opacity-55 text-white overflow-y-auto sm:h-auto">
              <h1 className="text-2xl font-bold mb-2">
                Salom Auditorio de La universidad
              </h1>
              <p className="mb-2">
                En este proyecto, el grupo de estudiantes de la universidad ha
                creado un modelo 3D detallado de las instalaciones
                universitarias.
              </p>
            </div>
          </div>

          <Canvas
            camera={{ position: [0, 50, 100], fov: 50, near: 0.1, far: 1000 }}
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
                <Modelo3D_Universidad />
              </Stage>
            </Suspense>
            <OrbitControls
              ref={ref}
              autoRotate
              enableRotate
              autoRotateSpeed={1}
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
                src="https://cdn.icon-icons.com/icons2/3908/PNG/512/cube_viewport_icon_246706.png"
                className="h-[30px] w-[30px] bg-blue-300"
                alt="icon"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
