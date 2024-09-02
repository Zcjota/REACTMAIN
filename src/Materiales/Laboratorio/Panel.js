import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Panel(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorio/Panel1.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={[1, 1, 8.712]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_1.geometry}
          material={materials.pantalla}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_2.geometry}
          material={materials.PLastico}
        />
      </group>
    </group>
  )
}

useGLTF.preload('Materiales/Laboratorio/Panel1.glb')