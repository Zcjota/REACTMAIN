import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function ExpendedoraCafe({ color = '#FFFFFF', selectedPart = '', onPartsUpdate, ...props }) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/expendedora de cafe express.glb');
  const originalColors = useRef({});
  const [parts, setParts] = useState([]);

  // Mapeo de nombres originales a nombres personalizados
  const partNamesMap = {
    'Material.001': 'Cuerpo Principal Cafe',
    'Material.002': 'Pantalla Frontal',
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
      <group
        position={[16.238, 5.885, -0.627]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.305, 1, 0.612]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['084_1'].geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['084_2'].geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/Materiales/Cafeteria/expendedora de cafe express.glb');
