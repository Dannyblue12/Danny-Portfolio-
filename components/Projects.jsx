import Image from "next/image";
import { FaArrowRight, FaStar } from "react-icons/fa6";
import { CLIENT_WORK, FLAGSHIP } from "@/lib/content";

function Flagship({ project }) {
  const single = project.shots.length === 1;

  return (
    <article className="flagship" style={{ "--brand": project.brand }}>
      <span className="flagship-wash" aria-hidden="true" />

      <div className="flagship-head">
        <div className="flagship-id">
          <span className="flagship-index">{project.index}</span>
          <span className="flagship-kind">{project.kind}</span>
          {project.flag && (
            <span className="project-flag">
              <FaStar /> {project.flag}
            </span>
          )}
        </div>
        <h3>{project.title}</h3>
        <p className="flagship-tagline">{project.tagline}</p>
      </div>

      <div className="flagship-gallery">
        <div className={`flagship-rail${single ? " is-single" : ""}`}>
          {project.shots.map((shot, i) => (
            <figure key={shot.src}>
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1800}
                height={1013}
                sizes="(max-width: 760px) 86vw, (max-width: 1100px) 70vw, 760px"
                loading={project.index === "01" && i === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
        {!single && (
          <span className="rail-hint" aria-hidden="true">
            {project.shots.length} screens &mdash; scroll
          </span>
        )}
      </div>

      <div className="flagship-body">
        <div className="flagship-copy">
          <p>{project.body}</p>
          {project.notes && (
            <p className="flagship-notes">
              <span>Under the hood</span>
              {project.notes}
            </p>
          )}
        </div>
        <div className="flagship-meta">
          <div className="project-tech-stack">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {project.site && (
            <a
              href={project.site}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Site <FaArrowRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section
      className="projects-showcase scroll-animate has-ambient"
      id="projects"
    >
      <span
        className="ambient ambient--soft"
        aria-hidden="true"
        style={{ width: 600, height: 600, right: "-14%", top: "16%" }}
      />

      <div className="section-head centered">
        <p className="eyebrow">Selected Work</p>
        <h2>
          <span className="highlight">Products</span> I&apos;ve built and
          shipped
        </h2>
      </div>

      <div className="flagship-list">
        {FLAGSHIP.map((project) => (
          <Flagship key={project.index} project={project} />
        ))}
      </div>

      <div className="client-head">
        <h3>Client Websites</h3>
        <span />
        <p>Sites designed and built for clients and organisations.</p>
      </div>

      <div className="client-grid" data-reveal>
        {CLIENT_WORK.map((project) => (
          <article className="client-card" key={project.title}>
            <div className="client-thumb">
              <Image
                src={project.image}
                alt={project.alt}
                width={640}
                height={400}
                sizes="(max-width: 620px) 90vw, (max-width: 1000px) 44vw, 30vw"
                loading="lazy"
              />
            </div>
            <h4>{project.title}</h4>
            <p>{project.body}</p>
            <div className="project-tech-stack">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="client-links">
              <a href={project.site} target="_blank" rel="noopener noreferrer">
                View Site <FaArrowRight />
              </a>
              {project.repo && (
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
