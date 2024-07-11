'use client';

import { Canvas, Object3DNode, extend } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import ThreeGlobe from 'three-globe';
import { OrbitControls } from '@react-three/drei';

extend({ ThreeGlobe });

declare module '@react-three/fiber' {
  interface ThreeElements {
    threeGlobe: Object3DNode<ThreeGlobe, typeof ThreeGlobe>;
  }
}

export const Globe = () => {
  const globeRef = useRef<ThreeGlobe>(null);

  const N = 300;
  const gData = [...Array(N)].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: Math.random() / 3,
    color: ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)],
  }));

  useEffect(() => {
    if (globeRef.current) {
      console.log('Globe instance:', globeRef.current);

      globeRef.current
        .globeImageUrl(
          '//unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
        )
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .onGlobeReady(() => {
          console.log('Globe images loaded');
        });

      setTimeout(() => {
        gData.forEach((d) => (d.size = Math.random()));
        globeRef.current?.pointsData(gData);
      }, 4000);
    }
  }, [globeRef]);

  return (
    <div className="w-[100vh] h-[100vh] absolute top-0">
      <Canvas
        camera={{
          position: [0, 0, 400],
          fov: 40,
          near: 1,
          far: 600,
        }}
      >
        <directionalLight
          color="orange"
          intensity={0.6 * Math.PI}
          position={[100, 20, 500]}
          castShadow
        />

        <threeGlobe ref={globeRef} />

        <OrbitControls autoRotate enableZoom={false} />
      </Canvas>
    </div>
  );
};
