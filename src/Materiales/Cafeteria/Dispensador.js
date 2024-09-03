// Dispensador.js
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Dispensador({ color = '#FFFFFF', selectedPart = '', onPartsUpdate, ...props }) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/dispensador de bebidas.glb');
  const originalColors = useRef({});
  const [parts, setParts] = useState([]);

  // Mapeo de nombres originales a nombres personalizados
  const partNamesMap = {
    coicacola: 'Cuerpo Principal Dispensador',
    cable: 'Cable,Botones',
    blinn1: 'Enchufe',
    'Material.003': 'Pantalla',
    baso: 'Vasos',
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
  // Cambiar esta parte del código dentro del useEffect que aplica los colores
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
      <group position={[-0.015, 0.326, -0.131]} rotation={[Math.PI / 2, 0, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_1.geometry} material={materials.cable} />
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_2.geometry} material={materials.blinn1} />
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_3.geometry} material={materials.blinn1} />
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_4.geometry} material={materials.coicacola} />
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_5.geometry} material={materials.cable} />
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_6.geometry} material={materials['Material.003']} />
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_7.geometry} material={materials.baso} />
        <mesh castShadow receiveShadow geometry={nodes.snaks_machine_8.geometry} material={materials.cable} />
      </group>
    </group>
  );
}

useGLTF.preload('/Materiales/Cafeteria/dispensador de bebidas.glb');
