import Header from "@/components/Header/Header";
import About from "@/sections/About/About";
import Projects from "@/sections/Projects/Projects";
import Contact from "@/sections/Contact/Contact";
import Achievements from "@/sections/Achievements/Achievements";

export default function Home() {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}
