import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Palette, Heart, Sparkles } from "lucide-react";

export function About() {
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

  return (
    <section ref={sectionRef} className="py-24 px-4 hero-style-section">
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

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="hero-entrance">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 ">
              About the Artist
            </h2>

            <div className="w-24 h-1 hero-shimmer-line mx-auto mb-8" />

            <div className="space-y-6 text-muted-foreground leading-relaxed relative z-30">
              <p className="text-lg">
                <strong className="text-black dark:text-white">
                  Yassmin Magdy
                </strong>{" "}
                is a contemporary artist whose work explores the delicate
                intersection of emotion and color. Based in the Pacific
                Northwest, her paintings draw inspiration from the natural world
                and the subtle moments that define our everyday experiences.
              </p>

              <p>
                Working primarily in watercolor and mixed media, Yassmin creates
                ethereal compositions that invite viewers into a world of soft
                beauty and contemplative calm. Her use of rose gold, lavender,
                and cream tones has become a signature element that speaks to
                themes of femininity, grace, and inner strength.
              </p>

              <p>
                Each painting begins as an emotional response—to a fleeting
                moment of light, a whispered conversation, or the way shadows
                dance across a wall. Through her art, Yassmin seeks to capture
                these intangible experiences and transform them into something
                tangible and shared.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Card className="hero-glass p-6 hover-lift hover-glass">
              <div className="flex items-start gap-4 relative">
                <div className="p-3 rounded-full bg-primary/10 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] lg:static lg:translate-y-0 lg:translate-x-0  dark:bg-primary/20">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2  text-gray-900 dark:text-white">
                    Artistic Philosophy
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    "Art should be a gentle conversation between the artist and
                    viewer, where color and form speak the language of emotion."
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hero-glass p-6 hover-lift hover-glass">
              <div className="flex items-start gap-4 relative">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] lg:static lg:translate-y-0 lg:translate-x-0">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-foreground">
                    Inspiration
                  </h3>
                  <p className="text-muted-foreground">
                    Drawing from nature's quiet moments, feminine strength, and
                    the poetry found in everyday light and shadow.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hero-glass p-6 hover-lift hover-glass">
              <div className="flex items-start gap-4 relative">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[100%] lg:static lg:translate-y-0 lg:translate-x-0">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">
                    Technique
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Specializing in watercolor, mixed media, and contemporary
                    approaches to traditional painting methods.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
