import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <Reveal>
        {/* Work leads: proof first, then who, what and how */}
        <Hero />
        <Projects />
        <About />
        <TechStack />
        <Services />
        <Process />
        <Contact />
        <Socials />
      </Reveal>
      <Footer />
    </>
  );
}
