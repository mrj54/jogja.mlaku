"use client";

import { useState, useRef, TouchEvent } from "react";

// Festival data array
const festivalData = [
  {
    id: 1,
    title: "PTBY Festival",
    description: "Traditional Javanese ceremony celebrating Prophet Muhammad's birthday with gamelan music and cultural performances.",
    image: "/img/ptby.jpg"
  },
  {
    id: 2,
    title: "CALENDER OF FESTIVALS",
    description: "Annual celebration showcasing contemporary and traditional Javanese arts, music, and dance performances.",
    image: "/img/cof.jpg"
  },
  {
    id: 3,
    title: "SARKEM FEST",
    description: "Evening cultural festival along the famous Malioboro Street featuring local artists and traditional performances.",
    image: "/img/sarkem-fest.jpg"
  },
  {
    id: 4,
    title: "WADITRA FESTIVAL",
    description: "International jazz festival set against the backdrop of the magnificent Prambanan Temple.",
    image: "/img/waditra.jpg"
  },
  {
    id: 5,
    title: "YKC FESTIVAL",
    description: "Spectacular open-air performance of the Ramayana epic through traditional Javanese dance at Prambanan Temple.",
    image: "/img/YKC10K.jpg"
  }
];

export default function Festivals() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const touchStartRef = useRef(0);
  const cardWidth = 280;
  const totalCards = festivalData.length;
  const maxScroll = (totalCards - 1) * cardWidth;
  
  const currentPage = Math.round(scrollPosition / cardWidth);

  const handleTouchStart = (e: TouchEvent) => {
    touchStartRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent) => {
    const touchDiff = touchStartRef.current - e.touches[0].clientX;
    const newPosition = scrollPosition + touchDiff;

    if (newPosition >= 0 && newPosition <= maxScroll) {
      setScrollPosition(newPosition);
    }
  };

  const handleTouchEnd = () => {
    const nearestCard = Math.round(scrollPosition / cardWidth) * cardWidth;
    setScrollPosition(Math.min(Math.max(0, nearestCard), maxScroll));
  };

  const handleDotClick = (index: number) => {
    setScrollPosition(index * cardWidth);
  };

  return (
    <section className="py-8 bg-gradient-to-b from-[#f8fafc] to-[#efefef] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl text-gradient font-playfair mb-4">
            Upcoming Events
          </h2>
          <p className="text-[#46798d] max-w-2xl mx-auto">
            Don't miss out on Yogyakarta's most anticipated cultural events and festivals
          </p>
        </div>
        <div className="relative">
          <div 
            className="relative px-4 overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex gap-6 transition-transform duration-300 ease-out"
              style={{ transform: `translateX(-${scrollPosition}px)` }}
            >
              {festivalData.map((festival) => (
                <div
                  key={festival.id}
                  className="festival-card flex-none w-[280px] h-[360px] relative rounded-[24px] overflow-hidden transition-all duration-300 group card-hover"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  <img
                    src={festival.image}
                    alt={festival.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute bottom-6 left-6 right-6 z-20 transform transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-white text-xl font-playfair mb-3">{festival.title}</h3>
                    <p className="text-gray-200 text-xs mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {festival.description}
                    </p>
                    <button className="glass-effect px-4 py-2 rounded-full text-white text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30">
                      Learn More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Pagination Dots */}
          <div className="flex justify-center items-center gap-3 mt-8">
            {Array.from({ length: totalCards }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === index 
                    ? 'bg-[#9ebecb] w-6' 
                    : 'bg-[#9ebecb]/40 hover:bg-[#9ebecb]/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}