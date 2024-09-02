
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Minidispensador(props) {
  const { nodes, materials } = useGLTF('/Materiales/Pasillo/miniDIspensadorAlchol1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-1.316, 4.501, -0.838]} scale={0.268}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_1.geometry}
          material={materials.HuecoMedio}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_2.geometry}
          material={materials.Centro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_3.geometry}
          material={materials.Amarillo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_4.geometry}
          material={materials.Rojo}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Pasillo/miniDIspensadorAlchol1.glb')