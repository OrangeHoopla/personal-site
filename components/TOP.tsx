'use client'
import { Canvas } from "@react-three/fiber";
import * as THREE from 'three'
import { ContactShadows, Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { LayerMaterial, Depth, Noise } from 'lamina'


export default function Top() {

  const Top = () => {
    const gltf = useGLTF('/google-home-mini-v3-bot-Cut.gltf');

    var model = gltf.scene.rotation.x += 2;
    
  return (
    <>
      <primitive object={gltf.scene} scale={50} />
    </>
  );
  };

  const Bottom = () => {
    const gltf = useGLTF('/google-home-mini-v2-top.gltf');

    var model = gltf.scene.rotation.x += 2;
    
  return (
    <>
      <primitive object={gltf.scene} scale={50} />
    </>
  );
  };
  


  return (

      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5] }}>
      <OrbitControls autoRotate minPolarAngle={Math.PI / 1.8} maxPolarAngle={Math.PI / 1.8} />
      <pointLight position={[10, 10, 5]} />
      <pointLight position={[-10, -10, -5]} />
      <ambientLight intensity={0.4} />
      <group position={[0, -1.5, 0]}>
        <Float position={[0, 2.15, 0]} speed={2} rotationIntensity={2} floatIntensity={2}>
          <mesh castShadow receiveShadow>
            {/* <Top /> */}
            <Top/>
            <meshStandardMaterial color="white" roughness={0.1} metalness={0.925} />
          </mesh>
        </Float>
        <ContactShadows scale={10} blur={3} opacity={0.25} far={10} />
      </group>

      {/* We're building a cube-mapped environment declaratively.
          Anything you put in here will be filmed (once) by a cubemap-camera
          and applied to the scenes environment, and optionally background. */}
      <Environment background resolution={64}>
        <Striplight position={[10, 2, 0]} scale={[1, 3, 10]} />
        <Striplight position={[-10, 2, 0]} scale={[1, 3, 10]} />
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <LayerMaterial color="#FF0000" side={THREE.BackSide}>
            {/* <Base color="blue" alpha={1} mode="normal" /> */}
            <Depth colorA="#00ffff" colorB="#ff8f00" alpha={0.5} mode="normal" near={0} far={300} origin={[100, 100, 100]} />
            <Noise mapping="local" type="cell" scale={0.5} mode="softlight" />
          </LayerMaterial>
        </mesh>
      </Environment>
    </Canvas>
    
  );
}



function Striplight(props: any) {
  return (
    <mesh {...props}>
      <boxGeometry />
      <meshBasicMaterial color="white" />
    </mesh>
  )
}