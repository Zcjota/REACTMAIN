import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function ProyectoraEpson(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorio/proyectoraEpson1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-0.543, 6.912, -0.795]} rotation={[-Math.PI / 2, 0, Math.PI]} scale={0.684}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_1.geometry}
          material={materials.Proyectora}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_2.geometry}
          material={materials.LentesPlasticos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_3.geometry}
          material={materials.Luz}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_4.geometry}
          material={materials.EchufeEntrada}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_5.geometry}
          material={materials.Rojo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_6.geometry}
          material={materials.Amarillo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle_7.geometry}
          material={materials.AzulEnchufe}
        />
      </group>
      <group
        position={[-1.115, 5.786, 1.614]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.703, 2.351, 0.46]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro_1.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cilindro_2.geometry}
          material={materials.LentesPlasticos}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorio/proyectoraEpson1.glb')
