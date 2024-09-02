import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function CarritoSomo(props) {
  const { nodes, materials } = useGLTF('/Materiales/Pasillo/CarritoSomo.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.165, 7.169, -4.414]} scale={3.893}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={materials.Spoon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_1.geometry}
          material={materials.Bola}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_2.geometry}
          material={materials.LLantas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_3.geometry}
          material={materials.Perno}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_4.geometry}
          material={materials['LLantas.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_5.geometry}
          material={materials.LLaantas2}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_6.geometry}
          material={materials.Tubo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_7.geometry}
          material={materials.Estructura}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_8.geometry}
          material={materials.ColorBasos1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.portacucharas.geometry}
        material={materials.Fuente}
        position={[-0.359, 1.832, -17.159]}
        scale={1.773}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cucharas.geometry}
        material={materials.Cucharas}
        position={[-1.611, 3.272, -18.159]}
        rotation={[1.364, 0.202, -3.099]}
        scale={0.616}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.U001.geometry}
        material={materials.Material}
        position={[-5.556, 7.592, 5.655]}
        rotation={[-0.065, 0.049, 0.001]}
        scale={[3.46, 2.474, 3.03]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Pasillo/CarritoSomo.glb')