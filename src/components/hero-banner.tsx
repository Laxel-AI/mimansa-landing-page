"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function HeroBanner() {
  const textRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Subtle parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = window.scrollY;
      const containerRect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Only apply parallax when banner is in view
      if (containerRect.bottom > 0 && containerRect.top < viewportHeight) {
        // Calculate how far through the section we've scrolled (0 to 1)
        const scrollPercentage = Math.min(
          scrollPosition / (containerRect.height * 0.8),
          1
        );

        // Slight movement for text
        if (textRef.current) {
          const translateY = scrollPercentage * 40;
          textRef.current.style.transform = `translateY(${translateY}px)`;
          textRef.current.style.opacity = `${1 - scrollPercentage * 0.6}`;
        }

        // Move announcement box in opposite direction (slightly)
        if (announcementRef.current) {
          const translateY = scrollPercentage * 20;
          announcementRef.current.style.transform = `translateY(${translateY}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={containerRef}
      className="hero-banner relative w-screen -ml-64 h-screen max-h-[800px] overflow-hidden"
    >
      {/* Hero Image - Full Width (extends left to cover sidebar area) */}
      <div className="absolute inset-0 z-1">
        <Image
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Legal architecture"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      </div>

      {/* Hero Content positioned correctly (not underneath sidebar) */}
      <div className="absolute inset-0 z-2 flex flex-col justify-center px-6 lg:px-16 ml-64">
        <div
          ref={textRef}
          className="max-w-3xl text-white transition-all duration-1000 ease-out"
        >
          <h1 className="font-playfair text-5xl sm:text-6xl lg:text-7xl mb-8 leading-tight tracking-tight">
            Expertise.
            <br />
            Innovation.
            <br />
            Results.
          </h1>

          <div
            ref={announcementRef}
            className="mt-8 lg:mt-12 px-6 py-8 bg-amber-600/90 backdrop-blur-sm max-w-xl transition-all duration-1000 ease-out"
          >
            <h2 className="text-2xl font-medium mb-4">ANNOUNCEMENTS</h2>
            <p className="text-xl font-playfair">
              Mimansa Law Represents Supreme Ventures in Their ₹5.7 Billion
              Acquisition of NextGen Financial Services
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
