import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: 120,
            density: { enable: true, value_area: 1000 }
          },
          color: {
            value: ["#00bfff", "#ff6ec7", "#00ffb3"]
          },
          shape: {
            type: ["circle", "star", "triangle"]
          },
          opacity: {
            value: 0.6,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1
            }
          },
          size: {
            value: 2,
            random: true
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "right",
            straight: false,
            out_mode: "out"
          }
        },
        interactivity: {
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
          },
          modes: {
            repulse: { distance: 80 },
            push: { quantity: 2 }
          }
        },
        retina_detect: true
      }}
    />
  );
}

export default Particle;