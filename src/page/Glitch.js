import * as THREE from "three";
import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Box(props) {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}
    >
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
    </mesh>
  );
}

let i = 0;

function Glitch({ speed, factor, url, ...props }) {
  const { nodes, materials, animations } = useLoader(GLTFLoader, url);
  const group = useRef();
  const [mixer] = useState(() => new THREE.AnimationMixer());
  useEffect(
    () => void mixer.clipAction(animations[0], group.current).play(),
    []
  );
  useFrame((state, delta) => {
    group.current.rotation.y +=
      Math.sin((delta * factor) / 2) * Math.cos((delta * factor) / 2) * 1.5;
    mixer.update(delta * speed);
  });

  return (
    <group ref={group} dispose={null}>
      <scene name="Scene" {...props}>
        <mesh
          name="Object_0"
          morphTargetDictionary={nodes.Object_0.morphTargetDictionary}
          morphTargetInfluences={nodes.Object_0.morphTargetInfluences}
          rotation={[1.5707964611537577, 0, 0]}
          geometry={nodes.Object_0.geometry}
          material={materials.Material_0_COLOR_0}
        />
      </scene>
    </group>
  );
}

function Glitchs() {
  return new Array(50).fill().map((_, i) => {
    const x = (15 + Math.random() * 30) * (Math.round(Math.random()) ? -1 : 1);
    const y = -10 + Math.random() * 20;
    const z = -5 + Math.random() * 10;
    const bird = ["Stork", "Parrot", "Flamingo"][Math.round(Math.random() * 2)];
    let speed = bird === "Stork" ? 0.5 : bird === "Flamingo" ? 2 : 5;
    let factor =
      bird === "Stork"
        ? 0.5 + Math.random()
        : bird === "Flamingo"
        ? 0.25 + Math.random()
        : 1 + Math.random() - 0.5;
    return (
      <Glitch
        key={i}
        position={[x, y, z]}
        rotation={[0, x > 0 ? Math.PI : 0, 0]}
        speed={speed}
        factor={factor}
        url={`/${bird}.glb`}
      />
    );
  });
}

export function GlitchPage() {
  return (
    <Canvas camera={{ position: [0, 0, 35] }}>
      <ambientLight intensity={2} />
      <pointLight position={[40, 40, 40]} />
      {/* <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} /> */}
      <Suspense fallback={null}>
        <Glitchs />
      </Suspense>
    </Canvas>
  );
}
