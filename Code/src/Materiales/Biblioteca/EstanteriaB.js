import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function EstanteriaB(props) {
  const { nodes, materials } =useGLTF('/Materiales/Biblioteca/Estanteria Biblioteca Material.glb'
    
  )
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Support.geometry}
        material={nodes.Support.material}
        position={[-0.086, -0.43, -0.12]}
        rotation={[0, 1.564, 0]}
        scale={[1, 1.319, 2.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Stand.geometry}
        material={materials.Estante}
        position={[-0.086, -0.43, -0.12]}
        rotation={[0, 1.564, 0]}
        scale={[1, 1.319, 2.91]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Shelves.geometry}
        material={materials.Estante}
        position={[-0.086, -0.43, -0.12]}
        rotation={[0, 1.564, 0]}
        scale={[1, 1.319, 2.91]}
      />
      <group position={[-0.086, -0.43, -0.12]} rotation={[0, 1.564, 0]} scale={[1, 1.319, 2.91]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Estante}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube002_1.geometry}
          material={materials.Patitas}
        />
      </group>
      <group position={[2.95, -0.406, -0.104]} rotation={[0, 1.564, 0]} scale={[1, 1.319, 2.91]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Estante}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube006_1.geometry}
          material={materials.Patitas}
        />
      </group>
      <group position={[2.95, -0.406, -0.104]} rotation={[0, 1.564, 0]} scale={[1, 1.319, 2.91]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.Estante}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials.Patitas}
        />
      </group>
    </group>
  )
}


useGLTF.preload('/Materiales/Biblioteca/Estanteria Biblioteca Material.glb')