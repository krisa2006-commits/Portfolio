import "./App.css";
import Header from "./pages/Header";
import Slider from "./pages/Slider";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SkillSlider from "./pages/SkillSlider";
import Footer from "./pages/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <SkillSlider />
      <Contact />
      <Footer />
    </>
  );
};

export default App;