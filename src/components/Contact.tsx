import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Instagram, Phone, MapPin } from "lucide-react";

export function Contact() {
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
          className="hero-floating-shape hero-floating-shape-primary top-20 left-8 w-32 h-32"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-secondary top-40 right-12 w-24 h-24"
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

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16 hero-entrance">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get in Touch
          </h2>
          <div className="w-24 h-1 hero-shimmer-line mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Interested in commissioning a piece or learning more about available
            works? I'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="hero-glass p-6 hover-lift hover-glass">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Email
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Yassmin@YassminMagdy.art
                  </p>
                </div>
              </div>
            </Card>

            <Card className="hero-glass p-6 hover-lift hover-glass">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Instagram className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Instagram</h3>
                  <p className="text-muted-foreground">@YassminMagdyart</p>
                </div>
              </div>
            </Card>

            <Card className="hero-glass p-6 hover-lift hover-glass">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card>

            <Card className="hero-glass p-6 hover-lift hover-glass">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Studio</h3>
                  <p className="text-muted-foreground">
                    Pacific Northwest
                    <br />
                    Available by appointment
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <Card className="hero-glass p-8">
            <h3 className="text-xl font-medium mb-6 text-foreground">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-primary/20 dark:border-primary/30 focus:border-primary/40 dark:focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-primary/20 dark:border-primary/30 focus:border-primary/40 dark:focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-primary/20 dark:border-primary/30 focus:border-primary/40 dark:focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 hover:opacity-90 transition-opacity text-white">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
