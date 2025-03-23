"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

const resourceCategories = [
  {
    id: 1,
    title: "Industry Insights",
    description:
      "In-depth analysis of industry trends, regulatory developments, and market shifts.",
    link: "/resources/industry-insights",
  },
  {
    id: 2,
    title: "Legal Updates",
    description:
      "Timely briefings on significant legal developments and their implications for business.",
    link: "/resources/legal-updates",
  },
  {
    id: 3,
    title: "Webinars & Events",
    description:
      "Educational sessions and networking opportunities led by our subject matter experts.",
    link: "/resources/webinars-events",
  },
  {
    id: 4,
    title: "Publications",
    description:
      "Articles, white papers, and guides on critical legal and business issues.",
    link: "/resources/publications",
  },
];

export function ResourcesSection() {
  const resourceRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-24 px-6 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div
            className={cn(
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair mb-4">
                STAYING
              </h2>
              <p className="text-2xl italic font-light mb-12">Informed</p>
            </div>

            <div className="bg-amber-400 p-8 lg:p-12">
              <h3 className="text-xl font-semibold uppercase mb-6">
                RESOURCES
              </h3>
              <h4 className="text-2xl lg:text-3xl font-playfair mb-8">
                Mimansa Resources on Trending Topics
              </h4>
              <p className="text-gray-800 mb-8">
                Stay up-to-date on a wide range of regulatory, transactional,
                and litigation issues facing global businesses.
              </p>
              <Link
                href="/resources"
                className="inline-flex items-center text-black font-medium group"
              >
                Browse All Resources
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceCategories.map((category, index) => (
              <div
                key={category.id}
                ref={(el) => {
                  resourceRefs.current[index] = el;
                }}
                className={cn(
                  "bg-white p-6 border border-gray-200 shadow-sm hover:shadow-md hover:translate-y-[-3px] transition-all duration-300",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{
                  transitionDelay: inView ? `${index * 150}ms` : "0ms",
                }}
              >
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <Link
                  href={category.link}
                  className="inline-flex items-center text-amber-600 font-medium hover:text-amber-700 group"
                >
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div
          className={cn(
            "mt-20 text-center transition-all duration-1000 transform",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h3 className="text-2xl font-playfair mb-6">Join Our Newsletter</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Subscribe to receive curated insights, event invitations, and legal
            updates tailored to your interests.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-sm transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
