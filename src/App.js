import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { How } from "./components/How";
import { Footer } from "./components/Footer";

import "./App.css";
import { News } from "./components/News";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <How />
      <News />
      <Footer />
    </div>
  );
}

export default App;
