"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { SliderImages } from "@/constants/Index";

type SliderProps = {
  sliderImages?: string[];
};

export default function Slider({ sliderImages = SliderImages }: SliderProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const autoplay = Autoplay({ delay: 3500, stopOnInteraction: true });
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [autoplay]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
    }
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
    }
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) {
      return;
    }

    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) {
      return;
    }

    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="mx-auto my-20 max-w-6xl px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center"
      >
        <h2 className="inline-block bg-gradient-to-r from-violet-400 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
          My Journey
        </h2>
        <div className="mx-auto h-1 w-24 rounded-full bg-violet-500" />
      </motion.div>

      <div className="relative group">
        <motion.div
          className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:border-gray-800 dark:bg-[#1a1a1a]"
          ref={emblaRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex touch-pan-y">
            {sliderImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative flex min-w-0 flex-[0_0_100%] items-center justify-center px-2 py-6 sm:px-6 sm:py-8"
              >
                <motion.div
                  animate={{
                    scale: index === selectedIndex ? 1 : 0.9,
                    opacity: index === selectedIndex ? 1 : 0.4,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="relative h-[300px] w-full max-w-4xl sm:h-[400px] md:h-[500px]"
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

        <button
          onClick={scrollPrev}
          className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 hover:bg-violet-50 hover:text-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:-left-6"
          aria-label="Previous slide"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-800 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 hover:bg-violet-50 hover:text-violet-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 sm:-right-6"
          aria-label="Next slide"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
        {sliderImages.map((_, index) => (
          <button
            key={`pagination-${index}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? "w-8 bg-violet-500"
                : "bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
