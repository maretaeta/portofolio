/** @format */

import "./App.css";
import Navbar from "./component/Navbar";
import HeroSection from "./component/HeroSection";
import Bot from "./component/Bot";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Sertification from "./component/Sertification";
import Footer from "./component/Footer";
import Experiance from "./component/Experiance";

function App() {
  return (
    <div>
      <Navbar />
      <Bot/>
      <HeroSection />
      <About />
      <Skills />
      <Project />
      <Sertification />
      <Experiance />
      <Footer />
    </div>
  );
}

export default App;
