import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pizarra(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/pizarra 1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials['Material.001']}
        position={[-0.215, 1.668, 0.208]}
        rotation={[1.554, 0, Math.PI]}
        scale={[2, 1, 1.25]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo004.geometry}
        material={materials.Borde}
        position={[-0.215, 0.318, 0.258]}
        scale={[1.9, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo003.geometry}
        material={materials.Borde}
        position={[-0.215, 0.368, 0.183]}
        scale={[2.1, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo002.geometry}
        material={materials.Borde}
        position={[-0.215, 2.968, 0.183]}
        scale={[2.1, 0.05, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo001.geometry}
        material={materials.Borde}
        position={[1.835, 1.668, 0.183]}
        scale={[0.05, 1.35, 0.05]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo.geometry}
        material={materials.Borde}
        position={[-2.265, 1.668, 0.183]}
        scale={[0.05, 1.35, 0.05]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/pizarra 1.glb')