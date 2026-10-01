import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { PROJECTS } from "@/lib/content";

export default function Projects() {
  return (
    <section
      className="projects-showcase scroll-animate has-ambient"
      id="projects"
    >
      <span
        className="ambient ambient--soft"
        aria-hidden="true"
        style={{ width: 600, height: 600, right: "-14%", top: "22%" }}
      />
      <div className="section-head centered">
        <p className="eyebrow">Selected Work</p>
        <h2>
          <span className="highlight">Products</span> I&apos;ve built and
          shipped
        </h2>
      </div>

      <div className="project-list">
        {PROJECTS.map((project, i) => {
          const alt = i % 2 === 1;
          const media = (
            <div className="project-image-placeholder">
              <Image
                src={project.image}
                alt={project.alt}
                width={800}
                height={500}
                sizes="(max-width: 1024px) 100vw, 55vw"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          );
          const details = (
            <div className="project-details">
              <span className="project-index">{project.index}</span>
              {project.flag && (
                <span className="project-flag">
                  <FaStar /> {project.flag}
                </span>
              )}
              <h3>{project.title}</h3>
              <p>{project.body}</p>
              <div className="project-tech-stack">
                {project.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <div className="project-buttons">
                <a
                  href={project.site}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Site
                </a>
                {project.repo && (
                  <a
                    href={project.repo}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          );

          return (
            <article
              className={`project-item${alt ? " alt-layout" : ""}`}
              key={project.index}
            >
              {alt ? details : media}
              {alt ? media : details}
            </article>
          );
        })}
      </div>
    </section>
  );
}
