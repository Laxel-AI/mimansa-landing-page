"use client";

import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function CoreValues() {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="w-full bg-white py-24 px-6 lg:px-24">
      <div
        ref={ref}
        className={cn(
          "max-w-4xl mx-auto transition-all duration-1000 transform",
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}
      >
        <h2 className="text-4xl md:text-5xl font-playfair mb-12">
          Dedicated to excellence in legal advocacy and client service across
          borders.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-medium mb-4">OUR APPROACH</h3>
            <p className="text-gray-700 leading-relaxed">
              We approach each client matter with a deep understanding of the
              underlying business objectives. Our attorneys collaborate across
              practice areas and geographies to deliver practical, innovative
              solutions tailored to your specific needs.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">OUR COMMITMENT</h3>
            <p className="text-gray-700 leading-relaxed">
              For over three decades, we have maintained an unwavering
              commitment to legal excellence, ethical practice, and responsive
              service. We measure our success by the success of our clients and
              the strength of our long-term relationships.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
