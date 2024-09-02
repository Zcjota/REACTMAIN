import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MesaCC(props) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/mesa cuadrada cafeteria1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa_cafeteria.geometry}
        material={materials.skp_front_default}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.153, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa_cafeteria001.geometry}
        material={materials.pATAS}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.153, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa_cafeteria002.geometry}
        material={materials.pATAS}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.153, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa_cafeteria003.geometry}
        material={materials.skp_front_default}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.153, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa_cafeteria004.geometry}
        material={materials['Material.001']}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.153, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa_cafeteria005.geometry}
        material={materials.skp_front_default}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.153, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesa_cafeteria006.geometry}
        material={materials.skp_front_default}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[1.16, 1.153, 1]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Cafeteria/mesa cuadrada cafeteria1.glb')
