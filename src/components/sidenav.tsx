import React, { useState } from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

// Main Navigation Component
const SidebarNavigation = ({}) => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  // Navigation items with subitems
  const navItems = [
    {
      id: "people",
      label: "PEOPLE",
      link: "/people",
      subItems: [
        { label: "Leadership", link: "/people/leadership" },
        { label: "Consultants", link: "/people/consultants" },
        { label: "Join Our Team", link: "/people/careers", external: true },
      ],
    },
    {
      id: "services",
      label: "SERVICES AND INDUSTRIES",
      link: "/services",
      subItems: [
        { label: "Strategy", link: "/services/strategy" },
        { label: "Technology", link: "/services/technology" },
        { label: "Finance", link: "/services/finance" },
        { label: "Healthcare", link: "/services/healthcare" },
      ],
    },
    {
      id: "insights",
      label: "INSIGHTS",
      link: "/insights",
      subItems: [
        { label: "Research", link: "/insights/research" },
        { label: "Blog", link: "/insights/blog" },
        { label: "Case Studies", link: "/insights/case-studies" },
      ],
    },
    {
      id: "story",
      label: "OUR STORY",
      link: "/our-story",
      subItems: [
        { label: "History", link: "/our-story/history" },
        { label: "Values", link: "/our-story/values" },
        { label: "Contact", link: "/our-story/contact" },
      ],
    },
  ];

  // Handle mouse events
  const handleMouseEnter = (itemId: string) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleClick = (itemId: string) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Logo */}
      <div className="mb-12">
        <h1
          className="font-serif text-3xl font-bold tracking-tight"
          style={{
            fontFamily: '"Playfair Display", serif',
          }}
        >
          MIMANSA
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-8 w-full">
        {navItems.map((item) => (
          <div key={item.id} className="flex flex-col">
            <div className="relative">
              {/* Active indicator */}
              {(activeItem === item.id || hoveredItem === item.id) && (
                <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-5 transition-all duration-300 ease-in-out" />
              )}

              {/* Main menu item */}
              <button
                onClick={() => handleClick(item.id)}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={handleMouseLeave}
                className="flex items-center justify-between w-full group mb-2"
              >
                <span
                  className="text-sm font-medium tracking-wide transition-all duration-200"
                  style={{
                    opacity:
                      activeItem === item.id || hoveredItem === item.id
                        ? 1
                        : 0.8,
                    letterSpacing: "0.1em",
                  }}
                >
                  {item.label}
                </span>
                <ChevronRight
                  size={14}
                  style={{
                    opacity: 0.6,
                    transform:
                      activeItem === item.id ? "rotate(90deg)" : "rotate(0deg)",
                    transition: "all 0.2s ease",
                  }}
                />
              </button>
            </div>

            {/* Separator line */}
            <div
              className="w-full h-px mt-1 mb-2 transition-all duration-300 ease-in-out"
              style={{
                opacity: activeItem === item.id ? 0.2 : 0,
                transform: `scaleX(${activeItem === item.id ? 1 : 0})`,
                transformOrigin: "left",
              }}
            />

            {/* Dropdown subitems */}
            <div
              className="pl-4 overflow-hidden transition-all duration-300 ease-in-out"
              style={{
                maxHeight:
                  activeItem === item.id
                    ? `${item.subItems.length * 2.5}rem`
                    : "0",
                opacity: activeItem === item.id ? 1 : 0,
              }}
            >
              {item.subItems.map((subItem, idx) => (
                <a
                  key={idx}
                  href={subItem.link}
                  target={subItem.external ? "_blank" : "_self"}
                  rel={subItem.external ? "noopener noreferrer" : ""}
                  className="flex items-center py-2 group"
                >
                  <span
                    className="text-xs tracking-wide transition-all duration-200 group-hover:translate-x-1"
                    style={{
                      opacity: 0.7,
                      fontWeight: 400,
                    }}
                  >
                    {subItem.label}
                  </span>
                  {subItem.external && (
                    <ExternalLink size={10} className="ml-1" />
                  )}
                </a>
              ))}
            </div>
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
