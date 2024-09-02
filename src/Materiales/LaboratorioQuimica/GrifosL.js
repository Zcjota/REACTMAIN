import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function GrifosL(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorioq/Grifos Lab Quimica1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-13.993, 0, -29.952]} scale={[1.336, 1, 1]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_1.geometry}
          material={materials.Grifos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_2.geometry}
          material={materials.Lavaplatos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube004_3.geometry}
          material={materials.Coladera}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorioq/Grifos Lab Quimica1.glb')
