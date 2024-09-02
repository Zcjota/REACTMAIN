import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Mesaanatomia(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/Mesa de Anatomia Material.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Material}
        position={[-0.794, 0.316, -3.617]}
        scale={[0.02, 0.028, 0.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flat_bed.geometry}
        material={materials['Mat.2']}
        position={[4.106, 1.72, 1.051]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.02, 0.018, 0.028]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Superior.geometry}
        material={materials.Fierro}
        position={[-8.346, 5.563, 2.544]}
        scale={[4.26, 0.15, 1.698]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Manubrio.geometry}
        material={nodes.Manubrio.material}
        position={[-8.88, 4.786, 4.216]}
        rotation={[Math.PI, 1.42, 1.571]}
        scale={[2.005, 1.409, 1.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cuerpo.geometry}
        material={nodes.Cuerpo.material}
        position={[-8.078, 3.662, 2.497]}
        scale={[2.061, 1.878, 1.251]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base.geometry}
        material={materials.Fierro}
        position={[-6.103, 1.983, 4.001]}
        rotation={[0, -1.479, 0]}
        scale={[0.463, 0.189, 0.24]}
      />
      <group
        position={[-8.375, 3.688, 2.57]}
        rotation={[1.576, 0, 0]}
        scale={[0.017, 0.013, 0.028]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stand001_1.geometry}
          material={materials.Fierro}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.stand001_2.geometry}
          material={materials.Pantalla}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c6a49.geometry}
        material={materials.Fierro}
        position={[-9.951, 1.585, 3.432]}
        rotation={[0, 1.569, 0]}
        scale={[1.328, 0.918, 1.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c015.geometry}
        material={materials.Fierro}
        position={[-9.951, 1.585, 3.432]}
        rotation={[0, 1.569, 0]}
        scale={[1.382, 0.955, 1.456]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c004.geometry}
        material={materials.Ruedas}
        position={[-9.951, 1.585, 3.432]}
        rotation={[0, 1.569, 0]}
        scale={[1.328, 0.918, 1.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c003.geometry}
        material={materials.Fierro}
        position={[-9.951, 1.585, 3.432]}
        rotation={[0, 1.569, 0]}
        scale={[1.328, 0.918, 1.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c002.geometry}
        material={materials.Fierro}
        position={[-9.951, 1.585, 3.432]}
        rotation={[0, 1.569, 0]}
        scale={[1.328, 0.918, 1.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c001.geometry}
        material={materials.Ruedas}
        position={[-9.951, 1.585, 3.432]}
        rotation={[0, 1.569, 0]}
        scale={[1.328, 0.918, 1.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c.geometry}
        material={materials.Fierro}
        position={[-9.951, 1.585, 3.432]}
        rotation={[0, 1.569, 0]}
        scale={[1.328, 0.918, 1.399]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base001.geometry}
        material={nodes.Base001.material}
        position={[-5.184, 1.874, 4.434]}
        scale={[1.192, 0.306, 0.164]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c005.geometry}
        material={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c005.material}
        position={[-6.085, 1.268, 4.427]}
        rotation={[-0.079, 1.533, 0]}
        scale={[1.776, 1.215, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c006.geometry}
        material={materials.Fierro}
        position={[-6.085, 1.268, 4.427]}
        rotation={[-0.079, 1.533, 0]}
        scale={[1.776, 1.215, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base002.geometry}
        material={nodes.Base002.material}
        position={[-6.103, 1.983, 4.001]}
        rotation={[0, -1.479, 0]}
        scale={[0.463, 0.189, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base003.geometry}
        material={nodes.Base003.material}
        position={[-5.184, 1.874, 4.434]}
        scale={[1.192, 0.306, 0.164]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c007.geometry}
        material={materials.Ruedas}
        position={[-6.085, 1.268, 4.427]}
        rotation={[-0.079, 1.533, 0]}
        scale={[1.776, 1.215, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c008.geometry}
        material={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c008.material}
        position={[-6.085, 1.268, 4.427]}
        rotation={[-0.079, 1.533, 0]}
        scale={[1.776, 1.215, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c009.geometry}
        material={materials.Fierro}
        position={[-6.185, 1.201, 0.473]}
        rotation={[-0.079, 1.533, 0]}
        scale={[1.776, 1.215, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.GE_Marquette_ComputerOnWheels_R16_GE_Marquette_Computer_f5c010.geometry}
        material={materials.Ruedas}
        position={[-6.185, 1.201, 0.473]}
        rotation={[-0.079, 1.533, 0]}
        scale={[1.776, 1.215, 1.429]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base004.geometry}
        material={nodes.Base004.material}
        position={[-5.284, 1.808, 0.48]}
        scale={[1.192, 0.306, 0.164]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Base005.geometry}
        material={materials.Fierro}
        position={[-6.148, 1.873, 1.002]}
        rotation={[Math.PI, -1.533, Math.PI]}
        scale={[0.463, 0.189, 0.24]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Manubrio001.geometry}
        material={nodes.Manubrio001.material}
        position={[-6.181, 2.802, 4.013]}
        rotation={[Math.PI, 1.556, 1.571]}
        scale={[2.005, 1.409, 1.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Manubrio002.geometry}
        material={nodes.Manubrio002.material}
        position={[-8.834, 4.783, 4.552]}
        rotation={[0, 0.048, -Math.PI / 2]}
        scale={[2.005, 1.409, 1.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Manubrio003.geometry}
        material={nodes.Manubrio003.material}
        position={[-6.179, 2.801, 4.369]}
        rotation={[0, 0.048, -Math.PI / 2]}
        scale={[2.005, 1.006, 1.011]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/Mesa de Anatomia Material.glb')
