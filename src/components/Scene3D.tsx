import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ─── WebGL Detection ─── */
function isWebGLAvailable() {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch {
    return false;
  }
}

/* ─── Shared Constants ─── */
const GOLD = new THREE.Color('#C9A84C');
const GOLD_DIM = new THREE.Color('#8B7535');
const CHARCOAL = new THREE.Color('#141414');

/* ─── Mouse Tracker (desktop parallax) ─── */
function useMouseParallax() {
  const mouse = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);
  return mouse;
}

/* ─── Scroll Tracker ─── */
function useScrollProgress() {
  const scroll = useRef(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scroll.current = max > 0 ? window.scrollY / max : 0;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scroll;
}

/* ─── Camera Rig (mouse + scroll parallax) ─── */
function CameraRig() {
  const { camera } = useThree();
  const mouse = useMouseParallax();
  const scroll = useScrollProgress();
  const target = useRef(new THREE.Vector3(0, 0, 12));

  useFrame(() => {
    const mx = mouse.current.x * 0.6;
    const my = -mouse.current.y * 0.4;
    const sy = -scroll.current * 4;
    target.current.set(mx, my + sy, 12);
    camera.position.lerp(target.current, 0.03);
    camera.lookAt(0, sy * 0.5, 0);
  });

  return null;
}

/* ─── Floating Octahedron (gold-rimmed geometric shape) ─── */
function FloatingOctahedron({ position, scale, speed = 0.2 }: { position: [number, number, number]; scale: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const geo = useMemo(() => new THREE.OctahedronGeometry(1, 0), []);
  const edgeGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * speed;
      meshRef.current.rotation.x = t * speed * 0.6;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.y = t * speed;
      edgesRef.current.rotation.x = t * speed * 0.6;
    }
  });

  return (
    <group position={position} scale={scale}>
      <mesh ref={meshRef} geometry={geo}>
        <meshStandardMaterial color="#0e0e0e" metalness={0.9} roughness={0.35} transparent opacity={0.4} />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edgeGeo}>
        <lineBasicMaterial color={GOLD} transparent opacity={0.6} />
      </lineSegments>
    </group>
  );
}

/* ─── Floating Icosahedron ─── */
function FloatingIcosahedron({ position, scale, speed = 0.15 }: { position: [number, number, number]; scale: number; speed?: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1, 1), []);
  const edgeGeo = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.y = t * speed;
      meshRef.current.rotation.z = Math.sin(t * 0.3) * 0.15;
      meshRef.current.position.y = position[1] + Math.sin(t * 0.4) * 0.3;
    }
    if (edgesRef.current) {
      edgesRef.current.rotation.copy(meshRef.current!.rotation);
      edgesRef.current.position.copy(meshRef.current!.position);
    }
  });

  return (
    <group scale={scale}>
      <mesh ref={meshRef} position={position} geometry={geo}>
        <meshStandardMaterial color="#111" metalness={0.95} roughness={0.25} transparent opacity={0.35} />
      </mesh>
      <lineSegments ref={edgesRef} position={position} geometry={edgeGeo}>
        <lineBasicMaterial color={GOLD_DIM} transparent opacity={0.45} />
      </lineSegments>
    </group>
  );
}

/* ─── Orbiting Ring ─── */
function OrbitingRing({ radius, y, z, speed, tilt }: { radius: number; y: number; z: number; speed: number; tilt: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * speed;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, y, z]} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.02, 8, 80]} />
      <meshStandardMaterial
        color={GOLD_DIM}
        emissive={GOLD_DIM}
        emissiveIntensity={0.3}
        metalness={1}
        roughness={0.1}
        transparent
        opacity={0.3}
      />
    </mesh>
  );
}

/* ─── DNA Helix (growth spiral) ─── */
function HelixSpiral() {
  const groupRef = useRef<THREE.Group>(null);

  const { spheres, connections } = useMemo(() => {
    const sph: { pos: THREE.Vector3; strand: number }[] = [];
    const conn: Float32Array[] = [];
    const count = 30;
    for (let i = 0; i < count; i++) {
      const t = i / count * Math.PI * 4;
      const y = -6 + (i / count) * 12;
      const r = 1.8;
      const a = new THREE.Vector3(Math.cos(t) * r, y, -10 + Math.sin(t) * r);
      const b = new THREE.Vector3(Math.cos(t + Math.PI) * r, y, -10 + Math.sin(t + Math.PI) * r);
      sph.push({ pos: a, strand: 0 }, { pos: b, strand: 1 });
      if (i % 3 === 0) {
        conn.push(new Float32Array([a.x, a.y, a.z, b.x, b.y, b.z]));
      }
    }
    return { spheres: sph, connections: conn };
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.06;
    }
  });

  const connLines = useMemo(() => {
    return connections.map((posArr) => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.BufferAttribute(posArr, 3));
      const mat = new THREE.LineBasicMaterial({ color: GOLD_DIM, transparent: true, opacity: 0.15 });
      return new THREE.Line(geo, mat);
    });
  }, [connections]);

  return (
    <group ref={groupRef} position={[7, 0, 0]}>
      {spheres.map((s, i) => (
        <mesh key={i} position={s.pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            color={s.strand === 0 ? GOLD : GOLD_DIM}
            emissive={GOLD_DIM}
            emissiveIntensity={0.3}
            metalness={1}
            roughness={0.2}
          />
        </mesh>
      ))}
      {connLines.map((lineObj, i) => (
        <primitive key={`c-${i}`} object={lineObj} />
      ))}
    </group>
  );
}

