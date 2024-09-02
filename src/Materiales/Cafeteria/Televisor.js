import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Televisor(props) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/televisor.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tv.geometry}
        material={materials['Material.001']}
        position={[-0.001, 0.353, -0.026]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={1.06}>
        <group position={[-0.005, -0.043, 0.195]} rotation={[-Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={materials['Material.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials['red light']}
          />
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/Materiales/Cafeteria/televisor.glb')