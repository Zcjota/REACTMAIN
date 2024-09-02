import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SectorIndustria(props) {
  const { nodes, materials } = useGLTF('/Materiales/Estructuras/1. ObjIndustrial Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa1.geometry}
        material={materials.Fierro}
        scale={[2.106, 1, 1]}
      />
      <mesh castShadow receiveShadow geometry={nodes.mesa2.geometry} material={materials.Fierro} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basurero.geometry}
        material={materials.Material}
        position={[-27.261, 0.527, -6.331]}
        scale={0.506}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.olla1.geometry}
        material={materials.Fierro}
        position={[-25.975, 0, -3.803]}
      />
      <mesh castShadow receiveShadow geometry={nodes.olla2.geometry} material={materials.Fierro} />
      <mesh castShadow receiveShadow geometry={nodes.olla3.geometry} material={materials.Fierro} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plano.geometry}
        material={materials.Fierro}
        scale={[3.944, 1, 1.147]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Estructuras/1. ObjIndustrial Material.glb')
