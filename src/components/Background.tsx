import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Suspense } from "react";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

function Quest() {
  const gltf = useLoader(GLTFLoader, "/quest/scene.gltf");

  useFrame(() => {
    gltf.scene.rotation.y += 0.0002;
  });

  return <primitive object={gltf.scene} rotation={[-0.75, 0.75, 0.75]} />;
}

function Stars() {
  const starGeometry = new THREE.BufferGeometry();
  const starVertices = [];

  for (let i = 0; i < 6000; i++) {
    const x = Math.random() * 600 - 300;
    const y = Math.random() * 600 - 300;
    const z = Math.random() * 600 - 300;

    starVertices.push(x, y, z);
  }

  starGeometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(starVertices, 3)
  );

  const sprite = new THREE.TextureLoader().load("/star.png");
  const starMaterial = new THREE.PointsMaterial({
    color: 0xaaaaaa,
    size: 2,
    map: sprite,
    sizeAttenuation: false,
  });

  const meshRef = useRef();
  useFrame(() => {
    const positionAttribute = starGeometry.getAttribute("position");

    for (let i = 0; i < positionAttribute.count; i++) {
      //@ts-ignore
      const z = positionAttribute.getZ(i);

      if (z > 300) {
        //@ts-ignore
        positionAttribute.setZ(i, -300);
        continue;
      }

      const newZ = z + 0.05;
      //@ts-ignore
      positionAttribute.setZ(i, newZ);
    }

    starGeometry.rotateZ(0.0001);

    positionAttribute.needsUpdate = true;
  });

  return (
    <points
      //@ts-ignore
      ref={meshRef}
      geometry={starGeometry}
      material={starMaterial}
    />
  );
}

function AstronautEsports() {
  const font = useLoader(FontLoader, "/fonts/XXIX.json");

  const textGeometry = new TextGeometry("Astronaut Esports", {
    font: font,
    size: 0.5,
    height: 0.05,
  });

  // Create a mesh with the text geometry
  const textMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
  const textMesh = (
    <mesh
      geometry={textGeometry}
      material={textMaterial}
      position={[-3.8, -0.25, 1.5]}
    />
  );

  return <group>{textMesh}</group>;
}

export default function Background() {
  return (
    <div className="absolute top-0 left-0 w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.3} />
        <pointLight position={[25, 25, 10]} />
        <Stars />
        <Suspense>
          <Quest />
          <AstronautEsports />
        </Suspense>
      </Canvas>
    </div>
  );
}
