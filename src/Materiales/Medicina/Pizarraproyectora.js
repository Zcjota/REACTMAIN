import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pizarraproyectora(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/pizarraproyectora.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[4.502, 4.188, -2.234]}
        rotation={[Math.PI, 0.012, -Math.PI / 2]}
        scale={[0.003, 0.001, 0.004]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla005.geometry}
          material={materials['01 - Default']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla005_1.geometry}
          material={materials['Material #37']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla005_2.geometry}
          material={materials['Material #41']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle003.geometry}
        material={materials['03 - Default']}
        position={[4.485, 5.276, -0.35]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.003, 0.004, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle002.geometry}
        material={materials['03 - Default']}
        position={[4.533, 5.276, -4.313]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.003, 0.004, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle001.geometry}
        material={materials['04 - Default']}
        position={[4.532, 5.279, -4.235]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.002, 0.004, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['03 - Default']}
        position={[4.526, 2.577, -4.088]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.003, 0.004, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['02 - Default']}
        position={[4.53, 5.307, -4.235]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.003, 0.004, 0.001]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/pizarraproyectora.glb')
