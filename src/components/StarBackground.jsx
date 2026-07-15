import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      const count = Math.min(
        150,
        Math.max(70, Math.floor((window.innerWidth * window.innerHeight) / 11000))
      );

      setStars(
        Array.from({ length: count }, (_, id) => ({
          id,
          size: Math.random() * 1.8 + 0.5,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.55 + 0.2,
          duration: Math.random() * 5 + 3,
        }))
      );
    };

    setMeteors(
      Array.from({ length: 3 }, (_, id) => ({
        id,
        size: Math.random() * 1.2 + 0.7,
        x: 20 + Math.random() * 80,
        y: Math.random() * 35,
        delay: Math.random() * 18,
        duration: Math.random() * 3 + 6,
      }))
    );

    generateStars();
    window.addEventListener("resize", generateStars);
    return () => window.removeEventListener("resize", generateStars);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute -left-48 -top-48 h-[38rem] w-[38rem] rounded-full bg-primary/[0.07] blur-[130px]" />
      <div className="absolute -right-56 top-[38%] h-[42rem] w-[42rem] rounded-full bg-cyan-400/[0.045] blur-[150px]" />
      <div className="space-grid absolute inset-0 opacity-60" />
      <div className="absolute left-1/2 top-[16%] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-primary/[0.055]" />
      <div className="absolute left-1/2 top-[16%] h-[31rem] w-[31rem] -translate-x-1/2 rounded-full border border-cyan-300/[0.045]" />

      {stars.map((star) => (
        <span
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.duration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 72 + "px",
            height: meteor.size + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.duration + "s",
          }}
        />
      ))}

      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};
