import React from "react";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";
import { extend } from "@react-three/fiber";

const GradientMaterial = shaderMaterial(
  {
    color1: new THREE.Color("#4caf50"), // Verde claro
    color2: new THREE.Color("#00f721"), // Verde brillante
    time: 0,
  },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    uniform vec3 color1;
    uniform vec3 color2;
    varying vec2 vUv;
    void main() {
      vec3 color = mix(color1, color2, vUv.y);
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

export default GradientMaterial;
