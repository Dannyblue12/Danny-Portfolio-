import { STACK } from "@/lib/content";

export default function TechStack() {
  const total = STACK.reduce((n, g) => n + g.items.length, 0);

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
          <p>
            {total} technologies across the whole product &mdash; interface,
            mobile, server and the platform underneath.
          </p>
        </div>

        <div className="stack-grid" data-reveal>
          {STACK.map(({ group, items }, i) => (
            <div className="stack-group" key={group}>
              <span className="stack-rule" aria-hidden="true" />
              <header>
                <span className="stack-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{group}</h3>
                <span className="stack-count">{items.length}</span>
              </header>
              <ul>
                {items.map(({ icon: Icon, name, color }) => (
                  <li key={name} style={{ "--tech": color }}>
                    <span className="tech-badge">
                      <Icon />
                    </span>
                    <span className="tech-name">{name}</span>
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
