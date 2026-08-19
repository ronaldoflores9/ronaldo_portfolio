import { useEffect, useRef, useState } from "react";

const NEBULAE = [
  { id: 0, x: 6,  y: 8,  w: "42vw", h: "42vw", color: "hsl(265 80% 55% / 0.09)", delay: 0,  duration: 13 },
  { id: 1, x: 70, y: 4,  w: "34vw", h: "34vw", color: "hsl(245 80% 50% / 0.08)", delay: 4,  duration: 15 },
  { id: 2, x: 40, y: 60, w: "28vw", h: "28vw", color: "hsl(280 70% 60% / 0.06)", delay: 7,  duration: 18 },
  { id: 3, x: 80, y: 70, w: "22vw", h: "22vw", color: "hsl(260 75% 48% / 0.06)", delay: 2,  duration: 20 },
];

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDark, setIsDark] = useState(true);
  const farRef = useRef(null);
  const nearRef = useRef(null);
  const nebulaRef = useRef(null);

  // Track the active theme so the field adapts (stars/gradients) on toggle
  useEffect(() => {
    const root = document.documentElement;
    const update = () => setIsDark(root.classList.contains("dark"));
    update();
    const mo = new MutationObserver(update);
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => mo.disconnect();
  }, []);

  useEffect(() => {
    const generate = () => {
      const count = Math.min(160, Math.floor((window.innerWidth * window.innerHeight) / 10000));
      setStars(
        Array.from({ length: count }, (_, i) => ({
          id: i,
          size: Math.random() * 1.8 + 0.4,
          x: Math.random() * 100,
          y: Math.random() * 100,
          opacity: Math.random() * 0.4 + 0.3,
          duration: Math.random() * 4 + 3,
          delay: Math.random() * 6,
          near: Math.random() > 0.7,
        }))
      );
      setMeteors(
        Array.from({ length: 5 }, (_, i) => ({
          id: i,
          tail: Math.random() * 80 + 90, // 90–170px tail
          x: Math.random() * 90 + 5,
          y: Math.random() * 50,
          delay: i * 5 + Math.random() * 4,
          duration: Math.random() * 2.5 + 4.5, // 4.5–7s
        }))
      );
    };

    generate();
    window.addEventListener("resize", generate);

    // ── Parallax (mouse + scroll) ──
    let mx = 0, my = 0, raf;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5);
      my = (e.clientY / window.innerHeight - 0.5);
    };
    const loop = () => {
      const sy = window.scrollY;
      if (farRef.current)
        farRef.current.style.transform = `translate3d(${mx * 14}px, ${my * 14 - sy * 0.04}px, 0)`;
      if (nearRef.current)
        nearRef.current.style.transform = `translate3d(${mx * 34}px, ${my * 34 - sy * 0.09}px, 0)`;
      if (nebulaRef.current)
        nebulaRef.current.style.transform = `translate3d(${mx * 22}px, ${my * 22 - sy * 0.06}px, 0)`;
      raf = requestAnimationFrame(loop);
    };
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    if (finePointer) window.addEventListener("mousemove", onMouse);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("resize", generate);
      window.removeEventListener("mousemove", onMouse);
      cancelAnimationFrame(raf);
    };
  }, []);

  // Theme-aware visuals (dark = bright white cosmic field, light = subtle violet)
  const starColor = isDark ? "#ffffff" : "hsl(265 45% 45%)";
  const starGlow = isDark
    ? "0 0 8px 1px rgba(255, 255, 255, 0.5)"
    : "0 0 5px 1px hsl(265 60% 55% / 0.3)";
  const baseGradient = isDark
    ? "radial-gradient(ellipse 100% 60% at 50% -10%, hsl(265 60% 12% / 0.6), transparent 70%), radial-gradient(ellipse 80% 50% at 80% 110%, hsl(245 60% 14% / 0.5), transparent 70%)"
    : "radial-gradient(ellipse 100% 60% at 50% -10%, hsl(265 80% 92% / 0.55), transparent 70%), radial-gradient(ellipse 80% 50% at 80% 110%, hsl(245 80% 92% / 0.45), transparent 70%)";
  const meteorColor = isDark ? "#ffffff" : "hsl(265 60% 55%)";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      {/* Vertical space gradient */}
      <div className="absolute inset-0" style={{ background: baseGradient }} />

      {/* Nebula clouds (parallax layer) */}
      <div ref={nebulaRef} className="absolute inset-0">
        {NEBULAE.map((n) => (
          <div
            key={n.id}
            className="nebula-orb animate-nebula-pulse"
            style={{
              width: n.w,
              height: n.h,
              left: n.x + "%",
              top: n.y + "%",
              background: `radial-gradient(circle, ${n.color} 0%, transparent 70%)`,
              animationDelay: n.delay + "s",
              animationDuration: n.duration + "s",
            }}
          />
        ))}
      </div>

      {/* Far star layer */}
      <div ref={farRef} className="absolute inset-0">
        {stars.filter((s) => !s.near).map((s) => (
          <div
            key={s.id}
            className="star animate-pulse-subtle"
            style={{
              width: s.size + "px",
              height: s.size + "px",
              left: s.x + "%",
              top: s.y + "%",
              opacity: s.opacity,
              background: starColor,
              boxShadow: starGlow,
              animationDuration: s.duration + "s",
              animationDelay: s.delay + "s",
            }}
          />
        ))}
      </div>

      {/* Near star layer (more parallax) */}
      <div ref={nearRef} className="absolute inset-0">
        {stars.filter((s) => s.near).map((s) => (
          <div
            key={s.id}
            className="star animate-pulse-subtle"
            style={{
              width: s.size + "px",
              height: s.size + "px",
              left: s.x + "%",
              top: s.y + "%",
              opacity: s.opacity,
              background: starColor,
              boxShadow: starGlow,
              animationDuration: s.duration + "s",
              animationDelay: s.delay + "s",
            }}
          />
        ))}
      </div>

      {/* Shooting stars — bright head with a tapering tail */}
      {meteors.map((m) => (
        <div
          key={m.id}
          className="absolute animate-meteor"
          style={{
            left: m.x + "%",
            top: m.y + "%",
            animationDelay: m.delay + "s",
            animationDuration: m.duration + "s",
          }}
        >
          {/* Tail (trails behind the head) */}
          <div
            style={{
              position: "absolute",
              top: "1px",
              left: "2px",
              height: "1px",
              width: m.tail + "px",
              borderRadius: "9999px",
              transformOrigin: "left center",
              background: `linear-gradient(90deg, ${meteorColor}, transparent)`,
              opacity: 0.7,
            }}
          />
          {/* Head */}
          <div
            style={{
              position: "absolute",
              width: "3px",
              height: "3px",
              borderRadius: "9999px",
              background: meteorColor,
              boxShadow: isDark
                ? "0 0 8px 2px rgba(255, 255, 255, 0.7)"
                : "0 0 7px 2px hsl(265 60% 55% / 0.5)",
            }}
          />
        </div>
      ))}

      {/* Bottom fade into background */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40"
        style={{ background: "linear-gradient(to top, hsl(var(--background)), transparent)" }}
      />
    </div>
  );
};
