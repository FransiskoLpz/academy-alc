import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

let previousTitle = document.title;
window.addEventListener("blur", () => {
  previousTitle = document.title;
  document.title = "Do not go! Comes back! 😱";
});
window.addEventListener("focus", () => {
  document.title = previousTitle;
});

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
