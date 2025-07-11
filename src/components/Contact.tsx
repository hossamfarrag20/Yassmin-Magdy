import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Youtube, Music2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  // EmailJS config from .env
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="hero-glass md:p-6 p-3  hover-lift hover-glass">
              <a
                href="https://www.facebook.com/YasmenArt246"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      Facebook
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      YasmenArt246
                    </p>
                  </div>
                </div>
              </a>
            </Card>

            <Card className="hero-glass md:p-6 p-3  hover-lift hover-glass">
              <a
                href="https://www.instagram.com/farrag.yasmen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                    <Instagram className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Instagram</h3>
                    <p className="text-muted-foreground">@farrag.yasment</p>
                  </div>
                </div>
              </a>
            </Card>

            {/* <Card className="hero-glass md:p-6 p-3  hover-lift hover-glass">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>
            </Card> */}
            <Card className="hero-glass md:p-6 p-3  hover-lift hover-glass">
              <a
                href="https://www.tiktok.com/@yasmin.magdy0?lang=ar"
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                    <Music2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">TikTok</h3>
                    <p className="text-muted-foreground">@yasmin.magdy0</p>
                  </div>
                </div>
              </a>
            </Card>
            <Card className="hero-glass md:p-6 p-3  hover-lift hover-glass">
              <a
                href="https://www.youtube.com/@drawwithyasmen103/shorts"
                target="_blank"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 dark:bg-primary/20">
                    <Youtube className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">YouTube</h3>
                    <p className="text-muted-foreground">@drawwithyasmen103</p>
                  </div>
                </div>
              </a>
            </Card>
          </div>

          <Card className="hero-glass md:p-8 p-6">
            <h3 className="text-xl font-medium mb-6 text-foreground">
              Send a Message
            </h3>
            <form
              ref={formRef}
              className="space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);
                setError(null);
                setSuccess(false);
                try {
                  const result = await emailjs.sendForm(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    formRef.current!,
                    EMAILJS_PUBLIC_KEY
                  );
                  setSuccess(true);
                  formRef.current?.reset();
                } catch (err: any) {
                  setError(
                    "An error occurred while sending the message. Please try again."
                  );
                } finally {
                  setLoading(false);
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-primary/20 dark:border-primary/30 focus:border-primary/40 dark:focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-primary/20 dark:border-primary/30 focus:border-primary/40 dark:focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 dark:bg-gray-800/10 backdrop-blur-sm border border-primary/20 dark:border-primary/30 focus:border-primary/40 dark:focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/30 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                  placeholder="Tell me about your project or inquiry..."
                  required
                />
              </div>

              <Button
                className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 dark:from-pink-600 dark:via-purple-600 dark:to-blue-600 hover:opacity-90 transition-opacity text-white"
                type="submit"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>
              {success && (
                <div className="text-green-600 mt-3 text-center">
                  Message sent successfully!
                </div>
              )}
              {error && (
                <div className="text-red-600 mt-3 text-center">{error}</div>
              )}
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
