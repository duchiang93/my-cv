import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import "./styles/style.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Homepage />
      <Footer />
    </div>
  );
}

export default App;
