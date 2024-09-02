import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Baño(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Materiales/Baño/ObjetosBaño1.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <mesh
          name="OutBoddy"
          castShadow
          receiveShadow
          geometry={nodes.OutBoddy.geometry}
          material={materials.Puerta}
          position={[-8.785, 1.734, 0.006]}
          rotation={[0, 1.551, 0]}
          scale={[0.03, 1.129, 0.071]}
        />
        <mesh
          name="DoorBoddy"
          castShadow
          receiveShadow
          geometry={nodes.DoorBoddy.geometry}
          material={materials.Puerta}
          position={[-8.752, 1.229, 0.651]}
          rotation={[0, 1.559, 0]}
          scale={[0.644, 0.083, 0.033]}>
          <mesh
            name="Locker"
            castShadow
            receiveShadow
            geometry={nodes.Locker.geometry}
            material={materials.Puerta}
            position={[1.846, 1.228, -1.564]}
            rotation={[-Math.PI, 0.247, -Math.PI]}
            scale={[0.067, 1.757, 0.099]}>
            <mesh
              name="Mesh"
              castShadow
              receiveShadow
              geometry={nodes.Mesh.geometry}
              material={materials.Puerta}
              position={[-0.082, 0.437, -1.293]}
              scale={[0.421, 0.11, 4.891]}
            />
          </mesh>
          <group
            name="Locker001"
            position={[1.842, 1.228, 1.238]}
            rotation={[0, -0.247, 0]}
            scale={[0.067, 1.757, 0.099]}>
            <mesh
              name="Cube004"
              castShadow
              receiveShadow
              geometry={nodes.Cube004.geometry}
              material={materials['text.002']}
            />
            <mesh
              name="Cube004_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube004_1.geometry}
              material={materials.Puerta}
            />
            <mesh
              name="Mesh001"
              castShadow
              receiveShadow
              geometry={nodes.Mesh001.geometry}
              material={materials['text.003']}
              position={[0.094, 0.427, -0.774]}
              rotation={[0, 0.098, -Math.PI]}
              scale={[0.419, 0.107, 4.779]}
            />
          </group>
        </mesh>
        <mesh
          name="Cone001"
          castShadow
          receiveShadow
          geometry={nodes.Cone001.geometry}
          material={nodes.Cone001.material}
          position={[0, 0, 5.807]}
          scale={0.052}
        />
        <group
          name="Circle"
          position={[4.836, 3.185, -1.627]}
          rotation={[-2.807, -0.003, 0.033]}
          scale={0.828}>
          <mesh
            name="Circle003"
            castShadow
            receiveShadow
            geometry={nodes.Circle003.geometry}
            material={materials.Baño}
          />
          <mesh
            name="Circle003_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.Papelera}
          />
          <mesh
            name="Circle003_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle003_2.geometry}
            material={materials.Papel}
          />
        </group>
        <mesh
          name="Cone002"
          castShadow
          receiveShadow
          geometry={nodes.Cone002.geometry}
          material={nodes.Cone002.material}
          position={[0, 0, 5.807]}
          scale={0.052}
        />
        <mesh
          name="Cylinder003"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003.geometry}
          material={materials.Valve}
          position={[4.27, 1.119, 2.173]}
          rotation={[-1.602, 0, 0]}
          scale={[0.023, 0.084, 0.023]}
        />
        <mesh
          name="Cylinder001"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={materials.Valve}
          position={[3.218, 1.119, 2.173]}
          rotation={[-1.602, 0, 0]}
          scale={[0.023, 0.084, 0.023]}
        />
        <mesh
          name="Cylinder002"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials.Valve}
          position={[2.322, 1.119, 2.173]}
          rotation={[-1.602, 0, 0]}
          scale={[0.023, 0.084, 0.023]}
        />
        <mesh
          name="Cylinder004"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials.Valve}
          position={[1.442, 1.119, 2.173]}
          rotation={[-1.602, 0, 0]}
          scale={[0.023, 0.084, 0.023]}
        />
        <mesh
          name="OutBoddy001"
          castShadow
          receiveShadow
          geometry={nodes.OutBoddy001.geometry}
          material={materials.Puerta}
          position={[-8.785, 1.734, 0.006]}
          rotation={[0, 1.551, 0]}
          scale={[0.03, 1.129, 0.071]}
        />
        <mesh
          name="DoorBoddy001"
          castShadow
          receiveShadow
          geometry={nodes.DoorBoddy001.geometry}
          material={materials.Puerta}
          position={[-8.752, 1.229, 0.651]}
          rotation={[0, 1.559, 0]}
          scale={[0.644, 0.083, 0.033]}
        />
        <mesh
          name="OutBoddy002"
          castShadow
          receiveShadow
          geometry={nodes.OutBoddy002.geometry}
          material={materials.Puerta}
          position={[-8.465, 1.032, -2.2]}
          rotation={[0, 1.551, 0]}
          scale={[0.03, 1.129, 0.071]}
        />
        <mesh
          name="DoorBoddy002"
          castShadow
          receiveShadow
          geometry={nodes.DoorBoddy002.geometry}
          material={materials.Puerta}
          position={[-8.431, 0.527, -1.556]}
          rotation={[0, 1.559, 0]}
          scale={[0.644, 0.083, 0.033]}>
          <group
            name="Locker002"
            position={[1.842, 1.228, 1.238]}
            rotation={[0, -0.247, 0]}
            scale={[0.067, 1.757, 0.099]}>
            <mesh
              name="Cube008"
              castShadow
              receiveShadow
              geometry={nodes.Cube008.geometry}
              material={materials['text.002']}
            />
            <mesh
              name="Cube008_1"
              castShadow
              receiveShadow
              geometry={nodes.Cube008_1.geometry}
              material={materials.Puerta}
            />
            <mesh
              name="Mesh002"
              castShadow
              receiveShadow
              geometry={nodes.Mesh002.geometry}
              material={materials['text.003']}
              position={[0.094, 0.427, -0.774]}
              rotation={[0, 0.098, -Math.PI]}
              scale={[0.419, 0.107, 4.779]}
            />
          </group>
          <mesh
            name="Locker003"
            castShadow
            receiveShadow
            geometry={nodes.Locker003.geometry}
            material={materials.Puerta}
            position={[1.846, 1.228, -1.564]}
            rotation={[-Math.PI, 0.247, -Math.PI]}
            scale={[0.067, 1.757, 0.099]}>
            <mesh
              name="Mesh003"
              castShadow
              receiveShadow
              geometry={nodes.Mesh003.geometry}
              material={materials.Puerta}
              position={[-0.082, 0.437, -1.293]}
              scale={[0.421, 0.11, 4.891]}
            />
          </mesh>
        </mesh>
        <mesh
          name="OutBoddy003"
          castShadow
          receiveShadow
          geometry={nodes.OutBoddy003.geometry}
          material={materials.Puerta}
          position={[-8.465, 1.032, -2.2]}
          rotation={[0, 1.551, 0]}
          scale={[0.03, 1.129, 0.071]}
        />
        <mesh
          name="DoorBoddy003"
          castShadow
          receiveShadow
          geometry={nodes.DoorBoddy003.geometry}
          material={materials.Puerta}
          position={[-8.431, 0.527, -1.556]}
          rotation={[0, 1.559, 0]}
          scale={[0.644, 0.083, 0.033]}
        />
        <mesh
          name="Upright"
          castShadow
          receiveShadow
          geometry={nodes.Upright.geometry}
          material={nodes.Upright.material}
          position={[4.819, 0.431, 1.026]}
          rotation={[0, -0.077, Math.PI / 2]}
          scale={0.013}
        />
        <mesh
          name="UP_Bin"
          castShadow
          receiveShadow
          geometry={nodes.UP_Bin.geometry}
          material={materials.BasureroCabeza}
          position={[4.603, 0.86, 1.016]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.013}
        />
        <mesh
          name="UnderHandle_UP"
          castShadow
          receiveShadow
          geometry={nodes.UnderHandle_UP.geometry}
          material={materials.BlackBack}
          position={[4.866, 0.755, 1.03]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.013}
        />
        <mesh
          name="UnderHandle_Down"
          castShadow
          receiveShadow
          geometry={nodes.UnderHandle_Down.geometry}
          material={materials.BlackBack}
          position={[4.866, 0.116, 1.03]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.013}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[2.236, 1.376, -5.537]}
          rotation={[-Math.PI, 0.009, -Math.PI]}
          scale={-0.058}
        />
        <mesh
          name="Shink"
          castShadow
          receiveShadow
          geometry={nodes.Shink.geometry}
          material={materials.PastillaUrinal}
          position={[2.24, 1.396, -5.54]}
          rotation={[Math.PI, 0.009, 0]}
          scale={0.042}
        />
        <mesh
          name="Plane"
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={materials.Baño}
          position={[2.222, 1.659, -3.887]}
          rotation={[1.573, 0, -3.133]}
          scale={0.368}
        />
        <mesh
          name="Middle_black"
          castShadow
          receiveShadow
          geometry={nodes.Middle_black.geometry}
          material={materials.BasureroBase}
          position={[4.479, 0.845, 1.006]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.013}
        />
        <mesh
          name="Middle_Bin"
          castShadow
          receiveShadow
          geometry={nodes.Middle_Bin.geometry}
          material={materials.BasureroCabeza}
          position={[4.481, 0.848, 1.005]}
          rotation={[1.667, -0.892, 1.694]}
          scale={0.013}
        />
        <mesh
          name="Horizontally_Up"
          castShadow
          receiveShadow
          geometry={nodes.Horizontally_Up.geometry}
          material={nodes.Horizontally_Up.material}
          position={[4.805, 0.68, 1.015]}
          rotation={[-Math.PI / 2, 0, 1.494]}
          scale={0.013}
        />
        <mesh
          name="Horizontally_Down"
          castShadow
          receiveShadow
          geometry={nodes.Horizontally_Down.geometry}
          material={materials.Down_RecycleBin}
          position={[4.796, 0.21, 1.018]}
          rotation={[-Math.PI / 2, 0, 1.494]}
          scale={0.013}
        />
        <mesh
          name="Handle_UP"
          castShadow
          receiveShadow
          geometry={nodes.Handle_UP.geometry}
          material={materials.ReflectBack}
          position={[4.866, 0.755, 1.03]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.013}
        />
        <mesh
          name="Handle_DOWN"
          castShadow
          receiveShadow
          geometry={nodes.Handle_DOWN.geometry}
          material={materials.ReflectBack}
          position={[4.866, 0.116, 1.03]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.013}
        />
        <group
          name="Down_Bin"
          position={[4.634, 0.168, 1.021]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.013}>
          <mesh
            name="Mesh013"
            castShadow
            receiveShadow
            geometry={nodes.Mesh013.geometry}
            material={nodes.Mesh013.material}
          />
          <mesh
            name="Mesh013_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh013_1.geometry}
            material={materials.BasureroBase}
          />
        </group>
        <mesh
          name="Cylinder"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder.geometry}
          material={materials['Valve.001']}
          position={[2.25, 2.39, -5.609]}
          rotation={[-Math.PI, 0.009, -Math.PI]}
          scale={0.033}
        />
        <mesh
          name="Upright001"
          castShadow
          receiveShadow
          geometry={nodes.Upright001.geometry}
          material={nodes.Upright001.material}
          position={[1.573, 0.494, -3.775]}
          rotation={[Math.PI, 0.025, -Math.PI / 2]}
          scale={0.013}
        />
        <mesh
          name="UP_Bin001"
          castShadow
          receiveShadow
          geometry={nodes.UP_Bin001.geometry}
          material={materials.BasureroCabeza}
          position={[1.789, 0.923, -3.776]}
          rotation={[Math.PI / 2, 0, -1.546]}
          scale={0.013}
        />
        <mesh
          name="UnderHandle_UP001"
          castShadow
          receiveShadow
          geometry={nodes.UnderHandle_UP001.geometry}
          material={materials.BlackBack}
          position={[1.526, 0.818, -3.776]}
          rotation={[Math.PI / 2, 0, -1.546]}
          scale={0.013}
        />
        <mesh
          name="UnderHandle_Down001"
          castShadow
          receiveShadow
          geometry={nodes.UnderHandle_Down001.geometry}
          material={materials.BlackBack}
          position={[1.526, 0.179, -3.776]}
          rotation={[Math.PI / 2, 0, -1.546]}
          scale={0.013}
        />
        <mesh
          name="Middle_black001"
          castShadow
          receiveShadow
          geometry={nodes.Middle_black001.geometry}
          material={materials.BasureroBase}
          position={[1.913, 0.908, -3.772]}
          rotation={[Math.PI / 2, 0, -1.546]}
          scale={0.013}
        />
        <mesh
          name="Middle_Bin001"
          castShadow
          receiveShadow
          geometry={nodes.Middle_Bin001.geometry}
          material={materials.BasureroCabeza}
          position={[1.911, 0.911, -3.771]}
          rotation={[1.54, 0.895, -1.531]}
          scale={0.013}
        />
        <mesh
          name="Horizontally_Up001"
          castShadow
          receiveShadow
          geometry={nodes.Horizontally_Up001.geometry}
          material={nodes.Horizontally_Up001.material}
          position={[1.596, 0.744, -3.767]}
          rotation={[-Math.PI / 2, 0, -1.596]}
          scale={0.013}
        />
        <mesh
          name="Horizontally_Down001"
          castShadow
          receiveShadow
          geometry={nodes.Horizontally_Down001.geometry}
          material={materials.Down_RecycleBin}
          position={[1.596, 0.273, -3.767]}
          rotation={[-Math.PI / 2, 0, -1.596]}
          scale={0.013}
        />
        <mesh
          name="Handle_UP001"
          castShadow
          receiveShadow
          geometry={nodes.Handle_UP001.geometry}
          material={materials.ReflectBack}
          position={[1.526, 0.818, -3.776]}
          rotation={[Math.PI / 2, 0, -1.546]}
          scale={0.013}
        />
        <mesh
          name="Handle_DOWN001"
          castShadow
          receiveShadow
          geometry={nodes.Handle_DOWN001.geometry}
          material={materials.ReflectBack}
          position={[1.526, 0.179, -3.776]}
          rotation={[Math.PI / 2, 0, -1.546]}
          scale={0.013}
        />
        <mesh
          name="Down_Bin001"
          castShadow
          receiveShadow
          geometry={nodes.Down_Bin001.geometry}
          material={materials.BasureroBase}
          position={[1.758, 0.231, -3.778]}
          rotation={[Math.PI / 2, 0, -1.546]}
          scale={0.013}
        />
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={nodes.Sphere001.material}
          position={[3.238, 1.376, -5.537]}
          rotation={[-Math.PI, 0.009, -Math.PI]}
          scale={-0.058}
        />
        <mesh
          name="Shink001"
          castShadow
          receiveShadow
          geometry={nodes.Shink001.geometry}
          material={materials.PastillaUrinal}
          position={[3.242, 1.396, -5.54]}
          rotation={[Math.PI, 0.009, 0]}
          scale={0.042}
        />
        <mesh
          name="Plane001"
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials.Baño}
          position={[3.224, 1.659, -3.887]}
          rotation={[1.573, 0, -3.133]}
          scale={0.368}
        />
        <mesh
          name="Cylinder005"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['Valve.001']}
          position={[3.252, 2.39, -5.609]}
          rotation={[-Math.PI, 0.009, -Math.PI]}
          scale={0.033}
        />
        <mesh
          name="Sphere002"
          castShadow
          receiveShadow
          geometry={nodes.Sphere002.geometry}
          material={nodes.Sphere002.material}
          position={[4.262, 1.376, -5.537]}
          rotation={[-Math.PI, 0.009, -Math.PI]}
          scale={-0.058}
        />
        <mesh
          name="Shink002"
          castShadow
          receiveShadow
          geometry={nodes.Shink002.geometry}
          material={materials.PastillaUrinal}
          position={[4.266, 1.396, -5.54]}
          rotation={[Math.PI, 0.009, 0]}
          scale={0.042}
        />
        <mesh
          name="Plane002"
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials.Baño}
          position={[4.248, 1.659, -3.887]}
          rotation={[1.573, 0, -3.133]}
          scale={0.368}
        />
        <mesh
          name="Cylinder006"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['Valve.001']}
          position={[4.276, 2.39, -5.609]}
          rotation={[-Math.PI, 0.009, -Math.PI]}
          scale={0.033}
        />
        <mesh
          name="Sphere003"
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={nodes.Sphere003.material}
          position={[1.706, 1.376, -4.636]}
          rotation={[0, -1.557, 0]}
          scale={-0.058}
        />
        <mesh
          name="Shink003"
          castShadow
          receiveShadow
          geometry={nodes.Shink003.geometry}
          material={materials.PastillaUrinal}
          position={[1.704, 1.396, -4.64]}
          rotation={[0, -1.557, 3.142]}
          scale={0.042}
        />
        <mesh
          name="Plane003"
          castShadow
          receiveShadow
          geometry={nodes.Plane003.geometry}
          material={materials.Baño}
          position={[3.357, 1.659, -4.659]}
          rotation={[1.571, -0.002, 1.557]}
          scale={0.368}
        />
        <mesh
          name="Cylinder007"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder007.geometry}
          material={materials['Valve.001']}
          position={[1.634, 2.39, -4.648]}
          rotation={[0, -1.557, 0]}
          scale={0.033}
        />
        <group
          name="Plane017"
          position={[5.809, 0.11, -0.081]}
          rotation={[0.082, -1.554, 0.082]}
          scale={1.212}>
          <mesh
            name="Plane018_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane018_1.geometry}
            material={materials.Puerta}
          />
          <mesh
            name="Plane018_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane018_2.geometry}
            material={materials.Glossy}
          />
          <group name="Plane018" position={[-0.435, 0.249, 0.101]}>
            <mesh
              name="Plane019"
              castShadow
              receiveShadow
              geometry={nodes.Plane019.geometry}
              material={materials.Puerta}
            />
            <mesh
              name="Plane019_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane019_1.geometry}
              material={materials.Glossy}
            />
            <mesh
              name="Circle002"
              castShadow
              receiveShadow
              geometry={nodes.Circle002.geometry}
              material={materials.Puerta}
              position={[0.81, 0.798, -0.155]}
              scale={2.472}
            />
            <mesh
              name="Plane016"
              castShadow
              receiveShadow
              geometry={nodes.Plane016.geometry}
              material={materials.Door}
              position={[0.852, 0.782, -0.017]}
            />
          </group>
        </group>
        <mesh
          name="Plane005"
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.Puerta}
          position={[5.738, 0.301, -0.077]}
          rotation={[-0.009, 0.047, 1.57]}
          scale={[0.012, 0.026, 0.506]}
        />
        <group
          name="Plane007"
          position={[5.718, 0.109, -3.039]}
          rotation={[-2.057, -1.558, -2.058]}
          scale={1.212}>
          <mesh
            name="Plane009_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={materials.Puerta}
          />
          <mesh
            name="Plane009_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane009_2.geometry}
            material={materials.Glossy}
          />
          <group name="Plane006" position={[-0.435, 0.249, 0.101]}>
            <mesh
              name="Plane008_1"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_1.geometry}
              material={materials.Puerta}
            />
            <mesh
              name="Plane008_2"
              castShadow
              receiveShadow
              geometry={nodes.Plane008_2.geometry}
              material={materials.Glossy}
            />
            <mesh
              name="Circle001"
              castShadow
              receiveShadow
              geometry={nodes.Circle001.geometry}
              material={materials.Puerta}
              position={[0.81, 0.798, -0.155]}
              scale={2.472}
            />
            <mesh
              name="Plane008"
              castShadow
              receiveShadow
              geometry={nodes.Plane008.geometry}
              material={materials.Door}
              position={[0.852, 0.782, -0.017]}
            />
          </group>
        </group>
        <mesh
          name="Plane010"
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials.Puerta}
          position={[5.65, 0.301, -3.036]}
          rotation={[-0.008, 0.025, 1.557]}
          scale={[0.012, 0.026, 0.506]}
        />
        <mesh
          name="G-__555564"
          castShadow
          receiveShadow
          geometry={nodes['G-__555564'].geometry}
          material={materials['Color M00']}
          position={[1.363, 1.123, 1.248]}
          rotation={[-Math.PI, 0.003, -Math.PI]}
        />
        <mesh
          name="Plane009"
          castShadow
          receiveShadow
          geometry={nodes.Plane009.geometry}
          material={materials['Material.010']}
          position={[-2.669, 0.175, 0.913]}
          scale={[0.576, 1, 0.323]}
        />
        <group
          name="Plane004"
          position={[1.448, 1.875, 2.025]}
          rotation={[-1.569, 0, 0]}
          scale={[0.864, 0.864, 0.604]}>
          <mesh
            name="Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Plane001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials.Marco}
          />
        </group>
        <mesh
          name="Cabinet1001"
          castShadow
          receiveShadow
          geometry={nodes.Cabinet1001.geometry}
          material={materials.Mesa}
          position={[2.394, 0.265, 2.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[3.176, 0.992, 0.992]}>
          <mesh
            name="Cabinet1_Door001"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1_Door001.geometry}
            material={materials.Mesa}
            position={[0.599, 0.283, 0.591]}
            scale={[1, 0.604, 1]}
          />
          <mesh
            name="Countertop1001"
            castShadow
            receiveShadow
            geometry={nodes.Countertop1001.geometry}
            material={materials.Mesa}
            position={[0, 0.7, 0]}
          />
        </mesh>
        <mesh
          name="Cabinet1"
          castShadow
          receiveShadow
          geometry={nodes.Cabinet1.geometry}
          material={materials.Mesa}
          position={[-3.269, 0.351, -0.844]}>
          <mesh
            name="Baseboard1"
            castShadow
            receiveShadow
            geometry={nodes.Baseboard1.geometry}
            material={materials.Mesa}
            position={[0, -0.16, 0.531]}
          />
          <mesh
            name="Cabinet1_Door"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1_Door.geometry}
            material={materials.Mesa}
            position={[0.599, 0, 0.591]}>
            <mesh
              name="Handle"
              castShadow
              receiveShadow
              geometry={nodes.Handle.geometry}
              material={nodes.Handle.material}
              position={[-0.545, 0.576, 0.018]}
              rotation={[0, 0, -Math.PI / 2]}
            />
          </mesh>
          <mesh
            name="Countertop1"
            castShadow
            receiveShadow
            geometry={nodes.Countertop1.geometry}
            material={materials.Mesa}
            position={[0, 0.7, 0]}
          />
        </mesh>
        <mesh
          name="Bolt_Caps"
          castShadow
          receiveShadow
          geometry={nodes.Bolt_Caps.geometry}
          material={nodes.Bolt_Caps.material}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Bowl"
          castShadow
          receiveShadow
          geometry={nodes.Bowl.geometry}
          material={materials.Baño}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Drainage_Tube"
          castShadow
          receiveShadow
          geometry={nodes.Drainage_Tube.geometry}
          material={nodes.Drainage_Tube.material}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Flush_Button"
          castShadow
          receiveShadow
          geometry={nodes.Flush_Button.geometry}
          material={nodes.Flush_Button.material}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Hinges"
          castShadow
          receiveShadow
          geometry={nodes.Hinges.geometry}
          material={nodes.Hinges.material}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Lid"
          castShadow
          receiveShadow
          geometry={nodes.Lid.geometry}
          material={materials.Baño}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Seat"
          castShadow
          receiveShadow
          geometry={nodes.Seat.geometry}
          material={materials.Baño}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Tank"
          castShadow
          receiveShadow
          geometry={nodes.Tank.geometry}
          material={materials.Baño}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Tank_cover"
          castShadow
          receiveShadow
          geometry={nodes.Tank_cover.geometry}
          material={materials.Baño}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Valve"
          castShadow
          receiveShadow
          geometry={nodes.Valve.geometry}
          material={materials.Baño}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Water"
          castShadow
          receiveShadow
          geometry={nodes.Water.geometry}
          material={materials.Agua}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Water_Tube"
          castShadow
          receiveShadow
          geometry={nodes.Water_Tube.geometry}
          material={materials.Baño}
          position={[6.997, 0.769, 0.61]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="G-__555564002"
          castShadow
          receiveShadow
          geometry={nodes['G-__555564002'].geometry}
          material={materials['Color M00']}
          position={[2.205, 1.141, 1.307]}
          rotation={[-Math.PI, 0.003, -Math.PI]}
          scale={0.873}
        />
        <mesh
          name="Bolt_Caps001"
          castShadow
          receiveShadow
          geometry={nodes.Bolt_Caps001.geometry}
          material={nodes.Bolt_Caps001.material}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Bowl001"
          castShadow
          receiveShadow
          geometry={nodes.Bowl001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Drainage_Tube001"
          castShadow
          receiveShadow
          geometry={nodes.Drainage_Tube001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Flush_Button001"
          castShadow
          receiveShadow
          geometry={nodes.Flush_Button001.geometry}
          material={nodes.Flush_Button001.material}
          position={[6.94, 0.769, -0.83]}
          rotation={[Math.PI / 2, 0, 3.135]}
          scale={0.011}
        />
        <mesh
          name="Hinges001"
          castShadow
          receiveShadow
          geometry={nodes.Hinges001.geometry}
          material={nodes.Hinges001.material}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Lid001"
          castShadow
          receiveShadow
          geometry={nodes.Lid001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Seat001"
          castShadow
          receiveShadow
          geometry={nodes.Seat001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Tank001"
          castShadow
          receiveShadow
          geometry={nodes.Tank001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Tank_cover001"
          castShadow
          receiveShadow
          geometry={nodes.Tank_cover001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Valve001"
          castShadow
          receiveShadow
          geometry={nodes.Valve001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Water001"
          castShadow
          receiveShadow
          geometry={nodes.Water001.geometry}
          material={materials.Agua}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="Water_Tube001"
          castShadow
          receiveShadow
          geometry={nodes.Water_Tube001.geometry}
          material={materials.Baño}
          position={[6.94, 0.769, -3.493]}
          rotation={[Math.PI / 2, 0, 0.01]}
          scale={0.011}
        />
        <mesh
          name="G-__555564001"
          castShadow
          receiveShadow
          geometry={nodes['G-__555564001'].geometry}
          material={materials['Color M00']}
          position={[3.092, 1.123, 1.254]}
          rotation={[-Math.PI, 0.003, -Math.PI]}
        />
        <mesh
          name="Cabinet1002"
          castShadow
          receiveShadow
          geometry={nodes.Cabinet1002.geometry}
          material={materials.Mesa}
          position={[4.291, 0.265, 2.137]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[3.176, 0.992, 0.992]}>
          <mesh
            name="Cabinet1_Door002"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1_Door002.geometry}
            material={materials.Mesa}
            position={[0.599, 0.283, 0.591]}
            scale={[1, 0.604, 1]}
          />
          <mesh
            name="Countertop1002"
            castShadow
            receiveShadow
            geometry={nodes.Countertop1002.geometry}
            material={materials.Mesa}
            position={[0, 0.7, 0]}
          />
        </mesh>
        <mesh
          name="G-__555564003"
          castShadow
          receiveShadow
          geometry={nodes['G-__555564003'].geometry}
          material={materials['Color M00']}
          position={[4.102, 1.141, 1.325]}
          rotation={[-Math.PI, 0.003, -Math.PI]}
          scale={0.873}
        />
      </group>
    </group>
  )
}
useGLTF.preload('/Materiales/Baño/ObjetosBaño1.glb')
