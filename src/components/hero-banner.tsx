"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function HeroBanner() {
  const textRef = useRef<HTMLDivElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const showAnnouncement = true;

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
      className="hero-banner relative h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-screen  overflow-hidden w-full lg:w-screen lg:-ml-64"
    >
      {/* Hero Image */}
      <div className="absolute inset-0 z-1">
        <Image
          src="/blind_women.png"
          alt="Lady Justice"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-2 flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-16 lg:ml-64 pt-20 lg:pt-0">
        <div
          ref={textRef}
          className="max-w-3xl text-white transition-all duration-1000 ease-out"
        >
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 sm:mb-6 md:mb-8 leading-tight tracking-tight">
            Expert.
            <br />
            Dedicated.
            <br />
            Partner.
          </h1>

          {showAnnouncement && (
            <div
              ref={announcementRef}
              className="mt-8 transition-all duration-500 ease-out max-w-2xl"
            >
              <div className="group block">
                <div className="bg-white/10 backdrop-blur-lg border-l-4 border-amber-600 pl-4 pr-6 py-4 hover:bg-white/15 transition-all duration-300">
                  <div className="flex justify-between items-start mb-1">
                    <div className="flex items-center">
                      <span className="text-xs font-semibold tracking-wider text-amber-400 uppercase mr-2">
                        Supreme Court
                      </span>
                      <span className="text-xs text-white/70">
                        2025 INSC 571
                      </span>
                    </div>
                  </div>

                  <h3 className="text-white text-base sm:text-lg font-medium leading-tight mb-1.5">
                    Argument of Civil Dispute is no premise to Quash FIR when
                    Financial Fraud is manifest
                  </h3>

                  <p className="text-white/80 text-sm line-clamp-1 sm:line-clamp-2">
                    In Dinesh Sharma v. Emgee Cables, SC held that financial
                    frauds need deeper scrutiny and cannot be brushed off as
                    civil disputes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
