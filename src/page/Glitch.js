import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Test() {
  const { scene } = useLoader(GLTFLoader, "glbtest.glb");
  useFrame(() => (ref.current.rotation.x += 0.01));
  const ref = useRef();

  return (
    <group ref={ref}>
      <primitive
        object={scene}
        position={[-150, 0, 200]}
        rotation={[0, 0.2, 0]}
        scale={[0.3, 0.3, 0.3]}
        dispose={null}
      />
    </group>
  );
}

export function GlitchPage() {
  return (
    <Canvas camera={{ position: [-100, -130, -50] }}>
      <ambientLight intensity={1} />
      <pointLight position={[-400, -400, -400]} />
      <Suspense fallback={null}>
        <Test />
      </Suspense>
    </Canvas>
  );
}
