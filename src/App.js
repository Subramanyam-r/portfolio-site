import LandingPage from "./components/LandingPage/LandingPage";
import "./App.css";
import config from "./config.json";
import About from "./components/About/About";
import ExperienceAndExperience from "./components/ExperienceAndExperience/ExperienceAndExperience";
import "./components/Icons/Icons.css";
import Skills from "./components/Skills/Skills";
import AOS from "aos";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  AOS.init();

  return (
    <div className="app-main">
      <img className="background-animated-svg-blocks" src="bg.svg" alt="animated-bg" />
      <div className="site-main">
        <LandingPage name={config.landing.name} roles={config.landing.roles} />
        <About />
        <ExperienceAndExperience />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </div>
  );
}

export default App;
