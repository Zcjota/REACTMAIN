import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function MesaB(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Materiales/Biblioteca/Mesa Biblioteca Material.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Mesa" scale={3.116}>
          <mesh
            name="Plane"
            castShadow
            receiveShadow
            geometry={nodes.Plane.geometry}
            material={materials.Fierro}
          />
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials['Plastico Mesa']}
          />
        </group>
        <group name="Silla_2" position={[-2.696, -3.339, 9.484]} scale={2.539}>
          <mesh
            name="Plane001"
            castShadow
            receiveShadow
            geometry={nodes.Plane001.geometry}
            material={materials.Fierro}
          />
          <mesh
            name="Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials['Plastico Silla']}
          />
        </group>
        <group name="Silla_1" position={[-2.696, -3.158, 0.839]} scale={2.539}>
          <mesh
            name="Plane002"
            castShadow
            receiveShadow
            geometry={nodes.Plane002.geometry}
            material={materials.Fierro}
          />
          <mesh
            name="Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials['Plastico Silla']}
          />
        </group>
        <group name="Silla_3" position={[-2.696, -3.022, -9.255]} scale={2.539}>
          <mesh
            name="Plane003"
            castShadow
            receiveShadow
            geometry={nodes.Plane003.geometry}
            material={materials.Fierro}
          />
          <mesh
            name="Plane003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials['Plastico Silla']}
          />
        </group>
        <group
          name="Silla_4"
          position={[12.697, -3.031, -9.427]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={2.539}>
          <mesh
            name="Plane004"
            castShadow
            receiveShadow
            geometry={nodes.Plane004.geometry}
            material={materials.Fierro}
          />
          <mesh
            name="Plane004_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_1.geometry}
            material={materials['Plastico Silla']}
          />
        </group>
        <group
          name="Silla_5"
          position={[12.879, -3.031, 0.712]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={2.539}>
          <mesh
            name="Plane005"
            castShadow
            receiveShadow
            geometry={nodes.Plane005.geometry}
            material={materials.Fierro}
          />
          <mesh
            name="Plane005_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials['Plastico Silla']}
          />
        </group>
        <group
          name="Silla_6"
          position={[12.471, -3.096, 9.584]}
          rotation={[Math.PI, 0, Math.PI]}
          scale={2.539}>
          <mesh
            name="Plane006"
            castShadow
            receiveShadow
            geometry={nodes.Plane006.geometry}
            material={materials.Fierro}
          />
          <mesh
            name="Plane006_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane006_1.geometry}
            material={materials['Plastico Silla']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Biblioteca/Mesa Biblioteca Material.glb')