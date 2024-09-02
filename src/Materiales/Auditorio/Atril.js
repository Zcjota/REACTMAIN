import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Atril(props) {
  const { nodes, materials } = useGLTF('/Materiales/Auditorio/atrilAuditorio.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={5.019}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Atril}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Microfono}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/Materiales/Auditorio/atrilAuditorio.glb')
