import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function MesitaB(props) {
  const { nodes, materials } = useGLTF('/Materiales/Biblioteca/Librero Biblioteca 2 Material.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.323, 0.501, -0.154]} scale={[0.069, 0.047, 0.025]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box010.geometry}
          material={nodes.Box010.material}
          position={[0.012, -1.431, 0.51]}
          scale={[0.632, 0.503, 0.425]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box011.geometry}
          material={nodes.Box011.material}
          position={[0.012, 7.933, 0.51]}
          scale={[0.632, 0.503, 0.425]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box001.geometry}
          material={materials.Fierro}
          position={[0.012, -19.976, 0.51]}
          scale={[0.632, 0.503, 0.425]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box004.geometry}
          material={materials.Fierro}
          position={[0.012, 0.948, -3.37]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[0.658, 0.503, 2.286]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box005.geometry}
          material={nodes.Box005.material}
          position={[0.012, -10.613, 0.51]}
          scale={[0.632, 0.503, 0.425]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box007.geometry}
          material={materials.Fierro}
          position={[20.921, -0.028, 0.51]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.687, 0.503, 0.425]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box031.geometry}
          material={materials.Fierro}
          position={[0.012, 20.82, 0.51]}
          scale={[0.658, 0.503, 0.425]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box032.geometry}
          material={materials.Fierro}
          position={[-19.891, -0.028, 0.51]}
          rotation={[0, 0, Math.PI / 2]}
          scale={[0.687, 0.503, 0.425]}
        />
      </group>
      <group position={[1.322, 0.524, -0.163]} scale={[0.069, 0.047, 0.025]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box003.geometry}
          material={nodes.Box003.material}
          position={[-19.621, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box008.geometry}
          material={nodes.Box008.material}
          position={[18.551, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box009.geometry}
          material={nodes.Box009.material}
          position={[-17.996, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box012.geometry}
          material={nodes.Box012.material}
          position={[-18.141, -6.54, 0.047]}
          rotation={[Math.PI / 2, 0.467, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box013.geometry}
          material={nodes.Box013.material}
          position={[-16.53, -6.49, 0.047]}
          rotation={[Math.PI / 2, 0.467, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box014.geometry}
          material={nodes.Box014.material}
          position={[-9.907, -9.848, 0.047]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box015.geometry}
          material={nodes.Box015.material}
          position={[17, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box016.geometry}
          material={nodes.Box016.material}
          position={[15.465, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box017.geometry}
          material={nodes.Box017.material}
          position={[10.872, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box018.geometry}
          material={nodes.Box018.material}
          position={[12.408, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box019.geometry}
          material={nodes.Box019.material}
          position={[13.958, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box020.geometry}
          material={nodes.Box020.material}
          position={[1.683, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box021.geometry}
          material={nodes.Box021.material}
          position={[3.219, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box022.geometry}
          material={nodes.Box022.material}
          position={[4.736, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box023.geometry}
          material={nodes.Box023.material}
          position={[7.781, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box024.geometry}
          material={nodes.Box024.material}
          position={[6.246, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box025.geometry}
          material={nodes.Box025.material}
          position={[9.332, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box026.geometry}
          material={nodes.Box026.material}
          position={[-2.896, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box027.geometry}
          material={nodes.Box027.material}
          position={[-1.36, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box028.geometry}
          material={nodes.Box028.material}
          position={[0.19, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box029.geometry}
          material={nodes.Box029.material}
          position={[-4.434, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box030.geometry}
          material={nodes.Box030.material}
          position={[-5.965, -6.245, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box033.geometry}
          material={nodes.Box033.material}
          position={[-5.965, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box034.geometry}
          material={nodes.Box034.material}
          position={[-4.434, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box035.geometry}
          material={nodes.Box035.material}
          position={[-2.896, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box036.geometry}
          material={nodes.Box036.material}
          position={[-1.36, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box037.geometry}
          material={nodes.Box037.material}
          position={[1.683, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box038.geometry}
          material={nodes.Box038.material}
          position={[0.19, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box039.geometry}
          material={nodes.Box039.material}
          position={[4.736, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box040.geometry}
          material={nodes.Box040.material}
          position={[3.219, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box041.geometry}
          material={nodes.Box041.material}
          position={[7.781, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box042.geometry}
          material={nodes.Box042.material}
          position={[6.246, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box043.geometry}
          material={nodes.Box043.material}
          position={[10.872, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box044.geometry}
          material={nodes.Box044.material}
          position={[9.332, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box045.geometry}
          material={nodes.Box045.material}
          position={[13.958, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box046.geometry}
          material={nodes.Box046.material}
          position={[12.408, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box047.geometry}
          material={nodes.Box047.material}
          position={[17, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box048.geometry}
          material={nodes.Box048.material}
          position={[15.465, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box049.geometry}
          material={nodes.Box049.material}
          position={[18.551, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box050.geometry}
          material={nodes.Box050.material}
          position={[-16.69, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box051.geometry}
          material={nodes.Box051.material}
          position={[-13.622, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box052.geometry}
          material={nodes.Box052.material}
          position={[-15.159, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box053.geometry}
          material={nodes.Box053.material}
          position={[-12.086, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box054.geometry}
          material={nodes.Box054.material}
          position={[-10.536, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box055.geometry}
          material={nodes.Box055.material}
          position={[-9.042, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box056.geometry}
          material={nodes.Box056.material}
          position={[-7.507, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box057.geometry}
          material={nodes.Box057.material}
          position={[-18.161, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box058.geometry}
          material={nodes.Box058.material}
          position={[-19.691, 2.908, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box059.geometry}
          material={nodes.Box059.material}
          position={[-19.535, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box060.geometry}
          material={nodes.Box060.material}
          position={[-14.955, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box061.geometry}
          material={nodes.Box061.material}
          position={[-16.495, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box062.geometry}
          material={nodes.Box062.material}
          position={[-8.913, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box063.geometry}
          material={nodes.Box063.material}
          position={[-10.398, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box064.geometry}
          material={nodes.Box064.material}
          position={[-11.899, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box065.geometry}
          material={nodes.Box065.material}
          position={[-13.438, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box066.geometry}
          material={materials.Papel}
          position={[3.183, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box067.geometry}
          material={materials.Papel}
          position={[1.701, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box068.geometry}
          material={nodes.Box068.material}
          position={[0.199, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box069.geometry}
          material={nodes.Box069.material}
          position={[-1.34, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box070.geometry}
          material={nodes.Box070.material}
          position={[-2.857, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box071.geometry}
          material={nodes.Box071.material}
          position={[-4.396, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box072.geometry}
          material={nodes.Box072.material}
          position={[-5.898, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box073.geometry}
          material={nodes.Box073.material}
          position={[-7.437, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box074.geometry}
          material={nodes.Box074.material}
          position={[13.753, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box075.geometry}
          material={nodes.Box075.material}
          position={[12.271, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box076.geometry}
          material={nodes.Box076.material}
          position={[10.77, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box077.geometry}
          material={nodes.Box077.material}
          position={[9.231, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box078.geometry}
          material={nodes.Box078.material}
          position={[7.713, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box079.geometry}
          material={nodes.Box079.material}
          position={[6.174, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box080.geometry}
          material={materials['Material.001']}
          position={[4.673, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box081.geometry}
          material={nodes.Box081.material}
          position={[18.277, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box082.geometry}
          material={nodes.Box082.material}
          position={[16.796, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box083.geometry}
          material={nodes.Box083.material}
          position={[15.294, 13.95, 0.059]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.421, 0.36, 0.424]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box084.geometry}
          material={nodes.Box084.material}
          position={[8.067, -19.262, 0.047]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box085.geometry}
          material={nodes.Box085.material}
          position={[13.917, -18.372, 0.047]}
          rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box086.geometry}
          material={nodes.Box086.material}
          position={[-18.123, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box087.geometry}
          material={nodes.Box087.material}
          position={[2.845, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box088.geometry}
          material={nodes.Box088.material}
          position={[1.346, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box089.geometry}
          material={nodes.Box089.material}
          position={[-0.112, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box090.geometry}
          material={nodes.Box090.material}
          position={[-1.611, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box091.geometry}
          material={nodes.Box091.material}
          position={[-6.05, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box092.geometry}
          material={nodes.Box092.material}
          position={[-7.548, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box093.geometry}
          material={nodes.Box093.material}
          position={[-3.093, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box094.geometry}
          material={nodes.Box094.material}
          position={[-4.591, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box095.geometry}
          material={nodes.Box095.material}
          position={[-12.099, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box096.geometry}
          material={nodes.Box096.material}
          position={[-13.598, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box097.geometry}
          material={nodes.Box097.material}
          position={[-9.142, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box098.geometry}
          material={nodes.Box098.material}
          position={[-10.641, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box099.geometry}
          material={nodes.Box099.material}
          position={[-16.613, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box100.geometry}
          material={nodes.Box100.material}
          position={[-15.114, -15.643, 0.047]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.291, 0.36, 0.293]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.caja001.geometry}
          material={materials['Libro.003']}
          position={[-18.267, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox002.geometry}
          material={materials.Libro}
          position={[19.905, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox003.geometry}
          material={materials['Libro.001']}
          position={[-16.641, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox004.geometry}
          material={materials['Libro.002']}
          position={[-16.931, -5.93, 0.011]}
          rotation={[Math.PI / 2, 0.467, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox005.geometry}
          material={materials['Libro.001']}
          position={[-15.321, -5.881, 0.011]}
          rotation={[Math.PI / 2, 0.467, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox006.geometry}
          material={materials['Libro.003']}
          position={[-9.907, -8.493, 0.011]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox007.geometry}
          material={materials['Libro.001']}
          position={[18.355, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox008.geometry}
          material={materials['Libro.004']}
          position={[16.819, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox009.geometry}
          material={materials['Libro.005']}
          position={[12.227, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox010.geometry}
          material={materials['Libro.006']}
          position={[13.763, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox011.geometry}
          material={materials['Libro.006']}
          position={[15.313, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox012.geometry}
          material={materials['Libro.001']}
          position={[3.038, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox013.geometry}
          material={materials['Libro.006']}
          position={[4.574, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox014.geometry}
          material={materials.Libro}
          position={[6.091, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox015.geometry}
          material={materials['Libro.003']}
          position={[9.136, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox016.geometry}
          material={materials['Libro.006']}
          position={[7.6, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox017.geometry}
          material={materials['Libro.006']}
          position={[10.686, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox018.geometry}
          material={materials.Libro}
          position={[-1.541, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox019.geometry}
          material={materials['Libro.004']}
          position={[-0.005, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox020.geometry}
          material={materials['Libro.006']}
          position={[1.545, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox021.geometry}
          material={materials['Libro.002']}
          position={[-3.079, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox022.geometry}
          material={materials['Libro.004']}
          position={[-4.61, -6.245, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox023.geometry}
          material={materials['Libro.005']}
          position={[-4.61, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox024.geometry}
          material={materials['Libro.003']}
          position={[-3.079, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox025.geometry}
          material={materials['Libro.001']}
          position={[-1.541, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox026.geometry}
          material={materials['Libro.002']}
          position={[-0.005, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox027.geometry}
          material={materials.Libro}
          position={[3.038, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox028.geometry}
          material={materials['Libro.006']}
          position={[1.545, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox029.geometry}
          material={materials['Libro.003']}
          position={[6.091, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox030.geometry}
          material={materials['Libro.005']}
          position={[4.574, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox031.geometry}
          material={materials.Libro}
          position={[9.136, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox032.geometry}
          material={materials['Libro.006']}
          position={[7.6, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox033.geometry}
          material={materials['Libro.001']}
          position={[12.227, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox034.geometry}
          material={materials['Libro.006']}
          position={[10.686, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox035.geometry}
          material={materials['Libro.005']}
          position={[15.313, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox036.geometry}
          material={materials['Libro.006']}
          position={[13.763, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox037.geometry}
          material={materials['Libro.001']}
          position={[18.355, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox038.geometry}
          material={materials['Libro.003']}
          position={[16.819, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox039.geometry}
          material={materials['Libro.002']}
          position={[19.905, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox040.geometry}
          material={materials['Libro.003']}
          position={[-15.335, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox041.geometry}
          material={materials['Libro.005']}
          position={[-12.267, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox042.geometry}
          material={materials.Libro}
          position={[-13.805, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox043.geometry}
          material={materials['Libro.004']}
          position={[-10.731, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox044.geometry}
          material={materials['Libro.001']}
          position={[-9.181, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox045.geometry}
          material={materials['Libro.002']}
          position={[-7.687, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox046.geometry}
          material={materials['Libro.004']}
          position={[-6.152, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox047.geometry}
          material={materials['Libro.005']}
          position={[-16.806, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox048.geometry}
          material={materials['Libro.003']}
          position={[-18.336, 2.908, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox049.geometry}
          material={materials.Libro}
          position={[-18.18, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox050.geometry}
          material={materials['Libro.005']}
          position={[-13.6, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox051.geometry}
          material={materials['Libro.002']}
          position={[-15.14, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox052.geometry}
          material={materials['Libro.006']}
          position={[-7.558, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox053.geometry}
          material={materials['Libro.003']}
          position={[-9.043, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox054.geometry}
          material={materials['Libro.005']}
          position={[-10.544, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox055.geometry}
          material={materials['Libro.006']}
          position={[-12.083, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox056.geometry}
          material={materials['Libro.005']}
          position={[4.537, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox057.geometry}
          material={materials['Libro.001']}
          position={[3.056, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox058.geometry}
          material={materials['Libro.002']}
          position={[1.554, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox059.geometry}
          material={materials['Libro.006']}
          position={[0.015, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox060.geometry}
          material={materials['Libro.004']}
          position={[-1.502, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox061.geometry}
          material={materials.Libro}
          position={[-3.042, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox062.geometry}
          material={materials['Libro.006']}
          position={[-4.543, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox063.geometry}
          material={materials['Libro.004']}
          position={[-6.082, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox064.geometry}
          material={materials['Libro.005']}
          position={[15.108, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox065.geometry}
          material={materials['Libro.006']}
          position={[13.626, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox066.geometry}
          material={materials['Libro.004']}
          position={[12.125, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox067.geometry}
          material={materials['Libro.005']}
          position={[10.585, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox068.geometry}
          material={materials['Libro.006']}
          position={[9.068, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox069.geometry}
          material={materials.Libro}
          position={[7.529, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox070.geometry}
          material={materials['Libro.002']}
          position={[6.028, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox071.geometry}
          material={materials['Libro.001']}
          position={[19.632, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox072.geometry}
          material={materials['Libro.003']}
          position={[18.15, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox073.geometry}
          material={materials['Libro.001']}
          position={[16.649, 13.95, 0.007]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.441, 0.435, 0.441]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox074.geometry}
          material={materials['Libro.001']}
          position={[8.067, -17.907, 0.011]}
          rotation={[-Math.PI, 1.571, 0]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox075.geometry}
          material={materials['Libro.003']}
          position={[14.268, -17.063, 0.011]}
          rotation={[Math.PI / 2, 1.309, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox076.geometry}
          material={materials['Libro.004']}
          position={[-16.768, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox077.geometry}
          material={materials['Libro.005']}
          position={[4.2, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox078.geometry}
          material={materials['Libro.006']}
          position={[2.701, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox079.geometry}
          material={materials['Libro.006']}
          position={[1.243, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox080.geometry}
          material={materials['Libro.003']}
          position={[-0.256, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox081.geometry}
          material={materials['Libro.003']}
          position={[-4.695, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox082.geometry}
          material={materials.Libro}
          position={[-6.194, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox083.geometry}
          material={materials['Libro.006']}
          position={[-1.738, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox084.geometry}
          material={materials['Libro.005']}
          position={[-3.237, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox085.geometry}
          material={materials['Libro.001']}
          position={[-10.745, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox086.geometry}
          material={materials.Libro}
          position={[-12.243, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox087.geometry}
          material={materials['Libro.006']}
          position={[-7.788, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox088.geometry}
          material={materials['Libro.003']}
          position={[-9.286, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox089.geometry}
          material={materials['Libro.003']}
          position={[-15.258, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.ChamferBox090.geometry}
          material={materials['Libro.005']}
          position={[-13.759, -15.643, 0.011]}
          rotation={[Math.PI / 2, 0, Math.PI / 2]}
          scale={[0.305, 0.435, 0.305]}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Materiales/Biblioteca/Librero Biblioteca 2 Material.glb')