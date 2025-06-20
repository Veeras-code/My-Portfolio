import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <span style={{ color: "#00bfff", fontWeight: "bold", fontSize: "1.2rem" }}>
      <Typewriter
        options={{
          strings: [
            "Web Developer",
            "Backend Engineer",
            "Express & MongoDB Specialist",
            "AI/ML Enthusiast",
            
          ],
          autoStart: true,
          loop: true,
          delay: 40,       // Typing speed
          deleteSpeed: 30, // Backspacing speed
          pauseFor: 1000   // Pause before deleting
        }}
      />
    </span>
  );
}

export default Type;