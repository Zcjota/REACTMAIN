import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function VasoBlastico(props) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/vaso de plastico para cafes.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle000_Circle197.geometry}
        material={materials.white_body}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001_Circle006.geometry}
        material={materials.black_plastic}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.black_plastic}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.None}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005_Circle198.geometry}
        material={materials.card_board}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle061_Circle063.geometry}
        material={materials.black_plastic}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Cafeteria/vaso de plastico para cafes.glb')