/**
 * Shared class strings for the recurring interactive shapes.
 *
 * These existed as hand-written one-offs on every page section, which is why
 * the same button appeared with three different radii and two different copper
 * treatments depending on where it was. Import these instead of re-typing a
 * variant, so a change to the button language lands everywhere at once.
 */

/** Filled copper. The single highest-intent action on a surface. */
export const BTN_PRIMARY =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-copper-400 to-copper-600 ' +
  'hover:from-copper-500 hover:to-copper-700 text-white font-semibold shadow-lg shadow-copper-700/25 ' +
  'hover:shadow-xl hover:shadow-copper-700/30 transition-all duration-200 cursor-pointer ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-400 focus-visible:ring-offset-2';

/** Outlined, for use on the dark and colour surfaces. */
export const BTN_SECONDARY_ON_DARK =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/5 ' +
  'hover:bg-white/12 hover:border-white/60 text-white font-semibold backdrop-blur-sm ' +
  'transition-all duration-200 cursor-pointer ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2';

/** Outlined, for use on the paper surfaces. */
export const BTN_SECONDARY_ON_LIGHT =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-copper-500/35 bg-white/60 ' +
  'hover:bg-white hover:border-copper-500/70 text-ink-900 font-semibold backdrop-blur-sm ' +
  'transition-all duration-200 cursor-pointer ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2';

/** Size steps, kept separate so a button's shape and its scale compose. */
export const BTN_LG = 'px-8 py-4 text-base sm:text-lg';
export const BTN_MD = 'px-5 py-2.5 text-sm';
export const BTN_SM = 'px-4 py-2.5 text-[13px]';

/** Vertical rhythm. One value for full sections, one for short bands. */
export const SECTION_Y = 'py-20 sm:py-28';
export const SECTION_Y_TIGHT = 'py-14 sm:py-16';

/** The shared h2 scale, so every section headline sets at the same size. */
export const H2 =
  "[font-family:var(--font-playfair),'Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl " +
  'font-semibold leading-[1.12] tracking-tight';

/** Small-caps label used above every section headline. */
export const OVERLINE = 'text-[0.7rem] tracking-[0.3em] uppercase font-semibold';
