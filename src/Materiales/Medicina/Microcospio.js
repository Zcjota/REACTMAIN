import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Microcospio(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/Microscopio Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials['Fierro Plomo']}
        position={[0.032, 0.724, -0.068]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials['Fierro Negro']}
        position={[0.956, 0.356, 1.12]}
        rotation={[0.025, -0.005, 0.001]}
        scale={[0.328, 0.064, 0.328]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials['Fierro Plomo']}
        position={[-1.701, 1.375, -0.06]}
        rotation={[0.025, -0.005, 0.001]}
        scale={[0.189, 0.165, 0.165]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials['Fierro Negro']}
        position={[-1.679, 1.48, -0.057]}
        rotation={[0.025, 0.003, 0.24]}
        scale={[0.145, 0.129, 0.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials['Fierro Negro']}
        position={[-0.605, 1.948, -0.041]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder005.geometry}
        material={materials['Fierro Negro']}
        position={[-0.605, 1.948, -0.041]}
        rotation={[0.025, -0.005, 0.001]}
        scale={0.427}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials['Fierro Negro']}
        position={[0.874, 2.084, -0.03]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials['Fierro Plomo']}
        position={[0.874, 2.084, -0.03]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder006.geometry}
        material={materials['Fierro Negro']}
        position={[0.435, 2.07, 0.345]}
        rotation={[1.596, 0.001, 0.005]}
        scale={1.059}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder009.geometry}
        material={materials['Fierro Negro']}
        position={[1.354, 2.773, 0.367]}
        rotation={[1.596, 0.001, 0.005]}
        scale={0.805}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder010.geometry}
        material={materials['Fierro Negro']}
        position={[0.032, 0.201, -0.081]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials['Fierro Plomo']}
        position={[-0.609, 4.48, 0.022]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials['Fierro Negro']}
        position={[0.436, 3.771, 0.01]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials['Fierro Plomo']}
        position={[-0.641, 5.424, 0.046]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials['Fierro Plomo']}
        position={[-0.642, 5.715, 0.053]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <group position={[-0.251, 5.931, 0.06]} rotation={[0.025, -0.005, -0.571]} scale={0.177}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_1.geometry}
          material={materials['Fierro Negro']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016_2.geometry}
          material={materials.Vidrio}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt003.geometry}
        material={materials['Fierro Negro']}
        position={[-0.129, 5.39, 0.046]}
        rotation={[1.596, 0.001, -1.566]}
        scale={0.013}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt004.geometry}
        material={materials['Fierro Negro']}
        position={[0.432, 2.053, 1.015]}
        rotation={[1.598, -0.478, 0.005]}
        scale={0.049}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt005.geometry}
        material={materials['Fierro Negro']}
        position={[1.352, 2.76, 0.931]}
        rotation={[1.596, 0.001, 0.005]}
        scale={0.062}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt006.geometry}
        material={materials['Fierro Platino']}
        position={[0.433, 3.736, 0.696]}
        rotation={[0.025, -0.005, 0.001]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Fierro Platino']}
        position={[0.433, 3.911, 0.7]}
        rotation={[0.025, -0.005, 0.001]}
        scale={[0.216, 0.216, 0.061]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder016.geometry}
        material={materials['Fierro Plomo']}
        position={[0.433, 3.762, 0.697]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Bolt007.geometry}
        material={materials['Fierro Negro']}
        position={[0.965, 3.8, 0.013]}
        rotation={[0.025, -0.005, 0.001]}
        scale={[0.008, 0.012, 0.008]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder017.geometry}
        material={materials['Fierro Plomo']}
        position={[0.965, 3.782, 0.012]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials.Vidrio}
        position={[-0.606, 2.58, -0.025]}
        rotation={[0.025, -0.005, 0.001]}
        scale={[0.348, 0.252, 0.348]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials.Vidrio}
        position={[-0.608, 3.769, 0.005]}
        rotation={[0.025, -0.005, 0.001]}
        scale={[0.172, 0.06, 0.172]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={nodes.Cylinder019.material}
        position={[-0.641, 4.923, 0.033]}
        rotation={[0.025, -0.005, 0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials['Fierro Plomo']}
        position={[-0.626, 4.806, 0.03]}
        rotation={[0.025, -0.005, 0.001]}
        scale={[0.196, 0.118, 0.189]}
      />
      <group position={[-0.615, 4.292, 0.018]} rotation={[0.025, -0.005, 0.001]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026.geometry}
          material={materials['Fierro Platino']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder026_1.geometry}
          material={materials['Fierro Negro']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials['Fierro Negro']}
        position={[-0.816, 4.816, 0.03]}
        rotation={[0.025, -0.005, -0.39]}
        scale={[0.49, 0.261, 0.498]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={materials['Fierro Negro']}
        position={[-0.816, 4.816, 0.03]}
        rotation={[0.025, -0.005, -0.39]}
        scale={[0.49, 0.31, 0.498]}
      />
      <group position={[-1.152, 4.522, 0.402]} rotation={[-0.357, 0.289, -0.626]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027.geometry}
          material={materials['Fierro Platino']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_1.geometry}
          material={materials['Fierro Negro']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/Microscopio Material.glb')