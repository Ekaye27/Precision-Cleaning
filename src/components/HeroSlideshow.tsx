"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    src: "/images/hero/commercial-office-desks.jpg",
    alt: "Modern commercial office with desks and laptops",
  },
  {
    src: "/images/hero/commercial-interior.jpg",
    alt: "Clean, bright commercial office interior",
  },
  {
    src: "/images/services/residential-cleaning.jpg",
    alt: "Cozy, well-kept smaller home interior",
  },
  {
    src: "/images/services/turnover-cleaning.jpg",
    alt: "Bright, guest-ready studio apartment",
  },
];

export default function HeroSlideshow({ className }: { className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].src}
            alt={slides[index].alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover brightness-95 contrast-105 saturate-110"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
