import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model_Final(props) {
  const { nodes, materials } = useGLTF('/Portada/UPDS3D2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PisoAB.geometry}
        material={materials.Material}
        position={[-162.132, 1.408, -65.086]}
        rotation={[0, 0.004, -Math.PI]}
        scale={[-8.278, -4.733, -0.89]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.PisoAB001.geometry}
        material={materials.Material}
        position={[-162.132, 1.408, -65.086]}
        rotation={[0, 0.004, -Math.PI]}
        scale={[-8.278, -4.733, -0.89]}
      />
    </group>
  )
}
useGLTF.preload('/Portada/UPDS3D2.glb')