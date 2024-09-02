import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pupitre(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/pupitre2.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-2.021, -0.312, 0]}
        scale={[1, 0.33, 1]}
      />
      <group position={[-0.54, 0, -0.536]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.male_genericMesh.geometry}
          material={materials.material0}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.male_genericMesh_1.geometry}
          material={materials['material0.001']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-0.548, 0.994, -0.649]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[-0.552, 1.105, -0.796]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.348, 0.628, 0.348]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve001.geometry}
        material={nodes.BezierCurve001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve002.geometry}
        material={nodes.BezierCurve002.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve003.geometry}
        material={nodes.BezierCurve003.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_1001.geometry}
        material={nodes.support_pipe_1001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_3001.geometry}
        material={nodes.support_pipe_3001.material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Table_dask.geometry}
        material={materials.Chair}
        position={[-0.554, 0.996, 0.011]}
        scale={0.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Chair}
        position={[-0.548, 0.886, -0.5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_1.geometry}
        material={materials.Chair}
        position={[-0.676, 0.789, -0.03]}
        scale={0.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Support_pipe_2.geometry}
        material={materials.Chair}
        position={[0, 0, 0.255]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_3.geometry}
        material={materials.Chair}
        position={[0, 0, 0.074]}
        scale={0.66}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BezierCurve.geometry}
        material={materials.Chair}
        position={[-1.065, 0.586, 0]}
        rotation={[-0.453, 1.571, 0]}
        scale={0.66}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/pupitre2.glb')
