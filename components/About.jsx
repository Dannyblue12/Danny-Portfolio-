import { ABOUT_BODY, ABOUT_FEATURES } from "@/lib/content";

export default function About() {
  return (
    <section className="about-intro scroll-animate has-ambient" id="about">
      <span
        className="ambient ambient--soft"
        aria-hidden="true"
        style={{ width: 620, height: 620, left: "-14%", top: "4%" }}
      />
      <div className="about-intro-container">
        <div className="about-intro-left">
          <div className="vertical-line" />
          {ABOUT_FEATURES.map(({ icon: Icon, title, body }) => (
            <div className="skill-feature" key={title}>
              <Icon />
              <div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-intro-right">
          <div className="section-head">
            <p className="eyebrow">About Me</p>
            <h2>
              I turn ideas into digital products people can{" "}
              <span className="highlight">actually use</span>.
            </h2>
          </div>
          {ABOUT_BODY.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}
          <div className="about-closer">
            <p>You bring the idea. I help turn it into something real.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
