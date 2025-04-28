"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const practiceAreas = [
  {
    id: 1,
    title: "Dispute Resolution",
    description:
      "Strategic representation in complex disputes, arbitration, and alternative dispute resolution with proven track records across judicial forums.",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    link: "/services/dispute-resolution",
  },
  {
    id: 2,
    title: "Taxation",
    description:
      "Comprehensive tax advisory services combining legal expertise and financial acumen across direct and indirect taxation frameworks.",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
    link: "/services/taxation",
  },
  {
    id: 3,
    title: "Insolvency & Restructuring",
    description:
      "Strategic solutions for businesses navigating bankruptcy and insolvency challenges under the Indian Insolvency & Bankruptcy Code.",
    image:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/services/insolvency-restructuring",
  },
  {
    id: 4,
    title: "Real Estate",
    description:
      "Legal expertise for landowners, developers, construction companies, investors, lenders, corporates, and HNI buyers across real estate transactions.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    link: "/services/real-estate",
  },
];

export function PracticeAreas() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 overflow-hidden">
      <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className={cn(
            "text-center max-w-3xl mx-auto mb-16 transition-all duration-1000",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-5xl md:text-6xl font-playfair mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-700 to-amber-500">
            Key Practice Areas
          </h2>
          <p className="text-gray-600 text-lg">
            Our multidisciplinary teams deliver tailored legal solutions across
            core practice areas, with deep industry knowledge and strategic
            insight.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {practiceAreas.map((area, index) => (
            <div
              key={area.id}
              className={cn(
                "relative group h-96 rounded-xl overflow-hidden shadow-lg transform transition-all duration-700",
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20",
                hoveredCard === area.id
                  ? "scale-105 z-10 shadow-xl"
                  : "scale-100 z-0"
              )}
              style={{
                transitionDelay: inView ? `${index * 100}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredCard(area.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-1000",
                    hoveredCard === area.id ? "scale-110" : "scale-100"
                  )}
                />
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t transition-opacity duration-500",
                    hoveredCard === area.id
                      ? "from-black/90 via-black/70 to-black/30 opacity-90"
                      : "from-black/80 via-black/60 to-black/30 opacity-75"
                  )}
                />
              </div>

              {/* Content Container */}
              <div className="relative h-full w-full p-8 flex flex-col justify-end">
                <div
                  className={cn(
                    "transition-all duration-500",
                    hoveredCard === area.id
                      ? "transform translate-y-0"
                      : "transform translate-y-4"
                  )}
                >
                  <h3 className="text-3xl font-playfair font-bold text-white mb-4">
                    {area.title}
                  </h3>
                  <p
                    className={cn(
                      "text-white/90 mb-6 transition-all duration-500 line-clamp-3",
                      hoveredCard === area.id ? "opacity-100" : "opacity-70"
                    )}
                  >
                    {area.description}
                  </p>
                  <Link
                    href={area.link}
                    className={cn(
                      "inline-flex items-center text-amber-300 font-medium group transition-all duration-500",
                      hoveredCard === area.id ? "opacity-100" : "opacity-80"
                    )}
                  >
                    <span className="mr-2">Explore Services</span>
                    <ArrowRight
                      className={cn(
                        "h-5 w-5 transition-transform",
                        hoveredCard === area.id ? "transform translate-x-1" : ""
                      )}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "text-center transition-all duration-1000 delay-300",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <Button
            variant="outline"
            className="rounded-full px-10 py-6 text-lg border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white font-medium transition-all duration-300"
          >
            <Link href="/services" className="flex items-center">
              <span>View All Practice Areas</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
