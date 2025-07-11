import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = [];
    const particleCount = 50;

    // Theme-aware colors
    const getColors = () => {
      const isDark = document.documentElement.classList.contains("dark");
      if (isDark) {
        return [
          "hsla(340, 80%, 65%, 0.4)", // brighter pink for dark mode
          "hsla(345, 85%, 70%, 0.35)", // brighter pink for dark mode
          "hsla(280, 40%, 75%, 0.25)", // brighter purple for dark mode
          "hsla(350, 50%, 75%, 0.3)", // brighter pink for dark mode
        ];
      } else {
        return [
          "hsla(340, 80%, 55%, 0.38)", // original pink
          "hsla(345, 85%, 60%, 0.32)", // original pink
          "hsla(280, 30%, 70%, 0.18)", // original purple
          "hsla(350, 40%, 70%, 0.22)", // original pink
        ];
      }
    };

    const colors = getColors();

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 5 + 2, // larger particles
        opacity: Math.random() * 0.3 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      active: false,
    };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update colors based on current theme
      const currentColors = getColors();
      particles.forEach((particle, index) => {
        // Update particle color based on theme
        particle.color =
          currentColors[Math.floor(Math.random() * currentColors.length)];
      });

      particles.forEach((particle, index) => {
        // Interactive: gently attract particles to mouse if active
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            particle.vx += dx * 0.0005;
            particle.vy += dy * 0.0005;
          }
        }
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Draw connections to nearby particles
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            const isDark = document.documentElement.classList.contains("dark");
            const connectionOpacity = isDark ? 0.15 : 0.1;
            ctx.strokeStyle = `hsla(340, 40%, 60%, ${
              connectionOpacity * (1 - distance / 100)
            })`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
