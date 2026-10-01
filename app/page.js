import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Socials from "@/components/Socials";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <Reveal>
        <Hero />
        <About />
        <TechStack />
        <Services />
        <Process />
        <Projects />
        <Contact />
        <Socials />
      </Reveal>
      <Footer />
    </>
  );
}
