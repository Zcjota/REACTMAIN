import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Aire(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorio/aire 1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.205, 0]} scale={[3.07, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Aire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.SalidaAire}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_2.geometry}
          material={materials.Botones}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_3.geometry}
          material={materials.Luz1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_4.geometry}
          material={materials.luz2}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorio/aire 1.glb')