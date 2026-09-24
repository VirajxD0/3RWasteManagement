import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Showcase from "../components/Showcase";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Showcase />
      <Contact />
    </main>
  );
}
