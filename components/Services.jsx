import { SERVICES } from "@/lib/content";

export default function Services() {
  return (
    <section className="services scroll-animate has-ambient" id="services">
      <span
        className="ambient"
        aria-hidden="true"
        style={{ width: 520, height: 520, left: "-12%", top: "18%" }}
      />
      <div className="services-layout">
        <div className="services-head">
          <div className="section-head">
            <p className="eyebrow">Services</p>
            <h2>
              What I <span className="highlight">Provide</span>
            </h2>
            <p>
              Clear services. One connected system — from the first idea to a
              product running in production.
            </p>
          </div>
        </div>

        <div className="services-grid" data-reveal>
          {SERVICES.map(({ icon: Icon, index, category, title, body }) => (
            <article className="service-card" key={index}>
              <div className="service-icon">
                <Icon />
              </div>
              <span className="service-index">
                {index} — {category}
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
