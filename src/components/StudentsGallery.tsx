import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import img1 from "@/assets/students/500378176_1403848591786886_8946440781533982411_n.jpg";
import img2 from "@/assets/students/500025973_1403848345120244_7074424651415094527_n.jpg";
import img3 from "@/assets/students/501574664_1403848298453582_4404519424533006083_n.jpg";
import img4 from "@/assets/students/499916060_1403848265120252_8369344639305039859_n.jpg";
import img5 from "@/assets/students/499861583_1403848218453590_3309864906910899587_n.jpg";
import img6 from "@/assets/students/499931625_1403848498453562_5121781272412431123_n.jpg";
import img7 from "@/assets/students/499928216_1403848458453566_8370494025584536237_n.jpg";
import img8 from "@/assets/students/500342821_1403849031786842_6583826293559132897_n.jpg";
import img9 from "@/assets/students/500911599_1403848888453523_8694771086495121931_n.jpg";
import { AnimatedBackground } from "./AnimatedBackground";

const studentImages = [
  { src: img1, top: "10%", left: "8%", rotate: "-8deg", size: "w-40 md:w-56" },
  { src: img2, top: "20%", left: "35%", rotate: "6deg", size: "w-48 md:w-64" },
  { src: img3, top: "55%", left: "15%", rotate: "12deg", size: "w-36 md:w-52" },
  {
    src: img4,
    top: "60%",
    left: "60%",
    rotate: "-10deg",
    size: "w-40 md:w-56",
  },
  { src: img5, top: "8%", left: "65%", rotate: "4deg", size: "w-44 md:w-60" },
  { src: img6, top: "35%", left: "75%", rotate: "-6deg", size: "w-36 md:w-48" },
  { src: img7, top: "40%", left: "50%", rotate: "8deg", size: "w-40 md:w-56" },
  {
    src: img8,
    top: "70%",
    left: "40%",
    rotate: "-12deg",
    size: "w-44 md:w-60",
  },
  { src: img9, top: "65%", left: "80%", rotate: "10deg", size: "w-40 md:w-56" },
];

export function StudentsGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [modalIdx, setModalIdx] = useState<number | null>(null);
  const modalImgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.from(containerRef.current.querySelectorAll(".student-img"), {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 1.1,
      ease: "power3.out",
    });
  }, []);

  // Interactive hover effect
  useEffect(() => {
    if (!containerRef.current) return;
    const imgs =
      containerRef.current.querySelectorAll<HTMLImageElement>(".student-img");
    imgs.forEach((img, i) => {
      if (hoveredIdx === null) {
        gsap.to(img, {
          scale: 1,
          filter: "brightness(1)",
          zIndex: 10 + i,
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (i === hoveredIdx) {
        gsap.to(img, {
          scale: 1.18,
          filter: "brightness(1.1) drop-shadow(0 8px 32px #fff2)",
          zIndex: 100,
          duration: 0.5,
          ease: "power2.out",
        });
      } else {
        // Move away from hovered image (calculate direction)
        const hovered = imgs[hoveredIdx];
        const rect1 = img.getBoundingClientRect();
        const rect2 = hovered.getBoundingClientRect();
        const dx =
          rect1.left + rect1.width / 2 - (rect2.left + rect2.width / 2);
        const dy =
          rect1.top + rect1.height / 2 - (rect2.top + rect2.height / 2);
        const dist = Math.sqrt(dx * dx + dy * dy) || 1;
        // Move away by 40px + a bit more if close
        const move = 40 + Math.max(0, 80 - dist);
        gsap.to(img, {
          scale: 0.92,
          x: (dx / dist) * move,
          y: (dy / dist) * move,
          filter: "brightness(0.85) blur(1px)",
          zIndex: 10 + i,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    });
  }, [hoveredIdx]);

  // Modal open animation
  useEffect(() => {
    if (modalIdx !== null && modalImgRef.current) {
      gsap.fromTo(
        modalImgRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [modalIdx]);

  // Close modal on Escape
  useEffect(() => {
    if (modalIdx === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [modalIdx]);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden flex flex-col items-center justify-center py-16 hero-style-section">
      {/* Hero-style floating shapes */}
      <AnimatedBackground />
      <div className="hero-floating-shapes">
        <div
          className="hero-floating-shape hero-floating-shape-primary top-20 left-10 w-32 h-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-secondary top-40 right-16 w-24 h-24"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-accent bottom-32 left-1/4 w-40 h-40"
          style={{ animationDelay: "4s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-primary top-1/2 left-1/3 w-28 h-28"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-secondary bottom-20 right-1/4 w-36 h-36"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <h2 className="text-4xl md:text-5xl font-bold  text-center mb-12 relative z-10">
        Latest Students Progress
      </h2>
      <div className="w-36 h-1 hero-shimmer-line mx-auto mb-8" />

      <div
        ref={containerRef}
        className="relative w-full h-full max-w-7xl mx-auto"
      >
        {studentImages.map((img, i) => (
          <img
            key={i}
            src={img.src}
            alt={`Student artwork ${i + 1}`}
            loading="lazy"
            className={`student-img absolute rounded-xl shadow-lg ${img.size} transition-transform duration-500 cursor-pointer`}
            style={{
              top: img.top,
              left: img.left,
              transform: `rotate(${img.rotate})`,
              zIndex: 10 + i,
            }}
            onMouseEnter={() => setHoveredIdx(i)}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => setModalIdx(i)}
          />
        ))}
      </div>
      {/* Modal */}
      {modalIdx !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setModalIdx(null)}
        >
          <img
            ref={modalImgRef}
            src={studentImages[modalIdx].src}
            alt="Student artwork enlarged"
            loading="lazy"
            className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl border-4 border-white object-contain"
            style={{ zIndex: 1000 }}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
