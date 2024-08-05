import React, { useState, useEffect } from "react";
import "./styles/about.css";
import academy1 from "../images/academy1.jpg";
import academy2 from "../images/academy2.jpg";
import academy3 from "../images/academy3.jpg";

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [academy1, academy2, academy3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds interval

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="container">
        <h1>
          About <span>Us</span>
        </h1>
      </div>
      <div className="content-card">
        <div className="card">
          <h2>Our Mission</h2>
          <p>
            At the Academy of Language and Culture, we strive to provide
            high-quality education in English, promoting cultural and linguistic
            development of our students.
          </p>
          <h2>Our Vision</h2>
          <p>
            We want to be leaders in the teaching of English, offering
            innovative and effective programs that meet the needs of our
            students and community.
          </p>
        </div>
        <div className="sidebar">
          <img
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            className="sidebar-image"
            style={{
              // Remove fixed width and height
              borderRadius: "15px",
              maxWidth: "100%", // Image will take up 100% of available width
              height: "auto", // Height will adjust proportionally to the width
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
