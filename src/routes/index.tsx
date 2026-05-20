import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "sonner";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Remote } from "@/components/portfolio/Remote";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Impact } from "@/components/portfolio/Impact";
import { Strengths } from "@/components/portfolio/Strengths";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Toaster position="top-right" theme="dark" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Remote />
        <Skills />
        <Experience />
        <Projects />
        <Impact />
        <Strengths />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
