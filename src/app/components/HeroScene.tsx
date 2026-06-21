"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, Float, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import * as THREE from "three";

/* The intelligence core — a distorted metallic icosahedron wrapped in a
   wireframe shell, glowing electric blue. */
function Core() {
  const inner = useRef<THREE.Mesh>(null!);
  const shell = useRef<THREE.Mesh>(null!);
  useFrame((_, dt) => {
    if (inner.current) {
      inner.current.rotation.y += dt * 0.18;
      inner.current.rotation.x += dt * 0.06;
    }
    if (shell.current) {
      shell.current.rotation.y -= dt * 0.1;
      shell.current.rotation.z += dt * 0.04;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
      <Icosahedron ref={inner} args={[1.25, 12]}>
        <MeshDistortMaterial
          color="#0b1f44"
          emissive="#2f6fd6"
          emissiveIntensity={0.7}
          roughness={0.12}
          metalness={0.92}
          distort={0.38}
          speed={1.8}
        />
      </Icosahedron>
      <Icosahedron ref={shell} args={[1.72, 2]}>
        <meshBasicMaterial color="#5aa2ff" wireframe transparent opacity={0.16} />
      </Icosahedron>
    </Float>
  );
}

/* Drifting particle nebula in a spherical shell. */
function Nebula({ count = 900 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3 + Math.pow(Math.random(), 0.6) * 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      p[i * 3 + 2] = r * Math.cos(phi);
    }
    return p;
  }, [count]);
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * 0.025;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.025} color="#9ec5ff" transparent opacity={0.85} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* Camera parallax that follows the pointer. */
function Rig() {
  const { camera, pointer } = useThree();
  const vec = useMemo(() => new THREE.Vector3(), []);
  useFrame(() => {
    vec.set(pointer.x * 1.1, pointer.y * 0.7, 5.2);
    camera.position.lerp(vec, 0.04);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#000004"]} />
      <fog attach="fog" args={["#000004", 6, 14]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={2.4} color="#5aa2ff" />
      <pointLight position={[-6, -3, 2]} intensity={1.1} color="#ffffff" />
      <pointLight position={[0, 0, 3]} intensity={1.5} color="#2f6fd6" />
      <Suspense fallback={null}>
        <Core />
        <Nebula />
        <Sparkles count={70} scale={[12, 8, 8]} size={2.4} speed={0.3} color="#bcd8ff" opacity={0.7} />
      </Suspense>
      <Rig />
      <EffectComposer>
        <Bloom intensity={1.35} luminanceThreshold={0.18} luminanceSmoothing={0.9} mipmapBlur />
        <Vignette offset={0.25} darkness={0.92} eskil={false} />
      </EffectComposer>
    </Canvas>
  );
}
