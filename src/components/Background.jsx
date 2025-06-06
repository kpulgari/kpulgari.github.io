import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Star({ style }) {
  return (
    <div
      className="absolute rounded-full bg-white animate-twinkle"
      style={{
        ...style,
        boxShadow: "0 0 4px #fff",
      }}
    />
  );
}

function Particle({ style }) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-r from-blue-100 to-purple-100 animate-float"
      style={{
        ...style,
        filter: "blur(8px)",
      }}
    />
  );
}

Star.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    left: PropTypes.string,
    top: PropTypes.string,
    animationDelay: PropTypes.string,
    animationDuration: PropTypes.string,
  }).isRequired,
};

Particle.propTypes = {
  style: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
    left: PropTypes.string,
    top: PropTypes.string,
    animationDelay: PropTypes.string,
    animationDuration: PropTypes.string,
  }).isRequired,
};

export default function Background() {
  const [stars, setStars] = useState([]);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          size: Math.random() * 2 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        });
      }
      setStars(newStars);
    };

    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 8; i++) {
        newParticles.push({
          id: i,
          size: Math.random() * 200 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 10}s`,
          animationDuration: `${Math.random() * 20 + 20}s`,
        });
      }
      setParticles(newParticles);
    };

    generateStars();
    generateParticles();
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      <div className="dark:opacity-100 opacity-0 transition-opacity duration-500">
        {stars.map((star) => (
          <Star
            key={star.id}
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            }}
          />
        ))}
      </div>

      <div className="dark:opacity-0 opacity-100 transition-opacity duration-200">
        {particles.map((particle) => (
          <Particle
            key={particle.id}
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>
    </div>
  );
}
