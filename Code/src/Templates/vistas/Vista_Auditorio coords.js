import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Modelo3D_Universidad } from "../../Materiales/Modelo3D_Universidad";
import { Button } from "@material-tailwind/react";
import * as THREE from "three";

function MovingCircle({ position }) {
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.position.set(...position);
      console.log(
        `Circle Position: x=${position[0]}, y=${position[1]}, z=${position[2]}`
      );
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}

function CameraController({ circlePosition, isRecorridoActive }) {
  const { camera } = useThree();

  useFrame(() => {
    if (isRecorridoActive) {
      const distance = 6; // Distancia de la cámara al círculo
      const offset = new THREE.Vector3(6, 2, -1);

      camera.position.set(
        circlePosition[0] + offset.x,
        circlePosition[1] + offset.y,
        circlePosition[2] + offset.z
      );

      camera.lookAt(new THREE.Vector3(...circlePosition));
    }
  });

  return null;
}

function MouseControl() {
  const { camera, gl } = useThree();

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Obtener las coordenadas del mouse
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Convertir las coordenadas del mouse en coordenadas del mundo
      const vector = new THREE.Vector3(x, y, 0.5).unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));

      camera.position.copy(pos);
      camera.lookAt(new THREE.Vector3(0, 0, 5));
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera, gl]);

  return null;
}

export default function Vista_Auditorio() {
  const [circlePosition, setCirclePosition] = useState([285, 22, -99]);
  const [isRecorridoActive, setIsRecorridoActive] = useState(false);
  const orbitControlsRef = useRef();

  const handleRedirect = () => {
    navigate("/Inicio");
  };

  const moveCircle = (direction) => {
    if (isRecorridoActive) {
      setCirclePosition((prevPosition) => {
        const newPosition = [...prevPosition];
        const movementSpeed = 1;

        switch (direction) {
          case "d":
            newPosition[2] -= movementSpeed;
            break;
          case "a":
            newPosition[2] += movementSpeed;
            break;
          case "w":
            newPosition[0] -= movementSpeed;
            break;
          case "s":
            newPosition[0] += movementSpeed;
            break;
          default:
            break;
        }

        return newPosition;
      });
    }
  };

  const startRecorrido = () => {
    setIsRecorridoActive(true);
    console.log(
      `Circle Position on start: x=${circlePosition[0]}, y=${circlePosition[1]}, z=${circlePosition[2]}`
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "w":
        case "s":
        case "a":
        case "d":
          moveCircle(event.key);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isRecorridoActive]);

  useEffect(() => {
    if (orbitControlsRef.current) {
      orbitControlsRef.current.enabled = !isRecorridoActive;
    }
  }, [isRecorridoActive]);

  return (
    <>
      <div className="canvas-container flex flex-col h-screen">
        <div className="flex-1 h-4/5 bg-blue-400 relative">
          <Canvas shadows dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Modelo3D_Universidad />
              <MovingCircle position={circlePosition} />
              <CameraController
                circlePosition={circlePosition}
                isRecorridoActive={isRecorridoActive}
              />
              <MouseControl />
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
                castShadow
              />
              <pointLight position={[0, 5, 0]} intensity={1} distance={50} />
            </Suspense>
            <OrbitControls ref={orbitControlsRef} />
          </Canvas>

          <div className="absolute bottom-16 right-4">
            <Button
              variant="text"
              className="flex items-center gap-3"
              onClick={startRecorrido}
            >
              {isRecorridoActive ? "Finalizar Recorrido" : "Iniciar Recorrido"}
            </Button>
          </div>

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
