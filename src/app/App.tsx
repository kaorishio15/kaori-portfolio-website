import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";
import Hackathons from "../components/sections/Hackathons";
import About from "../components/sections/About";
import Qualifications from "../components/sections/Qualifications";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Hackathons />
        <Qualifications />
        <About />
      </main>
      <Footer />
    </div>
  )
}
