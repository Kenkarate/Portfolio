import "./App.css";
import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe"

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <AboutMe />
      
      <Projects/>
      {/* <Contact/> */}
      <ContactMe/>
<Footer/>
    </div>
  );
}

export default App;
