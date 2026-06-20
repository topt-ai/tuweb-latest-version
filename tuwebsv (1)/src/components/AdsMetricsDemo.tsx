'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Hero signature for /google-meta-ads — a small dashboard card showing
 * three live-ish metrics that animate on scroll into view. Matches the
 * "demonstrate, don't decorate" pattern used by the El Salvador map on
 * Home and the typing-code panel on Páginas Web.
 */
const METRICS = [
  { label: 'CPC promedio',  from: 0.78, to: 0.34, prefix: '$', decimals: 2, dir: 'down' as const },
  { label: 'Conversiones',  from: 0,    to: 127,  prefix: '',  decimals: 0, dir: 'up'   as const },
  { label: 'ROAS',          from: 1.0,  to: 4.2,  prefix: '',  suffix: 'x', decimals: 1, dir: 'up' as const },
];

type Metric = (typeof METRICS)[number] & { suffix?: string };

export default function AdsMetricsDemo() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const tweens: gsap.core.Tween[] = [];

    METRICS.forEach((m: Metric, i) => {
      const el = root.querySelector<HTMLElement>(`[data-metric="${i}"]`);
      if (!el) return;
      el.textContent = `${m.prefix ?? ''}${m.from.toFixed(m.decimals)}${m.suffix ?? ''}`;
      const obj = { v: m.from };
      tweens.push(
        gsap.to(obj, {
          v: m.to,
          duration: 1.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
          onUpdate: () => {
            el.textContent = `${m.prefix ?? ''}${obj.v.toFixed(m.decimals)}${m.suffix ?? ''}`;
          },
        })
      );
    });

    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="rounded-[12px] bg-[var(--surface)] border border-[var(--border)] p-6 w-full max-w-[300px]"
    >
      <div className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)] mb-5">
        Campaña en vivo
      </div>

      <div className="flex flex-col gap-5">
        {METRICS.map((m, i) => (
          <div key={m.label} className="flex items-baseline justify-between gap-4 border-b border-[var(--border)] pb-4 last:border-b-0 last:pb-0">
            <div className="font-sans font-light text-[12px] text-[var(--muted)]">{m.label}</div>
            <div
              data-metric={i}
              className="font-display font-bold text-[24px] leading-none text-[var(--accent)] tabular-nums"
            >
              {m.prefix ?? ''}{m.from.toFixed(m.decimals)}{(m as Metric).suffix ?? ''}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-2">
        <span className="status-pulse w-[8px] h-[8px] rounded-full bg-[var(--pulse)] shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
        <span className="font-sans font-light text-[12px] text-[var(--muted)]">Actualizado cada hora</span>
      </div>
    </div>
  );
}
