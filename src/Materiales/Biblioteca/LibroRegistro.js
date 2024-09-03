import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function LibroRegistro(props) {
  const { nodes, materials } = useGLTF('/Materiales/Biblioteca/Libro Registro Biblioteca Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.sites001.geometry}
        material={materials.Marco}
        position={[-0.468, 1.729, 0.006]}
        rotation={[Math.PI / 2, 0, -0.004]}
      />
      <group position={[-0.342, 0.467, -5.835]} rotation={[0, 0.003, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_1.geometry}
          material={materials['Material.006']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019_2.geometry}
          material={materials.Marco}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials['Material.006']}
        position={[-0.315, 1.868, -0.398]}
        rotation={[0, 0.004, 0]}
      />
      <group position={[-0.868, 1.971, -3.096]} rotation={[0, 0, 0.485]} scale={0.015}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_3.geometry}
          material={materials['Material.002']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Biblioteca/Libro Registro Biblioteca Material.glb')