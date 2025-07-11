import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

// Import paintings
import img1 from "@/assets/WhatsApp Image 2025-07-09 at 15.25.39_ab6aa83d.jpg";
import img2 from "@/assets/WhatsApp Image 2025-07-09 at 15.25.09_eea1788a.jpg";
import img3 from "@/assets/WhatsApp Image 2025-07-09 at 15.25.00_56951516.jpg";
import img4 from "@/assets/WhatsApp Image 2025-07-09 at 15.24.59_63e21f1b.jpg";
import img5 from "@/assets/WhatsApp Image 2025-07-09 at 15.24.58_107565de.jpg";
import img6 from "@/assets/WhatsApp Image 2025-07-09 at 15.24.57_114d3c5d.jpg";

import Dr1 from "@/assets/Dr1.jpg";
import Dr2 from "@/assets/Dr2.jpg";
import Dr3 from "@/assets/Dr3.jpg";
import Dr4 from "@/assets/Dr4.jpg";

interface Painting {
  id: number;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  image: string;
  description: string;
}

const paintings: Painting[] = [
  {
    id: 1,
    title: "Ethereal Dreams",
    year: 2024,
    medium: "Watercolor on Canvas",
    dimensions: '36" × 24"',
    image: img1,
    description:
      "A flowing composition of rose gold and lavender hues that captures the essence of dreams taking flight.",
  },
  {
    id: 2,
    title: "Garden Whispers",
    year: 2024,
    medium: "Watercolor on Paper",
    dimensions: '30" × 22"',
    image: img2,
    description:
      "Delicate florals dance in soft pastels, telling stories of secret gardens and morning dew.",
  },
  {
    id: 3,
    title: "Misty Mountains",
    year: 2023,
    medium: "Acrylic on Canvas",
    dimensions: '40" × 28"',
    image: img3,
    description:
      "An atmospheric landscape where earth meets sky in a symphony of purple and rose gold.",
  },
  {
    id: 4,
    title: "Portrait in Light",
    year: 2023,
    medium: "Oil on Canvas",
    dimensions: '24" × 18"',
    image: img4,
    description:
      "A contemporary portrait that explores the interplay of light and shadow on the human form.",
  },
  {
    id: 5,
    title: "Ocean Reverie",
    year: 2024,
    medium: "Mixed Media",
    dimensions: '32" × 24"',
    image: img5,
    description:
      "Abstract waves flow across the canvas, blending blues with rose gold in a meditation on water.",
  },
  {
    id: 6,
    title: "Cherry Blossom Dreams",
    year: 2023,
    medium: "Watercolor on Paper",
    dimensions: '26" × 20"',
    image: img6,
    description:
      "Delicate blossoms captured in their fleeting beauty, a celebration of spring's gentle arrival.",
  },
];

