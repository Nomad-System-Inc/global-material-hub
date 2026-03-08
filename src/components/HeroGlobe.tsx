import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

const RotatingGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15;
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = t * 0.12;
      wireRef.current.rotation.x = Math.sin(t * 0.08) * 0.15;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = t * 0.08;
    }
  });

  // Generate orbital particles
  const particles = useMemo(() => {
    const count = 200;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.6;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    return positions;
  }, []);

  return (
    <group>
      {/* Core sphere with distortion */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 8]} />
        <MeshDistortMaterial
          color="#D97706"
          emissive="#92400E"
          emissiveIntensity={0.3}
          roughness={0.6}
          metalness={0.8}
          distort={0.15}
          speed={2}
          transparent
          opacity={0.35}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh ref={wireRef}>
        <icosahedronGeometry args={[2, 4]} />
        <meshBasicMaterial
          color="#F59E0B"
          wireframe
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Orbital particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particles, 3]}
            count={particles.length / 3}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#F59E0B"
          size={0.025}
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      {/* Inner glow sphere */}
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
        <mesh>
          <sphereGeometry args={[1.6, 32, 32]} />
          <meshBasicMaterial
            color="#D97706"
            transparent
            opacity={0.08}
          />
        </mesh>
      </Float>
    </group>
  );
};

const HeroGlobe = () => {
  return (
    <div className="w-full h-full" style={{ minHeight: 400 }}>
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 3, 5]} intensity={1} color="#F59E0B" />
        <directionalLight position={[-3, -2, -3]} intensity={0.3} color="#60A5FA" />
        <pointLight position={[0, 0, 0]} intensity={0.5} color="#D97706" />
        <RotatingGlobe />
      </Canvas>
    </div>
  );
};

export default HeroGlobe;
