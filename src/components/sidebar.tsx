"use client";

import { useEffect, useRef, useState } from "react";
import SidebarNavigation from "./sidenav";

export function Sidebar() {
  // Use refs instead of state for maximum performance - avoid React's rendering cycle
  const scrollRef = useRef(0);
  const effectiveScrollRef = useRef(0);
  const viewportHeightRef = useRef(0); // Initialize with 0 instead of window.innerHeight
  const rafRef = useRef<number | null>(null);
  const blueBoxRef = useRef<HTMLDivElement | null>(null);
  const yellowBoxRef = useRef<HTMLDivElement | null>(null);
  const redTextRef = useRef<HTMLDivElement | null>(null);
  const greenTextRef = useRef<HTMLDivElement | null>(null);
  const lastTimeRef = useRef(0);
  const frameRateRef = useRef(0);

  // Track if component is mounted to safely use browser APIs
  const [isMounted, setIsMounted] = useState(false);

  // Sidebar width
  const sidebarWidth = 250;

  // Set up direct DOM manipulation for maximum performance
  useEffect(() => {
    // Set mounted state
    setIsMounted(true);

    // Initialize viewport height now that we're in the browser
    viewportHeightRef.current = window.innerHeight;

    // Add extra space to allow scrolling
    document.body.style.height = "3000px";

    // Pre-calculated transform strings for better performance
    const transformBase1 = "translateY(calc(-50vh - ";
    const transformBase2 = "px))";
    const transformBase3 = "translateY(calc(-50vh - ";
    const transformBase4 = "px + 100vh))";
    const transformBase5 = "translateY(";
    const transformBase6 = "px)";
    const transformBase7 = "translateY(calc(";
    const transformBase8 = "px - 100vh))";

    const updateElementPositions = (timestamp: number): void => {
      // Calculate FPS for performance monitoring
      if (lastTimeRef.current) {
        frameRateRef.current = 1000 / (timestamp - lastTimeRef.current);
      }
      lastTimeRef.current = timestamp;

      // Use newer performance.now() instead of scrollY for more accurate timing
      scrollRef.current = window.scrollY;

      // Calculate the max scroll value where yellow completely covers the screen
      const maxScrollEffect: number = viewportHeightRef.current;

      // Direct calculation without setState - use ~~ for faster integer conversion
      effectiveScrollRef.current = Math.min(scrollRef.current, maxScrollEffect);

      // Cache DOM references outside the condition checks for better performance
      const blueBox: HTMLDivElement | null = blueBoxRef.current;
      const yellowBox: HTMLDivElement | null = yellowBoxRef.current;
      const redText: HTMLDivElement | null = redTextRef.current;
      const greenText: HTMLDivElement | null = greenTextRef.current;
      const effectiveScroll: number = effectiveScrollRef.current;

      // Use style.transform with concatenated strings instead of template literals for better performance
      // Direct DOM manipulation for maximum performance
      if (blueBox) {
        blueBox.style.transform =
          transformBase1 + effectiveScroll + transformBase2;
      }

      if (yellowBox) {
        yellowBox.style.transform =
          transformBase3 + effectiveScroll + transformBase4;
      }

      if (redText) {
        redText.style.transform =
          transformBase5 + effectiveScroll + transformBase6;
      }

      if (greenText) {
        greenText.style.transform =
          transformBase7 + effectiveScroll + transformBase8;
      }

      // Schedule next frame with high priority
      rafRef.current = requestAnimationFrame(updateElementPositions);
    };

    // Handle resize - update viewport height reference
    const handleResize = () => {
      viewportHeightRef.current = window.innerHeight;
    };

    // Set up event listeners with fastest possible options
    window.addEventListener("resize", handleResize, { passive: true });

    // Use passive: true for all event listeners to indicate they won't call preventDefault()
    document.addEventListener("scroll", () => {}, { passive: true });

    // Start animation frame loop - much more efficient than scroll listener
    rafRef.current = requestAnimationFrame(updateElementPositions);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", () => {});
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []); // Empty dependency array means this effect runs once on mount

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container">
      <div
        ref={blueBoxRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "0",
          width: `${sidebarWidth}px`,
          height: "100vh",
          backgroundColor: "transparent",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          willChange: "transform",
          zIndex: 2,
          transform: "translateY(-50vh)",
          backfaceVisibility: "hidden",
          perspective: 1000,
          WebkitBackfaceVisibility: "hidden",
          WebkitPerspective: 1000,
        }}
      >
        <div
          ref={redTextRef}
          style={{
            position: "absolute",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            width: `${sidebarWidth * 0.8}px`,
            color: "white",
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <SidebarNavigation />
        </div>
      </div>

      <div
        ref={yellowBoxRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "0",
          width: `${sidebarWidth}px`,
          height: "100vh",
          backgroundColor: "rgb(235,235,235)",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          willChange: "transform",
          zIndex: 1,
          transform: "translateY(calc(-50vh + 100vh))",
          backfaceVisibility: "hidden",
          perspective: 1000,
          WebkitBackfaceVisibility: "hidden",
          WebkitPerspective: 1000,
        }}
      >
        <div
          ref={greenTextRef}
          style={{
            position: "absolute",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            width: `${sidebarWidth * 0.8}px`,
            color: "black",
            willChange: "transform",
            transform: "translateY(-100vh)",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <SidebarNavigation />
        </div>
      </div>

      <div
        className="instructions"
        style={{
          position: "fixed",
          top: "20px",
          left: `${sidebarWidth + 20}px`,
          padding: "10px",
          backgroundColor: "transparent",
          color: "white",
          borderRadius: "5px",
          zIndex: 3,
        }}
      >
        Scroll down to see the effect
      </div>
    </div>
  );
}
