import { useState, useEffect, useRef, useCallback } from "react";

const InteractiveBackground = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const rafRef = useRef();
  const mouseRef = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };

    if (!rafRef.current) {
      rafRef.current = requestAnimationFrame(() => {
        setMousePos({ ...mouseRef.current });
        rafRef.current = null;
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleMouseMove]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
    }));
    setParticles(newParticles);
  }, []);

  const gridOpacity = 0.15;
  const gridSize = 60;

  const gridStyle = {
    backgroundImage: `
      linear-gradient(rgba(59, 130, 246, ${gridOpacity}) 1px, transparent 1px),
      linear-gradient(90deg, rgba(59, 130, 246, ${gridOpacity}) 1px, transparent 1px)
    `,
    backgroundSize: `${gridSize}px ${gridSize}px`,
  };

  const centerX = typeof window !== "undefined" ? window.innerWidth / 2 : 400;
  const centerY = typeof window !== "undefined" ? window.innerHeight / 2 : 300;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -20px, 0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
            transform: scale3d(1, 1, 1);
          }
          50% {
            opacity: 0.8;
            transform: scale3d(1.2, 1.2, 1);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        }
      `}</style>

      <div className="absolute inset-0 opacity-20 dark:opacity-10">
        <div className="w-full h-full" style={gridStyle} />
      </div>

      {particles.map((particle) => {
        const translateX = (mousePos.x - centerX) * 0.02;
        const translateY = (mousePos.y - centerY) * 0.02;

        return (
          <div
            key={particle.id}
            className="absolute rounded-full bg-blue-400 dark:block hidden opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
              animation: `float ${
                3 + particle.speed
              }s ease-in-out infinite, pulse ${
                4 + particle.speed
              }s ease-in-out infinite`,
              animationDelay: `${particle.id * 0.2}s`,
              willChange: "transform",
            }}
          />
        );
      })}

      {[...Array(9)].map((_, i) => (
        <div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full dark:block hidden bg-blue-400 opacity-20"
          style={{
            left: `${20 + (i % 3) * 30}%`,
            top: `${20 + Math.floor(i / 3) * 30}%`,
            transform: `translate3d(-50%, -50%, 0)`,
          }}
        />
      ))}
    </div>
  );
};

export default InteractiveBackground;
