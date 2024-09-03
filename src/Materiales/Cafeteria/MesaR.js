import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MesaR(props) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/mesa redonda.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro.geometry}
        material={materials['MetalMaterial.001']}
        position={[-1.359, 1.221, 0.729]}
        scale={[1, 0.705, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro001.geometry}
        material={materials.WoodMaterial}
        position={[-1.301, 2.142, 0.784]}
        scale={[1.095, 0.705, 1.092]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rosca.geometry}
        material={materials['Material.001']}
        position={[-1.301, 2.159, 0.784]}
        scale={[1, 0.705, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cono.geometry}
        material={nodes.Cono.material}
        position={[-1.329, 0.432, 0.689]}
        scale={[0.608, 0.098, 0.425]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Cafeteria/mesa redonda.glb')