import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import testModel from "./glbtest.glb";

function Test() {
  const gltf = useLoader(GLTFLoader, "glbtest.glb");
  useFrame(({ clock }) => (ref.current.rotation.x += 0.01));
  const ref = useRef();

  return (
    <group ref={ref}>
      <primitive
        object={gltf.scene}
        position={[-150, 0, 200]}
        rotation={[0, 0.2, 0]}
        scale={[0.3, 0.3, 0.3]}
      />
    </group>
  );
}

export function GlitchPage() {
  return (
    <Canvas camera={{ position: [-130, -130, -50] }}>
      <ambientLight intensity={10} />
      <pointLight position={[-400, -400, -400]} />
      <Suspense fallback={null}>
        <Test />
      </Suspense>
    </Canvas>
  );
}
