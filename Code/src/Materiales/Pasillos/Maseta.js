import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Maseta(props) {
  const { nodes, materials } = useGLTF('/Materiales/Pasillo/masetaUPDS1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[19.226, 0.224, 0.135]} scale={1.533}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle.geometry}
          material={materials.Maseta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={materials.tALLOS}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={materials.hOJAS}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Pasillo/masetaUPDS1.glb')