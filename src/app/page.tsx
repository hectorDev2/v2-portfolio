import { Contact } from "./components/Contact";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Hero } from "./components/Hero";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
