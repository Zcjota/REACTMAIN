import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AtencionCliente(props) {
  const { nodes, materials } = useGLTF('/Materiales/Pasillo/Objetos Atencion Cliente Material.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[-5.61, 0, 23.097]} scale={[1.328, 1.58, 1.303]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials.BOT}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.TOP}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Plastico}
        />
      </group>
      <group position={[15.705, 2.13, 10.51]} rotation={[-1.494, -1.517, 0.077]} scale={1.672}>
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
          material={materials['Material.005']}
        />
      </group>
      <group
        position={[19.146, -16.275, -2.489]}
        rotation={[-1.641, 0.093, 1.502]}
        scale={[2.868, 2.808, 4.072]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_1.geometry}
          material={materials.Papel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane001_2.geometry}
          material={materials['Capa Roja']}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials['Material.003']}
        position={[16.055, 0, 2.242]}
        scale={[1.387, 1, 10.96]}
      />
      <group
        position={[18.969, -16.275, 4.618]}
        rotation={[-1.641, 0.093, 1.502]}
        scale={[2.868, 2.808, 4.072]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_1.geometry}
          material={materials.Papel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_2.geometry}
          material={materials['Capa Roja']}
        />
      </group>
      <group
        position={[18.987, -16.275, 1.173]}
        rotation={[-1.641, 0.093, 1.502]}
        scale={[2.868, 2.808, 4.072]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_1.geometry}
          material={materials.Papel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane003_2.geometry}
          material={materials['Capa Amarrila']}
        />
      </group>
      <group
        position={[19.146, -16.275, -9.591]}
        rotation={[-1.641, 0.093, 1.502]}
        scale={[2.868, 2.808, 4.072]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_1.geometry}
          material={materials.Papel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_2.geometry}
          material={materials['Capa Roja']}
        />
      </group>
      <group
        position={[18.987, -16.275, -5.93]}
        rotation={[-1.641, 0.093, 1.502]}
        scale={[2.868, 2.808, 4.072]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.Papel}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_2.geometry}
          material={materials['Capa Amarrila']}
        />
      </group>
      <group position={[0, 6.694, 0]} scale={[3.085, 1.22, 3.085]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Cajon}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_1.geometry}
          material={materials.Manija}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Pasillo/Objetos Atencion Cliente Material.glb')