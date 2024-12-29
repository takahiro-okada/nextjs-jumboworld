"use client";

import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

export default function Globe() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const texture = useLoader(THREE.TextureLoader, "/images/earth-texture.jpg");

  useFrame(() => {
    meshRef.current.rotation.y += 0.002;
  });

  return (
    <Sphere ref={meshRef} args={[3, 64, 64]}>
      <meshStandardMaterial map={texture} metalness={0} roughness={1} />
    </Sphere>
  );
}
