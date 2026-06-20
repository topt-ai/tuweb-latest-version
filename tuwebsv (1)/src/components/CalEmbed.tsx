import { useEffect } from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

export const CAL_LINK = 'tuwebsv/secret';
export const CAL_URL = 'https://cal.com/tuwebsv/secret';

const PALETTE: Record<string, string> = {
  'cal-bg': '#11131C',
  'cal-bg-emphasis': '#1E212E',
  'cal-bg-muted': '#0F1119',
  'cal-bg-info': '#11131C',
  'cal-brand': '#2D4FFF',
  'cal-brand-emphasis': '#1A35CC',
  'cal-text': '#F2F3F7',
  'cal-text-emphasis': '#FFFFFF',
  'cal-text-muted': '#6B7080',
  'cal-border': '#1E212E',
  'cal-border-emphasis': '#2A2D3D',
  'cal-border-subtle': '#1E212E',
  'cal-border-booker': '#1E212E',
};

export default function CalEmbed() {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: 'secret' });
      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
        // Dark theme matched to our palette.
        theme: 'dark',
        cssVarsPerTheme: {
          // Site is dark-only; mirror the same palette for both themes so
          // Cal renders the dark scheme regardless of user preference.
          dark: PALETTE,
          light: PALETTE,
        },
      });
    })();
  }, []);

  return (
    <div className="rounded-[16px] bg-[var(--surface)] border border-[var(--border)] overflow-hidden">
      <Cal
        namespace="secret"
        calLink={CAL_LINK}
        style={{ width: '100%', minHeight: 720, overflow: 'auto' }}
        config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
      />
    </div>
  );
}
