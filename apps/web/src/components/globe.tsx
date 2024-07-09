'use client';

import createGlobe, { type Marker } from 'cobe';
import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import { getEmployees, IEmployee } from "~/appwrite/employeesAPIFunc";

export const Globe = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<null | number>(null);
  const pointerInteractionMovement = useRef(0);
  const locationToAngles = (lat:number, long:number) => {
    return [Math.PI - ((long * Math.PI) / 180 - Math.PI / 2), (lat * Math.PI) / 180]
  }

  function renderEmployees(){
    const members = getEmployees()

    if(!members || !members.length){
        return;
    }
    // -90 to 90 for latitude and -180 to 180 for longitude.
  
    const memberList = members.map((member:IEmployee)=>{
        const ranLat = Math.round(Math.random() * (90-(-90)) + (-90));
        const ranLon = Math.round(Math.random() * (180-(-180)) + (-180));
  
        return(
            <button key={member.employee_name} className="text-white" onClick = {()=>focusRef.current = locationToAngles(ranLat, ranLon)}>
                {member.employee_name}
            </button>
        )
    });
  
    return(
        <section>
            {memberList}
        </section>
    )
  }

  const [{ r }, api] = useSpring(() => ({
    r: 0,
    config: {
      mass: 1,
      tension: 280,
      friction: 40,
      precision: 0.001,
    },
  }));

  const markers: Marker[] = [
    { location: [37.7595, -122.4367], size: 0.3},
    { location: [40.7128, -74.006], size: 0.1 },
    { location: [20.7128, -74.006], size: 0.1 },
    { location: [35.2100, 129.0689], size: 0.1 },
  ];

  const focusRef = useRef([0, 0]);

  useEffect(() => {
    let width = 0;
    let currentPhi = 0;
    let currentTheta = 0;
    const doublePi = Math.PI * 2;
    const onResize = () =>
      canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) {
      return;
    }

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 5.7,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [1,1,3.4],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers,
      onRender: (state) => {
        state.phi = currentPhi
        state.theta = currentTheta

        const [focusPhi, focusTheta] = focusRef.current
        const distPositive = (focusPhi - currentPhi + doublePi) % doublePi;
        const distNegative = (currentPhi - focusPhi + doublePi) % doublePi;

         // Control the speed
         if (distPositive < distNegative) {
          currentPhi += distPositive * 0.08
        } else {
          currentPhi -= distNegative * 0.08
        }
        currentTheta = currentTheta * 0.92 + focusTheta * 0.08
        state.width = width * 2
        state.height = width * 2
      },
    });

    setTimeout(() => (canvasRef.current!.style.opacity = '1'));
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="block">
      <canvas
        ref={canvasRef}
        className="w-[600px] h-[600px] max-w-full aspect-[1]"
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
      {renderEmployees()}
    </div>
  );
};
