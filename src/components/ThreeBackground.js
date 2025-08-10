import React from "react";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

function ThreeBackground({ children }) {
  return (
    <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={2} />
        {/* You can add more 3D objects here for each section */}
      </Canvas>
      {children}
    </div>
  );
}

export default ThreeBackground;
