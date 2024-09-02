import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RegisaEntrada(props) {
  const { nodes, materials } = useGLTF('/Rejita Entrada Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rejitaEntrada.geometry}
        material={materials['Material.001']}
        rotation={[0, 0, -Math.PI / 2]}
      />
    </group>
  )
}

useGLTF.preload('/Rejita Entrada Material.glb')