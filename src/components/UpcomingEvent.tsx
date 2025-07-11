import { motion } from "framer-motion";

const FACEBOOK_VIDEO_URL = "https://www.facebook.com/share/r/16jtKivepR/";
const YOUTUBE_SHORTS_URL =
  "https://youtube.com/shorts/_jsEazFk3c0?si=HupdkzsADU3zd_SK";
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/_jsEazFk3c0";
const FALLBACK_IMG = "https://img.youtube.com/vi/_jsEazFk3c0/hqdefault.jpg";

export function UpcomingEvent() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center py-12 px-4 md:px-12 hero-style-section overflow-hidden">
      {/* Hero-style floating shapes */}
      <div className="hero-floating-shapes">
        <div
          className="hero-floating-shape hero-floating-shape-primary top-12 left-10 w-60 h-60"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-secondary bottom-0 right-0 w-40 h-40"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-accent top-1/2 left-1/2 w-32 h-32"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-primary top-1/4 right-1/4 w-24 h-24"
          style={{ animationDelay: "3s" }}
        />
        <div
          className="hero-floating-shape hero-floating-shape-secondary bottom-1/4 left-1/4 w-36 h-36"
          style={{ animationDelay: "4s" }}
        />
      </div>
      <div className="relative z-10 flex flex-col md:flex-row w-full max-w-6xl gap-8 items-center justify-center">
        {/* Left: Facebook Video Embed or Fallback */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="w-full h-[550px] max-w-lg rounded-2xl overflow-hidden shadow-xl bg-black/40 dark:bg-black/60 flex items-center justify-center">
            <iframe
              src={`${YOUTUBE_EMBED_URL}?autoplay=0&modestbranding=1&rel=0`}
              width="100%"
              height="100%"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full min-h-[220px]"
              style={{ border: "none" }}
              title="Facebook Event Video"
            />
            {/* Fallback image with play button (hidden if iframe loads) */}
            <a
              href={FACEBOOK_VIDEO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/20 hover:bg-black/40 transition group"
            >
              {/* <img
                src={FALLBACK_IMG}
                alt="Facebook Event"
                className="w-24 h-24 opacity-60 group-hover:opacity-80"
              /> */}
              {/* <span className="absolute text-white text-5xl opacity-80 group-hover:opacity-100">
                ▶
              </span> */}
            </a>
          </div>
        </div>
        {/* Right: Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white/10 dark:bg-gray-800/10 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-lg flex flex-col gap-6 items-start border border-white/20 dark:border-gray-700/20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-2xl md:text-3xl font-bold  mb-2"
          >
            Ready to experience something artistic and unforgettable?
          </motion.h2>
          <motion.ul
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="text-gray-800/90 dark:text-white/90 text-lg md:text-xl font-medium space-y-3 list-disc pl-5"
          >
            <motion.li
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Open gallery full of vibrant paintings and stories
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Free entry for all art lovers
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Artists can display their work for only{" "}
              <span className="font-bold text-pink-600 dark:text-pink-400">
                100 EGP
              </span>
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Professional jury reviews and valuable prizes for the top 3
              artworks
            </motion.li>
            <motion.li
              variants={{
                hidden: { opacity: 0, x: 30 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Opportunity for exposure, feedback, and fame
            </motion.li>
          </motion.ul>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-700/80 dark:text-gray-300/80 text-base md:text-lg mt-2"
          >
            <span className="block font-semibold text-pink-600 dark:text-pink-400 mb-1">
              Note:
            </span>
            <span className="block">
              Visitors attend for{" "}
              <span className="font-bold text-green-600 dark:text-green-400">
                free
              </span>
              . Only artists pay to display.
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="w-full flex flex-col sm:flex-row gap-4 mt-4"
          >
            <a
              href="https://www.facebook.com/YasmenArt246"
              target="_blank"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-fuchsia-500 dark:from-pink-600 dark:via-purple-600 dark:to-fuchsia-600 text-white font-bold py-3 px-7 rounded-xl shadow-xl text-lg hover:scale-105 transition-all text-center"
            >
              Join as an Artist
            </a>
            <a
              href="https://www.facebook.com/reel/1240132784316145"
              target="_blank"
              className="bg-white/20 dark:bg-gray-700/20 text-gray-900 dark:text-white font-semibold py-3 px-7 rounded-xl shadow text-lg hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all text-center"
            >
              See Full Details
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
