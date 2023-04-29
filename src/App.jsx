import "./App.css";
import AboutMe from "./Components/AboutMe";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import "./Components/Mouse/mouse.css";
import Mouse from "./Components/Mouse/Mouse";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
      <Mouse />
    </div>
  );
}

export default App;
