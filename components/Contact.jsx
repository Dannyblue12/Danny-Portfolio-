import { FaArrowRight } from "react-icons/fa6";
import { PERSON } from "@/lib/seo";

export default function Contact() {
  return (
    <section className="connect-cta scroll-animate" id="contact">
      <div className="connect-content">
        <span
          className="ambient"
          aria-hidden="true"
          style={{
            width: 820,
            height: 520,
            left: "50%",
            marginLeft: -410,
            bottom: "-26%",
          }}
        />
        <p className="eyebrow">Contact</p>
        <h2>
          You bring the idea. I help turn it into{" "}
          <span className="highlight">something real</span>.
        </h2>
        <p>
          Tell me what you&apos;re building. Whether it&apos;s a web app, a
          mobile product, a backend system or an AI feature, I&apos;ll help you
          take it from concept to production.
        </p>
        <a href={PERSON.whatsapp} className="btn btn-primary btn-large">
          Let&apos;s Talk <FaArrowRight />
        </a>
      </div>
    </section>
  );
}
