import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Modelo3D_Universidad(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/Modelo3D_Universidad.glb");
  return ( 
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="Universidad001"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano004"
            castShadow
            receiveShadow
            geometry={nodes.Plano004.geometry}
            material={nodes.Plano004.material}
          />
          <mesh
            name="Plano004_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano004_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano004_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano004_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta"
          position={[257.036, 0, -74.454]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane_1.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane_2.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane_3.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane_4.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Tarjeta001"
          position={[255.172, -0.082, -76.436]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_1.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_2.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane001_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_3.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane001_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane001_4.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Huella"
          position={[253.252, 0, -78.433]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_1.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane003_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_2.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane003_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_3.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane003_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_4.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane003_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane003_5.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group name="sillaEspera4">
          <mesh
            name="Plane002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane002_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane002_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="sillaEspera3"
          position={[227.227, 0.139, -52.953]}
          rotation={[Math.PI, -0.759, Math.PI]}
          scale={[1.43, 1.621, 1.621]}
        >
          <mesh
            name="Vert006"
            castShadow
            receiveShadow
            geometry={nodes.Vert006.geometry}
            material={materials["Espaldar.001"]}
          />
          <mesh
            name="Vert006_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert006_1.geometry}
            material={materials["Fierro.001"]}
          />
        </group>
        <group
          name="sillaGuardia"
          position={[234.133, 2.886, -66.267]}
          scale={0.613}
        >
          <mesh
            name="Circle_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle_1.geometry}
            material={materials.Patas}
          />
          <mesh
            name="Circle_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle_2.geometry}
            material={materials.Asiento}
          />
        </group>
        <group name="sillaEspera4001">
          <mesh
            name="Plane004_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane004_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane004_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4002">
          <mesh
            name="Plane005_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane005_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane005_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4003">
          <mesh
            name="Plane006_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane006_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane006_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane006_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Plane"
          position={[252.604, 29.954, -81.95]}
          rotation={[Math.PI / 2, 0, -2.349]}
          scale={3.967}
        >
          <mesh
            name="Plane007_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_1.geometry}
            material={materials.BolitaVerde}
          />
          <mesh
            name="Plane007_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_2.geometry}
            material={materials.bORDE}
          />
          <mesh
            name="Plane007_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_3.geometry}
            material={materials.bOLITAS2}
          />
          <mesh
            name="Plane007_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane007_4.geometry}
            material={materials.rOJO}
          />
        </group>
        <mesh
          name="U"
          castShadow
          receiveShadow
          geometry={nodes.U.geometry}
          material={materials.LetraUpds}
          position={[268.337, 41.154, -61.352]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="S"
          castShadow
          receiveShadow
          geometry={nodes.S.geometry}
          material={materials.LetraUpds}
          position={[247.704, 41.163, -81.808]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="P"
          castShadow
          receiveShadow
          geometry={nodes.P.geometry}
          material={materials.LetraUpds}
          position={[265.652, 35.913, -63.99]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="D"
          castShadow
          receiveShadow
          geometry={nodes.D.geometry}
          material={materials.LetraUpds}
          position={[256.725, 25.276, -72.957]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <group name="sillaEspera4004">
          <mesh
            name="Plane009_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane009_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane009_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane009_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4005">
          <mesh
            name="Plane010_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane010_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane010_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Universidad002"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano003"
            castShadow
            receiveShadow
            geometry={nodes.Plano003.geometry}
            material={nodes.Plano003.material}
          />
          <mesh
            name="Plano003_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano003_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano003_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group name="sillaEspera4006">
          <mesh
            name="Plane011_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane011_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane011_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane011_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4007">
          <mesh
            name="Plane012_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane012_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane012_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4008">
          <mesh
            name="Plane013_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane013_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane013_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane013_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4009">
          <mesh
            name="Plane014_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane014_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane014_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Molinete_Tarjeta002"
          position={[4.525, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane015_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_1.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane015_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_2.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane015_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_3.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane015_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane015_4.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella001"
          position={[0.882, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane017_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane017_1.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane017_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane017_2.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane017_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane017_3.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane017_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane017_4.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane017_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane017_5.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta005"
          position={[8.004, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane019_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane019_1.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane019_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane019_2.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane019_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane019_3.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane019_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane019_4.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta006"
          position={[14.726, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane021_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane021_1.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane021_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane021_2.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane021_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane021_3.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane021_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane021_4.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella003"
          position={[11.369, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane023_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane023_1.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane023_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane023_2.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane023_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane023_3.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane023_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane023_4.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane023_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane023_5.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <mesh
          name="rejitaEntrada"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Molinete_Tarjeta003"
          position={[21.736, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane027_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane027_1.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane027_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane027_2.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane027_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane027_3.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane027_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane027_4.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella002"
          position={[18.093, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane028_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane028_1.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane028_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane028_2.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane028_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane028_3.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane028_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane028_4.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane028_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane028_5.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta004"
          position={[25.214, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane029_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane029_1.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane029_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane029_2.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane029_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane029_3.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane029_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane029_4.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <mesh
          name="rejitaEntrada001"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada001.geometry}
          material={materials["Material.006"]}
          position={[28.911, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <mesh
          name="rejitaEntrada002"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada002.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Plane001"
          position={[33.296, 1.841, -49.026]}
          rotation={[0, 1.564, 0]}
          scale={[1.052, 0.226, 0.226]}
        >
          <mesh
            name="Plane032_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane032_1.geometry}
            material={materials.BAse}
          />
          <mesh
            name="Plane032_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane032_2.geometry}
            material={materials.Teclas}
          />
        </group>
        <group
          name="dispensadorAlchol"
          position={[-0.41, 3.353, -37.747]}
          scale={0.011}
        >
          <mesh
            name="Sphere001_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_1.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere001_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_2.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere001_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_3.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere001_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_4.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere001_5"
            castShadow
            receiveShadow
            geometry={nodes.Sphere001_5.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Cubo001"
          position={[33.474, 1.951, -51.11]}
          rotation={[-Math.PI, 0.001, -Math.PI]}
          scale={0.151}
        >
          <mesh
            name="Cubo001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cubo001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo001_2.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="Focos"
          position={[28.699, 14.283, -44.724]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro001_1.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro001_2.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro001_3"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro001_3.geometry}
            material={materials.Goma}
          />
        </group>
        <mesh
          name="Mesa_Docente"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente.geometry}
          material={materials.Mesa}
          position={[32.795, 1.738, -48.565]}
          scale={[1.619, 0.993, 3.012]}
        />
        <group
          name="Focos001"
          position={[28.699, 14.283, -36.667]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro002"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro002.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro002_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro002_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos002"
          position={[7.76, 14.283, -31.89]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro003"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro003.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro003_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro003_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos003"
          position={[7.76, 14.283, -23.832]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro004"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro004.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro004_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro004_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Cylinder"
          position={[38.405, 2.622, -34.157]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder003_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder003_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder003_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="sillaGuardia1"
          position={[37.025, -1.238, -49.66]}
          rotation={[0, 1.528, -Math.PI]}
          scale={[-0.78, -0.156, -0.156]}
        >
          <mesh
            name="Plane034_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane034_1.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane034_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane034_2.geometry}
            material={materials["Fierro.002"]}
          />
        </group>
        <group
          name="tv"
          position={[31.935, 2.85, -49.064]}
          rotation={[Math.PI / 2, 0, -1.517]}
          scale={3.062}
        >
          <mesh
            name="Plane035_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane035_1.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            name="Plane035_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane035_2.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Plane035_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane035_3.geometry}
            material={materials["red light"]}
          />
        </group>
        <group
          name="Cylinder001"
          position={[38.119, 2.622, -32.814]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder004_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder004_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder004_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="BasureroDoble"
          position={[18.176, -0.47, -62.84]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane036_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane036_1.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane036_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane036_2.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane036_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane036_3.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="BasureroDoble001"
          position={[4.284, -0.532, -65.263]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane037_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane037_1.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane037_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane037_2.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane037_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane037_3.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="dispensadorAlchol001"
          position={[1.611, 4.529, -34.49]}
          rotation={[Math.PI, -1.529, Math.PI]}
          scale={0.004}
        >
          <mesh
            name="Sphere002"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere002_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere002_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere002_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere002_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere002_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol002"
          position={[-14.964, 4.881, -36.548]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere003_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_1.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere003_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_2.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere003_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_3.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere003_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_4.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere003_5"
            castShadow
            receiveShadow
            geometry={nodes.Sphere003_5.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol004"
          position={[-12.287, 4.881, -31.711]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere007"
            castShadow
            receiveShadow
            geometry={nodes.Sphere007.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere007_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere007_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere007_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere007_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere007_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol003"
          position={[-45.394, 4.881, -36.459]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere008"
            castShadow
            receiveShadow
            geometry={nodes.Sphere008.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere008_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere008_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere008_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere008_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere008_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere008_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere008_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere008_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol005"
          position={[-47.034, 4.881, -31.613]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere009"
            castShadow
            receiveShadow
            geometry={nodes.Sphere009.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere009_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere009_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere009_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere009_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere009_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere009_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere009_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere009_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol006"
          position={[-90.837, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere010"
            castShadow
            receiveShadow
            geometry={nodes.Sphere010.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere010_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere010_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere010_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere010_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere010_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere010_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere010_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere010_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol007"
          position={[-92.477, 4.881, -31.469]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere011"
            castShadow
            receiveShadow
            geometry={nodes.Sphere011.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere011_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere011_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere011_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere011_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere011_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere011_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere011_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere011_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol008"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere012"
            castShadow
            receiveShadow
            geometry={nodes.Sphere012.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere012_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere012_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere012_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere012_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere012_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere012_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere012_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere012_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol009"
          position={[-126.877, 4.881, -31.416]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere013"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere013_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere013_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere013_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere013_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere013_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol010"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere014"
            castShadow
            receiveShadow
            geometry={nodes.Sphere014.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere014_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere014_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere014_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere014_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere014_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere014_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere014_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere014_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol011"
          position={[-125.905, 4.881, -36.46]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere015"
            castShadow
            receiveShadow
            geometry={nodes.Sphere015.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere015_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere015_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere015_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere015_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere015_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere015_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere015_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere015_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Universidad003"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano001"
            castShadow
            receiveShadow
            geometry={nodes.Plano001.geometry}
            material={nodes.Plano001.material}
          />
          <mesh
            name="Plano001_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano001_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano001_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano001_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Universidad004"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano002"
            castShadow
            receiveShadow
            geometry={nodes.Plano002.geometry}
            material={nodes.Plano002.material}
          />
          <mesh
            name="Plano002_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano002_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano002_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta007"
          position={[257.036, 0, -74.454]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane008_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_1.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane008_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_2.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane008_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_3.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane008_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane008_4.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Tarjeta008"
          position={[255.172, -0.082, -76.436]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane016_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane016_1.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane016_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane016_2.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane016_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane016_3.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane016_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane016_4.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Huella004"
          position={[253.252, 0, -78.433]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane018_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane018_1.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane018_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane018_2.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane018_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane018_3.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane018_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane018_4.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane018_5"
            castShadow
            receiveShadow
            geometry={nodes.Plane018_5.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group name="sillaEspera4010">
          <mesh
            name="Plane020_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane020_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane020_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane020_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="sillaEspera3001"
          position={[227.227, 0.139, -52.953]}
          rotation={[Math.PI, -0.759, Math.PI]}
          scale={[1.43, 1.621, 1.621]}
        >
          <mesh
            name="Vert001"
            castShadow
            receiveShadow
            geometry={nodes.Vert001.geometry}
            material={materials["Espaldar.001"]}
          />
          <mesh
            name="Vert001_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert001_1.geometry}
            material={materials["Fierro.001"]}
          />
        </group>
        <group
          name="sillaGuardia001"
          position={[234.133, 2.886, -66.267]}
          scale={0.613}
        >
          <mesh
            name="Circle001_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_1.geometry}
            material={materials.Patas}
          />
          <mesh
            name="Circle001_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle001_2.geometry}
            material={materials.Asiento}
          />
        </group>
        <group name="sillaEspera4011">
          <mesh
            name="Plane022_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane022_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane022_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane022_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4012">
          <mesh
            name="Plane024_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane024_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane024_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane024_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4013">
          <mesh
            name="Plane025_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane025_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane025_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane025_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Plane002"
          position={[252.604, 29.954, -81.95]}
          rotation={[Math.PI / 2, 0, -2.349]}
          scale={3.967}
        >
          <mesh
            name="Plane026_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane026_1.geometry}
            material={materials.BolitaVerde}
          />
          <mesh
            name="Plane026_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane026_2.geometry}
            material={materials.bORDE}
          />
          <mesh
            name="Plane026_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane026_3.geometry}
            material={materials.bOLITAS2}
          />
          <mesh
            name="Plane026_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane026_4.geometry}
            material={materials.rOJO}
          />
        </group>
        <mesh
          name="U001"
          castShadow
          receiveShadow
          geometry={nodes.U001.geometry}
          material={materials.LetraUpds}
          position={[268.337, 41.154, -61.352]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="S001"
          castShadow
          receiveShadow
          geometry={nodes.S001.geometry}
          material={materials.LetraUpds}
          position={[247.704, 41.163, -81.808]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="P001"
          castShadow
          receiveShadow
          geometry={nodes.P001.geometry}
          material={materials.LetraUpds}
          position={[265.652, 35.913, -63.99]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="D001"
          castShadow
          receiveShadow
          geometry={nodes.D001.geometry}
          material={materials.LetraUpds}
          position={[256.725, 25.276, -72.957]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <group name="sillaEspera4014">
          <mesh
            name="Plane030_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane030_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane030_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane030_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4015">
          <mesh
            name="Plane031_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane031_1.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane031_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane031_2.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Universidad005"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano005"
            castShadow
            receiveShadow
            geometry={nodes.Plano005.geometry}
            material={nodes.Plano005.material}
          />
          <mesh
            name="Plano005_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano005_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano005_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano005_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group name="sillaEspera4016">
          <mesh
            name="Plane038"
            castShadow
            receiveShadow
            geometry={nodes.Plane038.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane038_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane038_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4017">
          <mesh
            name="Plane039"
            castShadow
            receiveShadow
            geometry={nodes.Plane039.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane039_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane039_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4018">
          <mesh
            name="Plane040"
            castShadow
            receiveShadow
            geometry={nodes.Plane040.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane040_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane040_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4019">
          <mesh
            name="Plane041"
            castShadow
            receiveShadow
            geometry={nodes.Plane041.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane041_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane041_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Molinete_Tarjeta009"
          position={[4.525, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane042"
            castShadow
            receiveShadow
            geometry={nodes.Plane042.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane042_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane042_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane042_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane042_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane042_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane042_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella005"
          position={[0.882, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane043"
            castShadow
            receiveShadow
            geometry={nodes.Plane043.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane043_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane043_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane043_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane043_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane043_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane043_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane043_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane043_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta010"
          position={[8.004, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane044"
            castShadow
            receiveShadow
            geometry={nodes.Plane044.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane044_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane044_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane044_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane044_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane044_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane044_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta011"
          position={[14.726, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane045"
            castShadow
            receiveShadow
            geometry={nodes.Plane045.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane045_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane045_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane045_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane045_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane045_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane045_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella006"
          position={[11.369, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane046"
            castShadow
            receiveShadow
            geometry={nodes.Plane046.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane046_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane046_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane046_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane046_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane046_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane046_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane046_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane046_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <mesh
          name="rejitaEntrada003"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada003.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Molinete_Tarjeta012"
          position={[21.736, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane047"
            castShadow
            receiveShadow
            geometry={nodes.Plane047.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane047_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane047_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane047_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane047_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane047_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane047_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella007"
          position={[18.093, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane048"
            castShadow
            receiveShadow
            geometry={nodes.Plane048.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane048_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane048_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane048_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane048_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane048_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane048_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane048_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane048_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta013"
          position={[25.214, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane049"
            castShadow
            receiveShadow
            geometry={nodes.Plane049.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane049_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane049_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane049_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane049_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane049_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane049_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <mesh
          name="rejitaEntrada004"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada004.geometry}
          material={materials["Material.006"]}
          position={[28.911, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <mesh
          name="rejitaEntrada005"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada005.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Plane003"
          position={[33.296, 1.841, -49.026]}
          rotation={[0, 1.564, 0]}
          scale={[1.052, 0.226, 0.226]}
        >
          <mesh
            name="Plane050"
            castShadow
            receiveShadow
            geometry={nodes.Plane050.geometry}
            material={materials.BAse}
          />
          <mesh
            name="Plane050_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane050_1.geometry}
            material={materials.Teclas}
          />
        </group>
        <group
          name="dispensadorAlchol012"
          position={[-0.41, 3.353, -37.747]}
          scale={0.011}
        >
          <mesh
            name="Sphere016"
            castShadow
            receiveShadow
            geometry={nodes.Sphere016.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere016_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere016_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere016_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere016_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere016_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere016_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere016_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere016_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Cubo002"
          position={[33.474, 1.951, -51.11]}
          rotation={[-Math.PI, 0.001, -Math.PI]}
          scale={0.151}
        >
          <mesh
            name="Cubo002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo002_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cubo002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo002_2.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="Focos005"
          position={[28.699, 14.283, -44.724]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro006"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro006.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro006_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro006_2.geometry}
            material={materials.Goma}
          />
        </group>
        <mesh
          name="Mesa_Docente001"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente001.geometry}
          material={materials.Mesa}
          position={[32.795, 1.738, -48.565]}
          scale={[1.619, 0.993, 3.012]}
        />
        <group
          name="Focos006"
          position={[28.699, 14.283, -36.667]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro007"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro007.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro007_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro007_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro007_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos007"
          position={[7.76, 14.283, -31.89]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro008"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro008.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro008_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro008_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos008"
          position={[7.76, 14.283, -23.832]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro009"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro009.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro009_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro009_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro009_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Cylinder002"
          position={[38.405, 2.622, -34.157]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder008_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder008_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder008_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="sillaGuardia1001"
          position={[37.025, -1.238, -49.66]}
          rotation={[0, 1.528, -Math.PI]}
          scale={[-0.78, -0.156, -0.156]}
        >
          <mesh
            name="Plane052"
            castShadow
            receiveShadow
            geometry={nodes.Plane052.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane052_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane052_1.geometry}
            material={materials["Fierro.002"]}
          />
        </group>
        <group
          name="tv001"
          position={[31.935, 2.85, -49.064]}
          rotation={[Math.PI / 2, 0, -1.517]}
          scale={3.062}
        >
          <mesh
            name="Plane053"
            castShadow
            receiveShadow
            geometry={nodes.Plane053.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            name="Plane053_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane053_1.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Plane053_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane053_2.geometry}
            material={materials["red light"]}
          />
        </group>
        <group
          name="Cylinder003"
          position={[38.119, 2.622, -32.814]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder009_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder009_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder009_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder009_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="BasureroDoble002"
          position={[18.176, -0.47, -62.84]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane054"
            castShadow
            receiveShadow
            geometry={nodes.Plane054.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane054_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane054_1.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane054_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane054_2.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="BasureroDoble003"
          position={[4.284, -0.532, -65.263]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane055"
            castShadow
            receiveShadow
            geometry={nodes.Plane055.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane055_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane055_1.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane055_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane055_2.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="dispensadorAlchol013"
          position={[-14.964, 4.881, -36.548]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere017"
            castShadow
            receiveShadow
            geometry={nodes.Sphere017.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere017_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere017_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere017_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere017_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere017_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere017_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere017_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere017_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol014"
          position={[-12.287, 4.881, -31.711]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere018"
            castShadow
            receiveShadow
            geometry={nodes.Sphere018.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere018_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere018_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere018_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere018_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere018_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere018_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere018_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere018_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol015"
          position={[-45.394, 4.881, -36.459]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere019"
            castShadow
            receiveShadow
            geometry={nodes.Sphere019.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere019_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere019_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere019_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere019_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere019_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere019_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere019_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere019_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol016"
          position={[-47.034, 4.881, -31.613]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere020"
            castShadow
            receiveShadow
            geometry={nodes.Sphere020.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere020_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere020_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere020_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere020_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere020_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere020_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere020_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere020_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol017"
          position={[-90.837, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere021"
            castShadow
            receiveShadow
            geometry={nodes.Sphere021.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere021_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere021_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere021_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere021_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere021_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere021_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere021_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere021_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol018"
          position={[-92.477, 4.881, -31.469]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere022"
            castShadow
            receiveShadow
            geometry={nodes.Sphere022.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere022_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere022_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere022_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere022_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere022_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere022_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere022_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere022_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol019"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere023"
            castShadow
            receiveShadow
            geometry={nodes.Sphere023.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere023_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere023_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere023_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere023_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere023_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere023_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere023_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere023_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol020"
          position={[-126.877, 4.881, -31.416]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere024"
            castShadow
            receiveShadow
            geometry={nodes.Sphere024.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere024_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere024_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere024_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere024_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere024_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere024_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere024_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere024_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol021"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere025"
            castShadow
            receiveShadow
            geometry={nodes.Sphere025.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere025_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere025_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere025_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere025_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere025_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere025_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere025_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere025_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol022"
          position={[-125.905, 4.881, -36.46]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere026"
            castShadow
            receiveShadow
            geometry={nodes.Sphere026.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere026_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere026_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere026_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere026_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere026_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere026_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere026_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere026_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Focos010"
          position={[-17.658, 14.13, -23.551]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro011"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro011.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro011_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro011_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos011"
          position={[-23.056, 14.13, -23.551]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro012"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro012.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro012_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro012_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Universidad006"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano006"
            castShadow
            receiveShadow
            geometry={nodes.Plano006.geometry}
            material={nodes.Plano006.material}
          />
          <mesh
            name="Plano006_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano006_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano006_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano006_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Universidad007"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano008"
            castShadow
            receiveShadow
            geometry={nodes.Plano008.geometry}
            material={nodes.Plano008.material}
          />
          <mesh
            name="Plano008_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano008_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano008_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano008_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta014"
          position={[257.036, 0, -74.454]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane056"
            castShadow
            receiveShadow
            geometry={nodes.Plane056.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane056_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane056_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane056_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane056_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane056_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane056_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Tarjeta015"
          position={[255.172, -0.082, -76.436]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane057"
            castShadow
            receiveShadow
            geometry={nodes.Plane057.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane057_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane057_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane057_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane057_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane057_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane057_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Huella008"
          position={[253.252, 0, -78.433]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane058"
            castShadow
            receiveShadow
            geometry={nodes.Plane058.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane058_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane058_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane058_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane058_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane058_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane058_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane058_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane058_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group name="sillaEspera4020">
          <mesh
            name="Plane059"
            castShadow
            receiveShadow
            geometry={nodes.Plane059.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane059_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane059_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="sillaEspera3002"
          position={[227.227, 0.139, -52.953]}
          rotation={[Math.PI, -0.759, Math.PI]}
          scale={[1.43, 1.621, 1.621]}
        >
          <mesh
            name="Vert002"
            castShadow
            receiveShadow
            geometry={nodes.Vert002.geometry}
            material={materials["Espaldar.001"]}
          />
          <mesh
            name="Vert002_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert002_1.geometry}
            material={materials["Fierro.001"]}
          />
        </group>
        <group
          name="sillaGuardia002"
          position={[234.133, 2.886, -66.267]}
          scale={0.613}
        >
          <mesh
            name="Circle002_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle002_1.geometry}
            material={materials.Patas}
          />
          <mesh
            name="Circle002_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle002_2.geometry}
            material={materials.Asiento}
          />
        </group>
        <group name="sillaEspera4021">
          <mesh
            name="Plane060"
            castShadow
            receiveShadow
            geometry={nodes.Plane060.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane060_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane060_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4022">
          <mesh
            name="Plane061"
            castShadow
            receiveShadow
            geometry={nodes.Plane061.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane061_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane061_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4023">
          <mesh
            name="Plane062"
            castShadow
            receiveShadow
            geometry={nodes.Plane062.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane062_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane062_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Plane004"
          position={[252.604, 29.954, -81.95]}
          rotation={[Math.PI / 2, 0, -2.349]}
          scale={3.967}
        >
          <mesh
            name="Plane063"
            castShadow
            receiveShadow
            geometry={nodes.Plane063.geometry}
            material={materials.BolitaVerde}
          />
          <mesh
            name="Plane063_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane063_1.geometry}
            material={materials.bORDE}
          />
          <mesh
            name="Plane063_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane063_2.geometry}
            material={materials.bOLITAS2}
          />
          <mesh
            name="Plane063_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane063_3.geometry}
            material={materials.rOJO}
          />
        </group>
        <mesh
          name="U002"
          castShadow
          receiveShadow
          geometry={nodes.U002.geometry}
          material={materials.LetraUpds}
          position={[268.337, 41.154, -61.352]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="S002"
          castShadow
          receiveShadow
          geometry={nodes.S002.geometry}
          material={materials.LetraUpds}
          position={[247.704, 41.163, -81.808]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="P002"
          castShadow
          receiveShadow
          geometry={nodes.P002.geometry}
          material={materials.LetraUpds}
          position={[265.652, 35.913, -63.99]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="D002"
          castShadow
          receiveShadow
          geometry={nodes.D002.geometry}
          material={materials.LetraUpds}
          position={[256.725, 25.276, -72.957]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <group name="sillaEspera4024">
          <mesh
            name="Plane064"
            castShadow
            receiveShadow
            geometry={nodes.Plane064.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane064_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane064_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4025">
          <mesh
            name="Plane065"
            castShadow
            receiveShadow
            geometry={nodes.Plane065.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane065_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane065_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Universidad008"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano009"
            castShadow
            receiveShadow
            geometry={nodes.Plano009.geometry}
            material={nodes.Plano009.material}
          />
          <mesh
            name="Plano009_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano009_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano009_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano009_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group name="sillaEspera4026">
          <mesh
            name="Plane066"
            castShadow
            receiveShadow
            geometry={nodes.Plane066.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane066_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane066_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4027">
          <mesh
            name="Plane067"
            castShadow
            receiveShadow
            geometry={nodes.Plane067.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane067_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane067_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4028">
          <mesh
            name="Plane068"
            castShadow
            receiveShadow
            geometry={nodes.Plane068.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane068_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane068_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4029">
          <mesh
            name="Plane069"
            castShadow
            receiveShadow
            geometry={nodes.Plane069.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane069_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane069_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Molinete_Tarjeta016"
          position={[4.525, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane070"
            castShadow
            receiveShadow
            geometry={nodes.Plane070.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane070_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane070_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane070_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane070_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane070_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane070_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella009"
          position={[0.882, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane071"
            castShadow
            receiveShadow
            geometry={nodes.Plane071.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane071_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane071_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane071_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane071_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane071_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane071_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane071_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane071_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta017"
          position={[8.004, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane072"
            castShadow
            receiveShadow
            geometry={nodes.Plane072.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane072_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane072_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane072_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane072_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane072_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane072_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta018"
          position={[14.726, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane073"
            castShadow
            receiveShadow
            geometry={nodes.Plane073.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane073_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane073_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane073_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane073_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane073_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane073_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella010"
          position={[11.369, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane074"
            castShadow
            receiveShadow
            geometry={nodes.Plane074.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane074_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane074_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane074_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane074_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane074_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane074_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane074_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane074_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <mesh
          name="rejitaEntrada006"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada006.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Molinete_Tarjeta019"
          position={[21.736, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane075"
            castShadow
            receiveShadow
            geometry={nodes.Plane075.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane075_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane075_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane075_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane075_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane075_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane075_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella011"
          position={[18.093, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane076"
            castShadow
            receiveShadow
            geometry={nodes.Plane076.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane076_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane076_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane076_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane076_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane076_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane076_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane076_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane076_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta020"
          position={[25.214, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane077"
            castShadow
            receiveShadow
            geometry={nodes.Plane077.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane077_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane077_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane077_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane077_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane077_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane077_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <mesh
          name="rejitaEntrada007"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada007.geometry}
          material={materials["Material.006"]}
          position={[28.911, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <mesh
          name="rejitaEntrada008"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada008.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Plane005"
          position={[33.296, 1.841, -49.026]}
          rotation={[0, 1.564, 0]}
          scale={[1.052, 0.226, 0.226]}
        >
          <mesh
            name="Plane078"
            castShadow
            receiveShadow
            geometry={nodes.Plane078.geometry}
            material={materials.BAse}
          />
          <mesh
            name="Plane078_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane078_1.geometry}
            material={materials.Teclas}
          />
        </group>
        <group
          name="dispensadorAlchol023"
          position={[-0.41, 3.353, -37.747]}
          scale={0.011}
        >
          <mesh
            name="Sphere027"
            castShadow
            receiveShadow
            geometry={nodes.Sphere027.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere027_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere027_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere027_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere027_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere027_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere027_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere027_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere027_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Cubo003"
          position={[33.474, 1.951, -51.11]}
          rotation={[-Math.PI, 0.001, -Math.PI]}
          scale={0.151}
        >
          <mesh
            name="Cubo003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cubo003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo003_2.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="Focos012"
          position={[28.699, 14.283, -44.724]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro013"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro013.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro013_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro013_2.geometry}
            material={materials.Goma}
          />
        </group>
        <mesh
          name="Mesa_Docente002"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente002.geometry}
          material={materials.Mesa}
          position={[32.795, 1.738, -48.565]}
          scale={[1.619, 0.993, 3.012]}
        />
        <group
          name="Focos013"
          position={[28.699, 14.283, -36.667]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro014"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro014.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro014_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro014_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos014"
          position={[7.76, 14.283, -31.89]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro015"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro015.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro015_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro015_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos015"
          position={[7.76, 14.283, -23.832]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro016"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro016.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro016_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro016_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Cylinder004"
          position={[38.405, 2.622, -34.157]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder013_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder013_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder013_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="sillaGuardia1002"
          position={[37.025, -1.238, -49.66]}
          rotation={[0, 1.528, -Math.PI]}
          scale={[-0.78, -0.156, -0.156]}
        >
          <mesh
            name="Plane080"
            castShadow
            receiveShadow
            geometry={nodes.Plane080.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane080_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane080_1.geometry}
            material={materials["Fierro.002"]}
          />
        </group>
        <group
          name="tv002"
          position={[31.935, 2.85, -49.064]}
          rotation={[Math.PI / 2, 0, -1.517]}
          scale={3.062}
        >
          <mesh
            name="Plane081"
            castShadow
            receiveShadow
            geometry={nodes.Plane081.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            name="Plane081_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane081_1.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Plane081_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane081_2.geometry}
            material={materials["red light"]}
          />
        </group>
        <group
          name="Cylinder005"
          position={[38.119, 2.622, -32.814]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder014_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder014_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder014_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="BasureroDoble004"
          position={[18.176, -0.47, -62.84]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane082"
            castShadow
            receiveShadow
            geometry={nodes.Plane082.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane082_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane082_1.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane082_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane082_2.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="BasureroDoble005"
          position={[4.284, -0.532, -65.263]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane083"
            castShadow
            receiveShadow
            geometry={nodes.Plane083.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane083_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane083_1.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane083_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane083_2.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="dispensadorAlchol024"
          position={[-14.964, 4.881, -36.548]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere028"
            castShadow
            receiveShadow
            geometry={nodes.Sphere028.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere028_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere028_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere028_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere028_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere028_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere028_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere028_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere028_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol025"
          position={[-12.287, 4.881, -31.711]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere029"
            castShadow
            receiveShadow
            geometry={nodes.Sphere029.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere029_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere029_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere029_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere029_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere029_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere029_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere029_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere029_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol026"
          position={[-45.394, 4.881, -36.459]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere030"
            castShadow
            receiveShadow
            geometry={nodes.Sphere030.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere030_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere030_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere030_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere030_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere030_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere030_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere030_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere030_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol027"
          position={[-47.034, 4.881, -31.613]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere031"
            castShadow
            receiveShadow
            geometry={nodes.Sphere031.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere031_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere031_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere031_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere031_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere031_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere031_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere031_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere031_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol028"
          position={[-90.837, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere032"
            castShadow
            receiveShadow
            geometry={nodes.Sphere032.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere032_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere032_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere032_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere032_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere032_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere032_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere032_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere032_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol029"
          position={[-92.477, 4.881, -31.469]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere033"
            castShadow
            receiveShadow
            geometry={nodes.Sphere033.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere033_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere033_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere033_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere033_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere033_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere033_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere033_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere033_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol030"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere034"
            castShadow
            receiveShadow
            geometry={nodes.Sphere034.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere034_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere034_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere034_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere034_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere034_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere034_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere034_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere034_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol031"
          position={[-126.877, 4.881, -31.416]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere035"
            castShadow
            receiveShadow
            geometry={nodes.Sphere035.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere035_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere035_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere035_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere035_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere035_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere035_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere035_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere035_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol032"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere036"
            castShadow
            receiveShadow
            geometry={nodes.Sphere036.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere036_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere036_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere036_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere036_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere036_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere036_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere036_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere036_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol033"
          position={[-125.905, 4.881, -36.46]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere037"
            castShadow
            receiveShadow
            geometry={nodes.Sphere037.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere037_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere037_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere037_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere037_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere037_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere037_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere037_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere037_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Universidad009"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano010"
            castShadow
            receiveShadow
            geometry={nodes.Plano010.geometry}
            material={nodes.Plano010.material}
          />
          <mesh
            name="Plano010_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano010_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano010_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano010_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Universidad010"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano011"
            castShadow
            receiveShadow
            geometry={nodes.Plano011.geometry}
            material={nodes.Plano011.material}
          />
          <mesh
            name="Plano011_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano011_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano011_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano011_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta021"
          position={[257.036, 0, -74.454]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane084"
            castShadow
            receiveShadow
            geometry={nodes.Plane084.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane084_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane084_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane084_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane084_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane084_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane084_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Tarjeta022"
          position={[255.172, -0.082, -76.436]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane085"
            castShadow
            receiveShadow
            geometry={nodes.Plane085.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane085_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane085_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane085_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane085_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane085_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane085_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Huella012"
          position={[253.252, 0, -78.433]}
          rotation={[0, -0.824, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane086"
            castShadow
            receiveShadow
            geometry={nodes.Plane086.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane086_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane086_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane086_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane086_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane086_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane086_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane086_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane086_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group name="sillaEspera4030">
          <mesh
            name="Plane087"
            castShadow
            receiveShadow
            geometry={nodes.Plane087.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane087_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane087_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="sillaEspera3003"
          position={[227.227, 0.139, -52.953]}
          rotation={[Math.PI, -0.759, Math.PI]}
          scale={[1.43, 1.621, 1.621]}
        >
          <mesh
            name="Vert003"
            castShadow
            receiveShadow
            geometry={nodes.Vert003.geometry}
            material={materials["Espaldar.001"]}
          />
          <mesh
            name="Vert003_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert003_1.geometry}
            material={materials["Fierro.001"]}
          />
        </group>
        <group
          name="sillaGuardia003"
          position={[234.133, 2.886, -66.267]}
          scale={0.613}
        >
          <mesh
            name="Circle003_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle003_1.geometry}
            material={materials.Patas}
          />
          <mesh
            name="Circle003_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle003_2.geometry}
            material={materials.Asiento}
          />
        </group>
        <group name="sillaEspera4031">
          <mesh
            name="Plane088"
            castShadow
            receiveShadow
            geometry={nodes.Plane088.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane088_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane088_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4032">
          <mesh
            name="Plane089"
            castShadow
            receiveShadow
            geometry={nodes.Plane089.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane089_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane089_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4033">
          <mesh
            name="Plane090"
            castShadow
            receiveShadow
            geometry={nodes.Plane090.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane090_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane090_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Plane006"
          position={[252.604, 29.954, -81.95]}
          rotation={[Math.PI / 2, 0, -2.349]}
          scale={3.967}
        >
          <mesh
            name="Plane091"
            castShadow
            receiveShadow
            geometry={nodes.Plane091.geometry}
            material={materials.BolitaVerde}
          />
          <mesh
            name="Plane091_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane091_1.geometry}
            material={materials.bORDE}
          />
          <mesh
            name="Plane091_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane091_2.geometry}
            material={materials.bOLITAS2}
          />
          <mesh
            name="Plane091_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane091_3.geometry}
            material={materials.rOJO}
          />
        </group>
        <mesh
          name="U003"
          castShadow
          receiveShadow
          geometry={nodes.U003.geometry}
          material={materials.LetraUpds}
          position={[268.337, 41.154, -61.352]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="S003"
          castShadow
          receiveShadow
          geometry={nodes.S003.geometry}
          material={materials.LetraUpds}
          position={[247.704, 41.163, -81.808]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="P003"
          castShadow
          receiveShadow
          geometry={nodes.P003.geometry}
          material={materials.LetraUpds}
          position={[265.652, 35.913, -63.99]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <mesh
          name="D003"
          castShadow
          receiveShadow
          geometry={nodes.D003.geometry}
          material={materials.LetraUpds}
          position={[256.725, 25.276, -72.957]}
          rotation={[-Math.PI, 0.787, -Math.PI]}
          scale={[10.602, 7.58, 9.286]}
        />
        <group name="sillaEspera4034">
          <mesh
            name="Plane092"
            castShadow
            receiveShadow
            geometry={nodes.Plane092.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane092_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane092_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4035">
          <mesh
            name="Plane093"
            castShadow
            receiveShadow
            geometry={nodes.Plane093.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane093_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane093_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Universidad011"
          position={[-169.811, 33.036, 32.08]}
          rotation={[0, -0.257, 0]}
          scale={[1.171, 0.669, 1.171]}
        >
          <mesh
            name="Plano012"
            castShadow
            receiveShadow
            geometry={nodes.Plano012.geometry}
            material={nodes.Plano012.material}
          />
          <mesh
            name="Plano012_1"
            castShadow
            receiveShadow
            geometry={nodes.Plano012_1.geometry}
            material={materials.Material}
          />
          <mesh
            name="Plano012_2"
            castShadow
            receiveShadow
            geometry={nodes.Plano012_2.geometry}
            material={materials["Material.001"]}
          />
        </group>
        <group name="sillaEspera4036">
          <mesh
            name="Plane094"
            castShadow
            receiveShadow
            geometry={nodes.Plane094.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane094_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane094_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4037">
          <mesh
            name="Plane095"
            castShadow
            receiveShadow
            geometry={nodes.Plane095.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane095_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane095_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4038">
          <mesh
            name="Plane096"
            castShadow
            receiveShadow
            geometry={nodes.Plane096.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane096_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane096_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group name="sillaEspera4039">
          <mesh
            name="Plane097"
            castShadow
            receiveShadow
            geometry={nodes.Plane097.geometry}
            material={materials.Espaldar}
          />
          <mesh
            name="Plane097_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane097_1.geometry}
            material={materials.Fierro}
          />
        </group>
        <group
          name="Molinete_Tarjeta023"
          position={[4.525, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane098"
            castShadow
            receiveShadow
            geometry={nodes.Plane098.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane098_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane098_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane098_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane098_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane098_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane098_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella013"
          position={[0.882, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane099"
            castShadow
            receiveShadow
            geometry={nodes.Plane099.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane099_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane099_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane099_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane099_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane099_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane099_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane099_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane099_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta024"
          position={[8.004, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane100"
            castShadow
            receiveShadow
            geometry={nodes.Plane100.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane100_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane100_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane100_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane100_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane100_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane100_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta025"
          position={[14.726, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane101"
            castShadow
            receiveShadow
            geometry={nodes.Plane101.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane101_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane101_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane101_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane101_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane101_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane101_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella014"
          position={[11.369, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane102"
            castShadow
            receiveShadow
            geometry={nodes.Plane102.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane102_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane102_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane102_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane102_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane102_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane102_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane102_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane102_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <mesh
          name="rejitaEntrada009"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada009.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Molinete_Tarjeta026"
          position={[21.736, -0.491, -39.432]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane103"
            castShadow
            receiveShadow
            geometry={nodes.Plane103.geometry}
            material={materials.Molino}
          />
          <mesh
            name="Plane103_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane103_1.geometry}
            material={materials.Base}
          />
          <mesh
            name="Plane103_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane103_2.geometry}
            material={materials.IndicadorPase}
          />
          <mesh
            name="Plane103_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane103_3.geometry}
            material={materials.TargetaPase}
          />
        </group>
        <group
          name="Molinete_Huella015"
          position={[18.093, -0.491, -39.441]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane104"
            castShadow
            receiveShadow
            geometry={nodes.Plane104.geometry}
            material={materials["Molino.002"]}
          />
          <mesh
            name="Plane104_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane104_1.geometry}
            material={materials["TargetaPase.002"]}
          />
          <mesh
            name="Plane104_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane104_2.geometry}
            material={materials["IndicadorPase.002"]}
          />
          <mesh
            name="Plane104_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane104_3.geometry}
            material={materials.LusTargetaPase}
          />
          <mesh
            name="Plane104_4"
            castShadow
            receiveShadow
            geometry={nodes.Plane104_4.geometry}
            material={materials["Base.002"]}
          />
        </group>
        <group
          name="Molinete_Tarjeta027"
          position={[25.214, -0.572, -39.452]}
          rotation={[0, -0.015, 0]}
          scale={[0.506, 0.506, 1.984]}
        >
          <mesh
            name="Plane105"
            castShadow
            receiveShadow
            geometry={nodes.Plane105.geometry}
            material={materials["Molino.001"]}
          />
          <mesh
            name="Plane105_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane105_1.geometry}
            material={materials["Base.001"]}
          />
          <mesh
            name="Plane105_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane105_2.geometry}
            material={materials["IndicadorPase.001"]}
          />
          <mesh
            name="Plane105_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane105_3.geometry}
            material={materials["TargetaPase.001"]}
          />
        </group>
        <mesh
          name="rejitaEntrada010"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada010.geometry}
          material={materials["Material.006"]}
          position={[28.911, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <mesh
          name="rejitaEntrada011"
          castShadow
          receiveShadow
          geometry={nodes.rejitaEntrada011.geometry}
          material={materials["Material.006"]}
          position={[33.349, -0.303, -39.213]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={0.246}
        />
        <group
          name="Plane007"
          position={[33.296, 1.841, -49.026]}
          rotation={[0, 1.564, 0]}
          scale={[1.052, 0.226, 0.226]}
        >
          <mesh
            name="Plane106"
            castShadow
            receiveShadow
            geometry={nodes.Plane106.geometry}
            material={materials.BAse}
          />
          <mesh
            name="Plane106_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane106_1.geometry}
            material={materials.Teclas}
          />
        </group>
        <group
          name="dispensadorAlchol034"
          position={[-0.41, 3.353, -37.747]}
          scale={0.011}
        >
          <mesh
            name="Sphere038"
            castShadow
            receiveShadow
            geometry={nodes.Sphere038.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere038_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere038_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere038_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere038_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere038_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere038_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere038_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere038_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Cubo004"
          position={[33.474, 1.951, -51.11]}
          rotation={[-Math.PI, 0.001, -Math.PI]}
          scale={0.151}
        >
          <mesh
            name="Cubo004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo004_1.geometry}
            material={materials["Material.008"]}
          />
          <mesh
            name="Cubo004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo004_2.geometry}
            material={materials["Material.009"]}
          />
        </group>
        <group
          name="Focos017"
          position={[28.699, 14.283, -44.724]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro018"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro018.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro018_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro018_2.geometry}
            material={materials.Goma}
          />
        </group>
        <mesh
          name="Mesa_Docente003"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente003.geometry}
          material={materials.Mesa}
          position={[32.795, 1.738, -48.565]}
          scale={[1.619, 0.993, 3.012]}
        />
        <group
          name="Focos018"
          position={[28.699, 14.283, -36.667]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro019"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro019.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro019_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro019_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro019_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos019"
          position={[7.76, 14.283, -31.89]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro020"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro020.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro020_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro020_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos020"
          position={[7.76, 14.283, -23.832]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro021"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro021.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro021_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro021_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro021_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Cylinder006"
          position={[38.405, 2.622, -34.157]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder018_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder018_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder018_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="sillaGuardia1003"
          position={[37.025, -1.238, -49.66]}
          rotation={[0, 1.528, -Math.PI]}
          scale={[-0.78, -0.156, -0.156]}
        >
          <mesh
            name="Plane108"
            castShadow
            receiveShadow
            geometry={nodes.Plane108.geometry}
            material={materials["Material.010"]}
          />
          <mesh
            name="Plane108_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane108_1.geometry}
            material={materials["Fierro.002"]}
          />
        </group>
        <group
          name="tv003"
          position={[31.935, 2.85, -49.064]}
          rotation={[Math.PI / 2, 0, -1.517]}
          scale={3.062}
        >
          <mesh
            name="Plane109"
            castShadow
            receiveShadow
            geometry={nodes.Plane109.geometry}
            material={materials["Material.012"]}
          />
          <mesh
            name="Plane109_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane109_1.geometry}
            material={materials["Material.013"]}
          />
          <mesh
            name="Plane109_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane109_2.geometry}
            material={materials["red light"]}
          />
        </group>
        <group
          name="Cylinder007"
          position={[38.119, 2.622, -32.814]}
          rotation={[Math.PI, -1.443, Math.PI]}
          scale={[0.266, 0.314, 0.263]}
        >
          <mesh
            name="Cylinder019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_1.geometry}
            material={materials.Extintor_agarre1}
          />
          <mesh
            name="Cylinder019_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_2.geometry}
            material={materials.Extintor_Agarre2}
          />
          <mesh
            name="Cylinder019_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_3.geometry}
            material={materials.Pico}
          />
          <mesh
            name="Cylinder019_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder019_4.geometry}
            material={materials.Trompa}
          />
        </group>
        <group
          name="BasureroDoble006"
          position={[18.176, -0.47, -62.84]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane110"
            castShadow
            receiveShadow
            geometry={nodes.Plane110.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane110_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane110_1.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane110_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane110_2.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="BasureroDoble007"
          position={[4.284, -0.532, -65.263]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[0.134, 0.486, 0.486]}
        >
          <mesh
            name="Plane111"
            castShadow
            receiveShadow
            geometry={nodes.Plane111.geometry}
            material={materials["basurero azul"]}
          />
          <mesh
            name="Plane111_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane111_1.geometry}
            material={materials["basurero amarillo"]}
          />
          <mesh
            name="Plane111_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane111_2.geometry}
            material={materials["base basurero"]}
          />
        </group>
        <group
          name="dispensadorAlchol035"
          position={[-14.964, 4.881, -36.548]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere039"
            castShadow
            receiveShadow
            geometry={nodes.Sphere039.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere039_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere039_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere039_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere039_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere039_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere039_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere039_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere039_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol036"
          position={[-12.287, 4.881, -31.711]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere040"
            castShadow
            receiveShadow
            geometry={nodes.Sphere040.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere040_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere040_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere040_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere040_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere040_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere040_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere040_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere040_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol037"
          position={[-45.394, 4.881, -36.459]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere041"
            castShadow
            receiveShadow
            geometry={nodes.Sphere041.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere041_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere041_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere041_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere041_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere041_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere041_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere041_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere041_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol038"
          position={[-47.034, 4.881, -31.613]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere042"
            castShadow
            receiveShadow
            geometry={nodes.Sphere042.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere042_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere042_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere042_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere042_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere042_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere042_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere042_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere042_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol039"
          position={[-90.837, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere043"
            castShadow
            receiveShadow
            geometry={nodes.Sphere043.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere043_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere043_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere043_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere043_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere043_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere043_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere043_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere043_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol040"
          position={[-92.477, 4.881, -31.469]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere044"
            castShadow
            receiveShadow
            geometry={nodes.Sphere044.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere044_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere044_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere044_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere044_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere044_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere044_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere044_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere044_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol041"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere045"
            castShadow
            receiveShadow
            geometry={nodes.Sphere045.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere045_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere045_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere045_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere045_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere045_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere045_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere045_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere045_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol042"
          position={[-126.877, 4.881, -31.416]}
          rotation={[0, -1.42, 0]}
          scale={0.006}
        >
          <mesh
            name="Sphere046"
            castShadow
            receiveShadow
            geometry={nodes.Sphere046.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere046_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere046_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere046_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere046_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere046_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere046_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere046_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere046_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol043"
          position={[-116.316, 4.881, -36.554]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere047"
            castShadow
            receiveShadow
            geometry={nodes.Sphere047.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere047_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere047_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere047_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere047_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere047_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere047_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere047_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere047_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="dispensadorAlchol044"
          position={[-125.905, 4.881, -36.46]}
          rotation={[0, 1.518, 0]}
          scale={0.007}
        >
          <mesh
            name="Sphere048"
            castShadow
            receiveShadow
            geometry={nodes.Sphere048.geometry}
            material={materials["Base.003"]}
          />
          <mesh
            name="Sphere048_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere048_1.geometry}
            material={materials.HuecoMedio}
          />
          <mesh
            name="Sphere048_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere048_2.geometry}
            material={materials.Centro}
          />
          <mesh
            name="Sphere048_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere048_3.geometry}
            material={materials.Amarillo}
          />
          <mesh
            name="Sphere048_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere048_4.geometry}
            material={materials.Rojo}
          />
        </group>
        <group
          name="Focos021"
          position={[-10.551, 14.13, -23.551]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro022"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro022.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro022_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro022_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro022_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos024"
          position={[-29.352, 14.13, -23.551]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro025"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro025.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro025_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro025_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro025_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro025_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos025"
          position={[-17.658, 14.13, -12.505]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro026"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro026.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro026_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro026_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro026_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro026_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos026"
          position={[-23.056, 14.13, -12.505]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro027"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro027.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro027_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro027_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro027_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos027"
          position={[-10.551, 14.13, -12.505]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro028"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro028.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro028_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro028_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro028_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro028_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos028"
          position={[-29.352, 14.13, -12.505]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro029"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro029.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro029_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro029_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos029"
          position={[-17.658, 14.13, -18.202]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro030"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro030.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro030_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro030_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro030_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro030_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos030"
          position={[-23.056, 14.13, -18.202]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro031"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro031.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro031_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro031_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro031_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro031_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos031"
          position={[-10.551, 14.13, -18.202]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro032"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro032.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro032_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro032_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro032_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro032_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="Focos032"
          position={[-29.352, 14.13, -18.202]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro033"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro033.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro033_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro033_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro033_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro033_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group name="Plane008" scale={[4.654, 1, 1]}>
          <mesh
            name="Plane112"
            castShadow
            receiveShadow
            geometry={nodes.Plane112.geometry}
            material={materials["BAse.001"]}
          />
          <mesh
            name="Plane112_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane112_1.geometry}
            material={materials["Teclas.001"]}
          />
        </group>
        <group
          name="ventilador_cafeteria"
          position={[-13.667, 14.372, -15.476]}
          rotation={[Math.PI / 2, 0, -1.658]}
          scale={[3.1, 3.485, 2.455]}
        >
          <mesh
            name="Black_Metallic_Ceiling_Fan"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan.geometry}
            material={materials.aspa1}
          />
          <mesh
            name="Black_Metallic_Ceiling_Fan_1"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan_1.geometry}
            material={nodes.Black_Metallic_Ceiling_Fan_1.material}
          />
        </group>
        <group
          name="ventilador_cafeteria001"
          position={[-13.667, 14.372, -21.622]}
          rotation={[Math.PI / 2, 0, -1.658]}
          scale={[3.1, 3.485, 2.455]}
        >
          <mesh
            name="Black_Metallic_Ceiling_Fan001"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan001.geometry}
            material={materials.aspa1}
          />
          <mesh
            name="Black_Metallic_Ceiling_Fan001_1"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan001_1.geometry}
            material={nodes.Black_Metallic_Ceiling_Fan001_1.material}
          />
        </group>
        <group
          name="ventilador_cafeteria002"
          position={[-22.42, 14.372, -15.476]}
          rotation={[Math.PI / 2, 0, -1.658]}
          scale={[3.1, 3.485, 2.455]}
        >
          <mesh
            name="Black_Metallic_Ceiling_Fan002"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan002.geometry}
            material={materials.aspa1}
          />
          <mesh
            name="Black_Metallic_Ceiling_Fan002_1"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan002_1.geometry}
            material={nodes.Black_Metallic_Ceiling_Fan002_1.material}
          />
        </group>
        <group
          name="ventilador_cafeteria003"
          position={[-22.42, 14.372, -21.622]}
          rotation={[Math.PI / 2, 0, -1.658]}
          scale={[3.1, 3.485, 2.455]}
        >
          <mesh
            name="Black_Metallic_Ceiling_Fan003"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan003.geometry}
            material={materials.aspa1}
          />
          <mesh
            name="Black_Metallic_Ceiling_Fan003_1"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan003_1.geometry}
            material={nodes.Black_Metallic_Ceiling_Fan003_1.material}
          />
        </group>
        <group
          name="Table_dask"
          position={[-11.861, 2.989, -24.154]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube002_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube002_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube002_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -24.713]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -24.712]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1002"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1002.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -24.03]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -24.03]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube006"
          castShadow
          receiveShadow
          geometry={nodes.Cube006.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -24.164]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -23.636]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask001"
          position={[-11.861, 2.989, -22.34]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube001_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3001"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3001.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -22.899]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2001"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2001.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -22.898]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1001"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1001.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -22.216]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1003"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1003.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -22.216]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube001"
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -22.35]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve001"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve001.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -21.822]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask002"
          position={[-11.861, 2.989, -20.474]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube004_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube004_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube004_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3002"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3002.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -21.033]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2002"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2002.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -21.032]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1004"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1004.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -20.35]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1005"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1005.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -20.35]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube002"
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -20.484]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve002"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve002.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -19.956]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask003"
          position={[-11.861, 2.989, -18.507]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube006_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3003"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3003.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -19.066]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2003"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2003.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -19.065]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1006"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1006.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -18.383]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1007"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1007.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -18.383]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube003"
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -18.517]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve003"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve003.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -17.989]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask004"
          position={[-11.861, 2.989, -16.582]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube008_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3004"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3004.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -17.142]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2004"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2004.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -17.14]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1008"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1008.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -16.458]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1009"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1009.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -16.458]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube004"
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -16.593]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve004"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve004.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -16.065]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask005"
          position={[-11.861, 2.989, -16.582]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube011_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3005"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3005.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -17.142]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2005"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2005.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -17.14]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1010"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1010.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -16.458]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1011"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1011.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -16.458]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube005"
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -16.593]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve005"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve005.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -16.065]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask006"
          position={[-11.861, 2.989, -14.397]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube013_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3006"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3006.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -14.957]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2006"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2006.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -14.956]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1012"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1012.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -14.273]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1013"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1013.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -14.273]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube007"
          castShadow
          receiveShadow
          geometry={nodes.Cube007.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -14.408]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve006"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve006.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -13.88]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask007"
          position={[-11.861, 2.989, -12.054]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube015_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3007"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3007.geometry}
          material={materials.Barra}
          position={[-11.793, 1.982, -12.614]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2007"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2007.geometry}
          material={materials.Barra}
          position={[-11.611, 1.982, -12.612]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1014"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1014.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1015"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1015.geometry}
          material={materials.Barra}
          position={[-11.903, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube008"
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials.Plastico}
          position={[-12.528, 2.987, -12.065]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve007"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve007.geometry}
          material={materials["Material.014"]}
          position={[-11.876, 2.575, -11.537]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask008"
          position={[-14.686, 2.989, -12.054]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube017_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3008"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3008.geometry}
          material={materials.Barra}
          position={[-14.618, 1.982, -12.614]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2008"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2008.geometry}
          material={materials.Barra}
          position={[-14.435, 1.982, -12.612]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1016"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1016.geometry}
          material={materials.Barra}
          position={[-14.728, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1017"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1017.geometry}
          material={materials.Barra}
          position={[-14.728, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube009"
          castShadow
          receiveShadow
          geometry={nodes.Cube009.geometry}
          material={materials.Plastico}
          position={[-15.353, 2.987, -12.065]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve008"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve008.geometry}
          material={materials["Material.014"]}
          position={[-14.7, 2.575, -11.537]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask009"
          position={[-18.148, 2.989, -12.054]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube019_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube019_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3009"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3009.geometry}
          material={materials.Barra}
          position={[-18.08, 1.982, -12.614]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2009"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2009.geometry}
          material={materials.Barra}
          position={[-17.897, 1.982, -12.612]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1018"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1018.geometry}
          material={materials.Barra}
          position={[-18.19, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1019"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1019.geometry}
          material={materials.Barra}
          position={[-18.19, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube010"
          castShadow
          receiveShadow
          geometry={nodes.Cube010.geometry}
          material={materials.Plastico}
          position={[-18.815, 2.987, -12.065]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve009"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve009.geometry}
          material={materials["Material.014"]}
          position={[-18.162, 2.575, -11.537]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask010"
          position={[-21.814, 2.989, -12.054]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube021_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube021_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3010"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3010.geometry}
          material={materials.Barra}
          position={[-21.746, 1.982, -12.614]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2010"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2010.geometry}
          material={materials.Barra}
          position={[-21.564, 1.982, -12.612]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1020"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1020.geometry}
          material={materials.Barra}
          position={[-21.856, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1021"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1021.geometry}
          material={materials.Barra}
          position={[-21.856, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube011"
          castShadow
          receiveShadow
          geometry={nodes.Cube011.geometry}
          material={materials.Plastico}
          position={[-22.481, 2.987, -12.065]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve010"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve010.geometry}
          material={materials["Material.014"]}
          position={[-21.828, 2.575, -11.537]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask011"
          position={[-25.591, 2.989, -12.054]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube023_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube023_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3011"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3011.geometry}
          material={materials.Barra}
          position={[-25.523, 1.982, -12.614]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2011"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2011.geometry}
          material={materials.Barra}
          position={[-25.341, 1.982, -12.612]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1022"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1022.geometry}
          material={materials.Barra}
          position={[-25.633, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1023"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1023.geometry}
          material={materials.Barra}
          position={[-25.633, 2.779, -11.93]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube012"
          castShadow
          receiveShadow
          geometry={nodes.Cube012.geometry}
          material={materials.Plastico}
          position={[-26.258, 2.987, -12.065]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve011"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve011.geometry}
          material={materials["Material.014"]}
          position={[-25.606, 2.575, -11.537]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask012"
          position={[-25.591, 2.989, -14.525]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube025_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube025_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube025_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3012"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3012.geometry}
          material={materials.Barra}
          position={[-25.523, 1.982, -15.084]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2012"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2012.geometry}
          material={materials.Barra}
          position={[-25.341, 1.982, -15.083]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1024"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1024.geometry}
          material={materials.Barra}
          position={[-25.633, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1025"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1025.geometry}
          material={materials.Barra}
          position={[-25.633, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube013"
          castShadow
          receiveShadow
          geometry={nodes.Cube013.geometry}
          material={materials.Plastico}
          position={[-26.258, 2.987, -14.536]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve012"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve012.geometry}
          material={materials["Material.014"]}
          position={[-25.606, 2.575, -14.008]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask013"
          position={[-21.759, 2.989, -14.525]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube027_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube027_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3013"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3013.geometry}
          material={materials.Barra}
          position={[-21.692, 1.982, -15.084]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2013"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2013.geometry}
          material={materials.Barra}
          position={[-21.509, 1.982, -15.083]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1026"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1026.geometry}
          material={materials.Barra}
          position={[-21.802, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1027"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1027.geometry}
          material={materials.Barra}
          position={[-21.802, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube014"
          castShadow
          receiveShadow
          geometry={nodes.Cube014.geometry}
          material={materials.Plastico}
          position={[-22.427, 2.987, -14.536]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve013"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve013.geometry}
          material={materials["Material.014"]}
          position={[-21.774, 2.575, -14.008]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask014"
          position={[-18.168, 2.989, -14.525]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube029_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3014"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3014.geometry}
          material={materials.Barra}
          position={[-18.1, 1.982, -15.084]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2014"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2014.geometry}
          material={materials.Barra}
          position={[-17.918, 1.982, -15.083]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1028"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1028.geometry}
          material={materials.Barra}
          position={[-18.21, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1029"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1029.geometry}
          material={materials.Barra}
          position={[-18.21, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube015"
          castShadow
          receiveShadow
          geometry={nodes.Cube015.geometry}
          material={materials.Plastico}
          position={[-18.835, 2.987, -14.536]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve014"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve014.geometry}
          material={materials["Material.014"]}
          position={[-18.183, 2.575, -14.008]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask015"
          position={[-14.935, 2.989, -14.525]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube031_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube031_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube031_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube031_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3015"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3015.geometry}
          material={materials.Barra}
          position={[-14.867, 1.982, -15.084]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2015"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2015.geometry}
          material={materials.Barra}
          position={[-14.684, 1.982, -15.083]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1030"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1030.geometry}
          material={materials.Barra}
          position={[-14.977, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1031"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1031.geometry}
          material={materials.Barra}
          position={[-14.977, 2.779, -14.401]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube016"
          castShadow
          receiveShadow
          geometry={nodes.Cube016.geometry}
          material={materials.Plastico}
          position={[-15.602, 2.987, -14.536]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve015"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve015.geometry}
          material={materials["Material.014"]}
          position={[-14.949, 2.575, -14.008]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask016"
          position={[-14.935, 2.989, -16.597]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube033_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube033_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube033_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube033_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3016"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3016.geometry}
          material={materials.Barra}
          position={[-14.867, 1.982, -17.156]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2016"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2016.geometry}
          material={materials.Barra}
          position={[-14.684, 1.982, -17.155]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1032"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1032.geometry}
          material={materials.Barra}
          position={[-14.977, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1033"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1033.geometry}
          material={materials.Barra}
          position={[-14.977, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube017"
          castShadow
          receiveShadow
          geometry={nodes.Cube017.geometry}
          material={materials.Plastico}
          position={[-15.602, 2.987, -16.608]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve016"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve016.geometry}
          material={materials["Material.014"]}
          position={[-14.949, 2.575, -16.08]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask017"
          position={[-18.317, 2.989, -16.597]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube035_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube035_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube035_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3017"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3017.geometry}
          material={materials.Barra}
          position={[-18.249, 1.982, -17.156]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2017"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2017.geometry}
          material={materials.Barra}
          position={[-18.067, 1.982, -17.155]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1034"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1034.geometry}
          material={materials.Barra}
          position={[-18.359, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1035"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1035.geometry}
          material={materials.Barra}
          position={[-18.359, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube018"
          castShadow
          receiveShadow
          geometry={nodes.Cube018.geometry}
          material={materials.Plastico}
          position={[-18.984, 2.987, -16.608]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve017"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve017.geometry}
          material={materials["Material.014"]}
          position={[-18.332, 2.575, -16.08]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask018"
          position={[-21.865, 2.989, -16.597]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube037_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube037_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube037_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube037_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3018"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3018.geometry}
          material={materials.Barra}
          position={[-21.797, 1.982, -17.156]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2018"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2018.geometry}
          material={materials.Barra}
          position={[-21.615, 1.982, -17.155]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1036"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1036.geometry}
          material={materials.Barra}
          position={[-21.907, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1037"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1037.geometry}
          material={materials.Barra}
          position={[-21.907, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube019"
          castShadow
          receiveShadow
          geometry={nodes.Cube019.geometry}
          material={materials.Plastico}
          position={[-22.532, 2.987, -16.608]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve018"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve018.geometry}
          material={materials["Material.014"]}
          position={[-21.879, 2.575, -16.08]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask019"
          position={[-25.59, 2.989, -16.597]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube039_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube039_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube039_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube039_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3019"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3019.geometry}
          material={materials.Barra}
          position={[-25.522, 1.982, -17.156]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2019"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2019.geometry}
          material={materials.Barra}
          position={[-25.34, 1.982, -17.155]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1038"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1038.geometry}
          material={materials.Barra}
          position={[-25.632, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1039"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1039.geometry}
          material={materials.Barra}
          position={[-25.632, 2.779, -16.473]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube020"
          castShadow
          receiveShadow
          geometry={nodes.Cube020.geometry}
          material={materials.Plastico}
          position={[-26.258, 2.987, -16.608]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve019"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve019.geometry}
          material={materials["Material.014"]}
          position={[-25.605, 2.575, -16.08]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask020"
          position={[-25.59, 2.989, -18.592]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube041_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube041_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube041_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube041_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3020"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3020.geometry}
          material={materials.Barra}
          position={[-25.522, 1.982, -19.152]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2020"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2020.geometry}
          material={materials.Barra}
          position={[-25.34, 1.982, -19.151]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1040"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1040.geometry}
          material={materials.Barra}
          position={[-25.632, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1041"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1041.geometry}
          material={materials.Barra}
          position={[-25.632, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube021"
          castShadow
          receiveShadow
          geometry={nodes.Cube021.geometry}
          material={materials.Plastico}
          position={[-26.258, 2.987, -18.603]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve020"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve020.geometry}
          material={materials["Material.014"]}
          position={[-25.605, 2.575, -18.075]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask021"
          position={[-21.702, 2.989, -18.592]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube043_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube043_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube043_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube043_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3021"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3021.geometry}
          material={materials.Barra}
          position={[-21.634, 1.982, -19.152]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2021"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2021.geometry}
          material={materials.Barra}
          position={[-21.452, 1.982, -19.151]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1042"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1042.geometry}
          material={materials.Barra}
          position={[-21.744, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1043"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1043.geometry}
          material={materials.Barra}
          position={[-21.744, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube022"
          castShadow
          receiveShadow
          geometry={nodes.Cube022.geometry}
          material={materials.Plastico}
          position={[-22.369, 2.987, -18.603]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve021"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve021.geometry}
          material={materials["Material.014"]}
          position={[-21.717, 2.575, -18.075]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask022"
          position={[-18.296, 2.989, -18.592]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube045_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube045_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube045_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube045_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3022"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3022.geometry}
          material={materials.Barra}
          position={[-18.228, 1.982, -19.152]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2022"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2022.geometry}
          material={materials.Barra}
          position={[-18.046, 1.982, -19.151]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1044"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1044.geometry}
          material={materials.Barra}
          position={[-18.338, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1045"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1045.geometry}
          material={materials.Barra}
          position={[-18.338, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube023"
          castShadow
          receiveShadow
          geometry={nodes.Cube023.geometry}
          material={materials.Plastico}
          position={[-18.963, 2.987, -18.603]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve022"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve022.geometry}
          material={materials["Material.014"]}
          position={[-18.31, 2.575, -18.075]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask023"
          position={[-15.023, 2.989, -18.592]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube047_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube047_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube047_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube047_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3023"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3023.geometry}
          material={materials.Barra}
          position={[-14.955, 1.982, -19.152]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2023"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2023.geometry}
          material={materials.Barra}
          position={[-14.773, 1.982, -19.151]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1046"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1046.geometry}
          material={materials.Barra}
          position={[-15.065, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1047"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1047.geometry}
          material={materials.Barra}
          position={[-15.065, 2.779, -18.468]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube024"
          castShadow
          receiveShadow
          geometry={nodes.Cube024.geometry}
          material={materials.Plastico}
          position={[-15.691, 2.987, -18.603]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve023"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve023.geometry}
          material={materials["Material.014"]}
          position={[-15.038, 2.575, -18.075]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask024"
          position={[-15.023, 2.989, -20.503]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube049_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube049_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube049_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube049_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3024"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3024.geometry}
          material={materials.Barra}
          position={[-14.955, 1.982, -21.063]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2024"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2024.geometry}
          material={materials.Barra}
          position={[-14.773, 1.982, -21.062]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1048"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1048.geometry}
          material={materials.Barra}
          position={[-15.065, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1049"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1049.geometry}
          material={materials.Barra}
          position={[-15.065, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube025"
          castShadow
          receiveShadow
          geometry={nodes.Cube025.geometry}
          material={materials.Plastico}
          position={[-15.691, 2.987, -20.514]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve024"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve024.geometry}
          material={materials["Material.014"]}
          position={[-15.038, 2.575, -19.986]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask025"
          position={[-18.22, 2.989, -20.503]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube051_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube051_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube051_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube051_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3025"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3025.geometry}
          material={materials.Barra}
          position={[-18.152, 1.982, -21.063]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2025"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2025.geometry}
          material={materials.Barra}
          position={[-17.97, 1.982, -21.062]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1050"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1050.geometry}
          material={materials.Barra}
          position={[-18.262, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1051"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1051.geometry}
          material={materials.Barra}
          position={[-18.262, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube026"
          castShadow
          receiveShadow
          geometry={nodes.Cube026.geometry}
          material={materials.Plastico}
          position={[-18.887, 2.987, -20.514]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve025"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve025.geometry}
          material={materials["Material.014"]}
          position={[-18.235, 2.575, -19.986]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask026"
          position={[-21.644, 2.989, -20.503]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube053_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube053_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube053_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube053_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3026"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3026.geometry}
          material={materials.Barra}
          position={[-21.576, 1.982, -21.063]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2026"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2026.geometry}
          material={materials.Barra}
          position={[-21.394, 1.982, -21.062]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1052"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1052.geometry}
          material={materials.Barra}
          position={[-21.686, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1053"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1053.geometry}
          material={materials.Barra}
          position={[-21.686, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube027"
          castShadow
          receiveShadow
          geometry={nodes.Cube027.geometry}
          material={materials.Plastico}
          position={[-22.312, 2.987, -20.514]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve026"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve026.geometry}
          material={materials["Material.014"]}
          position={[-21.659, 2.575, -19.986]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask027"
          position={[-25.592, 2.989, -20.503]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube055_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube055_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube055_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube055_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3027"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3027.geometry}
          material={materials.Barra}
          position={[-25.524, 1.982, -21.063]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2027"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2027.geometry}
          material={materials.Barra}
          position={[-25.342, 1.982, -21.062]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1054"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1054.geometry}
          material={materials.Barra}
          position={[-25.634, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1055"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1055.geometry}
          material={materials.Barra}
          position={[-25.634, 2.779, -20.379]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube028"
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials.Plastico}
          position={[-26.259, 2.987, -20.514]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve027"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve027.geometry}
          material={materials["Material.014"]}
          position={[-25.607, 2.575, -19.986]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask028"
          position={[-25.592, 2.989, -22.403]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube057_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube057_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube057_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube057_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3028"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3028.geometry}
          material={materials.Barra}
          position={[-25.524, 1.982, -22.962]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2028"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2028.geometry}
          material={materials.Barra}
          position={[-25.342, 1.982, -22.961]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1056"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1056.geometry}
          material={materials.Barra}
          position={[-25.634, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1057"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1057.geometry}
          material={materials.Barra}
          position={[-25.634, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube029"
          castShadow
          receiveShadow
          geometry={nodes.Cube029.geometry}
          material={materials.Plastico}
          position={[-26.259, 2.987, -22.414]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve028"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve028.geometry}
          material={materials["Material.014"]}
          position={[-25.607, 2.575, -21.886]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask029"
          position={[-21.564, 2.989, -22.403]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube059_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube059_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube059_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube059_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3029"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3029.geometry}
          material={materials.Barra}
          position={[-21.496, 1.982, -22.962]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2029"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2029.geometry}
          material={materials.Barra}
          position={[-21.314, 1.982, -22.961]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1058"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1058.geometry}
          material={materials.Barra}
          position={[-21.606, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1059"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1059.geometry}
          material={materials.Barra}
          position={[-21.606, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube030"
          castShadow
          receiveShadow
          geometry={nodes.Cube030.geometry}
          material={materials.Plastico}
          position={[-22.231, 2.987, -22.414]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve029"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve029.geometry}
          material={materials["Material.014"]}
          position={[-21.578, 2.575, -21.886]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask030"
          position={[-18.225, 2.989, -22.403]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube061_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube061_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube061_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube061_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3030"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3030.geometry}
          material={materials.Barra}
          position={[-18.157, 1.982, -22.962]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2030"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2030.geometry}
          material={materials.Barra}
          position={[-17.975, 1.982, -22.961]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1060"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1060.geometry}
          material={materials.Barra}
          position={[-18.267, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1061"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1061.geometry}
          material={materials.Barra}
          position={[-18.267, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube031"
          castShadow
          receiveShadow
          geometry={nodes.Cube031.geometry}
          material={materials.Plastico}
          position={[-18.893, 2.987, -22.414]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve030"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve030.geometry}
          material={materials["Material.014"]}
          position={[-18.24, 2.575, -21.886]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask031"
          position={[-14.98, 2.989, -22.403]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube063_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube063_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube063_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube063_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3031"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3031.geometry}
          material={materials.Barra}
          position={[-14.912, 1.982, -22.962]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2031"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2031.geometry}
          material={materials.Barra}
          position={[-14.73, 1.982, -22.961]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1062"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1062.geometry}
          material={materials.Barra}
          position={[-15.022, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1063"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1063.geometry}
          material={materials.Barra}
          position={[-15.022, 2.779, -22.279]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube032"
          castShadow
          receiveShadow
          geometry={nodes.Cube032.geometry}
          material={materials.Plastico}
          position={[-15.647, 2.987, -22.414]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve031"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve031.geometry}
          material={materials["Material.014"]}
          position={[-14.995, 2.575, -21.886]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask032"
          position={[-14.98, 2.989, -24.213]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube065_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube065_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube065_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube065_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3032"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3032.geometry}
          material={materials.Barra}
          position={[-14.912, 1.982, -24.772]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2032"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2032.geometry}
          material={materials.Barra}
          position={[-14.73, 1.982, -24.771]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1064"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1064.geometry}
          material={materials.Barra}
          position={[-15.022, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1065"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1065.geometry}
          material={materials.Barra}
          position={[-15.022, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube033"
          castShadow
          receiveShadow
          geometry={nodes.Cube033.geometry}
          material={materials.Plastico}
          position={[-15.647, 2.987, -24.224]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve032"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve032.geometry}
          material={materials["Material.014"]}
          position={[-14.995, 2.575, -23.696]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask033"
          position={[-18.207, 2.989, -24.213]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube067_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube067_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube067_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube067_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3033"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3033.geometry}
          material={materials.Barra}
          position={[-18.139, 1.982, -24.772]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2033"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2033.geometry}
          material={materials.Barra}
          position={[-17.957, 1.982, -24.771]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1066"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1066.geometry}
          material={materials.Barra}
          position={[-18.249, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1067"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1067.geometry}
          material={materials.Barra}
          position={[-18.249, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube034"
          castShadow
          receiveShadow
          geometry={nodes.Cube034.geometry}
          material={materials.Plastico}
          position={[-18.875, 2.987, -24.224]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve033"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve033.geometry}
          material={materials["Material.014"]}
          position={[-18.222, 2.575, -23.696]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask034"
          position={[-18.207, 2.989, -24.213]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube069_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube069_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube069_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube069_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3034"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3034.geometry}
          material={materials.Barra}
          position={[-18.139, 1.982, -24.772]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2034"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2034.geometry}
          material={materials.Barra}
          position={[-17.957, 1.982, -24.771]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1068"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1068.geometry}
          material={materials.Barra}
          position={[-18.249, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1069"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1069.geometry}
          material={materials.Barra}
          position={[-18.249, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube035"
          castShadow
          receiveShadow
          geometry={nodes.Cube035.geometry}
          material={materials.Plastico}
          position={[-18.875, 2.987, -24.224]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve034"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve034.geometry}
          material={materials["Material.014"]}
          position={[-18.222, 2.575, -23.696]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Cube036"
          position={[-22.124, 2.987, -24.224]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        >
          <mesh
            name="Cube072_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_1.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube072_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_2.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube072_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_3.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube072_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_4.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube072_5"
            castShadow
            receiveShadow
            geometry={nodes.Cube072_5.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Table_dask036"
          position={[-25.216, 2.989, -24.213]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube073_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube073_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube073_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube073_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3036"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3036.geometry}
          material={materials.Barra}
          position={[-25.148, 1.982, -24.772]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2036"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2036.geometry}
          material={materials.Barra}
          position={[-24.965, 1.982, -24.771]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1072"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1072.geometry}
          material={materials.Barra}
          position={[-25.258, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1073"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1073.geometry}
          material={materials.Barra}
          position={[-25.258, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube037"
          castShadow
          receiveShadow
          geometry={nodes.Cube037.geometry}
          material={materials.Plastico}
          position={[-25.883, 2.987, -24.224]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve036"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve036.geometry}
          material={materials["Material.014"]}
          position={[-25.23, 2.575, -23.696]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask037"
          position={[-58.737, 2.989, -24.213]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube075_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube075_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube075_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube075_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3037"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3037.geometry}
          material={materials.Barra}
          position={[-58.669, 1.982, -24.772]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2037"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2037.geometry}
          material={materials.Barra}
          position={[-58.487, 1.982, -24.771]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1074"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1074.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1075"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1075.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -24.089]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube038"
          castShadow
          receiveShadow
          geometry={nodes.Cube038.geometry}
          material={materials.Plastico}
          position={[-59.405, 2.987, -24.224]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve037"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve037.geometry}
          material={materials["Material.014"]}
          position={[-58.752, 2.575, -23.696]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask038"
          position={[-58.737, 2.989, -22.021]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube077_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube077_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube077_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube077_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3038"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3038.geometry}
          material={materials.Barra}
          position={[-58.669, 1.982, -22.58]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2038"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2038.geometry}
          material={materials.Barra}
          position={[-58.487, 1.982, -22.579]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1076"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1076.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -21.897]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1077"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1077.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -21.897]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube039"
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials.Plastico}
          position={[-59.405, 2.987, -22.031]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve038"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve038.geometry}
          material={materials["Material.014"]}
          position={[-58.752, 2.575, -21.503]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask039"
          position={[-58.737, 2.989, -19.586]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube079_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube079_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube079_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube079_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3039"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3039.geometry}
          material={materials.Barra}
          position={[-58.669, 1.982, -20.145]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2039"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2039.geometry}
          material={materials.Barra}
          position={[-58.487, 1.982, -20.144]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1078"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1078.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -19.462]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1079"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1079.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -19.462]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube040"
          castShadow
          receiveShadow
          geometry={nodes.Cube040.geometry}
          material={materials.Plastico}
          position={[-59.405, 2.987, -19.596]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve039"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve039.geometry}
          material={materials["Material.014"]}
          position={[-58.752, 2.575, -19.068]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask040"
          position={[-58.737, 2.989, -17.039]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube081_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube081_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube081_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube081_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3040"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3040.geometry}
          material={materials.Barra}
          position={[-58.669, 1.982, -17.598]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2040"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2040.geometry}
          material={materials.Barra}
          position={[-58.487, 1.982, -17.597]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1080"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1080.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -16.915]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1081"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1081.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -16.915]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube041"
          castShadow
          receiveShadow
          geometry={nodes.Cube041.geometry}
          material={materials.Plastico}
          position={[-59.405, 2.987, -17.049]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve040"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve040.geometry}
          material={materials["Material.014"]}
          position={[-58.752, 2.575, -16.521]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask041"
          position={[-58.737, 2.989, -17.039]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube083_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube083_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube083_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube083_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3041"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3041.geometry}
          material={materials.Barra}
          position={[-58.669, 1.982, -17.598]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2041"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2041.geometry}
          material={materials.Barra}
          position={[-58.487, 1.982, -17.597]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1082"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1082.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -16.915]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1083"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1083.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -16.915]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube042"
          castShadow
          receiveShadow
          geometry={nodes.Cube042.geometry}
          material={materials.Plastico}
          position={[-59.405, 2.987, -17.049]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve041"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve041.geometry}
          material={materials["Material.014"]}
          position={[-58.752, 2.575, -16.521]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask042"
          position={[-58.737, 2.989, -14.683]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube085_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube085_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube085_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube085_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3042"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3042.geometry}
          material={materials.Barra}
          position={[-58.669, 1.982, -15.243]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2042"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2042.geometry}
          material={materials.Barra}
          position={[-58.487, 1.982, -15.241]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1084"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1084.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -14.559]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1085"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1085.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -14.559]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube043"
          castShadow
          receiveShadow
          geometry={nodes.Cube043.geometry}
          material={materials.Plastico}
          position={[-59.405, 2.987, -14.694]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve042"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve042.geometry}
          material={materials["Material.014"]}
          position={[-58.752, 2.575, -14.166]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask043"
          position={[-58.737, 2.989, -11.989]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube087_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube087_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube087_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube087_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3043"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3043.geometry}
          material={materials.Barra}
          position={[-58.669, 1.982, -12.548]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2043"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2043.geometry}
          material={materials.Barra}
          position={[-58.487, 1.982, -12.547]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1086"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1086.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1087"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1087.geometry}
          material={materials.Barra}
          position={[-58.779, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube044"
          castShadow
          receiveShadow
          geometry={nodes.Cube044.geometry}
          material={materials.Plastico}
          position={[-59.405, 2.987, -12]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve043"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve043.geometry}
          material={materials["Material.014"]}
          position={[-58.752, 2.575, -11.471]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask044"
          position={[-55.617, 2.989, -11.989]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube089_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube089_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube089_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube089_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3044"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3044.geometry}
          material={materials.Barra}
          position={[-55.549, 1.982, -12.548]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2044"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2044.geometry}
          material={materials.Barra}
          position={[-55.367, 1.982, -12.547]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1088"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1088.geometry}
          material={materials.Barra}
          position={[-55.659, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1089"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1089.geometry}
          material={materials.Barra}
          position={[-55.659, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube045"
          castShadow
          receiveShadow
          geometry={nodes.Cube045.geometry}
          material={materials.Plastico}
          position={[-56.285, 2.987, -12]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve044"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve044.geometry}
          material={materials["Material.014"]}
          position={[-55.632, 2.575, -11.471]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask045"
          position={[-52.887, 2.989, -11.989]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube091_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube091_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube091_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube091_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3045"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3045.geometry}
          material={materials.Barra}
          position={[-52.819, 1.982, -12.548]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2045"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2045.geometry}
          material={materials.Barra}
          position={[-52.637, 1.982, -12.547]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1090"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1090.geometry}
          material={materials.Barra}
          position={[-52.929, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1091"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1091.geometry}
          material={materials.Barra}
          position={[-52.929, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube046"
          castShadow
          receiveShadow
          geometry={nodes.Cube046.geometry}
          material={materials.Plastico}
          position={[-53.555, 2.987, -12]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve045"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve045.geometry}
          material={materials["Material.014"]}
          position={[-52.902, 2.575, -11.471]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask046"
          position={[-50.186, 2.989, -11.989]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube093_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube093_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube093_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube093_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3046"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3046.geometry}
          material={materials.Barra}
          position={[-50.118, 1.982, -12.548]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2046"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2046.geometry}
          material={materials.Barra}
          position={[-49.936, 1.982, -12.547]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1092"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1092.geometry}
          material={materials.Barra}
          position={[-50.228, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1093"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1093.geometry}
          material={materials.Barra}
          position={[-50.228, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube047"
          castShadow
          receiveShadow
          geometry={nodes.Cube047.geometry}
          material={materials.Plastico}
          position={[-50.854, 2.987, -12]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve046"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve046.geometry}
          material={materials["Material.014"]}
          position={[-50.201, 2.575, -11.471]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask047"
          position={[-47.555, 2.989, -11.989]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube095_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube095_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube095_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube095_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3047"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3047.geometry}
          material={materials.Barra}
          position={[-47.487, 1.982, -12.548]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2047"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2047.geometry}
          material={materials.Barra}
          position={[-47.305, 1.982, -12.547]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1094"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1094.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1095"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1095.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -11.865]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube048"
          castShadow
          receiveShadow
          geometry={nodes.Cube048.geometry}
          material={materials.Plastico}
          position={[-48.223, 2.987, -12]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve047"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve047.geometry}
          material={materials["Material.014"]}
          position={[-47.57, 2.575, -11.471]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask048"
          position={[-47.555, 2.989, -14.605]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube097_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube097_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube097_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube097_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3048"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3048.geometry}
          material={materials.Barra}
          position={[-47.487, 1.982, -15.164]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2048"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2048.geometry}
          material={materials.Barra}
          position={[-47.305, 1.982, -15.163]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1096"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1096.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -14.481]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1097"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1097.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -14.481]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube049"
          castShadow
          receiveShadow
          geometry={nodes.Cube049.geometry}
          material={materials.Plastico}
          position={[-48.223, 2.987, -14.616]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve048"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve048.geometry}
          material={materials["Material.014"]}
          position={[-47.57, 2.575, -14.088]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask049"
          position={[-47.555, 2.989, -16.984]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube099_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube099_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube099_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube099_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3049"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3049.geometry}
          material={materials.Barra}
          position={[-47.487, 1.982, -17.543]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2049"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2049.geometry}
          material={materials.Barra}
          position={[-47.305, 1.982, -17.542]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1098"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1098.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -16.86]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1099"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1099.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -16.86]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube050"
          castShadow
          receiveShadow
          geometry={nodes.Cube050.geometry}
          material={materials.Plastico}
          position={[-48.223, 2.987, -16.995]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve049"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve049.geometry}
          material={materials["Material.014"]}
          position={[-47.57, 2.575, -16.467]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask050"
          position={[-47.555, 2.989, -19.556]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube101_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube101_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube101_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube101_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3050"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3050.geometry}
          material={materials.Barra}
          position={[-47.487, 1.982, -20.116]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2050"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2050.geometry}
          material={materials.Barra}
          position={[-47.305, 1.982, -20.114]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1100"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1100.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -19.432]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1101"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1101.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -19.432]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube051"
          castShadow
          receiveShadow
          geometry={nodes.Cube051.geometry}
          material={materials.Plastico}
          position={[-48.223, 2.987, -19.567]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve050"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve050.geometry}
          material={materials["Material.014"]}
          position={[-47.57, 2.575, -19.039]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask051"
          position={[-47.555, 2.989, -21.863]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube103_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube103_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube103_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube103_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3051"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3051.geometry}
          material={materials.Barra}
          position={[-47.487, 1.982, -22.422]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2051"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2051.geometry}
          material={materials.Barra}
          position={[-47.305, 1.982, -22.421]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1102"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1102.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -21.739]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1103"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1103.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -21.739]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube052"
          castShadow
          receiveShadow
          geometry={nodes.Cube052.geometry}
          material={materials.Plastico}
          position={[-48.223, 2.987, -21.873]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve051"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve051.geometry}
          material={materials["Material.014"]}
          position={[-47.57, 2.575, -21.345]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask052"
          position={[-47.555, 2.989, -24.326]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube105_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube105_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube105_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube105_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3052"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3052.geometry}
          material={materials.Barra}
          position={[-47.487, 1.982, -24.885]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2052"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2052.geometry}
          material={materials.Barra}
          position={[-47.305, 1.982, -24.884]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1104"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1104.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1105"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1105.geometry}
          material={materials.Barra}
          position={[-47.597, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube053"
          castShadow
          receiveShadow
          geometry={nodes.Cube053.geometry}
          material={materials.Plastico}
          position={[-48.223, 2.987, -24.337]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve052"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve052.geometry}
          material={materials["Material.014"]}
          position={[-47.57, 2.575, -23.809]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask053"
          position={[-50.137, 2.989, -24.326]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube107_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube107_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube107_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube107_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3053"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3053.geometry}
          material={materials.Barra}
          position={[-50.069, 1.982, -24.885]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2053"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2053.geometry}
          material={materials.Barra}
          position={[-49.887, 1.982, -24.884]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1106"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1106.geometry}
          material={materials.Barra}
          position={[-50.179, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1107"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1107.geometry}
          material={materials.Barra}
          position={[-50.179, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube054"
          castShadow
          receiveShadow
          geometry={nodes.Cube054.geometry}
          material={materials.Plastico}
          position={[-50.804, 2.987, -24.337]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve053"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve053.geometry}
          material={materials["Material.014"]}
          position={[-50.152, 2.575, -23.809]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask054"
          position={[-52.803, 2.989, -24.326]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube109_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube109_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube109_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube109_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3054"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3054.geometry}
          material={materials.Barra}
          position={[-52.735, 1.982, -24.885]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2054"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2054.geometry}
          material={materials.Barra}
          position={[-52.553, 1.982, -24.884]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1108"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1108.geometry}
          material={materials.Barra}
          position={[-52.845, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1109"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1109.geometry}
          material={materials.Barra}
          position={[-52.845, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube055"
          castShadow
          receiveShadow
          geometry={nodes.Cube055.geometry}
          material={materials.Plastico}
          position={[-53.47, 2.987, -24.337]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve054"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve054.geometry}
          material={materials["Material.014"]}
          position={[-52.818, 2.575, -23.809]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask055"
          position={[-55.693, 2.989, -24.326]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube111_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube111_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube111_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube111_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3055"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3055.geometry}
          material={materials.Barra}
          position={[-55.625, 1.982, -24.885]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2055"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2055.geometry}
          material={materials.Barra}
          position={[-55.443, 1.982, -24.884]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1110"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1110.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1111"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1111.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -24.202]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube056"
          castShadow
          receiveShadow
          geometry={nodes.Cube056.geometry}
          material={materials.Plastico}
          position={[-56.361, 2.987, -24.337]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve055"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve055.geometry}
          material={materials["Material.014"]}
          position={[-55.708, 2.575, -23.809]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask056"
          position={[-55.693, 2.989, -22.118]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube113_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube113_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube113_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube113_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3056"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3056.geometry}
          material={materials.Barra}
          position={[-55.625, 1.982, -22.678]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2056"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2056.geometry}
          material={materials.Barra}
          position={[-55.443, 1.982, -22.676]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1112"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1112.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -21.994]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1113"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1113.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -21.994]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube057"
          castShadow
          receiveShadow
          geometry={nodes.Cube057.geometry}
          material={materials.Plastico}
          position={[-56.361, 2.987, -22.129]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve056"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve056.geometry}
          material={materials["Material.014"]}
          position={[-55.708, 2.575, -21.601]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask057"
          position={[-55.693, 2.989, -19.575]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube115_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube115_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube115_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube115_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3057"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3057.geometry}
          material={materials.Barra}
          position={[-55.625, 1.982, -20.134]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2057"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2057.geometry}
          material={materials.Barra}
          position={[-55.443, 1.982, -20.133]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1114"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1114.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -19.451]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1115"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1115.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -19.451]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube058"
          castShadow
          receiveShadow
          geometry={nodes.Cube058.geometry}
          material={materials.Plastico}
          position={[-56.361, 2.987, -19.586]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve057"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve057.geometry}
          material={materials["Material.014"]}
          position={[-55.708, 2.575, -19.058]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask058"
          position={[-55.693, 2.989, -17.012]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube117_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube117_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube117_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube117_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3058"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3058.geometry}
          material={materials.Barra}
          position={[-55.625, 1.982, -17.572]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2058"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2058.geometry}
          material={materials.Barra}
          position={[-55.443, 1.982, -17.571]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1116"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1116.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -16.888]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1117"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1117.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -16.888]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube059"
          castShadow
          receiveShadow
          geometry={nodes.Cube059.geometry}
          material={materials.Plastico}
          position={[-56.361, 2.987, -17.023]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve058"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve058.geometry}
          material={materials["Material.014"]}
          position={[-55.708, 2.575, -16.495]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask059"
          position={[-55.693, 2.989, -14.621]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube119_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube119_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube119_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube119_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3059"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3059.geometry}
          material={materials.Barra}
          position={[-55.625, 1.982, -15.18]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2059"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2059.geometry}
          material={materials.Barra}
          position={[-55.443, 1.982, -15.179]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1118"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1118.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -14.496]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1119"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1119.geometry}
          material={materials.Barra}
          position={[-55.735, 2.779, -14.496]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube060"
          castShadow
          receiveShadow
          geometry={nodes.Cube060.geometry}
          material={materials.Plastico}
          position={[-56.361, 2.987, -14.631]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve059"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve059.geometry}
          material={materials["Material.014"]}
          position={[-55.708, 2.575, -14.103]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask060"
          position={[-52.815, 2.989, -14.621]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube121_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube121_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube121_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube121_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3060"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3060.geometry}
          material={materials.Barra}
          position={[-52.747, 1.982, -15.18]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2060"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2060.geometry}
          material={materials.Barra}
          position={[-52.565, 1.982, -15.179]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1120"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1120.geometry}
          material={materials.Barra}
          position={[-52.857, 2.779, -14.496]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1121"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1121.geometry}
          material={materials.Barra}
          position={[-52.857, 2.779, -14.496]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube061"
          castShadow
          receiveShadow
          geometry={nodes.Cube061.geometry}
          material={materials.Plastico}
          position={[-53.482, 2.987, -14.631]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve060"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve060.geometry}
          material={materials["Material.014"]}
          position={[-52.83, 2.575, -14.103]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask061"
          position={[-50.117, 2.989, -14.621]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube123_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube123_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube123_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube123_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3061"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3061.geometry}
          material={materials.Barra}
          position={[-50.05, 1.982, -15.18]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2061"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2061.geometry}
          material={materials.Barra}
          position={[-49.867, 1.982, -15.179]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1122"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1122.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -14.496]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1123"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1123.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -14.496]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube062"
          castShadow
          receiveShadow
          geometry={nodes.Cube062.geometry}
          material={materials.Plastico}
          position={[-50.785, 2.987, -14.631]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve061"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve061.geometry}
          material={materials["Material.014"]}
          position={[-50.132, 2.575, -14.103]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask062"
          position={[-50.117, 2.989, -16.977]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube125_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube125_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube125_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube125_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3062"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3062.geometry}
          material={materials.Barra}
          position={[-50.05, 1.982, -17.537]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2062"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2062.geometry}
          material={materials.Barra}
          position={[-49.867, 1.982, -17.535]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1124"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1124.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -16.853]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1125"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1125.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -16.853]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube063"
          castShadow
          receiveShadow
          geometry={nodes.Cube063.geometry}
          material={materials.Plastico}
          position={[-50.785, 2.987, -16.988]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve062"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve062.geometry}
          material={materials["Material.014"]}
          position={[-50.132, 2.575, -16.46]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask063"
          position={[-50.117, 2.989, -19.6]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube127_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube127_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube127_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube127_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3063"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3063.geometry}
          material={materials.Barra}
          position={[-50.05, 1.982, -20.159]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2063"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2063.geometry}
          material={materials.Barra}
          position={[-49.867, 1.982, -20.158]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1126"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1126.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -19.476]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1127"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1127.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -19.476]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube064"
          castShadow
          receiveShadow
          geometry={nodes.Cube064.geometry}
          material={materials.Plastico}
          position={[-50.785, 2.987, -19.61]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve063"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve063.geometry}
          material={materials["Material.014"]}
          position={[-50.132, 2.575, -19.082]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask064"
          position={[-50.117, 2.989, -19.6]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube129_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube129_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube129_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube129_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3064"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3064.geometry}
          material={materials.Barra}
          position={[-50.05, 1.982, -20.159]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2064"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2064.geometry}
          material={materials.Barra}
          position={[-49.867, 1.982, -20.158]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1128"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1128.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -19.476]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1129"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1129.geometry}
          material={materials.Barra}
          position={[-50.16, 2.779, -19.476]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube065"
          castShadow
          receiveShadow
          geometry={nodes.Cube065.geometry}
          material={materials.Plastico}
          position={[-50.785, 2.987, -19.61]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve064"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve064.geometry}
          material={materials["Material.014"]}
          position={[-50.132, 2.575, -19.082]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask065"
          position={[-52.797, 2.989, -19.6]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube131_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube131_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube131_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube131_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3065"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3065.geometry}
          material={materials.Barra}
          position={[-52.729, 1.982, -20.159]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2065"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2065.geometry}
          material={materials.Barra}
          position={[-52.546, 1.982, -20.158]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1130"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1130.geometry}
          material={materials.Barra}
          position={[-52.839, 2.779, -19.476]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1131"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1131.geometry}
          material={materials.Barra}
          position={[-52.839, 2.779, -19.476]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube066"
          castShadow
          receiveShadow
          geometry={nodes.Cube066.geometry}
          material={materials.Plastico}
          position={[-53.464, 2.987, -19.61]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve065"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve065.geometry}
          material={materials["Material.014"]}
          position={[-52.811, 2.575, -19.082]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask066"
          position={[-52.797, 2.989, -17.051]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube133_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube133_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube133_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube133_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3066"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3066.geometry}
          material={materials.Barra}
          position={[-52.729, 1.982, -17.61]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2066"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2066.geometry}
          material={materials.Barra}
          position={[-52.546, 1.982, -17.609]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1132"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1132.geometry}
          material={materials.Barra}
          position={[-52.839, 2.779, -16.927]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1133"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1133.geometry}
          material={materials.Barra}
          position={[-52.839, 2.779, -16.927]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube067"
          castShadow
          receiveShadow
          geometry={nodes.Cube067.geometry}
          material={materials.Plastico}
          position={[-53.464, 2.987, -17.062]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve066"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve066.geometry}
          material={materials["Material.014"]}
          position={[-52.811, 2.575, -16.534]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask067"
          position={[-52.797, 2.989, -22.083]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube135_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube135_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube135_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube135_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3067"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3067.geometry}
          material={materials.Barra}
          position={[-52.729, 1.982, -22.642]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2067"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2067.geometry}
          material={materials.Barra}
          position={[-52.546, 1.982, -22.641]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1134"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1134.geometry}
          material={materials.Barra}
          position={[-52.839, 2.779, -21.959]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1135"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1135.geometry}
          material={materials.Barra}
          position={[-52.839, 2.779, -21.959]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube068"
          castShadow
          receiveShadow
          geometry={nodes.Cube068.geometry}
          material={materials.Plastico}
          position={[-53.464, 2.987, -22.094]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve067"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve067.geometry}
          material={materials["Material.014"]}
          position={[-52.811, 2.575, -21.566]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask068"
          position={[-50.286, 2.989, -22.083]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube137_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube137_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube137_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube137_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3068"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3068.geometry}
          material={materials.Barra}
          position={[-50.218, 1.982, -22.642]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2068"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2068.geometry}
          material={materials.Barra}
          position={[-50.035, 1.982, -22.641]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1136"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1136.geometry}
          material={materials.Barra}
          position={[-50.328, 2.779, -21.959]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1137"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1137.geometry}
          material={materials.Barra}
          position={[-50.328, 2.779, -21.959]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube069"
          castShadow
          receiveShadow
          geometry={nodes.Cube069.geometry}
          material={materials.Plastico}
          position={[-50.953, 2.987, -22.094]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve068"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve068.geometry}
          material={materials["Material.014"]}
          position={[-50.3, 2.575, -21.566]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask069"
          position={[-93.514, 2.989, -155.921]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube139_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube139_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube139_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube139_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3069"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3069.geometry}
          material={materials.Barra}
          position={[-93.446, 1.982, -156.481]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2069"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2069.geometry}
          material={materials.Barra}
          position={[-93.264, 1.982, -156.479]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1138"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1138.geometry}
          material={materials.Barra}
          position={[-93.556, 2.779, -155.797]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1139"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1139.geometry}
          material={materials.Barra}
          position={[-93.556, 2.779, -155.797]}
          rotation={[0, 1.564, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube070"
          castShadow
          receiveShadow
          geometry={nodes.Cube070.geometry}
          material={materials.Plastico}
          position={[-94.181, 2.987, -155.932]}
          rotation={[0, 1.564, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve069"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve069.geometry}
          material={materials["Material.014"]}
          position={[-93.529, 2.575, -155.404]}
          rotation={[Math.PI, 0.007, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask070"
          position={[-84.53, 1.196, -65.958]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube141_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube141_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube141_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube141_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3070"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3070.geometry}
          material={materials.Barra}
          position={[-83.969, 0.189, -65.901]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2070"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2070.geometry}
          material={materials.Barra}
          position={[-83.967, 0.189, -65.719]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1140"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1140.geometry}
          material={materials.Barra}
          position={[-84.655, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1141"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1141.geometry}
          material={materials.Barra}
          position={[-84.655, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube071"
          castShadow
          receiveShadow
          geometry={nodes.Cube071.geometry}
          material={materials.Plastico}
          position={[-84.533, 1.194, -66.625]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve070"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve070.geometry}
          material={materials["Material.014"]}
          position={[-85.048, 0.782, -65.962]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask071"
          position={[-87.568, 1.196, -65.958]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube143_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube143_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube143_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube143_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3071"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3071.geometry}
          material={materials.Barra}
          position={[-87.008, 0.189, -65.901]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2071"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2071.geometry}
          material={materials.Barra}
          position={[-87.005, 0.189, -65.719]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1142"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1142.geometry}
          material={materials.Barra}
          position={[-87.693, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1143"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1143.geometry}
          material={materials.Barra}
          position={[-87.693, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube072"
          castShadow
          receiveShadow
          geometry={nodes.Cube072.geometry}
          material={materials.Plastico}
          position={[-87.571, 1.194, -66.625]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve071"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve071.geometry}
          material={materials["Material.014"]}
          position={[-88.086, 0.782, -65.962]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask072"
          position={[-90.526, 1.196, -65.958]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube145_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube145_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube145_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube145_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3072"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3072.geometry}
          material={materials.Barra}
          position={[-89.965, 0.189, -65.901]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2072"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2072.geometry}
          material={materials.Barra}
          position={[-89.963, 0.189, -65.719]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1144"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1144.geometry}
          material={materials.Barra}
          position={[-90.651, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1145"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1145.geometry}
          material={materials.Barra}
          position={[-90.651, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube073"
          castShadow
          receiveShadow
          geometry={nodes.Cube073.geometry}
          material={materials.Plastico}
          position={[-90.529, 1.194, -66.625]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve072"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve072.geometry}
          material={materials["Material.014"]}
          position={[-91.043, 0.782, -65.962]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask073"
          position={[-93.589, 1.196, -65.958]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube147_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube147_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube147_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube147_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3073"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3073.geometry}
          material={materials.Barra}
          position={[-93.029, 0.189, -65.901]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2073"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2073.geometry}
          material={materials.Barra}
          position={[-93.026, 0.189, -65.719]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1146"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1146.geometry}
          material={materials.Barra}
          position={[-93.714, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1147"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1147.geometry}
          material={materials.Barra}
          position={[-93.714, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube074"
          castShadow
          receiveShadow
          geometry={nodes.Cube074.geometry}
          material={materials.Plastico}
          position={[-93.592, 1.194, -66.625]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve073"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve073.geometry}
          material={materials["Material.014"]}
          position={[-94.107, 0.782, -65.962]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask074"
          position={[-96.65, 1.196, -65.958]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube149_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube149_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube149_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube149_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3074"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3074.geometry}
          material={materials.Barra}
          position={[-96.089, 0.189, -65.901]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2074"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2074.geometry}
          material={materials.Barra}
          position={[-96.087, 0.189, -65.719]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1148"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1148.geometry}
          material={materials.Barra}
          position={[-96.775, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1149"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1149.geometry}
          material={materials.Barra}
          position={[-96.775, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube075"
          castShadow
          receiveShadow
          geometry={nodes.Cube075.geometry}
          material={materials.Plastico}
          position={[-96.653, 1.194, -66.625]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve074"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve074.geometry}
          material={materials["Material.014"]}
          position={[-97.168, 0.782, -65.962]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask075"
          position={[-99.679, 1.196, -65.958]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube151_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube151_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube151_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube151_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3075"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3075.geometry}
          material={materials.Barra}
          position={[-99.119, 0.189, -65.901]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2075"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2075.geometry}
          material={materials.Barra}
          position={[-99.116, 0.189, -65.719]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1150"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1150.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1151"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1151.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -65.997]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube076"
          castShadow
          receiveShadow
          geometry={nodes.Cube076.geometry}
          material={materials.Plastico}
          position={[-99.682, 1.194, -66.625]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve075"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve075.geometry}
          material={materials["Material.014"]}
          position={[-100.197, 0.782, -65.962]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask076"
          position={[-99.679, 1.196, -62.132]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube153_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube153_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube153_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube153_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3076"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3076.geometry}
          material={materials.Barra}
          position={[-99.119, 0.189, -62.075]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2076"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2076.geometry}
          material={materials.Barra}
          position={[-99.116, 0.189, -61.893]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1152"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1152.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -62.172]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1153"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1153.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -62.172]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube077"
          castShadow
          receiveShadow
          geometry={nodes.Cube077.geometry}
          material={materials.Plastico}
          position={[-99.682, 1.194, -62.799]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve076"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve076.geometry}
          material={materials["Material.014"]}
          position={[-100.197, 0.782, -62.136]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask077"
          position={[-99.679, 1.196, -58.485]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube155_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube155_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube155_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube155_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3077"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3077.geometry}
          material={materials.Barra}
          position={[-99.119, 0.189, -58.428]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2077"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2077.geometry}
          material={materials.Barra}
          position={[-99.116, 0.189, -58.246]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1154"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1154.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1155"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1155.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube078"
          castShadow
          receiveShadow
          geometry={nodes.Cube078.geometry}
          material={materials.Plastico}
          position={[-99.682, 1.194, -59.152]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve077"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve077.geometry}
          material={materials["Material.014"]}
          position={[-100.197, 0.782, -58.489]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask078"
          position={[-99.679, 1.196, -55.273]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube157_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube157_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube157_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube157_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3078"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3078.geometry}
          material={materials.Barra}
          position={[-99.119, 0.189, -55.216]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2078"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2078.geometry}
          material={materials.Barra}
          position={[-99.116, 0.189, -55.034]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1156"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1156.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -55.313]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1157"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1157.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -55.313]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube079"
          castShadow
          receiveShadow
          geometry={nodes.Cube079.geometry}
          material={materials.Plastico}
          position={[-99.682, 1.194, -55.941]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve078"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve078.geometry}
          material={materials["Material.014"]}
          position={[-100.197, 0.782, -55.278]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask079"
          position={[-99.679, 1.196, -52.476]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube159_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube159_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube159_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube159_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3079"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3079.geometry}
          material={materials.Barra}
          position={[-99.119, 0.189, -52.419]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2079"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2079.geometry}
          material={materials.Barra}
          position={[-99.116, 0.189, -52.237]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1158"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1158.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -52.515]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1159"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1159.geometry}
          material={materials.Barra}
          position={[-99.804, 0.986, -52.515]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube080"
          castShadow
          receiveShadow
          geometry={nodes.Cube080.geometry}
          material={materials.Plastico}
          position={[-99.682, 1.194, -53.143]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve079"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve079.geometry}
          material={materials["Material.014"]}
          position={[-100.197, 0.782, -52.48]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask080"
          position={[-96.746, 1.196, -52.476]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube161_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube161_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube161_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube161_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3080"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3080.geometry}
          material={materials.Barra}
          position={[-96.186, 0.189, -52.419]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2080"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2080.geometry}
          material={materials.Barra}
          position={[-96.183, 0.189, -52.237]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1160"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1160.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -52.515]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1161"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1161.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -52.515]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube081"
          castShadow
          receiveShadow
          geometry={nodes.Cube081.geometry}
          material={materials.Plastico}
          position={[-96.749, 1.194, -53.143]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve080"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve080.geometry}
          material={materials["Material.014"]}
          position={[-97.264, 0.782, -52.48]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask081"
          position={[-96.746, 1.196, -55.33]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube163_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube163_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube163_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube163_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3081"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3081.geometry}
          material={materials.Barra}
          position={[-96.186, 0.189, -55.274]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2081"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2081.geometry}
          material={materials.Barra}
          position={[-96.183, 0.189, -55.091]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1162"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1162.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1163"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1163.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube082"
          castShadow
          receiveShadow
          geometry={nodes.Cube082.geometry}
          material={materials.Plastico}
          position={[-96.749, 1.194, -55.998]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve081"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve081.geometry}
          material={materials["Material.014"]}
          position={[-97.264, 0.782, -55.335]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask082"
          position={[-96.746, 1.196, -58.52]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube165_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube165_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube165_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube165_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3082"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3082.geometry}
          material={materials.Barra}
          position={[-96.186, 0.189, -58.463]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2082"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2082.geometry}
          material={materials.Barra}
          position={[-96.183, 0.189, -58.281]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1164"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1164.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -58.56]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1165"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1165.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -58.56]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube083"
          castShadow
          receiveShadow
          geometry={nodes.Cube083.geometry}
          material={materials.Plastico}
          position={[-96.749, 1.194, -59.188]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve082"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve082.geometry}
          material={materials["Material.014"]}
          position={[-97.264, 0.782, -58.525]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask083"
          position={[-96.746, 1.196, -62.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube167_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube167_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube167_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube167_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3083"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3083.geometry}
          material={materials.Barra}
          position={[-96.186, 0.189, -62.194]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2083"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2083.geometry}
          material={materials.Barra}
          position={[-96.183, 0.189, -62.012]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1166"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1166.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1167"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1167.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube084"
          castShadow
          receiveShadow
          geometry={nodes.Cube084.geometry}
          material={materials.Plastico}
          position={[-96.749, 1.194, -62.918]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve083"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve083.geometry}
          material={materials["Material.014"]}
          position={[-97.264, 0.782, -62.255]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask084"
          position={[-96.746, 1.196, -62.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube169_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube169_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube169_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube169_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3084"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3084.geometry}
          material={materials.Barra}
          position={[-96.186, 0.189, -62.194]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2084"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2084.geometry}
          material={materials.Barra}
          position={[-96.183, 0.189, -62.012]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1168"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1168.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1169"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1169.geometry}
          material={materials.Barra}
          position={[-96.871, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube085"
          castShadow
          receiveShadow
          geometry={nodes.Cube085.geometry}
          material={materials.Plastico}
          position={[-96.749, 1.194, -62.918]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve084"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve084.geometry}
          material={materials["Material.014"]}
          position={[-97.264, 0.782, -62.255]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask085"
          position={[-93.427, 1.196, -62.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube171_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube171_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube171_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube171_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3085"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3085.geometry}
          material={materials.Barra}
          position={[-92.866, 0.189, -62.194]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2085"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2085.geometry}
          material={materials.Barra}
          position={[-92.864, 0.189, -62.012]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1170"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1170.geometry}
          material={materials.Barra}
          position={[-93.552, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1171"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1171.geometry}
          material={materials.Barra}
          position={[-93.552, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube086"
          castShadow
          receiveShadow
          geometry={nodes.Cube086.geometry}
          material={materials.Plastico}
          position={[-93.429, 1.194, -62.918]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve085"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve085.geometry}
          material={materials["Material.014"]}
          position={[-93.944, 0.782, -62.255]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask086"
          position={[-90.496, 1.196, -62.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube173_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube173_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube173_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube173_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3086"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3086.geometry}
          material={materials.Barra}
          position={[-89.935, 0.189, -62.194]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2086"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2086.geometry}
          material={materials.Barra}
          position={[-89.933, 0.189, -62.012]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1172"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1172.geometry}
          material={materials.Barra}
          position={[-90.62, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1173"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1173.geometry}
          material={materials.Barra}
          position={[-90.62, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube087"
          castShadow
          receiveShadow
          geometry={nodes.Cube087.geometry}
          material={materials.Plastico}
          position={[-90.498, 1.194, -62.918]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve086"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve086.geometry}
          material={materials["Material.014"]}
          position={[-91.013, 0.782, -62.255]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask087"
          position={[-87.542, 1.196, -62.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube175_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube175_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube175_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube175_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3087"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3087.geometry}
          material={materials.Barra}
          position={[-86.981, 0.189, -62.194]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2087"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2087.geometry}
          material={materials.Barra}
          position={[-86.979, 0.189, -62.012]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1174"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1174.geometry}
          material={materials.Barra}
          position={[-87.667, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1175"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1175.geometry}
          material={materials.Barra}
          position={[-87.667, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube088"
          castShadow
          receiveShadow
          geometry={nodes.Cube088.geometry}
          material={materials.Plastico}
          position={[-87.545, 1.194, -62.918]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve087"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve087.geometry}
          material={materials["Material.014"]}
          position={[-88.06, 0.782, -62.255]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask088"
          position={[-84.396, 1.196, -62.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube177_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube177_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube177_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube177_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3088"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3088.geometry}
          material={materials.Barra}
          position={[-83.836, 0.189, -62.194]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2088"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2088.geometry}
          material={materials.Barra}
          position={[-83.833, 0.189, -62.012]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1176"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1176.geometry}
          material={materials.Barra}
          position={[-84.521, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1177"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1177.geometry}
          material={materials.Barra}
          position={[-84.521, 0.986, -62.29]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube089"
          castShadow
          receiveShadow
          geometry={nodes.Cube089.geometry}
          material={materials.Plastico}
          position={[-84.399, 1.194, -62.918]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve088"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve088.geometry}
          material={materials["Material.014"]}
          position={[-84.914, 0.782, -62.255]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask089"
          position={[-84.396, 1.196, -58.486]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube179_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube179_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube179_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube179_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3089"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3089.geometry}
          material={materials.Barra}
          position={[-83.836, 0.189, -58.429]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2089"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2089.geometry}
          material={materials.Barra}
          position={[-83.833, 0.189, -58.247]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1178"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1178.geometry}
          material={materials.Barra}
          position={[-84.521, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1179"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1179.geometry}
          material={materials.Barra}
          position={[-84.521, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube090"
          castShadow
          receiveShadow
          geometry={nodes.Cube090.geometry}
          material={materials.Plastico}
          position={[-84.399, 1.194, -59.153]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve089"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve089.geometry}
          material={materials["Material.014"]}
          position={[-84.914, 0.782, -58.49]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask090"
          position={[-87.537, 1.196, -58.486]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube181_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube181_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube181_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube181_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3090"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3090.geometry}
          material={materials.Barra}
          position={[-86.976, 0.189, -58.429]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2090"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2090.geometry}
          material={materials.Barra}
          position={[-86.974, 0.189, -58.247]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1180"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1180.geometry}
          material={materials.Barra}
          position={[-87.662, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1181"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1181.geometry}
          material={materials.Barra}
          position={[-87.662, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube091"
          castShadow
          receiveShadow
          geometry={nodes.Cube091.geometry}
          material={materials.Plastico}
          position={[-87.54, 1.194, -59.153]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve090"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve090.geometry}
          material={materials["Material.014"]}
          position={[-88.055, 0.782, -58.49]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask091"
          position={[-90.462, 1.196, -58.486]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube183_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube183_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube183_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube183_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3091"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3091.geometry}
          material={materials.Barra}
          position={[-89.901, 0.189, -58.429]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2091"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2091.geometry}
          material={materials.Barra}
          position={[-89.899, 0.189, -58.247]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1182"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1182.geometry}
          material={materials.Barra}
          position={[-90.586, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1183"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1183.geometry}
          material={materials.Barra}
          position={[-90.586, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube092"
          castShadow
          receiveShadow
          geometry={nodes.Cube092.geometry}
          material={materials.Plastico}
          position={[-90.464, 1.194, -59.153]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve091"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve091.geometry}
          material={materials["Material.014"]}
          position={[-90.979, 0.782, -58.49]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask092"
          position={[-93.444, 1.196, -58.486]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube185_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube185_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube185_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube185_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3092"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3092.geometry}
          material={materials.Barra}
          position={[-92.883, 0.189, -58.429]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2092"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2092.geometry}
          material={materials.Barra}
          position={[-92.881, 0.189, -58.247]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1184"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1184.geometry}
          material={materials.Barra}
          position={[-93.569, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1185"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1185.geometry}
          material={materials.Barra}
          position={[-93.569, 0.986, -58.525]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube093"
          castShadow
          receiveShadow
          geometry={nodes.Cube093.geometry}
          material={materials.Plastico}
          position={[-93.447, 1.194, -59.153]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve092"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve092.geometry}
          material={materials["Material.014"]}
          position={[-93.962, 0.782, -58.49]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask093"
          position={[-93.444, 1.196, -55.298]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube187_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube187_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube187_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube187_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3093"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3093.geometry}
          material={materials.Barra}
          position={[-92.883, 0.189, -55.241]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2093"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2093.geometry}
          material={materials.Barra}
          position={[-92.881, 0.189, -55.059]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1186"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1186.geometry}
          material={materials.Barra}
          position={[-93.569, 0.986, -55.338]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1187"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1187.geometry}
          material={materials.Barra}
          position={[-93.569, 0.986, -55.338]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube094"
          castShadow
          receiveShadow
          geometry={nodes.Cube094.geometry}
          material={materials.Plastico}
          position={[-93.447, 1.194, -55.965]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve093"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve093.geometry}
          material={materials["Material.014"]}
          position={[-93.962, 0.782, -55.302]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask094"
          position={[-93.444, 1.196, -52.532]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube189_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube189_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube189_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube189_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3094"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3094.geometry}
          material={materials.Barra}
          position={[-92.883, 0.189, -52.476]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2094"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2094.geometry}
          material={materials.Barra}
          position={[-92.881, 0.189, -52.294]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1188"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1188.geometry}
          material={materials.Barra}
          position={[-93.569, 0.986, -52.572]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1189"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1189.geometry}
          material={materials.Barra}
          position={[-93.569, 0.986, -52.572]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube095"
          castShadow
          receiveShadow
          geometry={nodes.Cube095.geometry}
          material={materials.Plastico}
          position={[-93.447, 1.194, -53.2]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve094"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve094.geometry}
          material={materials["Material.014"]}
          position={[-93.962, 0.782, -52.537]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask095"
          position={[-90.48, 1.196, -52.532]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube191_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube191_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube191_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube191_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3095"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3095.geometry}
          material={materials.Barra}
          position={[-89.919, 0.189, -52.476]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2095"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2095.geometry}
          material={materials.Barra}
          position={[-89.917, 0.189, -52.294]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1190"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1190.geometry}
          material={materials.Barra}
          position={[-90.605, 0.986, -52.572]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1191"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1191.geometry}
          material={materials.Barra}
          position={[-90.605, 0.986, -52.572]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube096"
          castShadow
          receiveShadow
          geometry={nodes.Cube096.geometry}
          material={materials.Plastico}
          position={[-90.483, 1.194, -53.2]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve095"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve095.geometry}
          material={materials["Material.014"]}
          position={[-90.997, 0.782, -52.537]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask096"
          position={[-90.48, 1.196, -55.33]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube193_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube193_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube193_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube193_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3096"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3096.geometry}
          material={materials.Barra}
          position={[-89.919, 0.189, -55.273]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2096"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2096.geometry}
          material={materials.Barra}
          position={[-89.917, 0.189, -55.091]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1192"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1192.geometry}
          material={materials.Barra}
          position={[-90.605, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1193"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1193.geometry}
          material={materials.Barra}
          position={[-90.605, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube097"
          castShadow
          receiveShadow
          geometry={nodes.Cube097.geometry}
          material={materials.Plastico}
          position={[-90.483, 1.194, -55.998]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve096"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve096.geometry}
          material={materials["Material.014"]}
          position={[-90.997, 0.782, -55.335]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask097"
          position={[-87.546, 1.196, -55.33]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube195_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube195_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube195_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube195_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3097"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3097.geometry}
          material={materials.Barra}
          position={[-86.985, 0.189, -55.273]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2097"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2097.geometry}
          material={materials.Barra}
          position={[-86.983, 0.189, -55.091]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1194"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1194.geometry}
          material={materials.Barra}
          position={[-87.671, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1195"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1195.geometry}
          material={materials.Barra}
          position={[-87.671, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube098"
          castShadow
          receiveShadow
          geometry={nodes.Cube098.geometry}
          material={materials.Plastico}
          position={[-87.549, 1.194, -55.998]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve097"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve097.geometry}
          material={materials["Material.014"]}
          position={[-88.063, 0.782, -55.335]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask098"
          position={[-84.434, 1.196, -55.33]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube197_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube197_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube197_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube197_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3098"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3098.geometry}
          material={materials.Barra}
          position={[-83.873, 0.189, -55.273]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2098"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2098.geometry}
          material={materials.Barra}
          position={[-83.871, 0.189, -55.091]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1196"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1196.geometry}
          material={materials.Barra}
          position={[-84.559, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1197"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1197.geometry}
          material={materials.Barra}
          position={[-84.559, 0.986, -55.37]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube099"
          castShadow
          receiveShadow
          geometry={nodes.Cube099.geometry}
          material={materials.Plastico}
          position={[-84.436, 1.194, -55.998]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve098"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve098.geometry}
          material={materials["Material.014"]}
          position={[-84.951, 0.782, -55.335]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask099"
          position={[-84.434, 1.196, -52.399]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube199_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube199_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube199_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube199_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3099"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3099.geometry}
          material={materials.Barra}
          position={[-83.873, 0.189, -52.342]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2099"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2099.geometry}
          material={materials.Barra}
          position={[-83.871, 0.189, -52.16]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1198"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1198.geometry}
          material={materials.Barra}
          position={[-84.559, 0.986, -52.438]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1199"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1199.geometry}
          material={materials.Barra}
          position={[-84.559, 0.986, -52.438]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube100"
          castShadow
          receiveShadow
          geometry={nodes.Cube100.geometry}
          material={materials.Plastico}
          position={[-84.436, 1.194, -53.066]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve099"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve099.geometry}
          material={materials["Material.014"]}
          position={[-84.951, 0.782, -52.403]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask100"
          position={[-87.487, 1.196, -52.399]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube201_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube201_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube201_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube201_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3100"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3100.geometry}
          material={materials.Barra}
          position={[-86.926, 0.189, -52.342]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2100"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2100.geometry}
          material={materials.Barra}
          position={[-86.924, 0.189, -52.16]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1200"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1200.geometry}
          material={materials.Barra}
          position={[-87.612, 0.986, -52.438]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1201"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1201.geometry}
          material={materials.Barra}
          position={[-87.612, 0.986, -52.438]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube101"
          castShadow
          receiveShadow
          geometry={nodes.Cube101.geometry}
          material={materials.Plastico}
          position={[-87.49, 1.194, -53.066]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve100"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve100.geometry}
          material={materials["Material.014"]}
          position={[-88.004, 0.782, -52.403]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask101"
          position={[-29.818, 1.196, -50.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube203_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube203_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube203_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube203_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3101"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3101.geometry}
          material={materials.Barra}
          position={[-29.257, 0.189, -50.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2101"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2101.geometry}
          material={materials.Barra}
          position={[-29.255, 0.189, -49.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1202"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1202.geometry}
          material={materials.Barra}
          position={[-29.943, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1203"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1203.geometry}
          material={materials.Barra}
          position={[-29.943, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube102"
          castShadow
          receiveShadow
          geometry={nodes.Cube102.geometry}
          material={materials.Plastico}
          position={[-29.821, 1.194, -50.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve101"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve101.geometry}
          material={materials["Material.014"]}
          position={[-30.335, 0.782, -50.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask102"
          position={[-32.45, 1.196, -50.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube205_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube205_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube205_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube205_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3102"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3102.geometry}
          material={materials.Barra}
          position={[-31.889, 0.189, -50.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2102"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2102.geometry}
          material={materials.Barra}
          position={[-31.887, 0.189, -49.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1204"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1204.geometry}
          material={materials.Barra}
          position={[-32.574, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1205"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1205.geometry}
          material={materials.Barra}
          position={[-32.574, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube103"
          castShadow
          receiveShadow
          geometry={nodes.Cube103.geometry}
          material={materials.Plastico}
          position={[-32.452, 1.194, -50.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve102"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve102.geometry}
          material={materials["Material.014"]}
          position={[-32.967, 0.782, -50.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask103"
          position={[-35.344, 1.196, -50.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube207_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube207_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube207_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube207_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3103"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3103.geometry}
          material={materials.Barra}
          position={[-34.783, 0.189, -50.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2103"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2103.geometry}
          material={materials.Barra}
          position={[-34.781, 0.189, -49.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1206"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1206.geometry}
          material={materials.Barra}
          position={[-35.468, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1207"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1207.geometry}
          material={materials.Barra}
          position={[-35.468, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube104"
          castShadow
          receiveShadow
          geometry={nodes.Cube104.geometry}
          material={materials.Plastico}
          position={[-35.346, 1.194, -50.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve103"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve103.geometry}
          material={materials["Material.014"]}
          position={[-35.861, 0.782, -50.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask104"
          position={[-38.229, 1.196, -50.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube209_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube209_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube209_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube209_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3104"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3104.geometry}
          material={materials.Barra}
          position={[-37.668, 0.189, -50.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2104"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2104.geometry}
          material={materials.Barra}
          position={[-37.666, 0.189, -49.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1208"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1208.geometry}
          material={materials.Barra}
          position={[-38.354, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1209"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1209.geometry}
          material={materials.Barra}
          position={[-38.354, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube105"
          castShadow
          receiveShadow
          geometry={nodes.Cube105.geometry}
          material={materials.Plastico}
          position={[-38.232, 1.194, -50.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve104"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve104.geometry}
          material={materials["Material.014"]}
          position={[-38.746, 0.782, -50.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask105"
          position={[-41.064, 1.196, -50.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube211_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube211_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube211_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube211_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3105"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3105.geometry}
          material={materials.Barra}
          position={[-40.503, 0.189, -50.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2105"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2105.geometry}
          material={materials.Barra}
          position={[-40.501, 0.189, -49.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1210"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1210.geometry}
          material={materials.Barra}
          position={[-41.189, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1211"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1211.geometry}
          material={materials.Barra}
          position={[-41.189, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube106"
          castShadow
          receiveShadow
          geometry={nodes.Cube106.geometry}
          material={materials.Plastico}
          position={[-41.066, 1.194, -50.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve105"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve105.geometry}
          material={materials["Material.014"]}
          position={[-41.581, 0.782, -50.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask106"
          position={[-43.927, 1.196, -50.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube213_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube213_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube213_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube213_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3106"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3106.geometry}
          material={materials.Barra}
          position={[-43.366, 0.189, -50.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2106"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2106.geometry}
          material={materials.Barra}
          position={[-43.363, 0.189, -49.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1212"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1212.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1213"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1213.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -50.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube107"
          castShadow
          receiveShadow
          geometry={nodes.Cube107.geometry}
          material={materials.Plastico}
          position={[-43.929, 1.194, -50.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve106"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve106.geometry}
          material={materials["Material.014"]}
          position={[-44.444, 0.782, -50.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask107"
          position={[-43.927, 1.196, -53.363]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube215_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube215_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube215_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube215_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3107"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3107.geometry}
          material={materials.Barra}
          position={[-43.366, 0.189, -53.306]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2107"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2107.geometry}
          material={materials.Barra}
          position={[-43.363, 0.189, -53.124]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1214"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1214.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -53.403]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1215"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1215.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -53.403]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube108"
          castShadow
          receiveShadow
          geometry={nodes.Cube108.geometry}
          material={materials.Plastico}
          position={[-43.929, 1.194, -54.03]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve107"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve107.geometry}
          material={materials["Material.014"]}
          position={[-44.444, 0.782, -53.367]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask108"
          position={[-43.927, 1.196, -56.907]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube217_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube217_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube217_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube217_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3108"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3108.geometry}
          material={materials.Barra}
          position={[-43.366, 0.189, -56.85]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2108"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2108.geometry}
          material={materials.Barra}
          position={[-43.363, 0.189, -56.668]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1216"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1216.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -56.946]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1217"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1217.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -56.946]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube109"
          castShadow
          receiveShadow
          geometry={nodes.Cube109.geometry}
          material={materials.Plastico}
          position={[-43.929, 1.194, -57.574]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve108"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve108.geometry}
          material={materials["Material.014"]}
          position={[-44.444, 0.782, -56.911]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask109"
          position={[-43.927, 1.196, -60.77]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube219_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube219_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube219_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube219_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3109"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3109.geometry}
          material={materials.Barra}
          position={[-43.366, 0.189, -60.713]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2109"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2109.geometry}
          material={materials.Barra}
          position={[-43.363, 0.189, -60.531]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1218"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1218.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -60.809]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1219"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1219.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -60.809]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube110"
          castShadow
          receiveShadow
          geometry={nodes.Cube110.geometry}
          material={materials.Plastico}
          position={[-43.929, 1.194, -61.437]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve109"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve109.geometry}
          material={materials["Material.014"]}
          position={[-44.444, 0.782, -60.774]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask110"
          position={[-43.927, 1.196, -65.42]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube221_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube221_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube221_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube221_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3110"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3110.geometry}
          material={materials.Barra}
          position={[-43.366, 0.189, -65.363]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2110"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2110.geometry}
          material={materials.Barra}
          position={[-43.363, 0.189, -65.181]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1220"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1220.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -65.46]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1221"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1221.geometry}
          material={materials.Barra}
          position={[-44.051, 0.986, -65.46]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube111"
          castShadow
          receiveShadow
          geometry={nodes.Cube111.geometry}
          material={materials.Plastico}
          position={[-43.929, 1.194, -66.088]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve110"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve110.geometry}
          material={materials["Material.014"]}
          position={[-44.444, 0.782, -65.425]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask111"
          position={[-41.118, 1.196, -65.42]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube223_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube223_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube223_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube223_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3111"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3111.geometry}
          material={materials.Barra}
          position={[-40.558, 0.189, -65.363]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2111"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2111.geometry}
          material={materials.Barra}
          position={[-40.555, 0.189, -65.181]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1222"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1222.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -65.46]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1223"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1223.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -65.46]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube112"
          castShadow
          receiveShadow
          geometry={nodes.Cube112.geometry}
          material={materials.Plastico}
          position={[-41.121, 1.194, -66.088]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve111"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve111.geometry}
          material={materials["Material.014"]}
          position={[-41.636, 0.782, -65.425]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask112"
          position={[-41.118, 1.196, -60.547]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube225_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube225_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube225_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube225_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3112"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3112.geometry}
          material={materials.Barra}
          position={[-40.558, 0.189, -60.49]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2112"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2112.geometry}
          material={materials.Barra}
          position={[-40.555, 0.189, -60.308]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1224"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1224.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -60.587]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1225"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1225.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -60.587]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube113"
          castShadow
          receiveShadow
          geometry={nodes.Cube113.geometry}
          material={materials.Plastico}
          position={[-41.121, 1.194, -61.215]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve112"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve112.geometry}
          material={materials["Material.014"]}
          position={[-41.636, 0.782, -60.551]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask113"
          position={[-41.118, 1.196, -56.775]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube227_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube227_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube227_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube227_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3113"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3113.geometry}
          material={materials.Barra}
          position={[-40.558, 0.189, -56.718]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2113"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2113.geometry}
          material={materials.Barra}
          position={[-40.555, 0.189, -56.536]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1226"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1226.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -56.815]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1227"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1227.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -56.815]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube114"
          castShadow
          receiveShadow
          geometry={nodes.Cube114.geometry}
          material={materials.Plastico}
          position={[-41.121, 1.194, -57.442]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve113"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve113.geometry}
          material={materials["Material.014"]}
          position={[-41.636, 0.782, -56.779]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask114"
          position={[-41.118, 1.196, -53.336]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube229_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube229_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube229_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube229_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3114"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3114.geometry}
          material={materials.Barra}
          position={[-40.558, 0.189, -53.279]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2114"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2114.geometry}
          material={materials.Barra}
          position={[-40.555, 0.189, -53.097]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1228"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1228.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -53.375]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1229"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1229.geometry}
          material={materials.Barra}
          position={[-41.243, 0.986, -53.375]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube115"
          castShadow
          receiveShadow
          geometry={nodes.Cube115.geometry}
          material={materials.Plastico}
          position={[-41.121, 1.194, -54.003]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve114"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve114.geometry}
          material={materials["Material.014"]}
          position={[-41.636, 0.782, -53.34]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask115"
          position={[-38.236, 1.196, -53.336]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube231_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube231_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube231_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube231_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3115"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3115.geometry}
          material={materials.Barra}
          position={[-37.675, 0.189, -53.279]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2115"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2115.geometry}
          material={materials.Barra}
          position={[-37.673, 0.189, -53.097]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1230"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1230.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -53.375]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1231"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1231.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -53.375]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube116"
          castShadow
          receiveShadow
          geometry={nodes.Cube116.geometry}
          material={materials.Plastico}
          position={[-38.239, 1.194, -54.003]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve115"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve115.geometry}
          material={materials["Material.014"]}
          position={[-38.753, 0.782, -53.34]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask116"
          position={[-38.236, 1.196, -56.706]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube233_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube233_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube233_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube233_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3116"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3116.geometry}
          material={materials.Barra}
          position={[-37.675, 0.189, -56.649]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2116"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2116.geometry}
          material={materials.Barra}
          position={[-37.673, 0.189, -56.467]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1232"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1232.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -56.745]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1233"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1233.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -56.745]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube117"
          castShadow
          receiveShadow
          geometry={nodes.Cube117.geometry}
          material={materials.Plastico}
          position={[-38.239, 1.194, -57.373]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve116"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve116.geometry}
          material={materials["Material.014"]}
          position={[-38.753, 0.782, -56.71]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask117"
          position={[-38.236, 1.196, -60.561]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube235_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube235_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube235_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube235_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3117"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3117.geometry}
          material={materials.Barra}
          position={[-37.675, 0.189, -60.505]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2117"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2117.geometry}
          material={materials.Barra}
          position={[-37.673, 0.189, -60.322]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1234"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1234.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -60.601]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1235"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1235.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -60.601]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube118"
          castShadow
          receiveShadow
          geometry={nodes.Cube118.geometry}
          material={materials.Plastico}
          position={[-38.239, 1.194, -61.229]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve117"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve117.geometry}
          material={materials["Material.014"]}
          position={[-38.753, 0.782, -60.566]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask118"
          position={[-38.236, 1.196, -65.212]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube237_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube237_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube237_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube237_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3118"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3118.geometry}
          material={materials.Barra}
          position={[-37.675, 0.189, -65.155]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2118"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2118.geometry}
          material={materials.Barra}
          position={[-37.673, 0.189, -64.973]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1236"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1236.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -65.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1237"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1237.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -65.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube119"
          castShadow
          receiveShadow
          geometry={nodes.Cube119.geometry}
          material={materials.Plastico}
          position={[-38.239, 1.194, -65.879]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve118"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve118.geometry}
          material={materials["Material.014"]}
          position={[-38.753, 0.782, -65.216]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask119"
          position={[-38.236, 1.196, -65.212]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube239_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube239_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube239_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube239_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3119"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3119.geometry}
          material={materials.Barra}
          position={[-37.675, 0.189, -65.155]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2119"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2119.geometry}
          material={materials.Barra}
          position={[-37.673, 0.189, -64.973]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1238"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1238.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -65.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1239"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1239.geometry}
          material={materials.Barra}
          position={[-38.361, 0.986, -65.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube120"
          castShadow
          receiveShadow
          geometry={nodes.Cube120.geometry}
          material={materials.Plastico}
          position={[-38.239, 1.194, -65.879]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve119"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve119.geometry}
          material={materials["Material.014"]}
          position={[-38.753, 0.782, -65.216]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask120"
          position={[-35.382, 1.196, -65.212]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube241_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube241_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube241_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube241_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3120"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3120.geometry}
          material={materials.Barra}
          position={[-34.821, 0.189, -65.155]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2120"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2120.geometry}
          material={materials.Barra}
          position={[-34.819, 0.189, -64.973]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1240"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1240.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -65.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1241"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1241.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -65.251]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube121"
          castShadow
          receiveShadow
          geometry={nodes.Cube121.geometry}
          material={materials.Plastico}
          position={[-35.385, 1.194, -65.879]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve120"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve120.geometry}
          material={materials["Material.014"]}
          position={[-35.899, 0.782, -65.216]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask121"
          position={[-35.382, 1.196, -60.313]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube243_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube243_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube243_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube243_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3121"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3121.geometry}
          material={materials.Barra}
          position={[-34.821, 0.189, -60.256]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2121"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2121.geometry}
          material={materials.Barra}
          position={[-34.819, 0.189, -60.074]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1242"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1242.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -60.353]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1243"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1243.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -60.353]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube122"
          castShadow
          receiveShadow
          geometry={nodes.Cube122.geometry}
          material={materials.Plastico}
          position={[-35.385, 1.194, -60.981]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve121"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve121.geometry}
          material={materials["Material.014"]}
          position={[-35.899, 0.782, -60.318]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask122"
          position={[-35.382, 1.196, -56.609]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube245_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube245_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube245_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube245_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3122"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3122.geometry}
          material={materials.Barra}
          position={[-34.821, 0.189, -56.552]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2122"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2122.geometry}
          material={materials.Barra}
          position={[-34.819, 0.189, -56.37]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1244"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1244.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -56.648]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1245"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1245.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -56.648]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube123"
          castShadow
          receiveShadow
          geometry={nodes.Cube123.geometry}
          material={materials.Plastico}
          position={[-35.385, 1.194, -57.276]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve122"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve122.geometry}
          material={materials["Material.014"]}
          position={[-35.899, 0.782, -56.613]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask123"
          position={[-35.382, 1.196, -53.283]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube247_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube247_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube247_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube247_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3123"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3123.geometry}
          material={materials.Barra}
          position={[-34.821, 0.189, -53.226]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2123"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2123.geometry}
          material={materials.Barra}
          position={[-34.819, 0.189, -53.044]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1246"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1246.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -53.323]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1247"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1247.geometry}
          material={materials.Barra}
          position={[-35.507, 0.986, -53.323]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube124"
          castShadow
          receiveShadow
          geometry={nodes.Cube124.geometry}
          material={materials.Plastico}
          position={[-35.385, 1.194, -53.951]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve123"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve123.geometry}
          material={materials["Material.014"]}
          position={[-35.899, 0.782, -53.288]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask124"
          position={[-32.495, 1.196, -53.283]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube249_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube249_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube249_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube249_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3124"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3124.geometry}
          material={materials.Barra}
          position={[-31.935, 0.189, -53.226]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2124"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2124.geometry}
          material={materials.Barra}
          position={[-31.932, 0.189, -53.044]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1248"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1248.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -53.323]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1249"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1249.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -53.323]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube125"
          castShadow
          receiveShadow
          geometry={nodes.Cube125.geometry}
          material={materials.Plastico}
          position={[-32.498, 1.194, -53.951]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve124"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve124.geometry}
          material={materials["Material.014"]}
          position={[-33.013, 0.782, -53.288]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask125"
          position={[-32.495, 1.196, -56.67]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube251_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube251_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube251_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube251_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3125"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3125.geometry}
          material={materials.Barra}
          position={[-31.935, 0.189, -56.613]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2125"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2125.geometry}
          material={materials.Barra}
          position={[-31.932, 0.189, -56.431]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1250"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1250.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -56.709]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1251"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1251.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -56.709]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube126"
          castShadow
          receiveShadow
          geometry={nodes.Cube126.geometry}
          material={materials.Plastico}
          position={[-32.498, 1.194, -57.337]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve125"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve125.geometry}
          material={materials["Material.014"]}
          position={[-33.013, 0.782, -56.674]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask126"
          position={[-32.495, 1.196, -60.38]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube253_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube253_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube253_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube253_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3126"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3126.geometry}
          material={materials.Barra}
          position={[-31.935, 0.189, -60.323]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2126"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2126.geometry}
          material={materials.Barra}
          position={[-31.932, 0.189, -60.141]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1252"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1252.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -60.419]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1253"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1253.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -60.419]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube127"
          castShadow
          receiveShadow
          geometry={nodes.Cube127.geometry}
          material={materials.Plastico}
          position={[-32.498, 1.194, -61.047]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve126"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve126.geometry}
          material={materials["Material.014"]}
          position={[-33.013, 0.782, -60.384]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask127"
          position={[-32.495, 1.196, -64.804]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube255_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube255_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube255_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube255_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3127"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3127.geometry}
          material={materials.Barra}
          position={[-31.935, 0.189, -64.747]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2127"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2127.geometry}
          material={materials.Barra}
          position={[-31.932, 0.189, -64.565]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1254"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1254.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -64.844]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1255"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1255.geometry}
          material={materials.Barra}
          position={[-32.62, 0.986, -64.844]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube128"
          castShadow
          receiveShadow
          geometry={nodes.Cube128.geometry}
          material={materials.Plastico}
          position={[-32.498, 1.194, -65.472]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve127"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve127.geometry}
          material={materials["Material.014"]}
          position={[-33.013, 0.782, -64.809]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask128"
          position={[-29.822, 1.196, -64.804]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube257_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube257_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube257_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube257_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3128"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3128.geometry}
          material={materials.Barra}
          position={[-29.261, 0.189, -64.747]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2128"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2128.geometry}
          material={materials.Barra}
          position={[-29.259, 0.189, -64.565]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1256"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1256.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -64.844]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1257"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1257.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -64.844]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube129"
          castShadow
          receiveShadow
          geometry={nodes.Cube129.geometry}
          material={materials.Plastico}
          position={[-29.824, 1.194, -65.472]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve128"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve128.geometry}
          material={materials["Material.014"]}
          position={[-30.339, 0.782, -64.809]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask129"
          position={[-29.822, 1.196, -60.364]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube259_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube259_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube259_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube259_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3129"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3129.geometry}
          material={materials.Barra}
          position={[-29.261, 0.189, -60.307]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2129"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2129.geometry}
          material={materials.Barra}
          position={[-29.259, 0.189, -60.125]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1258"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1258.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -60.404]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1259"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1259.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -60.404]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube130"
          castShadow
          receiveShadow
          geometry={nodes.Cube130.geometry}
          material={materials.Plastico}
          position={[-29.824, 1.194, -61.032]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve129"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve129.geometry}
          material={materials["Material.014"]}
          position={[-30.339, 0.782, -60.369]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask130"
          position={[-29.822, 1.196, -56.681]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube261_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube261_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube261_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube261_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3130"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3130.geometry}
          material={materials.Barra}
          position={[-29.261, 0.189, -56.624]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2130"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2130.geometry}
          material={materials.Barra}
          position={[-29.259, 0.189, -56.442]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1260"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1260.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -56.72]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1261"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1261.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -56.72]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube131"
          castShadow
          receiveShadow
          geometry={nodes.Cube131.geometry}
          material={materials.Plastico}
          position={[-29.824, 1.194, -57.348]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve130"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve130.geometry}
          material={materials["Material.014"]}
          position={[-30.339, 0.782, -56.685]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask131"
          position={[-29.822, 1.196, -53.256]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube263_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube263_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube263_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube263_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3131"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3131.geometry}
          material={materials.Barra}
          position={[-29.261, 0.189, -53.199]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2131"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2131.geometry}
          material={materials.Barra}
          position={[-29.259, 0.189, -53.017]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1262"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1262.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -53.296]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1263"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1263.geometry}
          material={materials.Barra}
          position={[-29.946, 0.986, -53.296]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube132"
          castShadow
          receiveShadow
          geometry={nodes.Cube132.geometry}
          material={materials.Plastico}
          position={[-29.824, 1.194, -53.924]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve131"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve131.geometry}
          material={materials["Material.014"]}
          position={[-30.339, 0.782, -53.261]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask132"
          position={[-6.501, 1.196, -51.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube265_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube265_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube265_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube265_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3132"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3132.geometry}
          material={materials.Barra}
          position={[-5.94, 0.189, -51.149]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2132"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2132.geometry}
          material={materials.Barra}
          position={[-5.938, 0.189, -50.967]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1264"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1264.geometry}
          material={materials.Barra}
          position={[-6.626, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1265"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1265.geometry}
          material={materials.Barra}
          position={[-6.626, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube133"
          castShadow
          receiveShadow
          geometry={nodes.Cube133.geometry}
          material={materials.Plastico}
          position={[-6.503, 1.194, -51.874]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve132"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve132.geometry}
          material={materials["Material.014"]}
          position={[-7.018, 0.782, -51.211]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask133"
          position={[-9.441, 1.196, -51.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube267_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube267_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube267_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube267_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3133"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3133.geometry}
          material={materials.Barra}
          position={[-8.88, 0.189, -51.149]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2133"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2133.geometry}
          material={materials.Barra}
          position={[-8.878, 0.189, -50.967]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1266"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1266.geometry}
          material={materials.Barra}
          position={[-9.565, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1267"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1267.geometry}
          material={materials.Barra}
          position={[-9.565, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube134"
          castShadow
          receiveShadow
          geometry={nodes.Cube134.geometry}
          material={materials.Plastico}
          position={[-9.443, 1.194, -51.874]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve133"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve133.geometry}
          material={materials["Material.014"]}
          position={[-9.958, 0.782, -51.211]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask134"
          position={[-12.485, 1.196, -51.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube269_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube269_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube269_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube269_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3134"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3134.geometry}
          material={materials.Barra}
          position={[-11.924, 0.189, -51.149]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2134"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2134.geometry}
          material={materials.Barra}
          position={[-11.922, 0.189, -50.967]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1268"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1268.geometry}
          material={materials.Barra}
          position={[-12.61, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1269"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1269.geometry}
          material={materials.Barra}
          position={[-12.61, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube135"
          castShadow
          receiveShadow
          geometry={nodes.Cube135.geometry}
          material={materials.Plastico}
          position={[-12.488, 1.194, -51.874]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve134"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve134.geometry}
          material={materials["Material.014"]}
          position={[-13.003, 0.782, -51.211]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask135"
          position={[-15.328, 1.196, -51.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube271_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube271_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube271_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube271_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3135"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3135.geometry}
          material={materials.Barra}
          position={[-14.768, 0.189, -51.149]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2135"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2135.geometry}
          material={materials.Barra}
          position={[-14.765, 0.189, -50.967]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1270"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1270.geometry}
          material={materials.Barra}
          position={[-15.453, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1271"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1271.geometry}
          material={materials.Barra}
          position={[-15.453, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube136"
          castShadow
          receiveShadow
          geometry={nodes.Cube136.geometry}
          material={materials.Plastico}
          position={[-15.331, 1.194, -51.874]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve135"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve135.geometry}
          material={materials["Material.014"]}
          position={[-15.846, 0.782, -51.211]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask136"
          position={[-18.322, 1.196, -51.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube273_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube273_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube273_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube273_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3136"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3136.geometry}
          material={materials.Barra}
          position={[-17.762, 0.189, -51.149]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2136"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2136.geometry}
          material={materials.Barra}
          position={[-17.759, 0.189, -50.967]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1272"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1272.geometry}
          material={materials.Barra}
          position={[-18.447, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1273"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1273.geometry}
          material={materials.Barra}
          position={[-18.447, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube137"
          castShadow
          receiveShadow
          geometry={nodes.Cube137.geometry}
          material={materials.Plastico}
          position={[-18.325, 1.194, -51.874]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve136"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve136.geometry}
          material={materials["Material.014"]}
          position={[-18.84, 0.782, -51.211]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask137"
          position={[-21.043, 1.196, -51.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube275_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube275_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube275_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube275_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3137"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3137.geometry}
          material={materials.Barra}
          position={[-20.482, 0.189, -51.149]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2137"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2137.geometry}
          material={materials.Barra}
          position={[-20.48, 0.189, -50.967]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1274"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1274.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1275"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1275.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -51.246]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube138"
          castShadow
          receiveShadow
          geometry={nodes.Cube138.geometry}
          material={materials.Plastico}
          position={[-21.045, 1.194, -51.874]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve137"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve137.geometry}
          material={materials["Material.014"]}
          position={[-21.56, 0.782, -51.211]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask138"
          position={[-21.043, 1.196, -54.091]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube277_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube277_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube277_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube277_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3138"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3138.geometry}
          material={materials.Barra}
          position={[-20.482, 0.189, -54.034]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2138"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2138.geometry}
          material={materials.Barra}
          position={[-20.48, 0.189, -53.852]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1276"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1276.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -54.13]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1277"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1277.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -54.13]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube139"
          castShadow
          receiveShadow
          geometry={nodes.Cube139.geometry}
          material={materials.Plastico}
          position={[-21.045, 1.194, -54.758]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve138"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve138.geometry}
          material={materials["Material.014"]}
          position={[-21.56, 0.782, -54.095]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask139"
          position={[-21.043, 1.196, -57.23]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube279_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube279_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube279_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube279_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3139"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3139.geometry}
          material={materials.Barra}
          position={[-20.482, 0.189, -57.173]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2139"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2139.geometry}
          material={materials.Barra}
          position={[-20.48, 0.189, -56.991]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1278"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1278.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -57.269]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1279"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1279.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -57.269]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube140"
          castShadow
          receiveShadow
          geometry={nodes.Cube140.geometry}
          material={materials.Plastico}
          position={[-21.045, 1.194, -57.897]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve139"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve139.geometry}
          material={materials["Material.014"]}
          position={[-21.56, 0.782, -57.234]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask140"
          position={[-21.043, 1.196, -60.44]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube281_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube281_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube281_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube281_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3140"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3140.geometry}
          material={materials.Barra}
          position={[-20.482, 0.189, -60.383]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2140"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2140.geometry}
          material={materials.Barra}
          position={[-20.48, 0.189, -60.201]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1280"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1280.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -60.48]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1281"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1281.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -60.48]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube141"
          castShadow
          receiveShadow
          geometry={nodes.Cube141.geometry}
          material={materials.Plastico}
          position={[-21.045, 1.194, -61.108]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve140"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve140.geometry}
          material={materials["Material.014"]}
          position={[-21.56, 0.782, -60.445]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask141"
          position={[-21.043, 1.196, -60.44]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube283_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube283_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube283_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube283_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3141"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3141.geometry}
          material={materials.Barra}
          position={[-20.482, 0.189, -60.383]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2141"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2141.geometry}
          material={materials.Barra}
          position={[-20.48, 0.189, -60.201]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1282"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1282.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -60.48]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1283"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1283.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -60.48]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube142"
          castShadow
          receiveShadow
          geometry={nodes.Cube142.geometry}
          material={materials.Plastico}
          position={[-21.045, 1.194, -61.108]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve141"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve141.geometry}
          material={materials["Material.014"]}
          position={[-21.56, 0.782, -60.445]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask142"
          position={[-21.043, 1.196, -64.843]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube285_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube285_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube285_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube285_2.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3142"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3142.geometry}
          material={materials.Barra}
          position={[-20.482, 0.189, -64.786]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2142"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2142.geometry}
          material={materials.Barra}
          position={[-20.48, 0.189, -64.604]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1284"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1284.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -64.883]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1285"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1285.geometry}
          material={materials.Barra}
          position={[-21.167, 0.986, -64.883]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube143"
          castShadow
          receiveShadow
          geometry={nodes.Cube143.geometry}
          material={materials.Plastico}
          position={[-21.045, 1.194, -65.511]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve142"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve142.geometry}
          material={materials["Material.014"]}
          position={[-21.56, 0.782, -64.847]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask143"
          position={[-18.371, 1.196, -64.843]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube287"
            castShadow
            receiveShadow
            geometry={nodes.Cube287.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube287_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube287_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3143"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3143.geometry}
          material={materials.Barra}
          position={[-17.811, 0.189, -64.786]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2143"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2143.geometry}
          material={materials.Barra}
          position={[-17.808, 0.189, -64.604]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1286"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1286.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -64.883]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1287"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1287.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -64.883]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube144"
          castShadow
          receiveShadow
          geometry={nodes.Cube144.geometry}
          material={materials.Plastico}
          position={[-18.374, 1.194, -65.511]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve143"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve143.geometry}
          material={materials["Material.014"]}
          position={[-18.889, 0.782, -64.847]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask144"
          position={[-18.371, 1.196, -60.326]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube289"
            castShadow
            receiveShadow
            geometry={nodes.Cube289.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube289_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube289_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3144"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3144.geometry}
          material={materials.Barra}
          position={[-17.811, 0.189, -60.269]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2144"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2144.geometry}
          material={materials.Barra}
          position={[-17.808, 0.189, -60.087]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1288"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1288.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -60.365]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1289"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1289.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -60.365]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube145"
          castShadow
          receiveShadow
          geometry={nodes.Cube145.geometry}
          material={materials.Plastico}
          position={[-18.374, 1.194, -60.993]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve144"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve144.geometry}
          material={materials["Material.014"]}
          position={[-18.889, 0.782, -60.33]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask145"
          position={[-18.371, 1.196, -57.21]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube291"
            castShadow
            receiveShadow
            geometry={nodes.Cube291.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube291_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube291_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3145"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3145.geometry}
          material={materials.Barra}
          position={[-17.811, 0.189, -57.153]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2145"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2145.geometry}
          material={materials.Barra}
          position={[-17.808, 0.189, -56.971]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1290"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1290.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -57.25]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1291"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1291.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -57.25]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube146"
          castShadow
          receiveShadow
          geometry={nodes.Cube146.geometry}
          material={materials.Plastico}
          position={[-18.374, 1.194, -57.878]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve145"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve145.geometry}
          material={materials["Material.014"]}
          position={[-18.889, 0.782, -57.214]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask146"
          position={[-18.371, 1.196, -54.074]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube293"
            castShadow
            receiveShadow
            geometry={nodes.Cube293.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube293_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube293_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3146"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3146.geometry}
          material={materials.Barra}
          position={[-17.811, 0.189, -54.017]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2146"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2146.geometry}
          material={materials.Barra}
          position={[-17.808, 0.189, -53.835]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1292"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1292.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1293"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1293.geometry}
          material={materials.Barra}
          position={[-18.496, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube147"
          castShadow
          receiveShadow
          geometry={nodes.Cube147.geometry}
          material={materials.Plastico}
          position={[-18.374, 1.194, -54.741]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve146"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve146.geometry}
          material={materials["Material.014"]}
          position={[-18.889, 0.782, -54.078]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask147"
          position={[-15.484, 1.196, -54.074]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube295"
            castShadow
            receiveShadow
            geometry={nodes.Cube295.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube295_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube295_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3147"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3147.geometry}
          material={materials.Barra}
          position={[-14.924, 0.189, -54.017]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2147"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2147.geometry}
          material={materials.Barra}
          position={[-14.921, 0.189, -53.835]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1294"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1294.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1295"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1295.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube148"
          castShadow
          receiveShadow
          geometry={nodes.Cube148.geometry}
          material={materials.Plastico}
          position={[-15.487, 1.194, -54.741]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve147"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve147.geometry}
          material={materials["Material.014"]}
          position={[-16.002, 0.782, -54.078]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask148"
          position={[-15.484, 1.196, -57.121]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube297"
            castShadow
            receiveShadow
            geometry={nodes.Cube297.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube297_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube297_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3148"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3148.geometry}
          material={materials.Barra}
          position={[-14.924, 0.189, -57.064]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2148"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2148.geometry}
          material={materials.Barra}
          position={[-14.921, 0.189, -56.882]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1296"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1296.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -57.16]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1297"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1297.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -57.16]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube149"
          castShadow
          receiveShadow
          geometry={nodes.Cube149.geometry}
          material={materials.Plastico}
          position={[-15.487, 1.194, -57.788]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve148"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve148.geometry}
          material={materials["Material.014"]}
          position={[-16.002, 0.782, -57.125]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask149"
          position={[-15.484, 1.196, -60.176]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube299"
            castShadow
            receiveShadow
            geometry={nodes.Cube299.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube299_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube299_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3149"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3149.geometry}
          material={materials.Barra}
          position={[-14.924, 0.189, -60.12]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2149"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2149.geometry}
          material={materials.Barra}
          position={[-14.921, 0.189, -59.937]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1298"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1298.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -60.216]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1299"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1299.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -60.216]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube150"
          castShadow
          receiveShadow
          geometry={nodes.Cube150.geometry}
          material={materials.Plastico}
          position={[-15.487, 1.194, -60.844]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve149"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve149.geometry}
          material={materials["Material.014"]}
          position={[-16.002, 0.782, -60.181]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask150"
          position={[-15.484, 1.196, -64.874]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube301"
            castShadow
            receiveShadow
            geometry={nodes.Cube301.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube301_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube301_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3150"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3150.geometry}
          material={materials.Barra}
          position={[-14.924, 0.189, -64.817]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2150"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2150.geometry}
          material={materials.Barra}
          position={[-14.921, 0.189, -64.635]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1300"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1300.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -64.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1301"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1301.geometry}
          material={materials.Barra}
          position={[-15.609, 0.986, -64.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube151"
          castShadow
          receiveShadow
          geometry={nodes.Cube151.geometry}
          material={materials.Plastico}
          position={[-15.487, 1.194, -65.541]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve150"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve150.geometry}
          material={materials["Material.014"]}
          position={[-16.002, 0.782, -64.878]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask151"
          position={[-12.5, 1.196, -64.874]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube303"
            castShadow
            receiveShadow
            geometry={nodes.Cube303.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube303_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube303_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3151"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3151.geometry}
          material={materials.Barra}
          position={[-11.939, 0.189, -64.817]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2151"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2151.geometry}
          material={materials.Barra}
          position={[-11.937, 0.189, -64.635]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1302"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1302.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -64.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1303"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1303.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -64.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube152"
          castShadow
          receiveShadow
          geometry={nodes.Cube152.geometry}
          material={materials.Plastico}
          position={[-12.502, 1.194, -65.541]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve151"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve151.geometry}
          material={materials["Material.014"]}
          position={[-13.017, 0.782, -64.878]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask152"
          position={[-12.5, 1.196, -60.066]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube305"
            castShadow
            receiveShadow
            geometry={nodes.Cube305.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube305_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube305_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3152"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3152.geometry}
          material={materials.Barra}
          position={[-11.939, 0.189, -60.01]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2152"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2152.geometry}
          material={materials.Barra}
          position={[-11.937, 0.189, -59.828]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1304"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1304.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -60.106]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1305"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1305.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -60.106]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube153"
          castShadow
          receiveShadow
          geometry={nodes.Cube153.geometry}
          material={materials.Plastico}
          position={[-12.502, 1.194, -60.734]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve152"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve152.geometry}
          material={materials["Material.014"]}
          position={[-13.017, 0.782, -60.071]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask153"
          position={[-12.5, 1.196, -56.862]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube307"
            castShadow
            receiveShadow
            geometry={nodes.Cube307.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube307_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube307_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3153"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3153.geometry}
          material={materials.Barra}
          position={[-11.939, 0.189, -56.805]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2153"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2153.geometry}
          material={materials.Barra}
          position={[-11.937, 0.189, -56.623]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1306"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1306.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -56.902]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1307"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1307.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -56.902]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube154"
          castShadow
          receiveShadow
          geometry={nodes.Cube154.geometry}
          material={materials.Plastico}
          position={[-12.502, 1.194, -57.529]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve153"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve153.geometry}
          material={materials["Material.014"]}
          position={[-13.017, 0.782, -56.866]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask154"
          position={[-12.5, 1.196, -54.075]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube309"
            castShadow
            receiveShadow
            geometry={nodes.Cube309.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube309_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube309_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3154"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3154.geometry}
          material={materials.Barra}
          position={[-11.939, 0.189, -54.018]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2154"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2154.geometry}
          material={materials.Barra}
          position={[-11.937, 0.189, -53.836]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1308"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1308.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1309"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1309.geometry}
          material={materials.Barra}
          position={[-12.624, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube155"
          castShadow
          receiveShadow
          geometry={nodes.Cube155.geometry}
          material={materials.Plastico}
          position={[-12.502, 1.194, -54.742]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve154"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve154.geometry}
          material={materials["Material.014"]}
          position={[-13.017, 0.782, -54.079]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask155"
          position={[-9.384, 1.196, -54.075]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube311"
            castShadow
            receiveShadow
            geometry={nodes.Cube311.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube311_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube311_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3155"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3155.geometry}
          material={materials.Barra}
          position={[-8.824, 0.189, -54.018]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2155"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2155.geometry}
          material={materials.Barra}
          position={[-8.821, 0.189, -53.836]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1310"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1310.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1311"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1311.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -54.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube156"
          castShadow
          receiveShadow
          geometry={nodes.Cube156.geometry}
          material={materials.Plastico}
          position={[-9.387, 1.194, -54.742]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve155"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve155.geometry}
          material={materials["Material.014"]}
          position={[-9.902, 0.782, -54.079]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask156"
          position={[-9.384, 1.196, -56.851]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube313"
            castShadow
            receiveShadow
            geometry={nodes.Cube313.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube313_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube313_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3156"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3156.geometry}
          material={materials.Barra}
          position={[-8.824, 0.189, -56.795]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2156"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2156.geometry}
          material={materials.Barra}
          position={[-8.821, 0.189, -56.613]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1312"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1312.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -56.891]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1313"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1313.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -56.891]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube157"
          castShadow
          receiveShadow
          geometry={nodes.Cube157.geometry}
          material={materials.Plastico}
          position={[-9.387, 1.194, -57.519]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve156"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve156.geometry}
          material={materials["Material.014"]}
          position={[-9.902, 0.782, -56.856]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask157"
          position={[-9.384, 1.196, -60.177]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube315"
            castShadow
            receiveShadow
            geometry={nodes.Cube315.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube315_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube315_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3157"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3157.geometry}
          material={materials.Barra}
          position={[-8.824, 0.189, -60.12]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2157"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2157.geometry}
          material={materials.Barra}
          position={[-8.821, 0.189, -59.938]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1314"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1314.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -60.217]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1315"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1315.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -60.217]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube158"
          castShadow
          receiveShadow
          geometry={nodes.Cube158.geometry}
          material={materials.Plastico}
          position={[-9.387, 1.194, -60.844]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve157"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve157.geometry}
          material={materials["Material.014"]}
          position={[-9.902, 0.782, -60.181]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask158"
          position={[-9.384, 1.196, -64.748]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube317"
            castShadow
            receiveShadow
            geometry={nodes.Cube317.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube317_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube317_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3158"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3158.geometry}
          material={materials.Barra}
          position={[-8.824, 0.189, -64.692]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2158"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2158.geometry}
          material={materials.Barra}
          position={[-8.821, 0.189, -64.509]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1316"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1316.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -64.788]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1317"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1317.geometry}
          material={materials.Barra}
          position={[-9.509, 0.986, -64.788]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube159"
          castShadow
          receiveShadow
          geometry={nodes.Cube159.geometry}
          material={materials.Plastico}
          position={[-9.387, 1.194, -65.416]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve158"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve158.geometry}
          material={materials["Material.014"]}
          position={[-9.902, 0.782, -64.753]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask159"
          position={[-6.486, 1.196, -64.748]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube319"
            castShadow
            receiveShadow
            geometry={nodes.Cube319.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube319_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube319_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3159"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3159.geometry}
          material={materials.Barra}
          position={[-5.926, 0.189, -64.692]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2159"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2159.geometry}
          material={materials.Barra}
          position={[-5.923, 0.189, -64.509]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1318"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1318.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -64.788]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1319"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1319.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -64.788]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube160"
          castShadow
          receiveShadow
          geometry={nodes.Cube160.geometry}
          material={materials.Plastico}
          position={[-6.489, 1.194, -65.416]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve159"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve159.geometry}
          material={materials["Material.014"]}
          position={[-7.004, 0.782, -64.753]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask160"
          position={[-6.486, 1.196, -60.103]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube321"
            castShadow
            receiveShadow
            geometry={nodes.Cube321.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube321_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube321_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3160"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3160.geometry}
          material={materials.Barra}
          position={[-5.926, 0.189, -60.046]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2160"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2160.geometry}
          material={materials.Barra}
          position={[-5.923, 0.189, -59.864]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1320"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1320.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -60.142]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1321"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1321.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -60.142]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube161"
          castShadow
          receiveShadow
          geometry={nodes.Cube161.geometry}
          material={materials.Plastico}
          position={[-6.489, 1.194, -60.77]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve160"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve160.geometry}
          material={materials["Material.014"]}
          position={[-7.004, 0.782, -60.107]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask161"
          position={[-6.486, 1.196, -56.925]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube323"
            castShadow
            receiveShadow
            geometry={nodes.Cube323.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube323_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube323_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3161"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3161.geometry}
          material={materials.Barra}
          position={[-5.926, 0.189, -56.868]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2161"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2161.geometry}
          material={materials.Barra}
          position={[-5.923, 0.189, -56.686]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1322"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1322.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -56.964]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1323"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1323.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -56.964]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube162"
          castShadow
          receiveShadow
          geometry={nodes.Cube162.geometry}
          material={materials.Plastico}
          position={[-6.489, 1.194, -57.592]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve161"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve161.geometry}
          material={materials["Material.014"]}
          position={[-7.004, 0.782, -56.929]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask162"
          position={[-6.486, 1.196, -53.952]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube325"
            castShadow
            receiveShadow
            geometry={nodes.Cube325.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube325_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube325_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3162"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3162.geometry}
          material={materials.Barra}
          position={[-5.926, 0.189, -53.895]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2162"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2162.geometry}
          material={materials.Barra}
          position={[-5.923, 0.189, -53.713]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1324"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1324.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -53.992]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1325"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1325.geometry}
          material={materials.Barra}
          position={[-6.611, 0.986, -53.992]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube163"
          castShadow
          receiveShadow
          geometry={nodes.Cube163.geometry}
          material={materials.Plastico}
          position={[-6.489, 1.194, -54.619]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve162"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve162.geometry}
          material={materials["Material.014"]}
          position={[-7.004, 0.782, -53.956]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask163"
          position={[-53.037, 1.196, -48.971]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube327"
            castShadow
            receiveShadow
            geometry={nodes.Cube327.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube327_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube327_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3163"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3163.geometry}
          material={materials.Barra}
          position={[-52.476, 0.189, -48.914]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2163"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2163.geometry}
          material={materials.Barra}
          position={[-52.474, 0.189, -48.732]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1326"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1326.geometry}
          material={materials.Barra}
          position={[-53.162, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1327"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1327.geometry}
          material={materials.Barra}
          position={[-53.162, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube164"
          castShadow
          receiveShadow
          geometry={nodes.Cube164.geometry}
          material={materials.Plastico}
          position={[-53.039, 1.194, -49.639]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve163"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve163.geometry}
          material={materials["Material.014"]}
          position={[-53.554, 0.782, -48.976]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask164"
          position={[-55.355, 1.196, -48.971]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube329"
            castShadow
            receiveShadow
            geometry={nodes.Cube329.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube329_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube329_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3164"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3164.geometry}
          material={materials.Barra}
          position={[-54.795, 0.189, -48.914]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2164"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2164.geometry}
          material={materials.Barra}
          position={[-54.792, 0.189, -48.732]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1328"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1328.geometry}
          material={materials.Barra}
          position={[-55.48, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1329"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1329.geometry}
          material={materials.Barra}
          position={[-55.48, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube165"
          castShadow
          receiveShadow
          geometry={nodes.Cube165.geometry}
          material={materials.Plastico}
          position={[-55.358, 1.194, -49.639]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve164"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve164.geometry}
          material={materials["Material.014"]}
          position={[-55.873, 0.782, -48.976]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask165"
          position={[-58.044, 1.196, -48.971]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube331"
            castShadow
            receiveShadow
            geometry={nodes.Cube331.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube331_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube331_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3165"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3165.geometry}
          material={materials.Barra}
          position={[-57.483, 0.189, -48.914]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2165"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2165.geometry}
          material={materials.Barra}
          position={[-57.481, 0.189, -48.732]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1330"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1330.geometry}
          material={materials.Barra}
          position={[-58.169, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1331"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1331.geometry}
          material={materials.Barra}
          position={[-58.169, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube166"
          castShadow
          receiveShadow
          geometry={nodes.Cube166.geometry}
          material={materials.Plastico}
          position={[-58.047, 1.194, -49.639]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve165"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve165.geometry}
          material={materials["Material.014"]}
          position={[-58.562, 0.782, -48.976]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask166"
          position={[-60.546, 1.196, -48.971]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube333"
            castShadow
            receiveShadow
            geometry={nodes.Cube333.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube333_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube333_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3166"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3166.geometry}
          material={materials.Barra}
          position={[-59.986, 0.189, -48.914]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2166"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2166.geometry}
          material={materials.Barra}
          position={[-59.983, 0.189, -48.732]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1332"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1332.geometry}
          material={materials.Barra}
          position={[-60.671, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1333"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1333.geometry}
          material={materials.Barra}
          position={[-60.671, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube167"
          castShadow
          receiveShadow
          geometry={nodes.Cube167.geometry}
          material={materials.Plastico}
          position={[-60.549, 1.194, -49.639]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve166"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve166.geometry}
          material={materials["Material.014"]}
          position={[-61.064, 0.782, -48.976]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask167"
          position={[-63.221, 1.196, -48.971]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube335"
            castShadow
            receiveShadow
            geometry={nodes.Cube335.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube335_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube335_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3167"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3167.geometry}
          material={materials.Barra}
          position={[-62.661, 0.189, -48.914]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2167"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2167.geometry}
          material={materials.Barra}
          position={[-62.658, 0.189, -48.732]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1334"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1334.geometry}
          material={materials.Barra}
          position={[-63.346, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1335"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1335.geometry}
          material={materials.Barra}
          position={[-63.346, 0.986, -49.011]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube168"
          castShadow
          receiveShadow
          geometry={nodes.Cube168.geometry}
          material={materials.Plastico}
          position={[-63.224, 1.194, -49.639]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve167"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve167.geometry}
          material={materials["Material.014"]}
          position={[-63.739, 0.782, -48.976]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask168"
          position={[-63.221, 1.196, -52.457]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube337"
            castShadow
            receiveShadow
            geometry={nodes.Cube337.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube337_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube337_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3168"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3168.geometry}
          material={materials.Barra}
          position={[-62.661, 0.189, -52.4]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2168"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2168.geometry}
          material={materials.Barra}
          position={[-62.658, 0.189, -52.218]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1336"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1336.geometry}
          material={materials.Barra}
          position={[-63.346, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1337"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1337.geometry}
          material={materials.Barra}
          position={[-63.346, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube169"
          castShadow
          receiveShadow
          geometry={nodes.Cube169.geometry}
          material={materials.Plastico}
          position={[-63.224, 1.194, -53.124]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve168"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve168.geometry}
          material={materials["Material.014"]}
          position={[-63.739, 0.782, -52.461]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask169"
          position={[-60.616, 1.196, -52.457]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube339"
            castShadow
            receiveShadow
            geometry={nodes.Cube339.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube339_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube339_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3169"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3169.geometry}
          material={materials.Barra}
          position={[-60.055, 0.189, -52.4]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2169"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2169.geometry}
          material={materials.Barra}
          position={[-60.053, 0.189, -52.218]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1338"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1338.geometry}
          material={materials.Barra}
          position={[-60.74, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1339"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1339.geometry}
          material={materials.Barra}
          position={[-60.74, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube170"
          castShadow
          receiveShadow
          geometry={nodes.Cube170.geometry}
          material={materials.Plastico}
          position={[-60.618, 1.194, -53.124]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve169"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve169.geometry}
          material={materials["Material.014"]}
          position={[-61.133, 0.782, -52.461]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask170"
          position={[-60.616, 1.196, -52.457]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube341"
            castShadow
            receiveShadow
            geometry={nodes.Cube341.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube341_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube341_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3170"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3170.geometry}
          material={materials.Barra}
          position={[-60.055, 0.189, -52.4]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2170"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2170.geometry}
          material={materials.Barra}
          position={[-60.053, 0.189, -52.218]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1340"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1340.geometry}
          material={materials.Barra}
          position={[-60.74, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1341"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1341.geometry}
          material={materials.Barra}
          position={[-60.74, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube171"
          castShadow
          receiveShadow
          geometry={nodes.Cube171.geometry}
          material={materials.Plastico}
          position={[-60.618, 1.194, -53.124]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve170"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve170.geometry}
          material={materials["Material.014"]}
          position={[-61.133, 0.782, -52.461]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask171"
          position={[-58.112, 1.196, -52.457]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube343"
            castShadow
            receiveShadow
            geometry={nodes.Cube343.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube343_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube343_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3171"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3171.geometry}
          material={materials.Barra}
          position={[-57.552, 0.189, -52.4]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2171"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2171.geometry}
          material={materials.Barra}
          position={[-57.549, 0.189, -52.218]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1342"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1342.geometry}
          material={materials.Barra}
          position={[-58.237, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1343"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1343.geometry}
          material={materials.Barra}
          position={[-58.237, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube172"
          castShadow
          receiveShadow
          geometry={nodes.Cube172.geometry}
          material={materials.Plastico}
          position={[-58.115, 1.194, -53.124]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve171"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve171.geometry}
          material={materials["Material.014"]}
          position={[-58.63, 0.782, -52.461]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask172"
          position={[-55.352, 1.196, -52.457]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube345"
            castShadow
            receiveShadow
            geometry={nodes.Cube345.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube345_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube345_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3172"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3172.geometry}
          material={materials.Barra}
          position={[-54.791, 0.189, -52.4]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2172"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2172.geometry}
          material={materials.Barra}
          position={[-54.789, 0.189, -52.218]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1344"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1344.geometry}
          material={materials.Barra}
          position={[-55.476, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1345"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1345.geometry}
          material={materials.Barra}
          position={[-55.476, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube173"
          castShadow
          receiveShadow
          geometry={nodes.Cube173.geometry}
          material={materials.Plastico}
          position={[-55.354, 1.194, -53.124]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve172"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve172.geometry}
          material={materials["Material.014"]}
          position={[-55.869, 0.782, -52.461]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask173"
          position={[-52.91, 1.196, -52.457]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube347"
            castShadow
            receiveShadow
            geometry={nodes.Cube347.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube347_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube347_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3173"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3173.geometry}
          material={materials.Barra}
          position={[-52.35, 0.189, -52.4]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2173"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2173.geometry}
          material={materials.Barra}
          position={[-52.347, 0.189, -52.218]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1346"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1346.geometry}
          material={materials.Barra}
          position={[-53.035, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1347"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1347.geometry}
          material={materials.Barra}
          position={[-53.035, 0.986, -52.496]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube174"
          castShadow
          receiveShadow
          geometry={nodes.Cube174.geometry}
          material={materials.Plastico}
          position={[-52.913, 1.194, -53.124]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve173"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve173.geometry}
          material={materials["Material.014"]}
          position={[-53.428, 0.782, -52.461]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask174"
          position={[-52.91, 1.196, -56.061]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube349"
            castShadow
            receiveShadow
            geometry={nodes.Cube349.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube349_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube349_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3174"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3174.geometry}
          material={materials.Barra}
          position={[-52.35, 0.189, -56.005]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2174"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2174.geometry}
          material={materials.Barra}
          position={[-52.347, 0.189, -55.822]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1348"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1348.geometry}
          material={materials.Barra}
          position={[-53.035, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1349"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1349.geometry}
          material={materials.Barra}
          position={[-53.035, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube175"
          castShadow
          receiveShadow
          geometry={nodes.Cube175.geometry}
          material={materials.Plastico}
          position={[-52.913, 1.194, -56.729]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve174"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve174.geometry}
          material={materials["Material.014"]}
          position={[-53.428, 0.782, -56.066]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask175"
          position={[-55.363, 1.196, -56.061]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube351"
            castShadow
            receiveShadow
            geometry={nodes.Cube351.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube351_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube351_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3175"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3175.geometry}
          material={materials.Barra}
          position={[-54.803, 0.189, -56.005]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2175"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2175.geometry}
          material={materials.Barra}
          position={[-54.8, 0.189, -55.822]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1350"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1350.geometry}
          material={materials.Barra}
          position={[-55.488, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1351"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1351.geometry}
          material={materials.Barra}
          position={[-55.488, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube176"
          castShadow
          receiveShadow
          geometry={nodes.Cube176.geometry}
          material={materials.Plastico}
          position={[-55.366, 1.194, -56.729]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve175"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve175.geometry}
          material={materials["Material.014"]}
          position={[-55.881, 0.782, -56.066]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask176"
          position={[-58.033, 1.196, -56.061]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube353"
            castShadow
            receiveShadow
            geometry={nodes.Cube353.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube353_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube353_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3176"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3176.geometry}
          material={materials.Barra}
          position={[-57.472, 0.189, -56.005]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2176"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2176.geometry}
          material={materials.Barra}
          position={[-57.47, 0.189, -55.822]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1352"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1352.geometry}
          material={materials.Barra}
          position={[-58.157, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1353"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1353.geometry}
          material={materials.Barra}
          position={[-58.157, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube177"
          castShadow
          receiveShadow
          geometry={nodes.Cube177.geometry}
          material={materials.Plastico}
          position={[-58.035, 1.194, -56.729]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve176"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve176.geometry}
          material={materials["Material.014"]}
          position={[-58.55, 0.782, -56.066]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask177"
          position={[-60.621, 1.196, -56.061]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube355"
            castShadow
            receiveShadow
            geometry={nodes.Cube355.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube355_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube355_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3177"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3177.geometry}
          material={materials.Barra}
          position={[-60.06, 0.189, -56.005]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2177"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2177.geometry}
          material={materials.Barra}
          position={[-60.058, 0.189, -55.822]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1354"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1354.geometry}
          material={materials.Barra}
          position={[-60.745, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1355"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1355.geometry}
          material={materials.Barra}
          position={[-60.745, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube178"
          castShadow
          receiveShadow
          geometry={nodes.Cube178.geometry}
          material={materials.Plastico}
          position={[-60.623, 1.194, -56.729]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve177"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve177.geometry}
          material={materials["Material.014"]}
          position={[-61.138, 0.782, -56.066]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask178"
          position={[-63.196, 1.196, -56.061]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube357"
            castShadow
            receiveShadow
            geometry={nodes.Cube357.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube357_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube357_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3178"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3178.geometry}
          material={materials.Barra}
          position={[-62.635, 0.189, -56.005]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2178"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2178.geometry}
          material={materials.Barra}
          position={[-62.633, 0.189, -55.822]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1356"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1356.geometry}
          material={materials.Barra}
          position={[-63.32, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1357"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1357.geometry}
          material={materials.Barra}
          position={[-63.32, 0.986, -56.101]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube179"
          castShadow
          receiveShadow
          geometry={nodes.Cube179.geometry}
          material={materials.Plastico}
          position={[-63.198, 1.194, -56.729]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve178"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve178.geometry}
          material={materials["Material.014"]}
          position={[-63.713, 0.782, -56.066]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask179"
          position={[-63.196, 1.196, -60.998]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube359"
            castShadow
            receiveShadow
            geometry={nodes.Cube359.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube359_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube359_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3179"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3179.geometry}
          material={materials.Barra}
          position={[-62.635, 0.189, -60.941]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2179"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2179.geometry}
          material={materials.Barra}
          position={[-62.633, 0.189, -60.759]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1358"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1358.geometry}
          material={materials.Barra}
          position={[-63.32, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1359"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1359.geometry}
          material={materials.Barra}
          position={[-63.32, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube180"
          castShadow
          receiveShadow
          geometry={nodes.Cube180.geometry}
          material={materials.Plastico}
          position={[-63.198, 1.194, -61.666]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve179"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve179.geometry}
          material={materials["Material.014"]}
          position={[-63.713, 0.782, -61.003]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask180"
          position={[-60.641, 1.196, -60.998]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube361"
            castShadow
            receiveShadow
            geometry={nodes.Cube361.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube361_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube361_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3180"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3180.geometry}
          material={materials.Barra}
          position={[-60.081, 0.189, -60.941]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2180"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2180.geometry}
          material={materials.Barra}
          position={[-60.078, 0.189, -60.759]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1360"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1360.geometry}
          material={materials.Barra}
          position={[-60.766, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1361"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1361.geometry}
          material={materials.Barra}
          position={[-60.766, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube181"
          castShadow
          receiveShadow
          geometry={nodes.Cube181.geometry}
          material={materials.Plastico}
          position={[-60.644, 1.194, -61.666]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve180"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve180.geometry}
          material={materials["Material.014"]}
          position={[-61.159, 0.782, -61.003]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask181"
          position={[-58.117, 1.196, -60.998]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube363"
            castShadow
            receiveShadow
            geometry={nodes.Cube363.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube363_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube363_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3181"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3181.geometry}
          material={materials.Barra}
          position={[-57.556, 0.189, -60.941]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2181"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2181.geometry}
          material={materials.Barra}
          position={[-57.554, 0.189, -60.759]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1362"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1362.geometry}
          material={materials.Barra}
          position={[-58.242, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1363"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1363.geometry}
          material={materials.Barra}
          position={[-58.242, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube182"
          castShadow
          receiveShadow
          geometry={nodes.Cube182.geometry}
          material={materials.Plastico}
          position={[-58.12, 1.194, -61.666]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve181"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve181.geometry}
          material={materials["Material.014"]}
          position={[-58.634, 0.782, -61.003]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask182"
          position={[-55.445, 1.196, -60.998]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube365"
            castShadow
            receiveShadow
            geometry={nodes.Cube365.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube365_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube365_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3182"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3182.geometry}
          material={materials.Barra}
          position={[-54.884, 0.189, -60.941]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2182"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2182.geometry}
          material={materials.Barra}
          position={[-54.882, 0.189, -60.759]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1364"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1364.geometry}
          material={materials.Barra}
          position={[-55.57, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1365"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1365.geometry}
          material={materials.Barra}
          position={[-55.57, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube183"
          castShadow
          receiveShadow
          geometry={nodes.Cube183.geometry}
          material={materials.Plastico}
          position={[-55.448, 1.194, -61.666]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve182"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve182.geometry}
          material={materials["Material.014"]}
          position={[-55.962, 0.782, -61.003]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask183"
          position={[-52.808, 1.196, -60.998]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube367"
            castShadow
            receiveShadow
            geometry={nodes.Cube367.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube367_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube367_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3183"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3183.geometry}
          material={materials.Barra}
          position={[-52.248, 0.189, -60.941]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2183"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2183.geometry}
          material={materials.Barra}
          position={[-52.245, 0.189, -60.759]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1366"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1366.geometry}
          material={materials.Barra}
          position={[-52.933, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1367"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1367.geometry}
          material={materials.Barra}
          position={[-52.933, 0.986, -61.038]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube184"
          castShadow
          receiveShadow
          geometry={nodes.Cube184.geometry}
          material={materials.Plastico}
          position={[-52.811, 1.194, -61.666]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve183"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve183.geometry}
          material={materials["Material.014"]}
          position={[-53.326, 0.782, -61.003]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask184"
          position={[-52.808, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube369"
            castShadow
            receiveShadow
            geometry={nodes.Cube369.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube369_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube369_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3184"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3184.geometry}
          material={materials.Barra}
          position={[-52.248, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2184"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2184.geometry}
          material={materials.Barra}
          position={[-52.245, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1368"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1368.geometry}
          material={materials.Barra}
          position={[-52.933, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1369"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1369.geometry}
          material={materials.Barra}
          position={[-52.933, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube185"
          castShadow
          receiveShadow
          geometry={nodes.Cube185.geometry}
          material={materials.Plastico}
          position={[-52.811, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve184"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve184.geometry}
          material={materials["Material.014"]}
          position={[-53.326, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask185"
          position={[-55.453, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube371"
            castShadow
            receiveShadow
            geometry={nodes.Cube371.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube371_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube371_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3185"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3185.geometry}
          material={materials.Barra}
          position={[-54.892, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2185"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2185.geometry}
          material={materials.Barra}
          position={[-54.89, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1370"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1370.geometry}
          material={materials.Barra}
          position={[-55.578, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1371"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1371.geometry}
          material={materials.Barra}
          position={[-55.578, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube186"
          castShadow
          receiveShadow
          geometry={nodes.Cube186.geometry}
          material={materials.Plastico}
          position={[-55.455, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve185"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve185.geometry}
          material={materials["Material.014"]}
          position={[-55.97, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask186"
          position={[-58.043, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube373"
            castShadow
            receiveShadow
            geometry={nodes.Cube373.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube373_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube373_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3186"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3186.geometry}
          material={materials.Barra}
          position={[-57.483, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2186"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2186.geometry}
          material={materials.Barra}
          position={[-57.48, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1372"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1372.geometry}
          material={materials.Barra}
          position={[-58.168, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1373"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1373.geometry}
          material={materials.Barra}
          position={[-58.168, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube187"
          castShadow
          receiveShadow
          geometry={nodes.Cube187.geometry}
          material={materials.Plastico}
          position={[-58.046, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve186"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve186.geometry}
          material={materials["Material.014"]}
          position={[-58.561, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask187"
          position={[-60.7, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube375"
            castShadow
            receiveShadow
            geometry={nodes.Cube375.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube375_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube375_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3187"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3187.geometry}
          material={materials.Barra}
          position={[-60.139, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2187"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2187.geometry}
          material={materials.Barra}
          position={[-60.137, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1374"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1374.geometry}
          material={materials.Barra}
          position={[-60.825, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1375"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1375.geometry}
          material={materials.Barra}
          position={[-60.825, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube188"
          castShadow
          receiveShadow
          geometry={nodes.Cube188.geometry}
          material={materials.Plastico}
          position={[-60.703, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve187"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve187.geometry}
          material={materials["Material.014"]}
          position={[-61.218, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask188"
          position={[-60.7, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube377"
            castShadow
            receiveShadow
            geometry={nodes.Cube377.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube377_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube377_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3188"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3188.geometry}
          material={materials.Barra}
          position={[-60.139, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2188"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2188.geometry}
          material={materials.Barra}
          position={[-60.137, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1376"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1376.geometry}
          material={materials.Barra}
          position={[-60.825, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1377"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1377.geometry}
          material={materials.Barra}
          position={[-60.825, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube189"
          castShadow
          receiveShadow
          geometry={nodes.Cube189.geometry}
          material={materials.Plastico}
          position={[-60.703, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve188"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve188.geometry}
          material={materials["Material.014"]}
          position={[-61.218, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask189"
          position={[-109.499, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube379"
            castShadow
            receiveShadow
            geometry={nodes.Cube379.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube379_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube379_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3189"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3189.geometry}
          material={materials.Barra}
          position={[-108.938, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2189"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2189.geometry}
          material={materials.Barra}
          position={[-108.936, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1378"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1378.geometry}
          material={materials.Barra}
          position={[-109.623, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1379"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1379.geometry}
          material={materials.Barra}
          position={[-109.623, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube190"
          castShadow
          receiveShadow
          geometry={nodes.Cube190.geometry}
          material={materials.Plastico}
          position={[-109.501, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve189"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve189.geometry}
          material={materials["Material.014"]}
          position={[-110.016, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask190"
          position={[-112.347, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube381"
            castShadow
            receiveShadow
            geometry={nodes.Cube381.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube381_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube381_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3190"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3190.geometry}
          material={materials.Barra}
          position={[-111.786, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2190"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2190.geometry}
          material={materials.Barra}
          position={[-111.784, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1380"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1380.geometry}
          material={materials.Barra}
          position={[-112.471, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1381"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1381.geometry}
          material={materials.Barra}
          position={[-112.471, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube191"
          castShadow
          receiveShadow
          geometry={nodes.Cube191.geometry}
          material={materials.Plastico}
          position={[-112.349, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve190"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve190.geometry}
          material={materials["Material.014"]}
          position={[-112.864, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask191"
          position={[-115.52, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube383"
            castShadow
            receiveShadow
            geometry={nodes.Cube383.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube383_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube383_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3191"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3191.geometry}
          material={materials.Barra}
          position={[-114.96, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2191"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2191.geometry}
          material={materials.Barra}
          position={[-114.957, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1382"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1382.geometry}
          material={materials.Barra}
          position={[-115.645, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1383"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1383.geometry}
          material={materials.Barra}
          position={[-115.645, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube192"
          castShadow
          receiveShadow
          geometry={nodes.Cube192.geometry}
          material={materials.Plastico}
          position={[-115.523, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve191"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve191.geometry}
          material={materials["Material.014"]}
          position={[-116.038, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask192"
          position={[-118.766, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube385"
            castShadow
            receiveShadow
            geometry={nodes.Cube385.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube385_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube385_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3192"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3192.geometry}
          material={materials.Barra}
          position={[-118.205, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2192"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2192.geometry}
          material={materials.Barra}
          position={[-118.203, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1384"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1384.geometry}
          material={materials.Barra}
          position={[-118.89, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1385"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1385.geometry}
          material={materials.Barra}
          position={[-118.89, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube193"
          castShadow
          receiveShadow
          geometry={nodes.Cube193.geometry}
          material={materials.Plastico}
          position={[-118.768, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve192"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve192.geometry}
          material={materials["Material.014"]}
          position={[-119.283, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask193"
          position={[-121.761, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube387"
            castShadow
            receiveShadow
            geometry={nodes.Cube387.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube387_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube387_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3193"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3193.geometry}
          material={materials.Barra}
          position={[-121.2, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2193"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2193.geometry}
          material={materials.Barra}
          position={[-121.198, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1386"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1386.geometry}
          material={materials.Barra}
          position={[-121.886, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1387"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1387.geometry}
          material={materials.Barra}
          position={[-121.886, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube194"
          castShadow
          receiveShadow
          geometry={nodes.Cube194.geometry}
          material={materials.Plastico}
          position={[-121.763, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve193"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve193.geometry}
          material={materials["Material.014"]}
          position={[-122.278, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask194"
          position={[-124.934, 1.196, -65.62]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube389"
            castShadow
            receiveShadow
            geometry={nodes.Cube389.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube389_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube389_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3194"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3194.geometry}
          material={materials.Barra}
          position={[-124.373, 0.189, -65.563]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2194"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2194.geometry}
          material={materials.Barra}
          position={[-124.371, 0.189, -65.381]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1388"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1388.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1389"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1389.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -65.659]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube195"
          castShadow
          receiveShadow
          geometry={nodes.Cube195.geometry}
          material={materials.Plastico}
          position={[-124.936, 1.194, -66.287]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve194"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve194.geometry}
          material={materials["Material.014"]}
          position={[-125.451, 0.782, -65.624]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask195"
          position={[-124.934, 1.196, -61.613]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube391"
            castShadow
            receiveShadow
            geometry={nodes.Cube391.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube391_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube391_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3195"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3195.geometry}
          material={materials.Barra}
          position={[-124.373, 0.189, -61.556]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2195"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2195.geometry}
          material={materials.Barra}
          position={[-124.371, 0.189, -61.374]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1390"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1390.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -61.652]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1391"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1391.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -61.652]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube196"
          castShadow
          receiveShadow
          geometry={nodes.Cube196.geometry}
          material={materials.Plastico}
          position={[-124.936, 1.194, -62.28]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve195"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve195.geometry}
          material={materials["Material.014"]}
          position={[-125.451, 0.782, -61.617]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask196"
          position={[-124.934, 1.196, -58.002]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube393"
            castShadow
            receiveShadow
            geometry={nodes.Cube393.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube393_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube393_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3196"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3196.geometry}
          material={materials.Barra}
          position={[-124.373, 0.189, -57.945]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2196"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2196.geometry}
          material={materials.Barra}
          position={[-124.371, 0.189, -57.763]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1392"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1392.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -58.042]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1393"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1393.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -58.042]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube197"
          castShadow
          receiveShadow
          geometry={nodes.Cube197.geometry}
          material={materials.Plastico}
          position={[-124.936, 1.194, -58.67]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve196"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve196.geometry}
          material={materials["Material.014"]}
          position={[-125.451, 0.782, -58.006]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask197"
          position={[-124.934, 1.196, -55.114]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube395"
            castShadow
            receiveShadow
            geometry={nodes.Cube395.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube395_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube395_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3197"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3197.geometry}
          material={materials.Barra}
          position={[-124.373, 0.189, -55.057]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2197"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2197.geometry}
          material={materials.Barra}
          position={[-124.371, 0.189, -54.875]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1394"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1394.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -55.153]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1395"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1395.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -55.153]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube198"
          castShadow
          receiveShadow
          geometry={nodes.Cube198.geometry}
          material={materials.Plastico}
          position={[-124.936, 1.194, -55.781]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve197"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve197.geometry}
          material={materials["Material.014"]}
          position={[-125.451, 0.782, -55.118]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask198"
          position={[-124.934, 1.196, -51.692]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube397"
            castShadow
            receiveShadow
            geometry={nodes.Cube397.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube397_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube397_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3198"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3198.geometry}
          material={materials.Barra}
          position={[-124.373, 0.189, -51.635]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2198"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2198.geometry}
          material={materials.Barra}
          position={[-124.371, 0.189, -51.453]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1396"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1396.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -51.731]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1397"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1397.geometry}
          material={materials.Barra}
          position={[-125.058, 0.986, -51.731]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube199"
          castShadow
          receiveShadow
          geometry={nodes.Cube199.geometry}
          material={materials.Plastico}
          position={[-124.936, 1.194, -52.359]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve198"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve198.geometry}
          material={materials["Material.014"]}
          position={[-125.451, 0.782, -51.696]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask199"
          position={[-121.773, 1.196, -51.692]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube399"
            castShadow
            receiveShadow
            geometry={nodes.Cube399.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube399_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube399_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3199"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3199.geometry}
          material={materials.Barra}
          position={[-121.212, 0.189, -51.635]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2199"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2199.geometry}
          material={materials.Barra}
          position={[-121.21, 0.189, -51.453]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1398"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1398.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -51.731]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1399"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1399.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -51.731]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube200"
          castShadow
          receiveShadow
          geometry={nodes.Cube200.geometry}
          material={materials.Plastico}
          position={[-121.775, 1.194, -52.359]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve199"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve199.geometry}
          material={materials["Material.014"]}
          position={[-122.29, 0.782, -51.696]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask200"
          position={[-121.773, 1.196, -54.927]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube401"
            castShadow
            receiveShadow
            geometry={nodes.Cube401.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube401_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube401_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3200"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3200.geometry}
          material={materials.Barra}
          position={[-121.212, 0.189, -54.87]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2200"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2200.geometry}
          material={materials.Barra}
          position={[-121.21, 0.189, -54.688]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1400"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1400.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -54.967]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1401"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1401.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -54.967]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube201"
          castShadow
          receiveShadow
          geometry={nodes.Cube201.geometry}
          material={materials.Plastico}
          position={[-121.775, 1.194, -55.595]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve200"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve200.geometry}
          material={materials["Material.014"]}
          position={[-122.29, 0.782, -54.932]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask201"
          position={[-121.773, 1.196, -57.993]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube403"
            castShadow
            receiveShadow
            geometry={nodes.Cube403.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube403_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube403_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3201"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3201.geometry}
          material={materials.Barra}
          position={[-121.212, 0.189, -57.936]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2201"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2201.geometry}
          material={materials.Barra}
          position={[-121.21, 0.189, -57.754]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1402"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1402.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -58.033]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1403"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1403.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -58.033]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube202"
          castShadow
          receiveShadow
          geometry={nodes.Cube202.geometry}
          material={materials.Plastico}
          position={[-121.775, 1.194, -58.661]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve201"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve201.geometry}
          material={materials["Material.014"]}
          position={[-122.29, 0.782, -57.997]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask202"
          position={[-121.773, 1.196, -61.621]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube405"
            castShadow
            receiveShadow
            geometry={nodes.Cube405.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube405_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube405_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3202"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3202.geometry}
          material={materials.Barra}
          position={[-121.212, 0.189, -61.565]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2202"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2202.geometry}
          material={materials.Barra}
          position={[-121.21, 0.189, -61.382]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1404"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1404.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -61.661]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1405"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1405.geometry}
          material={materials.Barra}
          position={[-121.898, 0.986, -61.661]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube203"
          castShadow
          receiveShadow
          geometry={nodes.Cube203.geometry}
          material={materials.Plastico}
          position={[-121.775, 1.194, -62.289]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve202"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve202.geometry}
          material={materials["Material.014"]}
          position={[-122.29, 0.782, -61.626]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask203"
          position={[-118.739, 1.196, -61.621]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube407"
            castShadow
            receiveShadow
            geometry={nodes.Cube407.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube407_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube407_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3203"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3203.geometry}
          material={materials.Barra}
          position={[-118.178, 0.189, -61.565]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2203"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2203.geometry}
          material={materials.Barra}
          position={[-118.176, 0.189, -61.382]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1406"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1406.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -61.661]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1407"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1407.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -61.661]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube204"
          castShadow
          receiveShadow
          geometry={nodes.Cube204.geometry}
          material={materials.Plastico}
          position={[-118.742, 1.194, -62.289]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve203"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve203.geometry}
          material={materials["Material.014"]}
          position={[-119.257, 0.782, -61.626]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask204"
          position={[-118.739, 1.196, -57.607]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube409"
            castShadow
            receiveShadow
            geometry={nodes.Cube409.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube409_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube409_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3204"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3204.geometry}
          material={materials.Barra}
          position={[-118.178, 0.189, -57.55]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2204"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2204.geometry}
          material={materials.Barra}
          position={[-118.176, 0.189, -57.368]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1408"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1408.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -57.646]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1409"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1409.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -57.646]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube205"
          castShadow
          receiveShadow
          geometry={nodes.Cube205.geometry}
          material={materials.Plastico}
          position={[-118.742, 1.194, -58.274]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve204"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve204.geometry}
          material={materials["Material.014"]}
          position={[-119.257, 0.782, -57.611]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask205"
          position={[-118.739, 1.196, -54.896]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube411"
            castShadow
            receiveShadow
            geometry={nodes.Cube411.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube411_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube411_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3205"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3205.geometry}
          material={materials.Barra}
          position={[-118.178, 0.189, -54.839]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2205"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2205.geometry}
          material={materials.Barra}
          position={[-118.176, 0.189, -54.657]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1410"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1410.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -54.936]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1411"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1411.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -54.936]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube206"
          castShadow
          receiveShadow
          geometry={nodes.Cube206.geometry}
          material={materials.Plastico}
          position={[-118.742, 1.194, -55.564]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve205"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve205.geometry}
          material={materials["Material.014"]}
          position={[-119.257, 0.782, -54.901]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask206"
          position={[-118.739, 1.196, -51.798]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube413"
            castShadow
            receiveShadow
            geometry={nodes.Cube413.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube413_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube413_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3206"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3206.geometry}
          material={materials.Barra}
          position={[-118.178, 0.189, -51.741]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2206"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2206.geometry}
          material={materials.Barra}
          position={[-118.176, 0.189, -51.559]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1412"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1412.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -51.837]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1413"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1413.geometry}
          material={materials.Barra}
          position={[-118.864, 0.986, -51.837]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube207"
          castShadow
          receiveShadow
          geometry={nodes.Cube207.geometry}
          material={materials.Plastico}
          position={[-118.742, 1.194, -52.465]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve206"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve206.geometry}
          material={materials["Material.014"]}
          position={[-119.257, 0.782, -51.802]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask207"
          position={[-115.551, 1.196, -51.798]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube415"
            castShadow
            receiveShadow
            geometry={nodes.Cube415.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube415_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube415_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3207"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3207.geometry}
          material={materials.Barra}
          position={[-114.99, 0.189, -51.741]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2207"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2207.geometry}
          material={materials.Barra}
          position={[-114.988, 0.189, -51.559]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1414"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1414.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -51.837]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1415"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1415.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -51.837]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube208"
          castShadow
          receiveShadow
          geometry={nodes.Cube208.geometry}
          material={materials.Plastico}
          position={[-115.554, 1.194, -52.465]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve207"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve207.geometry}
          material={materials["Material.014"]}
          position={[-116.068, 0.782, -51.802]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask208"
          position={[-115.551, 1.196, -54.869]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube417"
            castShadow
            receiveShadow
            geometry={nodes.Cube417.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube417_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube417_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3208"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3208.geometry}
          material={materials.Barra}
          position={[-114.99, 0.189, -54.812]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2208"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2208.geometry}
          material={materials.Barra}
          position={[-114.988, 0.189, -54.63]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1416"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1416.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -54.908]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1417"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1417.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -54.908]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube209"
          castShadow
          receiveShadow
          geometry={nodes.Cube209.geometry}
          material={materials.Plastico}
          position={[-115.554, 1.194, -55.536]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve208"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve208.geometry}
          material={materials["Material.014"]}
          position={[-116.068, 0.782, -54.873]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask209"
          position={[-115.551, 1.196, -57.606]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube419"
            castShadow
            receiveShadow
            geometry={nodes.Cube419.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube419_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube419_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3209"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3209.geometry}
          material={materials.Barra}
          position={[-114.99, 0.189, -57.549]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2209"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2209.geometry}
          material={materials.Barra}
          position={[-114.988, 0.189, -57.367]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1418"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1418.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -57.646]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1419"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1419.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -57.646]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube210"
          castShadow
          receiveShadow
          geometry={nodes.Cube210.geometry}
          material={materials.Plastico}
          position={[-115.554, 1.194, -58.274]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve209"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve209.geometry}
          material={materials["Material.014"]}
          position={[-116.068, 0.782, -57.611]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask210"
          position={[-115.551, 1.196, -61.489]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube421"
            castShadow
            receiveShadow
            geometry={nodes.Cube421.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube421_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube421_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3210"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3210.geometry}
          material={materials.Barra}
          position={[-114.99, 0.189, -61.432]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2210"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2210.geometry}
          material={materials.Barra}
          position={[-114.988, 0.189, -61.25]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1420"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1420.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -61.528]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1421"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1421.geometry}
          material={materials.Barra}
          position={[-115.676, 0.986, -61.528]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube211"
          castShadow
          receiveShadow
          geometry={nodes.Cube211.geometry}
          material={materials.Plastico}
          position={[-115.554, 1.194, -62.156]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve210"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve210.geometry}
          material={materials["Material.014"]}
          position={[-116.068, 0.782, -61.493]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask211"
          position={[-112.377, 1.196, -61.489]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube423"
            castShadow
            receiveShadow
            geometry={nodes.Cube423.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube423_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube423_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3211"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3211.geometry}
          material={materials.Barra}
          position={[-111.816, 0.189, -61.432]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2211"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2211.geometry}
          material={materials.Barra}
          position={[-111.814, 0.189, -61.25]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1422"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1422.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -61.528]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1423"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1423.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -61.528]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube212"
          castShadow
          receiveShadow
          geometry={nodes.Cube212.geometry}
          material={materials.Plastico}
          position={[-112.379, 1.194, -62.156]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve211"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve211.geometry}
          material={materials["Material.014"]}
          position={[-112.894, 0.782, -61.493]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask212"
          position={[-112.377, 1.196, -57.7]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube425"
            castShadow
            receiveShadow
            geometry={nodes.Cube425.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube425_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube425_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3212"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3212.geometry}
          material={materials.Barra}
          position={[-111.816, 0.189, -57.643]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2212"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2212.geometry}
          material={materials.Barra}
          position={[-111.814, 0.189, -57.461]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1424"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1424.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -57.739]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1425"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1425.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -57.739]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube213"
          castShadow
          receiveShadow
          geometry={nodes.Cube213.geometry}
          material={materials.Plastico}
          position={[-112.379, 1.194, -58.367]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve212"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve212.geometry}
          material={materials["Material.014"]}
          position={[-112.894, 0.782, -57.704]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask213"
          position={[-112.377, 1.196, -54.695]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube427"
            castShadow
            receiveShadow
            geometry={nodes.Cube427.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube427_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube427_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3213"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3213.geometry}
          material={materials.Barra}
          position={[-111.816, 0.189, -54.639]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2213"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2213.geometry}
          material={materials.Barra}
          position={[-111.814, 0.189, -54.456]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1426"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1426.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -54.735]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1427"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1427.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -54.735]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube214"
          castShadow
          receiveShadow
          geometry={nodes.Cube214.geometry}
          material={materials.Plastico}
          position={[-112.379, 1.194, -55.363]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve213"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve213.geometry}
          material={materials["Material.014"]}
          position={[-112.894, 0.782, -54.7]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask214"
          position={[-112.377, 1.196, -51.881]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube429"
            castShadow
            receiveShadow
            geometry={nodes.Cube429.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube429_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube429_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3214"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3214.geometry}
          material={materials.Barra}
          position={[-111.816, 0.189, -51.825]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2214"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2214.geometry}
          material={materials.Barra}
          position={[-111.814, 0.189, -51.642]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1428"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1428.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -51.921]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1429"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1429.geometry}
          material={materials.Barra}
          position={[-112.502, 0.986, -51.921]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube215"
          castShadow
          receiveShadow
          geometry={nodes.Cube215.geometry}
          material={materials.Plastico}
          position={[-112.379, 1.194, -52.549]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve214"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve214.geometry}
          material={materials["Material.014"]}
          position={[-112.894, 0.782, -51.886]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask215"
          position={[-109.656, 1.196, -51.881]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube431"
            castShadow
            receiveShadow
            geometry={nodes.Cube431.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube431_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube431_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3215"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3215.geometry}
          material={materials.Barra}
          position={[-109.095, 0.189, -51.825]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2215"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2215.geometry}
          material={materials.Barra}
          position={[-109.093, 0.189, -51.642]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1430"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1430.geometry}
          material={materials.Barra}
          position={[-109.78, 0.986, -51.921]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1431"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1431.geometry}
          material={materials.Barra}
          position={[-109.78, 0.986, -51.921]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube216"
          castShadow
          receiveShadow
          geometry={nodes.Cube216.geometry}
          material={materials.Plastico}
          position={[-109.658, 1.194, -52.549]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve215"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve215.geometry}
          material={materials["Material.014"]}
          position={[-110.173, 0.782, -51.886]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask216"
          position={[-109.656, 1.196, -54.493]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube433"
            castShadow
            receiveShadow
            geometry={nodes.Cube433.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube433_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube433_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3216"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3216.geometry}
          material={materials.Barra}
          position={[-109.095, 0.189, -54.436]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2216"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2216.geometry}
          material={materials.Barra}
          position={[-109.093, 0.189, -54.254]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1432"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1432.geometry}
          material={materials.Barra}
          position={[-109.78, 0.986, -54.533]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1433"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1433.geometry}
          material={materials.Barra}
          position={[-109.78, 0.986, -54.533]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube217"
          castShadow
          receiveShadow
          geometry={nodes.Cube217.geometry}
          material={materials.Plastico}
          position={[-109.658, 1.194, -55.16]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve216"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve216.geometry}
          material={materials["Material.014"]}
          position={[-110.173, 0.782, -54.497]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask217"
          position={[-109.656, 1.196, -57.676]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube435"
            castShadow
            receiveShadow
            geometry={nodes.Cube435.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube435_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube435_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3217"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3217.geometry}
          material={materials.Barra}
          position={[-109.095, 0.189, -57.619]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2217"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2217.geometry}
          material={materials.Barra}
          position={[-109.093, 0.189, -57.437]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1434"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1434.geometry}
          material={materials.Barra}
          position={[-109.78, 0.986, -57.716]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1435"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1435.geometry}
          material={materials.Barra}
          position={[-109.78, 0.986, -57.716]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube218"
          castShadow
          receiveShadow
          geometry={nodes.Cube218.geometry}
          material={materials.Plastico}
          position={[-109.658, 1.194, -58.343]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve217"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve217.geometry}
          material={materials["Material.014"]}
          position={[-110.173, 0.782, -57.68]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask218"
          position={[-133.502, 1.196, -49.969]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube437"
            castShadow
            receiveShadow
            geometry={nodes.Cube437.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube437_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube437_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3218"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3218.geometry}
          material={materials.Barra}
          position={[-132.941, 0.189, -49.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2218"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2218.geometry}
          material={materials.Barra}
          position={[-132.939, 0.189, -49.73]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1436"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1436.geometry}
          material={materials.Barra}
          position={[-133.627, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1437"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1437.geometry}
          material={materials.Barra}
          position={[-133.627, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube219"
          castShadow
          receiveShadow
          geometry={nodes.Cube219.geometry}
          material={materials.Plastico}
          position={[-133.504, 1.194, -50.637]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve218"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve218.geometry}
          material={materials["Material.014"]}
          position={[-134.019, 0.782, -49.974]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask219"
          position={[-136.287, 1.196, -49.969]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube439"
            castShadow
            receiveShadow
            geometry={nodes.Cube439.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube439_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube439_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3219"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3219.geometry}
          material={materials.Barra}
          position={[-135.726, 0.189, -49.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2219"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2219.geometry}
          material={materials.Barra}
          position={[-135.724, 0.189, -49.73]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1438"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1438.geometry}
          material={materials.Barra}
          position={[-136.411, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1439"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1439.geometry}
          material={materials.Barra}
          position={[-136.411, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube220"
          castShadow
          receiveShadow
          geometry={nodes.Cube220.geometry}
          material={materials.Plastico}
          position={[-136.289, 1.194, -50.637]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve219"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve219.geometry}
          material={materials["Material.014"]}
          position={[-136.804, 0.782, -49.974]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask220"
          position={[-139.427, 1.196, -49.969]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube441"
            castShadow
            receiveShadow
            geometry={nodes.Cube441.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube441_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube441_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3220"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3220.geometry}
          material={materials.Barra}
          position={[-138.867, 0.189, -49.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2220"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2220.geometry}
          material={materials.Barra}
          position={[-138.864, 0.189, -49.73]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1440"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1440.geometry}
          material={materials.Barra}
          position={[-139.552, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1441"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1441.geometry}
          material={materials.Barra}
          position={[-139.552, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube221"
          castShadow
          receiveShadow
          geometry={nodes.Cube221.geometry}
          material={materials.Plastico}
          position={[-139.43, 1.194, -50.637]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve220"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve220.geometry}
          material={materials["Material.014"]}
          position={[-139.945, 0.782, -49.974]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask221"
          position={[-142.394, 1.196, -49.969]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube443"
            castShadow
            receiveShadow
            geometry={nodes.Cube443.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube443_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube443_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3221"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3221.geometry}
          material={materials.Barra}
          position={[-141.834, 0.189, -49.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2221"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2221.geometry}
          material={materials.Barra}
          position={[-141.831, 0.189, -49.73]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1442"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1442.geometry}
          material={materials.Barra}
          position={[-142.519, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1443"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1443.geometry}
          material={materials.Barra}
          position={[-142.519, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube222"
          castShadow
          receiveShadow
          geometry={nodes.Cube222.geometry}
          material={materials.Plastico}
          position={[-142.397, 1.194, -50.637]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve221"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve221.geometry}
          material={materials["Material.014"]}
          position={[-142.912, 0.782, -49.974]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask222"
          position={[-145.548, 1.196, -49.969]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube445"
            castShadow
            receiveShadow
            geometry={nodes.Cube445.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube445_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube445_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3222"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3222.geometry}
          material={materials.Barra}
          position={[-144.987, 0.189, -49.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2222"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2222.geometry}
          material={materials.Barra}
          position={[-144.985, 0.189, -49.73]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1444"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1444.geometry}
          material={materials.Barra}
          position={[-145.673, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1445"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1445.geometry}
          material={materials.Barra}
          position={[-145.673, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube223"
          castShadow
          receiveShadow
          geometry={nodes.Cube223.geometry}
          material={materials.Plastico}
          position={[-145.55, 1.194, -50.637]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve222"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve222.geometry}
          material={materials["Material.014"]}
          position={[-146.065, 0.782, -49.974]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask223"
          position={[-148.646, 1.196, -49.969]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube447"
            castShadow
            receiveShadow
            geometry={nodes.Cube447.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube447_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube447_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3223"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3223.geometry}
          material={materials.Barra}
          position={[-148.085, 0.189, -49.913]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2223"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2223.geometry}
          material={materials.Barra}
          position={[-148.083, 0.189, -49.73]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1446"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1446.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1447"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1447.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -50.009]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube224"
          castShadow
          receiveShadow
          geometry={nodes.Cube224.geometry}
          material={materials.Plastico}
          position={[-148.649, 1.194, -50.637]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve223"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve223.geometry}
          material={materials["Material.014"]}
          position={[-149.164, 0.782, -49.974]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask224"
          position={[-148.646, 1.196, -53.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube449"
            castShadow
            receiveShadow
            geometry={nodes.Cube449.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube449_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube449_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3224"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3224.geometry}
          material={materials.Barra}
          position={[-148.085, 0.189, -53.023]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2224"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2224.geometry}
          material={materials.Barra}
          position={[-148.083, 0.189, -52.84]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1448"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1448.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -53.119]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1449"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1449.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -53.119]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube225"
          castShadow
          receiveShadow
          geometry={nodes.Cube225.geometry}
          material={materials.Plastico}
          position={[-148.649, 1.194, -53.747]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve224"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve224.geometry}
          material={materials["Material.014"]}
          position={[-149.164, 0.782, -53.084]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask225"
          position={[-148.646, 1.196, -56.669]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube451"
            castShadow
            receiveShadow
            geometry={nodes.Cube451.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube451_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube451_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3225"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3225.geometry}
          material={materials.Barra}
          position={[-148.085, 0.189, -56.613]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2225"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2225.geometry}
          material={materials.Barra}
          position={[-148.083, 0.189, -56.431]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1450"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1450.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -56.709]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1451"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1451.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -56.709]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube226"
          castShadow
          receiveShadow
          geometry={nodes.Cube226.geometry}
          material={materials.Plastico}
          position={[-148.649, 1.194, -57.337]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve225"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve225.geometry}
          material={materials["Material.014"]}
          position={[-149.164, 0.782, -56.674]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask226"
          position={[-148.646, 1.196, -60.679]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube453"
            castShadow
            receiveShadow
            geometry={nodes.Cube453.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube453_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube453_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3226"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3226.geometry}
          material={materials.Barra}
          position={[-148.085, 0.189, -60.623]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2226"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2226.geometry}
          material={materials.Barra}
          position={[-148.083, 0.189, -60.44]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1452"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1452.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -60.719]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1453"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1453.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -60.719]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube227"
          castShadow
          receiveShadow
          geometry={nodes.Cube227.geometry}
          material={materials.Plastico}
          position={[-148.649, 1.194, -61.347]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve226"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve226.geometry}
          material={materials["Material.014"]}
          position={[-149.164, 0.782, -60.684]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask227"
          position={[-148.646, 1.196, -65.884]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube455"
            castShadow
            receiveShadow
            geometry={nodes.Cube455.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube455_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube455_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3227"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3227.geometry}
          material={materials.Barra}
          position={[-148.085, 0.189, -65.827]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2227"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2227.geometry}
          material={materials.Barra}
          position={[-148.083, 0.189, -65.645]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1454"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1454.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -65.923]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1455"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1455.geometry}
          material={materials.Barra}
          position={[-148.771, 0.986, -65.923]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube228"
          castShadow
          receiveShadow
          geometry={nodes.Cube228.geometry}
          material={materials.Plastico}
          position={[-148.649, 1.194, -66.551]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve227"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve227.geometry}
          material={materials["Material.014"]}
          position={[-149.164, 0.782, -65.888]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask228"
          position={[-145.605, 1.196, -65.884]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube457"
            castShadow
            receiveShadow
            geometry={nodes.Cube457.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube457_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube457_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3228"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3228.geometry}
          material={materials.Barra}
          position={[-145.044, 0.189, -65.827]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2228"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2228.geometry}
          material={materials.Barra}
          position={[-145.042, 0.189, -65.645]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1456"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1456.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -65.923]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1457"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1457.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -65.923]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube229"
          castShadow
          receiveShadow
          geometry={nodes.Cube229.geometry}
          material={materials.Plastico}
          position={[-145.607, 1.194, -66.551]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve228"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve228.geometry}
          material={materials["Material.014"]}
          position={[-146.122, 0.782, -65.888]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask229"
          position={[-145.605, 1.196, -60.467]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube459"
            castShadow
            receiveShadow
            geometry={nodes.Cube459.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube459_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube459_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3229"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3229.geometry}
          material={materials.Barra}
          position={[-145.044, 0.189, -60.41]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2229"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2229.geometry}
          material={materials.Barra}
          position={[-145.042, 0.189, -60.228]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1458"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1458.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -60.506]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1459"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1459.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -60.506]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube230"
          castShadow
          receiveShadow
          geometry={nodes.Cube230.geometry}
          material={materials.Plastico}
          position={[-145.607, 1.194, -61.134]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve229"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve229.geometry}
          material={materials["Material.014"]}
          position={[-146.122, 0.782, -60.471]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask230"
          position={[-145.605, 1.196, -56.547]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube461"
            castShadow
            receiveShadow
            geometry={nodes.Cube461.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube461_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube461_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3230"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3230.geometry}
          material={materials.Barra}
          position={[-145.044, 0.189, -56.491]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2230"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2230.geometry}
          material={materials.Barra}
          position={[-145.042, 0.189, -56.308]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1460"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1460.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -56.587]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1461"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1461.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -56.587]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube231"
          castShadow
          receiveShadow
          geometry={nodes.Cube231.geometry}
          material={materials.Plastico}
          position={[-145.607, 1.194, -57.215]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve230"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve230.geometry}
          material={materials["Material.014"]}
          position={[-146.122, 0.782, -56.552]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask231"
          position={[-145.605, 1.196, -53.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube463"
            castShadow
            receiveShadow
            geometry={nodes.Cube463.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube463_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube463_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3231"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3231.geometry}
          material={materials.Barra}
          position={[-145.044, 0.189, -53.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2231"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2231.geometry}
          material={materials.Barra}
          position={[-145.042, 0.189, -52.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1462"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1462.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -53.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1463"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1463.geometry}
          material={materials.Barra}
          position={[-145.729, 0.986, -53.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube232"
          castShadow
          receiveShadow
          geometry={nodes.Cube232.geometry}
          material={materials.Plastico}
          position={[-145.607, 1.194, -53.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve231"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve231.geometry}
          material={materials["Material.014"]}
          position={[-146.122, 0.782, -53.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask232"
          position={[-142.471, 1.196, -53.135]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube465"
            castShadow
            receiveShadow
            geometry={nodes.Cube465.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube465_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube465_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3232"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3232.geometry}
          material={materials.Barra}
          position={[-141.911, 0.189, -53.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2232"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2232.geometry}
          material={materials.Barra}
          position={[-141.908, 0.189, -52.896]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1464"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1464.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -53.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1465"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1465.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -53.175]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube233"
          castShadow
          receiveShadow
          geometry={nodes.Cube233.geometry}
          material={materials.Plastico}
          position={[-142.474, 1.194, -53.803]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve232"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve232.geometry}
          material={materials["Material.014"]}
          position={[-142.989, 0.782, -53.14]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask233"
          position={[-142.471, 1.196, -56.406]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube467"
            castShadow
            receiveShadow
            geometry={nodes.Cube467.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube467_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube467_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3233"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3233.geometry}
          material={materials.Barra}
          position={[-141.911, 0.189, -56.349]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2233"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2233.geometry}
          material={materials.Barra}
          position={[-141.908, 0.189, -56.167]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1466"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1466.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -56.445]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1467"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1467.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -56.445]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube234"
          castShadow
          receiveShadow
          geometry={nodes.Cube234.geometry}
          material={materials.Plastico}
          position={[-142.474, 1.194, -57.073]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve233"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve233.geometry}
          material={materials["Material.014"]}
          position={[-142.989, 0.782, -56.41]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask234"
          position={[-142.471, 1.196, -60.318]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube469"
            castShadow
            receiveShadow
            geometry={nodes.Cube469.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube469_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube469_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3234"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3234.geometry}
          material={materials.Barra}
          position={[-141.911, 0.189, -60.261]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2234"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2234.geometry}
          material={materials.Barra}
          position={[-141.908, 0.189, -60.079]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1468"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1468.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -60.358]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1469"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1469.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -60.358]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube235"
          castShadow
          receiveShadow
          geometry={nodes.Cube235.geometry}
          material={materials.Plastico}
          position={[-142.474, 1.194, -60.986]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve234"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve234.geometry}
          material={materials["Material.014"]}
          position={[-142.989, 0.782, -60.323]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask235"
          position={[-142.471, 1.196, -65.679]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube471"
            castShadow
            receiveShadow
            geometry={nodes.Cube471.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube471_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube471_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3235"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3235.geometry}
          material={materials.Barra}
          position={[-141.911, 0.189, -65.622]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2235"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2235.geometry}
          material={materials.Barra}
          position={[-141.908, 0.189, -65.44]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1470"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1470.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -65.718]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1471"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1471.geometry}
          material={materials.Barra}
          position={[-142.596, 0.986, -65.718]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube236"
          castShadow
          receiveShadow
          geometry={nodes.Cube236.geometry}
          material={materials.Plastico}
          position={[-142.474, 1.194, -66.346]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve235"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve235.geometry}
          material={materials["Material.014"]}
          position={[-142.989, 0.782, -65.683]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask236"
          position={[-139.391, 1.196, -65.679]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube473"
            castShadow
            receiveShadow
            geometry={nodes.Cube473.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube473_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube473_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3236"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3236.geometry}
          material={materials.Barra}
          position={[-138.83, 0.189, -65.622]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2236"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2236.geometry}
          material={materials.Barra}
          position={[-138.828, 0.189, -65.44]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1472"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1472.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -65.718]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1473"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1473.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -65.718]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube237"
          castShadow
          receiveShadow
          geometry={nodes.Cube237.geometry}
          material={materials.Plastico}
          position={[-139.394, 1.194, -66.346]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve236"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve236.geometry}
          material={materials["Material.014"]}
          position={[-139.909, 0.782, -65.683]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask237"
          position={[-139.391, 1.196, -60.167]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube475"
            castShadow
            receiveShadow
            geometry={nodes.Cube475.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube475_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube475_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3237"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3237.geometry}
          material={materials.Barra}
          position={[-138.83, 0.189, -60.11]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2237"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2237.geometry}
          material={materials.Barra}
          position={[-138.828, 0.189, -59.928]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1474"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1474.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -60.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1475"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1475.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -60.206]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube238"
          castShadow
          receiveShadow
          geometry={nodes.Cube238.geometry}
          material={materials.Plastico}
          position={[-139.394, 1.194, -60.834]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve237"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve237.geometry}
          material={materials["Material.014"]}
          position={[-139.909, 0.782, -60.171]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask238"
          position={[-139.391, 1.196, -56.41]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube477"
            castShadow
            receiveShadow
            geometry={nodes.Cube477.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube477_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube477_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3238"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3238.geometry}
          material={materials.Barra}
          position={[-138.83, 0.189, -56.354]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2238"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2238.geometry}
          material={materials.Barra}
          position={[-138.828, 0.189, -56.171]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1476"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1476.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -56.45]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1477"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1477.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -56.45]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube239"
          castShadow
          receiveShadow
          geometry={nodes.Cube239.geometry}
          material={materials.Plastico}
          position={[-139.394, 1.194, -57.078]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve238"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve238.geometry}
          material={materials["Material.014"]}
          position={[-139.909, 0.782, -56.415]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask239"
          position={[-139.391, 1.196, -53.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube479"
            castShadow
            receiveShadow
            geometry={nodes.Cube479.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube479_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube479_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3239"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3239.geometry}
          material={materials.Barra}
          position={[-138.83, 0.189, -53.022]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2239"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2239.geometry}
          material={materials.Barra}
          position={[-138.828, 0.189, -52.84]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1478"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1478.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -53.119]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1479"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1479.geometry}
          material={materials.Barra}
          position={[-139.516, 0.986, -53.119]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube240"
          castShadow
          receiveShadow
          geometry={nodes.Cube240.geometry}
          material={materials.Plastico}
          position={[-139.394, 1.194, -53.747]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve239"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve239.geometry}
          material={materials["Material.014"]}
          position={[-139.909, 0.782, -53.084]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask240"
          position={[-136.243, 1.196, -53.079]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube481"
            castShadow
            receiveShadow
            geometry={nodes.Cube481.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube481_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube481_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3240"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3240.geometry}
          material={materials.Barra}
          position={[-135.682, 0.189, -53.022]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2240"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2240.geometry}
          material={materials.Barra}
          position={[-135.68, 0.189, -52.84]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1480"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1480.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -53.119]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1481"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1481.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -53.119]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube241"
          castShadow
          receiveShadow
          geometry={nodes.Cube241.geometry}
          material={materials.Plastico}
          position={[-136.246, 1.194, -53.747]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve240"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve240.geometry}
          material={materials["Material.014"]}
          position={[-136.761, 0.782, -53.084]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask241"
          position={[-136.243, 1.196, -56.304]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube483"
            castShadow
            receiveShadow
            geometry={nodes.Cube483.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube483_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube483_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3241"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3241.geometry}
          material={materials.Barra}
          position={[-135.682, 0.189, -56.247]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2241"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2241.geometry}
          material={materials.Barra}
          position={[-135.68, 0.189, -56.065]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1482"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1482.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -56.343]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1483"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1483.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -56.343]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube242"
          castShadow
          receiveShadow
          geometry={nodes.Cube242.geometry}
          material={materials.Plastico}
          position={[-136.246, 1.194, -56.971]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve241"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve241.geometry}
          material={materials["Material.014"]}
          position={[-136.761, 0.782, -56.308]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask242"
          position={[-136.243, 1.196, -60.103]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube485"
            castShadow
            receiveShadow
            geometry={nodes.Cube485.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube485_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube485_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3242"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3242.geometry}
          material={materials.Barra}
          position={[-135.682, 0.189, -60.047]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2242"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2242.geometry}
          material={materials.Barra}
          position={[-135.68, 0.189, -59.864]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1484"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1484.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -60.143]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1485"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1485.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -60.143]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube243"
          castShadow
          receiveShadow
          geometry={nodes.Cube243.geometry}
          material={materials.Plastico}
          position={[-136.246, 1.194, -60.771]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve242"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve242.geometry}
          material={materials["Material.014"]}
          position={[-136.761, 0.782, -60.108]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask243"
          position={[-136.243, 1.196, -65.615]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube487"
            castShadow
            receiveShadow
            geometry={nodes.Cube487.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube487_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube487_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3243"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3243.geometry}
          material={materials.Barra}
          position={[-135.682, 0.189, -65.558]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2243"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2243.geometry}
          material={materials.Barra}
          position={[-135.68, 0.189, -65.376]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1486"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1486.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -65.654]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1487"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1487.geometry}
          material={materials.Barra}
          position={[-136.368, 0.986, -65.654]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube244"
          castShadow
          receiveShadow
          geometry={nodes.Cube244.geometry}
          material={materials.Plastico}
          position={[-136.246, 1.194, -66.282]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve243"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve243.geometry}
          material={materials["Material.014"]}
          position={[-136.761, 0.782, -65.619]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask244"
          position={[-133.326, 1.196, -65.615]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube489"
            castShadow
            receiveShadow
            geometry={nodes.Cube489.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube489_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube489_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3244"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3244.geometry}
          material={materials.Barra}
          position={[-132.766, 0.189, -65.558]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2244"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2244.geometry}
          material={materials.Barra}
          position={[-132.763, 0.189, -65.376]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1488"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1488.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -65.654]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1489"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1489.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -65.654]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube245"
          castShadow
          receiveShadow
          geometry={nodes.Cube245.geometry}
          material={materials.Plastico}
          position={[-133.329, 1.194, -66.282]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve244"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve244.geometry}
          material={materials["Material.014"]}
          position={[-133.844, 0.782, -65.619]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask245"
          position={[-133.326, 1.196, -60.041]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube491"
            castShadow
            receiveShadow
            geometry={nodes.Cube491.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube491_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube491_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3245"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3245.geometry}
          material={materials.Barra}
          position={[-132.766, 0.189, -59.984]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2245"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2245.geometry}
          material={materials.Barra}
          position={[-132.763, 0.189, -59.802]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1490"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1490.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -60.081]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1491"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1491.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -60.081]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube246"
          castShadow
          receiveShadow
          geometry={nodes.Cube246.geometry}
          material={materials.Plastico}
          position={[-133.329, 1.194, -60.708]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve245"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve245.geometry}
          material={materials["Material.014"]}
          position={[-133.844, 0.782, -60.045]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask246"
          position={[-133.326, 1.196, -56.293]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube493"
            castShadow
            receiveShadow
            geometry={nodes.Cube493.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube493_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube493_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3246"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3246.geometry}
          material={materials.Barra}
          position={[-132.766, 0.189, -56.236]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2246"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2246.geometry}
          material={materials.Barra}
          position={[-132.763, 0.189, -56.054]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1492"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1492.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -56.333]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1493"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1493.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -56.333]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube247"
          castShadow
          receiveShadow
          geometry={nodes.Cube247.geometry}
          material={materials.Plastico}
          position={[-133.329, 1.194, -56.961]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve246"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve246.geometry}
          material={materials["Material.014"]}
          position={[-133.844, 0.782, -56.298]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Table_dask247"
          position={[-133.326, 1.196, -53.098]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        >
          <mesh
            name="Cube495"
            castShadow
            receiveShadow
            geometry={nodes.Cube495.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube495_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube495_1.geometry}
            material={materials.Borde}
          />
        </group>
        <mesh
          name="support_pipe_3247"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_3247.geometry}
          material={materials.Barra}
          position={[-132.766, 0.189, -53.041]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Support_pipe_2247"
          castShadow
          receiveShadow
          geometry={nodes.Support_pipe_2247.geometry}
          material={materials.Barra}
          position={[-132.763, 0.189, -52.859]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="support_pipe_1494"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1494.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -53.137]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="support_pipe_1495"
          castShadow
          receiveShadow
          geometry={nodes.support_pipe_1495.geometry}
          material={materials.Barra}
          position={[-133.451, 0.986, -53.137]}
          rotation={[0, 0.013, 0]}
          scale={0.668}
        />
        <mesh
          name="Cube248"
          castShadow
          receiveShadow
          geometry={nodes.Cube248.geometry}
          material={materials.Plastico}
          position={[-133.329, 1.194, -53.765]}
          rotation={[0, 0.013, 0]}
          scale={1.011}
        />
        <mesh
          name="BezierCurve247"
          castShadow
          receiveShadow
          geometry={nodes.BezierCurve247.geometry}
          material={materials["Material.014"]}
          position={[-133.844, 0.782, -53.102]}
          rotation={[Math.PI, 1.558, 2.689]}
          scale={0.668}
        />
        <group
          name="Plastico"
          position={[-4.229, 2.148, -11.348]}
          rotation={[-Math.PI, 1.531, -Math.PI]}
          scale={[1.232, 0.452, 0.606]}
        >
          <mesh
            name="Plane113"
            castShadow
            receiveShadow
            geometry={nodes.Plane113.geometry}
            material={materials["Plastico.002"]}
          />
          <mesh
            name="Plane113_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane113_1.geometry}
            material={materials["Fierro.004"]}
          />
          <mesh
            name="Plane113_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane113_2.geometry}
            material={materials["Patas.001"]}
          />
        </group>
        <group
          name="Cube"
          position={[-1.032, 9.789, -18.688]}
          scale={[0.635, 0.635, 5.531]}
        >
          <mesh
            name="Cube_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube_1.geometry}
            material={materials.pantalla}
          />
          <mesh
            name="Cube_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube_2.geometry}
            material={materials.PLastico}
          />
          <mesh
            name="Cube_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube_3.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Cube_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube_4.geometry}
            material={materials["Borde.001"]}
          />
        </group>
        <group
          name="Cilindro"
          position={[-16.746, 13.834, -18.385]}
          rotation={[0, 0.07, 0]}
          scale={[0.169, 0.567, 0.111]}
        >
          <mesh
            name="Cilindro_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_1.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            name="Cilindro_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_2.geometry}
            material={materials.LentesPlasticos}
          />
          <mesh
            name="Cilindro_3"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_3.geometry}
            material={materials.Proyectora}
          />
          <mesh
            name="Cilindro_4"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_4.geometry}
            material={materials.Luz}
          />
          <mesh
            name="Cilindro_5"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_5.geometry}
            material={materials.EchufeEntrada}
          />
          <mesh
            name="Cilindro_6"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_6.geometry}
            material={materials["Rojo.001"]}
          />
          <mesh
            name="Cilindro_7"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_7.geometry}
            material={materials["Amarillo.001"]}
          />
          <mesh
            name="Cilindro_8"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro_8.geometry}
            material={materials.AzulEnchufe}
          />
        </group>
        <mesh
          name="Upright"
          castShadow
          receiveShadow
          geometry={nodes.Upright.geometry}
          material={nodes.Upright.material}
          position={[-12.415, 0.415, -29.926]}
          rotation={[0, 1.458, Math.PI / 2]}
          scale={0.015}
        />
        <mesh
          name="UnderHandle_UP"
          castShadow
          receiveShadow
          geometry={nodes.UnderHandle_UP.geometry}
          material={materials.BlackBack}
          position={[-12.409, 0.792, -29.98]}
          rotation={[Math.PI / 2, 0, 0.113]}
          scale={0.015}
        />
        <mesh
          name="UnderHandle_Down"
          castShadow
          receiveShadow
          geometry={nodes.UnderHandle_Down.geometry}
          material={materials.BlackBack}
          position={[-12.409, 0.049, -29.98]}
          rotation={[Math.PI / 2, 0, 0.113]}
          scale={0.015}
        />
        <mesh
          name="Middle_black"
          castShadow
          receiveShadow
          geometry={nodes.Middle_black.geometry}
          material={materials.BasureroBase}
          position={[-12.453, 0.898, -29.531]}
          rotation={[Math.PI / 2, 0, 0.113]}
          scale={0.015}
        />
        <mesh
          name="Middle_Bin"
          castShadow
          receiveShadow
          geometry={nodes.Middle_Bin.geometry}
          material={materials.BasureroCabeza}
          position={[-12.454, 0.901, -29.533]}
          rotation={[0.678, -0.088, 0.071]}
          scale={0.015}
        />
        <mesh
          name="Horizontally_Up"
          castShadow
          receiveShadow
          geometry={nodes.Horizontally_Up.geometry}
          material={nodes.Horizontally_Up.material}
          position={[-12.429, 0.706, -29.91]}
          rotation={[-Math.PI / 2, 0, 3.029]}
          scale={0.015}
        />
        <mesh
          name="Horizontally_Down"
          castShadow
          receiveShadow
          geometry={nodes.Horizontally_Down.geometry}
          material={materials.Down_RecycleBin}
          position={[-12.426, 0.158, -29.899]}
          rotation={[-Math.PI / 2, 0, 3.029]}
          scale={0.015}
        />
        <mesh
          name="Handle_UP"
          castShadow
          receiveShadow
          geometry={nodes.Handle_UP.geometry}
          material={materials.ReflectBack}
          position={[-12.409, 0.792, -29.98]}
          rotation={[Math.PI / 2, 0, 0.113]}
          scale={0.015}
        />
        <mesh
          name="Handle_DOWN"
          castShadow
          receiveShadow
          geometry={nodes.Handle_DOWN.geometry}
          material={materials.ReflectBack}
          position={[-12.409, 0.049, -29.98]}
          rotation={[Math.PI / 2, 0, 0.113]}
          scale={0.015}
        />
        <group
          name="Down_Bin"
          position={[-12.429, 0.109, -29.624]}
          rotation={[Math.PI / 2, 0, 0.113]}
          scale={0.015}
        >
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
          <mesh
            name="Mesh013_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh013_2.geometry}
            material={materials.BasureroCabeza}
          />
        </group>
        <mesh
          name="Water_Tube003"
          castShadow
          receiveShadow
          geometry={nodes.Water_Tube003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Water003"
          castShadow
          receiveShadow
          geometry={nodes.Water003.geometry}
          material={materials.Agua}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Valve003"
          castShadow
          receiveShadow
          geometry={nodes.Valve003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Tank_cover003"
          castShadow
          receiveShadow
          geometry={nodes.Tank_cover003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Tank003"
          castShadow
          receiveShadow
          geometry={nodes.Tank003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Sphere004"
          castShadow
          receiveShadow
          geometry={nodes.Sphere004.geometry}
          material={nodes.Sphere004.material}
          position={[-59.115, 1.819, 14.184]}
          rotation={[0, 1.547, 0]}
          scale={-0.115}
        />
        <mesh
          name="Shink004"
          castShadow
          receiveShadow
          geometry={nodes.Shink004.geometry}
          material={materials.PastillaUrinal}
          position={[-59.109, 1.859, 14.192]}
          rotation={[0, 1.547, 3.142]}
          scale={0.083}
        />
        <mesh
          name="Seat003"
          castShadow
          receiveShadow
          geometry={nodes.Seat003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Plane022"
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials.Baño}
          position={[-62.384, 2.38, 14.108]}
          rotation={[1.571, 0.002, -1.547]}
          scale={0.728}
        />
        <group
          name="Plane019"
          position={[-60.054, -0.691, 10.178]}
          rotation={[-0.012, 0.006, 0]}
          scale={2.402}
        >
          <mesh
            name="Plane115"
            castShadow
            receiveShadow
            geometry={nodes.Plane115.geometry}
            material={materials.Puerta}
          />
          <mesh
            name="Plane115_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane115_1.geometry}
            material={materials.Glossy}
          />
        </group>
        <mesh
          name="Lid003"
          castShadow
          receiveShadow
          geometry={nodes.Lid003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Hinges003"
          castShadow
          receiveShadow
          geometry={nodes.Hinges003.geometry}
          material={nodes.Hinges003.material}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Drainage_Tube003"
          castShadow
          receiveShadow
          geometry={nodes.Drainage_Tube003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <group
          name="Down_Bin002"
          position={[-58.132, -0.574, 11.945]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.026}
        >
          <mesh
            name="Mesh023"
            castShadow
            receiveShadow
            geometry={nodes.Mesh023.geometry}
            material={nodes.Mesh023.material}
          />
          <mesh
            name="Mesh023_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh023_1.geometry}
            material={materials["BasureroBase.001"]}
          />
          <mesh
            name="Mesh023_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh023_2.geometry}
            material={materials["BasureroCabeza.001"]}
          />
          <mesh
            name="Mesh023_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh023_3.geometry}
            material={materials["BlackBack.001"]}
          />
          <mesh
            name="Mesh023_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh023_4.geometry}
            material={materials["Down_RecycleBin.001"]}
          />
          <mesh
            name="Mesh023_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh023_5.geometry}
            material={materials["ReflectBack.001"]}
          />
        </group>
        <mesh
          name="Cylinder008"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder008.geometry}
          material={materials["Valve.001"]}
          position={[-58.972, 3.828, 14.213]}
          rotation={[0, 1.547, 0]}
          scale={0.066}
        />
        <mesh
          name="Bowl003"
          castShadow
          receiveShadow
          geometry={nodes.Bowl003.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Bolt_Caps003"
          castShadow
          receiveShadow
          geometry={nodes.Bolt_Caps003.geometry}
          material={nodes.Bolt_Caps003.material}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <group
          name="Plane009"
          position={[-64.937, -0.691, 10.178]}
          rotation={[-0.012, 0.006, 0]}
          scale={2.402}
        >
          <mesh
            name="Plane116"
            castShadow
            receiveShadow
            geometry={nodes.Plane116.geometry}
            material={materials.Puerta}
          />
          <mesh
            name="Plane116_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane116_1.geometry}
            material={materials.Glossy}
          />
        </group>
        <mesh
          name="Tank_cover001"
          castShadow
          receiveShadow
          geometry={nodes.Tank_cover001.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Tank001"
          castShadow
          receiveShadow
          geometry={nodes.Tank001.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Seat001"
          castShadow
          receiveShadow
          geometry={nodes.Seat001.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Lid001"
          castShadow
          receiveShadow
          geometry={nodes.Lid001.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Bowl001"
          castShadow
          receiveShadow
          geometry={nodes.Bowl001.geometry}
          material={materials.Baño}
          position={[-59.22, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Tank_cover002"
          castShadow
          receiveShadow
          geometry={nodes.Tank_cover002.geometry}
          material={materials.Baño}
          position={[-65.768, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Tank002"
          castShadow
          receiveShadow
          geometry={nodes.Tank002.geometry}
          material={materials.Baño}
          position={[-65.768, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Seat002"
          castShadow
          receiveShadow
          geometry={nodes.Seat002.geometry}
          material={materials.Baño}
          position={[-65.768, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Lid002"
          castShadow
          receiveShadow
          geometry={nodes.Lid002.geometry}
          material={materials.Baño}
          position={[-65.768, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Bowl002"
          castShadow
          receiveShadow
          geometry={nodes.Bowl002.geometry}
          material={materials.Baño}
          position={[-65.768, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Sphere001"
          castShadow
          receiveShadow
          geometry={nodes.Sphere001.geometry}
          material={nodes.Sphere001.material}
          position={[-59.115, 1.819, 17.077]}
          rotation={[0, 1.547, 0]}
          scale={-0.115}
        />
        <mesh
          name="Shink001"
          castShadow
          receiveShadow
          geometry={nodes.Shink001.geometry}
          material={materials.PastillaUrinal}
          position={[-59.109, 1.859, 17.085]}
          rotation={[0, 1.547, 3.142]}
          scale={0.083}
        />
        <mesh
          name="Plane010"
          castShadow
          receiveShadow
          geometry={nodes.Plane010.geometry}
          material={materials.Baño}
          position={[-62.384, 2.38, 17.001]}
          rotation={[1.571, 0.002, -1.547]}
          scale={0.728}
        />
        <mesh
          name="Cylinder009"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder009.geometry}
          material={materials["Valve.001"]}
          position={[-58.972, 3.828, 17.106]}
          rotation={[0, 1.547, 0]}
          scale={0.066}
        />
        <group
          name="Down_Bin001"
          position={[-69.008, -0.574, 12]}
          rotation={[Math.PI / 2, 0, 1.648]}
          scale={0.026}
        >
          <mesh
            name="Mesh001"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001.geometry}
            material={nodes.Mesh001.material}
          />
          <mesh
            name="Mesh001_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_1.geometry}
            material={materials["BasureroBase.001"]}
          />
          <mesh
            name="Mesh001_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_2.geometry}
            material={materials["BasureroCabeza.001"]}
          />
          <mesh
            name="Mesh001_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_3.geometry}
            material={materials["BlackBack.001"]}
          />
          <mesh
            name="Mesh001_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_4.geometry}
            material={materials["Down_RecycleBin.001"]}
          />
          <mesh
            name="Mesh001_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh001_5.geometry}
            material={materials["ReflectBack.001"]}
          />
        </group>
        <group
          name="Down_Bin003"
          position={[-79.039, -0.574, 12]}
          rotation={[Math.PI / 2, 0, -1.53]}
          scale={0.026}
        >
          <mesh
            name="Mesh002"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002.geometry}
            material={nodes.Mesh002.material}
          />
          <mesh
            name="Mesh002_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_1.geometry}
            material={materials["BasureroBase.001"]}
          />
          <mesh
            name="Mesh002_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_2.geometry}
            material={materials["BasureroCabeza.001"]}
          />
          <mesh
            name="Mesh002_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_3.geometry}
            material={materials["BlackBack.001"]}
          />
          <mesh
            name="Mesh002_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_4.geometry}
            material={materials["Down_RecycleBin.001"]}
          />
          <mesh
            name="Mesh002_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh002_5.geometry}
            material={materials["ReflectBack.001"]}
          />
        </group>
        <group
          name="Down_Bin004"
          position={[-79.039, -0.574, 12]}
          rotation={[Math.PI / 2, 0, -1.53]}
          scale={0.026}
        >
          <mesh
            name="Mesh003"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003.geometry}
            material={nodes.Mesh003.material}
          />
          <mesh
            name="Mesh003_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_1.geometry}
            material={materials["BasureroBase.001"]}
          />
          <mesh
            name="Mesh003_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_2.geometry}
            material={materials["BasureroCabeza.001"]}
          />
          <mesh
            name="Mesh003_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_3.geometry}
            material={materials["BlackBack.001"]}
          />
          <mesh
            name="Mesh003_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_4.geometry}
            material={materials["Down_RecycleBin.001"]}
          />
          <mesh
            name="Mesh003_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh003_5.geometry}
            material={materials["ReflectBack.001"]}
          />
        </group>
        <group
          name="Down_Bin005"
          position={[-91.271, 0.16, 19.769]}
          rotation={[Math.PI / 2, 0, -3.103]}
          scale={0.026}
        >
          <mesh
            name="Mesh004"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004.geometry}
            material={nodes.Mesh004.material}
          />
          <mesh
            name="Mesh004_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_1.geometry}
            material={materials["BasureroBase.001"]}
          />
          <mesh
            name="Mesh004_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_2.geometry}
            material={materials["BasureroCabeza.001"]}
          />
          <mesh
            name="Mesh004_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_3.geometry}
            material={materials["BlackBack.001"]}
          />
          <mesh
            name="Mesh004_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_4.geometry}
            material={materials["Down_RecycleBin.001"]}
          />
          <mesh
            name="Mesh004_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh004_5.geometry}
            material={materials["ReflectBack.001"]}
          />
        </group>
        <mesh
          name="Valve001"
          castShadow
          receiveShadow
          geometry={nodes.Valve001.geometry}
          material={materials.Baño}
          position={[-83.892, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Tank_cover004"
          castShadow
          receiveShadow
          geometry={nodes.Tank_cover004.geometry}
          material={materials.Baño}
          position={[-83.892, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Shink002"
          castShadow
          receiveShadow
          geometry={nodes.Shink002.geometry}
          material={materials.PastillaUrinal}
          position={[-91.22, 1.859, 17.061]}
          rotation={[-Math.PI, -1.565, 0]}
          scale={0.083}
        />
        <mesh
          name="Seat004"
          castShadow
          receiveShadow
          geometry={nodes.Seat004.geometry}
          material={materials.Baño}
          position={[-83.892, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Plane011"
          castShadow
          receiveShadow
          geometry={nodes.Plane011.geometry}
          material={materials.Baño}
          position={[-87.945, 2.38, 17.088]}
          rotation={[1.571, -0.002, 1.577]}
          scale={0.728}
        />
        <group
          name="Plane012"
          position={[-84.726, -0.691, 10.178]}
          rotation={[-0.012, 0.006, 0]}
          scale={2.402}
        >
          <mesh
            name="Plane119"
            castShadow
            receiveShadow
            geometry={nodes.Plane119.geometry}
            material={materials.Puerta}
          />
          <mesh
            name="Plane119_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane119_1.geometry}
            material={materials.Glossy}
          />
        </group>
        <mesh
          name="Lid004"
          castShadow
          receiveShadow
          geometry={nodes.Lid004.geometry}
          material={materials.Baño}
          position={[-83.892, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Drainage_Tube001"
          castShadow
          receiveShadow
          geometry={nodes.Drainage_Tube001.geometry}
          material={materials.Baño}
          position={[-83.892, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Cylinder010"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010.geometry}
          material={materials["Valve.001"]}
          position={[-91.358, 3.828, 17.043]}
          rotation={[Math.PI, -1.565, Math.PI]}
          scale={0.066}
        />
        <group
          name="Plane013"
          position={[-89.609, -0.691, 10.178]}
          rotation={[-0.012, 0.006, 0]}
          scale={2.402}
        >
          <mesh
            name="Plane120"
            castShadow
            receiveShadow
            geometry={nodes.Plane120.geometry}
            material={materials.Puerta}
          />
          <mesh
            name="Plane120_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane120_1.geometry}
            material={materials.Glossy}
          />
        </group>
        <mesh
          name="Tank004"
          castShadow
          receiveShadow
          geometry={nodes.Tank004.geometry}
          material={materials.Baño}
          position={[-83.892, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Bowl004"
          castShadow
          receiveShadow
          geometry={nodes.Bowl004.geometry}
          material={materials.Baño}
          position={[-83.892, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, 1.517]}
          scale={0.023}
        />
        <mesh
          name="Tank_cover005"
          castShadow
          receiveShadow
          geometry={nodes.Tank_cover005.geometry}
          material={materials.Baño}
          position={[-90.44, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Tank005"
          castShadow
          receiveShadow
          geometry={nodes.Tank005.geometry}
          material={materials.Baño}
          position={[-90.44, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Lid005"
          castShadow
          receiveShadow
          geometry={nodes.Lid005.geometry}
          material={materials.Baño}
          position={[-90.44, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Bowl005"
          castShadow
          receiveShadow
          geometry={nodes.Bowl005.geometry}
          material={materials.Baño}
          position={[-90.44, 0.617, 7.28]}
          rotation={[Math.PI / 2, 0, -1.587]}
          scale={0.023}
        />
        <mesh
          name="Shink003"
          castShadow
          receiveShadow
          geometry={nodes.Shink003.geometry}
          material={materials.PastillaUrinal}
          position={[-91.271, 1.859, 14.169]}
          rotation={[-Math.PI, -1.565, 0]}
          scale={0.083}
        />
        <mesh
          name="Plane014"
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials.Baño}
          position={[-87.995, 2.38, 14.196]}
          rotation={[1.571, -0.002, 1.577]}
          scale={0.728}
        />
        <mesh
          name="Cylinder011"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder011.geometry}
          material={materials["Valve.001"]}
          position={[-91.408, 3.828, 14.15]}
          rotation={[Math.PI, -1.565, Math.PI]}
          scale={0.066}
        />
        <group
          name="Cabinet1001"
          position={[-60.759, 0.265, 19.716]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[5.247, 1.639, 1.639]}
        >
          <mesh
            name="Cabinet1003"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1003.geometry}
            material={materials["Mesa.001"]}
          />
          <mesh
            name="Cabinet1003_1"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1003_1.geometry}
            material={materials["Color M00"]}
          />
          <mesh
            name="Cabinet1003_2"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1003_2.geometry}
            material={materials["Vidrio.001"]}
          />
          <mesh
            name="Cabinet1003_3"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1003_3.geometry}
            material={materials.Marco}
          />
          <mesh
            name="Cabinet1003_4"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1003_4.geometry}
            material={materials.Valve}
          />
        </group>
        <group
          name="Cabinet1002"
          position={[-82.95, 0.265, 19.716]}
          rotation={[Math.PI, -0.001, Math.PI]}
          scale={[5.247, 1.639, 1.639]}
        >
          <mesh
            name="Cabinet1001_1"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1001_1.geometry}
            material={materials["Mesa.001"]}
          />
          <mesh
            name="Cabinet1001_2"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1001_2.geometry}
            material={materials["Color M00"]}
          />
          <mesh
            name="Cabinet1001_3"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1001_3.geometry}
            material={materials["Vidrio.001"]}
          />
          <mesh
            name="Cabinet1001_4"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1001_4.geometry}
            material={materials.Marco}
          />
          <mesh
            name="Cabinet1001_5"
            castShadow
            receiveShadow
            geometry={nodes.Cabinet1001_5.geometry}
            material={materials.Valve}
          />
        </group>
        <group
          name="Focos004"
          position={[126.938, 14.13, -23.551]}
          rotation={[Math.PI / 2, 0, 3.113]}
          scale={[-0.066, -1.268, -0.066]}
        >
          <mesh
            name="Cilindro005"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro005.geometry}
            material={materials["Plastico.001"]}
          />
          <mesh
            name="Cilindro005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro005_1.geometry}
            material={materials.Vidrio}
          />
          <mesh
            name="Cilindro005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro005_2.geometry}
            material={materials.Goma}
          />
        </group>
        <group
          name="ventilador_cafeteria004"
          position={[123.822, 14.372, -21.622]}
          rotation={[Math.PI / 2, 0, -1.658]}
          scale={[3.1, 3.485, 2.455]}
        >
          <mesh
            name="Black_Metallic_Ceiling_Fan004"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan004.geometry}
            material={materials.aspa1}
          />
          <mesh
            name="Black_Metallic_Ceiling_Fan004_1"
            castShadow
            receiveShadow
            geometry={nodes.Black_Metallic_Ceiling_Fan004_1.geometry}
            material={nodes.Black_Metallic_Ceiling_Fan004_1.material}
          />
        </group>
        <group
          name="Cube249"
          position={[135.875, 2.569, -13.903]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube497"
            castShadow
            receiveShadow
            geometry={nodes.Cube497.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube497_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube497_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube497_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube497_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube497_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube497_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube497_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube497_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube250"
          position={[111.78, 9.789, -22.703]}
          scale={[0.65, 0.65, 5.66]}
        >
          <mesh
            name="Cube498"
            castShadow
            receiveShadow
            geometry={nodes.Cube498.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Cube498_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube498_1.geometry}
            material={materials["Borde.001"]}
          />
        </group>
        <group
          name="Cilindro001"
          position={[120.743, 13.834, -18.385]}
          rotation={[0, 0.07, 0]}
          scale={[0.169, 0.567, 0.111]}
        >
          <mesh
            name="Cilindro010"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010.geometry}
            material={materials["Material.016"]}
          />
          <mesh
            name="Cilindro010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_1.geometry}
            material={materials.LentesPlasticos}
          />
          <mesh
            name="Cilindro010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_2.geometry}
            material={materials.Proyectora}
          />
          <mesh
            name="Cilindro010_3"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_3.geometry}
            material={materials.Luz}
          />
          <mesh
            name="Cilindro010_4"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_4.geometry}
            material={materials.EchufeEntrada}
          />
          <mesh
            name="Cilindro010_5"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_5.geometry}
            material={materials["Rojo.001"]}
          />
          <mesh
            name="Cilindro010_6"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_6.geometry}
            material={materials["Amarillo.001"]}
          />
          <mesh
            name="Cilindro010_7"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro010_7.geometry}
            material={materials.AzulEnchufe}
          />
        </group>
        <group
          name="Down_Bin006"
          position={[125.06, 0.109, -29.624]}
          rotation={[Math.PI / 2, 0, 0.113]}
          scale={0.015}
        >
          <mesh
            name="Mesh016"
            castShadow
            receiveShadow
            geometry={nodes.Mesh016.geometry}
            material={nodes.Mesh016.material}
          />
          <mesh
            name="Mesh016_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh016_1.geometry}
            material={materials.BasureroBase}
          />
          <mesh
            name="Mesh016_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh016_2.geometry}
            material={materials.BasureroCabeza}
          />
        </group>
        <group
          name="Plastico002"
          position={[115.065, 2.735, -14.068]}
          rotation={[Math.PI, -1.553, Math.PI]}
          scale={[2.219, 0.814, 1.091]}
        >
          <mesh
            name="Plane123"
            castShadow
            receiveShadow
            geometry={nodes.Plane123.geometry}
            material={materials["Plastico.002"]}
          />
          <mesh
            name="Plane123_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane123_1.geometry}
            material={materials["Fierro.004"]}
          />
          <mesh
            name="Plane123_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane123_2.geometry}
            material={materials["Patas.001"]}
          />
        </group>
        <group
          name="Cube251"
          position={[111.78, 9.789, -34.757]}
          scale={[0.65, 0.65, 5.66]}
        >
          <mesh
            name="Cube500"
            castShadow
            receiveShadow
            geometry={nodes.Cube500.geometry}
            material={materials["Material.015"]}
          />
          <mesh
            name="Cube500_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube500_1.geometry}
            material={materials["Borde.001"]}
          />
        </group>
        <group
          name="Cube252"
          position={[133.134, 2.569, -13.903]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube501"
            castShadow
            receiveShadow
            geometry={nodes.Cube501.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube501_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube501_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube501_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube501_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube501_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube501_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube501_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube501_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube253"
          position={[130.446, 2.569, -13.903]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube502"
            castShadow
            receiveShadow
            geometry={nodes.Cube502.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube502_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube502_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube502_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube502_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube502_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube502_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube502_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube502_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube254"
          position={[127.761, 2.569, -13.903]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube503"
            castShadow
            receiveShadow
            geometry={nodes.Cube503.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube503_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube503_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube503_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube503_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube503_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube503_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube503_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube503_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube255"
          position={[125.117, 2.569, -13.903]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube504"
            castShadow
            receiveShadow
            geometry={nodes.Cube504.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube504_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube504_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube504_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube504_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube504_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube504_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube504_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube504_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube257"
          position={[135.875, 2.569, -19.546]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube506"
            castShadow
            receiveShadow
            geometry={nodes.Cube506.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube506_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube506_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube506_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube506_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube506_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube506_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube506_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube506_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube258"
          position={[133.134, 2.569, -19.546]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube507"
            castShadow
            receiveShadow
            geometry={nodes.Cube507.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube507_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube507_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube507_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube507_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube507_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube507_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube507_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube507_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube259"
          position={[130.446, 2.569, -19.546]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube508"
            castShadow
            receiveShadow
            geometry={nodes.Cube508.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube508_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube508_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube508_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube508_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube508_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube508_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube508_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube508_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube260"
          position={[127.761, 2.569, -19.546]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube509"
            castShadow
            receiveShadow
            geometry={nodes.Cube509.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube509_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube509_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube509_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube509_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube509_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube509_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube509_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube509_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube261"
          position={[125.117, 2.569, -19.546]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube510"
            castShadow
            receiveShadow
            geometry={nodes.Cube510.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube510_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube510_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube510_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube510_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube510_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube510_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube510_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube510_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube263"
          position={[135.875, 2.569, -25.528]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube512"
            castShadow
            receiveShadow
            geometry={nodes.Cube512.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube512_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube512_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube512_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube512_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube512_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube512_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube512_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube512_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube264"
          position={[133.134, 2.569, -25.528]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube513"
            castShadow
            receiveShadow
            geometry={nodes.Cube513.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube513_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube513_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube513_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube513_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube513_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube513_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube513_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube513_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube265"
          position={[130.446, 2.569, -25.528]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube514"
            castShadow
            receiveShadow
            geometry={nodes.Cube514.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube514_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube514_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube514_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube514_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube514_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube514_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube514_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube514_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube266"
          position={[127.761, 2.569, -25.528]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube515"
            castShadow
            receiveShadow
            geometry={nodes.Cube515.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube515_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube515_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube515_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube515_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube515_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube515_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube515_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube515_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube267"
          position={[125.117, 2.569, -25.528]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube516"
            castShadow
            receiveShadow
            geometry={nodes.Cube516.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube516_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube516_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube516_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube516_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube516_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube516_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube516_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube516_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube269"
          position={[135.875, 2.569, -31.195]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube518"
            castShadow
            receiveShadow
            geometry={nodes.Cube518.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube518_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube518_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube518_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube518_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube518_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube518_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube518_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube518_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube270"
          position={[133.134, 2.569, -31.195]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube519"
            castShadow
            receiveShadow
            geometry={nodes.Cube519.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube519_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube519_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube519_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube519_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube519_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube519_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube519_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube519_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube271"
          position={[130.446, 2.569, -31.195]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube520"
            castShadow
            receiveShadow
            geometry={nodes.Cube520.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube520_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube520_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube520_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube520_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube520_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube520_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube520_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube520_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube272"
          position={[127.761, 2.569, -31.195]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube521"
            castShadow
            receiveShadow
            geometry={nodes.Cube521.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube521_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube521_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube521_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube521_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube521_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube521_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube521_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube521_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube273"
          position={[125.117, 2.569, -31.195]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube522"
            castShadow
            receiveShadow
            geometry={nodes.Cube522.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube522_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube522_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube522_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube522_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube522_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube522_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube522_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube522_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube275"
          position={[135.875, 2.569, -36.932]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube524"
            castShadow
            receiveShadow
            geometry={nodes.Cube524.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube524_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube524_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube524_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube524_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube524_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube524_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube524_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube524_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube276"
          position={[133.134, 2.569, -36.932]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube525"
            castShadow
            receiveShadow
            geometry={nodes.Cube525.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube525_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube525_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube525_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube525_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube525_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube525_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube525_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube525_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube277"
          position={[130.446, 2.569, -36.932]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube526"
            castShadow
            receiveShadow
            geometry={nodes.Cube526.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube526_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube526_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube526_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube526_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube526_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube526_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube526_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube526_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube278"
          position={[127.761, 2.569, -36.932]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube527"
            castShadow
            receiveShadow
            geometry={nodes.Cube527.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube527_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube527_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube527_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube527_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube527_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube527_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube527_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube527_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube279"
          position={[125.117, 2.569, -36.932]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube528"
            castShadow
            receiveShadow
            geometry={nodes.Cube528.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube528_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube528_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube528_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube528_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube528_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube528_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube528_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube528_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube281"
          position={[135.875, 2.569, -42.724]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube530"
            castShadow
            receiveShadow
            geometry={nodes.Cube530.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube530_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube530_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube530_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube530_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube530_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube530_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube530_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube530_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube282"
          position={[133.134, 2.569, -42.724]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube531"
            castShadow
            receiveShadow
            geometry={nodes.Cube531.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube531_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube531_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube531_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube531_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube531_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube531_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube531_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube531_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube283"
          position={[130.446, 2.569, -42.724]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube532"
            castShadow
            receiveShadow
            geometry={nodes.Cube532.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube532_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube532_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube532_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube532_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube532_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube532_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube532_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube532_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube284"
          position={[127.761, 2.569, -42.724]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube533"
            castShadow
            receiveShadow
            geometry={nodes.Cube533.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube533_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube533_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube533_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube533_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube533_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube533_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube533_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube533_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="Cube285"
          position={[125.117, 2.569, -42.724]}
          rotation={[0, -1.548, 0]}
          scale={2.215}
        >
          <mesh
            name="Cube534"
            castShadow
            receiveShadow
            geometry={nodes.Cube534.geometry}
            material={materials.Plastico}
          />
          <mesh
            name="Cube534_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube534_1.geometry}
            material={materials.Mesita}
          />
          <mesh
            name="Cube534_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube534_2.geometry}
            material={materials.Borde}
          />
          <mesh
            name="Cube534_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube534_3.geometry}
            material={materials.Barra}
          />
          <mesh
            name="Cube534_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube534_4.geometry}
            material={materials["Material.014"]}
          />
        </group>
        <group
          name="support_pipe_1070"
          position={[-0.172, 33.213, 75.201]}
          rotation={[-3.098, 0.21, 0.001]}
          scale={[0.835, 0.466, 0.466]}
        >
          <mesh
            name="BezierCurve175_1"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve175_1.geometry}
            material={materials.Patas_Mesas1}
          />
          <mesh
            name="BezierCurve175_2"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve175_2.geometry}
            material={materials.MesaGrande}
          />
        </group>
        <group
          name="support_pipe_1071"
          position={[-11.772, 33.077, 77.547]}
          rotation={[-3.135, 0.248, 0.015]}
          scale={[0.989, 0.552, 0.552]}
        >
          <mesh
            name="BezierCurve176_1"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve176_1.geometry}
            material={materials.Patas_Mesas1}
          />
          <mesh
            name="BezierCurve176_2"
            castShadow
            receiveShadow
            geometry={nodes.BezierCurve176_2.geometry}
            material={materials.MesaGrande}
          />
        </group>
        <group
          name="Cylinder012"
          position={[2.965, 33.08, 70.67]}
          rotation={[0, -0.244, 0]}
          scale={0.073}
        >
          <mesh
            name="Cylinder028"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028.geometry}
            material={materials.Maseta}
          />
          <mesh
            name="Cylinder028_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_1.geometry}
            material={materials.Tierra_Maseta}
          />
          <mesh
            name="Cylinder028_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_2.geometry}
            material={materials.Hojas}
          />
          <mesh
            name="Cylinder028_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder028_3.geometry}
            material={materials.Tallos}
          />
        </group>
        <group
          name="Cylinder013"
          position={[-18.81, 32.992, 76.496]}
          rotation={[0, -0.244, 0]}
          scale={0.073}
        >
          <mesh
            name="Cylinder029"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029.geometry}
            material={materials.Maseta}
          />
          <mesh
            name="Cylinder029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_1.geometry}
            material={materials.Tierra_Maseta}
          />
          <mesh
            name="Cylinder029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_2.geometry}
            material={materials.Hojas}
          />
          <mesh
            name="Cylinder029_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder029_3.geometry}
            material={materials.Tallos}
          />
        </group>
        <group
          name="Cylinder014"
          position={[0.825, 33.607, 88.087]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={0.609}
        >
          <mesh
            name="Cylinder030"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030.geometry}
            material={materials.Maseta}
          />
          <mesh
            name="Cylinder030_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_1.geometry}
            material={materials.Tallos}
          />
          <mesh
            name="Cylinder030_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_2.geometry}
            material={materials.Hojas}
          />
          <mesh
            name="Cylinder030_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder030_3.geometry}
            material={materials.tIERRA_mASETA2}
          />
        </group>
        <mesh
          name="Cube256"
          castShadow
          receiveShadow
          geometry={nodes.Cube256.geometry}
          material={materials.Sillon}
          position={[3.819, 33.875, 76.093]}
          rotation={[0, 1.338, 0]}
          scale={[3.505, 0.576, 0.195]}
        />
        <mesh
          name="Cube262"
          castShadow
          receiveShadow
          geometry={nodes.Cube262.geometry}
          material={materials.Sillon}
          position={[-1.234, 34.278, 68.774]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={[3.365, 0.98, 0.677]}
        />
        <mesh
          name="Circle007"
          castShadow
          receiveShadow
          geometry={nodes.Circle007.geometry}
          material={materials.Toco1}
          position={[-9.544, 32.96, 80.19]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={0.97}
        />
        <mesh
          name="Circle006"
          castShadow
          receiveShadow
          geometry={nodes.Circle006.geometry}
          material={materials.Toco1}
          position={[-10.305, 32.976, 76.051]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={0.97}
        />
        <group
          name="Circle005"
          position={[-13.216, 33.028, 69.183]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={2.685}
        >
          <mesh
            name="Circle007_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_1.geometry}
            material={materials.Mesa_Mesa}
          />
          <mesh
            name="Circle007_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle007_2.geometry}
            material={materials.MesaGrande}
          />
        </group>
        <mesh
          name="Circle004"
          castShadow
          receiveShadow
          geometry={nodes.Circle004.geometry}
          material={materials.Toco1}
          position={[-12.919, 33.036, 75.807]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={0.97}
        />
        <group
          name="Circle003"
          position={[-14.077, 32.993, 79.139]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={0.97}
        >
          <mesh
            name="Circle008_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle008_1.geometry}
            material={materials.Toco1}
          />
          <mesh
            name="Circle008_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle008_2.geometry}
            material={materials.Toco2}
          />
        </group>
        <group
          name="Circle002"
          position={[-12.016, 33.026, 81.184]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={0.97}
        >
          <mesh
            name="Circle009_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle009_1.geometry}
            material={materials.Toco1}
          />
          <mesh
            name="Circle009_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle009_2.geometry}
            material={materials.Toco2}
          />
        </group>
        <mesh
          name="Circle001"
          castShadow
          receiveShadow
          geometry={nodes.Circle001.geometry}
          material={materials.Toco1}
          position={[-9.373, 32.971, 77.9]}
          rotation={[-Math.PI, 0.244, -Math.PI]}
          scale={0.97}
        />
        <group
          name="Upright001"
          position={[8.988, 33.531, 81.8]}
          rotation={[-Math.PI, -1.481, -Math.PI / 2]}
          scale={0.017}
        >
          <mesh
            name="Mesh012"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012.geometry}
            material={nodes.Mesh012.material}
          />
          <mesh
            name="Mesh012_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_1.geometry}
            material={materials["BasureroCabeza.002"]}
          />
          <mesh
            name="Mesh012_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_2.geometry}
            material={materials["BlackBack.002"]}
          />
          <mesh
            name="Mesh012_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_3.geometry}
            material={materials["BasureroBase.002"]}
          />
          <mesh
            name="Mesh012_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_4.geometry}
            material={materials["Down_RecycleBin.002"]}
          />
          <mesh
            name="Mesh012_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh012_5.geometry}
            material={materials["ReflectBack.002"]}
          />
        </group>
        <mesh
          name="Sphere003"
          castShadow
          receiveShadow
          geometry={nodes.Sphere003.geometry}
          material={nodes.Sphere003.material}
          position={[7.894, 34.666, 81.557]}
          rotation={[0, -0.051, 0]}
          scale={-0.075}
        />
        <mesh
          name="Sphere"
          castShadow
          receiveShadow
          geometry={nodes.Sphere.geometry}
          material={nodes.Sphere.material}
          position={[6.781, 34.666, 80.802]}
          rotation={[Math.PI, -1.497, Math.PI]}
          scale={-0.075}
        />
        <mesh
          name="Shink005"
          castShadow
          receiveShadow
          geometry={nodes.Shink005.geometry}
          material={materials["PastillaUrinal.001"]}
          position={[7.889, 34.692, 81.561]}
          rotation={[0, -0.051, 3.142]}
          scale={0.054}
        />
        <mesh
          name="Shink"
          castShadow
          receiveShadow
          geometry={nodes.Shink.geometry}
          material={materials["PastillaUrinal.001"]}
          position={[6.778, 34.692, 80.797]}
          rotation={[-Math.PI, -1.497, 0]}
          scale={0.054}
        />
        <group
          name="Seat005"
          position={[8.947, 33.907, 69.893]}
          rotation={[Math.PI / 2, 0, -1.381]}
          scale={0.02}
        >
          <mesh
            name="Seat005_1"
            castShadow
            receiveShadow
            geometry={nodes.Seat005_1.geometry}
            material={materials["Baño.001"]}
          />
          <mesh
            name="Seat005_2"
            castShadow
            receiveShadow
            geometry={nodes.Seat005_2.geometry}
            material={materials["Agua.001"]}
          />
        </group>
        <group
          name="Plane017"
          position={[14.033, 33.008, 73.587]}
          rotation={[0.003, -0.202, -0.017]}
          scale={1.559}
        >
          <mesh
            name="Plane122"
            castShadow
            receiveShadow
            geometry={nodes.Plane122.geometry}
            material={materials["Puerta.001"]}
          />
          <mesh
            name="Plane122_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane122_1.geometry}
            material={materials["Glossy.001"]}
          />
          <mesh
            name="Plane122_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane122_2.geometry}
            material={materials.Door}
          />
        </group>
        <mesh
          name="Plane016"
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials["Baño.001"]}
          position={[9.196, 34.956, 77.155]}
          rotation={[1.571, -0.002, 1.768]}
          scale={0.547}
        />
        <mesh
          name="Plane018"
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials["Baño.001"]}
          position={[8.91, 34.956, 78.653]}
          rotation={[1.571, -0.002, 1.768]}
          scale={0.547}
        />
        <group
          name="Lid"
          position={[17.251, 33.907, 71.553]}
          rotation={[Math.PI / 2, 0, 1.743]}
          scale={0.02}
        >
          <mesh
            name="Lid_1"
            castShadow
            receiveShadow
            geometry={nodes.Lid_1.geometry}
            material={materials["Baño.001"]}
          />
          <mesh
            name="Lid_2"
            castShadow
            receiveShadow
            geometry={nodes.Lid_2.geometry}
            material={materials["Agua.001"]}
          />
        </group>
        <group
          name="Horizontally_Up001"
          position={[18.219, 34.155, 72.997]}
          rotation={[-1.552, -0.075, 1.25]}
          scale={0.023}
        >
          <mesh
            name="Mesh017"
            castShadow
            receiveShadow
            geometry={nodes.Mesh017.geometry}
            material={nodes.Mesh017.material}
          />
          <mesh
            name="Mesh017_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_1.geometry}
            material={materials["BasureroCabeza.002"]}
          />
          <mesh
            name="Mesh017_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_2.geometry}
            material={materials["BlackBack.002"]}
          />
          <mesh
            name="Mesh017_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_3.geometry}
            material={materials["BasureroBase.002"]}
          />
          <mesh
            name="Mesh017_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_4.geometry}
            material={materials["Down_RecycleBin.002"]}
          />
          <mesh
            name="Mesh017_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh017_5.geometry}
            material={materials["ReflectBack.002"]}
          />
        </group>
        <mesh
          name="Cylinder016"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder016.geometry}
          material={materials["Valve.002"]}
          position={[6.685, 36.045, 76.633]}
          rotation={[Math.PI, -1.373, Math.PI]}
          scale={0.05}
        />
        <mesh
          name="Cylinder017"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder017.geometry}
          material={materials["Valve.002"]}
          position={[6.399, 36.045, 78.13]}
          rotation={[Math.PI, -1.373, Math.PI]}
          scale={0.05}
        />
        <group
          name="Cylinder018"
          position={[15.418, 35.024, 84.071]}
          rotation={[-1.577, -0.031, 1.361]}
          scale={[0.043, 0.161, 0.043]}
        >
          <mesh
            name="Cylinder038"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038.geometry}
            material={materials["Valve.003"]}
          />
          <mesh
            name="Cylinder038_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_1.geometry}
            material={materials["Color M00.001"]}
          />
          <mesh
            name="Cylinder038_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_2.geometry}
            material={materials["Vidrio.002"]}
          />
          <mesh
            name="Cylinder038_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_3.geometry}
            material={materials["Marco.001"]}
          />
          <mesh
            name="Cylinder038_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder038_4.geometry}
            material={materials["Mesa.003"]}
          />
        </group>
        <mesh
          name="Cylinder019"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder019.geometry}
          material={materials["Valve.002"]}
          position={[6.689, 35.971, 80.779]}
          rotation={[Math.PI, -1.497, Math.PI]}
          scale={0.043}
        />
        <group
          name="Circle008"
          position={[10.916, 34.696, 72.915]}
          scale={3.854}
        >
          <mesh
            name="Circle011_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle011_1.geometry}
            material={materials["Puerta.001"]}
          />
          <mesh
            name="Circle011_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle011_2.geometry}
            material={materials["Glossy.001"]}
          />
          <mesh
            name="Circle011_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle011_3.geometry}
            material={materials.Door}
          />
        </group>
        <group
          name="Circle"
          position={[12.016, 37.729, 77.79]}
          rotation={[-1.745, -1.231, 1.418]}
          scale={1.065}
        >
          <mesh
            name="Circle012"
            castShadow
            receiveShadow
            geometry={nodes.Circle012.geometry}
            material={materials["Baño.001"]}
          />
          <mesh
            name="Circle012_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle012_1.geometry}
            material={materials.Papelera}
          />
          <mesh
            name="Circle012_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle012_2.geometry}
            material={materials.Papel}
          />
        </group>
        <group
          name="Upright002"
          position={[-29.008, 33.318, 64.252]}
          rotation={[-Math.PI, -0.122, -Math.PI / 2]}
          scale={0.011}
        >
          <mesh
            name="Mesh018"
            castShadow
            receiveShadow
            geometry={nodes.Mesh018.geometry}
            material={nodes.Mesh018.material}
          />
          <mesh
            name="Mesh018_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_1.geometry}
            material={materials["BasureroCabeza.002"]}
          />
          <mesh
            name="Mesh018_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_2.geometry}
            material={materials["BlackBack.002"]}
          />
          <mesh
            name="Mesh018_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_3.geometry}
            material={materials["BasureroBase.002"]}
          />
          <mesh
            name="Mesh018_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_4.geometry}
            material={materials["Down_RecycleBin.002"]}
          />
          <mesh
            name="Mesh018_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh018_5.geometry}
            material={materials["ReflectBack.002"]}
          />
        </group>
        <group
          name="Seat006"
          position={[-21.565, 33.869, 64.372]}
          rotation={[Math.PI / 2, 0, 1.807]}
          scale={0.016}
        >
          <mesh
            name="Seat006_1"
            castShadow
            receiveShadow
            geometry={nodes.Seat006_1.geometry}
            material={materials["Baño.001"]}
          />
          <mesh
            name="Seat006_2"
            castShadow
            receiveShadow
            geometry={nodes.Seat006_2.geometry}
            material={materials["Agua.001"]}
          />
        </group>
        <group
          name="Plane021"
          position={[-27.611, 33.204, 68.032]}
          rotation={[3.14, 0.301, -3.141]}
          scale={1.507}
        >
          <mesh
            name="Plane128"
            castShadow
            receiveShadow
            geometry={nodes.Plane128.geometry}
            material={materials["Puerta.001"]}
          />
          <mesh
            name="Plane128_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane128_1.geometry}
            material={materials["Glossy.001"]}
          />
          <mesh
            name="Plane128_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane128_2.geometry}
            material={materials.Door}
          />
        </group>
        <group
          name="Lid006"
          position={[-28.291, 33.938, 62.994]}
          rotation={[Math.PI / 2, 0, -1.337]}
          scale={0.015}
        >
          <mesh
            name="Lid006_1"
            castShadow
            receiveShadow
            geometry={nodes.Lid006_1.geometry}
            material={materials["Baño.001"]}
          />
          <mesh
            name="Lid006_2"
            castShadow
            receiveShadow
            geometry={nodes.Lid006_2.geometry}
            material={materials["Agua.001"]}
          />
        </group>
        <group
          name="Horizontally_Up002"
          position={[-24.913, 33.597, 75.788]}
          rotation={[-Math.PI / 2, 0, 1.533]}
          scale={0.011}
        >
          <mesh
            name="Mesh019"
            castShadow
            receiveShadow
            geometry={nodes.Mesh019.geometry}
            material={nodes.Mesh019.material}
          />
          <mesh
            name="Mesh019_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_1.geometry}
            material={materials["BasureroCabeza.002"]}
          />
          <mesh
            name="Mesh019_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_2.geometry}
            material={materials["BlackBack.002"]}
          />
          <mesh
            name="Mesh019_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_3.geometry}
            material={materials["BasureroBase.002"]}
          />
          <mesh
            name="Mesh019_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_4.geometry}
            material={materials["Down_RecycleBin.002"]}
          />
          <mesh
            name="Mesh019_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh019_5.geometry}
            material={materials["ReflectBack.002"]}
          />
        </group>
        <mesh
          name="Flush_Button002"
          castShadow
          receiveShadow
          geometry={nodes.Flush_Button002.geometry}
          material={nodes.Flush_Button002.material}
          position={[-29.272, 36.442, 76.665]}
          rotation={[Math.PI / 2, 0, -1.26]}
          scale={0.006}
        />
        <group
          name="Cylinder023"
          position={[-31.483, 34.766, 73.326]}
          rotation={[-1.569, 0.032, -1.634]}
          scale={[0.041, 0.151, 0.041]}
        >
          <mesh
            name="Cylinder047"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047.geometry}
            material={materials["Valve.003"]}
          />
          <mesh
            name="Cylinder047_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_1.geometry}
            material={materials["Color M00.001"]}
          />
          <mesh
            name="Cylinder047_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_2.geometry}
            material={materials["Vidrio.002"]}
          />
          <mesh
            name="Cylinder047_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_3.geometry}
            material={materials["Marco.001"]}
          />
          <mesh
            name="Cylinder047_4"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder047_4.geometry}
            material={materials["Mesa.003"]}
          />
        </group>
        <group
          name="Circle009"
          position={[-23.749, 34.617, 68.889]}
          scale={3.946}
        >
          <mesh
            name="Circle013"
            castShadow
            receiveShadow
            geometry={nodes.Circle013.geometry}
            material={materials["Puerta.001"]}
          />
          <mesh
            name="Circle013_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle013_1.geometry}
            material={materials["Glossy.001"]}
          />
          <mesh
            name="Circle013_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle013_2.geometry}
            material={materials.Door}
          />
        </group>
        <group
          name="Circle010"
          position={[-28.173, 36.773, 78.822]}
          rotation={[-0.843, 1.116, -2.32]}
          scale={0.586}
        >
          <mesh
            name="Circle014"
            castShadow
            receiveShadow
            geometry={nodes.Circle014.geometry}
            material={materials["Baño.001"]}
          />
          <mesh
            name="Circle014_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle014_1.geometry}
            material={materials.Papelera}
          />
          <mesh
            name="Circle014_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle014_2.geometry}
            material={materials.Papel}
          />
        </group>
        <group
          name="Upright003"
          position={[-29.008, 33.318, 64.252]}
          rotation={[-Math.PI, -0.122, -Math.PI / 2]}
          scale={0.011}
        >
          <mesh
            name="Mesh020"
            castShadow
            receiveShadow
            geometry={nodes.Mesh020.geometry}
            material={nodes.Mesh020.material}
          />
          <mesh
            name="Mesh020_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh020_1.geometry}
            material={materials["BasureroCabeza.002"]}
          />
          <mesh
            name="Mesh020_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh020_2.geometry}
            material={materials["BlackBack.002"]}
          />
          <mesh
            name="Mesh020_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh020_3.geometry}
            material={materials["BasureroBase.002"]}
          />
          <mesh
            name="Mesh020_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh020_4.geometry}
            material={materials["Down_RecycleBin.002"]}
          />
          <mesh
            name="Mesh020_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh020_5.geometry}
            material={materials["ReflectBack.002"]}
          />
        </group>
        <group
          name="Upright004"
          position={[-20.661, 33.341, 65.433]}
          rotation={[0, -0.343, Math.PI / 2]}
          scale={0.012}
        >
          <mesh
            name="Mesh021"
            castShadow
            receiveShadow
            geometry={nodes.Mesh021.geometry}
            material={nodes.Mesh021.material}
          />
          <mesh
            name="Mesh021_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_1.geometry}
            material={materials["BasureroCabeza.002"]}
          />
          <mesh
            name="Mesh021_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_2.geometry}
            material={materials["BlackBack.002"]}
          />
          <mesh
            name="Mesh021_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_3.geometry}
            material={materials["BasureroBase.002"]}
          />
          <mesh
            name="Mesh021_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_4.geometry}
            material={materials["Down_RecycleBin.002"]}
          />
          <mesh
            name="Mesh021_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh021_5.geometry}
            material={materials["ReflectBack.002"]}
          />
        </group>
        <group
          name="Horizontally_Up003"
          position={[7.488, 34.13, 70.941]}
          rotation={[-Math.PI / 2, 0, -1.764]}
          scale={0.023}
        >
          <mesh
            name="Mesh022"
            castShadow
            receiveShadow
            geometry={nodes.Mesh022.geometry}
            material={nodes.Mesh022.material}
          />
          <mesh
            name="Mesh022_1"
            castShadow
            receiveShadow
            geometry={nodes.Mesh022_1.geometry}
            material={materials["BasureroCabeza.002"]}
          />
          <mesh
            name="Mesh022_2"
            castShadow
            receiveShadow
            geometry={nodes.Mesh022_2.geometry}
            material={materials["BlackBack.002"]}
          />
          <mesh
            name="Mesh022_3"
            castShadow
            receiveShadow
            geometry={nodes.Mesh022_3.geometry}
            material={materials["BasureroBase.002"]}
          />
          <mesh
            name="Mesh022_4"
            castShadow
            receiveShadow
            geometry={nodes.Mesh022_4.geometry}
            material={materials["Down_RecycleBin.002"]}
          />
          <mesh
            name="Mesh022_5"
            castShadow
            receiveShadow
            geometry={nodes.Mesh022_5.geometry}
            material={materials["ReflectBack.002"]}
          />
        </group>
        <mesh
          name="Plane015"
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials["Baño.001"]}
          position={[7.752, 34.956, 77.95]}
          rotation={[1.568, 0, 0.069]}
          scale={0.547}
        />
        <mesh
          name="Cylinder015"
          castShadow
          receiveShadow
          geometry={nodes.Cylinder015.geometry}
          material={materials["Valve.002"]}
          position={[7.556, 36.045, 80.507]}
          rotation={[0, -0.069, 0]}
          scale={0.05}
        />
        <group
          name="SILLA_LAB001"
          position={[-60.39, 33.047, 102.619]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert007"
            castShadow
            receiveShadow
            geometry={nodes.Vert007.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert007_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert007_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB"
          position={[-60.992, 33.047, 105.325]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert008"
            castShadow
            receiveShadow
            geometry={nodes.Vert008.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert008_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert008_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Puerta_Lab"
          position={[-70.778, 33.477, 86.236]}
          rotation={[Math.PI, -1.351, Math.PI]}
          scale={1.359}
        >
          <mesh
            name="Plane134"
            castShadow
            receiveShadow
            geometry={nodes.Plane134.geometry}
            material={materials["Material.018"]}
          />
          <mesh
            name="Plane134_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane134_1.geometry}
            material={materials["Marco.002"]}
          />
          <mesh
            name="Plane134_2"
            castShadow
            receiveShadow
            geometry={nodes.Plane134_2.geometry}
            material={materials.Visagra}
          />
          <mesh
            name="Plane134_3"
            castShadow
            receiveShadow
            geometry={nodes.Plane134_3.geometry}
            material={materials.PuertaCafe}
          />
        </group>
        <group
          name="Plane020"
          position={[-61.089, 35.651, 101.65]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane135"
            castShadow
            receiveShadow
            geometry={nodes.Plane135.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane135_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane135_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane023"
          position={[-61.757, 35.651, 104.652]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane136"
            castShadow
            receiveShadow
            geometry={nodes.Plane136.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane136_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane136_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente004"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente004.geometry}
          material={materials["Mesa.004"]}
          position={[-62.392, 35.546, 102.657]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Focos009"
          position={[-45.854, 46.132, 106.2]}
          rotation={[-1.586, -0.035, 2.952]}
          scale={[0.114, 2.205, 0.114]}
        >
          <mesh
            name="Cilindro017"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro017.geometry}
            material={materials["Plastico.004"]}
          />
          <mesh
            name="Cilindro017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro017_1.geometry}
            material={materials["Vidrio.003"]}
          />
          <mesh
            name="Cilindro017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro017_2.geometry}
            material={materials["Goma.001"]}
          />
        </group>
        <group
          name="dispensadorAlchol045"
          position={[-66.804, 38.665, 87.13]}
          rotation={[0, 1.305, 0]}
          scale={0.016}
        >
          <mesh
            name="Sphere055"
            castShadow
            receiveShadow
            geometry={nodes.Sphere055.geometry}
            material={materials["Base.004"]}
          />
          <mesh
            name="Sphere055_1"
            castShadow
            receiveShadow
            geometry={nodes.Sphere055_1.geometry}
            material={materials["HuecoMedio.001"]}
          />
          <mesh
            name="Sphere055_2"
            castShadow
            receiveShadow
            geometry={nodes.Sphere055_2.geometry}
            material={materials["Centro.001"]}
          />
          <mesh
            name="Sphere055_3"
            castShadow
            receiveShadow
            geometry={nodes.Sphere055_3.geometry}
            material={materials["Amarillo.002"]}
          />
          <mesh
            name="Sphere055_4"
            castShadow
            receiveShadow
            geometry={nodes.Sphere055_4.geometry}
            material={materials["Rojo.002"]}
          />
        </group>
        <group
          name="Cylinder020"
          position={[-73.43, 40.64, 89.384]}
          rotation={[Math.PI, -1.494, Math.PI / 2]}
          scale={[0.026, 0.02, 0.026]}
        >
          <mesh
            name="Cylinder050"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050.geometry}
            material={materials["Trompa.001"]}
          />
          <mesh
            name="Cylinder050_1"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050_1.geometry}
            material={materials["Extintor_agarre1.001"]}
          />
          <mesh
            name="Cylinder050_2"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050_2.geometry}
            material={materials["Extintor_Agarre2.001"]}
          />
          <mesh
            name="Cylinder050_3"
            castShadow
            receiveShadow
            geometry={nodes.Cylinder050_3.geometry}
            material={materials["Pico.001"]}
          />
        </group>
        <group
          name="Cubo005"
          position={[-76.6, 40.836, 100.133]}
          rotation={[0, 1.266, 0]}
          scale={[0.117, 3.147, 0.117]}
        >
          <mesh
            name="Cubo005_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo005_1.geometry}
            material={materials["Borde.002"]}
          />
          <mesh
            name="Cubo005_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo005_2.geometry}
            material={materials["Material.019"]}
          />
        </group>
        <group
          name="Cubo006"
          position={[-62.414, 36.039, 101.118]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo006_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo006_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo006_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo006_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo007"
          position={[-61.158, 35.73, 100.433]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo007_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo007_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo007_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo007_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo008"
          position={[-61.826, 35.73, 103.435]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo008_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo008_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo008_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo008_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo"
          position={[-63.082, 36.039, 104.12]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cube268"
          position={[-74.101, 43.304, 95.625]}
          rotation={[0, -0.275, 0]}
          scale={[0.541, 0.541, 4.711]}
        >
          <mesh
            name="Cube505"
            castShadow
            receiveShadow
            geometry={nodes.Cube505.geometry}
            material={materials["pantalla.001"]}
          />
          <mesh
            name="Cube505_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube505_1.geometry}
            material={materials["PLastico.001"]}
          />
        </group>
        <group
          name="Cube274"
          position={[-28.76, 44.579, 103.743]}
          rotation={[Math.PI, -1.433, Math.PI]}
          scale={[3.289, 1.071, 1.071]}
        >
          <mesh
            name="Cube511"
            castShadow
            receiveShadow
            geometry={nodes.Cube511.geometry}
            material={materials.Aire}
          />
          <mesh
            name="Cube511_1"
            castShadow
            receiveShadow
            geometry={nodes.Cube511_1.geometry}
            material={materials.SalidaAire}
          />
          <mesh
            name="Cube511_2"
            castShadow
            receiveShadow
            geometry={nodes.Cube511_2.geometry}
            material={materials.Botones}
          />
          <mesh
            name="Cube511_3"
            castShadow
            receiveShadow
            geometry={nodes.Cube511_3.geometry}
            material={materials.Luz1}
          />
          <mesh
            name="Cube511_4"
            castShadow
            receiveShadow
            geometry={nodes.Cube511_4.geometry}
            material={materials.luz2}
          />
        </group>
        <group
          name="Circle011"
          position={[-60.625, 46.018, 98.297]}
          rotation={[-Math.PI / 2, 0, -1.862]}
          scale={0.268}
        >
          <mesh
            name="Circle015"
            castShadow
            receiveShadow
            geometry={nodes.Circle015.geometry}
            material={materials["Proyectora.001"]}
          />
          <mesh
            name="Circle015_1"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_1.geometry}
            material={materials["LentesPlasticos.001"]}
          />
          <mesh
            name="Circle015_2"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_2.geometry}
            material={materials["Luz.001"]}
          />
          <mesh
            name="Circle015_3"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_3.geometry}
            material={materials["EchufeEntrada.001"]}
          />
          <mesh
            name="Circle015_4"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_4.geometry}
            material={materials["Rojo.003"]}
          />
          <mesh
            name="Circle015_5"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_5.geometry}
            material={materials["Amarillo.003"]}
          />
          <mesh
            name="Circle015_6"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_6.geometry}
            material={materials["AzulEnchufe.001"]}
          />
          <mesh
            name="Circle015_7"
            castShadow
            receiveShadow
            geometry={nodes.Circle015_7.geometry}
            material={materials["Material.023"]}
          />
        </group>
        <group
          name="Focos016"
          position={[-43.415, 46.132, 96.321]}
          rotation={[-1.586, -0.035, 2.952]}
          scale={[0.114, 2.205, 0.114]}
        >
          <mesh
            name="Cilindro023"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro023.geometry}
            material={materials["Plastico.004"]}
          />
          <mesh
            name="Cilindro023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro023_1.geometry}
            material={materials["Vidrio.003"]}
          />
          <mesh
            name="Cilindro023_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro023_2.geometry}
            material={materials["Goma.001"]}
          />
        </group>
        <group
          name="Focos022"
          position={[-55.811, 46.132, 104.62]}
          rotation={[-1.586, -0.035, 2.952]}
          scale={[0.114, 2.205, 0.114]}
        >
          <mesh
            name="Cilindro024"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro024.geometry}
            material={materials["Plastico.004"]}
          />
          <mesh
            name="Cilindro024_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro024_1.geometry}
            material={materials["Vidrio.003"]}
          />
          <mesh
            name="Cilindro024_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro024_2.geometry}
            material={materials["Goma.001"]}
          />
        </group>
        <group
          name="Focos023"
          position={[-53.372, 46.132, 94.741]}
          rotation={[-1.586, -0.035, 2.952]}
          scale={[0.114, 2.205, 0.114]}
        >
          <mesh
            name="Cilindro034"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro034.geometry}
            material={materials["Plastico.004"]}
          />
          <mesh
            name="Cilindro034_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro034_1.geometry}
            material={materials["Vidrio.003"]}
          />
          <mesh
            name="Cilindro034_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro034_2.geometry}
            material={materials["Goma.001"]}
          />
        </group>
        <group
          name="Focos033"
          position={[-63.849, 46.132, 103.174]}
          rotation={[-1.586, -0.035, 2.952]}
          scale={[0.114, 2.205, 0.114]}
        >
          <mesh
            name="Cilindro035"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro035.geometry}
            material={materials["Plastico.004"]}
          />
          <mesh
            name="Cilindro035_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro035_1.geometry}
            material={materials["Vidrio.003"]}
          />
          <mesh
            name="Cilindro035_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro035_2.geometry}
            material={materials["Goma.001"]}
          />
        </group>
        <group
          name="Focos034"
          position={[-61.41, 46.132, 93.296]}
          rotation={[-1.586, -0.035, 2.952]}
          scale={[0.114, 2.205, 0.114]}
        >
          <mesh
            name="Cilindro036"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro036.geometry}
            material={materials["Plastico.004"]}
          />
          <mesh
            name="Cilindro036_1"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro036_1.geometry}
            material={materials["Vidrio.003"]}
          />
          <mesh
            name="Cilindro036_2"
            castShadow
            receiveShadow
            geometry={nodes.Cilindro036_2.geometry}
            material={materials["Goma.001"]}
          />
        </group>
        <group
          name="SILLA_LAB002"
          position={[-57.942, 33.047, 92.957]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert009"
            castShadow
            receiveShadow
            geometry={nodes.Vert009.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert009_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert009_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB003"
          position={[-58.544, 33.047, 95.662]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert010"
            castShadow
            receiveShadow
            geometry={nodes.Vert010.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert010_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert010_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Plane024"
          position={[-58.641, 35.651, 91.987]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane138"
            castShadow
            receiveShadow
            geometry={nodes.Plane138.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane138_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane138_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane025"
          position={[-59.309, 35.651, 94.989]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane139"
            castShadow
            receiveShadow
            geometry={nodes.Plane139.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane139_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane139_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente005"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente005.geometry}
          material={materials["Mesa.004"]}
          position={[-59.944, 35.546, 92.995]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Cubo009"
          position={[-59.965, 36.039, 91.455]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo009_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo009_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo009_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo009_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo010"
          position={[-58.709, 35.73, 90.771]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo010_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo010_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo010_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo010_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo011"
          position={[-59.378, 35.73, 93.772]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo011_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo011_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo011_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo011_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo012"
          position={[-60.634, 36.039, 94.457]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo012_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo012_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo012_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo012_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="SILLA_LAB004"
          position={[-48.601, 33.047, 94.375]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert011"
            castShadow
            receiveShadow
            geometry={nodes.Vert011.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert011_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert011_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB005"
          position={[-49.204, 33.047, 97.08]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert012"
            castShadow
            receiveShadow
            geometry={nodes.Vert012.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert012_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert012_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Plane026"
          position={[-49.3, 35.651, 93.405]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane141"
            castShadow
            receiveShadow
            geometry={nodes.Plane141.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane141_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane141_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane027"
          position={[-49.969, 35.651, 96.407]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane142"
            castShadow
            receiveShadow
            geometry={nodes.Plane142.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane142_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane142_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente006"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente006.geometry}
          material={materials["Mesa.004"]}
          position={[-50.603, 35.546, 94.413]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Cubo013"
          position={[-50.625, 36.039, 92.873]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo013_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo013_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo013_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo013_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo014"
          position={[-49.369, 35.73, 92.188]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo014_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo014_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo014_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo014_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo015"
          position={[-50.038, 35.73, 95.19]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo015_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo015_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo015_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo016"
          position={[-51.293, 36.039, 95.875]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo016_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo016_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo016_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo016_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="SILLA_LAB006"
          position={[-51.476, 33.047, 104.661]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert013"
            castShadow
            receiveShadow
            geometry={nodes.Vert013.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert013_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert013_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB007"
          position={[-52.078, 33.047, 107.366]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert014"
            castShadow
            receiveShadow
            geometry={nodes.Vert014.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert014_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert014_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Plane028"
          position={[-52.175, 35.651, 103.692]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane144"
            castShadow
            receiveShadow
            geometry={nodes.Plane144.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane144_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane144_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane029"
          position={[-52.843, 35.651, 106.694]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane145"
            castShadow
            receiveShadow
            geometry={nodes.Plane145.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane145_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane145_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente007"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente007.geometry}
          material={materials["Mesa.004"]}
          position={[-53.478, 35.546, 104.699]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Cubo017"
          position={[-53.499, 36.039, 103.16]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo017_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo017_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo017_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo017_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo018"
          position={[-52.243, 35.73, 102.475]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo018_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo018_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo018_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo018_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo019"
          position={[-52.912, 35.73, 105.477]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo019_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo019_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo019_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo019_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo020"
          position={[-54.168, 36.039, 106.162]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo020_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo020_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo020_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo020_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="SILLA_LAB008"
          position={[-41.628, 33.047, 106.667]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert015"
            castShadow
            receiveShadow
            geometry={nodes.Vert015.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert015_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert015_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB009"
          position={[-42.23, 33.047, 109.373]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert016"
            castShadow
            receiveShadow
            geometry={nodes.Vert016.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert016_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert016_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Plane030"
          position={[-42.327, 35.651, 105.698]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane147"
            castShadow
            receiveShadow
            geometry={nodes.Plane147.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane147_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane147_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane031"
          position={[-42.995, 35.651, 108.7]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane148"
            castShadow
            receiveShadow
            geometry={nodes.Plane148.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane148_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane148_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente008"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente008.geometry}
          material={materials["Mesa.004"]}
          position={[-43.63, 35.546, 106.705]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Cubo021"
          position={[-43.652, 36.039, 105.166]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo021_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo021_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo021_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo021_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo022"
          position={[-42.396, 35.73, 104.481]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo022_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo022_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo022_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo022_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo023"
          position={[-43.064, 35.73, 107.483]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo023_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo023_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo023_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo023_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo024"
          position={[-44.32, 36.039, 108.168]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo024_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo024_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo024_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo024_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="SILLA_LAB010"
          position={[-39.641, 33.047, 95.798]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert017"
            castShadow
            receiveShadow
            geometry={nodes.Vert017.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert017_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert017_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB011"
          position={[-40.244, 33.047, 98.503]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert018"
            castShadow
            receiveShadow
            geometry={nodes.Vert018.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert018_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert018_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Plane032"
          position={[-40.34, 35.651, 94.828]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane150"
            castShadow
            receiveShadow
            geometry={nodes.Plane150.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane150_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane150_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane033"
          position={[-41.009, 35.651, 97.83]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane151"
            castShadow
            receiveShadow
            geometry={nodes.Plane151.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane151_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane151_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente009"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente009.geometry}
          material={materials["Mesa.004"]}
          position={[-41.643, 35.546, 95.836]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Cubo025"
          position={[-41.665, 36.039, 94.296]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo025_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo025_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo025_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo025_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo026"
          position={[-40.409, 35.73, 93.611]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo026_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo026_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo026_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo026_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo027"
          position={[-41.078, 35.73, 96.613]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo027_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo027_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo027_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo027_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo028"
          position={[-42.334, 36.039, 97.298]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo028_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo028_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo028_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo028_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="SILLA_LAB012"
          position={[-30.022, 33.047, 97.73]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert019"
            castShadow
            receiveShadow
            geometry={nodes.Vert019.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert019_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert019_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB013"
          position={[-30.624, 33.047, 100.435]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert020"
            castShadow
            receiveShadow
            geometry={nodes.Vert020.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert020_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert020_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Plane034"
          position={[-30.721, 35.651, 96.76]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane153"
            castShadow
            receiveShadow
            geometry={nodes.Plane153.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane153_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane153_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane035"
          position={[-31.389, 35.651, 99.762]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane154"
            castShadow
            receiveShadow
            geometry={nodes.Plane154.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane154_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane154_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente010"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente010.geometry}
          material={materials["Mesa.004"]}
          position={[-32.024, 35.546, 97.768]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Cubo029"
          position={[-32.046, 36.039, 96.228]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo029_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo029_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo029_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo029_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo030"
          position={[-30.79, 35.73, 95.543]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo030_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo030_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo030_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo030_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo031"
          position={[-31.458, 35.73, 98.545]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo031_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo031_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo031_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo031_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo032"
          position={[-32.714, 36.039, 99.23]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo032_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo032_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo032_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo032_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="SILLA_LAB014"
          position={[-32.764, 33.047, 108.698]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert021"
            castShadow
            receiveShadow
            geometry={nodes.Vert021.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert021_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert021_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="SILLA_LAB015"
          position={[-33.366, 33.047, 111.403]}
          rotation={[Math.PI, -1.348, Math.PI]}
          scale={0.933}
        >
          <mesh
            name="Vert022"
            castShadow
            receiveShadow
            geometry={nodes.Vert022.geometry}
            material={materials["Patas.003"]}
          />
          <mesh
            name="Vert022_1"
            castShadow
            receiveShadow
            geometry={nodes.Vert022_1.geometry}
            material={materials["Plastico.003"]}
          />
        </group>
        <group
          name="Plane036"
          position={[-33.463, 35.651, 107.728]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane156"
            castShadow
            receiveShadow
            geometry={nodes.Plane156.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane156_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane156_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <group
          name="Plane037"
          position={[-34.131, 35.651, 110.73]}
          rotation={[0, 1.346, 0]}
          scale={[0.897, 0.193, 0.193]}
        >
          <mesh
            name="Plane157"
            castShadow
            receiveShadow
            geometry={nodes.Plane157.geometry}
            material={materials["BAse.002"]}
          />
          <mesh
            name="Plane157_1"
            castShadow
            receiveShadow
            geometry={nodes.Plane157_1.geometry}
            material={materials["Teclas.002"]}
          />
        </group>
        <mesh
          name="Mesa_Docente011"
          castShadow
          receiveShadow
          geometry={nodes.Mesa_Docente011.geometry}
          material={materials["Mesa.004"]}
          position={[-34.766, 35.546, 108.736]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={[1.754, 1.076, 3.264]}
        />
        <group
          name="Cubo033"
          position={[-34.788, 36.039, 107.197]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo033_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo033_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo033_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo033_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
        <group
          name="Cubo034"
          position={[-33.532, 35.73, 106.512]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo034_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo034_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo034_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo034_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo035"
          position={[-34.2, 35.73, 109.514]}
          rotation={[-Math.PI, 0.219, -Math.PI]}
          scale={0.13}
        >
          <mesh
            name="Cubo035_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo035_1.geometry}
            material={materials["Material.021"]}
          />
          <mesh
            name="Cubo035_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo035_2.geometry}
            material={materials["Material.022"]}
          />
        </group>
        <group
          name="Cubo036"
          position={[-35.456, 36.039, 110.199]}
          rotation={[Math.PI, -1.334, Math.PI]}
          scale={[0.094, 0.061, 0.148]}
        >
          <mesh
            name="Cubo036_1"
            castShadow
            receiveShadow
            geometry={nodes.Cubo036_1.geometry}
            material={materials["Plastico.005"]}
          />
          <mesh
            name="Cubo036_2"
            castShadow
            receiveShadow
            geometry={nodes.Cubo036_2.geometry}
            material={materials["Material.020"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/Modelo3D_Universidad.glb');