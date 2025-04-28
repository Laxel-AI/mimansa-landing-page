"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const CrossBorder = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  // Very subtle parallax effect
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current && textRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Only apply effect when element is in viewport
        if (containerRect.top < viewportHeight && containerRect.bottom > 0) {
          // Calculate scroll progress (0 to 1)
          const scrollProgress = Math.min(
            Math.max(
              0,
              (viewportHeight - containerRect.top) /
                (viewportHeight + containerRect.height)
            ),
            1
          );

          // Very subtle movement for text
          if (textRef.current) {
            const translateY = scrollProgress * 12; // Reduced from 30 to 12
            textRef.current.style.transform = `translateY(${translateY}px)`;
            textRef.current.style.transition = "transform 0.6s ease-out";
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={(el) => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-expect-error
        containerRef.current = el;
        inViewRef(el);
      }}
      className="py-24 px-6 lg:px-0 bg-gray-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div
            className={cn(
              "w-full lg:w-1/2 transition-all duration-1000",
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-16"
            )}
          >
            <div className="bg-white p-8 lg:p-16 h-full flex flex-col justify-center">
              <div className="mb-8">
                <span className="text-amber-600 uppercase text-sm font-medium tracking-wider">
                  OUR NETWORK
                </span>
              </div>

              <h2 className="text-3xl lg:text-4xl font-playfair mb-8">
                Pan-India Presence
              </h2>

              <div ref={textRef} className="prose prose-lg text-gray-600 mb-10">
                <p className="mb-6">
                  With offices in Delhi, Noida and Raipur, Mimansa Law Offices
                  works with a network of lawyers across the country to provide
                  seamless legal services throughout India.
                </p>
                <p>
                  Our centralized monitoring structure ensures consistent
                  quality and approach while our widespread presence allows us
                  to leverage local knowledge and expertise for the benefit of
                  our diverse client base.
                </p>
              </div>

              {/* <div className="mt-auto">
                <Link
                  href="/about-us"
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
                >
                  Learn More About Our Approach
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div> */}
            </div>
          </div>

          <div
            className={cn(
              "w-full lg:w-1/2 relative min-h-[300px] lg:min-h-[600px] transition-all duration-1000",
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-16"
            )}
          >
            <Image
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="India map with office locations"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CrossBorder;
