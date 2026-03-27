'use client'
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { Suspense } from "react";



export default function Wwww() {

  const Model = () => {
    const gltf = useGLTF('/google-home-mini-v3-bot-Cut.gltf');
      // useLoader(GLTFLoader, '/google-home-mini-v3-bot-Cut.gltf');
    var model = gltf.scene.rotation.x += 2;
    
  return (
    <>
      <primitive object={gltf.scene} scale={50} />
    </>
  );
};
  return (

      <Canvas>
        <Suspense fallback={null}>
          <Model />
          <OrbitControls />
          <Environment preset="studio" background />
        </Suspense>
          </Canvas>
    
  );
}