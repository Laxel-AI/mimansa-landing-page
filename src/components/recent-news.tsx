"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const newsItems = [
  {
    id: 1,
    type: "THE MIMANSA PODCAST",
    title: "How a New Administration's Policy Playbook May Impact Businesses",
    description:
      "A discussion on the economic and regulatory implications of recent policy shifts.",
    image:
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/insights/policy-impact",
    index: "1 of 5",
  },
  {
    id: 2,
    type: "MIMANSA RESOURCES",
    title: "Global Impact Analysis: Navigating Cross-Border Regulation",
    description:
      "Key strategies for multinational corporations facing evolving regulatory challenges.",
    image:
      "https://images.unsplash.com/photo-1661956602139-ec64991b8b16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80",
    link: "/insights/global-regulation",
    index: "2 of 5",
  },
  {
    id: 3,
    type: "CLIENT ALERT",
    title: "Supreme Court Decision Reshapes Data Privacy Landscape",
    description:
      "Analysis of recent ruling and implications for technology companies and data controllers.",
    image:
      "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    link: "/insights/privacy-ruling",
    index: "3 of 5",
  },
  {
    id: 4,
    type: "WEBINAR",
    title: "Emerging Trends in Corporate Sustainability Reporting",
    description:
      "Expert guidance on compliance with new ESG disclosure requirements.",
    image:
      "https://images.unsplash.com/photo-1541560584753-cefb2f1887cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80",
    link: "/insights/esg-reporting",
    index: "4 of 5",
  },
  {
    id: 5,
    type: "CASE STUDY",
    title: "Landmark Merger: Navigating Regulatory Hurdles in Fintech",
    description:
      "How our team helped secure approval for a complex cross-border acquisition.",
    image:
      "https://images.unsplash.com/photo-1550565118-3a14e8d0386f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/insights/fintech-merger",
    index: "5 of 5",
  },
];

export function RecentNews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxVisibleItems = 1;
  const slideRef = useRef<HTMLDivElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? newsItems.length - maxVisibleItems : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === newsItems.length - maxVisibleItems ? 0 : prev + 1
    );
  };

  return (
    <section ref={ref} className="py-24 px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={cn(
            "mb-12 transition-all duration-700 transform flex justify-between items-center",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair mb-4">Latest</h2>
            <p className="text-xl italic font-light">from Mimansa</p>
          </div>

          <div className="hidden md:flex space-x-4">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div ref={slideRef} className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {newsItems.map((item) => (
              <div key={item.id} className="w-full flex-shrink-0">
                <div
                  className={cn(
                    "grid grid-cols-1 lg:grid-cols-5 gap-0 lg:gap-8 h-full transition-all duration-700 transform shadow-md",
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  )}
                >
                  <div className="lg:col-span-3 relative h-[300px] lg:h-[500px] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-center bg-white">
                    <div className="text-red-500 uppercase text-sm font-medium tracking-wider mb-3">
                      {item.type}
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-playfair mb-6 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-10 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <Link
                        href={item.link}
                        className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>

                      <span className="text-gray-400 text-sm">
                        {item.index}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center lg:hidden space-x-4">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
