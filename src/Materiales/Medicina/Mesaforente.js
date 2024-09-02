import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mesaforente(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/Mesaforense Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Puerta.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Manesilla.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tubo.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Soporte.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mesa.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tap1.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tap2.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tap3.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tap4.geometry}
        material={materials.Fierro}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/Mesaforense Material.glb')