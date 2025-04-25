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
          Dedicated to delivering practical and customised legal solutions.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-medium mb-4">OUR APPROACH</h3>
            <p className="text-gray-700 leading-relaxed">
              We at Mimansa work with a network of lawyers across the country to
              leverage a pan-India presence while retaining a centralized
              monitoring structure. Our professional training and core values
              enable us to be easily accessible, transparent and deliver
              promptly without compromising on quality.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-medium mb-4">OUR COMMITMENT</h3>
            <p className="text-gray-700 leading-relaxed">
              Since our founding in 2016, we have maintained an unwavering
              commitment to partnering in our clients' progress. Our emphasis on
              quality, detail-oriented work and clarity of communication is core
              to our belief and we strive to achieve it at all times.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
