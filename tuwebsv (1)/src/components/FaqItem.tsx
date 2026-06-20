import { useEffect, useId, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import gsap from 'gsap';

type Props = { q: string; a: string };

export default function FaqItem({ q, a }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        height: isOpen ? 'auto' : 0,
        duration: 0.35,
        ease: 'power2.inOut',
      });
    }
  }, [isOpen]);

  return (
    <div className="scroll-reveal border-b border-[var(--border)] py-6">
      <button
        type="button"
        className="w-full flex items-center justify-between text-left gap-4"
        onClick={() => setIsOpen((v) => !v)}
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        <span className="font-sans font-normal text-[16px] text-[var(--text)]">{q}</span>
        <Plus
          className="text-[var(--muted)] shrink-0 transition-transform duration-300"
          style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
          size={18}
          aria-hidden="true"
        />
      </button>
      <div ref={contentRef} id={panelId} role="region" className="h-0 overflow-hidden">
        <p className="font-sans font-light text-[15px] text-[var(--muted)] pt-4 leading-[1.7]">
          {a}
        </p>
      </div>
    </div>
  );
}