/* ─── Rising Bars (Growth Chart) ─── */
function RisingBars() {
  const bars = useMemo(() => {
    const items: { x: number; z: number; maxH: number; phase: number }[] = [];
    for (let i = 0; i < 12; i++) {
      items.push({
        x: -6 + i * 1.1,
        z: -8 + Math.random() * -4,
        maxH: 1.5 + Math.random() * 3.5,
        phase: i * 0.4,
      });
    }
    return items;
  }, []);

  return (
    <group position={[0, -4, -6]}>
      {bars.map((bar, i) => (
        <RisingBar key={i} {...bar} />
      ))}
    </group>
  );
}

function RisingBar({ x, z, maxH, phase }: { x: number; z: number; maxH: number; phase: number }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.LineSegments>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const h = maxH * (0.4 + 0.6 * Math.abs(Math.sin(t * 0.3 + phase)));
    if (meshRef.current) {
      meshRef.current.scale.y = h;
      meshRef.current.position.y = h / 2;
    }
    if (edgesRef.current) {
      edgesRef.current.scale.y = h;
      edgesRef.current.position.y = h / 2;
    }
  });

  const geo = useMemo(() => new THREE.BoxGeometry(0.4, 1, 0.4), []);
  const edges = useMemo(() => new THREE.EdgesGeometry(geo), [geo]);

  return (
    <group position={[x, 0, z]}>
      <mesh ref={meshRef} geometry={geo}>
        <meshStandardMaterial color={CHARCOAL} metalness={0.8} roughness={0.4} transparent opacity={0.6} />
      </mesh>
      <lineSegments ref={edgesRef} geometry={edges}>
        <lineBasicMaterial color={GOLD_DIM} transparent opacity={0.5} />
      </lineSegments>
    </group>
  );
}

/* ─── Particle Stream (leads/conversions flow) ─── */
function ParticleStream({ count = 200 }) {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, velocities, phases } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count);
    const ph = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16 - 4;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16 - 4;
      vel[i] = 0.005 + Math.random() * 0.015;
      ph[i] = Math.random() * Math.PI * 2;
    }
    return { positions: pos, velocities: vel, phases: ph };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;
    const arr = posAttr.array as Float32Array;
    const t = state.clock.elapsedTime;
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 1] += velocities[i];
      arr[i * 3] += Math.sin(t * 0.5 + phases[i]) * 0.003;
      arr[i * 3 + 2] += Math.cos(t * 0.3 + phases[i]) * 0.002;
      if (arr[i * 3 + 1] > 8) {
        arr[i * 3 + 1] = -8;
        arr[i * 3] = (Math.random() - 0.5) * 20;
        arr[i * 3 + 2] = (Math.random() - 0.5) * 16 - 4;
      }
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial color={GOLD} size={0.04} transparent opacity={0.7} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
    </points>
  );
}

/* ─── Network Nodes (connected by gold lines) ─── */
function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < 14; i++) {
      pts.push(new THREE.Vector3(
        (Math.random() - 0.5) * 14,
        (Math.random() - 0.5) * 10,
        -6 + Math.random() * -8,
      ));
    }
    return pts;
  }, []);

  const connections = useMemo(() => {
    const lines: [number, number][] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 6) lines.push([i, j]);
      }
    }
    return lines;
  }, [nodes]);

  const linePositions = useMemo(() => {
    const arr = new Float32Array(connections.length * 6);
    connections.forEach(([a, b], idx) => {
      arr[idx * 6] = nodes[a].x; arr[idx * 6 + 1] = nodes[a].y; arr[idx * 6 + 2] = nodes[a].z;
      arr[idx * 6 + 3] = nodes[b].x; arr[idx * 6 + 4] = nodes[b].y; arr[idx * 6 + 5] = nodes[b].z;
    });
    return arr;
  }, [connections, nodes]);

  useFrame((state) => {
    if (groupRef.current) groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
  });

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.08, 12, 12]} />
          <meshStandardMaterial color={GOLD} emissive={GOLD_DIM} emissiveIntensity={0.4} metalness={1} roughness={0.2} />
        </mesh>
      ))}
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[linePositions, 3]} count={connections.length * 2} />
        </bufferGeometry>
        <lineBasicMaterial color={GOLD_DIM} transparent opacity={0.2} />
      </lineSegments>
    </group>
  );
}

