"use client";

import React, { useState, useEffect, CSSProperties } from "react";

const ScrollEffect = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0); // Initialize with 0 instead of window.innerHeight

  // Update scroll position when user scrolls and track viewport size
  useEffect(() => {
    // Set mounted state and initialize viewport height
    setViewportHeight(window.innerHeight);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Add extra space to allow scrolling
    document.body.style.height = "3000px";

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Sidebar width
  const sidebarWidth = 300;

  // Calculate the max scroll value where yellow completely covers the screen
  // When the top of the yellow div reaches 0, it will fully cover the viewport
  // Initial position is (50% - 50vh) + 100vh, so we need to scroll 50% + 50vh to get it to 0
  const maxScrollEffect = viewportHeight; // This is the amount needed to bring yellow to top

  // Limit the scroll effect once we reach maxScrollEffect
  const effectiveScroll = Math.min(scrollPosition * 0.5, maxScrollEffect);

  // Calculate the positions based on scroll
  const blueBoxStyle: CSSProperties = {
    position: "fixed",
    top: `calc(50% - 50vh - ${effectiveScroll}px)`, // Move up as scroll increases
    left: "0",
    width: `${sidebarWidth}px`,
    height: "100vh", // Full viewport height
    backgroundColor: "black",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "top 0.1s ease-out", // Smoother movement
    zIndex: 2, // Ensure blue box is above yellow
  };

  // Yellow box positioned directly below blue box
  const yellowBoxStyle: CSSProperties = {
    position: "fixed",
    top: `calc(50% - 50vh - ${effectiveScroll}px + 100vh)`, // Position below blue box
    left: "0",
    width: `${sidebarWidth}px`,
    height: "100vh", // Full viewport height
    backgroundColor: "gray",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "top 0.1s ease-out", // Smoother movement
    zIndex: 1,
  };

  // The text styles
  const textStyle: CSSProperties = {
    position: "absolute",
    fontSize: "24px",
    fontWeight: "bold",
    transition: "transform 0.1s ease-out", // Smoother movement
    textAlign: "center",
    width: `${sidebarWidth * 0.8}px`, // Keep text within sidebar width
  };

  const redTextStyle = {
    ...textStyle,
    color: "white",
    transform: `translateY(${effectiveScroll}px)`, // Move down as scroll increases
  };

  const greenTextStyle = {
    ...textStyle,
    color: "black",
    // Need to offset to align with red text
    transform: `translateY(calc(${effectiveScroll}px - 100vh))`,
  };

  return (
    <div className="container">
      {/* Blue box with red text */}
      <div style={blueBoxStyle}>
        <div style={redTextStyle}>SCROLL TO HIDE ME</div>
      </div>

      {/* Yellow box with green text */}
      <div style={yellowBoxStyle}>
        <div style={greenTextStyle}>SCROLL TO HIDE ME</div>
      </div>

      <div
        className="instructions"
        style={{
          position: "fixed",
          top: "20px",
          left: `${sidebarWidth + 20}px`, // Position instructions outside the sidebar
          padding: "10px",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "white",
          borderRadius: "5px",
          zIndex: 3,
        }}
      >
        Scroll down to see the effect
      </div>
    </div>
  );
};

export default ScrollEffect;
