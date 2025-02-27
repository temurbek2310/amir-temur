import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

export default function AmirTemur3D() {
  const { scene } = useGLTF("/amir_temur_statue.glb"); // Model joylashgan joy

  return (
    <div className="bg-gray-900 text-white py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">
        Amir Temur 3D Haykali
      </h2>
      <div className="max-w-4xl mx-auto max-h-96">
        <Canvas camera={{ position: [0, 2, 5] }}>
          <ambientLight intensity={1} />
          <directionalLight position={[5, 5, 5]} />
          <primitive object={scene} scale={1.5} />
          <OrbitControls enableZoom={true} />
        </Canvas>
      </div>
    </div>
  );
}
