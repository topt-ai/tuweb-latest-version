'use client';

import { useEffect, useState } from 'react';

const LINES = [
  '> Búsqueda "ingenieros y arquitectos san salvador" — Posición 2',
  '> Búsqueda "abogado santa tecla" — Posición 1',
  '> Perfil de Google actualizado',
  '> Nueva reseña recibida — 5 estrellas',
];

const TYPE_MS = 28;
const HOLD_MS = 1600;
const ERASE_MS = 14;

export default function LiveRankingFeed() {
  const [lineIdx, setLineIdx] = useState(0);
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<'type' | 'hold' | 'erase'>('type');

  useEffect(() => {
    const line = LINES[lineIdx];
    let t: ReturnType<typeof setTimeout>;

    if (phase === 'type') {
      if (chars < line.length) {
        t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      } else {
        t = setTimeout(() => setPhase('hold'), 0);
      }
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('erase'), HOLD_MS);
    } else {
      if (chars > 0) {
        t = setTimeout(() => setChars((c) => c - 1), ERASE_MS);
      } else {
        setLineIdx((i) => (i + 1) % LINES.length);
        setPhase('type');
      }
    }
    return () => clearTimeout(t);
  }, [chars, phase, lineIdx]);

  return (
    <div className="font-mono text-[13px] text-[var(--accent)] leading-[1.7] min-h-[24px]">
      <span>{LINES[lineIdx].slice(0, chars)}</span>
      <span className="caret inline-block w-[8px] h-[14px] -mb-[2px] ml-[2px] bg-[var(--accent)] align-middle" />
    </div>
  );
}
