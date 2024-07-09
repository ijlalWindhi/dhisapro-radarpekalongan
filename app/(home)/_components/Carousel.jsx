"use client";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const slides = [
  "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
  "https://wallpapercave.com/wp/wp3386769.jpg",
  "https://wallpaperaccess.com/full/809523.jpg",
  "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
];

function Caraousel() {
  //   initial state
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(
    slides.slice(activeIndex, activeIndex + 1)
  );

  // handler
  const handleNext = () => {
    if (activeIndex + 1 < slides.length) {
      setActiveIndex(activeIndex + 1);
      setVisibleSlides(slides.slice(activeIndex + 1, activeIndex + 1 * 2));
    } else {
      setActiveIndex(0);
      setVisibleSlides(slides.slice(0, 1));
    }
  };
  const handlePrev = () => {
    if (activeIndex - 1 >= 0) {
      setActiveIndex(activeIndex - 1);
      setVisibleSlides(slides.slice(activeIndex - 1, activeIndex));
    } else {
      setActiveIndex(slides.length - 1);
      setVisibleSlides(slides.slice(slides.length - 1, slides.length));
    }
  };

  return (
    <div className="flex justify-between items-center gap-2 w-full">
      <button
        onClick={handlePrev}
        className="bg-white text-black w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center rounded-full"
        aria-label="Previous Testimoni"
      >
        <FaArrowLeft />
      </button>

      {visibleSlides.map((item) => (
        <div key={item} className="flex items-center justify-center w-full">
          <div className="relative h-32 md:h-72 w-full object-cover">
            <Image
              src={item}
              alt={item}
              fill
              objectFit="cover"
              objectPosition="center"
              placeholder="blur"
              loading="eager"
              blurDataURL={item}
            />
          </div>
        </div>
      ))}

      <button
        onClick={handleNext}
        className="bg-white text-black w-5 h-5 sm:w-10 sm:h-10 flex items-center justify-center rounded-full"
        aria-label="Next Carousel"
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

export default Caraousel;
