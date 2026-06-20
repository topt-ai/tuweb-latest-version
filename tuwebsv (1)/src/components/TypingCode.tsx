import { useEffect, useState } from 'react';

/**
 * Typewriter-style code block that types a snippet forward, holds, then
 * erases it, and loops. Transparent container, JetBrains Mono, cobalt caret.
 *
 * Used as the hero signature on /paginas-web — reads as "we ship the actual
 * code, not a template wizard" without exposing the stack name verbatim.
 */
const SNIPPET = `const sitio = await tuweb.build({
  diseño:    'a tu medida',
  velocidad: 'menos de 2 segundos',
  database:  'incluida',
  seo:       'desde el inicio',
  responsive: true,
});

→ tudominio.com listo`;

const TYPE_MS = 22;
const ERASE_MS = 10;
const HOLD_MS = 1800;

export default function TypingCode() {
  const [chars, setChars] = useState(0);
  const [phase, setPhase] = useState<'type' | 'hold' | 'erase'>('type');

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    if (phase === 'type') {
      if (chars < SNIPPET.length) t = setTimeout(() => setChars((c) => c + 1), TYPE_MS);
      else t = setTimeout(() => setPhase('hold'), 0);
    } else if (phase === 'hold') {
      t = setTimeout(() => setPhase('erase'), HOLD_MS);
    } else {
      if (chars > 0) t = setTimeout(() => setChars((c) => c - 1), ERASE_MS);
      else t = setTimeout(() => setPhase('type'), 600);
    }
    return () => clearTimeout(t);
  }, [chars, phase]);

  const text = SNIPPET.slice(0, chars);
  const lines = text.split('\n');

  return (
    <div className="rounded-[14px] border border-[var(--border)] bg-[rgba(17,19,28,0.55)] backdrop-blur-[4px] px-5 py-5 md:px-6 md:py-6 font-mono text-[12px] md:text-[13px] leading-[1.7] text-[var(--text)]">
      <div className="flex items-center gap-1.5 mb-4">
        <span className="w-[8px] h-[8px] rounded-full bg-[var(--border-strong)]" />
        <span className="w-[8px] h-[8px] rounded-full bg-[var(--border-strong)]" />
        <span className="w-[8px] h-[8px] rounded-full bg-[var(--border-strong)]" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--muted)]">
          tuweb.build()
        </span>
      </div>
      <pre className="m-0 whitespace-pre min-h-[200px]">
        {lines.map((line, i) => (
          <span key={i} className="flex">
            <span className="select-none w-7 text-right pr-3 text-[var(--border-strong)]">{i + 1}</span>
            <span className="flex-1">
              {line}
              {i === lines.length - 1 && (
                <span className="caret inline-block w-[7px] h-[14px] -mb-[2px] ml-[2px] bg-[var(--accent)] align-middle" />
              )}
            </span>
          </span>
        ))}
      </pre>
    </div>
  );
}
