import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pasillos2(props) {
  const { nodes, materials } = useGLTF('/Materiales/Pasillo/Baner Bienvenida Exterior1.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={[1, 0.713, 2.949]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.Patas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.FondoUpds}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Pasillo/Baner Bienvenida Exterior1.glb')