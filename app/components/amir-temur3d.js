"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMemo } from "react";

export default function AmirTemur3D() {
  const { scene } = useGLTF("/amir_temur_statue.glb"); // Model joylashgan joy
  const optimizedScene = useMemo(() => scene, [scene]);

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Amir Temur 3D Haykali
      </h2>
      <div className="max-w-4xl mx-auto h-96">
        <Canvas camera={{ position: [0, 4, 10] }}>
          {" "}
          {/* Kamerani uzoqroqqa qo'ydik */}
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <primitive object={optimizedScene} scale={1} />{" "}
          {/* Modelni biroz kichikroq qildik */}
          <OrbitControls
            enableZoom={true}
            enableDamping={true}
            dampingFactor={0.1}
            rotateSpeed={0.7}
          />
        </Canvas>
      </div>
    </div>
  );
}
