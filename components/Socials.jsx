import { FaFacebookF, FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const LINKS = [
  { href: "https://www.facebook.com/daniel.udo.1000", label: "Facebook", Icon: FaFacebookF },
  { href: "https://x.com/Daniel14346962", label: "X", Icon: FaXTwitter },
  { href: "https://github.com/Dannyblue12", label: "GitHub", Icon: FaGithub },
];

export default function Socials() {
  return (
    <section className="socials scroll-animate">
      <h2>Find Me On</h2>
      <div className="social-icons-container">
        {LINKS.map(({ href, label, Icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer me"
          >
            <Icon />
          </a>
        ))}
      </div>
    </section>
  );
}
