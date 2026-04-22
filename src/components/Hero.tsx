import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { Search, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const images = useRef<HTMLImageElement[]>([]);
  const frameCount = 148;


  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Map scroll progress to image index (1 to 148)
  const frameIndex = useTransform(scrollYProgress, [0, 1], [1, frameCount]);

  useEffect(() => {
    let loadedCount = 0;
    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const frameNum = i.toString().padStart(3, "0");
        img.src = `/herosection/images/ezgif-frame-${frameNum}.jpg`;
        img.onload = () => {
          loadedCount++;
        };
        images.current[i] = img;
      }
    };

    preloadImages();

    // Initial draw
    const firstImg = new Image();
    firstImg.src = "/herosection/images/ezgif-frame-001.jpg";
    firstImg.onload = () => {
      renderCanvas(1);
    };

    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderCanvas(frameIndex.get());
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderCanvas = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imgIndex = Math.floor(index);
    const img = images.current[imgIndex] || images.current[1];

    if (img && (img.complete || img.height > 0)) {
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const imgWidth = img.width;
      const imgHeight = img.height;

      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const x = (canvasWidth - imgWidth * scale) / 2;
      const y = (canvasHeight - imgHeight * scale) / 2;

      ctx.clearRect(0, 0, canvasWidth, canvasHeight);
      ctx.drawImage(img, x, y, imgWidth * scale, imgHeight * scale);
    }
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderCanvas(latest);
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1, 1, 0, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-coffee-dark">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Canvas Animation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-coffee-dark/80 z-10" />

        {/* Content */}
        <div className="relative z-20 h-full flex items-center justify-center">
          <motion.div
            style={{ opacity: contentOpacity, scale: contentScale }}
            className="max-w-7xl mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-extrabold mb-6 leading-tight">
                <span className="block text-white">A Cup That</span>
                <span className="text-gradient">Feels Like Home</span>
              </h1>

              <p className="text-lg md:text-2xl text-coffee-cream/80 max-w-2xl mx-auto mb-10 leading-relaxed px-4 md:px-0">
                Experience the art of coffee making in a cozy atmosphere.
                From bean to cup, we serve happiness in every sip.
              </p>

              {/* Search Bar */}
              <div className="flex flex-col md:flex-row items-center gap-4 max-w-3xl mx-auto bg-white/10 backdrop-blur-xl p-3 md:p-2 rounded-2xl md:rounded-3xl border border-white/20 shadow-2xl">
                <div className="flex items-center gap-3 px-4 w-full md:w-1/3 border-b md:border-b-0 md:border-r border-white/10 py-3">
                  <MapPin className="w-5 h-5 text-coffee-light" />
                  <select className="bg-transparent text-coffee-cream outline-none w-full cursor-pointer appearance-none">
                    <option className="bg-coffee-dark">Select Location</option>
                    <option className="bg-coffee-dark">Downtown</option>
                    <option className="bg-coffee-dark">Green Valley</option>
                    <option className="bg-coffee-dark">Urban Square</option>
                  </select>
                </div>
                <div className="flex items-center gap-3 px-4 w-full flex-1 py-3">
                  <Search className="w-5 h-5 text-coffee-light" />
                  <input
                    type="text"
                    placeholder="Search your favorite coffee..."
                    className="bg-transparent text-coffee-cream outline-none w-full placeholder:text-coffee-cream/40"
                  />
                </div>
                <button className="w-full md:w-auto px-8 py-4 bg-coffee-accent hover:bg-coffee-light text-coffee-cream rounded-xl font-bold transition-all shadow-xl hover:scale-105 active:scale-95">
                  Find Now
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-coffee-cream/40 text-xs uppercase tracking-widest">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-coffee-accent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
