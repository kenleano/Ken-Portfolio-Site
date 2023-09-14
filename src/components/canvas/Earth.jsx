import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";


import CanvasLoader from "../Loader";

const Earth = () => {
  const small = 0.15;
  const earth = useGLTF("./space/scene.gltf");

  return (
    <primitive object={earth.scene} scale={small} position-y={0} position-x={0} rotation-y={0} rotation-x={0} rotation-z={0} />
  );
};

const EarthCanvas = () => {
  return (
    <Canvas 
    shadows
    frameloop='demand'
    dpr={[1, 2]}
    gl={{ preserveDrawingBuffer: true }}
    camera={{
      fov: 45,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />

        {/* Replace Directional Light with Ambient Light */}
        <directionalLight
          position={[0, -10, -5]} // Set light position
          intensity={5} // Set the light intensity (0-1)
          color="white" // Set the light color
        />
        <directionalLight
          position={[4, 10, 5]} // Set light position
          intensity={3} // Set the light intensity (0-1)
          color="white" // Set the light color
        />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
