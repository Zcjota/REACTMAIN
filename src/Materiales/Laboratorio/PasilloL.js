import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function PasilloL(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorio/ObjPasillos1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.MesaGrande}
        position={[-12.251, 1.484, 40.189]}
        scale={5.985}
      />
      <group position={[37.465, -4.479, 57.513]} scale={13.774}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_1.geometry}
          material={materials.Mesa_Mesa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle007_2.geometry}
          material={materials.MesaGrande}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Sillon}
        position={[-3.376, 6.426, 62.031]}
        scale={[17.263, 5.031, 3.472]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials.Toco1}
        position={[18.062, -2.187, 8.426]}
        scale={4.977}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials.MesaGrande}
        position={[28.421, 3.397, 3.784]}
        scale={5.838}
      />
      <group position={[27.146, -1.427, -11.205]} scale={4.977}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_1.geometry}
          material={materials.Toco1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle001_2.geometry}
          material={materials.Toco2}
        />
      </group>
      <group position={[39.946, -2.155, -3.58]} scale={4.977}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_1.geometry}
          material={materials.Toco1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Circle002_2.geometry}
          material={materials.Toco2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle004.geometry}
        material={materials.Toco1}
        position={[38.317, -2.617, 14.443]}
        scale={4.977}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle006.geometry}
        material={materials.Toco1}
        position={[24.998, -1.224, 16.478]}
        scale={4.977}
      />
      <group position={[53.074, -0.173, 7.123]} rotation={[Math.PI, 0, Math.PI]} scale={0.372}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Maseta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.Tierra_Maseta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_3.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_4.geometry}
          material={materials.Tallos}
        />
      </group>
      <group position={[-25.571, 3.871, 1.323]} scale={3.123}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials.Maseta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_2.geometry}
          material={materials.Tallos}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_3.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_4.geometry}
          material={materials.tIERRA_mASETA2}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Sillon}
        position={[-28.716, 5.659, 29.646]}
        rotation={[0, -1.559, 0]}
        scale={[17.985, 2.957, 1]}
      />
      <group position={[-24.912, 1.804, 57.374]} rotation={[Math.PI, 0, Math.PI]} scale={0.372}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.Maseta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_1.geometry}
          material={materials.Tierra_Maseta}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_2.geometry}
          material={materials.Hojas}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_3.geometry}
          material={materials.Tallos}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle007.geometry}
        material={materials.Toco1}
        position={[16.073, -2.322, -3.187]}
        scale={4.977}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_1002.geometry}
        material={materials.Patas_Mesas1}
        position={[29.188, 0.054, -2.477]}
        rotation={[-0.026, -0.001, -3.138]}
        scale={[5.072, 2.833, 2.833]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_1001.geometry}
        material={materials.Patas_Mesas1}
        position={[30.445, 0.012, 7.208]}
        rotation={[-0.006, -0.003, -3.125]}
        scale={[5.072, 2.833, 2.833]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_1003.geometry}
        material={materials.Patas_Mesas1}
        position={[-12.026, 2.641, 36.903]}
        rotation={[-0.043, 0.034, -3.13]}
        scale={[4.285, 2.393, 2.393]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.support_pipe_1004.geometry}
        material={materials.Patas_Mesas1}
        position={[-11.461, 1.939, 40.869]}
        rotation={[-0.007, 0.001, -3.14]}
        scale={[5.072, 2.833, 2.833]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Laboratorio/ObjPasillos1.glb')