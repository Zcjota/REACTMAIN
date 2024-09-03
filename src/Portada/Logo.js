import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Logo({ color = '#FFFFFF', selectedPart = '', onPartsUpdate, ...props }) {
  const { nodes, materials } = useGLTF('/Portada/logoUPDShombre .glb');
  const originalColors = useRef({});
  const [parts, setParts] = useState([]);

  // Mapeo de nombres originales a nombres personalizados
  const partNamesMap = {
    BolitaVerde: 'Bolita Verde',
    bORDE: 'Borde',
    bOLITAS2: 'Bolitas Secundarias y Cuerpo',
    rOJO: 'Bolistas Lados',
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

    if (selectedPart === 'Color Original') {
      // Restaurar todos los colores originales si se selecciona "Color Original"
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
      <group position={[0, -0.153, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.BolitaVerde}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.bORDE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials.bOLITAS2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.rOJO}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/Portada/logoUPDShombre .glb');