/* ─── Flowing Gold Lines (traffic/funnels) ─── */
function FlowingLines() {
  const groupRef = useRef<THREE.Group>(null);

  const curves = useMemo(() => {
    return Array.from({ length: 6 }, (_, i) => {
      const yBase = -3 + i * 1.8;
      const points = [];
      for (let t = 0; t <= 1; t += 0.05) {
        points.push(new THREE.Vector3(-10 + t * 20, yBase + Math.sin(t * Math.PI * 2 + i) * 1.2, -8 - i * 0.8));
      }
      return new THREE.CatmullRomCurve3(points);
    });
  }, []);

  const lines = useMemo(() => {
    return curves.map((curve) => {
      const pts = curve.getPoints(60);
      const geo = new THREE.BufferGeometry().setFromPoints(pts);
      const mat = new THREE.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending });
      return new THREE.Line(geo, mat);
    });
  }, [curves]);

  useFrame((state) => {
    lines.forEach((lineObj, i) => {
      (lineObj.material as THREE.LineBasicMaterial).opacity = 0.08 + 0.08 * Math.sin(state.clock.elapsedTime * 0.4 + i * 0.8);
    });
  });

  return (
    <group ref={groupRef}>
      {lines.map((lineObj, i) => (
        <primitive key={i} object={lineObj} />
      ))}
    </group>
  );
}

/* ─── Wireframe Grid ─── */
function WireframeGrid() {
  const meshRef = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (meshRef.current) meshRef.current.rotation.x = -Math.PI / 3 + Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
  });

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 3, 0, 0]} position={[0, -5, -10]}>
      <planeGeometry args={[40, 40, 40, 40]} />
      <meshStandardMaterial color={CHARCOAL} wireframe transparent opacity={0.06} emissive={GOLD_DIM} emissiveIntensity={0.08} />
    </mesh>
  );
}

/* ─── Lighting ─── */
function Lights() {
  return (
    <>
      <ambientLight intensity={0.08} />
      <pointLight position={[6, 6, 4]} intensity={0.6} color="#C9A84C" distance={25} decay={2} />
      <pointLight position={[-6, 3, -6]} intensity={0.3} color="#8B7535" distance={20} decay={2} />
      <pointLight position={[0, -4, -8]} intensity={0.2} color="#C9A84C" distance={15} decay={2} />
      <spotLight position={[0, 12, 2]} angle={0.4} penumbra={1} intensity={0.4} color="#C9A84C" distance={30} decay={2} />
    </>
  );
}

/* ─── Fallback ─── */
function FallbackBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-background">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 30% 20%, hsl(var(--gold)) 0%, transparent 50%), radial-gradient(circle at 70% 80%, hsl(var(--gold)) 0%, transparent 50%)',
      }} />
    </div>
  );
}

/* ─── Mobile Detection ─── */
function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check, { passive: true });
    return () => window.removeEventListener('resize', check);
  }, []);
  return mobile;
}

/* ─── Scene Content ─── */
function SceneContent({ isMobile }: { isMobile: boolean }) {
  return (
    <>
      <color attach="background" args={['#0a0a0a']} />
      <fog attach="fog" args={['#0a0a0a', 10, 30]} />
      <Lights />
      <CameraRig />
      <WireframeGrid />
      <ParticleStream count={isMobile ? 80 : 250} />
      <FlowingLines />
      {!isMobile && (
        <>
          <RisingBars />
          <NetworkNodes />
          <HelixSpiral />
          <FloatingOctahedron position={[-5, 3, -7]} scale={0.7} speed={0.12} />
          <FloatingOctahedron position={[4, -2, -9]} scale={0.5} speed={0.18} />
          <FloatingIcosahedron position={[-3, -1, -6]} scale={0.6} speed={0.1} />
          <FloatingIcosahedron position={[6, 2, -11]} scale={0.8} speed={0.08} />
          <OrbitingRing radius={3} y={1} z={-8} speed={0.04} tilt={1.2} />
          <OrbitingRing radius={4.5} y={-2} z={-12} speed={-0.03} tilt={0.8} />
        </>
      )}
      {isMobile && (
        <>
          <FloatingOctahedron position={[-3, 2, -7]} scale={0.5} speed={0.1} />
          <FloatingIcosahedron position={[3, -1, -8]} scale={0.5} speed={0.08} />
        </>
      )}
    </>
  );
}

/* ─── Main Export ─── */
export default function Scene3D() {
  const [webglSupported, setWebglSupported] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    setWebglSupported(isWebGLAvailable());
  }, []);

  if (!webglSupported) return <FallbackBackground />;

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 50 }}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        gl={{ antialias: !isMobile, alpha: true, powerPreference: 'high-performance' }}
        fallback={<FallbackBackground />}
      >
        <SceneContent isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
