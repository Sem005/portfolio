

const COLORS = {
  bg: '#080B10',
  bg2: '#0D1117',
  surface: '#161D26',
  surface2: '#1C2530',
  accent: '#00E5FF',
  accent2: '#7C3AED',
  text: '#F0F4F8',
  text2: '#8B9BAD',
  text3: '#5A6A7A',
  green: '#4ADE80',
  gold: '#F59E0B',
  border: 'rgba(255,255,255,0.07)',
} as const;

const BTN_PRIMARY = 'inline-flex items-center gap-2 rounded-full bg-[#00E5FF] px-7 py-3 font-semibold text-[#080B10] text-[0.95rem] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_32px_rgba(0,229,255,.45)] cursor-pointer border-0 select-none no-underline font-syne';
const BTN_SECONDARY = 'inline-flex items-center gap-2 rounded-full border border-white/10 px-7 py-3 text-[#F0F4F8] text-[0.95rem] transition-all duration-200 hover:border-[#00E5FF] hover:text-[#00E5FF] hover:bg-[#00E5FF]/5 hover:-translate-y-0.5 select-none no-underline';
const CARD_CLASS = 'rounded-2xl border border-white/5 bg-[#161D26] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#00E5FF]/30 hover:shadow-[0_24px_60px_rgba(0,0,0,.4),0_0_40px_rgba(0,229,255,.12)]';
const TAG_CLASS = 'px-2.5 py-1 rounded-md border border-white/5 bg-[#080B10] text-[#5A6A7A] text-[0.74rem] font-medium';

export { COLORS, BTN_PRIMARY, BTN_SECONDARY, CARD_CLASS, TAG_CLASS };