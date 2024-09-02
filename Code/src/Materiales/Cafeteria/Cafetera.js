import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Cafetera(props) {
  const { nodes, materials } = useGLTF('/Materiales/Cafeteria/cafeterafinal1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[4.499, 3.811, -1.418]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_1.geometry}
          material={materials['B_3.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_2.geometry}
          material={materials['W_3.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_3.geometry}
          material={materials['S_3.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_4.geometry}
          material={materials['R_2.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015_5.geometry}
          material={materials['Material.013']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle035.geometry}
          material={materials['B_3.003']}
          position={[0.587, 0, -0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle036.geometry}
          material={materials['B_3.003']}
          position={[0.519, 0, -1.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle037.geometry}
          material={materials['B_3.003']}
          position={[-0.519, 0, -1.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle038.geometry}
          material={materials['B_3.003']}
          position={[-0.587, 0, -0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle039.geometry}
          material={materials['B_3.003']}
          position={[-0.647, 0, 0.542]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle040.geometry}
          material={materials['B_3.003']}
          position={[0, 0, 1.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle041.geometry}
          material={materials['B_3.003']}
          position={[0.647, 0, 0.542]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle047.geometry}
          material={materials['B_3.003']}
          position={[0, 3.535, -1.562]}
          rotation={[-1.143, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle045.geometry}
        material={materials['Glass.001']}
        position={[4.499, 4.185, -1.467]}
        rotation={[0, 0.976, 0]}
        scale={1.131}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle024.geometry}
          material={materials['KAFFEE.001']}
          rotation={[Math.PI, -1.222, Math.PI]}
        />
        <group position={[0, -0.013, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012_1.geometry}
            material={materials['b.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle012_2.geometry}
            material={materials['s.001']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle025.geometry}
            material={materials['b.001']}
            position={[-0.615, 1.202, 0]}
            rotation={[0, 0, 0.03]}
          />
        </group>
      </mesh>
      <group position={[4.499, 3.811, -1.418]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle018_1.geometry}
          material={materials.W_3}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle018_2.geometry}
          material={materials['Material.005']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle018_3.geometry}
          material={materials['Material.007']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle033.geometry}
        material={materials.B_3}
        position={[5.146, 3.811, -0.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle032.geometry}
        material={materials.B_3}
        position={[4.499, 3.811, -0.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle031.geometry}
        material={materials.B_3}
        position={[3.853, 3.811, -0.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle030.geometry}
        material={materials.B_3}
        position={[3.981, 3.811, -2.491]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle029.geometry}
        material={materials.B_3}
        position={[5.018, 3.811, -2.491]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle028.geometry}
        material={materials.B_3}
        position={[3.913, 3.811, -1.717]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle027.geometry}
        material={materials.B_3}
        position={[5.086, 3.811, -1.717]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle026.geometry}
        material={materials.B_3}
        position={[4.499, 7.347, -2.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle023.geometry}
        material={materials['B_3.003']}
        position={[4.499, 7.347, -2.979]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle022.geometry}
        material={materials['B_3.003']}
        position={[5.086, 3.811, -1.717]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle021.geometry}
        material={materials['B_3.003']}
        position={[3.913, 3.811, -1.717]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle020.geometry}
        material={materials['B_3.003']}
        position={[5.018, 3.811, -2.491]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle019.geometry}
        material={materials['B_3.003']}
        position={[3.981, 3.811, -2.491]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle018.geometry}
        material={materials['B_3.003']}
        position={[3.853, 3.811, -0.875]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle017.geometry}
        material={materials['B_3.003']}
        position={[4.499, 3.811, -0.308]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle016.geometry}
        material={materials['B_3.003']}
        position={[5.146, 3.811, -0.875]}
      />
      <group position={[4.499, 3.811, -1.418]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials['W_3.003']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials['Material.004']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_3.geometry}
          material={materials['Material.011']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials['Glass.002']}
        position={[4.499, 4.185, -1.467]}
        rotation={[0, 0.976, 0]}
        scale={1.131}>
        <group position={[0, -0.013, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle010_1.geometry}
            material={materials['b.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle010_2.geometry}
            material={materials['s.002']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle014.geometry}
            material={materials['b.002']}
            position={[-0.615, 1.202, 0]}
            rotation={[0, 0, 0.03]}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle015.geometry}
          material={materials.KAFFEE}
          rotation={[Math.PI, -1.222, Math.PI]}
        />
      </mesh>
      <group position={[4.499, 3.811, -1.418]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={materials['B_3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_2.geometry}
          material={materials['W_3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_3.geometry}
          material={materials['S_3.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_4.geometry}
          material={materials['R_2.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_5.geometry}
          material={materials['Material.009']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle000.geometry}
          material={materials.B_3}
          position={[0, 3.535, -1.562]}
          rotation={[-1.143, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials.B_3}
          position={[0.647, 0, 0.542]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle008.geometry}
          material={materials.B_3}
          position={[0, 0, 1.11]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle009.geometry}
          material={materials.B_3}
          position={[-0.647, 0, 0.542]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle010.geometry}
          material={materials.B_3}
          position={[-0.587, 0, -0.3]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle011.geometry}
          material={materials.B_3}
          position={[-0.519, 0, -1.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle012.geometry}
          material={materials.B_3}
          position={[0.519, 0, -1.073]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle013.geometry}
          material={materials.B_3}
          position={[0.587, 0, -0.3]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Cafeteria/cafeterafinal1.glb')