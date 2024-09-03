import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mesasilla(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/mesa y silla 1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Patas}
        position={[1.833, -0.072, -2.097]}
        scale={[-0.072, -0.078, -0.078]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials.Plastico}
        position={[-0.121, 2.82, -1.259]}
        scale={[2.033, 0.746, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.Patas}
        position={[-1.2, -0.072, 1.557]}
        scale={-0.054}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Plastico}
        position={[-0.244, 1.506, 0.884]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.943, 1, 0.694]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Plastico}
        position={[-0.244, 2.837, 1.464]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle005.geometry}
        material={materials.Fierro}
        position={[-2.018, 2.683, -1.146]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.Fierro}
        position={[-2.066, 0.347, -1.259]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.043}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.Fierro}
        position={[1.831, 2.683, -1.146]}
        scale={0.005}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials.Fierro}
        position={[-2.069, 2.101, -1.261]}
        rotation={[0, 1.571, 0]}
        scale={0.055}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.Fierro}
        position={[-0.243, 2.551, 1.562]}
        scale={0.03}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/mesa y silla 1.glb')