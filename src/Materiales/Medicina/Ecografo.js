import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Ecografo(props) {
  const { nodes, materials } = useGLTF('/Materiales/Medicina/ecografo1.glb')
  return (
    <group {...props} dispose={null}>
      <group
        position={[0.518, 19.344, -147.77]}
        rotation={[-3.093, 0.848, 3.101]}
        scale={[2.147, 1.659, 2.229]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW075_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW075_2'].geometry}
          material={materials.PlasticoExt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW075_3'].geometry}
          material={materials.Material}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW077_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW077_2'].geometry}
          material={materials.Teclado}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW077_3'].geometry}
          material={materials.PlasticoExt}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW004'].geometry}
        material={materials.Ecografo}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[55.02, -19.641, -130.007]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.037, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW080_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW080_2'].geometry}
          material={materials.PlasticoExt}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW007'].geometry}
        material={materials.PlasticoExt}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW008'].geometry}
        material={materials.Ecografo}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW084_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW084_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW085_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW085_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW086_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW086_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW087_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW087_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW088_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW088_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW089_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW089_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW108_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW108_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW109_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW109_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW110_1'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW110_2'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW111'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW111_1'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW112'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW112_1'].geometry}
          material={materials.Boton}
        />
      </group>
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW113'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW113_1'].geometry}
          material={materials.Boton}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW041'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW042'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW043'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW044'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW045'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW046'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW122'].geometry}
          material={materials.Agarre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW122_1'].geometry}
          material={materials.PlasticoExt}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW048'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW049'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW050'].geometry}
        material={materials.Luz1}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW051'].geometry}
        material={materials.Luz2}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW052'].geometry}
        material={materials.Luz3}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW053'].geometry}
        material={materials.Ecografo}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW054'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW055'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW056'].geometry}
        material={materials.Boton}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW132_1'].geometry}
          material={materials.PlasticoExt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW132_2'].geometry}
          material={materials.Agarre}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW058'].geometry}
        material={materials.Agarre}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW134'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW134_1'].geometry}
          material={materials.AgarreLado}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW060'].geometry}
        material={materials.AgarreLado}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW061'].geometry}
        material={materials.Material}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW137'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW137_1'].geometry}
          material={materials.AgarreLado}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW063'].geometry}
        material={materials.AgarreLado}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW064'].geometry}
        material={materials.Material}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW140'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW140_1'].geometry}
          material={materials.AgarreLado}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW066'].geometry}
        material={materials.AgarreLado}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW067'].geometry}
        material={materials.Material}
        position={[55.019, -19.641, -130.002]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[2.118, 1.637, 2.199]}
      />
      <group
        position={[58, -17.472, -130.414]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[1.798, 1.637, 2.196]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW143'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW143_1'].geometry}
          material={materials.Linea}
        />
      </group>
      <group
        position={[55.016, -10.737, -128.775]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[1.798, 1.548, 2.196]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW144'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW144_1'].geometry}
          material={materials.Linea}
        />
      </group>
      <group
        position={[51.328, -19.641, -127.841]}
        rotation={[-0.537, 1.527, 0.514]}
        scale={[2.118, 1.637, 2.199]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW146'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW146_1'].geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW072'].geometry}
        material={materials.Ecografo}
        position={[55.02, -19.641, -130.012]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[1.798, 1.637, 2.196]}
      />
      <group
        position={[55.02, -19.641, -130.012]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[1.798, 1.637, 2.196]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW148'].geometry}
          material={materials.Ecografo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW148_1'].geometry}
          material={materials.Material}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW074'].geometry}
        material={materials.Ecografo}
        position={[55.02, -19.641, -130.012]}
        rotation={[-2.474, 1.534, 2.451]}
        scale={[1.798, 1.637, 2.196]}
      />
      <group
        position={[1.215, -86.381, -147.902]}
        rotation={[-3.132, 0.966, -3.123]}
        scale={[1.005, 2.328, 1.087]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW067_1'].geometry}
          material={materials['_16978_ultrasound_machine_V1default.007']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW067_2'].geometry}
          material={materials.PlasticoExt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW067_3'].geometry}
          material={materials.AgarreLado}
        />
      </group>
      <group
        position={[-20.344, 168.799, -214.351]}
        rotation={[1.762, 0.552, -1.109]}
        scale={[2.574, 1.301, 1.86]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW068_1'].geometry}
          material={materials.PlasticoExt}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW068_2'].geometry}
          material={materials.Agarre}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW068_3'].geometry}
          material={materials.Ecografo}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW292'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW291'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW290'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW289'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW288'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW287'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW286'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW285'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW284'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW283'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW282'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW281'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW280'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW279'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW278'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW277'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW276'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW275'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW274'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW273'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW272'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW271'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW270'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW269'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW268'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW267'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW266'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW265'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW264'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW263'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW262'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW261'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW260'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW259'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW258'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW257'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW256'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW255'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW254'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW253'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW252'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW251'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW250'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW249'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW248'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW247'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW246'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW245'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW244'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW243'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW242'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW241'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW240'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW239'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW238'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW237'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW236'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW235'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW234'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW233'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW232'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW231'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW230'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW229'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW228'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW227'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW226'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW225'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW224'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW223'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW222'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW221'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW220'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW219'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW218'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW217'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW216'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW215'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW214'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW213'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW212'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW211'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW210'].geometry}
        material={materials.Teclado}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW209'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW208'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW207'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW206'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW205'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW204'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW189'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW188'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW187'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW186'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW185'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW184'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW183'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW182'].geometry}
        material={materials.Teclado}
        position={[16.162, -37.705, -116.929]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW181'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW180'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW179'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW178'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW177'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW176'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW175'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW132'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW110'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW109'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW108'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW107'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW106'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW105'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW104'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW103'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW102'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW101'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW100'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW099'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW098'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW097'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW096'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW095'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW094'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW093'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW092'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW091'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW090'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW089'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW088'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW087'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW086'].geometry}
        material={materials.Teclado}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW085'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW084'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.011']}
        position={[22.25, -33.529, -148.422]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW083'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.013']}
        position={[30.706, -36.149, -143.237]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW081'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW080'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW079'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW006'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW077'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW015'].geometry}
        material={materials.Teclado}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['16978_ultrasound_machine_NEW016'].geometry}
        material={materials['_16978_ultrasound_machine_V1default.012']}
        position={[2.954, -34.16, -124.641]}
        rotation={[2.475, 1.569, -2.465]}
        scale={[2.117, 1.94, 2.378]}
      />
      <group
        position={[-34.669, -79.377, -124.557]}
        rotation={[1.555, 0.25, -1.58]}
        scale={[2.251, 1.494, 1.657]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW053_1'].geometry}
          material={materials['_16978_ultrasound_machine_V1default.002']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['16978_ultrasound_machine_NEW053_2'].geometry}
          material={materials.Material}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Medicina/ecografo1.glb')