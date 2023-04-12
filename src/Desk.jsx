import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { PerspectiveCamera, useTexture } from "@react-three/drei";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export function Desk() {
  const meshRef = useRef();
  const gltf = useLoader(GLTFLoader, "/models/Desk.gltf");
  const texture = useTexture("/models/desk.png");
  const cameraRef = useRef();

  const [cameraPosition, setCameraPosition] = useState([0, 0, 6]);
  const [cameraRotation, setCameraRotation] = useState([0, 0, 0]);

  const handleCameraChange = (event) => {
    setCameraPosition(event.camera.position.toArray());
    setCameraRotation(event.camera.rotation.toArray());
  };

  // useFrame((state, delta) => {
  //   meshRef.current.rotation.y += 0.5 * delta;
  // });

  useEffect(() => {
    console.log(cameraRef.current.position);
    console.log(cameraRef.current.rotation);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={1} />
      <PerspectiveCamera
        ref={cameraRef}
        makeDefault
        position={cameraPosition}
        rotation={cameraRotation}
        aspect={1200 / 600}
        radius={(1200 + 600) / 4}
        fov={30}
      />
      <OrbitControls
        args={[1, 0, 0]}
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        position={cameraPosition}
        onCameraChange={handleCameraChange}
        // position={[0, 0, 5]}
        // rotation={[0, Math.PI / 2, 0]}
      />

      {/* <mesh ref={meshRef}> */}
      <mesh>
        <bufferGeometry attach="geometry" {...gltf.nodes.desk.geometry} />
        <meshStandardMaterial map={texture} />
      </mesh>
      
    </>
  );
}
