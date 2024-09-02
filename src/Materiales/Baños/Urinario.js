import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Urinario(props) {
  const { nodes, materials } = useGLTF('/Materiales/Baño/Urinario.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        scale={[0.148, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002.geometry}
        material={nodes.Vert002.material}
        position={[0.62, 0.164, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 2.652, 0]}
        scale={0.068}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Baño/Urinario.glb')