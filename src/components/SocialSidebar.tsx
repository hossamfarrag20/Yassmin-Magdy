import { motion } from "framer-motion";

export function SocialSidebar() {
  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 320 512">
          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06H293V6.26S266.91 0 241.36 0c-73.66 0-121.19 44.38-121.19 124.72v70.62H89.09V288h31.08v224h92.66V288z" />
        </svg>
      ),
      href: "https://www.facebook.com/YasmenArt246",
      color: "hover:bg-blue-600 dark:hover:bg-blue-700 hover:text-white",
      delay: 0.1,
    },
    {
      name: "Instagram",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
        </svg>
      ),
      href: "https://www.instagram.com/farrag.yasmen/",
      color:
        "hover:bg-gradient-to-br hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 dark:hover:from-purple-700 dark:hover:via-pink-700 dark:hover:to-orange-600 hover:text-white",
      delay: 0.2,
    },
    {
      name: "TikTok",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 448 512"
        >
          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
        </svg>
      ),
      href: "https://www.tiktok.com/@yasmin.magdy0?lang=ar",
      color:
        "hover:bg-black hover:text-white dark:hover:bg-gray-800 dark:hover:text-white",
      delay: 0.3,
    },
    {
      name: "YouTube",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
          <path d="M549.65 124.08a68.9 68.9 0 0 0-48.68-48.73C456.58 64 288 64 288 64s-168.58 0-212.97 11.35a68.9 68.9 0 0 0-48.68 48.73C16 168.63 16 256 16 256s0 87.37 10.35 131.92a68.9 68.9 0 0 0 48.68 48.73C119.42 448 288 448 288 448s168.58 0 212.97-11.35a68.9 68.9 0 0 0 48.68-48.73C560 343.37 560 256 560 256s0-87.37-10.35-131.92zM232 336V176l142 80z" />
        </svg>
      ),
      href: "https://www.youtube.com/@drawwithyasmen103/featured",
      color:
        "hover:bg-red-600 hover:text-white dark:hover:bg-red-700 dark:hover:text-white",
      delay: 0.4,
    },
  ];

  return (
    <div className="fixed -right-3 lg:right-3 top-1/2 transform -translate-y-1/2 z-40 scale-[60%] lg:scale-90 xl:scale-100 hero-glass rounded-full">
      <div className="flex flex-col gap-4 p-3">
        {socialLinks.map((social, index) => (
          <motion.a
            target="_blank"
            key={social.name}
            href={social.href}
            initial={{ opacity: 0, x: 50, rotate: 45 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{
              duration: 0.6,
              delay: social.delay,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 6,
              transition: { duration: 0.2 },
            }}
            className={`
              group relative w-12 h-12 rounded-full hero-glass-subtle
              shadow-lg flex items-center justify-center 
              text-foreground transition-all duration-300 ease-in-out
              ${social.color}
              hover:shadow-xl hover-glass
            `}
          >
            {social.icon}

            {/* Tooltip */}
            <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900/80 dark:bg-gray-100/80 text-white dark:text-gray-900 text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap backdrop-blur-sm">
              {social.name}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900/80 dark:border-l-gray-100/80 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
