import React from "react";
import styled, { keyframes } from "styled-components";

// Definición de animaciones para las olas
const waveAnimation1 = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const waveAnimation2 = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const waveAnimation3 = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// Estilos del contenedor del pie de página
const FooterContainer = styled.footer`
  position: relative;
  width: 100%;
  background-color: #f0f0f0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  padding: 0; /* Sin padding para asegurar que no haya espacio extra */
  margin: 0; /* Sin margen para asegurar que no haya espacio extra */
`;

// Estilos del contenedor de las olas
const WaveWrapper = styled.div`
  position: absolute;
  top: -300;
  width: 100vw; /* Ancho completo del viewport */
  height: 200px; /* Altura aumentada para acomodar olas más grandes */
  overflow: hidden;
  line-height: 0;
  z-index: 0;
`;

// Estilos generales para las olas
const Wave = styled.svg`
  position: absolute;
  top: -100;
  width: 300%; /* Ancho triplicado */
  height: 100%;
  transform: scaleX(1); /* Ajustar la escala para el nuevo tamaño */
`;

// Estilo para la primera ola
const Wave1 = styled(Wave)`
  animation: ${waveAnimation1} 8s linear infinite;
  opacity: 0.5;
`;

// Estilo para la segunda ola
const Wave2 = styled(Wave)`
  animation: ${waveAnimation2} 10s linear infinite;
  opacity: 0.5;
`;

// Estilo para la tercera ola
const Wave3 = styled(Wave)`
  animation: ${waveAnimation3} 12s linear infinite;
  opacity: 0.5;
`;

// Estilos para la sección de información del pie de página
const Info = styled.div`
  position: relative;
  z-index: 1;
  text-align: center;
  padding-top: 0; /* Sin padding para ajustar el ancho completo */
  background: transparent; /* Fondo transparente */
  color: black; /* Texto blanco */
  width: 100%; /* Asegura que ocupe el ancho completo */
  box-sizing: border-box; /* Incluir padding en el cálculo del ancho */
  padding: 20px; /* Agregar padding para el espaciado */

  h1 {
    margin: 0; /* Sin margen para ajustar perfectamente */
    font-size: 1.5em; /* Tamaño de fuente responsivo */
  }

  p {
    margin: 0; /* Sin margen para ajustar perfectamente */
    font-size: 1em; /* Tamaño de fuente responsivo */
  }

  @media (max-width: 600px) {
    padding-top: 0; /* Ajustar padding en pantallas más pequeñas */

    h1 {
      font-size: 1.2em;
    }

    p {
      font-size: 0.9em;
    }
  }
`;

// Componente del pie de página
const Footer = () => {
  return (
    <FooterContainer>
      <WaveWrapper>
        {/* Primera ola */}
        <Wave1 viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path
            d="M0,300 C150,60 350,60 500,180 C650,300 850,60 1000,180 C1150,300 1200,60 1200,60 L1200,300 L0,300 Z"
            fill="url(#gradient1)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#4caf50" }} />
              <stop offset="20%" style={{ stopColor: "#4caf50" }} />
              <stop offset="40%" style={{ stopColor: "#3de049" }} />
              <stop offset="60%" style={{ stopColor: "#2ad942" }} />
              <stop offset="80%" style={{ stopColor: "#00f721" }} />
              <stop offset="100%" style={{ stopColor: "#00f721" }} />
            </linearGradient>
          </defs>
        </Wave1>
        {/* Segunda ola */}
        <Wave2 viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path
            d="M0,300 C150,60 350,60 500,180 C650,300 850,60 1000,180 C1150,300 1200,60 1200,60 L1200,300 L0,300 Z"
            fill="url(#gradient2)"
          />
          <defs>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#4caf50" }} />
              <stop offset="20%" style={{ stopColor: "#4caf50" }} />
              <stop offset="40%" style={{ stopColor: "#3de049" }} />
              <stop offset="60%" style={{ stopColor: "#2ad942" }} />
              <stop offset="80%" style={{ stopColor: "#00f721" }} />
              <stop offset="100%" style={{ stopColor: "#00f721" }} />
            </linearGradient>
          </defs>
        </Wave2>
        {/* Tercera ola */}
        <Wave3 viewBox="0 0 1200 300" preserveAspectRatio="none">
          <path
            d="M0,300 C150,60 350,60 500,180 C650,300 850,60 1000,180 C1150,300 1200,60 1200,60 L1200,300 L0,300 Z"
            fill="url(#gradient3)"
          />
          <defs>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: "#4caf50" }} />
              <stop offset="20%" style={{ stopColor: "#4caf50" }} />
              <stop offset="40%" style={{ stopColor: "#3de049" }} />
              <stop offset="60%" style={{ stopColor: "#2ad942" }} />
              <stop offset="80%" style={{ stopColor: "#00f721" }} />
              <stop offset="100%" style={{ stopColor: "#00f721" }} />
            </linearGradient>
          </defs>
        </Wave3>
      </WaveWrapper>
      <Info>
        <h1>The Academy of Language & Culture</h1>
        <p>Unlock your language potential with our comprehensive courses.</p>
        <p>
          &copy; 2024 The Academy of Language & Culture. All rights reserved.
        </p>
      </Info>
    </FooterContainer>
  );
};

export default Footer;
