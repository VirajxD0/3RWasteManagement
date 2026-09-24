import Navbar from "./components/Navbar";
import { Footer } from "./components/Contact";
import { RouterProvider, usePath } from "./router";
import Home from "./pages/Home";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ClientsPage from "./pages/ClientsPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import FounderPage from "./pages/FounderPage";

function RouteView() {
  const path = usePath();

  if (path === "/") return <Home />;
  if (path === "/services") return <ServicesPage />;
  if (path === "/projects") return <ProjectsPage />;
  if (path === "/clients") return <ClientsPage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/gallery") return <GalleryPage />;
  if (path === "/founder") return <FounderPage />;

  // fallback 404 -> home-ish with message
  return (
    <main className="bg-cream">
      <section className="hero-fade noise relative overflow-hidden">
        <div className="relative mx-auto max-w-7xl px-5 py-32 md:px-6 md:py-44 text-center">
          <p className="font-display text-6xl font-bold text-cream">404</p>
          <p className="mt-4 text-mint/70">Page not found — maybe it was recycled.</p>
          <a href="/" className="mt-8 inline-flex rounded-full bg-lime px-6 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-forest">Back to home</a>
        </div>
      </section>
    </main>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <div className="min-h-screen bg-cream font-sans text-ink">
        <Navbar />
        <RouteView />
        <Footer />
      </div>
    </RouterProvider>
  );
}
