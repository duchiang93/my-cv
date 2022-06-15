import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Greet from "./components/Greet";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Greet />
      <About />
      <Footer />
    </div>
  );
}

export default App;
