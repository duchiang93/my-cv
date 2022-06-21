import React from "react";
import Nav from "./components/Nav";
import About from "./pages/About";
import Greet from "./pages/Greet";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Greet />
      <About />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
