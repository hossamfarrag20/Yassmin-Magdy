import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";

gsap.registerPlugin(ScrollTrigger);

import img1 from "@/assets/event/484987443_681576937729106_6986287285417624304_n.jpg";
import img2 from "@/assets/event/484996549_681576994395767_3755048521476860645_n.jpg";
import img3 from "@/assets/event/485303367_681576867729113_6888713403313476141_n.jpg";
import img4 from "@/assets/event/485402028_681576887729111_6579736225558745539_n.jpg";
import img5 from "@/assets/event/485177031_681576964395770_4944721135658801516_n.jpg";
import img6 from "@/assets/event/485362744_681576844395782_6163930667989197850_n.jpg";
import img7 from "@/assets/event/485859062_681576861062447_7969132095330397945_n.jpg";
import img8 from "@/assets/event/485160663_681576934395773_5991031410210214572_n.jpg";
import img9 from "@/assets/event/485150581_681576891062444_4402044553819574706_n.jpg";
import img10 from "@/assets/event/485175731_681577041062429_8380429482952411658_n.jpg";
import img11 from "@/assets/event/485768314_681576947729105_2142216022462359154_n.jpg";
import img12 from "@/assets/event/485816016_681576897729110_1416811995902454211_n.jpg";
import img13 from "@/assets/event/484950482_681576894395777_7166497594912754994_n.jpg";
import img14 from "@/assets/event/484962017_681576981062435_9111166905097091411_n (1).jpg";

const eventImages = [
  { src: img1, rotate: "-6deg", size: "w-[180px] md:w-[220px]" },
  { src: img2, rotate: "4deg", size: "w-[200px] md:w-[240px]" },
  { src: img3, rotate: "-3deg", size: "w-[170px] md:w-[210px]" },
  { src: img4, rotate: "7deg", size: "w-[210px] md:w-[250px]" },
  { src: img5, rotate: "-8deg", size: "w-[190px] md:w-[230px]" },
  { src: img6, rotate: "5deg", size: "w-[220px] md:w-[260px]" },
  { src: img7, rotate: "-5deg", size: "w-[180px] md:w-[220px]" },
  { src: img8, rotate: "9deg", size: "w-[200px] md:w-[240px]" },
  { src: img9, rotate: "-4deg", size: "w-[170px] md:w-[210px]" },
  { src: img10, rotate: "6deg", size: "w-[210px] md:w-[250px]" },
  { src: img11, rotate: "-7deg", size: "w-[190px] md:w-[230px]" },
  { src: img12, rotate: "3deg", size: "w-[220px] md:w-[260px]" },
  { src: img13, rotate: "-5deg", size: "w-[180px] md:w-[220px]" },
  { src: img14, rotate: "8deg", size: "w-[200px] md:w-[240px]" },
];

const emojis = ["🎉", "📸", "✨", "🎨", "🥳", "🖼️", "🌟", "🎊"];

