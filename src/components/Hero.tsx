import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

// Import event images
import eventImg1 from "@/assets/event/484987443_681576937729106_6986287285417624304_n.jpg";
import eventImg2 from "@/assets/event/484996549_681576994395767_3755048521476860645_n.jpg";
import eventImg3 from "@/assets/event/485303367_681576867729113_6888713403313476141_n.jpg";
import eventImg4 from "@/assets/event/485402028_681576887729111_6579736225558745539_n.jpg";
import eventImg5 from "@/assets/event/485177031_681576964395770_4944721135658801516_n.jpg";
import eventImg6 from "@/assets/event/485362744_681576844395782_6163930667989197850_n.jpg";
import eventImg7 from "@/assets/event/485859062_681576861062447_7969132095330397945_n.jpg";

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Parallax scroll effect for images
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.5;

      imageRefs.current.forEach((img, index) => {
        if (img) {
          const speed = 0.2 + index * 0.1;
          img.style.transform = `translateY(${
            rate * speed
          }px) rotate(${getRotation(index)}deg)`;
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getRotation = (index: number) => {
    const rotations = [-6, 4, 8, -3, 12, -8, 2];
    return rotations[index] || 0;
  };

  const scrollToGallery = () => {
    document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative Background Images */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Image 1 - Top Left */}
        <img
          ref={(el) => (imageRefs.current[0] = el)}
          src={eventImg1}
          alt=""
          loading="lazy"
          className="absolute lg:top-16 top-32 lg:left-8 left-2 w-[150px] md:w-[200px] lg:w-[250px] opacity-20 rotate-[-6deg] pointer-events-none rounded-lg transition-transform duration-300 hover:scale-110"
        />

        {/* Image 2 - Top Right */}
        <img
          ref={(el) => (imageRefs.current[1] = el)}
          src={eventImg2}
          alt=""
          loading="lazy"
          className="absolute lg:top-24 top-4  md:right-12  w-[180px] md:w-[230px] lg:w-[280px] opacity-15 rotate-[4deg] pointer-events-none rounded-lg transition-transform duration-300 hover:scale-110"
        />

        {/* Image 3 - Middle Left */}
        <img
          ref={(el) => (imageRefs.current[2] = el)}
          src={eventImg3}
          alt=""
          loading="lazy"
          className="absolute top-1/3 left-4 w-[160px] md:w-[210px] lg:w-[260px] opacity-20 rotate-[8deg] pointer-events-none rounded-lg transition-transform duration-300 hover:scale-110"
        />

        {/* Image 4 - Middle Right */}
        <img
          ref={(el) => (imageRefs.current[3] = el)}
          src={eventImg4}
          alt=""
          loading="lazy"
          className="absolute top-1/2 right-6 w-[140px] md:w-[190px] lg:w-[240px] opacity-20 rotate-[-3deg] pointer-events-none rounded-lg transition-transform duration-300 hover:scale-110"
        />

        {/* Image 5 - Bottom Left */}
        <img
          ref={(el) => (imageRefs.current[4] = el)}
          src={eventImg5}
          alt=""
          loading="lazy"
          className="absolute bottom-32 left-20 w-[200px] md:w-[250px] lg:w-[300px] opacity-20 rotate-[12deg] pointer-events-none rounded-lg transition-transform duration-300 hover:scale-110"
        />

        {/* Image 6 - Bottom Right */}
        <img
          ref={(el) => (imageRefs.current[5] = el)}
          src={eventImg6}
          alt=""
          loading="lazy"
          className="absolute top-5 left-96 w-[170px] md:w-[220px] lg:w-[270px] opacity-15 rotate-[-8deg] pointer-events-none rounded-lg transition-transform duration-300 hover:scale-110"
        />

        {/* Image 7 - Center Top */}
        <img
          ref={(el) => (imageRefs.current[6] = el)}
          src={eventImg7}
          alt=""
          loading="lazy"
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-[190px] md:w-[240px] lg:w-[290px] opacity-15 rotate-[2deg] pointer-events-none rounded-lg transition-transform duration-300 hover:scale-110"
        />
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
        <div
          className="absolute top-40 right-16 w-24 h-24 bg-primary-glow/10 rounded-full blur-lg animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="container mx-auto px-4 text-center z-10 relative mt-20">
        <div className="glass rounded-3xl p-12 md:p-16 max-w-4xl mx-auto   opacity-0 translate-y-8 transition-all duration-1000 ease-out [.animate-in_&]:opacity-100 [.animate-in_&]:translate-y-0">
          <h1 className="text-3xl  md:text-7xl py-3 font-light  mb-6 bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
            Yassmin Magdy
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
            Contemporary Artist & Painter
          </p>

          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-8 rounded-full animate-shimmer" />

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Explore a world of ethereal beauty through watercolor dreams and
            contemporary visions. Each piece tells a story of emotion, color,
            and the delicate balance between light and shadow.
          </p>

          <Button
            onClick={scrollToGallery}
            variant="outline"
            size="lg"
            className="glass-subtle hover-glass hover-lift group border-primary/30 text-primary hover:text-primary-foreground"
          >
            View Gallery
            <ArrowDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute top-[95%] left-1/2 animate-bounce z-10"
        onClick={scrollToGallery}
      >
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex transform -translate-x-1/2 justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
