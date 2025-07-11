import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import brushImage from "@/assets/brush.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function ScrollingBrush({
  align = "right",
}: {
  align?: "left" | "right";
}) {
  const brushRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const brush = brushRef.current;
    if (!brush) return;

    // Smooth scroll-following for y
    const updateBrush = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const y = (scrollY / docHeight) * (window.innerHeight - 300) + 60;
      gsap.to(brush, {
        y: y,
        duration: 0.7,
        ease: "power2.out",
      });
    };
    window.addEventListener("scroll", updateBrush);
    updateBrush();
    return () => {
      window.removeEventListener("scroll", updateBrush);
    };
  }, []);

  // Animate x position when align changes
  useEffect(() => {
    const brush = brushRef.current;
    if (!brush) return;
    // Get brush width responsively
    const brushImg = brush.querySelector("img");
    let brushWidth = 192; // fallback for w-48 (48*4)
    if (brushImg) {
      brushWidth = brushImg.clientWidth || brushWidth;
    }
    // Move from right: 40px to left: 40px inside the viewport, responsive
    const x = align === "left" ? 40 : window.innerWidth - 40 - brushWidth;
    // Animate x position
    gsap.to(brush, {
      x: x,
      duration: 1.2,
      ease: "power3.inOut",
    });
    // Animate rotateZ for the brush image
    if (brushImg) {
      gsap.to(brushImg, {
        rotateZ: align === "left" ? 270 : 0,
        duration: 1.2,
        ease: "power3.inOut",
      });
    }
  }, [align]);

  return (
    <div
      ref={brushRef}
      className={`fixed top-0 z-30 pointer-events-none mix-blend-multiply dark:mix-blend-lighten`}
      style={{ left: 0, transform: "translate(0, 0)" }}
    >
      <img
        src={brushImage}
        alt="Brush"
        loading="lazy"
        className="w-36 h-36 md:w-56 md:h-56 lg:w-64 lg:h-64 opacity-90 filter drop-shadow-2xl"
        style={{
          filter:
            "drop-shadow(0 12px 24px rgba(0,0,0,0.18)) hue-rotate(340deg) saturate(1.2)",
          backfaceVisibility: "hidden",
        }}
      />
      {/* Paint trail effect */}
      <div className="absolute -bottom-1 lg:-bottom-7 left-1/2 transform -translate-x-1/2">
        <div className="w-2 h-20 md:w-4 md:h-32 lg:w-5 lg:h-40 bg-gradient-to-b from-primary/40 dark:from-primary/60 to-transparent rounded-full animate-pulse" />
      </div>
    </div>
  );
}
