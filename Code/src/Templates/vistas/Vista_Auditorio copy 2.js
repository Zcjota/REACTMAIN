import React, { Suspense, useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { Modelo3D_Universidad } from "../../Materiales/Modelo3D_Universidad";
import * as THREE from "three"; // Importar THREE

export default function Vista_Auditorio() {
  const controlsRef = useRef();
  const navigate = useNavigate();
  const [autoRotate, setAutoRotate] = useState(false);
  const inactivityTime = useRef(null);

  // Posición inicial de la cámara y posición objetivo
  const initialCameraPosition = [0, 0, 0];
  const targetCameraPosition = [0, 15, 0]; // Posición objetivo para el botón

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

  const moveToTargetPosition = () => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      controls.object.position.set(...initialCameraPosition); // Volver a la posición inicial
      controls.target.set(...targetCameraPosition); // Ajustar el objetivo de la cámara
      controls.update(); // Asegúrate de que los controles se actualicen
      console.log(
        `Camera moved to initial position: x=${initialCameraPosition[0]}, y=${initialCameraPosition[1]}, z=${initialCameraPosition[2]}`
      );
    }
  };

  const moveCamera = (direction) => {
    if (controlsRef.current) {
      const controls = controlsRef.current;
      const { object, target } = controls;

      const cameraPosition = object.position.clone();
      const targetPosition = target.clone();

      // Calcular la dirección en la que la cámara está mirando
      const directionVector = new THREE.Vector3()
        .subVectors(targetPosition, cameraPosition)
        .normalize();

      // Ajustar la posición de la cámara en la dirección deseada
      const movementSpeed = 1;
      object.position.addScaledVector(
        directionVector,
        direction * movementSpeed
      );

      controls.update(); // Asegúrate de que los controles se actualicen

      console.log(
        `Camera moved ${
          direction > 0 ? "forward" : "backward"
        } to position: x=${object.position.x}, y=${object.position.y}, z=${
          object.position.z
        }`
      );
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "w":
          moveCamera(1); // Mover adelante
          break;
        case "s":
          moveCamera(-1); // Mover atrás
          break;
        default:
          break;
      }

      resetInactivityTimer();
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(inactivityTime.current);
    };
  }, []);

  return (
    <>
      <div className="canvas-container flex flex-col h-screen">
        <div className="flex-1 h-4/5 bg-blue-400 relative">
          <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white sm:text-sm xl:text-lg sm:w-11/12 sm:h-auto lg:w-1/4 sm:bottom-0 sm:top-auto sm:transform-none sm:translate-y-0">
            <div className="flex flex-col justify-end h-80 p-8 m-2 rounded-md bg-black opacity-55 text-white overflow-y-auto sm:h-auto">
              <h1 className="text-2xl font-bold mb-2">
                Proyecto de Modelado 3D
              </h1>
              <p className="mb-2">
                En este proyecto, el grupo de estudiantes de la universidad ha
                creado un modelo 3D detallado de las instalaciones
                universitarias.
              </p>
              <p className="mb-2">
                El modelo permite una exploración interactiva y proporciona una
                visión completa de los edificios y espacios importantes de la
                universidad.
              </p>
              <p className="mb-2">
                Este proyecto fue desarrollado como parte de la asignatura de
                Modelado 3D y Visualización. Agradecemos a todos los miembros
                del equipo por su dedicación y esfuerzo.
              </p>
            </div>
          </div>

          <Canvas
            camera={{
              position: initialCameraPosition,
              fov: 30,
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

          {/* Botón para mover la cámara */}
          <div className="absolute bottom-16 right-4">
            <Button
              variant="text"
              className="flex items-center gap-3"
              onClick={moveToTargetPosition}
            >
              Mover cámara a objetivo
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
