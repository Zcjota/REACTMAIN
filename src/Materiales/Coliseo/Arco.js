import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Arco(props) {
  const { nodes, materials } = useGLTF('/Materiales/Coliseo/ARCO_UPDS.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Net_Sim.geometry} material={materials.Net} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object03.geometry}
        material={materials.aRCO}
        position={[-0.013, 3.689, 0.051]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0}
      />
      <group position={[-0.013, 3.689, 0.085]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0}>
        <mesh castShadow receiveShadow geometry={nodes.Malla.geometry} material={materials.main} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla_1.geometry}
          material={materials.glass}
        />
        <mesh castShadow receiveShadow geometry={nodes.Malla_2.geometry} material={materials.Aro} />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla_3.geometry}
          material={materials.aRCO}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Malla_4.geometry}
          material={materials.Pernos}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto011.geometry}
        material={materials['MaterialTexto.011']}
        position={[4.442, 1.24, -3.507]}
        rotation={[-1.422, 0.009, 0.062]}
        scale={-0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto010.geometry}
        material={materials['MaterialTexto.010']}
        position={[3.465, 1.349, -3.453]}
        rotation={[1.645, -0.005, -0.062]}
        scale={-0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto009.geometry}
        material={materials['MaterialTexto.009']}
        position={[5.305, 1.366, -3.594]}
        rotation={[1.556, 0.001, -0.062]}
        scale={-0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto008.geometry}
        material={materials['MaterialTexto.008']}
        position={[4.693, 1.936, -3.544]}
        rotation={[-1.523, 0.003, 0.062]}
        scale={-0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto007.geometry}
        material={materials['MaterialTexto.007']}
        position={[3.484, 2.09, -3.399]}
        rotation={[1.627, -0.004, -0.062]}
        scale={-0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto006.geometry}
        material={materials['MaterialTexto.006']}
        position={[5.469, 1.872, -3.555]}
        rotation={[-1.601, -0.002, 0.062]}
        scale={-0.286}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto005.geometry}
        material={materials['MaterialTexto.005']}
        position={[4.734, 0.983, -3.553]}
        rotation={[-1.46, 0.007, 0.062]}
        scale={-0.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto004.geometry}
        material={materials['MaterialTexto.004']}
        position={[3.734, 0.985, -3.492]}
        rotation={[-1.566, 0, 0.062]}
        scale={-0.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto003.geometry}
        material={materials['MaterialTexto.003']}
        position={[5.567, 0.983, -3.604]}
        rotation={[-1.49, 0.005, 0.062]}
        scale={-0.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto002.geometry}
        material={materials['MaterialTexto.002']}
        position={[4.705, 2.412, -3.549]}
        rotation={[-1.573, 0, 0.062]}
        scale={-0.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto001.geometry}
        material={materials['MaterialTexto.001']}
        position={[3.607, 2.412, -3.465]}
        rotation={[-1.593, -0.001, 0.062]}
        scale={-0.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={materials.MaterialTexto}
        position={[5.642, 2.378, -3.594]}
        rotation={[-1.58, -0.001, 0.062]}
        scale={-0.191}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cubo.geometry}
        material={materials.MaterialPanel}
        position={[4.327, 1.651, -3.595]}
        rotation={[-3.128, -0.062, 0.001]}
        scale={[-1.429, -0.953, -0.048]}
      />
    </group>
  )
}

useGLTF.preload('/Materiales/Coliseo/ARCO_UPDS.glb')