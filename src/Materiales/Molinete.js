import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Molinete(props) {
  const { nodes, materials } = useGLTF('/Materiales/Molinete1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[3.765, -0.152, -1.994]} scale={[1, 1, 3.918]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Molino}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Base}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_3.geometry}
          material={materials.IndicadorPase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_4.geometry}
          material={materials.TargetaPase}
        />
      </group>
      <group position={[-1.948, -0.08, -2.131]} scale={[1, 1, 3.918]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials.Molino}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials.TargetaPase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_3.geometry}
          material={materials.IndicadorPase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_4.geometry}
          material={materials.LusTargetaPase}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_5.geometry}
          material={materials.Base}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Molinete1.glb')
