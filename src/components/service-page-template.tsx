"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface ServicePageProps {
  title: string;
  subtitle?: string;
  headerImage: string;
  description: string;
  keyServices: Array<{
    title: string;
    description: string;
  }>;
  additionalContent?: React.ReactNode;
}

export function ServicePage({
  title,
  subtitle,
  headerImage,
  description,
  keyServices,
  additionalContent,
}: ServicePageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const { ref: contentRef, inView: contentInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: servicesRef, inView: servicesInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <div ref={containerRef} className="flex flex-col min-h-screen">
      {/* Header Section */}
      <section
        ref={headerRef}
        className="relative h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-hidden"
      >
        <div className="absolute inset-0">
          <Image
            src={headerImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
        </div>

        <div
          className={cn(
            "absolute inset-0 flex items-center px-6 lg:px-24 transition-all duration-1000",
            headerInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <div className="max-w-5xl mx-auto text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair mb-4">
              {title}
            </h1>
            {subtitle && (
              <h2 className="text-xl md:text-2xl font-light italic">
                {subtitle}
              </h2>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section
        ref={contentRef}
        className="py-16 md:py-24 px-6 lg:px-24 bg-white"
      >
        <div
          className={cn(
            "max-w-5xl mx-auto transition-all duration-1000",
            contentInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <div className="prose prose-lg max-w-none">
            <p className="text-xl leading-relaxed mb-8 text-gray-700">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section
        ref={servicesRef}
        className="py-16 md:py-24 px-6 lg:px-24 bg-gray-50"
      >
        <div
          className={cn(
            "max-w-5xl mx-auto transition-all duration-1000",
            servicesInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-playfair mb-12">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {keyServices.map((service, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white p-8 shadow-sm border border-gray-100 transition-all duration-500",
                  servicesInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{
                  transitionDelay: servicesInView ? `${index * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Content */}
      {additionalContent && (
        <section className="py-16 md:py-24 px-6 lg:px-24 bg-white">
          <div className="max-w-5xl mx-auto">{additionalContent}</div>
        </section>
      )}
    </div>
  );
}
