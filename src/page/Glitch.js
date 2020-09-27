import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { OrbitControls, Html } from "drei";

function Test() {
  const gltf = useLoader(GLTFLoader, "glbtest.glb");
  useFrame(({ clock }) => (ref.current.rotation.x += 0.01));
  const ref = useRef();

  console.log(gltf.scene);

  return (
    <group ref={ref}>
      <primitive
        object={gltf.scene}
        position={[-150, 0, 200]}
        rotation={[0, 0.2, 0]}
        scale={[0.3, 0.3, 0.3]}
        castShadow
        receiveShadow
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
      {/* <OrbitControls screenSpacePanning /> */}
      <Suspense fallback={null}>
        <Test />
      </Suspense>
    </Canvas>
  );
}
