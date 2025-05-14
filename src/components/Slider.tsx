"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";
import { SliderImages } from "@/constants/Index";

export default function Slider({ sliderImages = SliderImages }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);

  // Autoplay plugin setup
  const autoplay = Autoplay({ delay: 3000, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true },
    autoplayEnabled ? [autoplay] : [] // Disable autoplay plugin if not enabled
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Disable autoplay on desktop
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setAutoplayEnabled(window.innerWidth < 1024); // Disable autoplay for desktop (lg breakpoint)
      };

      handleResize(); // Check on initial render
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="my-12 px-4">
      {/* Add animation to the title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        My Journey
      </motion.h2>

      {/* Embla carousel container */}
      <motion.div
        className="overflow-hidden rounded-xl"
        ref={emblaRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex">
          {sliderImages.map((src, index) => (
            <motion.div
              key={index}
              className="flex-[0_0_100%] px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{
                scale: index === selectedIndex ? 1 : 0.9,
                opacity: index === selectedIndex ? 1 : 0.5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Image
                src={src}
                alt={`Journey image ${index + 1}`}
                width={1920} // Ensure high resolution
                height={1080} // Maintain aspect ratio
                className="rounded-lg object-contain shadow-md w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]" // Use responsive heights
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Pagination dots with animation */}
      <div className="flex justify-center gap-2 mt-4">
        {sliderImages.map((_, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            <Button
              className={`w-3 h-3 rounded-full ${
                index === selectedIndex
                  ? "bg-gray-800"
                  : "bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 hover:bg-gray-300"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}