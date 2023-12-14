import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Desk } from "./Desk";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DoubleSide } from "three";

const radius = 5; // Radius of the circle
const segments = 32;

export function App() {
  return (
    <div className="App">
      <Canvas
        style={{
          backgroundColor: "#1c1c2d",
          marginTop: "50px",
          height: "600px",
        }}
        camera={{ position: [0, 7, -10], fov: 140 }}
      >
        <ambientLight intensity={0.8} />
        <pointLight position={[0, 0, 10]} />
        <Suspense fallback={null}>
          <Desk />
          {/* <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <planeBufferGeometry args={[10, 10]} />
            <meshStandardMaterial color="#d3d3d3" />
          </mesh> */}
          {/* <mesh position={[0, 0, 0]} rotation={[0, 0, 0]}>
            <circleBufferGeometry
              args={[radius, segments]}
            />
            <meshStandardMaterial
              color={"#ff0000"}
              side={DoubleSide}
            />
          </mesh> */}
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 3}
          autoRotate={true}
          autoRotateSpeed={12.0}
          target={[0.8, -1.5, 0]}
        />
      </Canvas>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
);