export function Events() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Modal state
  const [modalImg, setModalImg] = useState<string | null>(null);
  // Embla carousel
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
    containScroll: "trimSnaps",
    slidesToScroll: 1,
    align: "start",
  });

  // زرار previous/next state
  const [isPrevEnabled, setPrevEnabled] = useState(false);
  const [isNextEnabled, setNextEnabled] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setPrevEnabled(emblaApi.canScrollPrev());
      setNextEnabled(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      if (emblaApi) emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Arrow navigation handlers
  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") scrollNext();
      if (e.key === "ArrowLeft") scrollPrev();
      if (e.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [emblaApi]);

  // Drag-to-scroll state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Drag/Touch Handlers
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - gallery.offsetLeft;
      scrollLeft.current = gallery.scrollLeft;
      gallery.classList.add("dragging");
    };
    const onMouseLeave = () => {
      isDragging.current = false;
      gallery.classList.remove("dragging");
    };
    const onMouseUp = () => {
      isDragging.current = false;
      gallery.classList.remove("dragging");
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - gallery.offsetLeft;
      const walk = (x - startX.current) * 1.2; // scroll-fast
      gallery.scrollLeft = scrollLeft.current - walk;
    };
    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      isDragging.current = true;
      startX.current = e.touches[0].pageX - gallery.offsetLeft;
      scrollLeft.current = gallery.scrollLeft;
      gallery.classList.add("dragging");
    };
    const onTouchEnd = () => {
      isDragging.current = false;
      gallery.classList.remove("dragging");
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - gallery.offsetLeft;
      const walk = (x - startX.current) * 1.2;
      gallery.scrollLeft = scrollLeft.current - walk;
    };
    gallery.addEventListener("mousedown", onMouseDown);
    gallery.addEventListener("mouseleave", onMouseLeave);
    gallery.addEventListener("mouseup", onMouseUp);
    gallery.addEventListener("mousemove", onMouseMove);
    gallery.addEventListener("touchstart", onTouchStart);
    gallery.addEventListener("touchend", onTouchEnd);
    gallery.addEventListener("touchmove", onTouchMove);
    return () => {
      gallery.removeEventListener("mousedown", onMouseDown);
      gallery.removeEventListener("mouseleave", onMouseLeave);
      gallery.removeEventListener("mouseup", onMouseUp);
      gallery.removeEventListener("mousemove", onMouseMove);
      gallery.removeEventListener("touchstart", onTouchStart);
      gallery.removeEventListener("touchend", onTouchEnd);
      gallery.removeEventListener("touchmove", onTouchMove);
    };
  }, []);

  // Modal close handlers
  useEffect(() => {
    if (!modalImg) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImg(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalImg]);

  useEffect(() => {
    if (!scrollRef.current) return;
    const cards = scrollRef.current.querySelectorAll(".event-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "left 90%",
            end: "left 60%",
            scrub: false,
            toggleActions: "play none none reverse",
          },
          delay: i * 0.08,
        }
      );
    });
  }, []);

  // Parallax floating emojis
  useEffect(() => {
    if (!scrollRef.current) return;
    const emojiEls = scrollRef.current.querySelectorAll(".parallax-emoji");
    window.addEventListener("scroll", () => {
      emojiEls.forEach((el, i) => {
        const speed = 0.2 + (i % 3) * 0.1;
        (el as HTMLElement).style.transform = `translateY(${
          window.scrollY * speed
        }px)`;
      });
    });
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="relative w-full h-screen hero-style-section overflow-hidden py-20"
      >
        {/* Hero-style floating shapes */}
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
        {/* Parallax emojis */}
        <div className="absolute left-0 top-0 w-full h-full z-0 pointer-events-none select-none">
          {emojis.map((emoji, i) => (
            <span
              key={i}
              className="parallax-emoji text-5xl md:text-7xl opacity-10 dark:opacity-20 absolute"
              style={{
                left: `${10 + ((i * 12) % 80)}%`,
                top: `${10 + ((i * 15) % 80)}%`,
                zIndex: 1,
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        {/* Sticky Heading */}
        <div className="sticky top-0 z-20 flex justify-center mb-8 ">
          <h2 className="text-3xl md:text-4xl font-bold text-center  px-8 py-4 ">
            Last Event Highlights
          </h2>
        </div>
        <div className="w-24 h-1 hero-shimmer-line mx-auto mb-8" />
        {/* Slider Controls */}
        <div className="flex justify-center items-center gap-4 mb-4 ">
          <button
            className="bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-800/90 shadow-lg border border-white/20 dark:border-gray-700/20 rounded-full p-2"
            onClick={scrollPrev}
            aria-label="Previous"
            disabled={!isPrevEnabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-800/90 shadow-lg border border-white/20 dark:border-gray-700/20 rounded-full p-2"
            onClick={scrollNext}
            aria-label="Next"
            disabled={!isNextEnabled}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        {/* Embla Carousel */}
        <div className="overflow-hidden px-12" ref={emblaRef}>
          <div className="flex gap-8 px-12 md:px-24 h-[420px] md:h-[520px] items-center">
            {eventImages.map((img, i) => (
              <div
                key={i}
                className={`event-card select-none flex-shrink-0 relative bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-xl shadow-2xl border-2 border-white/20 dark:border-gray-700/20 flex items-center justify-center ${img.size} h-[260px] md:h-[340px] transition-transform duration-500 hover:scale-105 hover:rotate-1 cursor-pointer`}
                style={{
                  minWidth: 260, // أو استخدم minWidth مناسب لحجم الكارت
                  maxWidth: 350,
                  transform: `rotate(${img.rotate})`,
                }}
                onClick={() => setModalImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={`Event photo ${i + 1}`}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-xl pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
            {/* View Full Album Button */}
            <div className="flex flex-col items-center justify-center min-w-[200px] me-12">
              <button className="bg-gradient-to-r whitespace-nowrap from-pink-500 via-purple-500 to-blue-500 dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 text-white font-bold py-4 px-8 rounded-xl shadow-xl text-lg hover:scale-105 transition-all">
                <a
                  href="https://www.instagram.com/farrag.yasmen/"
                  target="_blank"
                >
                  View Full Album
                </a>
              </button>
            </div>
          </div>
        </div>
        <style>{`
        section::-webkit-scrollbar { height: 12px; background: #18181b; }
        section::-webkit-scrollbar-thumb { background: #a78bfa; border-radius: 6px; }
        .dragging { cursor: grabbing !important; }
        @keyframes fadein { from { opacity: 0; } to { opacity: 1; } }
        .animate-fadein { animation: fadein 0.2s; }
        @keyframes zoomin { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-zoomin { animation: zoomin 0.25s; }
        `}</style>
      </section>
      {/* Modal */}
      <div className="">
        {modalImg && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadein"
            onClick={() => setModalImg(null)}
          >
            <div className="px-5">
              <div
                className="relative max-w-3xl max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={modalImg}
                  alt="Event Large"
                  loading="lazy"
                  className="rounded-2xl shadow-2xl max-w-full max-h-[80vh] animate-zoomin"
                  draggable={false}
                />
                <button
                  className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
                  onClick={() => setModalImg(null)}
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
