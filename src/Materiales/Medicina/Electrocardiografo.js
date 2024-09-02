import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Electrocardiografo(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/Electrocardiagrafo Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c6a49.geometry}
        material={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c6a49.material}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492_1.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492012.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492013.geometry}
        material={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492013.material}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492014.geometry}
        material={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492014.material}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492015.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492016.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492017.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492018.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492040.geometry}
        material={materials['Plastico Blanco']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492108.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <group position={[0.511, 0.905, 2.45]} rotation={[-Math.PI, 0.056, -Math.PI]} scale={0.305}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_31_971109.geometry}
          material={materials['Plastico Plomo']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_31_971109_1.geometry}
          material={materials.Pantalla}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492110.geometry}
        material={materials['Plastico Blanco']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_MAC_5500_R16_GE_Marquette_MAC_5500_R16_316492111.geometry}
        material={materials['Plastico Plomo']}
        position={[0.511, 0.905, 2.45]}
        rotation={[-Math.PI, 0.056, -Math.PI]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c001.geometry}
        material={materials.Ruedas}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c002.geometry}
        material={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c002.material}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c003.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c004.geometry}
        material={materials.Ruedas}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c005.geometry}
        material={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c005.material}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c006.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c007.geometry}
        material={materials.Ruedas}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c008.geometry}
        material={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c008.material}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c009.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c010.geometry}
        material={materials.Ruedas}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c011.geometry}
        material={materials['Plastico Blanco']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c012.geometry}
        material={materials['Plastico Blanco']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c013.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c014.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c015.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c016.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c017.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c018.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c019.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c020.geometry}
        material={materials['Plastico Plomo']}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c021.geometry}
        material={materials.Metal}
        position={[0.465, -0.261, 2.643]}
        rotation={[0, 1.515, 0]}
        scale={0.305}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/Electrocardiagrafo Material.glb')