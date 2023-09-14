import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const CubeWithDecals = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const scaleImg = 2.5;
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={10} />
      <directionalLight position={[0, 0, 0.05]} />

      {/* Create a cube */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[3, 3, 3]}
         />{" "}
        {/* Use args for width, height, and depth */}
        <meshStandardMaterial color="#151030" flatShading />
        {/* Apply Decal to Each Face */}
        {/* Front */}
        <Decal
          position={[0, 0, 0.5]}
          rotation={[0, 0, 0]}
          scale={scaleImg}
          map={decal}
          flatShading
          uvScale={[1, 1]}
          uvOffset={[0, 0]}
        />
        {/* Back */}
        <Decal
          position={[0, 0, -0.5]}
          rotation={[0, 3, 0]}
          scale={scaleImg}
          map={decal}
          flatShading
          onBeforeCompile={(shader) => {
            // Modify the shader's fragment shader to flip vertically
            shader.fragmentShader = shader.fragmentShader.replace(
              'gl_FragColor = texture2D( map, vUv );',
              'gl_FragColor = texture2D( map, vec2(vUv.x, 1.0 - vUv.y) );'
            );
          }}
        />
        {/* Left */}
        <Decal
          position={[-0.5, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
          scale={scaleImg}
          map={decal}
          flatShading
          uvScale={[1, 1]}
          uvOffset={[0, 0]}
        />
        {/* Right  */}
        <Decal
        
          position={[0.5, 0, 0]}
          rotation={[0, Math.PI / 2, 0]}
          scale={scaleImg}
          map={decal}
          flatShading
          uvScale={[-1, 1]} // Mirror horizontally
          uvOffset={[1, 0]} // Adjust the offset as needed
        />
        {/* Top  */}
        <Decal
          position={[0, 0.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={scaleImg}
          map={decal}
          flatShading

        />
        {/* Bottom  */}
        <Decal
          position={[0, -0.5, 0]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={scaleImg}
          map={decal}
          flatShading
          uvScale={[1, 1]}
          uvOffset={[0, 0]}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas
    shadows
    frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          autoRotate={true}
        
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          autoRotateSpeed={5}
        />
        <CubeWithDecals imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
