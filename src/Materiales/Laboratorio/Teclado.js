import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Teclado(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Materiales/Laboratorio/TECLADO1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Plane" scale={[4.654, 1, 1]}>
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.BAse}
          />
          <mesh
            name="Plane_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials.Teclas}
          />
        </group>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.BAse}
          position={[0, 0.195, -1.788]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.054, 0.085, 0.054]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.001']}
          position={[2.817, 0.195, -1.119]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.085, 0.133, 0.085]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.FocoMedio}
          position={[3.357, 0.195, -1.119]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.085, 0.133, 0.085]}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.FocoULti}
          position={[3.878, 0.195, -1.119]}
          rotation={[-Math.PI, 0, 0]}
          scale={[0.085, 0.133, 0.085]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorio/TECLADO1.glb')
