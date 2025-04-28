"use client";

import { useEffect, useRef, useState } from "react";
import SidebarNavigation from "./sidenav";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export function Sidebar() {
  // Add state to track screen size and mobile menu visibility
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isRootPage = pathname === "/";

  // Use refs instead of state for maximum performance - avoid React's rendering cycle
  const scrollRef = useRef(0);
  const effectiveScrollRef = useRef(0);
  const viewportHeightRef = useRef(
    typeof window !== "undefined" ? window.innerHeight : 0
  );
  const rafRef = useRef<number | null>(null);
  const blueBoxRef = useRef<HTMLDivElement | null>(null);
  const yellowBoxRef = useRef<HTMLDivElement | null>(null);
  const redTextRef = useRef<HTMLDivElement | null>(null);
  const greenTextRef = useRef<HTMLDivElement | null>(null);
  const lastTimeRef = useRef(0);
  const frameRateRef = useRef(0);

  // Track if component is mounted to safely use browser APIs

  // Sidebar width
  const sidebarWidth = 260;
  console.log("viewport", viewportHeightRef.current);
  // Set up direct DOM manipulation for maximum performance
  useEffect(() => {
    // Check for mobile on initial render
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // 768px is a common breakpoint for mobile
      viewportHeightRef.current = window.innerHeight;
    };

    // Run check on mount
    checkMobile();

    // Only add these effects if not on mobile
    if (!isMobile) {
      // Add extra space to allow scrolling
      document.body.style.maxHeight = "3000px";

      // Pre-calculated transform strings for better performance
      const transformBase1 = "translateY(calc(-50vh - ";
      const transformBase2 = "px))";
      const transformBase3 = "translateY(calc(-50vh - ";
      const transformBase4 = "px + 100vh))";
      const transformBase5 = "translateY(";
      const transformBase6 = "px)";
      const transformBase7 = "translateY(calc(";
      const transformBase8 = "px - 100vh))";

      // High-performance scroll handler - bypasses React rendering entirely
      const updateElementPositions = (timestamp: number) => {
        // Calculate FPS for performance monitoring
        if (lastTimeRef.current) {
          frameRateRef.current = 1000 / (timestamp - lastTimeRef.current);
        }
        lastTimeRef.current = timestamp;

        // Use newer performance.now() instead of scrollY for more accurate timing
        scrollRef.current = window.scrollY;

        // Calculate the max scroll value where yellow completely covers the screen
        const maxScrollEffect = viewportHeightRef.current;

        // Direct calculation without setState - use ~~ for faster integer conversion
        effectiveScrollRef.current = Math.min(
          scrollRef.current,
          maxScrollEffect
        );

        // Cache DOM references outside the condition checks for better performance
        const blueBox = blueBoxRef.current;
        const yellowBox = yellowBoxRef.current;
        const redText = redTextRef.current;
        const greenText = greenTextRef.current;
        const effectiveScroll = effectiveScrollRef.current;

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

      // Start animation frame loop - much more efficient than scroll listener
      rafRef.current = requestAnimationFrame(updateElementPositions);
    }

    // Handle resize - update viewport height reference and check device type
    const handleResize = () => {
      checkMobile();
    };

    // Set up event listeners with fastest possible options
    window.addEventListener("resize", handleResize, { passive: true });

    // Use passive: true for all event listeners to indicate they won't call preventDefault()
    document.addEventListener("scroll", () => {}, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("scroll", () => {});
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isMobile]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Mobile sidebar toggle button
  const MobileSidebarButton = () => (
    <button
      onClick={toggleMobileMenu}
      className="fixed top-1.5 left-4 z-50 bg-amber-600 text-white p-3 rounded-full shadow-lg md:hidden"
      aria-label="Toggle Sidebar"
    >
      {mobileMenuOpen ? <X size={12} /> : <Menu size={12} />}
    </button>
  );

  // Mobile sidebar popup
  const MobileSidebarMenu = () => (
    <div
      className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out md:hidden ${
        mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`flex flex-col items-center justify-center h-full transition-all duration-300 ${
          mobileMenuOpen ? "translate-y-0" : "translate-y-10"
        }`}
      >
        <div className="p-8 w-full max-w-sm">
          <div className="mb-8">
            <h1 className="text-5xl font-playfair text-white mb-4">MIMANSA</h1>
          </div>
          <div className="py-4">
            <SidebarNavigation />
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop sidebar component with animation
  const DesktopSidebar = () => (
    <div className="container relative hidden md:block " style={{ zIndex: 5 }}>
      {/* Blue box container - lower z-index than hero */}
      <div
        ref={blueBoxRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "0",
          width: `${sidebarWidth}px`,
          height: "100vh",
          backgroundColor: "transparent",
          overflowY: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          willChange: "transform",
          zIndex: 5, // Lower than hero (which is 10)
          transform: "translateY(-50vh)",
          backfaceVisibility: "hidden",
          perspective: 1000,
          WebkitBackfaceVisibility: "hidden",
          WebkitPerspective: 1000,
        }}
      >
        {/* Red text overlay - higher z-index to appear above hero */}
        <div
          ref={redTextRef}
          style={{
            position: "absolute",
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            width: `${sidebarWidth * 0.8}px`,
            color: `${isRootPage ? "white" : "black"}`,
            willChange: "transform",
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            zIndex: 15, // Higher than hero's z-index of 10
          }}
        >
          <SidebarNavigation />
        </div>
      </div>

      {/* Yellow box container - lower z-index than hero */}
      <div
        ref={yellowBoxRef}
        style={{
          position: "fixed",
          top: "50%",
          left: "0",
          width: `${sidebarWidth}px`,
          height: "100vh",
          backgroundColor: "transparent",
          overflowY: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          willChange: "transform",
          zIndex: 5, // Lower than hero (which is 10)
          transform: "translateY(calc(-50vh + 100vh))",
          backfaceVisibility: "hidden",
          perspective: 1000,
          WebkitBackfaceVisibility: "hidden",
          WebkitPerspective: 1000,
        }}
      >
        {/* Green text overlay - higher z-index to appear above hero */}
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
            zIndex: 15, // Higher than hero's z-index of 10
          }}
        >
          <SidebarNavigation />
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Only show mobile components on mobile */}
      {isMobile && (
        <>
          <MobileSidebarButton />
          <MobileSidebarMenu />
        </>
      )}

      {/* Always render desktop sidebar - it will be hidden on mobile with CSS */}
      <DesktopSidebar />
    </>
  );
}
