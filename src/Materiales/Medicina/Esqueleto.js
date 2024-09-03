import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Esqueleto({ color = '#FFFFFF', selectedPart = '', onPartsUpdate, ...props }) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/Esqueleto Material.glb');
  const originalColors = useRef({});
  const [parts, setParts] = useState([]);

  // Mapeo de nombres originales a nombres personalizados
  const partNamesMap = {
    Hueso: 'Esqueleto Entero',
    Ruedas: 'Ruedas',
    Metal: 'Metal del Carrito',
  };

  useEffect(() => {
    // Guardar los colores originales y las partes del modelo una vez al montar
    if (Object.keys(originalColors.current).length === 0) {
      const materialNames = Object.keys(materials);
      materialNames.forEach((materialName) => {
        originalColors.current[materialName] = materials[materialName].color.getStyle();
      });

      // Crear una lista de nombres personalizados
      const partsWithCustomNames = materialNames.map((name) => ({
        original: name,
        display: partNamesMap[name] || name, // Usa el nombre personalizado o el original si no hay mapeo
      }));

      // Actualizar partes y notificar al componente principal
      setParts(partsWithCustomNames);
      if (onPartsUpdate) onPartsUpdate(partsWithCustomNames);
    }
  }, [materials, onPartsUpdate]);

  // Aplicar color o restaurar color original según la opción seleccionada
  useEffect(() => {
    // Encontrar la parte seleccionada original basada en el nombre mostrado
    const selectedOriginalPart = parts.find(part => part.display === selectedPart)?.original;

    if (selectedPart === 'Diseño Original') {
      // Restaurar todos los colores originales si se selecciona "Diseño Original"
      Object.keys(materials).forEach((materialName) => {
        materials[materialName].color.set(originalColors.current[materialName]);
      });
    } else if (selectedOriginalPart && materials[selectedOriginalPart]) {
      // Aplicar color solo a la parte seleccionada usando el nombre original
      materials[selectedOriginalPart].color.set(color);
    }
  }, [color, selectedPart, materials, parts]);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skeleton032.geometry}
        material={materials.Hueso}
        position={[-0.625, 0.181, 2.275]}
      />
      <group position={[-0.664, -0.068, 0.88]} rotation={[1.583, 0.004, 3.138]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine022.geometry}
          material={materials.Ruedas}
          position={[-9.748, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c011.geometry}
        material={materials.Metal}
        position={[-1.143, 3.617, 1.065]}
        rotation={[2.529, -0.046, 0.017]}
        scale={[0.406, 0.427, 0.312]}
      />
    </group>
  );
}

useGLTF.preload('/Materiales/Medicina/Esqueleto Material.glb');
