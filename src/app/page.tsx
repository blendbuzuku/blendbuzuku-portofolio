import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Bankflow from "@/components/Bankflow";
import Skills from "@/components/Skills";
import Learning from "@/components/Learning";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

/*
 * Ordered by what someone reading a portfolio looks for: who this is and how
 * to reach them, where they have worked, what they built there, then the
 * side project, skills, what they are learning, and contact.
 */
export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <Experience />
        <Projects />
        <Bankflow />
        <Skills />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
