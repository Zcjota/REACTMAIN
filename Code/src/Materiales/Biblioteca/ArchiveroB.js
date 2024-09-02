import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ArchiveroB(props) {
  const { nodes, materials } = useGLTF('/Materiales/Biblioteca/Archivero Biblioteca Material.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.559, 0]} scale={2.316}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Fierro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Patita}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Biblioteca/Archivero Biblioteca Material.glb')