import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ReposaManoB(props) {
  const { nodes, materials } = useGLTF('/Materiales/Biblioteca/Reposamano Biblioteca Material.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 3.481, 8.088]} scale={[38.262, 3.166, 1.474]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Rebosa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials['Rebosa Azul']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.puertita.geometry}
        material={materials.Rebosa}
        position={[31.336, 5.565, 4.87]}
        scale={[3.738, 4.423, 0.386]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Biblioteca/Reposamano Biblioteca Material.glb')