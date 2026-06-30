import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/sections/Hero";
import { About } from "@/components/portfolio/sections/About";
import { Education } from "@/components/portfolio/sections/Education";
import { Certifications } from "@/components/portfolio/sections/Certifications";
import { Experience } from "@/components/portfolio/sections/Experience";
import { Skills } from "@/components/portfolio/sections/Skills";
import { Services } from "@/components/portfolio/sections/Services";
import { Projects } from "@/components/portfolio/sections/Projects";
import { Contact } from "@/components/portfolio/sections/Contact";
import { Footer } from "@/components/portfolio/sections/Footer";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Experience />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
