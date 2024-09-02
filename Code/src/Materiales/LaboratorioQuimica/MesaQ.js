import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MesaQ(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorioq/Mesa Quimica1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0, -4.824]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert002.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vert002_1.geometry}
          material={materials.Patas}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorioq/Mesa Quimica1.glb')
