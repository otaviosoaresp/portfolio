import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader/Loader";
import * as THREE from "three";

interface BallProps {
  imgUrl: string;
}

const Ball: React.FC<BallProps> = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  const ballRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ballRef.current) {
      ballRef.current.rotation.x = Math.sin(clock.getElapsedTime()) * 0.15;
      ballRef.current.rotation.y = Math.cos(clock.getElapsedTime()) * 0.15;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75} ref={ballRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#888888'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  icon: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
