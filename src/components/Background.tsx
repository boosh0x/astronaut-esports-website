import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <Canvas

      //   camera={{
      //     fov: 60,
      //     aspect: window.innerWidth / window.innerHeight,
      //     near: 1,
      //     far: 1000,
      //     position: [0, 0, 1],
      //     rotation: [Math.PI / 2, 0, 0],
      //   }}
      >
        <mesh>
          <ambientLight intensity={0.3} />
          <pointLight position={[25, 25, 10]} />
          <boxGeometry />
          <meshStandardMaterial />
          <Suspense>
            <Quest />
          </Suspense>
        </mesh>
        {/* <geometry
    <vector3
      x={Math.random() * 600 - 300}
      y={Math.random() * 600 - 300}
      z={Math.random() * 600 - 300}
    /> */}
      </Canvas>
    </div>
  );
}

function Quest() {
  const gltf = useLoader(GLTFLoader, "/quest/scene.gltf");
  return <primitive object={gltf.scene} rotation={[-0.75, 0.75, 0.75]} />;
}
