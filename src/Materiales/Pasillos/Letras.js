import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Letras(props) {
  const { nodes, materials } = useGLTF('/Materiales/Pasillo/letraupds1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.U.geometry}
        material={materials.LetraUpds}
        position={[-9.245, -2.893, 1.336]}
        scale={[3.46, 2.474, 3.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.S.geometry}
        material={materials.LetraUpds}
        position={[0.237, -2.89, 1.278]}
        scale={[3.46, 2.474, 3.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.P.geometry}
        material={materials.LetraUpds}
        position={[-8.016, -4.603, 1.323]}
        scale={[3.46, 2.474, 3.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.D.geometry}
        material={materials.LetraUpds}
        position={[-3.887, -8.075, 1.325]}
        scale={[3.46, 2.474, 3.03]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Pasillo/letraupds1.glb')