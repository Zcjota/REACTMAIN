import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mouse(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorio/Mouse1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo001.geometry}
        material={materials['Material.001']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo001_1.geometry}
        material={materials['Material.002']}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorio/Mouse1.glb')
