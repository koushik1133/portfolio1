"use client";

import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true); // assume touch until checked

  useEffect(() => {
    // Immediately bail out on touch / coarse-pointer devices (phones, tablets)
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (coarse || hasTouch) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    let mouseX = 0;
    let mouseY = 0;
    let glowX = 0;
    let glowY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${mouseX}px`;
        cursorRef.current.style.top = `${mouseY}px`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".project-card") ||
        target.closest(".skill-pill") ||
        target.closest(".exp-card") ||
        target.closest(".bento-card") ||
        target.classList.contains("hover-target")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    let animationFrameId: number;

    const animateGlow = () => {
      glowX += (mouseX - glowX) * 0.12;
      glowY += (mouseY - glowY) * 0.12;

      if (glowRef.current) {
        glowRef.current.style.left = `${glowX}px`;
        glowRef.current.style.top = `${glowY}px`;
      }

      animationFrameId = requestAnimationFrame(animateGlow);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    animationFrameId = requestAnimationFrame(animateGlow);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Render nothing on touch/coarse-pointer devices — saves JS + avoids CSS conflicts
  if (isTouch) return null;

  return (
    <>
      <div
        ref={glowRef}
        className={`cursor-glow ${isHovering ? "cursor-hover" : ""}`}
      />
      <div
        ref={cursorRef}
        className={`custom-cursor ${isHovering ? "cursor-hover" : ""}`}
      />
    </>
  );
}
