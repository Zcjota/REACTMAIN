import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Modelo3D_Universidad } from "../../Materiales/Modelo3D_Universidad";
import * as THREE from "three";

export default function Vista_Auditorio() {
  const controlsRef = useRef();
  const navigate = useNavigate();
  const [autoRotate, setAutoRotate] = useState(false);
  const inactivityTime = useRef(null);

  // Posiciones de cámara predefinidas
  const positions = {
    entradaPrincipal: [325, 10, -160],
    entradaSecundaria: [-35, 10, -330],
  };

  const handleRedirect = () => {
    navigate("/Inicio");
  };

  const resetInactivityTimer = () => {
    setAutoRotate(false);
    clearTimeout(inactivityTime.current);

    inactivityTime.current = setTimeout(() => {
      setAutoRotate(true);
    }, 5000);
  };

  const moveToPosition = (position) => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      const { object } = controls;

      // Mover la cámara a la posición seleccionada
      object.position.set(...position);
      object.lookAt(new THREE.Vector3(0, 0, 0)); // Ajusta la cámara para mirar al origen o al punto deseado
      controls.update();

      console.log(
        `Camera moved to position: x=${object.position.x}, y=${object.position.y}, z=${object.position.z}`
      );
    }
  };

  useEffect(() => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      controls.object.position.set(...positions.entradaPrincipal); // Posición inicial
      controls.object.lookAt(new THREE.Vector3(0, 0, 0)); // Ajusta la cámara para mirar al origen o al punto deseado
      controls.update();
    }

    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);

      clearTimeout(inactivityTime.current);
    };
  }, []);

  return (
    <>
      <div className="canvas-container flex flex-col h-screen">
        <div className="h-full bg-blue-400 relative">
          <div className="absolute flex-col justify-end p-10 m-5 mt-28 rounded-md bg-black opacity-55 text-white overflow-y-auto sm:h-auto">
            <h1 className="text-2xl font-bold mb-2">VISTA EXTERIOR</h1>
          </div>

          <Canvas
            camera={{
              position: positions.entradaPrincipal,
              fov: 50,
              near: 0.1,
              far: 1000,
            }}
            shadows
            dpr={[1, 2]}
          >
            <Suspense fallback={null}>
              <Stage
                controls={controlsRef}
                preset="rembrandt"
                intensity={1}
                environment={null}
              >
                <Modelo3D_Universidad />
              </Stage>
            </Suspense>
            <OrbitControls
              ref={controlsRef}
              autoRotate={autoRotate}
              enableRotate={true}
              autoRotateSpeed={1}
            />
          </Canvas>

          {/* Botón para mover la cámara a la entrada principal */}
          <div className="relative bottom-16 ">
            <Button
              variant="text"
              className="flex items-center gap-3"
              onClick={() => moveToPosition(positions.entradaPrincipal)}
            >
              {" "}
              ENTRADA SECUNDARIA
            </Button>
          </div>

          {/* Botón para mover la cámara a la entrada secundaria */}
          <div className="absolute bottom-16 ">
            <Button
              variant="text"
              className="flex items-center gap-3"
              onClick={() => moveToPosition(positions.entradaSecundaria)}
            >
              ENTRADA PRINCIPAL
            </Button>
          </div>

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
