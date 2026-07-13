import React from "react";

export default function Hobbies() {
  return (
    <section className="hobbies-section section" id="hobbies">
      <div className="container">
        <div className="section-heading">
          <h2>Outside of Coding</h2>
          <div className="underline"></div>
          <p className="section-subtitle">
            A look at my interests and things that keep me inspired beyond the IDE.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", width: "100%", marginTop: "2.5rem" }}>
          <div className="hobby-card" style={{ maxWidth: "600px", width: "100%" }}>
            <div 
              className="hobby-icon-wrap"
              style={{ background: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)" }}
            >
              <i className="fas fa-car-side"></i>
            </div>
            <div className="hobby-info">
              <h3>Automotive Culture</h3>
              <p>
                I am deeply passionate about cars, mechanical work, and automotive design. When I'm not coding, I love driving on scenic roads and learning about car engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
