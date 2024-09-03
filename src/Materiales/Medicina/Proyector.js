import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Proyector(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/proyector1.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object1.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object2.geometry}
          material={nodes.object2.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object3.geometry}
          material={materials['Material.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object4.geometry}
          material={materials['Material.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.object5.geometry}
          material={materials['Material.002']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cilindro.geometry}
        material={materials['Material.001']}
        position={[0.427, 0.293, 0.959]}
        scale={[0.09, 0.301, 0.059]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/proyector1.glb')
