import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import Greet from "./components/Greet";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Greet />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
