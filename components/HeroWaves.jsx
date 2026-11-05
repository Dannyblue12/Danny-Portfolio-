/**
 * Three layers of slow green swell along the foot of the hero.
 *
 * The path repeats every 1200 units inside a 2400-wide viewBox, so a
 * -1200 translate loops seamlessly. Pure CSS animation, no JavaScript.
 */
const WAVE = [
  "M0,100 C200,42 400,158 600,100 C800,42 1000,158 1200,100",
  "C1400,42 1600,158 1800,100 C2000,42 2200,158 2400,100",
  "L2400,260 L0,260 Z",
].join(" ");

export default function HeroWaves() {
  return (
    <svg
      className="hero-waves"
      viewBox="0 0 2400 260"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="wave wave--1" d={WAVE} />
      <path className="wave wave--2" d={WAVE} />
      <path className="wave wave--3" d={WAVE} />
    </svg>
  );
}
