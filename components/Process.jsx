import { PROCESS } from "@/lib/content";

export default function Process() {
  return (
    <section
      className="process section-wide scroll-animate has-ambient"
      id="process"
    >
      <span
        className="ambient ambient--strong ambient--b"
        aria-hidden="true"
        style={{
          width: 900,
          height: 620,
          left: "50%",
          marginLeft: -450,
          bottom: "-18%",
        }}
      />
      <div className="section-inner">
        <div className="section-head centered">
          <p className="eyebrow">Operations</p>
          <h2>
            Project Delivery <span className="highlight">Process</span>
          </h2>
          <p>From idea to production, with a clear process at every step.</p>
        </div>

        <div className="process-grid" data-reveal>
          {PROCESS.map(({ icon: Icon, index, stage, title, points, note }) => (
            <div className="process-step" key={index}>
              <div className="process-marker">
                <Icon />
              </div>
              <span className="process-index">
                {index} — {stage}
              </span>
              <h3>{title}</h3>
              <ul className="process-list">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <p className="process-note">{note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
