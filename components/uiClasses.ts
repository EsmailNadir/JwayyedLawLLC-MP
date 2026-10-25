/**
 * Shared class strings for the recurring interactive shapes.
 *
 * These existed as hand-written one-offs on every page section, which is why
 * the same button appeared with three different radii and two different copper
 * treatments depending on where it was. Import these instead of re-typing a
 * variant, so a change to the button language lands everywhere at once.
 */

/** Filled navy. The single highest-intent action on a light surface. */
export const BTN_PRIMARY =
  'inline-flex items-center justify-center gap-2 min-h-[52px] bg-navy-950 hover:bg-sky-deep text-white font-semibold ' +
  'transition-colors duration-200 cursor-pointer ' +
  'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky';

/** Outlined, for use on the navy and colour surfaces. */
export const BTN_SECONDARY_ON_DARK =
  'inline-flex items-center justify-center gap-2 min-h-[52px] border border-white/50 ' +
  'hover:bg-white hover:text-navy-950 text-white font-semibold ' +
  'transition-colors duration-200 cursor-pointer ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky';

/** Outlined, for use on the white and ice surfaces. */
export const BTN_SECONDARY_ON_LIGHT =
  'inline-flex items-center justify-center gap-2 min-h-[52px] border border-navy-950/40 ' +
  'hover:bg-navy-950 hover:text-white text-navy-950 font-semibold ' +
  'transition-colors duration-200 cursor-pointer ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-deep';

/** Size steps, kept separate so a button's shape and its scale compose. */
export const BTN_LG = 'px-8 py-4 text-base sm:text-lg';
export const BTN_MD = 'px-5 py-2.5 text-sm';
export const BTN_SM = 'px-4 py-2.5 text-[13px]';

/** Vertical rhythm. One value for full sections, one for short bands. */
export const SECTION_Y = 'py-20 sm:py-28';
export const SECTION_Y_TIGHT = 'py-14 sm:py-16';

/** The shared h2 scale, so every section headline sets at the same size. */
export const H2 = 'jw-display text-[clamp(2rem,1.3rem+2.4vw,3.25rem)] leading-[1.08]';

/** Small-caps label used above every section headline. */
export const OVERLINE = 'text-[0.7rem] tracking-[0.3em] uppercase font-semibold';
