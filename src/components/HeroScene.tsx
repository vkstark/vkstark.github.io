import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';

const AnimatedSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = clock.getElapsedTime() * 0.15;
      sphereRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });
  
  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]} position={[0, 0, 0]} scale={1.5}>
      <MeshDistortMaterial 
        color="#3b82f6" 
        attach="material" 
        distort={0.5} 
        speed={2} 
        roughness={0.2} 
        metalness={0.8}
      />
    </Sphere>
  );
};

const HeroScene = () => {
  return (
    <div className="absolute inset-0 z-0 opacity-70">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default HeroScene;
