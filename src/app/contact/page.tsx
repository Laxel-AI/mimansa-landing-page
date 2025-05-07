/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export default function Contact() {
  const [formStatus, setFormStatus] = useState("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setFormStatus("success");
      formRef.current?.reset();
    }, 1500);
  };

  const officeLocations = [
    {
      id: 1,
      city: "Delhi",
      address:
        "C-6/50, Block-C6, Safdarjung Development Area, Hauz Khas, New Delhi, Delhi 110016",
      phone: "011 26562650",
      email: "mail@mimansalaw.in",
    },
    {
      id: 2,
      city: "Raipur",
      address: "29, South Avenue, Choubey Colony,Raipur, CG-492001",
      phone: "07714088165/4039165",
      email: "mail@mimansalaw.in",
    },
    {
      id: 3,
      city: "Noida",
      address:
        "C-209, Tower C, 2nd Floor Noida One Building Sector-62, Noida-201301",
      phone: "",
      email: "mail@mimansalaw.in",
    },
  ];

  return (
    <div className="h-full mt-12 bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 py-20 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Our team of legal experts is ready to assist you with your legal
            needs. Reach out to us for a consultation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div ref={ref} className="max-w-7xl mx-auto py-16 px-6 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div
            className={cn(
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-3xl font-playfair mb-8">Get in Touch</h2>

            <div className="mb-12">
              <h3 className="text-xl font-medium mb-6">Our Offices</h3>

              <div className="space-y-8">
                {officeLocations.map((office) => (
                  <div
                    key={office.id}
                    className="border-l-4 border-amber-500 pl-4"
                  >
                    <h4 className="text-lg font-semibold mb-2">
                      {office.city}
                    </h4>
                    <div className="flex items-start mb-2">
                      <MapPin className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center mb-2">
                      <Phone className="h-5 w-5 text-gray-500 mr-3" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-gray-500 mr-3" />
                      <a
                        href={`mailto:${office.email}`}
                        className="text-amber-600 hover:text-amber-700"
                      >
                        {office.email}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* <div>
              <h3 className="text-xl font-medium mb-6">General Inquiries</h3>
              <div className="flex items-center mb-3">
                <Phone className="h-5 w-5 text-gray-500 mr-3" />
                <span className="text-gray-600">+91 22 4512 7888</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-500 mr-3" />
                <a
                  href="mailto:info@mimansalaw.com"
                  className="text-amber-600 hover:text-amber-700"
                >
                  info@mimansalaw.com
                </a>
              </div>
            </div> */}
          </div>

          {/* Contact Form */}
          <div
            className={cn(
              "transition-all duration-700 transform",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              "transition-delay-300"
            )}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="bg-white border border-gray-200 shadow-sm p-8 lg:p-10">
              <h2 className="text-3xl font-playfair mb-8">Send Us a Message</h2>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name*
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name*
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject*
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Message*
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    required
                  ></textarea>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={formStatus === "submitting"}
                    className={cn(
                      "w-full flex items-center justify-center bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 transition-colors duration-300",
                      formStatus === "submitting" &&
                        "opacity-80 cursor-not-allowed"
                    )}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </span>
                    )}
                  </button>

                  {formStatus === "success" && (
                    <p className="mt-4 text-green-600 text-sm font-medium">
                      Your message has been sent successfully. We will get back
                      to you soon.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
