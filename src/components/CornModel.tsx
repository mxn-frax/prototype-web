import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import {
  Float,
  PerspectiveCamera,
  Environment,
  ContactShadows,
} from '@react-three/drei'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

function Coin() {
  const coinRef = useRef<THREE.Group>(null)
  const [spring, api] = useSpring(() => ({
    rotation: [0.3, 0, 0],
    position: [0, 0, 0],
    config: { mass: 2, tension: 200, friction: 50 },
  }))

  useFrame((state) => {
    if (coinRef.current) {
      // Dynamic rotation that combines tilt and spin
      const tilt = Math.sin(state.clock.elapsedTime * 0.5) * 0.2
      const spin = state.clock.elapsedTime * 0.3
      
      api.start({
        rotation: [0.3 + tilt, spin, 0],
        position: [0, Math.sin(state.clock.elapsedTime) * 0.1, 0],
      })
    }
  })

  return (
    <animated.group ref={coinRef} {...spring}>
      {/* Stack of coins */}
      {[0, 0.1, 0.2].map((height, index) => (
        <group key={height} position={[0, height, 0]}>
          {/* Main coin body */}
          <mesh>
            <cylinderGeometry args={[2, 2, 0.1, 32]} />
            <meshStandardMaterial
              color="#F7C948"
              metalness={0.8}
              roughness={0.2}
              envMapIntensity={1}
            />
          </mesh>

          {/* Aztec pattern */}
          <mesh position={[0, 0.051, 0]} scale={0.8}>
            <cylinderGeometry args={[1.8, 1.8, 0.01, 8]} />
            <meshStandardMaterial
              color="#8D2B0B"
              metalness={0.4}
              roughness={0.6}
              envMapIntensity={0.5}
            />
          </mesh>

          {/* Center emblem */}
          <group position={[0, 0.052, 0]}>
            {/* Center corn symbol */}
            <mesh>
              <cylinderGeometry args={[0.6, 0.6, 0.02, 32]} />
              <meshStandardMaterial
                color="#F0B429"
                metalness={0.6}
                roughness={0.3}
                envMapIntensity={0.8}
              />
            </mesh>

            {/* Decorative rays */}
            {[...Array(8)].map((_, i) => (
              <group key={i} rotation={[0, (i * Math.PI) / 4, 0]}>
                <mesh position={[1, 0, 0]}>
                  <boxGeometry args={[0.8, 0.02, 0.1]} />
                  <meshStandardMaterial
                    color="#F0B429"
                    metalness={0.6}
                    roughness={0.3}
                    envMapIntensity={0.8}
                  />
                </mesh>
              </group>
            ))}
          </group>

          {/* Edge details */}
          {[...Array(32)].map((_, i) => (
            <group key={i} rotation={[0, (i * Math.PI) / 16, 0]}>
              <mesh position={[2, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.01]} />
                <meshStandardMaterial
                  color="#CB6E17"
                  metalness={0.4}
                  roughness={0.6}
                  envMapIntensity={0.5}
                />
              </mesh>
            </group>
          ))}
        </group>
      ))}
    </animated.group>
  )
}

export function CornModel() {
  return (
    <div className="h-full w-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <Float
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.5}
        >
          <Coin />
        </Float>

        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.5}
          scale={10}
          blur={2}
          far={4}
        />
      </Canvas>
    </div>
  )
}
