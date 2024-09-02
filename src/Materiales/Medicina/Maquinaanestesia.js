import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Maquinaanestesia(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/Maquina de Anestesia Material.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.099, -0.052, 2.563]} rotation={[Math.PI / 2, 0, -1.562]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine001.geometry}
          material={materials['Plastico Blanco']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine002.geometry}
          material={materials['Plastico Azul Oscuro']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine003.geometry}
          material={materials['Plastico Blanco']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine004.geometry}
          material={materials['Plastico Azul Oscuro']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine005.geometry}
          material={materials['Plastico Azul Oscuro']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine006.geometry}
          material={materials['Plastico Blanco']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine007.geometry}
          material={nodes.OT_Anesthesia_Machine007.material}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine008.geometry}
          material={materials['Plastico Azul']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine010.geometry}
          material={materials['Plastico Transparente']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine011.geometry}
          material={materials.Soporte}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine012.geometry}
          material={materials.Agarrardor}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine013.geometry}
          material={materials.Fierro}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine014.geometry}
          material={materials['Plastico Transparente']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine015.geometry}
          material={materials['Plastico Azul Oscuro']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine017.geometry}
          material={materials['Plastico Azul Oscuro']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine020.geometry}
          material={materials.Rueda}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine024.geometry}
          material={materials.Soporte}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine025.geometry}
          material={materials.Fierro}
          position={[-9.748, 0, 0]}
        />
        <group position={[-9.748, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['OT_Anesthesia_Machine-geom026'].geometry}
            material={materials['Soporte de tubo']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes['OT_Anesthesia_Machine-geom026_1'].geometry}
            material={materials.Agarrardor}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine027.geometry}
          material={materials['Plastico Transparente']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine028.geometry}
          material={materials['Plastico Azul']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine029.geometry}
          material={materials['Plastico Transparente']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine030.geometry}
          material={materials['Plastico Azul']}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine031.geometry}
          material={materials.Soporte}
          position={[-9.748, 0, 0]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.OT_Anesthesia_Machine032.geometry}
          material={materials['Plastico Azul']}
          position={[-9.748, 0, 0]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/Maquina de Anestesia Material.glb')
