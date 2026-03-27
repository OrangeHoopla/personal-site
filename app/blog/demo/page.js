'use client'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";



export default function App() {
    const Model = () => {
  const gltf = useLoader(GLTFLoader, '/google-home-mini-v3-bot-Cut.gltf');
  return (
    <>
      <primitive object={gltf.scene} scale={50} />
    </>
  );
};
  return (
    <div className="rounded-4xl h-100 w-1/3 content-center">
      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="studio" background />
        </Suspense>
          </Canvas>
    </div>
    
  );
}