import { STACK } from "@/lib/content";

export default function TechStack() {
  return (
    <section
      className="stack section-wide scroll-animate has-ambient"
      id="stack"
    >
      <span
        className="ambient ambient--soft ambient--c"
        aria-hidden="true"
        style={{ width: 560, height: 560, right: "-10%", bottom: "-12%" }}
      />
      <div className="section-inner">
        <div className="section-head centered">
          <p className="eyebrow">Tech Stack</p>
          <h2>
            The tools I <span className="highlight">build with</span>.
          </h2>
        </div>
        <div className="stack-grid" data-reveal>
          {STACK.map(({ group, items }) => (
            <div className="stack-group" key={group}>
              <h3>{group}</h3>
              <ul>
                {items.map(({ icon: Icon, name }) => (
                  <li key={name}>
                    <Icon />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
