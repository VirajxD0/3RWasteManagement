import About from "./components/About";
import Contact, { Footer } from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Showcase from "./components/Showcase";

export default function App() {
  return (
    <div className="min-h-screen bg-cream font-sans text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
