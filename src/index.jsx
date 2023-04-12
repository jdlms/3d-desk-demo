import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Desk } from "./Desk";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";


const App = () => {
  return (
    <div>
      <Canvas style={{ height: "400px" }}>
     
        <Desk />
      </Canvas>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// function TestCamHelper() {
//   const [ref, camera] = useResource()
//   return (
//    <>
//     <perspectiveCamera
//      ref={ref}
//      aspect={1200 / 600}
//      radius={(1200 + 600) / 4}
//      fov={45}
//      position={[0, 0, 2]}
//      onUpdate={self => self.updateProjectionMatrix()}
//     />
//     {camera && <cameraHelper args={camera} />}
//    </>
//   )
//  }
