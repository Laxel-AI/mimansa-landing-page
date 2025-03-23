"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Small offset to prevent layout jumps with fixed elements
    // const scrollOffset = 0.05;

    // Track scroll progress
    let current = 0;
    let target = 0;
    const ease = 0.075; // Adjust for smoother/faster effect

    // Initialize smooth scrolling
    function init() {
      document.body.style.height = `${
        document.querySelector("main")?.scrollHeight
      }px`;

      // Set up the transform on the main content container
      if (document.querySelector("main")) {
        document.querySelector("main")!.style.position = "fixed";
        document.querySelector("main")!.style.top = "0";
        document.querySelector("main")!.style.left = "0";
        document.querySelector("main")!.style.width = "100%";
      }

      // Start the animation
      requestAnimationFrame(smoothScroll);
    }

    // Smooth scroll animation
    function smoothScroll() {
      // Get the target scroll position
      target = window.scrollY;

      // Lerp - linear interpolation for smooth scrolling and rounded to fix floating point numbers
      current = parseFloat((current + (target - current) * ease).toFixed(2));

      // Set the transform to move the content
      if (document.querySelector("main")) {
        document.querySelector(
          "main"
        )!.style.transform = `translateY(${-current}px)`;
      }

      // Call the animation again
      requestAnimationFrame(smoothScroll);
    }

    // Initialize smooth scrolling
    init();

    // Clean up
    return () => {
      if (document.querySelector("main")) {
        document.querySelector("main")!.style.position = "";
        document.querySelector("main")!.style.top = "";
        document.querySelector("main")!.style.left = "";
        document.querySelector("main")!.style.width = "";
        document.querySelector("main")!.style.transform = "";
      }
      document.body.style.height = "";
    };
  }, []);

  return null;
}
