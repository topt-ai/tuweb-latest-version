import { useEffect, useRef, type RefObject } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/**
 * Wire Lenis smooth scroll once. Idempotent across re-mounts in StrictMode:
 * each effect run creates its own Lenis instance and tears it down cleanly.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, easing: (t) => 1 - Math.pow(1 - t, 3) });
    let rafId = 0;
    const raf = (time: number) => { lenis.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);
    lenis.on('scroll', ScrollTrigger.update);
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); };
  }, []);
}

/**
 * Animate every `.scroll-reveal` element inside `rootRef` into view.
 * Uses `gsap.set` + `gsap.to` (not `from`) so StrictMode double-mount can't
 * trap elements at `opacity: 0` by recording it as the natural state.
 * Pass `rootRef` so `gsap.context` scopes everything correctly.
 */
export function useScrollReveal(_rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];
    document.querySelectorAll<HTMLElement>('.scroll-reveal').forEach((el) => {
      tweens.push(
        gsap.fromTo(
          el,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          }
        )
      );
    });
    return () => {
      tweens.forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);
}

/** Convenience: a stable root ref typed for use with the hooks above. */
export function useRootRef() {
  return useRef<HTMLDivElement>(null);
}
