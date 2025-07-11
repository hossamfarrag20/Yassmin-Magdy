import { useState, useEffect } from "react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { Hero } from "@/components/Hero";
import { Gallery } from "@/components/Gallery";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { ScrollingBrush } from "@/components/ScrollingBrush";
import { StudentsGallery } from "@/components/StudentsGallery";
import { Events } from "@/components/Events";
import { UpcomingEvent } from "@/components/UpcomingEvent";
import { SocialSidebar } from "@/components/SocialSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  const [align, setAlign] = useState<"left" | "right">("right");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      // Change side at halfway point
      if (scrollY > docHeight / 2) {
        setAlign("left");
      } else {
        setAlign("right");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <AnimatedBackground />
      <ScrollingBrush align={align} />
      <ThemeToggle />

      <main>
        <Hero />
        <Gallery />
        <About />
        <StudentsGallery />
        <Events />
        <UpcomingEvent />
        <SocialSidebar />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/10 dark:border-primary/20 hero-style-section">
        {/* Hero-style floating shapes */}
        <div className="hero-floating-shapes">
          <div
            className="hero-floating-shape hero-floating-shape-primary top-4 left-1/4 w-16 h-16"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="hero-floating-shape hero-floating-shape-secondary bottom-4 right-1/4 w-12 h-12"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-muted-foreground">
            © 2024 Yassmin Magdy. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
