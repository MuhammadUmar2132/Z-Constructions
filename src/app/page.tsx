import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import AboutCEO from "@/components/home/AboutCEO";
import Services from "@/components/home/Services";
import Projects from "@/components/home/Projects";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      <About />
      <AboutCEO />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}
