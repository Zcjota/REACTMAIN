import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pizarraproyectora2(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/pizarraproyectoracorregir.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle004.geometry}
        material={materials['01 - Default']}
        position={[4.502, 4.188, -2.234]}
        rotation={[Math.PI, 0.012, -Math.PI / 2]}
        scale={[0.003, 0.001, 0.004]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle003.geometry}
        material={materials['03 - Default']}
        position={[4.485, 6.46, 1.119]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.006, 0.006, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle002.geometry}
        material={materials['03 - Default']}
        position={[4.533, 6.46, -5.048]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.006, 0.006, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle001.geometry}
        material={materials['04 - Default']}
        position={[4.532, 6.465, -4.927]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.005, 0.006, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials['03 - Default']}
        position={[4.465, 0.747, -4.799]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.007, 0.006, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['02 - Default']}
        position={[4.53, 6.522, -4.927]}
        rotation={[-3.142, -1.558, -1.571]}
        scale={[0.006, 0.006, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rectangle004002.geometry}
        material={materials['Material.001']}
        position={[4.417, 4.555, -1.802]}
        rotation={[Math.PI, 0.012, -Math.PI / 2]}
        scale={[0.012, 0.001, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002001.geometry}
        material={materials['03 - Default']}
        position={[4.448, 0.729, 1.174]}
        rotation={[1.578, -1.559, -1.571]}
        scale={[0.005, 0.006, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002002.geometry}
        material={materials['03 - Default']}
        position={[4.506, 0.833, -4.726]}
        rotation={[3.117, -1.354, -0.01]}
        scale={[0.005, 0.006, 0.001]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/pizarraproyectoracorregir.glb')