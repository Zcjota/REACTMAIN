import React, { useRef } from 'react'
import { useGLTF, Sparkles } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

export function Extintor(props) {
  const { nodes, materials } = useGLTF('/Materiales/Laboratorio/EXTINTOR1.glb')
  const particlesRef = useRef() 

  
  const [spring, api] = useSpring(() => ({
    rotation: [0, 0, 0], 
    config: { mass: 1, tension: 170, friction: 12 },
  }))

  const handleAnimation = () => {
    
    api.start({ rotation: [Math.PI / 4, 0, 0] }) 

    
    if (particlesRef.current) {
      particlesRef.current.visible = true
    }
  }

  return (
    <animated.group {...props} dispose={null} onClick={handleAnimation}> 
      <group
        position={[-0.163, 2.622, 0.044]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.846, 1, 0.837]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_1.geometry}
          material={materials.Extintor_agarre1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder_2.geometry}
          material={materials.Extintor_Agarre2}
        />
      </group>
      <animated.group
        position={[-0.219, 4.62, 0.044]}
        rotation={spring.rotation} // Aplicar la animación
        scale={0.193}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_1.geometry}
          material={materials.Extintor_agarre1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_2.geometry}
          material={materials.Extintor_Agarre2}
        />
      </animated.group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials.Pico}
        position={[-0.219, 4.766, 0.044]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.226, 0.132, 0.173]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Extintor_agarre1}
        position={[-0.163, 4.543, 0.044]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[0.11, 0.162, 0.11]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials.Extintor_Agarre2}
        position={[-0.163, 4.535, -0.106]}
        rotation={[Math.PI / 2, 0, 3.142]}
        scale={0.071}
      />
      <group
        position={[0.154, 4.516, 0.044]}
        rotation={[-Math.PI, 0, Math.PI / 2]}
        scale={[0.066, 0.052, 0.066]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_1.geometry}
          material={materials.Trompa}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_2.geometry}
          material={materials.Extintor_agarre1}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials.Extintor_Agarre2}
        position={[0.202, 4.513, 0.04]}
        rotation={[Math.PI / 2, 0, 1.571]}
        scale={0.089}
      />

      
      <Sparkles
        ref={particlesRef} // Referencia para el control del sistema de partículas
        position={[0.202, 4.5, 0.04]} // Posición del chorro
        count={500} // Número de partículas
        scale={[1, 1, 1]} // Escala del sistema de partículas
        speed={1} // Velocidad del movimiento de las partículas
        size={10} // Tamaño de las partículas
        color="white" // Color de las partículas
        visible={false} // Comienza invisible
      />
    </animated.group>
  )
}

useGLTF.preload('/Materiales/Laboratorio/EXTINTOR1.glb')
