import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Model from "./Model"; // Asegúrate de importar el componente Model actualizado

function Header() {
  return (
    <div
      id="main"
      style={{ width: "100%", height: "100vh", position: "relative" }}
    >
      <div className="pr-heading" style={{ zIndex: 2 }}>
        <h2>WELCOME TO</h2>
        <h1>
          THE ACADEMY OF <span>LANGUAGE & CULTURE</span>
        </h1>
        <p className="details">
          Unlock your language potential with our comprehensive English courses.
          Tailored for all levels, our expert instructors will guide you to
          fluency.
        </p>
        <div className="header-btns">
          {/* <a href="#" className="header-btn">Join Us</a> */}
        </div>
      </div>
      <div className="imagen">
        <Canvas style={{ width: "100%", height: "100%" }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[3, 3, 3]} />
          <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={75} />
          <Model url="./models/untitled.glb" />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
    </div>
  );
}

export default Header;
