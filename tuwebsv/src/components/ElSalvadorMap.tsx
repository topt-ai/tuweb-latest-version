'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { EL_SALVADOR_PATH } from './elSalvadorPath';

/**
 * Real El Salvador outline (path extracted from the Canva SVG export and
 * inlined in elSalvadorPath.ts). Rendered as a stroke-only silhouette styled
 * with our CSS variables, with our own markers and label overlaid.
 *
 * SVG source: viewBox "0 0 375 374.99". The country shape lives roughly
 * inside the y ≈ [82, 293] band. Marker coordinates are calibrated against that.
 */

const COUNTRY_D = EL_SALVADOR_PATH;

// City positions in the SVG's own coordinate system (viewBox 375×375, country
// roughly spans y 82–293). These are eyeballed against the Canva outline and
// will need a small nudge once the real silhouette renders.
const CITIES = [
  { id: 'santa-ana',    label: 'Santa Ana',    x:  95, y: 160 },
  { id: 'santa-tecla',  label: 'Santa Tecla',  x: 170, y: 195 },
  { id: 'san-salvador', label: 'San Salvador', x: 188, y: 180, active: true },
  { id: 'la-libertad',  label: 'La Libertad',  x: 180, y: 232 },
  { id: 'san-miguel',   label: 'San Miguel',   x: 280, y: 200 },
];

export default function ElSalvadorMap() {
  const pathRef = useRef<SVGPathElement>(null);
  const markersRef = useRef<SVGGElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const [labelPos, setLabelPos] = useState<{ left: string; top: string } | null>(null);

  useEffect(() => {
    const path = pathRef.current;
    const markers = markersRef.current;
    const label = labelRef.current;
    if (!path) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(markers?.children || [], { opacity: 0, scale: 0.4, transformOrigin: 'center' });
    if (label) gsap.set(label, { opacity: 0, y: 6 });

    // Anchor the label to the active marker via the cropped viewBox.
    const active = CITIES.find((c) => c.active);
    if (active) {
      // viewBox is "0 78 375 230" → width 375, height 230, y-offset 78.
      const left = `${(active.x / 375) * 100}%`;
      const top = `${((active.y - 78 + 18) / 230) * 100}%`;
      setLabelPos({ left, top });
    }

    const tl = gsap.timeline({ delay: 0.45 });
    tl.to(path, { strokeDashoffset: 0, duration: 1.8, ease: 'power2.out' });
    if (markers) {
      tl.to(markers.children, { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out' }, '-=0.4');
    }
    if (label) {
      tl.to(label, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2');
    }
  }, []);

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 78 375 230"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        aria-hidden="true"
      >
        {COUNTRY_D && (
          <path
            ref={pathRef}
            d={COUNTRY_D}
            fill="none"
            stroke="var(--border)"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
          />
        )}
        <g ref={markersRef}>
          {CITIES.map((c) =>
            c.active ? (
              <g key={c.id}>
                <circle cx={c.x} cy={c.y} r={9} fill="var(--accent)" opacity="0.18" />
                <circle cx={c.x} cy={c.y} r={3.5} fill="var(--accent)" className="pulse-marker" />
                <circle cx={c.x} cy={c.y} r={3.5} fill="var(--accent)" />
              </g>
            ) : (
              <circle key={c.id} cx={c.x} cy={c.y} r={2} fill="var(--muted)" opacity="0.6" />
            )
          )}
        </g>
      </svg>
      {labelPos && (
        <div
          ref={labelRef}
          className="absolute pointer-events-none -translate-x-1/2"
          style={labelPos}
        >
          <div className="font-mono text-[10px] tracking-[0.14em] text-[var(--accent)] uppercase whitespace-nowrap">
            #1 en búsquedas locales
          </div>
        </div>
      )}
    </div>
  );
}
