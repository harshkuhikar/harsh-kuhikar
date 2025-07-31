import React, { useEffect, useRef } from "react";

const CustomCursor: React.FC = () => {
  const smokeContainerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 });
  const smokeParticles = useRef<HTMLDivElement[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    // Check if device supports hover (not touch device)
    const supportsHover = window.matchMedia("(hover: hover)").matches;
    if (!supportsHover) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x;
      mouseRef.current.prevY = mouseRef.current.y;
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Calculate movement speed
      const speed = Math.sqrt(
        Math.pow(mouseRef.current.x - mouseRef.current.prevX, 20) +
          Math.pow(mouseRef.current.y - mouseRef.current.prevY, 20)
      );

      // Create smoke particles only when moving
      if (speed > 2) {
        createSmokeParticle(mouseRef.current.x, mouseRef.current.y, speed);
      }
    };

    const createSmokeParticle = (x: number, y: number, speed: number) => {
      if (!smokeContainerRef.current) return;

      const particle = document.createElement("div");
      particle.className = "smoke-particle";

      // Random offset for natural smoke spread
      const offsetX = (Math.random() - 0.5) * 0;
      const offsetY = (Math.random() - 0.5) * 0;

      // Size based on speed
      const size = Math.min(speed * 3 + 100, 50);

      particle.style.cssText = `
        position: fixed;
        left: ${x + offsetX}px;
        top: ${y + offsetY}px;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, 
          rgba(0, 191, 255, 0.6) 0%, 
          rgba(138, 43, 226, 0.4) 40%, 
          rgba(0, 255, 255, 0.2) 70%, 
          transparent 100%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 45;
        filter: blur(2px);
        animation: smokeFloat 1.5s ease-out forwards;
        transform: translate(-50%, -50%);
      `;

      smokeContainerRef.current.appendChild(particle);
      smokeParticles.current.push(particle);

      // Remove particle after animation
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
        const index = smokeParticles.current.indexOf(particle);
        if (index > -1) {
          smokeParticles.current.splice(index, 1);
        }
      }, 1500);

      // Limit particles for performance
      if (smokeParticles.current.length > 50) {
        const oldParticle = smokeParticles.current.shift();
        if (oldParticle && oldParticle.parentNode) {
          oldParticle.parentNode.removeChild(oldParticle);
        }
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  // Don't render on touch devices
  const supportsHover =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;
  if (!supportsHover) return null;

  return (
    <div
      ref={smokeContainerRef}
      className="fixed inset-0 pointer-events-none z-40"
      style={{ mixBlendMode: "screen" }}
    />
  );
};

export default CustomCursor;
