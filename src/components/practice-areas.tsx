"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  {
    id: 1,
    title: "Corporate Law",
    description:
      "Strategic counsel for mergers, acquisitions, corporate governance, and business transactions across industries.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    link: "/services/corporate",
  },
  {
    id: 2,
    title: "Litigation",
    description:
      "Skilled representation in complex commercial disputes, arbitration, and regulatory investigations with proven track records.",
    image:
      "https://images.unsplash.com/photo-1589391886645-d51c27ae0a06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/services/litigation",
  },
  {
    id: 3,
    title: "Regulatory Compliance",
    description:
      "Navigating complex regulatory frameworks across sectors and jurisdictions to minimize risk and ensure operational continuity.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/services/regulatory",
  },
  {
    id: 4,
    title: "Intellectual Property",
    description:
      "Protection and enforcement of valuable IP assets including patents, trademarks, and copyrights across global markets.",
    image:
      "https://images.unsplash.com/photo-1532618500676-2e0cbf7ba8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    link: "/services/intellectual-property",
  },
];

export function PracticeAreas() {
  //   const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  //   const handleArrowClick = (direction: "prev" | "next") => {
  //     if (direction === "prev") {
  //       setActiveIndex((prev) =>
  //         prev === 0 ? practiceAreas.length - 1 : prev - 1
  //       );
  //     } else {
  //       setActiveIndex((prev) =>
  //         prev === practiceAreas.length - 1 ? 0 : prev + 1
  //       );
  //     }
  //   };

  // Very subtle parallax effect for cards
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (containerRect.top < windowHeight && containerRect.bottom > 0) {
          // Calculate how far through the section we've scrolled (0 to 1)
          const scrollProgress = Math.min(
            Math.max(
              0,
              (windowHeight - containerRect.top) /
                (windowHeight + containerRect.height)
            ),
            1
          );

          cardsRef.current.forEach((card, index) => {
            if (card) {
              // Much more subtle movement (5-10px max)
              const direction = index % 2 === 0 ? -1 : 1;
              const translateY = scrollProgress * 8 * direction; // Reduced from 30 to 8

              // Apply very subtle transform with smooth transition
              card.style.transform = `translateY(${translateY}px)`;
              card.style.transition = "transform 0.8s ease-out";
            }
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="bg-gray-50 py-24 px-6 lg:px-24 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto relative">
        <div
          className={cn(
            "mb-16 transition-all duration-700 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-4xl md:text-5xl font-playfair mb-6">
            Key Practice Areas
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Our multidisciplinary teams deliver tailored legal solutions across
            core practice areas, with deep industry knowledge and strategic
            insight.
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {practiceAreas.map((area, index) => (
            <div
              key={area.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className={cn(
                "practice-card bg-white flex flex-col h-[26rem] border border-gray-200 shadow-sm hover:shadow-md hover:translate-y-[-5px] transition-all duration-300 group",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20",
                inView && {
                  "transition-delay-0": index === 0,
                  "transition-delay-150": index === 1,
                  "transition-delay-300": index === 2,
                  "transition-delay-450": index === 3,
                }
              )}
              style={{
                transitionDelay: inView ? `${index * 150}ms` : "0ms",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{area.description}</p>
                <Link
                  href={area.link}
                  className="inline-flex items-center text-amber-600 font-medium group-hover:text-amber-700"
                >
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="rounded-full px-8 py-6 text-lg border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
          >
            <Link href="/services-and-industries">View All Practice Areas</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
