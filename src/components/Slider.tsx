"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Autoplay from "embla-carousel-autoplay";
import { SliderImages } from "@/constants/Index";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ sliderImages = SliderImages }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Autoplay plugin setup
  const autoplay = Autoplay({ delay: 3500, stopOnInteraction: true });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="my-20 px-4 max-w-6xl mx-auto">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-transparent inline-block">
          My Journey
        </h2>
        <div className="w-24 h-1 bg-violet-500 mx-auto rounded-full"></div>
      </motion.div>

      {/* Embla carousel container */}
      <div className="relative group">
        <motion.div
          className="overflow-hidden rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] bg-gray-50 dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800"
          ref={emblaRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex touch-pan-y">
            {sliderImages.map((src, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 relative px-2 sm:px-6 py-6 sm:py-8 flex items-center justify-center"
              >
                <motion.div
                  animate={{
                    scale: index === selectedIndex ? 1 : 0.9,
                    opacity: index === selectedIndex ? 1 : 0.4,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative w-full max-w-4xl h-[300px] sm:h-[400px] md:h-[500px]"
                >
                  <Image
                    src={src}
                    alt={`Journey snapshot ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
                    className="rounded-xl object-contain drop-shadow-lg"
                    priority={index === 0}
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 sm:-left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-violet-50 dark:hover:bg-gray-700 hover:text-violet-500 z-10 border border-gray-200 dark:border-gray-700"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 sm:-right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 shadow-lg text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-violet-50 dark:hover:bg-gray-700 hover:text-violet-500 z-10 border border-gray-200 dark:border-gray-700"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center gap-3 mt-8 flex-wrap max-w-lg mx-auto">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "bg-violet-500 w-8"
                : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}