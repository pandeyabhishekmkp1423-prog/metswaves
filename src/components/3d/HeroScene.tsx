import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, OrbitControls, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function NeuralCore({ mobile }: { mobile: boolean }) {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const nodes = useMemo(
    () =>
      Array.from({ length: mobile ? 16 : 30 }, (_, index) => {
        const phi = Math.acos(-1 + (2 * index) / (mobile ? 16 : 30));
        const theta = Math.sqrt((mobile ? 16 : 30) * Math.PI) * phi;
        const radius = mobile ? 1.55 : 1.9;

        return new THREE.Vector3(
          radius * Math.cos(theta) * Math.sin(phi),
          radius * Math.sin(theta) * Math.sin(phi),
          radius * Math.cos(phi),
        );
      }),
    [mobile],
  );

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions: number[] = [];

    nodes.forEach((node, index) => {
      const next = nodes[(index + 5) % nodes.length];
      positions.push(node.x, node.y, node.z, next.x, next.y, next.z);
    });

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);

  const pointPositions = useMemo(() => {
    const positions = new Float32Array(nodes.length * 3);
    nodes.forEach((node, index) => {
      positions[index * 3] = node.x;
      positions[index * 3 + 1] = node.y;
      positions[index * 3 + 2] = node.z;
    });
    return positions;
  }, [nodes]);

  useFrame(({ mouse, clock }) => {
    if (!group.current || !shell.current) return;

    group.current.rotation.y = clock.elapsedTime * 0.18;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.35, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -mouse.x * 0.25, 0.05);

    shell.current.rotation.x = clock.elapsedTime * 0.22;
    shell.current.rotation.y = clock.elapsedTime * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh ref={shell}>
          <icosahedronGeometry args={[mobile ? 1.2 : 1.45, 2]} />
          <MeshTransmissionMaterial
            thickness={0.4}
            roughness={0.1}
            transmission={1}
            ior={1.12}
            chromaticAberration={0.03}
            backside
            color="#4f8cff"
          />
        </mesh>
      </Float>

      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial color="#60a5fa" transparent opacity={0.4} />
      </lineSegments>

      <Points positions={pointPositions} stride={3}>
        <PointMaterial color="#93c5fd" transparent opacity={0.9} size={0.07} sizeAttenuation depthWrite={false} />
      </Points>
    </group>
  );
}

export default function HeroScene({ mobile = false }: { mobile?: boolean }) {
  return (
    <Canvas camera={{ position: [0, 0, mobile ? 6.2 : 5.6], fov: mobile ? 42 : 38 }} dpr={[1, 1.8]}>
      <color attach="background" args={['#071327']} />
      <fog attach="fog" args={['#071327', 7, 15]} />
      <ambientLight intensity={0.8} color="#8bb7ff" />
      <directionalLight position={[3, 4, 3]} intensity={2.4} color="#6ea7ff" />
      <pointLight position={[-4, -2, 4]} intensity={14} distance={10} color="#3b82f6" />
      <pointLight position={[4, 2, -2]} intensity={12} distance={10} color="#60a5fa" />
      <NeuralCore mobile={mobile} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate={false} />
    </Canvas>
  );
}
