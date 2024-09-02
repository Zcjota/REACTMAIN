import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PuertaQAula(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorioq/Puerta_Quimica1.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.411}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Visagra}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Visagrqa1}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorioq/Puerta_Quimica1.glb')