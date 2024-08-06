import React, { useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import GradientMaterial from "./GradientMaterial"; // Importa el nuevo material

function Model({ url }) {
  const { scene } = useGLTF(url);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new GradientMaterial(); // Aplica el nuevo material degradado
      }
    });
  }, [scene]);

  useFrame((state) => {
    if (hovered) {
      const { x, y } = state.mouse;
      scene.rotation.y = x * Math.PI * 0.1; // Limitar la rotación
      scene.rotation.x = -y * Math.PI * 0.1;
    }
  });

  return (
    <primitive
      object={scene}
      scale={[3, 3, 3]} // Aumentar el tamaño del modelo y estirar vertical y horizontalmente
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

export default Model;
