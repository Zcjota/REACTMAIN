import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';

export function Mesaping({ color = '#FFFFFF', selectedPart = '', onPartsUpdate, ...props }) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/MESA DE PI9NG PONG1.glb');
  const originalColors = useRef({});
  const [parts, setParts] = useState([]);

  // Mapeo de nombres originales a nombres personalizados
  const partNamesMap = {
    Mesa: 'Superficie de la Mesa',
    EsquiinaMesa: 'Esquina de la Mesa',
    BordesMesa: 'Bordes de la Mesa',
    Paletti: 'Paletas de Soporte',
    // 'Material.020': 'Material de Pata 2',
    Paleta: 'Paleta de Juego',
    Pelota: 'Pelota de Ping Pong',
    MallaColor: 'Color de la Malla',
    Malla: 'Malla Principal',
    // 'Material.010': 'Material de Soporte 1',
    // 'Material.009': 'Material de Soporte 2',
    // 'Material.006': 'Material Adicional',
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
      <group position={[0.886, 0.496, 1.442]} scale={0.025}>
        <mesh castShadow receiveShadow geometry={nodes.Malla_1.geometry} material={materials.Mesa} />
        <mesh castShadow receiveShadow geometry={nodes.Malla_2.geometry} material={materials.EsquiinaMesa} />
        <mesh castShadow receiveShadow geometry={nodes.Malla_3.geometry} material={materials.BordesMesa} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.EsquinaDelamalla.geometry} material={materials.Paletti} position={[0.892, 0.53, 0.702]} scale={[0.025, 0.078, 0.025]} />
      <mesh castShadow receiveShadow geometry={nodes.EsquinaDelamalla2.geometry} material={materials.Paletti} position={[0.892, 0.53, 2.182]} scale={[0.025, 0.074, 0.025]} />
      <mesh castShadow receiveShadow geometry={nodes.Pata1.geometry} material={nodes.Pata1.material} position={[-0.371, -0.23, 0.79]} scale={0.025} />
      <mesh castShadow receiveShadow geometry={nodes.Pata2.geometry} material={materials['Material.020']} position={[2.153, -0.23, 0.79]} scale={0.025} />
      <mesh castShadow receiveShadow geometry={nodes.Pata3.geometry} material={nodes.Pata3.material} position={[2.153, -0.23, 2.093]} scale={0.025} />
      <mesh castShadow receiveShadow geometry={nodes.Pata4.geometry} material={nodes.Pata4.material} position={[-0.371, -0.23, 2.093]} scale={0.025} />
      <group position={[-1.107, 0.768, 0.252]} rotation={[Math.PI, 0, 3.113]} scale={0.025}>
        <mesh castShadow receiveShadow geometry={nodes.Line004.geometry} material={materials.Paleta} position={[-82.365, -10.775, -99.451]} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.Pelota.geometry} material={materials.Pelota} position={[0.744, 0.535, 2.73]} scale={[0.027, 0.025, 0.025]} />
      <mesh castShadow receiveShadow geometry={nodes.Malla.geometry} material={materials.MallaColor} position={[0.905, 0.666, 1.971]} rotation={[1.563, 0, -1.569]} scale={[0.265, 1.007, 0.101]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials.Malla} position={[1.998, 0, -0.947]} rotation={[-Math.PI / 2, 0, 0]} scale={[3.009, 0.08, 0.022]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube002.geometry} material={nodes.Cube002.material} position={[1.998, 0, 0.94]} rotation={[-Math.PI / 2, 0, 0]} scale={[3.009, 0.08, 0.022]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube003.geometry} material={materials['Material.010']} position={[-0.79, 0, -0.004]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.021, 0.893, 0.017]} />
        <mesh castShadow receiveShadow geometry={nodes.Cube004.geometry} material={materials['Material.009']} position={[4.681, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} scale={[0.03, 0.893, 0.01]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane001.geometry} material={nodes.Plane001.material} position={[4, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane002.geometry} material={nodes.Plane002.material} position={[2, 0, 0]} />
        <mesh castShadow receiveShadow geometry={nodes.Plane004.geometry} material={materials['Material.006']} position={[-0.971, 0.024, -0.925]} rotation={[Math.PI, -Math.PI / 2, 0]} scale={[0.053, 1, 0.024]} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/Materiales/Cafeteria/MESA DE PI9NG PONG1.glb');
