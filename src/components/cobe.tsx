'use client';

import createGlobe, { Marker } from 'cobe';
import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import { Employee } from '~/appwrite/get-employees';
import { timezones } from '~/lib/timezones';
import { useUserStore } from '~/state/user-store';

export const Cobe = ({ employees }: { employees: Employee[] }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const { activeTimezone } = useUserStore();

  const employeeTimezones = employees!
    .reduce((acc, employee) => {
      acc.push(employee.timezone);
      return acc;
    }, [] as string[])
    .map((tz) => {
      const timezone = timezones.find((timezone) => timezone.value === tz);
      return [timezone!.lat, timezone!.long];
    });

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const focusRef = useRef([0, 0]);

  const locationToAngles = (lat: number, long: number) => {
    return [
      Math.PI - ((long * Math.PI) / 180 - Math.PI / 2),
      (lat * Math.PI) / 180,
    ];
  };

  useEffect(() => {
    focusRef.current = locationToAngles(
      activeTimezone.lat,
      activeTimezone.long
    );
  }, [activeTimezone]);

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;

    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);

    onResize();

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 3,
      mapSamples: 32000,
      mapBrightness: 1.2,
      baseColor: [1, 1, 3.4],
      markerColor: [251 / 255, 200 / 255, 21 / 255],
      glowColor: [1.2, 1.2, 1.2],
      markers: employeeTimezones.map((location) => {
        return {
          location,
          size: 0.05,
        } as unknown as Marker;
      }),
      onRender: (state) => {
        state.phi = r.get();
        state.width = width * 2;
        state.height = width * 2;

        state.phi = currentPhi;
        state.theta = currentTheta;
        const [focusPhi, focusTheta] = focusRef.current;
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;

        if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08;
        } else {
          currentPhi -= distNegative * 0.08;
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
    setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="w-full max-w-4xl aspect-square m-auto absolute top-1/2 -translate-y-1/2">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab contain-layout contain-paint contain-size opacity-0 transition-opacity duration-1000 ease"
        onPointerDown={(e) => {
          pointerInteracting.current =
            e.clientX - pointerInteractionMovement.current;
          canvasRef.current!.style.cursor = 'grabbing';
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current!.style.cursor = 'grab';
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 200,
            });
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({
              r: delta / 100,
            });
          }
        }}
      />
    </div>
  );
};
