"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Car {
  id: string;
  name: string;
  brand: string;
  image: string;
  specs: {
    engine: string;
    hp: string;
    zeroToSixty: string;
  };
}

const dreamCars: Car[] = [
  {
    id: "gwagon",
    name: "G-Class AMG G63",
    brand: "Mercedes-Benz",
    image: "/Cars/g63.png",
    specs: { engine: "4.0L Bi-Turbo V8", hp: "577 hp", zeroToSixty: "4.5s" }
  },
  {
    id: "defender",
    name: "Defender OCTA",
    brand: "Land Rover",
    image: "/Cars/octa.png",
    specs: { engine: "4.4L Twin-Turbo V8", hp: "626 hp", zeroToSixty: "3.8s" }
  },
  {
    id: "svj",
    name: "Aventador SVJ",
    brand: "Lamborghini",
    image: "/Cars/svj.png",
    specs: { engine: "6.5L Naturally Aspirated V12", hp: "759 hp", zeroToSixty: "2.8s" }
  },
  {
    id: "gt3rs",
    name: "911 GT3 RS (992)",
    brand: "Porsche",
    image: "/Cars/gt3.png",
    specs: { engine: "4.0L Flat-6", hp: "518 hp", zeroToSixty: "3.0s" }
  },
  {
    id: "zr1x",
    name: "Corvette C8 ZR1",
    brand: "Chevrolet",
    image: "/Cars/c8.png",
    specs: { engine: "5.5L Twin-Turbo V8", hp: "1064 hp", zeroToSixty: "2.5s (est)" }
  },
  {
    id: "m2",
    name: "M2 Competition",
    brand: "BMW",
    image: "/Cars/m2.png",
    specs: { engine: "3.0L Twin-Turbo I6", hp: "405 hp", zeroToSixty: "4.0s" }
  },
  {
    id: "m340i",
    name: "M340i",
    brand: "BMW",
    image: "/Cars/m340i.png",
    specs: { engine: "3.0L Turbo I6", hp: "382 hp", zeroToSixty: "4.1s" }
  },
  {
    id: "m4",
    name: "M4 Competition",
    brand: "BMW",
    image: "/Cars/m4.png",
    specs: { engine: "3.0L Twin-Turbo I6", hp: "503 hp", zeroToSixty: "3.4s" }
  },
  {
    id: "m5",
    name: "M5 Competition",
    brand: "BMW",
    image: "/Cars/m5.png",
    specs: { engine: "4.4L Twin-Turbo V8", hp: "617 hp", zeroToSixty: "3.1s" }
  }
];

export default function DreamGarage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section className="garage-section section" id="garage">
      <div className="container">
        <div className="section-heading garage-heading">
          <h2 className="section-title">The Dream Garage</h2>
          <div className="underline"></div>
        </div>
        <p className="garage-intro">
          Beyond the code, I am a massive automotive enthusiast.<br/> Here is the ultimate dream garage lineup—swipe to explore.
        </p>
      </div>

      <div className="garage-swipe-container" ref={containerRef}>
        <motion.div 
          ref={trackRef}
          className="garage-swipe-track"
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.2}
          whileTap={{ cursor: "grabbing" }}
          style={{ width: "max-content" }}
        >
          {dreamCars.map((car) => (
            <motion.div className="garage-swipe-card" key={car.id}>
              <div className="garage-image-wrapper">
                <Image 
                  src={car.image} 
                  alt={car.name} 
                  fill 
                  sizes="(max-width: 768px) 80vw, 400px"
                  style={{ objectFit: "contain", padding: "1.5rem" }} 
                  className="garage-card-bg"
                  draggable="false"
                  priority
                />
              </div>
              
              <div className="garage-card-content">
                <span className="garage-card-brand">{car.brand}</span>
                <h3 className="garage-card-name">{car.name}</h3>
                
                <div className="garage-card-specs">
                  <div className="spec-pill">
                    <i className="fas fa-tachometer-alt"></i> {car.specs.hp}
                  </div>
                  <div className="spec-pill">
                    <i className="fas fa-stopwatch"></i> {car.specs.zeroToSixty}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      <div className="garage-drag-indicator">
        <i className="fas fa-arrows-left-right"></i> Drag to scroll
      </div>
    </section>
  );
}
