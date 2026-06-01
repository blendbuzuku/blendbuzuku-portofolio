import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <main className="bg-zinc-950 text-white min-h-screen">
  <Navbar />

  <div className="max-w-7xl mx-auto px-6 space-y-32 pb-32">
    <Hero />
    <Stats />
    <About />
    <Skills />
    <Projects />
    <Experience />
    <Contact />
  </div>
</main>
  );
}