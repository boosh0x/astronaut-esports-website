import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Suspense } from "react";

function Model() {
  const [scrolledPastViewport, setScrolledPastViewport] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > window.innerHeight) {
        setScrolledPastViewport(true);
      } else setScrolledPastViewport(false);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const gltf = useLoader(GLTFLoader, "/astronaut.glb");

  useFrame(() => {
    gltf.scene.rotation.y += 0.002;
  });

  return (
    <primitive
      visible={!scrolledPastViewport}
      object={gltf.scene}
      rotation={[0.5, 0, 0]}
      position={[0, -0.85, 2]}
    />
  );
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

export default function Background() {
  return (
    <Canvas className="absolute top-0 left-0 w-full h-screen">
      <ambientLight intensity={0.1} />
      <pointLight position={[10, 20, 40]} color={"#ffffff"} />
      <pointLight position={[80, 2, 10]} color={"#333AE3"} intensity={0.75} />
      <pointLight
        position={[-25, -25, 10]}
        color={"#5D27E3"}
        intensity={0.75}
      />
      <Stars />
      <Suspense>
        <Model />
      </Suspense>
    </Canvas>
  );
}
