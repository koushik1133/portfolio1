import React from "react";

const HOBBIES = [
  {
    title: "Automotive Culture",
    description: "Deeply passionate about sports cars, mechanical restoration, and engineering design. I love exploring canyon roads and appreciate the art of automotive craftsmanship.",
    icon: "fas fa-car-side",
    gradient: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)"
  },
  {
    title: "Maker & Tech Labs",
    description: "When not writing production code, I'm configuring local servers, flashing microcontrollers, or working on 3D prints for robotic chassis components.",
    icon: "fas fa-tools",
    gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)"
  },
  {
    title: "Active Lifestyle",
    description: "Believer in a healthy body fostering a sharp mind. I spend my off-hours weight training, running, and focusing on functional physical fitness.",
    icon: "fas fa-dumbbell",
    gradient: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)"
  },
  {
    title: "Geopolitical & History Reading",
    description: "An avid reader of modern history, economics, and technological evolution. Love diving into biographies of historic builders and innovators.",
    icon: "fas fa-book-open",
    gradient: "linear-gradient(135deg, #8e2de2 0%, #4a00e0 100%)"
  }
];

export default function Hobbies() {
  return (
    <section className="hobbies-section section" id="hobbies">
      <div className="container">
        <div className="section-heading">
          <h2>Outside of Coding</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            A look at my interests, active pursuits, and things that keep me inspired beyond the IDE.
          </p>
        </div>

        <div className="hobbies-grid">
          {HOBBIES.map((hobby) => (
            <div className="hobby-card" key={hobby.title}>
              <div 
                className="hobby-icon-wrap"
                style={{ background: hobby.gradient }}
              >
                <i className={hobby.icon}></i>
              </div>
              <div className="hobby-info">
                <h3>{hobby.title}</h3>
                <p>{hobby.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
