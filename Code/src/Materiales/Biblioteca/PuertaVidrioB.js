import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PuertaVidrioB(props) {
  const { nodes, materials } = useGLTF('/Materiales/Biblioteca/Puerta Vidrio Biblioteca Material.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[5.831, 16.087, -2.116]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={[0.632, 0.632, 0.399]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.Vidrio}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials.Fierro}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Biblioteca/Puerta Vidrio Biblioteca Material.glb')