export function Gallery() {
  const [selectedPainting, setSelectedPainting] = useState<Painting | null>(
    null
  );
  // For Dr slider autoplay
  const drCarouselApi = useRef(null);
  const [isDrHovered, setIsDrHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!drCarouselApi.current) return;
    if (isDrHovered) return; // pause on hover
    const interval = setInterval(() => {
      if (drCarouselApi.current) {
        drCarouselApi.current.scrollNext();
      }
    }, 2000); // 10 seconds
    return () => clearInterval(interval);
  }, [isDrHovered]);

  useEffect(() => {
    if (selectedPainting === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedPainting]);

  return (
    <>
      <section
        ref={sectionRef}
        id="gallery"
        className="py-24 px-1 lg:px-4 hero-style-section"
      >
        {/* Hero-style floating shapes */}
        <div className="hero-floating-shapes">
          <div
            className="hero-floating-shape hero-floating-shape-primary top-16 left-8 w-28 h-28"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="hero-floating-shape hero-floating-shape-secondary top-32 right-12 w-20 h-20"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="hero-floating-shape hero-floating-shape-accent bottom-24 left-1/3 w-32 h-32"
            style={{ animationDelay: "4s" }}
          />
          <div
            className="hero-floating-shape hero-floating-shape-primary top-1/2 right-1/4 w-24 h-24"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="hero-floating-shape hero-floating-shape-secondary bottom-16 right-1/3 w-36 h-36"
            style={{ animationDelay: "3s" }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 hero-entrance">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">Gallery</h2>
            <div className="w-24 h-1 hero-shimmer-line mx-auto mb-8" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A curated collection of recent works exploring themes of nature,
              emotion, and contemporary beauty.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paintings.map((painting) => (
              <Card
                key={painting.id}
                className="hero-glass hover-lift hover-glass cursor-pointer group overflow-hidden"
                onClick={() => setSelectedPainting(painting)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={painting.image}
                    alt={painting.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                    {painting.title}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      {painting.year}
                    </Badge>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {painting.medium}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {painting.dimensions}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        {/* Modal */}
        {selectedPainting && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto border border-white/20 dark:border-gray-700/20 shadow-elegant">
              <div className="relative">
                <button
                  onClick={() => setSelectedPainting(null)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors border border-white/20 dark:border-gray-700/20"
                >
                  <X className="h-6 w-6 text-gray-900 dark:text-white" />
                </button>

                <div className="md:flex">
                  <div className="md:w-2/3">
                    <img
                      src={selectedPainting.image}
                      alt={selectedPainting.title}
                      loading="lazy"
                      className="w-full select-none h-auto rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
                    />
                  </div>

                  <div className="md:w-1/3 p-8">
                    <h3 className="text-2xl font-medium mb-4 text-gray-100 dark:text-white">
                      {selectedPainting.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-500">
                          Year:
                        </span>
                        <span className="text-gray-100 dark:text-white">
                          {selectedPainting.year}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-500">
                          Medium:
                        </span>
                        <span className="text-gray-100 dark:text-white">
                          {selectedPainting.medium}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-500">
                          Dimensions:
                        </span>
                        <span className="text-gray-100 dark:text-white">
                          {selectedPainting.dimensions}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-gray-500 leading-relaxed mb-8">
                      {selectedPainting.description}
                    </p>
                    <button
                      onClick={() => setSelectedPainting(null)}
                      className="absolute bottom-3 block lg:hidden right-1/2 z-10 py-2 transform translate-x-1/2  rounded-2xl text-white px-4 bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm hover:bg-primary/20 dark:hover:bg-primary/30 transition-colors border border-white/20 dark:border-gray-700/20"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="py-20 px-0 hero-style-section w-full">
        {/* Hero-style floating shapes for landscape section */}
        <div className="hero-floating-shapes">
          <div
            className="hero-floating-shape hero-floating-shape-primary top-16 left-8 w-28 h-28"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="hero-floating-shape hero-floating-shape-secondary top-32 right-12 w-20 h-20"
            style={{ animationDelay: "2s" }}
          />
          <div
            className="hero-floating-shape hero-floating-shape-accent bottom-24 left-1/3 w-32 h-32"
            style={{ animationDelay: "4s" }}
          />
        </div>

        <div className="w-full max-w-none relative z-10">
          <div className="text-center mb-12 hero-entrance">
            <h2 className="text-3xl md:text-4xl font-bold mb-4  ">
              Featured Landscape Works
            </h2>
            <div className="w-24 h-1 hero-shimmer-line mx-auto mb-4" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A special slider for wide landscape artworks.
            </p>
          </div>
          <Carousel
            className="w-full max-w-none"
            opts={{ loop: true }}
            setApi={(api) => (drCarouselApi.current = api)}
          >
            <CarouselContent
              onMouseEnter={() => setIsDrHovered(true)}
              onMouseLeave={() => setIsDrHovered(false)}
            >
              {[Dr1, Dr2, Dr3, Dr4].map((img, idx) => (
                <CarouselItem
                  key={idx}
                  className="flex items-center justify-center"
                >
                  <div className="w-full my-5  md:h-[700px] flex items-center justify-center overflow-hidden rounded-2xl shadow-elegant bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm mx-4 relative border border-white/20 dark:border-gray-700/20">
                    {/* Slider navigation buttons overlayed */}
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-800/90 shadow-lg border border-white/20 dark:border-gray-700/20" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-800/70 hover:bg-white/90 dark:hover:bg-gray-800/90 shadow-lg border border-white/20 dark:border-gray-700/20" />
                    <img
                      src={img}
                      alt={`Landscape ${idx + 1}`}
                      loading="lazy"
                      className="object-contain  w-full scale-105 transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </>
  );
}
