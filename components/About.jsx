import Image from "next/image";
import { ABOUT_BODY, ABOUT_FEATURES, STATS } from "@/lib/content";
import { PERSON } from "@/lib/seo";
import portrait from "@/public/daniel-victor-udo.png";

export default function About() {
  const [lede, ...rest] = ABOUT_BODY;

  return (
    <section className="about scroll-animate has-ambient" id="about">
      <span
        className="ambient ambient--soft"
        aria-hidden="true"
        style={{ width: 640, height: 640, left: "-16%", top: "6%" }}
      />

      <div className="about-grid">
        {/* Visual anchor: portrait, identity and the numbers at a glance */}
        <aside className="about-aside">
          <figure className="about-portrait">
            <Image
              src={portrait}
              alt={`${PERSON.name}, ${PERSON.jobTitle}`}
              sizes="(max-width: 1024px) 280px, 380px"
              placeholder="blur"
            />
          </figure>

          <div className="about-signature">
            <p className="about-name">{PERSON.name}</p>
            <p className="about-role">{PERSON.role}</p>
            <p className="about-available">
              <em aria-hidden="true" />
              Available for new projects
            </p>
          </div>

          <dl className="about-stats">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="about-main">
          <div className="section-head">
            <p className="eyebrow">About Me</p>
            <h2>
              I turn ideas into digital products people can{" "}
              <span className="highlight">actually use</span>.
            </h2>
          </div>

          <p className="about-lede">{lede}</p>
          {rest.map((para) => (
            <p key={para.slice(0, 32)}>{para}</p>
          ))}

          <blockquote className="about-closer">
            You bring the idea. I help turn it into something real.
          </blockquote>
        </div>
      </div>

      <div className="about-capabilities" data-reveal>
        {ABOUT_FEATURES.map(({ icon: Icon, title, body }) => (
          <article key={title}>
            <span className="capability-icon">
              <Icon />
            </span>
            <div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
