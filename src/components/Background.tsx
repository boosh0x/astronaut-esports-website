import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <Canvas>
        <mesh>
          <ambientLight intensity={0.3} />
          <pointLight position={[25, 25, 10]} />
          <Suspense>
            <Quest />
          </Suspense>
        </mesh>
      </Canvas>
    </div>
  );
}

function Quest() {
  const gltf = useLoader(GLTFLoader, "/quest/scene.gltf");
  return <primitive object={gltf.scene} rotation={[-0.75, 0.75, 0.75]} />;
}
