import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function SillaAuditorio(props) {
  const { nodes, materials } = useGLTF('/Materiales/Auditorio/sillaAuditorio.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 2.456, 0]} scale={4.338}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Espaldar}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Asiento}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Auditorio/sillaAuditorio.glb')