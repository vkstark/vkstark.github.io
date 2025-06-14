import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { 
  useGLTF, 
  Environment, 
  Float, 
  PresentationControls, 
  ContactShadows,
  Text3D,
  MeshTransmissionMaterial
} from '@react-three/drei';
import * as THREE from 'three';

function Robot(props: any) {
  const meshRef = useRef<THREE.Mesh>(null);
  const leftEyeRef = useRef<THREE.Mesh>(null);
  const rightEyeRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const { camera } = useThree();
  
  // Track mouse position
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Convert screen coordinates to normalized device coordinates (-1 to +1)
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      });
    };
    
    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Gentle idle animation
      meshRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
    
    // Make eyes follow mouse cursor
    if (leftEyeRef.current && rightEyeRef.current) {
      // Calculate eye rotation based on mouse position
      // Limit the rotation to a reasonable range
      const maxRotation = 0.3;
      leftEyeRef.current.rotation.x = THREE.MathUtils.lerp(
        leftEyeRef.current.rotation.x,
        -mousePosition.y * maxRotation,
        0.1
      );
      leftEyeRef.current.rotation.y = THREE.MathUtils.lerp(
        leftEyeRef.current.rotation.y,
        mousePosition.x * maxRotation,
        0.1
      );
      
      rightEyeRef.current.rotation.x = THREE.MathUtils.lerp(
        rightEyeRef.current.rotation.x,
        -mousePosition.y * maxRotation,
        0.1
      );
      rightEyeRef.current.rotation.y = THREE.MathUtils.lerp(
        rightEyeRef.current.rotation.y,
        mousePosition.x * maxRotation,
        0.1
      );
    }
  });
  
  // Create a simple robot model using basic 3D shapes
  return (
    <group {...props} dispose={null}>
      {/* Robot Head */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        scale={hovered ? 1.1 : 1}
      >
        {/* Head */}
        <mesh position={[0, 0.5, 0]}>
          <boxGeometry args={[1, 0.8, 0.9]} />
          <MeshTransmissionMaterial
            backside
            samples={10}
            thickness={0.5}
            chromaticAberration={0.5}
            anisotropy={0.5}
            distortion={0.7}
            distortionScale={0.3}
            temporalDistortion={0.1}
            iridescence={1}
            iridescenceIOR={1}
            iridescenceThicknessRange={[0, 1400]}
            color={hovered ? "#4a9ff5" : "#2080ff"}
          />
        </mesh>
        
        {/* Eyes */}
        <mesh 
          ref={leftEyeRef}
          position={[-0.2, 0.6, 0.46]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial emissive="#ff0000" emissiveIntensity={hovered ? 3 : 1} />
        </mesh>
        <mesh 
          ref={rightEyeRef}
          position={[0.2, 0.6, 0.46]}
        >
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial emissive="#ff0000" emissiveIntensity={hovered ? 3 : 1} />
        </mesh>
        
        {/* Antenna */}
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3, 16]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        <mesh position={[0, 1.2, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial emissive="#ff0000" emissiveIntensity={2} />
        </mesh>
        
        {/* Body */}
        <mesh position={[0, -0.3, 0]}>
          <boxGeometry args={[1.2, 1, 0.7]} />
          <meshStandardMaterial color="#1e293b" metalness={0.8} roughness={0.2} />
        </mesh>
        
        {/* Arms */}
        <mesh position={[0.7, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        <mesh position={[-0.7, -0.3, 0]}>
          <cylinderGeometry args={[0.1, 0.1, 0.8, 16]} rotation={[0, 0, Math.PI / 2]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        
        {/* Circuit Details */}
        <mesh position={[0, -0.3, 0.36]}>
          <planeGeometry args={[0.8, 0.4]} />
          <meshStandardMaterial 
            emissive={hovered ? "#4a9ff5" : "#2080ff"}
            emissiveIntensity={hovered ? 3 : 1}
            transparent
            opacity={0.9}
          />
        </mesh>
      </mesh>
      
      {/* AI Text */}
      <Float floatIntensity={0.5} rotationIntensity={0.2} speed={2}>
        <Text3D
          font="/fonts/Inter_Bold.json"
          position={[-1.2, -1.4, 0]}
          rotation={[0, 0, 0]}
          size={0.4}
          height={0.1}
          curveSegments={12}
        >
          AI
          <meshStandardMaterial 
            color={hovered ? "#4a9ff5" : "#2080ff"} 
            emissive={hovered ? "#4a9ff5" : "#2080ff"}
            emissiveIntensity={0.8}
          />
        </Text3D>
      </Float>
    </group>
  );
}

const RobotScene = () => {
  // Mockup loading font to prevent errors with Text3D
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="h-[500px] w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.4} />
        <spotLight 
          position={[10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={1} 
          castShadow 
        />
        <PresentationControls
          global
          rotation={[0, 0, 0]}
          polar={[-Math.PI / 4, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
          // Prevent disappearing by setting proper constraints
          enabled={true}  // Keep controls enabled
          cursor={false}  // Don't change cursor on hover
        >
          <Robot position={[0, 0, 0]} scale={1.3} />
        </PresentationControls>
        <ContactShadows 
          position={[0, -1.5, 0]} 
          opacity={0.4} 
          scale={5} 
          blur={2.4} 
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};

export default RobotScene;
