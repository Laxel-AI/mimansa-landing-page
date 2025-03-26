import React from "react";

// Main Navigation Component
const SidebarNavigation = () => {
  // Navigation items
  const navItems = [
    {
      id: "people",
      label: "PEOPLE",
      link: "/people",
    },
    {
      id: "services",
      label: "SERVICES AND INDUSTRIES",
      link: "/services",
    },
    {
      id: "insights",
      label: "INSIGHTS",
      link: "/insights",
    },
    {
      id: "story",
      label: "OUR STORY",
      link: "/our-story",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full">
      {/* Logo */}
      <div className="mb-12 mt-12">
        <h1
          className="font-serif text-4xl font-bold tracking-tight"
          style={{
            fontFamily: '"Playfair Display", serif',
          }}
        >
          <a href="/">MIMANSA</a>
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col items-center space-y-16 w-full">
        {navItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <a
              href={item.link}
              className="flex items-center group transition-all duration-200 hover:translate-x-1"
            >
              <span
                className="text-lg font-medium tracking-wide"
                style={{
                  letterSpacing: "0.1em",
                }}
              >
                {item.label}
              </span>
            </a>
          </div>
        ))}
      </nav>

      {/* Footer section */}
      <div className="mt-auto pt-10">
        <div className="flex items-center space-x-2 opacity-70">
          <div className="w-8 h-8 rounded-full border flex items-center justify-center">
            <span className="text-xs">©</span>
          </div>
          <span className="text-xs">2025 Mimansa Consulting</span>
        </div>
      </div>
    </div>
  );
};

export default SidebarNavigation;
