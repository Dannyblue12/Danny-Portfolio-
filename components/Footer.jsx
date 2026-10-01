import { FaHeart } from "react-icons/fa6";
import { PERSON } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="main-footer-bottom">
      <p>
        &copy; {new Date().getFullYear()} {PERSON.name}. All rights reserved.
        Crafted with <FaHeart className="highlight" />.
      </p>
    </footer>
  );
}
