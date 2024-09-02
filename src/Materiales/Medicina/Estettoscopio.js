import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Estettoscopio(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/Estetoscopio Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Estetoscpioupds.geometry}
        material={materials['Plastico Negro']}
        position={[-1.036, 2.402, -0.738]}
        rotation={[-1.497, 0, -1.393]}
        scale={1.02}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bell.geometry}
          material={materials['Plastico Negro']}
          position={[0.777, -0.154, 1.87]}
          scale={0.302}
        />
        <group position={[0.777, -0.158, 1.87]} scale={0.302}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.Metal}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.Metal}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EarTube_1.geometry}
          material={materials.Metal}
          position={[-1.103, 0, 1.029]}
          rotation={[0, 1.358, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.EarTube_2.geometry}
          material={materials.Metal}
          position={[0.138, 0, 1.016]}
          rotation={[0, -1.358, Math.PI]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Left_EarTips.geometry}
          material={materials['Plastico Blanco']}
          position={[-0.139, 0, 2.495]}
          rotation={[Math.PI / 2, 0, 1.979]}
          scale={0.07}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Right_EarTips.geometry}
          material={materials['Plastico Blanco']}
          position={[-0.826, 0, 2.507]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={0.07}
        />
        <group position={[-0.482, -0.001, -2.266]} rotation={[0, 1.571, 0]} scale={0.98}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath.geometry}
            material={materials['Plastico Negro']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.NurbsPath_1.geometry}
            material={materials['Plastico Negro']}
          />
        </group>
      </mesh>
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/Estetoscopio Material.glb')