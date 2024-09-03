import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Monitor(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Materiales/Laboratorio/Monitor1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Plano" position={[0, 1.662, 0]} scale={[1.96, 1, 1.153]}>
          <mesh
            name="Plano_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano_1.geometry}
            material={materials['Material.001']}
          />
          <mesh
            name="Plano_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano_2.geometry}
            material={materials.Plastico}
          />
        </group>
        <mesh
          name="Cubo"
          castShadow
          receiveShadow
          geometry={nodes.Cubo.geometry}
          material={materials.Plastico}
          position={[0, 1.092, 0.264]}
          scale={[0.189, 0.122, 0.298]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorio/Monitor1.glb')